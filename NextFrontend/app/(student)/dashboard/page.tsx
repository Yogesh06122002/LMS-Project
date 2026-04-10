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
      
      {videos.length === 0 && !loading && (
        <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center' }}>
          <p style={{ color: 'var(--text-secondary)' }}>No courses available yet.</p>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
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
  );
}
