import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson7Right() {
  return (
    <div className="page" style={{ paddingLeft: '50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">
          <InteractiveText fr="✏️ Je m'entraîne" ru="✏️ Я тренируюсь" />
        </div>
      </div>

      <div className="exercise-item" style={{ backgroundColor: '#e3f2fd', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
        <div style={{ fontWeight: 'bold', color: '#1565c0', marginBottom: '10px' }}>
          <InteractiveText fr="■ Pour commencer" ru="■ Для начала" />
        </div>
        <div>
          <InteractiveText fr="Relie comme il convient." ru="Соедини подходящее." />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <div>
            <div><InteractiveText fr="Nous/Vous/Ils" ru="Мы/Вы/Они" /></div>
            <div><InteractiveText fr="Je/Tu/Elle" ru="Я/Ты/Она" /></div>
          </div>
          <div>
             <div><InteractiveText fr="• Singulier" ru="• Единственное число" /></div>
             <div><InteractiveText fr="• Pluriel" ru="• Множественное число" /></div>
          </div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">1</span>
          <span className="ex-stars">*</span>
          <span className="ex-instruction">
            <InteractiveText fr="Entoure tous les pronoms personnels." ru="Обведи все личные местоимения." />
          </span>
        </div>
        <ul className="ex-list">
          <li>
            <b>a. </b>
            <InteractiveText fr="Il cueille des cerises, vous allez vous régaler." ru="Он собирает вишню, вы будете наслаждаться." />
          </li>
          <li>
            <b>b. </b>
            <InteractiveText fr="Elles sont rouges et sucrées comme tu aimes !" ru="Они красные и сладкие, как ты любишь!" />
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">2</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction">
            <InteractiveText 
              fr="Souligne en bleu les pronoms personnels au singulier et en rouge ceux au pluriel." 
              displayFr={<>Souligne en <span style={{color: 'blue'}}>bleu</span> les pronoms personnels au singulier et en <span style={{color: 'red'}}>rouge</span> ceux au pluriel.</>}
              ru="Подчеркни синим личные местоимения единственного числа и красным — множественного." 
            />
          </span>
        </div>
        <div style={{ marginTop: '10px', lineHeight: '1.6' }}>
          <InteractiveText fr="Zoé raconte sa sortie avec sa classe." ru="Зоя рассказывает о своей прогулке с классом." /><br/>
          <InteractiveText fr="« Au début, j'ai mis mes bottes en caoutchouc. Ensuite, la maîtresse a distribué des paniers. Nous avions chacun le nôtre. Elle a dit de ne pas trop s'éloigner. Il fallait faire attention afin de ne pas écraser les fraises, elles rougissent au soleil. Vous savez, quand je repense à cette belle journée, cela me rend joyeuse ! »" ru="«Сначала я надела резиновые сапоги. Затем учительница раздала корзинки. У каждого из нас была своя. Она сказала не отходить слишком далеко. Нужно было быть осторожным, чтобы не раздавить клубнику, она краснеет на солнце. Знаете, когда я вспоминаю этот прекрасный день, это делает меня радостной!»" />
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">3</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction">
            <InteractiveText fr="Relie chaque groupe nominal au pronom personnel qui peut le remplacer." ru="Соедини каждую именную группу с личным местоимением, которое может ее заменить." />
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px', width: '200px' }}>
          <div>
            <div><b>a. </b><InteractiveText fr="les framboises" ru="малина (множ.)" /></div>
            <div><b>b. </b><InteractiveText fr="le kiwi" ru="киви" /></div>
            <div><b>c. </b><InteractiveText fr="Yann et Lamine" ru="Янн и Ламин" /></div>
            <div><b>d. </b><InteractiveText fr="la banane" ru="банан" /></div>
          </div>
          <div>
            <div><InteractiveText fr="• il" ru="• он" /></div>
            <div><InteractiveText fr="• elle" ru="• она" /></div>
            <div><InteractiveText fr="• ils" ru="• они (муж.)" /></div>
            <div><InteractiveText fr="• elles" ru="• они (жен.)" /></div>
          </div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">4</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction">
            <InteractiveText fr="Remplace le groupe de mots encadré par un pronom personnel." ru="Замени группу слов в рамке на личное местоимение." />
          </span>
        </div>
        <ul className="ex-list">
          <li>
            <b>a. </b>
            <InteractiveText fr="Les fruits sont pleins de vitamines." displayFr={<><span style={{border: '1px solid black', padding: '2px'}}>Les fruits</span> sont pleins de vitamines.</>} ru="Фрукты полны витаминов." />
            <br/>→ ......... <InteractiveText fr="sont pleins de vitamines." ru="полны витаминов." />
          </li>
          <li>
            <b>b. </b>
            <InteractiveText fr="Maman et moi aimons les poires." displayFr={<><span style={{border: '1px solid black', padding: '2px'}}>Maman et moi</span> aimons les poires.</>} ru="Мама и я любим груши." />
            <br/>→ ......... <InteractiveText fr="aimons les poires." ru="любим груши." />
          </li>
          <li>
            <b>c. </b>
            <InteractiveText fr="Léna et Lola font de la confiture." displayFr={<><span style={{border: '1px solid black', padding: '2px'}}>Léna et Lola</span> font de la confiture.</>} ru="Лена и Лола варят варенье." />
            <br/>→ ......... <InteractiveText fr="font de la confiture." ru="варят варенье." />
          </li>
          <li>
            <b>d. </b>
            <InteractiveText fr="Malik et toi préférez les groseilles." displayFr={<><span style={{border: '1px solid black', padding: '2px'}}>Malik et toi</span> préférez les groseilles.</>} ru="Малик и ты предпочитаете смородину." />
            <br/>→ ......... <InteractiveText fr="préférez les groseilles." ru="предпочитаете смородину." />
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">5</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction">
            <InteractiveText fr="Récris chaque phrase en remplaçant chaque pronom personnel par un groupe nominal de ton choix." ru="Перепиши каждую фразу, заменяя каждое личное местоимение на именную группу по твоему выбору." />
          </span>
        </div>
        <ul className="ex-list">
          <li>
            <b>a. </b>
            <InteractiveText fr="Elle mange une orange tous les matins." ru="Она ест апельсин каждое утро." />
          </li>
          <li>
            <b>b. </b>
            <InteractiveText fr="Ils préparent de la compote de pêches." ru="Они готовят персиковый компот." />
          </li>
          <li>
            <b>c. </b>
            <InteractiveText fr="Elles font cuire une tarte au citron." ru="Они пекут лимонный пирог." />
          </li>
          <li>
            <b>d. </b>
            <InteractiveText fr="Il achète un flan aux pruneaux." ru="Он покупает флан с черносливом." />
          </li>
        </ul>
      </div>
      
      <div style={{ textAlign: 'right', marginTop: '20px' }}>
        <div style={{ display: 'inline-block', backgroundColor: '#e0f7fa', padding: '10px', borderRadius: '5px' }}>
          <InteractiveText fr="Dictée à écouter" ru="Диктант для прослушивания" />
          <br/>
          <a href="http://www.lienmini.fr/8986-06" target="_blank" rel="noreferrer" style={{ fontSize: '0.8em', color: '#00695c' }}>www.lienmini.fr/8986-06</a>
        </div>
      </div>
    </div>
  );
}