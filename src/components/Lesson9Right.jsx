import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson9Right() {
  return (
    <div className="page" style={{ paddingLeft: '50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">
          ✏️ <InteractiveText fr="Je m'entraîne" ru="Я тренируюсь" />
        </div>
      </div>

      <div className="exercise-item" style={{ backgroundColor: '#e6f7ff', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
        <div style={{ fontWeight: 'bold', color: '#0066cc', marginBottom: '10px' }}>
          <InteractiveText fr="Pour commencer" ru="Для начала" />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <InteractiveText fr="Entoure les verbes conjugués à l'imparfait." ru="Обведи глаголы, спряженные в imparfait." />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div><span style={{ color: 'blue' }}>a.</span> <InteractiveText fr="Je marche - Je marchais" ru="Я иду - Я шел" /></div>
          <div><span style={{ color: 'blue' }}>c.</span> <InteractiveText fr="Nous jouions - Nous jouons" ru="Мы играли - Мы играем" /></div>
          <div><span style={{ color: 'blue' }}>b.</span> <InteractiveText fr="Tu regardais - Tu regardes" ru="Ты смотрел - Ты смотришь" /></div>
          <div><span style={{ color: 'blue' }}>d.</span> <InteractiveText fr="Je suis - J'étais" ru="Я есть - Я был" /></div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">1</span>
          <span className="ex-stars" style={{ color: 'gold' }}>*</span>
          <span className="ex-instruction">
            <InteractiveText fr="Écris la terminaison de l'imparfait qui convient." ru="Напиши подходящее окончание imparfait." />
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px', marginTop: '10px' }}>
          <div><span style={{ color: 'red' }}>a.</span> <InteractiveText fr="Elles fabriqu..." ru="Они изготавливали..." /></div>
          <div><span style={{ color: 'red' }}>d.</span> <InteractiveText fr="Tu écout..." ru="Ты слушал..." /></div>
          <div><span style={{ color: 'red' }}>b.</span> <InteractiveText fr="Nous parl..." ru="Мы говорили..." /></div>
          <div><span style={{ color: 'red' }}>e.</span> <InteractiveText fr="Je dessin..." ru="Я рисовал..." /></div>
          <div><span style={{ color: 'red' }}>c.</span> <InteractiveText fr="Vous march..." ru="Вы шли..." /></div>
          <div><span style={{ color: 'red' }}>f.</span> <InteractiveText fr="Il siffl..." ru="Он свистел..." /></div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">2</span>
          <span className="ex-stars" style={{ color: 'gold' }}>**</span>
          <span className="ex-instruction">
            <InteractiveText fr="Complète les phrases avec un pronom personnel qui convient." ru="Дополни предложения подходящим личным местоимением." />
          </span>
        </div>
        <div style={{ marginTop: '10px' }}>
          <div><span style={{ color: 'red' }}>a.</span> <InteractiveText fr="... comparions les arbres." ru="... сравнивали деревья." /></div>
          <div><span style={{ color: 'red' }}>b.</span> <InteractiveText fr="... aimais marcher dans la forêt." ru="... любил гулять в лесу." /></div>
          <div><span style={{ color: 'red' }}>c.</span> <InteractiveText fr="... regardait les insectes." ru="... смотрел на насекомых." /></div>
          <div><span style={{ color: 'red' }}>d.</span> <InteractiveText fr="... photographiaient les animaux." ru="... фотографировали животных." /></div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">3</span>
          <span className="ex-stars" style={{ color: 'gold' }}>**</span>
          <span className="ex-instruction">
            <InteractiveText fr="Relie comme il convient." ru="Соедини подходящим образом." />
          </span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '250px', marginTop: '10px' }}>
          <div>
            <div><span style={{ color: 'red' }}>a.</span> <InteractiveText fr="Ils avaient" ru="Они имели" /></div>
            <div><span style={{ color: 'red' }}>b.</span> <InteractiveText fr="J'étais" ru="Я был" /></div>
            <div><span style={{ color: 'red' }}>c.</span> <InteractiveText fr="Nous avions" ru="Мы имели" /></div>
            <div><span style={{ color: 'red' }}>d.</span> <InteractiveText fr="Vous étiez" ru="Вы были" /></div>
            <div><span style={{ color: 'red' }}>e.</span> <InteractiveText fr="Il avait" ru="Он имел" /></div>
            <div><span style={{ color: 'red' }}>f.</span> <InteractiveText fr="Tu étais" ru="Ты был" /></div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', color: 'blue' }}>
            <div><InteractiveText fr="être" ru="быть" /></div>
            <div><InteractiveText fr="avoir" ru="иметь" /></div>
          </div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">4</span>
          <span className="ex-stars" style={{ color: 'gold' }}>***</span>
          <span className="ex-instruction">
            <InteractiveText fr="Écris les verbes proposés à l'imparfait." ru="Напиши предложенные глаголы в imparfait." />
          </span>
        </div>
        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div><span style={{ color: 'red' }}>a.</span> <InteractiveText fr="être -> Hier, nous ............... dans la forêt." displayFr={<><i>être</i> &rarr; Hier, nous ............... dans la forêt.</>} ru="быть -> Вчера мы ............... в лесу." /></div>
          <div><span style={{ color: 'red' }}>b.</span> <InteractiveText fr="avoir -> Gabriel et Nolan ............... un panier." displayFr={<><i>avoir</i> &rarr; Gabriel et Nolan ............... un panier.</>} ru="иметь -> У Габриэля и Нолана ............... корзина." /></div>
          <div><span style={{ color: 'red' }}>c.</span> <InteractiveText fr="ramasser -> Nolan ............... des champignons." displayFr={<><i>ramasser</i> &rarr; Nolan ............... des champignons.</>} ru="собирать -> Нолан ............... грибы." /></div>
          <div><span style={{ color: 'red' }}>d.</span> <InteractiveText fr="observer -> Gabriel et toi ............... les nids des oiseaux dans les arbres." displayFr={<><i>observer</i> &rarr; Gabriel et toi ............... les nids des oiseaux dans les arbres.</>} ru="наблюдать -> Габриэль и ты ............... за птичьими гнездами на деревьях." /></div>
          <div><span style={{ color: 'red' }}>e.</span> <InteractiveText fr="expliquer -> Tu m' ............... que la forêt abrite de nombreuses espèces." displayFr={<><i>expliquer</i> &rarr; Tu m' ............... que la forêt abrite de nombreuses espèces.</>} ru="объяснять -> Ты мне ............... что в лесу обитают многочисленные виды." /></div>
          <div><span style={{ color: 'red' }}>f.</span> <InteractiveText fr="être -> J' ............... très intéressée par tes explications." displayFr={<><i>être</i> &rarr; J' ............... très intéressée par tes explications.</>} ru="быть -> Я ............... очень заинтересована твоими объяснениями." /></div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">5</span>
          <span className="ex-stars" style={{ color: 'gold' }}>***</span>
          <span className="ex-instruction">
            <InteractiveText fr="Récris les phrases à l'imparfait." ru="Перепиши предложения в imparfait." />
          </span>
        </div>
        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div><span style={{ color: 'red' }}>a.</span> <InteractiveText fr="Le garde forestier marque les arbres à abattre." ru="Лесник отмечает деревья для вырубки." /></div>
          <div><span style={{ color: 'red' }}>b.</span> <InteractiveText fr="Nous coupons les arbres avec le bûcheron." ru="Мы рубим деревья вместе с дровосеком." /></div>
          <div><span style={{ color: 'red' }}>c.</span> <InteractiveText fr="Les gardes-chasse surveillent la forêt." ru="Егеря патрулируют лес." /></div>
          <div><span style={{ color: 'red' }}>d.</span> <InteractiveText fr="Vous collectez des feuilles pour fabriquer un herbier." ru="Вы собираете листья, чтобы сделать гербарий." /></div>
        </div>
      </div>

    </div>
  );
}
