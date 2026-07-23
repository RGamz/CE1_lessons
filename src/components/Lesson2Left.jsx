import InteractiveText from './InteractiveText';

export default function Lesson2Left() {
  return (
    <div className="page" style={{ borderRight: '1px solid #eee' }}>
      
      {/* Header */}
      <div className="header-banner">
        <div className="header-number">2</div>
        <div className="header-title">Les formes de phrases</div>
      </div>

      {/* Je comprends section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title">
          💡 Je comprends
        </div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">La forme affirmative ou négative</div>
        
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="• La forme affirmative indique une action qui a lieu." 
            displayFr={<>• La forme affirmative indique une action qui <b>a lieu</b>.</>}
            ru="Утвердительная форма указывает на происходящее действие." 
          />
          <span className="examples-label">Exemples : </span>
          <InteractiveText fr="Il colorie son dessin." ru="Он раскрашивает свой рисунок." type="inline" />{' '}
          <InteractiveText fr="Il aime colorier." ru="Он любит раскрашивать." type="inline" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="• La forme négative est le contraire de la forme affirmative." 
            displayFr={<>• La forme négative est le <b>contraire</b> de la forme affirmative.</>}
            ru="Отрицательная форма — это противоположность утвердительной." 
          />
          <InteractiveText 
            fr="Elle indique une action qui n'a pas lieu." 
            displayFr={<>Elle indique une action qui <b>n'a pas lieu</b>.</>}
            ru="Она указывает на действие, которое не происходит." 
          />
          <InteractiveText 
            fr="Le verbe est encadré par ne... pas ou n'... pas." 
            displayFr={<>Le verbe est encadré par <b><span style={{color: '#c44d3a'}}>ne... pas</span></b> ou <b><span style={{color: '#c44d3a'}}>n'... pas</span></b>.</>}
            ru="Глагол окружен словами ne... pas или n'... pas." 
          />
          <span className="examples-label">Exemples : </span>
          <InteractiveText fr="Il ne colorie pas son dessin." displayFr={<>Il <b><span style={{color: '#c44d3a'}}>ne</span></b> colorie <b><span style={{color: '#c44d3a'}}>pas</span></b> son dessin.</>} ru="Он не раскрашивает свой рисунок." type="inline" />{' '}
          <InteractiveText fr="Il n'aime pas colorier." displayFr={<>Il <b><span style={{color: '#c44d3a'}}>n'</span></b>aime <b><span style={{color: '#c44d3a'}}>pas</span></b> colorier.</>} ru="Он не любит раскрашивать." type="inline" />
        </div>

        <div className="theory-subtitle" style={{ marginTop: '25px' }}>La forme exclamative</div>
        
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="• Elle exprime un sentiment : la surprise, la joie, la colère, l'admiration, la peur..." 
            displayFr={<>• Elle exprime un <b>sentiment</b> : la surprise, la joie, la colère, l'admiration, la peur...</>}
            ru="Она выражает чувство: удивление, радость, гнев, восхищение, страх..." 
          />
          <InteractiveText 
            fr="• Une phrase peut être à la fois affirmative et exclamative, ou négative et exclamative." 
            displayFr={<>• Une phrase peut être à la fois <b>affirmative et exclamative</b>, ou <b>négative et exclamative</b>.</>}
            ru="Предложение может быть одновременно утвердительным и восклицательным, или отрицательным и восклицательным." 
          />
          <InteractiveText 
            fr="• Une phrase exclamative se termine toujours par un point d'exclamation." 
            displayFr={<>• Une phrase exclamative se termine toujours par <b>un point d'exclamation</b>.</>}
            ru="Восклицательное предложение всегда заканчивается восклицательным знаком." 
          />
          <span className="examples-label">Exemples : </span>
          <InteractiveText fr="Comme il colorie bien !" ru="Как он хорошо раскрашивает!" type="inline" />{' '}
          <InteractiveText fr="Il ne veut surtout pas qu'on l'aide !" ru="Он совсем не хочет, чтобы ему помогали!" type="inline" />
        </div>
      </div>

      {/* Je retiens l'essentiel section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title orange" style={{ background: '#d35400' }}>
          👁️ Je retiens l'essentiel
        </div>
      </div>

      <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '2px solid #c8e6c9', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '15px' }}>
          <div style={{ background: '#4caf50', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold' }}>FORME AFFIRMATIVE</div>
          <div style={{ background: '#e53935', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold' }}>FORME NÉGATIVE</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.95em' }}>
          <InteractiveText fr="Clément veut aller à l'école." ru="Клеман хочет пойти в школу." type="inline" />
          <InteractiveText fr="Clément ne veut pas aller à l'école." displayFr={<>Clément <b><span style={{color: '#c44d3a'}}>ne</span></b> veut <b><span style={{color: '#c44d3a'}}>pas</span></b> aller à l'école.</>} ru="Клеман не хочет идти в школу." type="inline" />
        </div>
        
        <div style={{ marginTop: '20px', background: '#1976d2', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', display: 'inline-block' }}>FORME EXCLAMATIVE</div>
        <div style={{ marginTop: '10px' }}>
          <InteractiveText fr="Mon école est fantastique !" ru="Моя школа просто фантастика!" type="inline" />
        </div>
      </div>

      <div style={{ background: '#fff9c4', padding: '15px', borderRadius: '8px', border: '1px solid #fff59d', fontSize: '0.9em' }}>
        <InteractiveText fr="La forme affirmative veut dire « oui »." ru="Утвердительная форма означает «да»." />
        <InteractiveText fr="La forme négative veut dire « non »." ru="Отрицательная форма означает «нет»." />
        <InteractiveText fr="La forme exclamative exprime une émotion." ru="Восклицательная форма выражает эмоцию." />
      </div>

    </div>
  );
}
