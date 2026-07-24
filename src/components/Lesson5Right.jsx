import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson5Right() {
  return (
    <div className="page" style={{ paddingLeft: '50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">
          ✏️ <InteractiveText fr="Je m'entraîne" ru="Я тренируюсь" />
        </div>
      </div>

      <div className="exercise-item" style={{ backgroundColor: '#f0f8ff', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <div style={{fontWeight: 'bold', color: '#4682b4', marginBottom: '10px'}}>
          <InteractiveText fr="Pour commencer" ru="Для начала" />
        </div>
        <div className="ex-instruction" style={{marginBottom: '10px'}}>
          <InteractiveText fr="Relie comme il convient." ru="Соедини как подходит." />
        </div>
        <div style={{display: 'flex', justifyContent: 'space-between', maxWidth: '400px'}}>
          <div>
            <div style={{marginBottom: '10px'}}><InteractiveText fr="Nom commun" ru="Нарицательное имя" /> •</div>
            <div><InteractiveText fr="Nom propre" ru="Собственное имя" /> •</div>
          </div>
          <div>
            <div style={{marginBottom: '10px'}}>• <InteractiveText fr="Toujours une majuscule" ru="Всегда с заглавной буквы" /></div>
            <div>• <InteractiveText fr="Jamais de majuscule" ru="Никогда с заглавной буквы" /></div>
          </div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">1</span>
          <span className="ex-stars">*</span>
          <span className="ex-instruction">
            <InteractiveText fr="Colorie les noms propres en rouge et les noms communs en bleu." ru="Раскрась собственные имена в красный цвет, а нарицательные в синий." />
          </span>
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '10px'}}>
          {['métro', 'la Seine', 'boulevard', 'Paris', 'vélo', 'monuments', 'l\'Élysée'].map((word, i) => (
             <div key={i} style={{border: '1px solid #ccc', padding: '5px 10px', borderRadius: '15px', backgroundColor: '#fff'}}>
               <InteractiveText fr={word} ru={word} type="inline" />
             </div>
          ))}
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">2</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction">
            <InteractiveText fr="Pour chaque liste, recopie uniquement les noms." ru="Для каждого списка скопируй только имена существительные." />
          </span>
        </div>
        <ul className="ex-list" style={{listStyleType: 'none', paddingLeft: 0}}>
          <li style={{marginBottom: '5px'}}>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>a. </span>
            <InteractiveText fr="arriver - Louvre - le : ...................." ru="прибывать - Лувр - le (определенный артикль) : ...................." />
          </li>
          <li style={{marginBottom: '5px'}}>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>b. </span>
            <InteractiveText fr="taxi - visiter - dans : ...................." ru="такси - посещать - в : ...................." />
          </li>
          <li style={{marginBottom: '5px'}}>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>c. </span>
            <InteractiveText fr="dehors - photographier - visite : ...................." ru="снаружи - фотографировать - визит : ...................." />
          </li>
          <li>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>d. </span>
            <InteractiveText fr="immense - des - Français : ...................." ru="огромный - des (неопределенный артикль) - французы : ...................." />
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">3</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction">
            <InteractiveText fr="Entoure les noms propres." ru="Обведи собственные имена." />
          </span>
        </div>
        <ul className="ex-list" style={{listStyleType: 'none', paddingLeft: 0}}>
          <li style={{marginBottom: '5px'}}>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>a. </span>
            <InteractiveText fr="Aujourd'hui, nous visitons la tour Eiffel." ru="Сегодня мы посещаем Эйфелеву башню." />
          </li>
          <li style={{marginBottom: '5px'}}>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>b. </span>
            <InteractiveText fr="Nous faisons la queue avec des Anglais et des Chinois." ru="Мы стоим в очереди с англичанами и китайцами." />
          </li>
          <li>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>c. </span>
            <InteractiveText fr="C'est Gustave Eiffel qui a imaginé cette tour de 300 mètres de haut." ru="Именно Гюстав Эйфель придумал эту башню высотой 300 метров." />
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">4</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction">
            <InteractiveText fr="Souligne les noms communs." ru="Подчеркни нарицательные имена." />
          </span>
        </div>
        <ul className="ex-list" style={{listStyleType: 'none', paddingLeft: 0}}>
          <li style={{marginBottom: '5px'}}>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>a. </span>
            <InteractiveText fr="J'aime beaucoup les parcs et les jardins parisiens." ru="Я очень люблю парижские парки и сады." />
          </li>
          <li style={{marginBottom: '5px'}}>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>b. </span>
            <InteractiveText fr="On peut prendre le taxi, le bus ou le métro pour se déplacer dans Paris." ru="Можно взять такси, автобус или метро, чтобы передвигаться по Парижу." />
          </li>
          <li>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>c. </span>
            <InteractiveText fr="Ce matin, Nolan fait de la trottinette dans le jardin du Luxembourg." ru="Этим утром Нолан катается на самокате в Люксембургском саду." />
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">5</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction">
            <InteractiveText fr="Entoure les noms propres et souligne les noms communs." ru="Обведи собственные имена и подчеркни нарицательные имена." />
          </span>
        </div>
        <ul className="ex-list" style={{listStyleType: 'none', paddingLeft: 0}}>
          <li style={{marginBottom: '5px'}}>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>a. </span>
            <InteractiveText fr="Des artistes célèbres se trouvent dans le cimetière du Montparnasse." ru="Известные художники находятся на кладбище Монпарнас." />
          </li>
          <li style={{marginBottom: '5px'}}>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>b. </span>
            <InteractiveText fr="Le photographe Robert Doisneau aimait beaucoup Paris." ru="Фотограф Робер Дуано очень любил Париж." />
          </li>
          <li>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>c. </span>
            <InteractiveText fr="L'écrivain Victor Hugo a écrit un roman sur la plus grande cathédrale de Paris." ru="Писатель Виктор Гюго написал роман о самом большом соборе Парижа." />
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">6</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction">
            <InteractiveText fr="Complète chaque phrase en suivant les indications." ru="Дополни каждое предложение, следуя указаниям." />
          </span>
        </div>
        <ul className="ex-list" style={{listStyleType: 'none', paddingLeft: 0}}>
          <li style={{marginBottom: '10px'}}>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>a. </span>
            <InteractiveText fr="Pour visiter" ru="Чтобы посетить" type="inline" />{' '}
            <span style={{borderBottom: '1px dotted #ccc', display: 'inline-block', width: '100px', textAlign: 'center', fontSize: '0.8em', color: '#888'}}>nom propre</span>{' '}
            <InteractiveText fr="je prends le" ru="я беру" type="inline" />{' '}
            <span style={{borderBottom: '1px dotted #ccc', display: 'inline-block', width: '100px', textAlign: 'center', fontSize: '0.8em', color: '#888'}}>nom commun</span>.
          </li>
          <li style={{marginBottom: '10px'}}>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>b. </span>
            <InteractiveText fr="Je vais à la" ru="Я иду в" type="inline" />{' '}
            <span style={{borderBottom: '1px dotted #ccc', display: 'inline-block', width: '100px', textAlign: 'center', fontSize: '0.8em', color: '#888'}}>nom commun</span>{' '}
            <InteractiveText fr="avec ma copine" ru="со своей подругой" type="inline" />{' '}
            <span style={{borderBottom: '1px dotted #ccc', display: 'inline-block', width: '100px', textAlign: 'center', fontSize: '0.8em', color: '#888'}}>nom propre</span>.
          </li>
          <li>
            <span style={{color: '#d9534f', fontWeight: 'bold'}}>c. </span>
            <span style={{borderBottom: '1px dotted #ccc', display: 'inline-block', width: '100px', textAlign: 'center', fontSize: '0.8em', color: '#888'}}>nom propre</span>{' '}
            <InteractiveText fr="a un" ru="имеет" type="inline" />{' '}
            <span style={{borderBottom: '1px dotted #ccc', display: 'inline-block', width: '100px', textAlign: 'center', fontSize: '0.8em', color: '#888'}}>nom commun</span>{' '}
            <InteractiveText fr="qui s'appelle" ru="которого зовут" type="inline" />{' '}
            <span style={{borderBottom: '1px dotted #ccc', display: 'inline-block', width: '100px', textAlign: 'center', fontSize: '0.8em', color: '#888'}}>nom propre</span>.
          </li>
        </ul>
      </div>

    </div>
  );
}