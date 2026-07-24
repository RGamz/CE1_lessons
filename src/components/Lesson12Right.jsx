import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson12Right() {
  return (
    <div className="page lesson-right" style={{ paddingLeft: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">
          ✏️ <InteractiveText fr="Je m'entraîne" ru="Я тренируюсь" />
        </div>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px', backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '10px' }}>
        <div style={{ color: '#1565c0', fontWeight: 'bold', marginBottom: '10px' }}>
          ■ <InteractiveText fr="Pour commencer" ru="Для начала" />
        </div>
        <div className="ex-instruction" style={{ marginBottom: '10px' }}>
          <InteractiveText fr="Relie comme il convient." ru="Соедини как подходит." />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div><InteractiveText fr="Accent circonflexe" ru="Циркумфлекс" /></div>
            <div><InteractiveText fr="Accent aigu" ru="Акут" /></div>
            <div><InteractiveText fr="Accent grave" ru="Гравис" /></div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>. <b>è</b> .</div>
            <div>. <b>ê</b> .</div>
            <div>. <b>é</b> .</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div>👂 « é »</div>
            <div>👂 « è »</div>
          </div>
        </div>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div>
          <span className="ex-number">1</span>
          <span className="ex-stars" style={{ color: '#fbc02d' }}>★</span>
          <span className="ex-instruction" style={{ marginLeft: '10px' }}>
            <InteractiveText fr="Place les mots dans le tableau." ru="Помести слова в таблицу." />
          </span>
        </div>
        <div style={{ margin: '10px 0', fontStyle: 'italic' }}>
          <InteractiveText fr="un cacatoès" ru="какаду" /> - <InteractiveText fr="une guêpe" ru="оса" /> - <InteractiveText fr="un chimpanzé" ru="шимпанзе" /> - <InteractiveText fr="une chèvre" ru="коза" /> - <InteractiveText fr="un caméléon" ru="хамелеон" /> - <InteractiveText fr="une arête" ru="рыбья кость" />
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px', width: '30%' }}><InteractiveText fr="Accent aigu" ru="Акут" /></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><InteractiveText fr="Accent grave" ru="Гравис" /></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}><InteractiveText fr="Accent circonflexe" ru="Циркумфлекс" /></td>
              <td style={{ border: '1px solid #ccc', padding: '8px' }}></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div>
          <span className="ex-number">2</span>
          <span className="ex-stars" style={{ color: '#fbc02d' }}>★★</span>
          <span className="ex-instruction" style={{ marginLeft: '10px' }}>
            <InteractiveText fr="Place un accent aigu ou un accent grave sur les e en couleur." displayFr={<>Place un accent aigu ou un accent grave sur les <b>e</b> en couleur.</>} ru="Поставь акут или гравис над выделенными цветом e." />
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
          <div>a. <InteractiveText fr="un zebre" displayFr={<>un z<span style={{color:'red'}}>e</span>bre</>} ru="зебра" /></div>
          <div>b. <InteractiveText fr="un pelican" displayFr={<>un p<span style={{color:'red'}}>e</span>lican</>} ru="пеликан" /></div>
          <div>c. <InteractiveText fr="une hyene" displayFr={<>une hy<span style={{color:'red'}}>e</span>ne</>} ru="гиена" /></div>
          <div>d. <InteractiveText fr="un lezard" displayFr={<>un l<span style={{color:'red'}}>e</span>zard</>} ru="ящерица" /></div>
          <div>e. <InteractiveText fr="un lievre" displayFr={<>un li<span style={{color:'red'}}>e</span>vre</>} ru="заяц" /></div>
          <div>f. <InteractiveText fr="un ecureuil" displayFr={<>un <span style={{color:'red'}}>e</span>cureuil</>} ru="белка" /></div>
        </div>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div>
          <span className="ex-number">3</span>
          <span className="ex-stars" style={{ color: '#fbc02d' }}>★★★</span>
          <span className="ex-instruction" style={{ marginLeft: '10px' }}>
            <InteractiveText fr="Place un accent grave ou un accent circonflexe sur les e en couleur." displayFr={<>Place un accent grave ou un accent circonflexe sur les <b>e</b> en couleur.</>} ru="Поставь гравис или циркумфлекс над выделенными цветом e." />
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
          <div>a. <InteractiveText fr="un coléoptere" displayFr={<>un coléopt<span style={{color:'red'}}>e</span>re</>} ru="жук" /></div>
          <div>b. <InteractiveText fr="une bete" displayFr={<>une b<span style={{color:'red'}}>e</span>te</>} ru="зверь" /></div>
          <div>c. <InteractiveText fr="un éphémere" displayFr={<>un éphém<span style={{color:'red'}}>e</span>re</>} ru="поденка" /></div>
          <div>d. <InteractiveText fr="une foret" displayFr={<>une for<span style={{color:'red'}}>e</span>t</>} ru="лес" /></div>
          <div>e. <InteractiveText fr="un phacochere" displayFr={<>un phacoch<span style={{color:'red'}}>e</span>re</>} ru="бородавочник" /></div>
          <div>f. <InteractiveText fr="un hetre" displayFr={<>un h<span style={{color:'red'}}>e</span>tre</>} ru="бук" /></div>
        </div>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div>
          <span className="ex-number">4</span>
          <span className="ex-stars" style={{ color: '#fbc02d' }}>★★★</span>
          <span className="ex-instruction" style={{ marginLeft: '10px' }}>
            <InteractiveText fr="Place au bon endroit les accents oubliés sur les e." displayFr={<>Place au bon endroit les accents oubliés sur les <b>e</b>.</>} ru="Поставь забытые ударения над e в правильном месте." />
          </span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px', listStyleType: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <span style={{ color: '#e53935', fontWeight: 'bold' }}>a. </span>
            <InteractiveText fr="Par la fenetre, je vois un herisson qui se promene dans le jardin." ru="Через окно я вижу ежа, который гуляет в саду." />
          </li>
          <li style={{ marginBottom: '10px' }}>
            <span style={{ color: '#e53935', fontWeight: 'bold' }}>b. </span>
            <InteractiveText fr="Ce mammifere, à la jolie petite tete, se regale de limaces et d'araignees." ru="Это млекопитающее с красивой маленькой головой лакомится слизнями и пауками." />
          </li>
          <li>
            <span style={{ color: '#e53935', fontWeight: 'bold' }}>c. </span>
            <InteractiveText fr="J'espere qu'il pourra se mettre à l'abri avant le debut de la tempete." ru="Надеюсь, он сможет укрыться до начала бури." />
          </li>
        </ul>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div>
          <span className="ex-number">5</span>
          <span className="ex-stars" style={{ color: '#fbc02d' }}>★★★</span>
          <span className="ex-instruction" style={{ marginLeft: '10px' }}>
            <InteractiveText fr="Devinettes ! Complète par un mot qui contient un accent." ru="Загадки! Дополни словом, которое содержит ударение." />
          </span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px', listStyleType: 'none', paddingLeft: 0 }}>
          <li style={{ marginBottom: '10px' }}>
            <span style={{ color: '#e53935', fontWeight: 'bold' }}>a. </span>
            <InteractiveText fr="Elles se trouvent dans le ciel, la nuit." ru="Они находятся на небе ночью." /><br/>
            <InteractiveText fr="Ce sont les ......................." ru="Это ......................." />
          </li>
          <li style={{ marginBottom: '10px' }}>
            <span style={{ color: '#e53935', fontWeight: 'bold' }}>b. </span>
            <InteractiveText fr="C'est un arbre dont les fruits s'appellent des glands." ru="Это дерево, плоды которого называются желудями." /><br/>
            <InteractiveText fr="C'est un ......................." ru="Это ......................." />
          </li>
          <li>
            <span style={{ color: '#e53935', fontWeight: 'bold' }}>c. </span>
            <InteractiveText fr="Ce personnage de contes se déplace sur un balai." ru="Этот сказочный персонаж передвигается на метле." /><br/>
            <InteractiveText fr="C'est la ......................." ru="Это ......................." />
          </li>
        </ul>
      </div>

    </div>
  );
}
