import Link from 'next/link';

const COURSES = [
  {
    id: 'c1',
    title: 'Full Stack Development',
    description: 'Learn MERN stack from scratch and build industry-grade web applications. Master React, Node.js, and MongoDB.',
    icon: '💻',
    modules: 24,
    duration: '12 weeks'
  },
  {
    id: 'c2',
    title: 'Non-IT to IT Transition',
    description: 'A specialized foundational program designed to help non-technical graduates break into the thriving IT industry seamlessly.',
    icon: '🚀',
    modules: 18,
    duration: '8 weeks'
  },
  {
    id: 'c3',
    title: 'Interview Preparation Masterclass',
    description: 'Build confidence, ace mock interviews, and learn exactly how to answer the toughest HR and technical questions.',
    icon: '🎯',
    modules: 10,
    duration: '4 weeks'
  }
];

export default function CoursesPage() {
  return (
    <div className="container" style={{ paddingTop: '6rem', paddingBottom: '4rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
        <h1 className="text-gradient" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>Our Courses</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Explore our expert-led programs. Choose your path, read the introductory syllabus, and log in or create an account to unlock full-length video content.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {COURSES.map((course) => (
          <div key={course.id} className="glass-panel" style={{ padding: '2rem', display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div style={{ fontSize: '4rem', padding: '1rem', background: 'rgba(255, 215, 0, 0.1)', borderRadius: 'var(--radius-lg)' }}>
              {course.icon}
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{course.title}</h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '1rem' }}>
                {course.description}
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  📺 {course.modules} Modules
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  ⏱️ {course.duration} Duration
                </span>
              </div>
              
              <Link href="/login" className="btn btn-primary">
                Login / Register to Start Learning
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '4rem', textAlign: 'center', padding: '3rem', background: 'var(--bg-glass)', borderRadius: 'var(--radius-lg)', border: '1px dashed rgba(255,255,255,0.2)' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Already enrolled in a program?</h3>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          Head over to your dashboard to resume your video lessons and check your progress.
        </p>
        <Link href="/dashboard" className="btn btn-secondary">
          Go to Dashboard
        </Link>
      </div>
    </div>
  );
}
