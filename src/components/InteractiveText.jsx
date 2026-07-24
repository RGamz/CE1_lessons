import { useState } from 'react';
import { Volume2 } from 'lucide-react';

export default function InteractiveText({ fr, displayFr, ru, type = "sentence" }) {
  const [revealed, setRevealed] = useState(false);

  const speak = (e) => {
    e.stopPropagation();
    const utterance = new SpeechSynthesisUtterance(fr);
    utterance.lang = 'fr-FR';
    window.speechSynthesis.speak(utterance);
  };

  const content = displayFr || fr;

  // If it's just a word or short phrase inline
  if (type === "inline") {
    return (
      <span className="interactive-text">
        <span className="interactive-french" onClick={speak}>
          {content} <Volume2 size="1em" className="interactive-icon" style={{ marginLeft: '4px', display: 'inline-block', verticalAlign: 'middle' }} />
        </span>
        {ru && (
          <span 
            className={`interactive-translation ${revealed ? 'revealed' : ''}`}
            onClick={() => setRevealed(!revealed)}
            title="Нажми, чтобы увидеть перевод"
          >
            {ru}
          </span>
        )}
      </span>
    );
  }

  // Default block/sentence behavior
  return (
    <div className="interactive-text" style={{ display: 'block', marginBottom: '8px' }}>
      <span className="interactive-french" onClick={speak} style={{ fontSize: '1.1em', display: 'inline-block' }}>
        {content} <Volume2 size="0.9em" className="interactive-icon" style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
      </span>
      {ru && (
        <div 
          className={`interactive-translation ${revealed ? 'revealed' : ''}`}
          onClick={() => setRevealed(!revealed)}
          title="Нажми, чтобы увидеть перевод"
          style={{ display: 'block', marginTop: '2px' }}
        >
          {ru}
        </div>
      )}
    </div>
  );
}
