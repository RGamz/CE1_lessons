export default function Catalog({ onSelectLesson }) {
  const lessons = [
    { id: 2, title: "Les formes de phrases", ready: true },
    { id: 3, title: "Les constituants de la phrase", ready: true },
    { id: 4, title: "Le verbe et son sujet", ready: true },
    { id: 5, title: "Le nom propre et le nom commun", ready: false },
  ];

  return (
    <div style={{ maxWidth: '800px', width: '100%', margin: '0 auto', background: 'white', padding: '40px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '40px', color: '#333' }}>📚 Mon manuel de français</h1>
      
      <div style={{ display: 'grid', gap: '20px' }}>
        {lessons.map(lesson => (
          <div 
            key={lesson.id}
            onClick={() => lesson.ready && onSelectLesson(lesson.id)}
            style={{
              padding: '20px',
              border: `2px solid ${lesson.ready ? '#81c784' : '#eee'}`,
              borderRadius: '12px',
              background: lesson.ready ? '#f1f8e9' : '#fafafa',
              cursor: lesson.ready ? 'pointer' : 'default',
              display: 'flex',
              alignItems: 'center',
              transition: 'transform 0.2s',
              opacity: lesson.ready ? 1 : 0.6
            }}
          >
            <div style={{
              background: lesson.ready ? '#4caf50' : '#ccc',
              color: 'white',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              marginRight: '20px'
            }}>
              {lesson.id}
            </div>
            <div style={{ flex: 1 }}>
              <h2 style={{ fontSize: '1.2rem', margin: 0, color: lesson.ready ? '#2e7d32' : '#999' }}>
                {lesson.title}
              </h2>
              {!lesson.ready && (
                <div style={{ fontSize: '0.85em', color: '#999', marginTop: '4px' }}>В разработке...</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
