import { useState } from 'react'
import Catalog from './components/Catalog'
import BookViewer from './components/BookViewer'
import Lesson2Left from './components/Lesson2Left'
import Lesson2Right from './components/Lesson2Right'
import Lesson3Left from './components/Lesson3Left'
import Lesson3Right from './components/Lesson3Right'
import Lesson4Left from './components/Lesson4Left'
import Lesson4Right from './components/Lesson4Right'
import Lesson5Left from './components/Lesson5Left'
import Lesson5Right from './components/Lesson5Right'
import Lesson6Left from './components/Lesson6Left'
import Lesson6Right from './components/Lesson6Right'
import Lesson7Left from './components/Lesson7Left'
import Lesson7Right from './components/Lesson7Right'
import Lesson8Left from './components/Lesson8Left'
import Lesson8Right from './components/Lesson8Right'
import Lesson9Left from './components/Lesson9Left'
import Lesson9Right from './components/Lesson9Right'
import Lesson10Left from './components/Lesson10Left'
import Lesson10Right from './components/Lesson10Right'
import Lesson11Left from './components/Lesson11Left'
import Lesson11Right from './components/Lesson11Right'
import Lesson12Left from './components/Lesson12Left'
import Lesson12Right from './components/Lesson12Right'
import Lesson13Left from './components/Lesson13Left'
import Lesson13Right from './components/Lesson13Right'
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
      case 5:
        return <BookViewer leftPage={Lesson5Left} rightPage={Lesson5Right} onGoHome={() => setCurrentLesson(null)} />;
      case 6:
        return <BookViewer leftPage={Lesson6Left} rightPage={Lesson6Right} onGoHome={() => setCurrentLesson(null)} />;
      case 7:
        return <BookViewer leftPage={Lesson7Left} rightPage={Lesson7Right} onGoHome={() => setCurrentLesson(null)} />;
      case 8:
        return <BookViewer leftPage={Lesson8Left} rightPage={Lesson8Right} onGoHome={() => setCurrentLesson(null)} />;
      case 9:
        return <BookViewer leftPage={Lesson9Left} rightPage={Lesson9Right} onGoHome={() => setCurrentLesson(null)} />;
      case 10:
        return <BookViewer leftPage={Lesson10Left} rightPage={Lesson10Right} onGoHome={() => setCurrentLesson(null)} />;
      case 11:
        return <BookViewer leftPage={Lesson11Left} rightPage={Lesson11Right} onGoHome={() => setCurrentLesson(null)} />;
      case 12:
        return <BookViewer leftPage={Lesson12Left} rightPage={Lesson12Right} onGoHome={() => setCurrentLesson(null)} />;
      case 13:
        return <BookViewer leftPage={Lesson13Left} rightPage={Lesson13Right} onGoHome={() => setCurrentLesson(null)} />;
      default:
        return <Catalog onSelectLesson={setCurrentLesson} />;
    }
  };

  return renderLesson();
}

export default App
