import { useEffect, useState } from 'react'

const skills = [
  { name: 'Python', icon: 'python.svg', type: 'language' },
  { name: 'SQL', icon: 'sql.svg', type: 'data' },
  { name: 'HTML', icon: 'html.svg', type: 'web' },
  { name: 'CSS', icon: 'css.svg', type: 'web' },
  { name: 'Git', icon: 'git.svg', type: 'tool' },
  { name: 'JavaScript', icon: 'javascript.svg', type: 'language' },
  { name: 'React', icon: 'react.svg', type: 'framework' },
  { name: 'Node.js', icon: 'node.svg', type: 'runtime' },
  { name: 'MongoDB', icon: 'mongodb.svg', type: 'data' },
]

const contacts = [
  { label: 'Facebook', href: 'https://www.facebook.com/agxp930/', },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/adrienne-ghabriel-xander-pagaran-050373423/?isSelfProfile=true',  },
  { label: 'GitHub', href: 'https://github.com/pagaranAG',  },
]

function App() {
  const [isNavVisible, setIsNavVisible] = useState(true)

  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)

    let lastScrollY = window.scrollY
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsNavVisible(currentScrollY < 24 || currentScrollY < lastScrollY)
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-shell">
      <header className={`site-header ${isNavVisible ? 'is-visible' : 'is-hidden'}`}>
        <a className="wordmark" href="#top" aria-label="Adrienne Pagaran home">
          AP<span>.</span>
        </a>
        <nav aria-label="Primary navigation">
          <button type="button" onClick={() => scrollToSection('about')}>About</button>
          <button type="button" onClick={() => scrollToSection('skills')}>Skills</button>
          <button type="button" onClick={() => scrollToSection('contact')}>Contact</button>
        </nav>
        <a className="availability" href="mailto:adrienne.pagaran.dev@gmail.com">
          <span className="status-dot" /> Open to learn
        </a>
      </header>

      <main id="top">
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow reveal">Developer in the making <span>/</span> Laguna, PH</p>
            <h1 id="hero-title" className="reveal reveal-delay-one">Curiosity is my<br /><em>starting point.</em></h1>
            <p className="hero-description reveal reveal-delay-two">I&apos;m Adrienne Pagaran, an aspiring developer driven by questions, small experiments, and the pull of a problem worth solving.</p>
            <div className="hero-actions reveal reveal-delay-three">
              <button className="primary-button" type="button" onClick={() => scrollToSection('about')}>Explore my work <span aria-hidden="true">↘</span></button>
              <a className="text-link" href="#contact">Let&apos;s connect <span aria-hidden="true">↘</span></a>
            </div>
            <div className="hero-socials reveal reveal-delay-three">
              {contacts.map((contact) => <a key={contact.label} href={contact.href} target="_blank" rel="noreferrer">{contact.label} <span aria-hidden="true">↗</span></a>)}
            </div>
          </div>
          <div className="hero-aside reveal reveal-delay-two" aria-label="Intro notes">
            <div className="aside-line" />
            <p className="aside-kicker">A few honest notes</p>
            <p className="aside-note">&quot;I don&apos;t know everything yet.<br />That&apos;s the exciting part.&quot;</p>
            <p className="aside-caption">Currently exploring the field,<br />one build at a time.</p>
          </div>
          <div className="scroll-cue" aria-hidden="true"><span /> Scroll to discover</div>
        </section>

        <section className="about-section section-grid" id="about" aria-labelledby="about-title">
          <div className="section-label"><span>01</span><span>About me</span></div>
          <div className="about-content">
            <h2 id="about-title">Still learning.<br /><span>Always looking closer.</span></h2>
            <div className="about-columns">
              <p>I&apos;m at the beginning of my journey in tech, building a foundation across the web and beyond. I enjoy the moment when an idea turns into something real, usable, and a little more thoughtful than before.</p>
              <p>Curiosity keeps me moving. I&apos;m eager to learn more, explore different corners of the field, and work alongside people who care about making things better.</p>
            </div>
            <div className="location-note"><span className="pin-mark">+</span><span>Based in Laguna, Philippines<br /><small>Available for new conversations</small></span></div>
          </div>
        </section>

        <section className="skills-section section-grid" id="skills" aria-labelledby="skills-title">
          <div className="section-label"><span>02</span><span>Toolkit</span></div>
          <div className="skills-content">
            <div className="skills-heading"><h2 id="skills-title">Tools I use to<br /><span>stay curious.</span></h2><p>Growing a practical toolkit for turning ideas into interfaces, systems, and useful digital experiences.</p></div>
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-item" key={skill.name} style={{ '--item-index': index }}>
                  <img src={`/icons/${skill.icon}`} alt="" />
                  <span>{skill.name}</span>
                  <small>{skill.type}</small>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <div className="contact-inner">
            <p className="eyebrow">03 <span>/</span> Contact</p>
            <h2 id="contact-title">Let&apos;s make<br /><em>something meaningful.</em></h2>
            <p className="contact-copy">Have a question, an idea, or a problem worth exploring? I&apos;d love to hear what you&apos;re working on.</p>
            <p className="contact-prompt">Find me around the web.</p>
            <div className="contact-links">
              {contacts.map((contact) => <a key={contact.label} href={contact.href} target="_blank" rel="noreferrer"><span>{contact.label}</span><small>{contact.handle}</small><b>↗</b></a>)}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><span>© 2026 Adrienne Pagaran</span><span>Built with curiosity <b>✦</b></span><a href="#top">Back to top ↑</a></footer>
    </div>
  )
}

export default App
