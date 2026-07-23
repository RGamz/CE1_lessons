import { useState } from 'react'
import Catalog from './components/Catalog'
import BookViewer from './components/BookViewer'
import Lesson2Left from './components/Lesson2Left'
import Lesson2Right from './components/Lesson2Right'
import Lesson3Left from './components/Lesson3Left'
import Lesson3Right from './components/Lesson3Right'
import Lesson4Left from './components/Lesson4Left'
import Lesson4Right from './components/Lesson4Right'
import './index.css'

function App() {
  const [currentLesson, setCurrentLesson] = useState(null);

  const renderLesson = () => {
    switch(currentLesson) {
      case 2:
        return <BookViewer leftPage={Lesson2Left} rightPage={Lesson2Right} onGoHome={() => setCurrentLesson(null)} />;
      case 3:
        return <BookViewer leftPage={Lesson3Left} rightPage={Lesson3Right} onGoHome={() => setCurrentLesson(null)} />;
      case 4:
        return <BookViewer leftPage={Lesson4Left} rightPage={Lesson4Right} onGoHome={() => setCurrentLesson(null)} />;
      default:
        return <Catalog onSelectLesson={setCurrentLesson} />;
    }
  };

  return renderLesson();
}

export default App
