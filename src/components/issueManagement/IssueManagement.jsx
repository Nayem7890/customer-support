import React, { use } from 'react'
import calendarImg from '../../assets/ri_calendar-line.png'

const statusStyles = {
  Open: 'status-pill status-pill__open',
  'In Progress': 'status-pill status-pill__progress',
  Resolved: 'status-pill status-pill__resolved',
}

const priorityColors = {
  'LOW PRIORITY': 'priority-pill priority-pill__low',
  'MEDIUM PRIORITY': 'priority-pill priority-pill__medium',
  'HIGH PRIORITY': 'priority-pill priority-pill__high',
}

const IssueManagement = ({ fetchPromise, onAddTask, resolvedTasks }) => {
  const issueData = use(fetchPromise)
  const visibleIssues = issueData.filter(
    issue => !resolvedTasks.find(resolved => resolved.id === issue.id),
  )

  const handleKeyDown = (event, issue) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onAddTask(issue)
    }
  }

  return (
    <div className="issues-grid">
      {visibleIssues.map(issue => (
        <article
          key={issue.id}
          className="issue-card"
          onClick={() => onAddTask(issue)}
          role="button"
          tabIndex={0}
          onKeyDown={event => handleKeyDown(event, issue)}
        >
          <header className="issue-card__header">
            <div>
              <p className="issue-card__id">#{issue.id}</p>
              <h3 className="issue-card__title">{issue.title}</h3>
            </div>
            <span className={statusStyles[issue.status] || 'status-pill'}>
              {issue.status}
            </span>
          </header>

          <p className="issue-card__body">{issue.description}</p>

          <footer className="issue-card__footer">
            <div className="issue-card__meta">
              <span className={priorityColors[issue.priority] || 'priority-pill'}>
                {issue.priority}
              </span>
              <span className="issue-card__customer">{issue.customer}</span>
            </div>
            <div className="issue-card__date">
              <img src={calendarImg} alt="" aria-hidden="true" />
              <span>{issue.createdAt}</span>
            </div>
          </footer>
        </article>
      ))}
    </div>
  )
}

export default IssueManagement

