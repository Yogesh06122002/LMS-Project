'use client';
import { useState, useRef, useEffect } from 'react';
// import { fetchWithAuth } from '../../../lib/api';

export default function AdminUpload() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (localStorage.getItem('role') !== 'ADMIN') {
      window.location.href = '/dashboard';
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setMessage({ type: 'error', text: 'Please select a video file' });
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const token = localStorage.getItem('token');
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

      const res = await fetch(`${API_URL}/videos/upload`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData,
      });

      if (!res.ok) throw new Error('Failed to upload video');

      setMessage({ type: 'success', text: 'Video uploaded successfully!' });
      setTitle('');
      setDescription('');
      setFile(null);
      if (fileInputRef.current) fileInputRef.current.value = '';

    } catch (err: any) {
      setMessage({ type: 'error', text: err.message || 'Upload failed' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container min-h-screen flex-center">
      <div className="glass-panel" style={{ width: '100%', maxWidth: '600px', padding: '3rem' }}>
        <h2 className="text-gradient" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Upload Course Material</h2>

        {message.text && (
          <div style={{
            background: message.type === 'error' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(34, 197, 94, 0.1)',
            color: message.type === 'error' ? 'var(--danger-color)' : 'var(--success-color)',
            padding: '1rem',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '1.5rem'
          }}>
            {message.text}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label className="input-label">Course Title</label>
            <input
              type="text"
              className="input-field"
              required
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Description</label>
            <textarea
              className="input-field"
              rows={4}
              required
              value={description}
              onChange={e => setDescription(e.target.value)}
              style={{ resize: 'vertical' }}
            />
          </div>

          <div className="input-group">
            <label className="input-label">Video File</label>
            <div style={{ position: 'relative' }}>
              <input
                type="file"
                accept="video/*"
                ref={fileInputRef}
                onChange={e => setFile(e.target.files?.[0] || null)}
                style={{
                  position: 'absolute',
                  width: '100%', height: '100%', opacity: 0, cursor: 'pointer'
                }}
              />
              <div className="input-field" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px dashed rgba(255,255,255,0.2)', background: 'rgba(15,23,42,0.4)', color: file ? 'var(--text-primary)' : 'var(--text-secondary)' }}>
                {file ? file.name : "Drag and drop or click to browse"}
              </div>
            </div>
          </div>

          <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1.5rem' }} disabled={loading}>
            {loading ? <div className="spinner" /> : 'Upload Material'}
          </button>
        </form>
      </div>
    </div>
  );
}
