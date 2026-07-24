import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson6Left() {
  return (
    <div className="page" style={{ borderRight: '1px solid #eee', paddingRight: '20px' }}>
      <div className="header-banner">
        <div className="header-number">6</div>
        <div className="header-title">
          <InteractiveText fr="Le groupe nominal" ru="Именная группа (существительное с зависимыми словами)" />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title">
          <InteractiveText fr="💡 Je comprends" ru="💡 Я понимаю" />
        </div>
      </div>

      <div className="theory-block" style={{ marginBottom: '20px' }}>
        <p>
          <InteractiveText fr="Le groupe nominal est composé d'un déterminant, d'un nom commun et parfois d'un ou plusieurs adjectifs." ru="Именная группа состоит из детерминатива, нарицательного существительного и иногда одного или нескольких прилагательных." />
        </p>

        <div className="theory-subtitle">
          <InteractiveText fr="■ Les déterminants" displayFr={<>■ <b>Les déterminants</b></>} ru="■ Детерминативы" />
        </div>
        <ul>
          <li>
            <InteractiveText fr="Ce sont les petits mots placés devant les noms." ru="Это маленькие слова, стоящие перед существительными." />
          </li>
          <li>
            <InteractiveText fr="Ils indiquent le genre (masculin ou féminin) et le nombre (singulier ou pluriel) du nom :" ru="Они указывают на род (мужской или женский) и число (единственное или множественное) существительного:" />
            <ul>
              <li><InteractiveText fr="- le, l', un, mon, ce... : masculin" displayFr={<>- <i>le, l', un, mon, ce...</i> : masculin</>} ru="- le, l', un, mon, ce... : мужской род" /></li>
              <li><InteractiveText fr="- la, l', une, ma, cette... : féminin" displayFr={<>- <i>la, l', une, ma, cette...</i> : féminin</>} ru="- la, l', une, ma, cette... : женский род" /></li>
              <li><InteractiveText fr="- les, des, mes, ces... : pluriel" displayFr={<>- <i>les, des, mes, ces...</i> : pluriel</>} ru="- les, des, mes, ces... : множественное число" /></li>
            </ul>
          </li>
        </ul>

        <div className="theory-subtitle">
          <InteractiveText fr="■ Les noms" displayFr={<>■ <b>Les noms</b></>} ru="■ Существительные" />
        </div>
        <ul>
          <li>
            <InteractiveText fr="Ils désignent des personnes, des animaux, des objets, des choses, des lieux..." ru="Они обозначают людей, животных, предметы, вещи, места..." />
          </li>
          <li>
            <InteractiveText fr="Ils sont précédés d'un déterminant." ru="Им предшествует детерминатив." />
          </li>
        </ul>
        <div style={{ marginLeft: '20px' }}>
          <span className="examples-label">
            <InteractiveText fr="Exemples :" displayFr={<span style={{ color: '#e57373' }}>Exemples : </span>} ru="Примеры:" type="inline" />
          </span>{' '}
          <InteractiveText fr="une dresseuse ; un tigre ; un ticket ; un chapiteau, un funambule." displayFr={<><i>une dresseuse ; un tigre ; un ticket ; un chapiteau, un funambule.</i></>} ru="дрессировщица; тигр; билет; шатер (цирка), канатоходец." />
        </div>

        <div className="theory-subtitle" style={{ marginTop: '15px' }}>
          <InteractiveText fr="■ Les adjectifs" displayFr={<>■ <b>Les adjectifs</b></>} ru="■ Прилагательные" />
        </div>
        <p>
          <InteractiveText fr="Ils donnent un renseignement sur le nom qu'ils accompagnent." ru="Они дают информацию о существительном, которое они сопровождают." />
        </p>
        <div style={{ marginLeft: '20px' }}>
          <span className="examples-label">
            <InteractiveText fr="Exemples :" displayFr={<span style={{ color: '#e57373' }}>Exemples : </span>} ru="Примеры:" type="inline" />
          </span>{' '}
          <InteractiveText fr="une dresseuse célèbre ; un tigre féroce ; un ticket gratuit ; un grand chapiteau." displayFr={<><i>une dresseuse <b>célèbre</b> ; un tigre <b>féroce</b> ; un ticket <b>gratuit</b> ; un <b>grand</b> chapiteau.</i></>} ru="знаменитая дрессировщица; свирепый тигр; бесплатный билет; большой шатер." />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '30px' }}>
        <div className="section-title" style={{ backgroundColor: '#e57373', color: 'white', display: 'inline-block', padding: '5px 15px', borderRadius: '20px' }}>
          <InteractiveText fr="👁️ Je retiens l'essentiel" ru="👁️ Я запоминаю главное" />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
        <div style={{ border: '1px solid #7986cb', padding: '10px', borderRadius: '5px', textAlign: 'center', backgroundColor: '#e8eaf6' }}>
          <div style={{ backgroundColor: '#7986cb', color: 'white', padding: '2px 10px', borderRadius: '5px', marginBottom: '5px' }}>
            <InteractiveText fr="Un déterminant" ru="Детерминатив" />
          </div>
          <InteractiveText fr="un, une, le, la, l', des, les, cette, ce, ces..." displayFr={<i>un, une, le, la, l', des,<br/>les, cette, ce, ces...</i>} ru="un, une, le, la, l', des, les, cette, ce, ces..." />
        </div>
        <div style={{ fontSize: '24px', color: '#1976d2' }}>+</div>
        <div style={{ border: '1px solid #e57373', padding: '10px', borderRadius: '5px', textAlign: 'center', backgroundColor: '#ffebee' }}>
          <div style={{ backgroundColor: '#e57373', color: 'white', padding: '2px 10px', borderRadius: '5px', marginBottom: '5px' }}>
            <InteractiveText fr="Un nom" ru="Существительное" />
          </div>
          <InteractiveText fr="funambule, acrobate, dompteur, cirque..." displayFr={<i>funambule, acrobate,<br/>dompteur, cirque...</i>} ru="канатоходец, акробат, укротитель, цирк..." />
        </div>
        <div style={{ fontSize: '24px', color: '#1976d2' }}>+</div>
        <div style={{ border: '1px solid #81c784', padding: '10px', borderRadius: '5px', textAlign: 'center', backgroundColor: '#e8f5e9' }}>
          <div style={{ backgroundColor: '#81c784', color: 'white', padding: '2px 10px', borderRadius: '5px', marginBottom: '5px' }}>
            <InteractiveText fr="Un ou plusieurs adjectif(s)" ru="Одно или несколько прилагательных" />
          </div>
          <InteractiveText fr="agile, talentueux, grand, célèbre, petit, splendide..." displayFr={<i>agile, talentueux, grand,<br/>célèbre, petit, splendide...</i>} ru="ловкий, талантливый, большой, знаменитый, маленький, великолепный..." />
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        ↓
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
        <div style={{ border: '1px solid #64b5f6', padding: '10px', borderRadius: '5px', textAlign: 'center', backgroundColor: '#e3f2fd' }}>
          <div style={{ backgroundColor: '#64b5f6', color: 'white', padding: '2px 10px', borderRadius: '5px', marginBottom: '5px' }}>
            <InteractiveText fr="Groupe nominal" ru="Именная группа" />
          </div>
          <InteractiveText fr="un funambule agile" displayFr={<span style={{ color: '#81c784' }}><span style={{ color: '#7986cb' }}>un</span> <span style={{ color: '#e57373' }}>funambule</span> agile</span>} ru="ловкий канатоходец" /><br/>
          <InteractiveText fr="ce grand cirque célèbre" displayFr={<span style={{ color: '#81c784' }}><span style={{ color: '#7986cb' }}>ce</span> grand <span style={{ color: '#e57373' }}>cirque</span> célèbre</span>} ru="этот большой знаменитый цирк" />
        </div>
      </div>

      <div style={{ marginTop: '20px', textAlign: 'center', fontStyle: 'italic', color: '#555', backgroundColor: '#fff3e0', padding: '10px', borderRadius: '10px' }}>
        <InteractiveText fr="L'adjectif peut être placé avant ou après le nom." ru="Прилагательное может стоять до или после существительного." />
      </div>

    </div>
  );
}
