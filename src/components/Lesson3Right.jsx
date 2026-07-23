import InteractiveText from './InteractiveText';

export default function Lesson3Right() {
  return (
    <div className="page" style={{ paddingLeft: '50px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">
          ✏️ Je m'entraîne
        </div>
      </div>

      <div className="blue-box">
        <div className="blue-box-title">Pour commencer</div>
        <InteractiveText fr="Entoure le sujet en vert, le verbe en rouge et le complément en bleu." ru="Обведи подлежащее зеленым, глагол красным, а дополнение синим." type="inline" />
        <div style={{ marginTop: '10px', fontSize: '1.1em' }}>
          <InteractiveText fr="Les enfants jouent sur la plage." ru="Дети играют на пляже." type="inline" />
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">1</span>
          <span className="ex-stars">*</span>
          <span className="ex-instruction"><InteractiveText fr="Remets les groupes de mots dans l'ordre pour former des phrases." ru="Расставь группы слов по порядку, чтобы получились предложения." type="inline" /></span>
        </div>
        <div style={{ fontSize: '0.9em', color: '#c44d3a', fontWeight: 'bold', marginBottom: '10px' }}>
          <InteractiveText fr="N'oublie pas les majuscules et les points !" ru="Не забудь про заглавные буквы и точки!" type="inline" />
        </div>
        <ul className="ex-list">
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="à la mer – allons – nous" ru="на море - идем - мы" type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>→ ___________________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="naviguent – les bateaux – calmement" ru="плывут - лодки - спокойно" type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>→ ___________________________________</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">2</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction"><InteractiveText fr="Réponds à la question posée pour chacune de ces phrases." ru="Ответь на заданный вопрос для каждого из этих предложений." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Les moules s'accrochent sur les rochers." ru="Мидии цепляются за скалы." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>→ Où ? _______________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="La prochaine fois, je prendrai mon épuisette." ru="В следующий раз я возьму свой сачок." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>→ Quand ? ____________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">c.</span> <InteractiveText fr="La mer se retire doucement." ru="Море медленно отступает." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>→ Comment ? __________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">d.</span> <InteractiveText fr="Parfois, les mouettes crient très fort !" ru="Иногда чайки кричат очень громко!" type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>→ Quand ? Comment ? __________________</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">3</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction"><InteractiveText fr="Recopie les phrases en suivant les indications." ru="Перепиши предложения, следуя указаниям." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Chaque jour, des bateaux accostent au port." ru="Каждый день корабли швартуются в порту." type="inline" /></div>
            <div style={{ color: '#1976d2', marginLeft: '20px' }}>→ Déplace les compléments :</div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>______________________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Les étoiles de mer se déplacent fréquemment au fond de l'océan." ru="Морские звезды часто передвигаются по дну океана." type="inline" /></div>
            <div style={{ color: '#1976d2', marginLeft: '20px' }}>→ Supprime les compléments :</div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>______________________________________</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">4</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Choisis parmi les sujets, les verbes et les compléments proposés pour écrire une phrase." ru="Выбери из предложенных подлежащих, глаголов и дополнений, чтобы написать предложение." type="inline" /></span>
        </div>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', marginBottom: '15px', fontSize: '0.9em' }}>
          <thead>
            <tr style={{ background: '#e3f2fd' }}>
              <th style={{ border: '1px solid #90caf9', padding: '8px' }}>Sujets</th>
              <th style={{ border: '1px solid #90caf9', padding: '8px' }}>Verbes</th>
              <th style={{ border: '1px solid #90caf9', padding: '8px' }}>Compléments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #90caf9', padding: '8px' }}>papy et mamie<br/>le surfeur<br/>mes amis<br/>je</td>
              <td style={{ border: '1px solid #90caf9', padding: '8px' }}>glisse<br/>dessine<br/>chantent<br/>arriveront</td>
              <td style={{ border: '1px solid #90caf9', padding: '8px' }}>sur le sable<br/>sur la vague<br/>demain<br/>joyeusement</td>
            </tr>
          </tbody>
        </table>
        <div style={{ color: '#ccc', marginLeft: '20px' }}>______________________________________</div>
      </div>

      <div className="exercise-item" style={{ borderBottom: 'none' }}>
        <div>
          <span className="ex-number">5</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Ajoute un complément pour répondre à la question posée." ru="Добавь дополнение, чтобы ответить на заданный вопрос." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> ____________________, <InteractiveText fr="nous partirons." ru="мы уедем." type="inline" /></div>
            <div style={{ color: '#c44d3a', marginLeft: '20px', fontSize: '0.85em' }}>quand ?</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Je ramasse de jolis coquillages" ru="Я собираю красивые ракушки" type="inline" /> ____________________</div>
            <div style={{ color: '#c44d3a', marginLeft: '20px', fontSize: '0.85em' }}>où ?</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">c.</span> <InteractiveText fr="Ce petit crabe a peur, il se déplace" ru="Этот маленький краб боится, он передвигается" type="inline" /> ____________________</div>
            <div style={{ color: '#c44d3a', marginLeft: '20px', fontSize: '0.85em' }}>comment ?</div>
          </li>
        </ul>
      </div>

    </div>
  );
}
