import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson11Right() {
  return (
    <div className="page" style={{ paddingLeft: '50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">✏️ <InteractiveText fr="Je m'entraîne" ru="Я тренируюсь" /></div>
      </div>

      <div className="exercise-item" style={{ backgroundColor: '#f5f9ff', padding: '15px', borderRadius: '10px', border: '1px solid #d0e1f9', marginBottom: '20px' }}>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ color: '#4a89dc', fontWeight: 'bold' }}>■</span> <InteractiveText fr="Pour commencer" ru="Для начала" />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <InteractiveText fr="Entoure les auxiliaires en rouge et les participes passés en bleu." ru="Обведи вспомогательные глаголы красным, а причастия прошедшего времени - синим." />
        </div>
        <div style={{ textAlign: 'center' }}>
          <InteractiveText fr="Léa est entrée dans la cuisine. Nous avons mangé le plat. Elle a dansé." ru="Леа вошла на кухню. Мы съели блюдо. Она танцевала." />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '30px' }}>
        
        {/* Left Column of Exercises */}
        <div style={{ flex: 1 }}>
          <div className="exercise-item">
            <div>
              <span className="ex-number">1</span>
              <span className="ex-stars" style={{ color: '#f6bb42' }}>*</span>
              <span className="ex-instruction">
                <InteractiveText fr="Entoure le verbe conjugué au passé composé." ru="Обведи глагол, спрягаемый в passé composé." />
              </span>
            </div>
            <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}><span style={{ color: '#e56b55', fontWeight: 'bold' }}>a. </span><InteractiveText fr="je marchais - j'ai marché" ru="я шел - я пошел" /></li>
              <li style={{ marginBottom: '10px' }}><span style={{ color: '#e56b55', fontWeight: 'bold' }}>b. </span><InteractiveText fr="vous êtes montés - vous montiez" ru="вы поднялись - вы поднимались" /></li>
              <li style={{ marginBottom: '10px' }}><span style={{ color: '#e56b55', fontWeight: 'bold' }}>c. </span><InteractiveText fr="il a chanté - il chantera" ru="он спел - он споет" /></li>
              <li style={{ marginBottom: '10px' }}><span style={{ color: '#e56b55', fontWeight: 'bold' }}>d. </span><InteractiveText fr="elles parlaient - elles ont parlé" ru="они говорили - они поговорили" /></li>
            </ul>
          </div>

          <div className="exercise-item">
            <div>
              <span className="ex-number">2</span>
              <span className="ex-stars" style={{ color: '#f6bb42' }}>**</span>
              <span className="ex-instruction">
                <InteractiveText fr="Complète avec un pronom personnel qui convient." ru="Дополни подходящим личным местоимением." />
              </span>
            </div>
            <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}><span style={{ color: '#e56b55', fontWeight: 'bold' }}>a. </span><InteractiveText fr="Hier, ............... avez rangé votre chambre." ru="Вчера ............... убрали вашу комнату." /></li>
              <li style={{ marginBottom: '10px' }}><span style={{ color: '#e56b55', fontWeight: 'bold' }}>b. </span><InteractiveText fr="............... avons acheté une nouvelle table pour la salle à manger." ru="............... купили новый стол для столовой." /></li>
              <li style={{ marginBottom: '10px' }}><span style={{ color: '#e56b55', fontWeight: 'bold' }}>c. </span><InteractiveText fr="............... ont travaillé à la maison." ru="............... работали дома." /></li>
              <li style={{ marginBottom: '10px' }}><span style={{ color: '#e56b55', fontWeight: 'bold' }}>d. </span><InteractiveText fr="............... as regardé la télévision dans le salon." ru="............... посмотрел телевизор в гостиной." /></li>
              <li style={{ marginBottom: '10px' }}><span style={{ color: '#e56b55', fontWeight: 'bold' }}>e. </span><InteractiveText fr="............... suis retourné dans le jardin pour jouer avec mon ballon." ru="............... вернулся в сад, чтобы поиграть со своим мячом." /></li>
            </ul>
          </div>

          <div className="exercise-item">
            <div>
              <span className="ex-number" style={{ backgroundColor: '#e56b55', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginRight: '5px' }}>3</span>
              <span className="ex-stars" style={{ color: '#f6bb42' }}>**</span>
              <span className="ex-instruction">
                <InteractiveText fr="Colorie le participe passé qui convient." ru="Раскрась подходящее причастие прошедшего времени." />
              </span>
            </div>
            <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>
                <span style={{ color: '#e56b55', fontWeight: 'bold' }}>a. </span><InteractiveText fr="aimer -> vous avez aimez / aimé" displayFr={<><i>aimer</i> &rarr; vous avez <span style={{ border: '1px solid #ccc', padding: '2px 5px' }}>aimez</span> <span style={{ border: '1px solid #ccc', padding: '2px 5px' }}>aimé</span></>} ru="любить -> вы любили" />
              </li>
              <li style={{ marginBottom: '10px' }}>
                <span style={{ color: '#e56b55', fontWeight: 'bold' }}>b. </span><InteractiveText fr="cuisiner -> elles ont cuisinée / cuisiné" displayFr={<><i>cuisiner</i> &rarr; elles ont <span style={{ border: '1px solid #ccc', padding: '2px 5px' }}>cuisinée</span> <span style={{ border: '1px solid #ccc', padding: '2px 5px' }}>cuisiné</span></>} ru="готовить -> они готовили" />
              </li>
              <li style={{ marginBottom: '10px' }}>
                <span style={{ color: '#e56b55', fontWeight: 'bold' }}>c. </span><InteractiveText fr="parler -> j'ai parlé / parler" displayFr={<><i>parler</i> &rarr; j'ai <span style={{ border: '1px solid #ccc', padding: '2px 5px' }}>parlé</span> <span style={{ border: '1px solid #ccc', padding: '2px 5px' }}>parler</span></>} ru="говорить -> я поговорил" />
              </li>
              <li style={{ marginBottom: '10px' }}>
                <span style={{ color: '#e56b55', fontWeight: 'bold' }}>d. </span><InteractiveText fr="être -> ils ont était / été" displayFr={<><i>être</i> &rarr; ils ont <span style={{ border: '1px solid #ccc', padding: '2px 5px' }}>était</span> <span style={{ border: '1px solid #ccc', padding: '2px 5px' }}>été</span></>} ru="быть -> они были" />
              </li>
              <li style={{ marginBottom: '10px' }}>
                <span style={{ color: '#e56b55', fontWeight: 'bold' }}>e. </span><InteractiveText fr="avoir -> tu as eu / eut" displayFr={<><i>avoir</i> &rarr; tu as <span style={{ border: '1px solid #ccc', padding: '2px 5px' }}>eu</span> <span style={{ border: '1px solid #ccc', padding: '2px 5px' }}>eut</span></>} ru="иметь -> у тебя было" />
              </li>
              <li style={{ marginBottom: '10px' }}>
                <span style={{ color: '#e56b55', fontWeight: 'bold' }}>f. </span><InteractiveText fr="tomber -> nous sommes tombé / tombés" displayFr={<><i>tomber</i> &rarr; nous sommes <span style={{ border: '1px solid #ccc', padding: '2px 5px' }}>tombé</span> <span style={{ border: '1px solid #ccc', padding: '2px 5px' }}>tombés</span></>} ru="падать -> мы упали" />
              </li>
            </ul>
          </div>
        </div>

        {/* Right Column of Exercises */}
        <div style={{ flex: 1 }}>
          <div className="exercise-item">
            <div>
              <span className="ex-number" style={{ backgroundColor: '#e56b55', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginRight: '5px' }}>4</span>
              <span className="ex-stars" style={{ color: '#f6bb42' }}>***</span>
              <span className="ex-instruction">
                <InteractiveText fr="Écris le participe passé des verbes entre parenthèses." ru="Напиши причастие прошедшего времени глаголов в скобках." />
              </span>
            </div>
            <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '15px' }}><span style={{ color: '#e56b55', fontWeight: 'bold' }}>a. </span><InteractiveText fr="Hier, nous avons (débarrasser) ............... la table après le repas." displayFr={<>Hier, nous avons (<span style={{ color: '#4a89dc' }}>débarrasser</span>) ........................................ la table après le repas.</>} ru="Вчера мы (убрать) ............... стол после еды." /></li>
              <li style={{ marginBottom: '15px' }}><span style={{ color: '#e56b55', fontWeight: 'bold' }}>b. </span><InteractiveText fr="Maxime et Gabin ont (regarder) ............... papa qui préparait le dîner dans la cuisine." displayFr={<>Maxime et Gabin ont (<span style={{ color: '#4a89dc' }}>regarder</span>) ........................................ papa qui préparait le dîner dans la cuisine.</>} ru="Максим и Габен (смотреть) ............... на папу, который готовил ужин на кухне." /></li>
              <li style={{ marginBottom: '15px' }}><span style={{ color: '#e56b55', fontWeight: 'bold' }}>c. </span><InteractiveText fr="Fatima et toi avez (accrocher) ............... vos manteaux dans le vestibule." displayFr={<>Fatima et toi avez (<span style={{ color: '#4a89dc' }}>accrocher</span>) ........................................ vos manteaux dans le vestibule.</>} ru="Фатима и ты (повесить) ............... ваши пальто в прихожей." /></li>
              <li style={{ marginBottom: '15px' }}><span style={{ color: '#e56b55', fontWeight: 'bold' }}>d. </span><InteractiveText fr="Inès a (avoir) ............... un livre pour son anniversaire." displayFr={<>Inès a (<span style={{ color: '#4a89dc' }}>avoir</span>) ........................................ un livre pour son anniversaire.</>} ru="Инес (иметь) ............... книгу на свой день рождения." /></li>
            </ul>
          </div>

          <div className="exercise-item">
            <div>
              <span className="ex-number" style={{ backgroundColor: '#e56b55', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginRight: '5px' }}>5</span>
              <span className="ex-stars" style={{ color: '#f6bb42' }}>***</span>
              <span className="ex-instruction">
                <InteractiveText fr="Récris ces phrases en mettant les verbes en couleur au passé composé." ru="Перепиши эти предложения, поставив цветные глаголы в passé composé." />
              </span>
            </div>
            <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '15px' }}>
                <span style={{ color: '#e56b55', fontWeight: 'bold' }}>a. </span><InteractiveText fr="Maël et Hugo entrer pour visiter un appartement avec leurs parents." displayFr={<>Maël et Hugo <span style={{ color: '#4a89dc' }}>entrer</span> pour visiter un appartement avec leurs parents.</>} ru="Маэль и Гюго входят, чтобы осмотреть квартиру со своими родителями." />
                <div style={{ borderBottom: '1px dotted #ccc', height: '20px', marginTop: '10px' }}></div>
                <div style={{ borderBottom: '1px dotted #ccc', height: '20px' }}></div>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <span style={{ color: '#e56b55', fontWeight: 'bold' }}>b. </span><InteractiveText fr="Ils déménagent dans une autre région." displayFr={<>Ils <span style={{ color: '#4a89dc' }}>déménagent</span> dans une autre région.</>} ru="Они переезжают в другой регион." />
                <div style={{ borderBottom: '1px dotted #ccc', height: '20px', marginTop: '10px' }}></div>
                <div style={{ borderBottom: '1px dotted #ccc', height: '20px' }}></div>
              </li>
              <li style={{ marginBottom: '15px' }}>
                <span style={{ color: '#e56b55', fontWeight: 'bold' }}>c. </span><InteractiveText fr="Vous êtes contents de les voir une dernière fois." displayFr={<>Vous <span style={{ color: '#4a89dc' }}>êtes</span> contents de les voir une dernière fois.</>} ru="Вы рады видеть их в последний раз." />
                <div style={{ borderBottom: '1px dotted #ccc', height: '20px', marginTop: '10px' }}></div>
                <div style={{ borderBottom: '1px dotted #ccc', height: '20px' }}></div>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
}
