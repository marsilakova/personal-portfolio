import { useState } from 'react';
import './App.css';

const projectsData = [
  {
    id: 1,
    title: 'Modern CV Website',
    category: 'Frontend',
    description: 'Responsive personal resume website with sidebar navigation, dark mode toggle, and direct PDF download.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://marsilakova.github.io/modern-cv-website/',
    githubUrl: 'https://github.com/marsilakova/modern-cv-website'
  },
  {
    id: 2,
    title: 'Business Website – Nordic Roast Coffee',
    category: 'Frontend',
    description: 'Modern responsive website for a specialty coffee roastery in Malmö.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    liveUrl: 'https://marsilakova.github.io/nordic-roast-cofee/',
    githubUrl: 'https://github.com/marsilakova/nordic-roast-cofee'
  },
  {
    id: 3,
    title: 'Task Management System',
    category: 'Backend',
    description: 'Clean architecture application built with C# and .NET for organizing daily tasks and tracking progress.',
    tech: ['C#', '.NET', 'REST API'],
    liveUrl: '',
    githubUrl: 'https://github.com/marsilakova/InventoryMenegement'
  },
  {
    id: 4,
    title: 'Nordic Living Store – E-Commerce',
    category: 'Frontend',
    description: 'Interactive Scandinavian home decor store built with React and Vite, featuring category filtering, live search, persistent cart state (localStorage), and checkout flow.',
    tech: ['React', 'Vite', 'CSS3', 'LocalStorage'],
    liveUrl: 'https://nordic-living-store-mu.vercel.app',
    githubUrl: 'https://github.com/marsilakova/nordic-living-store'
  }

];


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === selectedCategory);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <div className={darkMode ? 'app dark' : 'app light'}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-content">
          <a href="#home" className="logo">Marina<span>.dev</span></a>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle color theme"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header id="home" className="hero">
        <div className="container hero-content">
          <p className="greeting">Hello, I'm</p>
          <h1>Marina Silakova</h1>
          <h2 className="role">Frontend & .NET Developer</h2>
          <p className="hero-desc">
            I build responsive, clean, and user-friendly web applications using modern frontend technologies and solid software architecture.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div>
      </header>

      {/* About Me */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="card about-card">
            <p>
              I am a passionate developer based in Malmö, Sweden, focused on creating modern web interfaces with React, HTML5, CSS3, and JavaScript, combined with backend experience in C# and .NET. I enjoy solving problems, learning new tools, and turning ideas into reliable digital products.
            </p>
          </div>
        </div>
      </section>

      {/* Skills / Technologies */}
      <section id="skills" className="section">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            {['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'C# / .NET', 'Git & GitHub', 'Responsive Design', 'REST APIs'].map((skill) => (
              <div key={skill} className="skill-badge">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects with Filter */}
      <section id="projects" className="section">
        <div className="container">
          <div className="projects-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="filter-buttons">
              {['All', 'Frontend', 'Backend'].map((cat) => (
                <button
                  key={cat}
                  className={selectedCategory === cat ? 'filter-btn active' : 'filter-btn'}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <article key={project.id} className="card project-card">
                <span className="category-tag">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-list">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
                {/* <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noreferrer" className="link-btn">
                    Live Demo ↗
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link-btn outline">
                    GitHub
                  </a>
                </div> */}
                <div className="project-links">
                        {project.liveUrl && (
                        <a href={project.liveUrl} target="_blank" rel="noreferrer" className="link-btn">
                          Live Demo ↗
                        </a>
                      )}
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="link-btn">
                        GitHub
                      </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      {/* <section id="education" className="section">
        <div className="container">

          <h2 className="section-title">Education & Experience</h2>

          <div className="card timeline-card">
            <h3>Frontend & Software Development Studies</h3>
            <span className="timeline-date">2026 — Present | Malmö, Sweden</span>
            <p>
              Hands-on training in modern frontend development (HTML, CSS, JavaScript, React) and backend programming with C#.
            </p>
          </div>

        </div>
      </section> */}

      {/* Education & Experience Section */}
<section id="education" className="section">
  <div className="container">
    <h2 className="section-title">Education & Experience</h2>
    <div className="timeline">

      <div className="timeline-item">
        <span className="timeline-date">2000 – Present</span>
        <h3>Software Development & Programming</h3>
        <h4>Industry Experience • Sweden & International</h4>
        <p>
          Extensive background in software development, database management, and user-centered system design for both small and large-scale applications.
        </p>
      </div>

      <div className="timeline-item">
        <span className="timeline-date">2016</span>
        <h3>Fullstack Developer Program (12 Weeks)</h3>
        <h4>Lexicon • Kristianstad, Sweden</h4>
        <p>
          Intensive blended learning program covering HTML5, CSS3, LESS, Bootstrap, JavaScript, AngularJS, jQuery, SQL, MySQL, PHP, Java, C#, ASP.NET, .NET, and Git/GitHub.
        </p>
      </div>

      <div className="timeline-item">
        <span className="timeline-date">2010</span>
        <h3>Web Development II – Scripting Languages (7.5 hp)</h3>
        <h4>Blekinge Institute of Technology (BTH)</h4>
        <p>
          Focused on building interactive, dynamic websites utilizing both server-side and client-side scripting technologies.
        </p>
      </div>

      <div className="timeline-item">
        <span className="timeline-date">2004 – 2006</span>
        <h3>Application Development (KY-utbildning, 100 hp)</h3>
        <h4>Kvalificerad Yrkesutbildning • Malmö, Sweden</h4>
        <p>
          Vocational higher education focused on building enterprise applications, database administration, web programming, and user interface development.
        </p>
      </div>

      <div className="timeline-item">
        <span className="timeline-date">1979 – 1984</span>
        <h3>M.Sc. in Computer Engineering & Information Technology</h3>
        <h4>Sevastopol National Technical University</h4>
        <p>
          Assessed by the Swedish National Agency for Higher Education (Högskoleverket) as equivalent to a Swedish Master of Science in Engineering (Civilingenjörsexamen), including an independent degree project.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-wrapper">
            <div className="card contact-info">
              <h3>Contact Information</h3>
              <p>📍 Malmö, Sweden</p>
              <p>🔗 ://github.com</p>
              <p>✉️ Feel free to send a message using the form!</p>
            </div>

            <form className="card contact-form" onSubmit={handleFormSubmit}>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <textarea
                rows="4"
                placeholder="Your Message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              ></textarea>
              <button type="submit" className="btn btn-primary">Send Message</button>
              {submitted && <p className="success-msg">✅ Thank you! Your message has been sent.</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>© {new Date().getFullYear()} Marina Silakova. Built with React & Vite.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
