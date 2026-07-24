import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson7Left() {
  return (
    <div className="page" style={{ borderRight: '1px solid #eee' }}>
      <div className="header-banner">
        <div className="header-number">7</div>
        <div className="header-title">
          <InteractiveText fr="Les pronoms personnels" ru="Личные местоимения" />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title">
          <InteractiveText fr="💡 Je comprends" ru="💡 Я понимаю" />
        </div>
      </div>

      <div className="theory-block">
        <div>
          <InteractiveText fr="Les pronoms sont de petits mots qui remplacent le nom ou le groupe nominal." ru="Местоимения — это маленькие слова, которые заменяют существительное или именную группу." />
        </div>
        <div style={{ marginTop: '10px' }}>
          <span className="examples-label">
            <InteractiveText fr="Exemple :" ru="Пример :" type="inline" />
          </span>{' '}
          <InteractiveText
            fr="Amélie est très gourmande. Elle adore le chocolat."
            displayFr={<><u>Amélie</u> est très gourmande. <u>Elle</u> adore le chocolat.</>}
            ru="Амели очень любит поесть. Она обожает шоколад."
          />
        </div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">
          <InteractiveText fr="■ Les pronoms personnels singuliers" ru="■ Личные местоимения единственного числа" />
        </div>
        <div>
          <InteractiveText fr="On utilise :" ru="Мы используем :" />
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li>
            <InteractiveText fr="je ou j' lorsqu'on parle de soi ;" ru="je или j', когда говорим о себе;" />
          </li>
          <li>
            <InteractiveText fr="tu lorsqu'on s'adresse à quelqu'un ;" ru="tu, когда обращаемся к кому-то;" />
          </li>
          <li>
            <InteractiveText fr="il pour remplacer un nom masculin au singulier ;" ru="il для замены существительного мужского рода в единственном числе;" />
          </li>
          <li>
            <InteractiveText fr="elle pour remplacer un nom féminin au singulier." ru="elle для замены существительного женского рода в единственном числе." />
          </li>
        </ul>
        <div style={{ marginTop: '10px' }}>
          <span className="examples-label">
            <InteractiveText fr="Exemple :" ru="Пример :" type="inline" />
          </span>{' '}
          <InteractiveText fr="Mon frère mange sa pomme. → Il mange sa pomme." ru="Мой брат ест свое яблоко. → Он ест свое яблоко." />
        </div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">
          <InteractiveText fr="■ Les pronoms personnels pluriels" ru="■ Личные местоимения множественного числа" />
        </div>
        <div>
          <InteractiveText fr="On utilise :" ru="Мы используем :" />
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li>
            <InteractiveText fr="nous pour parler de soi avec une ou plusieurs autres personnes ;" ru="nous, чтобы говорить о себе вместе с одним или несколькими другими людьми;" />
          </li>
          <li>
            <InteractiveText fr="vous lorsqu'on s'adresse à plusieurs personnes ;" ru="vous, когда обращаемся к нескольким людям;" />
          </li>
          <li>
            <InteractiveText fr="ils pour remplacer un nom masculin au pluriel ;" ru="ils для замены существительного мужского рода во множественном числе;" />
          </li>
          <li>
            <InteractiveText fr="elles pour remplacer un nom féminin au pluriel." ru="elles для замены существительного женского рода во множественном числе." />
          </li>
        </ul>
        <div style={{ marginTop: '10px' }}>
          <span className="examples-label">
            <InteractiveText fr="Exemple :" ru="Пример :" type="inline" />
          </span>{' '}
          <InteractiveText fr="Mes copines mangent leur pomme. → Elles mangent leur pomme." ru="Мои подруги едят свое яблоко. → Они едят свое яблоко." />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '30px' }}>
        <div className="section-title">
          <InteractiveText fr="👁️ Je retiens l'essentiel" ru="👁️ Я запоминаю главное" />
        </div>
      </div>

      <div className="theory-block" style={{ backgroundColor: '#fff5f5', padding: '15px', borderRadius: '10px' }}>
        <div style={{ fontWeight: 'bold', color: '#d32f2f', marginBottom: '10px', textAlign: 'center' }}>
          <InteractiveText fr="Singulier" ru="Единственное число" />
          <br/>
          <InteractiveText fr="je, tu, il ou elle" ru="je, tu, il или elle" />
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
             <InteractiveText fr="Je ramasse des fraises." ru="Я собираю клубнику." />
             <span style={{ margin: '0 10px' }}>→</span>
             <InteractiveText fr="Je parle de moi." ru="Я говорю о себе." />
          </li>
          <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
             <InteractiveText fr="Tu ramasses des fraises." ru="Ты собираешь клубнику." />
             <span style={{ margin: '0 10px' }}>→</span>
             <InteractiveText fr="Je m'adresse à toi." ru="Я обращаюсь к тебе." />
          </li>
          <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
             <InteractiveText fr="Il/elle ramasse des fraises." ru="Он/она собирает клубнику." />
             <span style={{ margin: '0 10px' }}>→</span>
             <InteractiveText fr="Je parle d'une fille ou d'un garçon." ru="Я говорю о девочке или о мальчике." />
          </li>
        </ul>
      </div>

      <div className="theory-block" style={{ backgroundColor: '#f3e5f5', padding: '15px', borderRadius: '10px', marginTop: '15px' }}>
        <div style={{ fontWeight: 'bold', color: '#7b1fa2', marginBottom: '10px', textAlign: 'center' }}>
          <InteractiveText fr="Pluriel" ru="Множественное число" />
          <br/>
          <InteractiveText fr="nous, vous, ils ou elles" ru="nous, vous, ils или elles" />
        </div>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
             <InteractiveText fr="Nous ramassons des fraises." ru="Мы собираем клубнику." />
             <span style={{ margin: '0 10px' }}>→</span>
             <InteractiveText fr="Je parle de moi et d'une ou plusieurs personnes." ru="Я говорю о себе и одном или нескольких людях." />
          </li>
          <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
             <InteractiveText fr="Vous ramassez des fraises." ru="Вы собираете клубнику." />
             <span style={{ margin: '0 10px' }}>→</span>
             <InteractiveText fr="Je m'adresse à plusieurs personnes." ru="Я обращаюсь к нескольким людям." />
          </li>
          <li style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
             <InteractiveText fr="Elles/Ils ramassent des fraises." ru="Они собирают клубнику." />
             <span style={{ margin: '0 10px' }}>→</span>
             <InteractiveText fr="Je parle de plusieurs filles ou plusieurs garçons." ru="Я говорю о нескольких девочках или нескольких мальчиках." />
          </li>
        </ul>
      </div>

      <div className="theory-block" style={{ backgroundColor: '#fffde7', padding: '15px', borderRadius: '10px', marginTop: '15px', textAlign: 'center', border: '1px solid #ffeb3b' }}>
        <InteractiveText 
          fr="Il est au masculin singulier ; elle est au féminin singulier ;" 
          displayFr={<><b>Il</b> est au masculin singulier ; <b>elle</b> est au féminin singulier ;</>}
          ru="Il — мужского рода единственного числа; elle — женского рода единственного числа;" 
        /><br/>
        <InteractiveText 
          fr="Ils est au masculin pluriel ; elles est au féminin pluriel." 
          displayFr={<><b>Ils</b> est au masculin pluriel ; <b>elles</b> est au féminin pluriel.</>}
          ru="Ils — мужского рода множественного числа; elles — женского рода множественного числа." 
        />
      </div>
    </div>
  );
}