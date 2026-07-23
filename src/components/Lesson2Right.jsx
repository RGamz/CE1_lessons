import InteractiveText from './InteractiveText';

export default function Lesson2Right() {
  return (
    <div className="page" style={{ paddingLeft: '50px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">
          ✏️ Je m'entraîne
        </div>
      </div>

      <div className="blue-box">
        <div className="blue-box-title">Pour commencer</div>
        <InteractiveText fr="Relie comme il convient." ru="Соедини, как подходит." type="inline" />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <div>
            <div style={{ color: '#1976d2', marginBottom: '5px' }}>a. Forme affirmative</div>
            <div style={{ color: '#1976d2', marginBottom: '5px' }}>b. Forme négative</div>
            <div style={{ color: '#1976d2' }}>c. Forme exclamative</div>
          </div>
          <div>
            <div style={{ marginBottom: '5px' }}><span style={{ color: '#1976d2' }}>• 1.</span> <InteractiveText fr="Elle veut dire « non »." ru="Она означает «нет»." type="inline" /></div>
            <div style={{ marginBottom: '5px' }}><span style={{ color: '#1976d2' }}>• 2.</span> <InteractiveText fr="Elle exprime une émotion." ru="Она выражает эмоцию." type="inline" /></div>
            <div><span style={{ color: '#1976d2' }}>• 3.</span> <InteractiveText fr="Elle veut dire « oui »." ru="Она означает «да»." type="inline" /></div>
          </div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">1</span>
          <span className="ex-stars">*</span>
          <span className="ex-instruction"><InteractiveText fr="Relie chaque phrase à la forme qui convient." ru="Соедини каждое предложение с подходящей формой." type="inline" /></span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
          <ul className="ex-list" style={{ flex: 1 }}>
            <li><span className="ex-letter">a.</span> <InteractiveText fr="Ils ne vont pas à l'école." ru="Они не идут в школу." type="inline" /></li>
            <li><span className="ex-letter">b.</span> <InteractiveText fr="Tu te ranges devant la classe." ru="Ты строишься перед классом." type="inline" /></li>
            <li><span className="ex-letter">c.</span> <InteractiveText fr="Je n'ai pas de stylo." ru="У меня нет ручки." type="inline" /></li>
            <li><span className="ex-letter">d.</span> <InteractiveText fr="Elle écrit avec soin." ru="Она пишет аккуратно." type="inline" /></li>
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', fontWeight: 'bold' }}>
            <div>• Affirmative</div>
            <div>• Négative</div>
          </div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">2</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction"><InteractiveText fr="Entoure les phrases à la forme exclamative." ru="Обведи предложения в восклицательной форме." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li><span className="ex-letter">a.</span> <InteractiveText fr="Comme ton texte est drôle !" ru="Какой у тебя смешной текст!" type="inline" /></li>
          <li><span className="ex-letter">b.</span> <InteractiveText fr="Ne cours pas dans les couloirs." ru="Не бегай по коридорам." type="inline" /></li>
          <li><span className="ex-letter">c.</span> <InteractiveText fr="Arrête !" ru="Прекрати!" type="inline" /></li>
          <li><span className="ex-letter">d.</span> <InteractiveText fr="Tu ne vas pas dans la cour ?" ru="Ты не пойдешь во двор?" type="inline" /></li>
          <li><span className="ex-letter">e.</span> <InteractiveText fr="J'ai trop de travail !" ru="У меня слишком много работы!" type="inline" /></li>
          <li><span className="ex-letter">f.</span> <InteractiveText fr="Que j'aimerais être en récréation !" ru="Как бы я хотел быть на перемене!" type="inline" /></li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">3</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Transforme les phrases en les mettant à la forme négative." displayFr={<><b>Transforme</b> les phrases en les mettant <b>à la forme négative</b>.</>} ru="Переделай предложения, поставив их в отрицательную форму." type="inline" /></span>
        </div>
        <div style={{ fontSize: '0.9em', color: '#c44d3a', fontWeight: 'bold', marginBottom: '10px' }}>
          <InteractiveText fr="N'oublie pas les deux petits mots de la négation : ne... pas ou n'... pas." displayFr={<>N'oublie pas les deux petits mots de la négation : <b>ne... pas</b> ou <b>n'... pas</b>.</>} ru="Не забудь про два маленьких слова отрицания: ne... pas или n'... pas." type="inline" />
        </div>
        <ul className="ex-list">
          <li><span className="ex-letter">a.</span> <InteractiveText fr="Le maître lit un conte aux élèves." ru="Учитель читает сказку ученикам." type="inline" /></li>
          <li><span className="ex-letter">b.</span> <InteractiveText fr="Cette histoire nous fait peur." ru="Эта история нас пугает." type="inline" /></li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">4</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Entoure les mots de la négation. Puis transforme les phrases en les mettant à la forme affirmative." displayFr={<>Entoure les mots de la négation. Puis <b>transforme</b> les phrases en les mettant <b>à la forme affirmative</b>.</>} ru="Обведи слова отрицания. Затем переделай предложения в утвердительную форму." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Noah n'est pas mon camarade." ru="Ной не мой товарищ." type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>→ ___________________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Je ne suis pas dans la même classe que lui." ru="Я не в том же классе, что и он." type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>→ ___________________________________</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item" style={{ borderBottom: 'none' }}>
        <div>
          <span className="ex-number">5</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Mets les phrases à la forme exclamative en commençant par Comme ou Que." displayFr={<><b>Mets</b> les phrases <b>à la forme exclamative</b> en commençant par <b><span style={{color: '#c44d3a'}}>Comme</span></b> ou <b><span style={{color: '#c44d3a'}}>Que</span></b>.</>} ru="Поставь фразы в восклицательную форму, начав с Comme или Que." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Son illustration est belle." ru="Его иллюстрация красивая." type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>______________________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Cette histoire est triste." ru="Эта история грустная." type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>______________________________________</div>
          </li>
        </ul>
      </div>

    </div>
  );
}
