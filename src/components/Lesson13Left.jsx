import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson13Left() {
  return (
    <div className="page" style={{ borderRight: '1px solid #eee', paddingRight: '20px' }}>
      <div className="header-banner">
        <div className="header-number">13</div>
        <div className="header-title">
          <InteractiveText fr="Les valeurs de la lettre s" ru="Значения буквы s" />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title">💡 <InteractiveText fr="Je comprends" ru="Я понимаю" /></div>
      </div>

      <div className="theory-block">
        <p>
          <InteractiveText 
            fr="La lettre s peut donner le son « s » ou le son « z »." 
            displayFr={<>La lettre <b>s</b> peut donner le son « s » ou le son « z ».</>}
            ru="Буква s может давать звук «s» или звук «z»." 
          />
          <br/>
          <InteractiveText 
            fr="Cela dépend des lettres qui l'encadrent." 
            ru="Это зависит от букв, которые ее окружают." 
          />
        </p>

        <div className="theory-subtitle">
          ■ <InteractiveText fr="La lettre s entre une voyelle et une consonne" displayFr={<>La lettre <b>s</b> entre une voyelle et une consonne</>} ru="Буква s между гласной и согласной" />
        </div>
        <p>
          <InteractiveText 
            fr="Lorsque la lettre s se trouve entre une voyelle et une consonne, elle se prononce « s »." 
            displayFr={<>Lorsque la lettre <b>s</b> se trouve entre une voyelle et une consonne, elle se prononce « s ».</>}
            ru="Когда буква s находится между гласной и согласной, она произносится как «s»." 
          />
        </p>
        <div style={{ marginBottom: '10px' }}>
          <span className="examples-label"><InteractiveText fr="Exemples :" ru="Примеры:" type="inline" /> </span>
          <InteractiveText 
            fr="une veste, une casquette" 
            displayFr={<>une ve<b>s</b>te, une ca<b>s</b>quette</>}
            ru="куртка, кепка" 
          />
        </div>

        <div className="theory-subtitle">
          ■ <InteractiveText fr="La lettre s entre deux voyelles" displayFr={<>La lettre <b>s</b> entre deux voyelles</>} ru="Буква s между двумя гласными" />
        </div>
        <ul>
          <li>
            <InteractiveText 
              fr="Lorsque la lettre s se trouve entre deux voyelles, elle se prononce « z »." 
              displayFr={<>Lorsque la lettre <b>s</b> se trouve entre deux voyelles, elle se prononce « z ».</>}
              ru="Когда буква s находится между двумя гласными, она произносится как «z»." 
            />
            <br />
            <span className="examples-label"><InteractiveText fr="Exemples :" ru="Примеры:" type="inline" /> </span>
            <InteractiveText 
              fr="une chemise, une blouse" 
              displayFr={<>une chemi<b>s</b>e, une blou<b>s</b>e</>}
              ru="рубашка, блузка" 
            />
          </li>
          <li style={{ marginTop: '10px' }}>
            <InteractiveText 
              fr="Pour obtenir le son « s » entre deux voyelles, il faut écrire ss." 
              displayFr={<>Pour obtenir le son « s » entre deux voyelles, il faut écrire <b>ss</b>.</>}
              ru="Чтобы получить звук «s» между двумя гласными, нужно написать ss." 
            />
            <br />
            <span className="examples-label"><InteractiveText fr="Exemple :" ru="Пример:" type="inline" /> </span>
            <InteractiveText 
              fr="des chaussettes" 
              displayFr={<>des chau<b>ss</b>ettes</>}
              ru="носки" 
            />
          </li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', margin: '30px 0 20px' }}>
        <div className="section-title">👁️ <InteractiveText fr="Je retiens l'essentiel" ru="Я запоминаю основное" /></div>
      </div>

      <div className="theory-block" style={{ backgroundColor: '#f9f9f9', padding: '15px', borderRadius: '8px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ backgroundColor: '#4a90e2', color: 'white', padding: '5px 10px', borderRadius: '4px', fontWeight: 'bold' }}>s</div>
            <div>➔</div>
            <div style={{ border: '1px solid #ccc', padding: '5px 10px', borderRadius: '4px' }}>
              <InteractiveText fr="Entre une voyelle et une consonne" ru="Между гласной и согласной" />
            </div>
            <div>➔ 👂 <InteractiveText fr="J'entends « s »" ru="Я слышу « s »" /></div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ backgroundColor: '#e24a75', color: 'white', padding: '5px 10px', borderRadius: '4px', fontWeight: 'bold' }}>ss</div>
            <div>➔</div>
            <div style={{ border: '1px solid #ccc', padding: '5px 10px', borderRadius: '4px' }}>
              <InteractiveText fr="Entre deux voyelles" ru="Между двумя гласными" />
            </div>
            <div>➔ 👂 <InteractiveText fr="J'entends « s »" ru="Я слышу « s »" /></div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ backgroundColor: '#8fc340', color: 'white', padding: '5px 10px', borderRadius: '4px', fontWeight: 'bold' }}>s</div>
            <div>➔</div>
            <div style={{ border: '1px solid #ccc', padding: '5px 10px', borderRadius: '4px' }}>
              <InteractiveText fr="Entre deux voyelles" ru="Между двумя гласными" />
            </div>
            <div>➔ 👂 <InteractiveText fr="J'entends « z »" ru="Я слышу « z »" /></div>
          </div>
        </div>

        <div style={{ backgroundColor: '#fff3cd', padding: '10px', borderRadius: '4px', borderLeft: '4px solid #ffc107' }}>
          <InteractiveText 
            fr="Si la lettre s est au tout début du mot, elle se prononce « s » : sauter, serpent." 
            displayFr={<>Si la lettre <b>s</b> est au tout début du mot, elle se prononce « s » : <b>s</b>auter, <b>s</b>erpent.</>}
            ru="Если буква s стоит в самом начале слова, она произносится как «s»: прыгать, змея." 
          />
        </div>
      </div>
    </div>
  );
}
