import React from 'react'

const Navbar = ({ repoUrl, stars, issues, isRepoLoading }) => {
  const starCopy =
    isRepoLoading || stars === null ? '--' : new Intl.NumberFormat().format(stars)
  const issueCopy =
    isRepoLoading || issues === null ? '--' : new Intl.NumberFormat().format(issues)

  return (
    <header className="nav-shell">
      <div className="navbar glass-panel">
        <div className="navbar-start gap-3">
          <a href="#overview" className="brand-pill">
            CS — Ticket System
          </a>
        </div>

        <div className="navbar-center hidden md:flex gap-4">
          <span className="stat-pill">⭐ {starCopy}</span>
          <span className="stat-pill">Issues · {issueCopy}</span>
        </div>

        <div className="navbar-end gap-3">
          <a className="btn ghost-btn hidden sm:inline-flex" href="#tickets">
            Live demo
          </a>
          <a
            className="btn primary-btn"
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            View repo
          </a>
        </div>
      </div>
    </header>
  )
}

export default Navbar