import React from 'react'

const Hero = ({
  repoUrl,
  inProgressCount,
  resolvedCount,
  stars,
  forks,
  issues,
  lastUpdated,
  isRepoLoading,
}) => {
  const formattedDate =
    lastUpdated && !isRepoLoading
      ? new Intl.DateTimeFormat('en', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }).format(new Date(lastUpdated))
      : '--'

  const metricValue = value =>
    isRepoLoading || value === null ? '--' : new Intl.NumberFormat().format(value)

  const metrics = [
    { label: 'In progress', value: inProgressCount },
    { label: 'Resolved', value: resolvedCount },
    { label: 'Stars', value: metricValue(stars) },
    { label: 'Forks', value: metricValue(forks) },
    { label: 'Open issues', value: metricValue(issues) },
    { label: 'Last push', value: formattedDate },
  ]

  return (
    <section className="hero-shell glass-panel">
      <div className="hero-copy">
        <p className="chip chip--primary">Customer support OS</p>
        <h1>Keep every customer conversation on track</h1>
        <p className="muted">
          This workspace helps real teams watch the queue, prioritize urgent cases,
          and celebrate resolved tickets. Plug in your own data source and give
          stakeholders a live window into support health.
        </p>
        <div className="hero-actions">
          <a className="btn primary-btn" href={repoUrl} target="_blank" rel="noreferrer">
            Open on GitHub
          </a>
          <a className="btn ghost-btn" href="#tickets">
            See ticket board
          </a>
        </div>
      </div>

      <div className="hero-metrics">
        {metrics.map(metric => (
          <div key={metric.label} className="hero-metric-card">
            <p className="hero-metric-value">{metric.value}</p>
            <p className="hero-metric-label">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero