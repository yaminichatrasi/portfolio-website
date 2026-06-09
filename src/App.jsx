import "./App.css";

function App() {
  const scrollToProjects = () => {
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <h2>Yamini Chatrasi</h2>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#skills">Skills</a>
          </li>

          <li>
            <a href="#projects">Projects</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <h1>Hi, I'm Yamini Chatrasi 👋</h1>

        <p>
          Computer Science Engineering Student | ReactJS Developer | AI
          Enthusiast
        </p>

        <button onClick={scrollToProjects}>
          View Projects
        </button>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <h2>About Me</h2>

        <p>
          I am a Computer Science Engineering student passionate about Web
          Development, Artificial Intelligence, Cloud Computing, and Software
          Development. I enjoy creating responsive and user-friendly web
          applications using modern technologies such as ReactJS and
          JavaScript.
        </p>
      </section>

      {/* Skills Section */}
      <section className="skills" id="skills">
        <h2>Technical Skills</h2>

        <div className="grid">
          <div className="card">HTML5</div>
          <div className="card">CSS3</div>
          <div className="card">JavaScript</div>
          <div className="card">ReactJS</div>
          <div className="card">Python</div>
          <div className="card">Java</div>
          <div className="card">Git & GitHub</div>
          <div className="card">SQL</div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects" id="projects">
        <h2>Projects</h2>

        <div className="grid">
          <div className="card">
            <h3>Todo App</h3>
            <p>
              A ReactJS CRUD application that allows users to add, update,
              delete, and manage daily tasks efficiently.
            </p>
          </div>

          <div className="card">
            <h3>Weather App</h3>
            <p>
              A weather forecasting application that fetches real-time weather
              information using API integration.
            </p>
          </div>

          <div className="card">
            <h3>Notes App</h3>
            <p>
              A notes management application with search functionality for easy
              organization and access.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact</h2>

        <p>📧 yaminichatrasi1458@gmail.com</p>
        <p>📱 +91 7702514056</p>
        <p>💼 LinkedIn: linkedin.com/in/yamini-chatrasi</p>
        <p>💻 GitHub: github.com/yaminichatrasi</p>
      </section>
    </div>
  );
}

export default App;