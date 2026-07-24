import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson10Right() {
  return (
    <div className="page" style={{ paddingLeft: '50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">✏️ <InteractiveText fr="Je m'entraîne" ru="Я тренируюсь" /></div>
      </div>

      <div className="exercise-item">
        <div style={{ backgroundColor: '#f0f5fa', padding: '10px', borderRadius: '5px', marginBottom: '20px' }}>
          <div style={{ color: '#5a9bd4', fontWeight: 'bold' }}>
            <InteractiveText fr="Pour commencer" ru="Для начала" />
          </div>
          <p>
            <InteractiveText fr="Dans ces verbes au futur, sépare d'un trait l'infinitif et la terminaison." ru="В этих глаголах в будущем времени отдели чертой инфинитив от окончания." />
          </p>
          <p style={{ textAlign: 'center', fontStyle: 'italic' }}>
            <InteractiveText fr="J'éplucherai - Nous couperons - Il cuisinera - Vous marcherez" ru="Я почищу - Мы порежем - Он приготовит - Вы пойдете" />
          </p>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">1</span><span className="ex-stars">*</span>
          <span className="ex-instruction">
            <InteractiveText fr="Écris la terminaison qui convient." ru="Напиши подходящее окончание." />
          </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <p>a. <InteractiveText fr="Je mixer..." ru="Я смешаю..." /></p>
            <p>b. <InteractiveText fr="Elles mesurer..." ru="Они измерят..." /></p>
            <p>c. <InteractiveText fr="Tu verser..." ru="Ты нальешь..." /></p>
          </div>
          <div style={{ flex: 1 }}>
            <p>d. <InteractiveText fr="Nous pèler..." ru="Мы почистим..." /></p>
            <p>e. <InteractiveText fr="Il découper..." ru="Он нарежет..." /></p>
            <p>f. <InteractiveText fr="Vous manger..." ru="Вы съедите..." /></p>
          </div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">2</span><span className="ex-stars">**</span>
          <span className="ex-instruction">
            <InteractiveText fr="Complète avec un pronom personnel qui convient." ru="Дополни подходящим личным местоимением." />
          </span>
        </div>
        <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
          <li>a. ......... <InteractiveText fr="éplucherez les pommes." ru="почистите яблоки." /></li>
          <li>b. ......... <InteractiveText fr="étaleras la pâte." ru="раскатаешь тесто." /></li>
          <li>c. ......... <InteractiveText fr="disposeront les pommes." ru="разложат яблоки." /></li>
          <li>d. ......... <InteractiveText fr="enfournerons la tarte." ru="поставим пирог в духовку." /></li>
        </ul>
      </div>

      <div className="exercise-item" style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{ flex: 1 }}>
          <div>
            <span className="ex-number">3</span><span className="ex-stars">**</span>
            <span className="ex-instruction">
              <InteractiveText fr="Relie comme il convient." ru="Соедини подходящим образом." />
            </span>
          </div>
          <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: 0, marginTop: '10px' }}>
            <li>a. <InteractiveText fr="Nous aurons" ru="У нас будет" /> •</li>
            <li>b. <InteractiveText fr="J'aurai" ru="У меня будет" /> •</li>
            <li>c. <InteractiveText fr="Ils seront" ru="Они будут" /> •</li>
            <li>d. <InteractiveText fr="Elle sera" ru="Она будет" /> •</li>
            <li>e. <InteractiveText fr="Vous aurez" ru="У вас будет" /> •</li>
            <li>f. <InteractiveText fr="Tu seras" ru="Ты будешь" /> •</li>
          </ul>
        </div>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div>• <b><InteractiveText fr="être" ru="être" /></b></div>
          <div>• <b><InteractiveText fr="avoir" ru="avoir" /></b></div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">4</span><span className="ex-stars">***</span>
          <span className="ex-instruction">
            <InteractiveText fr="Écris les verbes au futur." ru="Напиши глаголы в будущем времени." />
          </span>
        </div>
        <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: 0 }}>
          <li>
            <InteractiveText fr="a. placer → Papa ...................... les ustensiles sur la table." displayFr={<>a. placer &rarr; Papa ...................... les ustensiles sur la table.</>} ru="a. placer (положить) → Папа ...................... посуду на стол." />
          </li>
          <li>
            <InteractiveText fr="b. être → Les ingrédients ...................... déjà prêts." displayFr={<>b. être &rarr; Les ingrédients ...................... déjà prêts.</>} ru="b. être (быть) → Ингредиенты ...................... уже готовы." />
          </li>
          <li>
            <InteractiveText fr="c. mélanger → Je ...................... les œufs et le sucre." displayFr={<>c. mélanger &rarr; Je ...................... les œufs et le sucre.</>} ru="c. mélanger (смешать) → Я ...................... яйца и сахар." />
          </li>
          <li>
            <InteractiveText fr="d. ajouter → Ma sœur et moi ...................... la farine, le lait et la levure." displayFr={<>d. ajouter &rarr; Ma sœur et moi ...................... la farine, le lait et la levure.</>} ru="d. ajouter (добавить) → Мы с сестрой ...................... муку, молоко и дрожжи." />
          </li>
          <li>
            <InteractiveText fr="e. avoir → Tu n' ...................... plus qu'à allumer le four pour cuire le gâteau." displayFr={<>e. avoir &rarr; Tu n' ...................... plus qu'à allumer le four pour cuire le gâteau.</>} ru="e. avoir (иметь) → Тебе больше не ...................... ничего, кроме как включить духовку, чтобы испечь пирог." />
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">5</span><span className="ex-stars">***</span>
          <span className="ex-instruction">
            <InteractiveText fr="Récris les phrases au futur." ru="Перепиши предложения в будущем времени." />
          </span>
        </div>
        <div style={{ marginTop: '10px' }}>
          <p>
            <InteractiveText fr="a. Aujourd'hui, je prépare un gâteau, car il y a des invités chez moi." ru="a. Сегодня я готовлю пирог, потому что у меня гости." /><br />
            <InteractiveText fr="Demain, ............................................................................................................" ru="Завтра, ............................................................................................................" />
          </p>
          <p>
            <InteractiveText fr="b. Je chauffe de l'eau que tu verses doucement dans la théière." ru="b. Я грею воду, которую ты медленно наливаешь в чайник." /><br />
            ............................................................................................................
          </p>
          <p>
            <InteractiveText fr="c. Les invités sont ravis, nous dégustons mon gâteau avec une bonne tasse de thé." ru="c. Гости в восторге, мы дегустируем мой пирог с хорошей чашкой чая." /><br />
            ............................................................................................................
          </p>
        </div>
      </div>
    </div>
  );
}
