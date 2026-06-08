---
layout: page
title: Tiancen Hua
---

<div class="academic-profile">
  <header class="academic-profile__hero">
    <div class="academic-profile__intro">
      <h1>Tiancen Hua <span>花天岑</span></h1>
      <p class="academic-profile__lead">
        Undergraduate Student, School of Software, Nanjing University
      </p>
      <p>
        I am an undergraduate student at Nanjing University, Class of 2023. My
        current interests are centered on software engineering, software system
        design, operating systems, compilers, databases, and the disciplined
        practice of building reliable software.
      </p>
      <p>
        This website is maintained as a personal knowledge base. It collects my
        course notes, review materials, technical summaries, and selected
        reflections on learning computer science and software engineering.
      </p>
      <p class="academic-profile__contact">
        Email:
        <a href="mailto:1047347257@qq.com">1047347257@qq.com</a>
        &nbsp;|&nbsp;
        GitHub:
        <a href="https://github.com/Huatiancen">Huatiancen</a>
      </p>
    </div>
    <img
      class="academic-profile__photo"
      src="{{ '/assets/images/profile-life.jpg' | relative_url }}"
      alt="Tiancen Hua"
    >
  </header>

  <hr>

  <section class="academic-profile__section">
    <h2>Education</h2>
    <div class="academic-profile__item">
      <div>
        <strong>Nanjing University</strong>
        <p>B.Eng. candidate in Software Engineering, School of Software</p>
      </div>
      <span>2023 - Present</span>
    </div>
  </section>

  <section class="academic-profile__section">
    <h2>Interests</h2>
    <ul>
      <li>Software system design and software architecture</li>
      <li>Operating systems and systems programming</li>
      <li>Compiler principles and program analysis</li>
      <li>Data management and database fundamentals</li>
      <li>Structured learning methods for technical subjects</li>
    </ul>
  </section>

  <section class="academic-profile__section">
    <h2>Notes</h2>
    <p>
      Most materials on this site are course-oriented notes. They are organized
      for clarity, review, and long-term reuse rather than for formal
      publication.
    </p>
  </section>
</div>

<style>
  .academic-profile {
    max-width: 900px;
    margin: 0 auto;
    color: #22333b;
    line-height: 1.7;
  }

  .academic-profile__hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 220px;
    gap: 2rem;
    align-items: start;
  }

  .academic-profile__intro h1 {
    margin: 0 0 0.45rem;
    color: #14242d;
    font-size: clamp(2rem, 4vw, 2.8rem);
    line-height: 1.15;
  }

  .academic-profile__intro h1 span {
    color: #5b7483;
    font-size: 0.62em;
    font-weight: 500;
  }

  .academic-profile__lead {
    margin: 0 0 1rem;
    color: #1f6f8b;
    font-size: 1.08rem;
    font-weight: 700;
  }

  .academic-profile__contact {
    margin-top: 1.1rem;
    color: #425966;
  }

  .academic-profile a {
    color: #1f6f8b;
    text-decoration: none;
  }

  .academic-profile a:hover {
    text-decoration: underline;
  }

  .academic-profile__photo {
    width: 220px;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border-radius: 8px;
    border: 1px solid rgba(31, 111, 139, 0.16);
    box-shadow: 0 10px 24px rgba(16, 54, 79, 0.12);
  }

  .academic-profile hr {
    margin: 2rem 0;
    border: 0;
    border-top: 1px solid rgba(219, 231, 238, 0.95);
  }

  .academic-profile__section {
    margin: 1.8rem 0;
  }

  .academic-profile__section h2 {
    margin: 0 0 0.85rem;
    color: #14242d;
    font-size: 1.35rem;
  }

  .academic-profile__item {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(219, 231, 238, 0.7);
  }

  .academic-profile__item p {
    margin: 0.25rem 0 0;
    color: #5b7483;
  }

  .academic-profile__item span {
    flex: 0 0 auto;
    color: #5b7483;
    font-family: var(--code-font, monospace);
    font-size: 0.92rem;
  }

  .academic-profile__section ul {
    margin: 0;
    padding-left: 1.2rem;
  }

  .academic-profile__section li + li {
    margin-top: 0.35rem;
  }

  @media (max-width: 680px) {
    .academic-profile__hero {
      grid-template-columns: 1fr;
    }

    .academic-profile__photo {
      order: -1;
      width: min(100%, 260px);
    }

    .academic-profile__item {
      display: block;
    }

    .academic-profile__item span {
      display: block;
      margin-top: 0.35rem;
    }
  }
</style>
