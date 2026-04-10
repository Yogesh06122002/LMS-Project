import React from 'react';

interface CardProps {
  title: string;
  description: string;
  videoUrl: string;
}

export default function Card({ title, description, videoUrl }: CardProps) {
  return (
    <div className="glass-panel hover-lift" style={{ display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      <div style={{ background: '#000', aspectRatio: '16/9', position: 'relative' }}>
        <video 
          controls 
          preload="metadata"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          src={videoUrl}
        />
      </div>
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>{title}</h3>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>
          {description?.length > 100 ? `${description.substring(0, 100)}...` : description}
        </p>
      </div>
    </div>
  );
}
