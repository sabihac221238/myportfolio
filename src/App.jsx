import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Sabiha.</h2>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero">
        <div className="hero-content">

          <div className="profile-circle">
            ST
          </div>

          <h1>Hello, I'm <span>Sabiha Tabassum</span></h1>

          <h2>CSE Student at International Islamic University</h2>

          <p>
            I am a Computer Science and Engineering student interested in
            web development, software development, and modern technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>

        <div className="about-content">
          <p>
            I am Sabiha Tabassum, a Computer Science and Engineering
            student at International Islamic University. I enjoy learning
            programming, developing web applications, and working with
            different technologies.
          </p>

          <div className="about-cards">

            <div className="info-card">
              <h3>Name</h3>
              <p>Sabiha Tabassum</p>
            </div>

            <div className="info-card">
              <h3>University</h3>
              <p>International Islamic University</p>
            </div>

            <div className="info-card">
              <h3>Department</h3>
              <p>Computer Science & Engineering (CSE)</p>
            </div>

            <div className="info-card">
              <h3>Interest</h3>
              <p>Web Development & Software Development</p>
            </div>

          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>HTML</h3>
            <p>Web Structure</p>
          </div>

          <div className="skill-card">
            <h3>CSS</h3>
            <p>Web Design</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Web Interactivity</p>
          </div>

          <div className="skill-card">
            <h3>React</h3>
            <p>Frontend Development</p>
          </div>

          <div className="skill-card">
            <h3>C# / .NET</h3>
            <p>Backend Development</p>
          </div>

          <div className="skill-card">
            <h3>PostgreSQL</h3>
            <p>Database Management</p>
          </div>

        </div>
      </section>

      {/* Education */}
      <section id="education" className="section">
        <h2 className="section-title">Education</h2>

        <div className="education-card">
          <h3>B.Sc. in Computer Science & Engineering</h3>

          <h4>International Islamic University</h4>

          <p>
            Department of Computer Science & Engineering (CSE)
          </p>

          <span>Currently Studying</span>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section projects-section">
        <h2 className="section-title">My Projects</h2>

        <div className="projects-grid">

          <div className="project-card">
            <h3>Student Lost & Found Tracker</h3>

            <p>
              A web-based system for students to report lost items,
              find found items, and manage claims.
            </p>

            <div className="project-tech">
              <span>ASP.NET Core</span>
              <span>C#</span>
              <span>PostgreSQL</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Personal Portfolio</h3>

            <p>
              A responsive personal portfolio website created using
              React to showcase my skills, education, and projects.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
          </div>

          <div className="project-card">
            <h3>Skin Cancer Detection</h3>

            <p>
              An AI-based project for detecting different types of
              skin cancer from dermoscopic images.
            </p>

            <div className="project-tech">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Deep Learning</span>
            </div>
          </div>

        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <h2 className="section-title">Contact Me</h2>

        <div className="contact-card">

          <p>
            If you would like to contact me, feel free to reach out.
          </p>

          <p>
            📧 <strong>Email:</strong>{" "}
            <a href="mailto:sabihatabassumsaima@gmail.com">
              sabihatabassumsaima@gmail.com
            </a>
          </p>

          <p>
            💻 <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/sabihac221238"
              target="_blank"
              rel="noreferrer"
            >
              github.com/sabihac221238
            </a>
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2026 Sabiha Tabassum. All Rights Reserved.
        </p>
      </footer>

    </div>
  );
}

export default App;