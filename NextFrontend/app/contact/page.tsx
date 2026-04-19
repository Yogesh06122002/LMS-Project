'use client';
import { FormEvent, useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Future: Integrate with backend API to save leads
  };

  return (
    <div className="container" style={{ paddingTop: '6rem', paddingBottom: '4rem', display: 'flex', flexWrap: 'wrap', gap: '4rem' }}>
      
      {/* Info Section */}
      <div style={{ flex: '1 1 400px' }}>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Get in Touch</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
          Have questions about our courses or need immediate career guidance? Drop us an inquiry or reach out directly on WhatsApp.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
          <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="glass-panel hover-lift" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '4px solid #25D366' }}>
            <div style={{ fontSize: '2rem' }}>💬</div>
            <div>
              <h3 style={{ fontSize: '1.2rem' }}>WhatsApp Us</h3>
              <p style={{ color: 'var(--text-secondary)' }}>For instant replies</p>
            </div>
          </a>

          <a href="https://www.instagram.com/careerguruvision" target="_blank" rel="noreferrer" className="glass-panel hover-lift" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', borderLeft: '4px solid #E1306C' }}>
            <div style={{ fontSize: '2rem' }}>📸</div>
            <div>
              <h3 style={{ fontSize: '1.2rem' }}>Instagram</h3>
              <p style={{ color: 'var(--text-secondary)' }}>@careerguruvision</p>
            </div>
          </a>
        </div>
      </div>

      {/* Inquiry Form */}
      <div style={{ flex: '1 1 400px' }}>
        <div className="glass-panel" style={{ padding: '3rem' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>Student Inquiry Form</h2>
          
          {submitted ? (
            <div style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid var(--success-color)', padding: '2rem', borderRadius: 'var(--radius-md)', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
              <h3 style={{ color: 'var(--success-color)', marginBottom: '0.5rem' }}>Request Sent successfully!</h3>
              <p style={{ color: 'var(--text-secondary)' }}>Our support team will contact you via WhatsApp shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div className="input-group">
                <label className="input-label">Full Name</label>
                <input type="text" required className="input-field" placeholder="e.g. Rahul S" />
              </div>
              
              <div className="input-group">
                <label className="input-label">WhatsApp Number</label>
                <input type="tel" required className="input-field" placeholder="+91 XXXXX XXXXX" />
              </div>

              <div className="input-group">
                <label className="input-label">College / Degree</label>
                <input type="text" required className="input-field" placeholder="e.g. B.Tech IT, 2024" />
              </div>

              <div className="input-group">
                <label className="input-label">What are you looking for?</label>
                <select required className="input-field" style={{ appearance: 'none', background: 'var(--bg-secondary)' }}>
                  <option value="" disabled selected>Select an option</option>
                  <option value="IT Job">Looking for IT Job</option>
                  <option value="Non-IT">Looking for Non-IT Job</option>
                  <option value="Skills">Just want to upgrade skills</option>
                  <option value="Interview">Need Interview Prep only</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem' }}>
                Submit Request
              </button>
            </form>
          )}
        </div>
      </div>

    </div>
  );
}
