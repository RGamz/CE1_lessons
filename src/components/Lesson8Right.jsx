import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson8Right() {
  return (
    <div className="page" style={{ paddingLeft: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">
          <InteractiveText fr="✏️ Je m'entraîne" ru="✏️ Я тренируюсь" />
        </div>
      </div>

      <div style={{ backgroundColor: '#ebf4fa', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
        <div style={{ color: '#5a8bc6', fontWeight: 'bold', marginBottom: '10px' }}>
          <InteractiveText fr="■ Pour commencer" ru="■ Для начала" />
        </div>
        <InteractiveText 
          fr="Sépare d'un trait le radical et la terminaison des verbes." 
          ru="Отдели чертой корень и окончание глаголов." 
        />
        <div style={{ marginTop: '10px', textAlign: 'center' }}>
          <InteractiveText 
            fr="réparer - travailler - cuisiner - aimer - s'amuser - rêver" 
            ru="чинить - работать - готовить - любить - развлекаться - мечтать" 
          />
        </div>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div>
          <span className="ex-number">1</span>
          <span className="ex-stars" style={{ color: '#eec956' }}>*</span>
          <span className="ex-instruction">
            <InteractiveText 
              fr="Écris la terminaison du présent qui convient." 
              ru="Напиши подходящее окончание настоящего времени." 
            />
          </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '10px', gap: '20px' }}>
          <div style={{ flex: '1' }}>
            <div>a. <InteractiveText fr="Elle travaill......" ru="Она работа......" /></div>
            <div>b. <InteractiveText fr="Ils fabriqu......" ru="Они производ......" /></div>
            <div>c. <InteractiveText fr="Vous répar......" ru="Вы чинит......" /></div>
          </div>
          <div style={{ flex: '1' }}>
            <div>d. <InteractiveText fr="Tu soign......" ru="Ты лечиш......" /></div>
            <div>e. <InteractiveText fr="Nous coup......" ru="Мы реже......" /></div>
            <div>f. <InteractiveText fr="Je cuisin......" ru="Я готовл......" /></div>
          </div>
        </div>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div>
          <span className="ex-number">2</span>
          <span className="ex-stars" style={{ color: '#eec956' }}>**</span>
          <span className="ex-instruction">
            <InteractiveText 
              fr="Complète avec un pronom personnel qui convient." 
              ru="Дополни подходящим личным местоимением." 
            />
          </span>
        </div>
        <div style={{ marginTop: '10px', lineHeight: '2' }}>
          <div>a. ............ <InteractiveText fr="corrige les copies des élèves." ru="исправляет работы учеников." /></div>
          <div>b. ............ <InteractiveText fr="sauvons les animaux." ru="спасаем животных." /></div>
          <div>c. ............ <InteractiveText fr="construisent des maisons." ru="строят дома." /></div>
          <div>d. ............ <InteractiveText fr="livrez les colis." ru="доставляете посылки." /></div>
        </div>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div>
          <span className="ex-number">3</span>
          <span className="ex-stars" style={{ color: '#eec956' }}>**</span>
          <span className="ex-instruction">
            <InteractiveText 
              fr="Relie comme il convient." 
              ru="Соедини как подходит." 
            />
          </span>
        </div>
        <div style={{ display: 'flex', marginTop: '10px', justifyContent: 'space-around', alignItems: 'center' }}>
          <div style={{ lineHeight: '1.8' }}>
            <div><InteractiveText fr="a. Elle est" ru="a. Она есть" /></div>
            <div><InteractiveText fr="b. Tu as" ru="b. У тебя есть" /></div>
            <div><InteractiveText fr="c. Vous êtes" ru="c. Вы есть" /></div>
            <div><InteractiveText fr="d. Nous avons" ru="d. У нас есть" /></div>
            <div><InteractiveText fr="e. Ils sont" ru="e. Они есть" /></div>
            <div><InteractiveText fr="f. Elles ont" ru="f. У них есть" /></div>
          </div>
          <div style={{ lineHeight: '3', textAlign: 'center' }}>
            <div><span style={{ padding: '5px 10px', border: '1px solid #ccc', borderRadius: '5px' }}><InteractiveText fr="être" ru="быть" /></span></div>
            <div><span style={{ padding: '5px 10px', border: '1px solid #ccc', borderRadius: '5px' }}><InteractiveText fr="avoir" ru="иметь" /></span></div>
          </div>
        </div>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div>
          <span className="ex-number">4</span>
          <span className="ex-stars" style={{ color: '#eec956' }}>***</span>
          <span className="ex-instruction">
            <InteractiveText 
              fr="Dans chaque phrase, colorie le verbe correctement orthographié." 
              ru="В каждом предложении раскрась правильно написанный глагол." 
            />
          </span>
        </div>
        <div style={{ marginTop: '10px', lineHeight: '2' }}>
          <div>
            a. <InteractiveText fr="Les architectes [dessines / dessinent] des plans. Elles [son / sont] très douées." displayFr={<>Les architectes <span style={{border: '1px solid #999', padding: '2px'}}>dessines</span> <span style={{border: '1px solid #999', padding: '2px'}}>dessinent</span> des plans. Elles <span style={{border: '1px solid #999', padding: '2px'}}>son</span> <span style={{border: '1px solid #999', padding: '2px'}}>sont</span> très douées.</>} ru="Архитекторы [рисуют] планы. Они очень [талантливы]." />
          </div>
          <div>
            b. <InteractiveText fr="La fleuriste [prépare / prépares] un bouquet. Elle [as / a] beaucoup de clients." displayFr={<>La fleuriste <span style={{border: '1px solid #999', padding: '2px'}}>prépare</span> <span style={{border: '1px solid #999', padding: '2px'}}>prépares</span> un bouquet. Elle <span style={{border: '1px solid #999', padding: '2px'}}>as</span> <span style={{border: '1px solid #999', padding: '2px'}}>a</span> beaucoup de clients.</>} ru="Цветочница [готовит] букет. У неё много [клиентов]." />
          </div>
          <div>
            c. <InteractiveText fr="Vous [avait / avez] un oncle apiculteur. Nous [récoltont / récoltons] le miel avec lui." displayFr={<>Vous <span style={{border: '1px solid #999', padding: '2px'}}>avait</span> <span style={{border: '1px solid #999', padding: '2px'}}>avez</span> un oncle apiculteur. Nous <span style={{border: '1px solid #999', padding: '2px'}}>récoltont</span> <span style={{border: '1px solid #999', padding: '2px'}}>récoltons</span> le miel avec lui.</>} ru="У вас [есть] дядя-пчеловод. Мы [собираем] с ним мёд." />
          </div>
        </div>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div>
          <span className="ex-number">5</span>
          <span className="ex-stars" style={{ color: '#eec956' }}>***</span>
          <span className="ex-instruction">
            <InteractiveText 
              fr="Écris les verbes proposés au présent, avec la bonne terminaison." 
              ru="Напиши предложенные глаголы в настоящем времени с правильным окончанием." 
            />
          </span>
        </div>
        <div style={{ marginTop: '10px', lineHeight: '2' }}>
          <div><InteractiveText fr="a. fabriquer → Le menuisier ................... un meuble." ru="a. изготавливать → Столяр ................... мебель." /></div>
          <div><InteractiveText fr="b. être → Le camion des pompiers ................... rouge." ru="b. быть → Пожарная машина ................... красная." /></div>
          <div><InteractiveText fr="c. ramasser → Les élèves ................... les cahiers." ru="c. собирать → Ученики ................... тетради." /></div>
          <div><InteractiveText fr="d. avoir → Nous ................... une sœur mécanicienne." ru="d. иметь → У нас ................... сестра-механик." /></div>
          <div><InteractiveText fr="e. enquêter → Tu ................... comme un policier." ru="e. расследовать → Ты ................... как полицейский." /></div>
          <div><InteractiveText fr="f. être → Les maîtres-nageurs ................... là pour surveiller les baigneurs." ru="f. быть → Спасатели ................... здесь, чтобы следить за купающимися." /></div>
          <div><InteractiveText fr="g. aider → J' ................... la fermière à s'occuper de ses animaux." ru="g. помогать → Я ................... фермерше заботиться о её животных." /></div>
          <div><InteractiveText fr="h. avoir → Elle ................... de jolis veaux." ru="h. иметь → У неё ................... красивые телята." /></div>
        </div>
      </div>

    </div>
  );
}
