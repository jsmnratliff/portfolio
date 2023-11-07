import React from 'react';

const Header = () => {
  return (
    <header>
      <h1>Your Name</h1>
      <p>Web Developer</p>
      <nav>
        <ul>
          <li><a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank">LinkedIn</a></li>
          <li><a href="your-resume.pdf" target="_blank">Resume</a></li>
          <li><a href="/projects">Project</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;