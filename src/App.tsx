import { useEffect, useState } from 'react'
import { ArrowUpRight, Code2, Globe2, Menu, Megaphone, Smartphone, Sparkles, X, Zap } from 'lucide-react'

const services = [
  { number: '01', icon: Globe2, title: 'Websites', text: 'Distinctive, responsive websites that make a sharp first impression and turn attention into action.', tags: ['UX strategy', 'Web design', 'Development'] },
  { number: '02', icon: Smartphone, title: 'Mobile apps', text: 'Fast, intuitive product experiences designed around the people who use them every day.', tags: ['iOS & Android', 'Prototyping', 'Product design'] },
  { number: '03', icon: Code2, title: 'Web applications', text: 'Reliable digital platforms and internal tools engineered for real workflows and long-term growth.', tags: ['SaaS', 'Dashboards', 'Automation'] },
  { number: '04', icon: Megaphone, title: 'Digital growth', text: 'Focused campaigns and creative systems that help the right audience discover, trust, and choose you.', tags: ['Campaigns', 'Content', 'Analytics'] },
]

const principles = [
  ['Clarity first', 'Every screen earns its place. We turn complexity into an experience people understand.'],
  ['Built together', 'Short feedback loops keep you close to the work and the decisions that shape it.'],
  ['Made to last', 'Scalable foundations, thoughtful details, and clean handover—not quick fixes.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  const closeMenu = () => setMenuOpen(false)

  return <div className="site-shell">
    <header className={scrolled ? 'nav scrolled' : 'nav'}>
      <a className="brand" href="#top" aria-label="Tham Startup home" onClick={closeMenu}><span className="brand-mark">T</span><span>THAM<span className="brand-light">STARTUP</span></span></a>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        <a href="#services" onClick={closeMenu}>Services</a><a href="#work" onClick={closeMenu}>Work</a><a href="#studio" onClick={closeMenu}>Studio</a><a href="#contact" onClick={closeMenu}>Contact</a>
      </nav>
      <a className="nav-cta" href="#contact">Start a project <ArrowUpRight size={17} /></a>
      <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
    </header>

    <main>
      <section className="hero" id="top">
        <div className="hero-art" aria-hidden="true" /><div className="hero-grid" aria-hidden="true" />
        <div className="hero-content reveal">
          <p className="eyebrow"><span /> Independent digital studio · India</p>
          <h1>Ideas that <em>move</em><br />business forward.</h1>
          <p className="hero-copy">We design and build high-impact websites, apps, and digital systems for ambitious teams ready to make their next move.</p>
          <div className="hero-actions"><a className="button primary" href="#contact">Build with us <ArrowUpRight size={18} /></a><a className="text-link" href="#services">Explore our capabilities <span>↓</span></a></div>
        </div>
        <div className="hero-foot"><div><strong>04</strong><span>Core capabilities</span></div><div><strong>01</strong><span>Focused team</span></div><p>Strategy · Design · Technology · Growth</p></div>
      </section>

      <section className="statement section-pad"><p className="section-label">What we believe</p><h2>Your idea deserves more than a pretty screen. <span>It needs a product that performs.</span></h2></section>

      <section className="services section-pad" id="services">
        <div className="section-head"><div><p className="section-label">Our capabilities</p><h2>Built from every angle.</h2></div><p>One creative and technical partner—from the first sketch to the next stage of growth.</p></div>
        <div className="service-grid">{services.map(({ number, icon: Icon, title, text, tags }) => <article className="service-card" key={title}><div className="card-top"><span>{number}</span><Icon size={25} /></div><h3>{title}</h3><p>{text}</p><div className="tags">{tags.map(tag => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>

      <section className="work" id="work">
        <div className="work-copy section-pad"><p className="section-label light">Selected direction</p><div className="work-inner"><span className="project-index">01 / Product ecosystem</span><h2>From first click<br />to daily habit.</h2><p>We connect brand, product, and technology into one coherent experience—so every interaction feels intentional.</p><div className="metric-row"><div><strong>3×</strong><span>Faster launch cycles</span></div><div><strong>One</strong><span>Integrated product team</span></div></div></div></div>
        <div className="work-visual" aria-label="Abstract product interface composition"><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="phone-card"><span>THAM / 01</span><div className="phone-glow" /><strong>Make<br />the leap.</strong><small>Digital product system</small></div><div className="data-card"><span>Momentum</span><strong>+148%</strong><div className="chart"><i/><i/><i/><i/><i/><i/></div></div></div>
      </section>

      <section className="studio section-pad" id="studio">
        <div className="section-head"><div><p className="section-label">How we work</p><h2>Small team.<br />Serious momentum.</h2></div><p>Direct collaboration, senior attention, and a process designed to keep good ideas moving.</p></div>
        <div className="principles">{principles.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
        <div className="process-line">{['Discover', 'Shape', 'Build', 'Launch'].map((step, i) => <div key={step}><span>{i + 1}</span><strong>{step}</strong></div>)}</div>
      </section>

      <section className="contact section-pad" id="contact"><div className="contact-orb" aria-hidden="true" /><p className="section-label light">Have a project in mind?</p><h2>Let’s make<br /><em>something matter.</em></h2><a className="contact-link" href="mailto:hello@thamstartup.com">hello@thamstartup.com <ArrowUpRight size={28} /></a><div className="contact-meta"><p><Sparkles size={17} /> Available for select projects</p><p>Based in India · Working worldwide</p></div></section>
    </main>

    <footer><a className="brand" href="#top"><span className="brand-mark">T</span><span>THAM<span className="brand-light">STARTUP</span></span></a><p>Digital products built to move.</p><p>© {new Date().getFullYear()} Tham Startup</p><a href="#top"><Zap size={18} /> Back to top</a></footer>
  </div>
}

export default App
