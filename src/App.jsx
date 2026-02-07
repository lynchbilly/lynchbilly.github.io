export default function App() {
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <img
          src="/file_00000000359071f88d9c0e35cd93e4eb (1).png"
          alt="Hog Wild Coding Banner"
          className="banner"
        />
      </header>

      {/* NAV */}
      <nav className="nav">
        <ul className="nav-grid">
          <li>
            <a className="nav-tile" href="/index.html" aria-label="Home">
              <img src="/home.jpeg (1).png" alt="HOME" />
              <span className="nav-label">HOME</span>
            </a>
          </li>
          <li>
            <a className="nav-tile" href="/skills.html" aria-label="Skills">
              <img src="/skills.jpeg (1).png" alt="SKILLS" />
              <span className="nav-label">SKILLS</span>
            </a>
          </li>
          <li>
            <a className="nav-tile" href="/about.html" aria-label="About">
              <img src="/about.jpeg (1).png" alt="ABOUT" />
              <span className="nav-label">ABOUT</span>
            </a>
          </li>
          <li>
            <a className="nav-tile" href="/contact.html" aria-label="Contact">
              <img src="/contact (1).jpeg" alt="CONTACT" />
              <span className="nav-label">CONTACT</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* IDENTITY */}
      <div className="panel panel-center">
        <h2>&gt; IDENTITY_CONFIRM</h2>
        <h1 className="title">BILLY JAMES LYNCH</h1>
        <p className="tagline">LYNCH PROGRAMMER • HOG WILD CODING</p>
        <p className="subtitle">Arkansas-built • Remote capable • AI-focused engineering</p>

        <div className="button-row">
          <a href="/skills.html" className="btn btn-primary">▶ Open Technical Dossier</a>
          <a href="/contact.html" className="btn btn-secondary">⏵ Initiate Dispatch</a>
        </div>
      </div>

      {/* BRIEFING */}
      <div className="panel">
        <h2>&gt; BRIEFING</h2>
        <p>
          Hog Wild Coding is my build lab. I design and deploy real systems —
          React frontends, Python automation, Java foundations, Firebase-backed apps,
          and AI-driven workflows built for performance and reliability.
        </p>
        <p className="muted-block">
          Clean code. Locked-down access. Lifecycle thinking. No fluff.
        </p>
      </div>

      {/* PRIMARY OBJECTIVES */}
      <div className="panel">
        <h2>&gt; PRIMARY_OBJECTIVES</h2>
        <div className="grid">
          <div className="card">
            <h3>Custom Engineering</h3>
            <ul>
              <li>React UI systems</li>
              <li>Python automation tools</li>
              <li>Java problem solving foundations</li>
              <li>Debugging & rebuilds</li>
            </ul>
          </div>

          <div className="card">
            <h3>Firebase Systems</h3>
            <ul>
              <li>Hosting + custom domains</li>
              <li>Auth + protected routes</li>
              <li>Firestore + security rules</li>
              <li>Cloud Functions workflows</li>
            </ul>
          </div>

          <div className="card">
            <h3>PC Solutions</h3>
            <ul>
              <li>Dev / gaming / AI builds</li>
              <li>Thermal & airflow planning</li>
              <li>Power budgeting</li>
              <li>Upgrade lifecycle planning</li>
            </ul>
          </div>
        </div>
      </div>

      {/* AI FOUNDATION */}
      <div className="panel">
        <h2>&gt; AI_SYSTEMS_FOUNDATION</h2>
        <div className="grid">
          <div className="card">
            <h3>Data Engineering</h3>
            <ul>
              <li>Pandas transformation pipelines</li>
              <li>Structured dataset modeling</li>
              <li>Visualization (Matplotlib)</li>
            </ul>
          </div>

          <div className="card">
            <h3>Machine Learning Concepts</h3>
            <ul>
              <li>Supervised vs unsupervised learning</li>
              <li>Precision / Recall / F1</li>
              <li>Bias-variance awareness</li>
            </ul>
          </div>

          <div className="card">
            <h3>Applied AI</h3>
            <ul>
              <li>Prompt engineering</li>
              <li>Agentic workflows</li>
              <li>AI integration into web systems</li>
            </ul>
          </div>
        </div>
      </div>

      {/* ENGINEERING LIFECYCLE */}
      <div className="panel">
        <h2>&gt; ENGINEERING_LIFECYCLE</h2>
        <ul className="bullet">
          <li><strong>Requirements → Architecture → Build → Deploy.</strong></li>
          <li><strong>Root cause analysis.</strong> Debug before guess.</li>
          <li><strong>Security first.</strong> No exposed admin panels.</li>
          <li><strong>Performance minded.</strong> Clean structure + fast load.</li>
          <li><strong>Post-deployment support.</strong></li>
        </ul>
      </div>

      {/* CURRENT BUILD */}
      <div className="panel">
        <h2>&gt; CURRENT_BUILD</h2>
        <div className="grid">
          <div className="card">
            <h3>AI Workstation</h3>
            <ul>
              <li>AMD Ryzen 9 9950X3D</li>
              <li>Radeon RX 9070 XT</li>
              <li>DDR5 high-speed memory</li>
              <li>1200W performance PSU</li>
            </ul>
          </div>

          <div className="card">
            <h3>Purpose Built</h3>
            <ul>
              <li>Parallel workloads</li>
              <li>AI experimentation</li>
              <li>Data processing</li>
              <li>System testing</li>
            </ul>
          </div>

          <div className="card">
            <h3>Engineering Focus</h3>
            <ul>
              <li>Thermal optimization</li>
              <li>Stability testing</li>
              <li>Compatibility planning</li>
              <li>Upgrade lifecycle path</li>
            </ul>
          </div>
        </div>

        <p className="muted-block">
          Built for development, AI systems experimentation, and performance-first engineering.
        </p>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div>© 2026 Billy James Lynch | Lynch Programmer | Hog Wild Coding</div>
        <div className="footer-links">
          <a href="https://youtube.com/@hogwildcoding?si=euQ6KlkR5m6Uoa-m" target="_blank" rel="noopener">YouTube</a>
          <span>•</span>
          <a href="https://github.com/lynchbilly/lynchbilly.github.io" target="_blank" rel="noopener">GitHub</a>
        </div>
      </footer>
    </>
  )
}
