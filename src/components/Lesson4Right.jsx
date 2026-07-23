import InteractiveText from './InteractiveText';

export default function Lesson4Right() {
  return (
    <div className="page" style={{ paddingLeft: '50px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">
          ✏️ Je m'entraîne
        </div>
      </div>

      <div className="blue-box">
        <div className="blue-box-title">Pour commencer</div>
        <InteractiveText fr="Dans chacune des phrases, souligne le verbe." ru="В каждом из предложений подчеркни глагол." type="inline" />
        <div style={{ marginTop: '10px', fontSize: '1.1em' }}>
          <InteractiveText fr="Le petit veau tète sa mère." displayFr={<>Le petit veau <u>tète</u> sa mère.</>} ru="Маленький теленок сосет свою мать." type="inline" />
          <span style={{ color: '#888', margin: '0 10px' }}>→</span>
          <InteractiveText fr="Hier, le petit veau tétait sa mère." displayFr={<>Hier, le petit veau <u>tétait</u> sa mère.</>} ru="Вчера маленький теленок сосал свою мать." type="inline" />
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">1</span>
          <span className="ex-stars">*</span>
          <span className="ex-instruction"><InteractiveText fr="Récris les phrases au passé en commençant par Hier. Puis encadre le verbe." displayFr={<><b>Récris</b> les phrases <b>au passé</b> en commençant par <b>Hier</b>. Puis <b>encadre</b> le verbe.</>} ru="Перепиши предложения в прошедшем времени, начав с Hier (Вчера). Затем обведи в рамку глагол." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Les poules pondent des œufs." ru="Курицы несут яйца." type="inline" /></div>
            <div style={{ color: '#c44d3a', fontWeight: 'bold', marginLeft: '20px' }}>Hier, ___________________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="La fermière porte un panier." ru="Фермерша несет корзину." type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>_________________________________________</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">2</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction"><InteractiveText fr="Entoure les verbes. Puis écris leur infinitif." displayFr={<><b>Entoure</b> les verbes. Puis <b>écris</b> leur infinitif.</>} ru="Обведи глаголы. Затем напиши их инфинитив." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Le tracteur avance dans le champ." ru="Трактор продвигается по полю." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>→ infinitif : __________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Le fermier ferme l'enclos." ru="Фермер закрывает загон." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>→ infinitif : __________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">c.</span> <InteractiveText fr="Les cochons dorment dans la boue." ru="Свиньи спят в грязи." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>→ infinitif : __________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">d.</span> <InteractiveText fr="Les chèvres mangent des feuilles." ru="Козы едят листья." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>→ infinitif : __________________________</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">3</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction"><InteractiveText fr="Complète les phrases commençant par C'est... qui afin de trouver le sujet." displayFr={<><b>Complète</b> les phrases commençant par <b>C'est... qui</b> afin de trouver le sujet.</>} ru="Дополни предложения, начинающиеся с C'est... qui, чтобы найти подлежащее." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Jules caresse les ânes." displayFr={<>Jules <span style={{border: '1px solid #e53935', padding: '2px 4px', borderRadius: '4px'}}>caresse</span> les ânes.</>} ru="Жюль гладит ослов." type="inline" /></div>
            <div style={{ marginLeft: '20px', fontStyle: 'italic' }}>Qui est-ce qui caresse les ânes ?</div>
            <div style={{ marginLeft: '20px' }}>C'est ____________________ qui caresse les ânes.</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Ce petit agneau tète sa mère." displayFr={<>Ce petit agneau <span style={{border: '1px solid #e53935', padding: '2px 4px', borderRadius: '4px'}}>tète</span> sa mère.</>} ru="Этот маленький ягненок сосет свою мать." type="inline" /></div>
            <div style={{ marginLeft: '20px', fontStyle: 'italic' }}>Qui est-ce qui tète sa mère ?</div>
            <div style={{ marginLeft: '20px' }}>C'est ____________________ qui tète sa mère.</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">4</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction"><InteractiveText fr="Souligne les sujets des verbes encadrés." displayFr={<><b>Souligne</b> les sujets des verbes encadrés.</>} ru="Подчеркни подлежащие обведенных глаголов." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li><span className="ex-letter">a.</span> <InteractiveText fr="Nous fabriquons du fromage de chèvre." displayFr={<>Nous <span style={{border: '1px solid #888', padding: '2px 4px'}}>fabriquons</span> du fromage de chèvre.</>} ru="Мы делаем козий сыр." type="inline" /></li>
          <li><span className="ex-letter">b.</span> <InteractiveText fr="Les dindons mangent des graines." displayFr={<>Les dindons <span style={{border: '1px solid #888', padding: '2px 4px'}}>mangent</span> des graines.</>} ru="Индюки едят семена." type="inline" /></li>
          <li><span className="ex-letter">c.</span> <InteractiveText fr="Ce poussin s'éloigne du poulailler." displayFr={<>Ce poussin <span style={{border: '1px solid #888', padding: '2px 4px'}}>s'éloigne</span> du poulailler.</>} ru="Этот цыпленок удаляется от курятника." type="inline" /></li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">5</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Entoure le verbe et souligne le sujet." displayFr={<><b>Entoure</b> le verbe et <b>souligne</b> le sujet.</>} ru="Обведи глагол и подчеркни подлежащее." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li><span className="ex-letter">a.</span> <InteractiveText fr="Ma tante travaille dans une ferme." ru="Моя тетя работает на ферме." type="inline" /></li>
          <li><span className="ex-letter">b.</span> <InteractiveText fr="Elle trait les vaches tous les matins." ru="Она доит коров каждое утро." type="inline" /></li>
          <li><span className="ex-letter">c.</span> <InteractiveText fr="Son métier est difficile !" ru="Ее профессия трудна!" type="inline" /></li>
        </ul>
      </div>

      <div className="exercise-item" style={{ borderBottom: 'none' }}>
        <div>
          <span className="ex-number">6</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Entoure le verbe, écris son infinitif et souligne le sujet." displayFr={<><b>Entoure</b> le verbe, <b>écris</b> son infinitif et <b>souligne</b> le sujet.</>} ru="Обведи глагол, напиши его инфинитив и подчеркни подлежащее." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Les chevaux gambadent dans le pré." ru="Лошади резвятся на лугу." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>→ infinitif : __________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Arthur observe les lapins dans leur clapier." ru="Артур наблюдает за кроликами в их клетке." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>→ infinitif : __________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">c.</span> <InteractiveText fr="Le petit du lapin s'appelle le lapereau." ru="Детеныш кролика называется крольчонок." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>→ infinitif : __________________________</div>
          </li>
        </ul>
      </div>

    </div>
  );
}
