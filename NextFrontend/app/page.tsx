import Link from 'next/link';

export default function Home() {
  return (
    <div className="container min-h-screen flex-center" style={{ flexDirection: 'column', textAlign: 'center' }}>
      <h1 className="text-gradient" style={{ fontSize: '4rem', marginBottom: '1rem' }}>
        Learn Without Limits
      </h1>
      <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem' }}>
        Access world-class video courses uploaded by top administrators and elevate your skillset today.
      </p>
      
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <Link href="/login" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
          Get Started
        </Link>
        <Link href="/dashboard" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
          View Dashboard
        </Link>
      </div>
    </div>
  );
}
