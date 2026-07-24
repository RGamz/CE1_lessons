import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson12Left() {
  return (
    <div className="page lesson-left" style={{ borderRight: '1px solid #eee', paddingRight: '20px' }}>
      <div className="header-banner">
        <div className="header-number">12</div>
        <div className="header-title">
          <InteractiveText fr="Les accents du e" ru="Ударения над e" />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title">
          💡 <InteractiveText fr="Je comprends" ru="Я понимаю" />
        </div>
      </div>

      <div className="theory-block" style={{ marginBottom: '20px' }}>
        <p>
          <InteractiveText 
            fr="La lettre e produit différents sons selon l'accent qu'elle porte. Il existe trois sortes d'accents." 
            displayFr={<>La lettre <b>e</b> produit différents sons selon l'accent qu'elle porte. Il existe trois sortes d'accents.</>} 
            ru="Буква e производит разные звуки в зависимости от ударения, которое она несет. Существует три вида ударений." 
          />
        </p>

        <div className="theory-subtitle" style={{ color: '#006666', marginTop: '15px', fontWeight: 'bold' }}>
          ■ <InteractiveText fr="L'accent aigu : é" displayFr={<>L'accent aigu : <b>é</b></>} ru="Акут (острое ударение): é" />
        </div>
        <p>
          <InteractiveText 
            fr="Lorsqu'on met un accent aigu sur le e, il se prononce « é »." 
            displayFr={<>Lorsqu'on met un accent aigu sur le <b>e</b>, il se prononce <b>« é »</b>.</>} 
            ru="Когда над e ставится акут, она произносится как «é»." 
          />
        </p>
        <p>
          <span className="examples-label" style={{ color: '#cc3300' }}>Exemples : </span>
          <InteractiveText fr="un guépard, un éléphant" displayFr={<>un gu<b>é</b>pard, un <b>é</b>l<b>é</b>phant</>} ru="гепард, слон" />
        </p>

        <div className="theory-subtitle" style={{ color: '#006666', marginTop: '15px', fontWeight: 'bold' }}>
          ■ <InteractiveText fr="L'accent grave : è" displayFr={<>L'accent grave : <b>è</b></>} ru="Гравис (тяжелое ударение): è" />
        </div>
        <p>
          <InteractiveText 
            fr="Lorsqu'on met un accent grave sur le e, il se prononce « è »." 
            displayFr={<>Lorsqu'on met un accent grave sur le <b>e</b>, il se prononce <b>« è »</b>.</>} 
            ru="Когда над e ставится гравис, она произносится как «è»." 
          />
        </p>
        <p>
          <span className="examples-label" style={{ color: '#cc3300' }}>Exemples : </span>
          <InteractiveText fr="une vipère, une panthère" displayFr={<>une vip<b>è</b>re, une panth<b>è</b>re</>} ru="гадюка, пантера" />
        </p>

        <div className="theory-subtitle" style={{ color: '#006666', marginTop: '15px', fontWeight: 'bold' }}>
          ■ <InteractiveText fr="L'accent circonflexe : ê" displayFr={<>L'accent circonflexe : <b>ê</b></>} ru="Циркумфлекс (домик): ê" />
        </div>
        <p>
          <InteractiveText 
            fr="Lorsqu'on place un accent circonflexe sur le e, il se prononce « è »." 
            displayFr={<>Lorsqu'on place un accent circonflexe sur le <b>e</b>, il se prononce <b>« è »</b>.</>} 
            ru="Когда над e ставится циркумфлекс, она произносится как «è»." 
          />
        </p>
        <p>
          <span className="examples-label" style={{ color: '#cc3300' }}>Exemples : </span>
          <InteractiveText fr="la forêt, une bête" displayFr={<>la for<b>ê</b>t, une b<b>ê</b>te</>} ru="лес, зверь" />
        </p>

        <div className="theory-subtitle" style={{ color: '#006666', marginTop: '15px', fontWeight: 'bold' }}>
          ■ <InteractiveText fr="La lettre e suivie d'une consonne double" displayFr={<>La lettre <b>e</b> suivie d'une consonne double</>} ru="Буква e, за которой следует двойная согласная" />
        </div>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
          <li>
            <InteractiveText 
              fr="On ne met pas d'accent sur le e quand il est suivi d'une consonne double." 
              displayFr={<>On ne met pas d'accent sur le <b>e</b> quand il est suivi d'une consonne double.</>} 
              ru="Над e не ставится ударение, когда за ней следует двойная согласная." 
            />
          </li>
          <li>
            <InteractiveText 
              fr="Dans ce cas, il se prononce « è »." 
              displayFr={<>Dans ce cas, il se prononce <b>« è »</b>.</>} 
              ru="В этом случае она произносится как «è»." 
            />
          </li>
        </ul>
        <p>
          <span className="examples-label" style={{ color: '#cc3300' }}>Exemples : </span>
          <InteractiveText fr="la terre, une poubelle, une maisonnette" displayFr={<>la t<b>e</b>rre, une poub<b>e</b>lle, une maisonn<b>e</b>tte</>} ru="земля, мусорное ведро, домик" />
        </p>
      </div>

      <div className="essential-block" style={{ backgroundColor: '#fff3e0', padding: '15px', borderRadius: '10px' }}>
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <div style={{ display: 'inline-block', backgroundColor: '#e65100', color: 'white', padding: '5px 15px', borderRadius: '20px', fontWeight: 'bold' }}>
            <InteractiveText fr="Je retiens l'essentiel" ru="Я запоминаю главное" />
          </div>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ border: '2px solid red', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'red', fontWeight: 'bold' }}>e</span>
            <span>➔</span>
            <span style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>
              <InteractiveText fr="Accent aigu" ru="Акут" />
            </span>
            <span>➔</span>
            <span style={{ backgroundColor: '#1976d2', color: 'white', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>é</span>
            <span>➔</span>
            <span>👂 « é »</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ border: '2px solid red', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'red', fontWeight: 'bold', visibility: 'hidden' }}>e</span>
            <span>➔</span>
            <span style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>
              <InteractiveText fr="Accent grave" ru="Гравис" />
            </span>
            <span>➔</span>
            <span style={{ backgroundColor: '#c2185b', color: 'white', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>è</span>
            <span>➔</span>
            <span>👂 « è »</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ border: '2px solid red', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'red', fontWeight: 'bold', visibility: 'hidden' }}>e</span>
            <span>➔</span>
            <span style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '5px' }}>
              <InteractiveText fr="Accent circonflexe" ru="Циркумфлекс" />
            </span>
            <span>➔</span>
            <span style={{ backgroundColor: '#388e3c', color: 'white', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>ê</span>
            <span>➔</span>
            <span style={{ visibility: 'hidden' }}>👂 « è »</span>
          </div>
        </div>

        <div style={{ marginTop: '20px', backgroundColor: '#ffe0b2', padding: '10px', borderRadius: '5px', fontSize: '0.9em' }}>
          <b><InteractiveText fr="Rappelle-toi :" ru="Помни:" /></b> <InteractiveText fr="le mot élève contient plusieurs fois la lettre e, avec un accent aigu et avec un accent grave." displayFr={<>le mot <b>élève</b> contient plusieurs fois la lettre e, avec un accent aigu et avec un accent grave.</>} ru="слово élève содержит букву e несколько раз, с акутом и с грависом." />
        </div>
      </div>
    </div>
  );
}
