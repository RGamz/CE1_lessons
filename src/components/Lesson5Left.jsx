import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson5Left() {
  return (
    <div className="page" style={{ borderRight: '1px solid #eee', paddingRight: '20px' }}>
      <div className="header-banner">
        <div className="header-number">5</div>
        <div className="header-title">
          <InteractiveText fr="Le nom propre et le nom commun" ru="Собственное и нарицательное имя" />
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title">
          💡 <InteractiveText fr="Je comprends" ru="Я понимаю" />
        </div>
      </div>
      
      <div className="theory-block">
        <div className="theory-subtitle">
          <InteractiveText fr="Le nom propre" displayFr={<b>Le nom propre</b>} ru="Собственное имя" />
        </div>
        <ul>
          <li>
            <InteractiveText fr="C'est un nom qui désigne une personne ou une chose précise." ru="Это имя, которое обозначает конкретного человека или вещь." />
          </li>
          <li>
            <InteractiveText fr="Il peut désigner une personne, une ville, un pays, un fleuve..." ru="Оно может обозначать человека, город, страну, реку..." />
          </li>
          <li>
            <InteractiveText fr="Il a toujours une majuscule." ru="Оно всегда пишется с заглавной буквы." />
          </li>
        </ul>
        <div>
          <span className="examples-label">
            <InteractiveText fr="Exemples :" ru="Примеры :" />
          </span>
          <br/>
          <InteractiveText fr="Paris est la capitale de la France." displayFr={<><b>Paris</b> est la capitale de la <b>France</b>.</>} ru="Париж - столица Франции." />
          <br/>
          <InteractiveText fr="Louise regarde les bateaux sur la Seine." displayFr={<><b>Louise</b> regarde les bateaux sur la <b>Seine</b>.</>} ru="Луиза смотрит на лодки на Сене." />
        </div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">
          <InteractiveText fr="Le nom commun" displayFr={<b>Le nom commun</b>} ru="Нарицательное имя" />
        </div>
        <ul>
          <li>
            <InteractiveText fr="C'est un nom qui désigne des personnes ou des objets ordinaires. Un seul nom commun peut servir à désigner plusieurs choses ou personnes." ru="Это имя, которое обозначает обычных людей или предметы. Одно нарицательное имя может обозначать несколько вещей или людей." />
          </li>
          <li>
            <InteractiveText fr="Le nom commun est toujours accompagné d'un déterminant : le, la, les, un, une, des..." ru="Нарицательное имя всегда сопровождается детерминативом: le, la, les, un, une, des..." />
          </li>
        </ul>
        <div>
          <span className="examples-label">
            <InteractiveText fr="Exemples :" ru="Примеры :" />
          </span>
          <br/>
          <InteractiveText fr="Paris est la capitale de la France." displayFr={<>Paris est la <b>capitale</b> de la France.</>} ru="Париж - столица Франции." />
          <br/>
          <InteractiveText fr="Madrid est la capitale de l'Espagne." displayFr={<>Madrid est la <b>capitale</b> de l'Espagne.</>} ru="Мадрид - столица Испании." />
          <br/>
          <span style={{color: '#666'}}>→</span> <InteractiveText fr="Le mot capitale peut désigner Paris ou peut désigner Madrid." ru="Слово столица может обозначать Париж или Мадрид." />
        </div>
        <ul>
          <li>
            <InteractiveText fr="Le nom commun n'a pas nécessairement un seul sens, contrairement au nom propre." ru="Нарицательное имя не обязательно имеет одно значение, в отличие от собственного имени." />
          </li>
        </ul>
        <div>
          <span className="examples-label">
            <InteractiveText fr="Exemples :" ru="Примеры :" />
          </span>
          <br/>
          <InteractiveText fr="Les deux amis ont rendez-vous au café." displayFr={<>Les deux amis ont rendez-vous au <b>café</b>.</>} ru="Два друга встречаются в кафе." />
          <br/>
          <span style={{color: '#666'}}>→</span> <InteractiveText fr="Le mot café désigne un lieu." ru="Слово кафе обозначает место." />
          <br/>
          <InteractiveText fr="Tu aimes le café ?" displayFr={<>Tu aimes le <b>café</b> ?</>} ru="Ты любишь кофе?" />
          <br/>
          <span style={{color: '#666'}}>→</span> <InteractiveText fr="Le mot café désigne une boisson chaude." ru="Слово кофе обозначает горячий напиток." />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '30px' }}>
        <div className="section-title">
          👁️ <InteractiveText fr="Je retiens l'essentiel" ru="Я запоминаю главное" />
        </div>
      </div>

      <div className="theory-block" style={{ backgroundColor: '#fff8dc', padding: '15px', borderRadius: '8px' }}>
        <div style={{textAlign: 'center', marginBottom: '15px'}}>
          <InteractiveText fr="Le Louvre est un musée parisien. Des touristes viennent le visiter." displayFr={<><b>Le Louvre</b> est un musée parisien. Des <b>touristes</b> viennent le visiter.</>} ru="Лувр - парижский музей. Туристы приходят его посетить." />
        </div>
        
        <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '0.9em'}}>
          <div style={{width: '45%', backgroundColor: '#fff3cd', padding: '10px', borderRadius: '5px', border: '1px solid #ffeeba'}}>
            <InteractiveText fr="Commence par une majuscule. C'est un nom propre." ru="Начинается с заглавной буквы. Это собственное имя." />
          </div>
          <div style={{width: '45%', backgroundColor: '#f8d7da', padding: '10px', borderRadius: '5px', border: '1px solid #f5c6cb'}}>
            <InteractiveText fr="Précédé d'un déterminant. Pas de majuscule. C'est un nom commun." ru="Предшествует детерминатив. Нет заглавной буквы. Это нарицательное имя." />
          </div>
        </div>
        
        <div style={{marginTop: '20px', backgroundColor: '#e2e3e5', padding: '10px', borderRadius: '5px'}}>
          <InteractiveText fr="Pour savoir si un mot est un nom propre, demande-toi s'il désigne une chose, une personne ou un lieu précis." ru="Чтобы узнать, является ли слово собственным именем, спроси себя, обозначает ли оно конкретную вещь, человека или место." />
        </div>
      </div>

    </div>
  );
}