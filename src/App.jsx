import { Suspense, useEffect, useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import IssueManagement from './components/issueManagement/IssueManagement'
import Hero from './components/Hero/Hero'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const repoOwner = import.meta.env.VITE_GITHUB_OWNER || 'Nayem7890'
const repoName = import.meta.env.VITE_GITHUB_REPO || 'customer-support'
const repoUrl =
  import.meta.env.VITE_GITHUB_URL ||
  `https://github.com/${repoOwner}/${repoName}`

const pinnedTags = ['React 19', 'Vite', 'Tailwind 4', 'Toastify', 'Open source']

const highlightCards = [
  {
    title: 'Queue health at a glance',
    copy:
      'Monitor the mix of open, in-progress, and resolved tickets so support leads can unblock bottlenecks before service levels slip.',
  },
  {
    title: 'Customer context preserved',
    copy:
      'Each ticket surfaces priority, requester, and submitted date so agents jump straight into the work with full context.',
  },
  {
    title: 'Agent workflow ready',
    copy:
      'Click any ticket to move it into your personal task lane, then mark it done once the customer is happy.',
  },
  {
    title: 'Backend-friendly feed',
    copy:
      'Data ships from a simple JSON source today, but the architecture makes it trivial to sync with REST, GraphQL, or webhook-driven systems later.',
  },
]

const roadmap = [
  {
    label: 'Sprint 01',
    detail: 'Core board + task status',
    status: 'Shipped',
  },
  {
    label: 'Sprint 02',
    detail: 'Live GitHub metrics & hero polish',
    status: 'Now',
  },
  {
    label: 'Sprint 03',
    detail: 'Filters, search, and assignment',
    status: 'Queued',
  },
]

const fetchIssues = async () => {
  const result = await fetch('/tickets.json')
  return result.json()
}

function App() {
  const fetchPromise = fetchIssues()

  const [tasks, setTasks] = useState([])
  const [resolvedTasks, setResolvedTasks] = useState([])
  const [repoMeta, setRepoMeta] = useState({
    stars: null,
    forks: null,
    issues: null,
    updated: '',
  })
  const [isRepoLoading, setIsRepoLoading] = useState(true)
  const [repoError, setRepoError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    const fetchRepoMeta = async () => {
      try {
        setRepoError('')
        const response = await fetch(
          `https://api.github.com/repos/${repoOwner}/${repoName}`,
          { signal: controller.signal },
        )

        if (!response.ok) {
          throw new Error(`GitHub responded with ${response.status}`)
        }

        const payload = await response.json()
        setRepoMeta({
          stars: payload.stargazers_count ?? 0,
          forks: payload.forks_count ?? 0,
          issues:
            payload.open_issues_count ??
            payload.open_issues ??
            payload.issue_count ??
            0,
          updated: payload.pushed_at ?? payload.updated_at ?? '',
        })
      } catch (error) {
        if (error.name === 'AbortError') return
        console.error('[GitHub Meta]', error)
        setRepoError('GitHub stats are unavailable right now.')
      } finally {
        setIsRepoLoading(false)
      }
    }

    fetchRepoMeta()
    return () => controller.abort()
  }, [])

  const handleAddTask = issue => {
    if (!tasks.find(t => t.id === issue.id)) {
      setTasks(prev => [...prev, issue])
      toast.success(`Task "${issue.title}" added to Task Status`)
    }
  }

  const handleComplete = id => {
    const completedTask = tasks.find(task => task.id === id)
    if (completedTask) {
      setTasks(tasks.filter(task => task.id !== id))
      setResolvedTasks(prev => [...prev, completedTask])
      toast(`Task "${completedTask.title}" marked as complete!`)
    }
  }

  return (
    <div className="app-surface">
      <Navbar
        repoUrl={repoUrl}
        stars={repoMeta.stars}
        issues={repoMeta.issues}
        isRepoLoading={isRepoLoading}
      />

      <main className="page-shell">
        <Hero
          repoUrl={repoUrl}
          inProgressCount={tasks.length}
          resolvedCount={resolvedTasks.length}
          stars={repoMeta.stars}
          forks={repoMeta.forks}
          issues={repoMeta.issues}
          lastUpdated={repoMeta.updated}
          isRepoLoading={isRepoLoading}
        />

        <section id="overview" className="pinned-card glass-panel">
          <header className="pinned-card__header">
            <span className="chip chip--primary">Pinned repository</span>
            <span className="chip chip--ghost">MIT License</span>
          </header>
          <h2 className="pinned-card__title">{repoName}</h2>
          <p className="pinned-card__body">
            A modern customer support triage board built with React 19, Vite, and
            the Tailwind 4 + DaisyUI stack. Use it to keep customers informed,
            share status during standups, or showcase how you approach real-world
            support operations.
          </p>

          <div className="topic-grid">
            {pinnedTags.map(tag => (
              <span key={tag} className="topic-chip">
                #{tag}
              </span>
            ))}
          </div>

          <div className="pinned-card__meta">
            <div>
              <p className="meta-label">Stars</p>
              <p className="meta-value">{repoMeta.stars ?? '--'}</p>
            </div>
            <div>
              <p className="meta-label">Forks</p>
              <p className="meta-value">{repoMeta.forks ?? '--'}</p>
            </div>
            <div>
              <p className="meta-label">Open issues</p>
              <p className="meta-value">{repoMeta.issues ?? '--'}</p>
            </div>
          </div>

          {repoError && <p className="repo-error">{repoError}</p>}

          <div className="pinned-card__actions">
            <a
              className="btn primary-btn"
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on GitHub
            </a>
            <a className="btn ghost-btn" href="#tickets">
              Explore demo
            </a>
          </div>
        </section>

        <section id="tickets" className="workspace-grid">
          <div className="workspace-grid__left glass-panel">
            <div className="workspace-grid__left-header">
              <div>
                <p className="chip chip--ghost">Live board</p>
                <h2>Customer tickets</h2>
                <p className="muted">
                  Click a card to push it into your personal status column and
                  keep things moving.
                </p>
              </div>
            </div>

            <Suspense
              fallback={
                <div className="loading-shell">
                  <span className="loading loading-dots loading-lg"></span>
                  <p>Loading triage board...</p>
                </div>
              }
            >
              <IssueManagement
                fetchPromise={fetchPromise}
                onAddTask={handleAddTask}
                resolvedTasks={resolvedTasks}
              />
            </Suspense>
          </div>

          <aside className="workspace-grid__right">
            <div className="task-panel glass-panel">
              <div className="task-panel__header">
                <p className="chip chip--primary">Task status</p>
                <h2>
                  In progress ({tasks.length}) · Resolved ({resolvedTasks.length})
                </h2>
              </div>

              {tasks.length === 0 ? (
                <p className="muted">
                  Select any ticket on the left to build your personal action
                  list.
                </p>
              ) : (
                <div className="task-list">
                  {tasks.map(task => (
                    <article key={task.id} className="task-card">
                      <div>
                        <p className="task-card__id">#{task.id}</p>
                        <p className="task-card__title">{task.title}</p>
                      </div>
                      <button
                        onClick={() => handleComplete(task.id)}
                        className="btn secondary-btn"
                      >
                        Mark complete
                      </button>
                    </article>
                  ))}
                </div>
              )}
            </div>

            <div className="task-panel glass-panel">
              <div className="task-panel__header">
                <p className="chip chip--ghost">Done today</p>
                <h2>Resolved tickets</h2>
              </div>
              {resolvedTasks.length === 0 ? (
                <p className="muted">No resolved tasks yet.</p>
              ) : (
                <ul className="resolved-list">
                  {resolvedTasks.map(task => (
                    <li key={task.id} className="resolved-card">
                      {task.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="task-panel glass-panel">
              <div className="task-panel__header">
                <p className="chip chip--ghost">Roadmap</p>
                <h2>Profile-friendly milestones</h2>
              </div>
              <ol className="roadmap-list">
                {roadmap.map(item => (
                  <li key={item.label} className="roadmap-item">
                    <span className="roadmap-dot" />
                    <div>
                      <p className="roadmap-label">{item.label}</p>
                      <p className="roadmap-detail">{item.detail}</p>
                    </div>
                    <span className="roadmap-status">{item.status}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </section>

        <section id="highlights" className="feature-grid">
          {highlightCards.map(card => (
            <article key={card.title} className="feature-card glass-panel">
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </article>
          ))}
        </section>

        <section className="cta-panel glass-panel">
          <div>
            <p className="chip chip--primary">Team ready</p>
            <h2>Roll this dashboard into your support playbook</h2>
            <p className="muted">
              Fork the repo, point the JSON feed at your ticket source, and keep
              managers, agents, and customers aligned on what is shipping next.
              The gradients are nice, but the visibility is the real win.
            </p>
          </div>
          <div className="cta-actions">
            <a
              className="btn primary-btn"
              href={repoUrl}
              target="_blank"
              rel="noreferrer"
            >
              Grab the code
            </a>
            <a className="btn ghost-btn" href="#overview">
              Back to overview
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <ToastContainer position="bottom-right" newestOnTop theme="dark" />
    </div>
  )
}

export default App

