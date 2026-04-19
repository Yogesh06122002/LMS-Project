export default function AboutPage() {
  return (
    <div className="container" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our Story & Mission</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto' }}>
          Discover the driving force behind Career Guru Vision. We are more than an educational platform; we are your dedicated career partners.
        </p>
      </div>

      {/* The Story Section */}
      <section style={{ marginBottom: '5rem', background: 'var(--bg-glass)', borderRadius: 'var(--radius-lg)', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)' }}>The Journey</h2>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Career Guru Vision was established with a singular, powerful belief: every student, regardless of their background—IT or Non-IT—deserves a clear pathway to corporate success. We identified a massive gap between academic knowledge and industry expectations, particularly for fresh graduates struggling to clear initial technical and HR rounds. 
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>
            Through personalized mentoring, rigorous mock interviews, and tailored skills training, we bridge this gap, actively molding raw talent into highly sought-after professionals.
          </p>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
        <div className="glass-panel hover-lift" style={{ padding: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎯</div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Our Mission</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            To provide uncompromising quality in skill enhancement and end-to-end placement assistance, ensuring every enrolled candidate transitions smoothly into their desired IT or corporate role.
          </p>
        </div>
        <div className="glass-panel hover-lift" style={{ padding: '3rem' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👁️‍🗨️</div>
          <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem' }}>Our Vision</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7 }}>
            To be recognized globally as the most authentic, reliable, and results-driven career transition platform, fostering the innovators and tech leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ textAlign: 'center' }}>
        <h2 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '3rem' }}>Why Students Choose Us</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
          <div style={{ flex: '1 1 250px', padding: '2rem', border: '1px solid var(--accent-color)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ color: 'var(--accent-color)', fontSize: '1.2rem', marginBottom: '0.5rem' }}>100% Support</h4>
            <p style={{ color: 'var(--text-secondary)' }}>We sit with you until you are placed.</p>
          </div>
          <div style={{ flex: '1 1 250px', padding: '2rem', border: '1px solid var(--accent-secondary)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ color: '#ffb700', fontSize: '1.2rem', marginBottom: '0.5rem' }}>Industry Experts</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Learn directly from people working in top MNCs.</p>
          </div>
          <div style={{ flex: '1 1 250px', padding: '2rem', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 'var(--radius-md)' }}>
            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Govt Recognized</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Valuable and authentic certificates.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
