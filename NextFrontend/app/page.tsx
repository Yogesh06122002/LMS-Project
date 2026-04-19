import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ paddingBottom: '4rem' }}>
      {/* 1. HERO SECTION: The First Impression */}
      <section className="container min-h-screen flex-center" style={{ flexDirection: 'column', textAlign: 'center', paddingTop: '4rem' }}>
        <div className="hero-badge">
          Govt. Registered & Authorized Training Partner
        </div>
        <h1 className="hero-title text-gradient">
          Your Career.<br/>Our Vision.
        </h1>
        <p className="hero-subtitle">
          Bridging the gap between raw potential and corporate success. We provide world-class skill training, expert interview preparation, and unconditional placement support.
        </p>
        
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <Link href="/courses" className="btn btn-primary hover-lift" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
            Start Your Journey
          </Link>
          <a href="#about-brief" className="btn btn-secondary hover-lift" style={{ padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
            Learn More
          </a>
        </div>
      </section>

      {/* 2. SUCCESS METRICS: Building Immediate Trust */}
      <section style={{ padding: '4rem 0', background: 'var(--bg-glass)', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container stat-grid" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '2rem', textAlign: 'center' }}>
          <div>
            <h2 className="stat-value">500+</h2>
            <p className="stat-label">Careers Transformed</p>
          </div>
          <div>
            <h2 className="stat-value">100%</h2>
            <p className="stat-label">Placement Assistance</p>
          </div>
          <div>
            <h2 className="stat-value">4.9/5</h2>
            <p className="stat-label">Student Rating</p>
          </div>
        </div>
      </section>

      {/* 3. ABOUT BRIEF: Who We Are */}
      <section id="about-brief" className="container about-grid" style={{ padding: '8rem 0', display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
        <div style={{ flex: '1 1 400px' }}>
          <h3 style={{ color: 'var(--accent-color)', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '1rem' }}>About Career Guru Vision</h3>
          <h2 className="section-title">We don't just teach.<br/>We build professionals.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '2rem' }}>
            Whether you are from an IT background or looking to transition from Non-IT, stepping into the corporate world can be intimidating. We take away the fear. From polishing your communication to technical upskilling, we handle it all.
          </p>
          <Link href="/about" style={{ color: 'var(--text-primary)', borderBottom: '2px solid var(--accent-color)', paddingBottom: '4px', fontWeight: 500 }}>
            Read Our Full Story &#8594;
          </Link>
        </div>
        <div style={{ flex: '1 1 400px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
           <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center' }}>
             <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤝</div>
             <p style={{ fontWeight: 600 }}>Mentorship</p>
           </div>
           <div className="glass-panel" style={{ padding: '2rem', textAlign: 'center', transform: 'translateY(2rem)' }}>
             <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>💻</div>
             <p style={{ fontWeight: 600 }}>Real Skills</p>
           </div>
        </div>
      </section>

      {/* 4. SERVICES / WHY CHOOSE US */}
      <section className="container" style={{ padding: '4rem 0', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2 className="section-title text-gradient" style={{ marginBottom: '4rem' }}>Our Core Pillars</h2>
        
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <div className="glass-panel hover-lift" style={{ padding: '3rem', flex: '1 1 300px', maxWidth: '350px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎓</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Skill Training</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>Master the most in-demand skills in IT and Non-IT domains. We build technical excellence and unshakeable confidence.</p>
          </div>
          
          <div className="glass-panel hover-lift" style={{ padding: '3rem', flex: '1 1 300px', maxWidth: '350px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🎯</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Interview Mastery</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>From tailored resume building to guaranteed interview referrals, we train you to crack the toughest HR rounds.</p>
          </div>
          
          <div className="glass-panel hover-lift" style={{ padding: '3rem', flex: '1 1 300px', maxWidth: '350px', textAlign: 'center' }}>
            <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>🏅</div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Govt. Certified</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>As an authorized platform, we offer trusted certifications that carry real weight in the corporate ecosystem.</p>
          </div>
        </div>
      </section>

      {/* 5. COURSES PREVIEW */}
      <section style={{ padding: '6rem 0', marginTop: '4rem', background: 'var(--bg-glass)', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title text-gradient" style={{ marginBottom: '1rem' }}>Featured Programs</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '4rem', fontSize: '1.1rem' }}>Focused tracks designed to get you hired.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', textAlign: 'left' }}>
             <div style={{ padding: '2rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Full Stack IT</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Complete MERN training for developers.</p>
             </div>
             <div style={{ padding: '2rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Non-IT Transition</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Shift smoothly from non-tech to IT roles.</p>
             </div>
             <div style={{ padding: '2rem', background: 'var(--bg-primary)', borderRadius: 'var(--radius-lg)' }}>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>Mock Interviews</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>1-on-1 rigorous sessions with industry experts.</p>
             </div>
          </div>
          
          <div style={{ marginTop: '3rem' }}>
            <Link href="/courses" className="btn btn-primary hover-lift">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FINAL CALL TO ACTION */}
      <section className="container" style={{ padding: '6rem 0', textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Ready to transform your career?</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', marginBottom: '3rem' }}>Join hundreds of secure students who trusted Career Guru Vision.</p>
        <Link href="/contact" className="btn btn-primary hover-lift" style={{ padding: '1.2rem 3rem', fontSize: '1.2rem' }}>
          Get In Touch Now
        </Link>
      </section>
    </div>
  );
}
