import { Home } from 'lucide-react';

export default function BookViewer({ leftPage: LeftPage, rightPage: RightPage, onGoHome }) {
  return (
    <>
      <button 
        onClick={onGoHome}
        style={{
          position: 'fixed',
          top: '20px',
          left: '20px',
          background: 'white',
          border: 'none',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          zIndex: 100
        }}
      >
        <Home size={24} color="#1976d2" />
      </button>

      <div className="book-container">
        <LeftPage />
        <RightPage />
      </div>
    </>
  );
}
