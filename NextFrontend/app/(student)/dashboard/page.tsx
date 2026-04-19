'use client';
import { useEffect, useState, useRef, useCallback } from 'react';
import Card from '../../../components/Card';
import { fetchWithAuth } from '../../../lib/api';

interface Video {
  id: string;
  title: string;
  description: string;
  videoUrl: string;
}

export default function Dashboard() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // Intersection Observer for lazy loading / infinite scroll
  const observer = useRef<IntersectionObserver | null>(null);
  
  const lastVideoElementRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });

    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  useEffect(() => {
    const loadVideos = async () => {
      try {
        setLoading(true);
        const res = await fetchWithAuth(`/videos?page=${page}&limit=6`);
        setVideos(prev => [...prev, ...res.data]);
        setHasMore(page < res.meta.lastPage);
      } catch (err) {
        console.error('Failed to load videos', err);
      } finally {
        setLoading(false);
      }
    };
    loadVideos();
  }, [page]);

  return (
    <div className="container min-h-screen" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
      <h1 className="text-gradient" style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Learning Hub</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '3rem', alignItems: 'start' }}>
        
        {/* Main Content Area */}
        <div>
          {/* Tabs / Sections Header */}
          <div style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)', mb: '2rem', paddingBottom: '1rem' }}>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', borderBottom: '2px solid var(--accent-color)' }}>Course Videos</h2>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>PDF Materials</h2>
            <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>Assignments</h2>
          </div>
          
          <div style={{ marginTop: '2rem' }}>
            {videos.length === 0 && !loading && (
              <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-secondary)' }}>No materials available yet.</p>
              </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
              {videos.map((video, index) => {
                if (videos.length === index + 1) {
                  return (
                    <div ref={lastVideoElementRef} key={video.id}>
                      <Card {...video} />
                    </div>
                  );
                } else {
                  return <Card key={video.id} {...video} />;
                }
              })}
            </div>

            {loading && (
              <div style={{ display: 'flex', justifyContent: 'center', marginTop: '3rem' }}>
                <div className="spinner" style={{ borderColor: 'var(--accent-color)', borderTopColor: 'transparent', width: '40px', height: '40px', borderWidth: '4px' }}></div>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar / Progress Tracking */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Course Progress</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
              <span>Completion</span>
              <span>45%</span>
            </div>
            {/* Progress Bar Stub */}
            <div style={{ width: '100%', height: '8px', background: 'var(--bg-secondary)', borderRadius: 'var(--radius-full)', overflow: 'hidden' }}>
              <div style={{ width: '45%', height: '100%', background: 'var(--accent-gradient)' }}></div>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Upcoming Tasks</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ padding: '1rem', background: 'rgba(255, 215, 0, 0.05)', borderLeft: '3px solid var(--accent-color)', borderRadius: '4px' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>Submit Resume Draft</h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Due in 2 days</span>
              </li>
              <li style={{ padding: '1rem', background: 'var(--bg-secondary)', borderLeft: '3px solid rgba(255,255,255,0.1)', borderRadius: '4px' }}>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '0.2rem' }}>Mock Interview Intro</h4>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Due in 5 days</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
