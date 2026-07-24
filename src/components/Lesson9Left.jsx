import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson9Left() {
  return (
    <div className="page" style={{ borderRight: '1px solid #eee' }}>
      <div className="header-banner">
        <div className="header-number">9</div>
        <div className="header-title">
          <InteractiveText fr="L'imparfait" ru="Прошедшее несовершенное время" />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title">
          💡 <InteractiveText fr="Je comprends" ru="Я понимаю" />
        </div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">
          <InteractiveText fr="L'emploi de l'imparfait" ru="Употребление imparfait" />
        </div>
        <div>
          <InteractiveText fr="On utilise l'imparfait lorsque l'action est terminée au moment où l'on parle." ru="Мы используем imparfait, когда действие завершено к моменту речи." />
        </div>
        <div>
          <span className="examples-label">
            <InteractiveText fr="Exemples :" ru="Примеры:" />
          </span>
          <ul>
            <li><InteractiveText fr="La semaine dernière, je cherchais des champignons dans la forêt." ru="На прошлой неделе я искал грибы в лесу." /></li>
            <li><InteractiveText fr="Ils étaient bien cachés sous les feuilles." ru="Они были хорошо спрятаны под листьями." /></li>
            <li><InteractiveText fr="Heureusement que nous avions un bâton pour les soulever." ru="К счастью, у нас была палка, чтобы их приподнять." /></li>
          </ul>
        </div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">
          <InteractiveText fr="Les verbes du 1er groupe" ru="Глаголы 1-й группы" />
        </div>
        <div>
          <InteractiveText
            fr="Pour conjuguer un verbe du 1er groupe à l'imparfait, on ajoute au radical les terminaisons -ais, -ais, -ait, -ions, -iez, -aient."
            displayFr={<>Pour conjuguer un verbe du 1<sup>er</sup> groupe à l'imparfait, on ajoute au radical les terminaisons <b>-ais, -ais, -ait, -ions, -iez, -aient</b>.</>}
            ru="Чтобы проспрягать глагол 1-й группы в imparfait, к основе добавляются окончания -ais, -ais, -ait, -ions, -iez, -aient."
          />
        </div>
        <div>
          <InteractiveText fr="Exemple : le verbe chercher -> cherch|er" displayFr={<>Exemple : le verbe <i>chercher</i> &rarr; cherch|er</>} ru="Пример: глагол chercher -> cherch|er" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
          <div>
            <div><InteractiveText fr="je cherchais" displayFr={<>je cherch<b>ais</b></>} ru="я искал" /></div>
            <div><InteractiveText fr="tu cherchais" displayFr={<>tu cherch<b>ais</b></>} ru="ты искал" /></div>
            <div><InteractiveText fr="elle/il cherchait" displayFr={<>elle/il cherch<b>ait</b></>} ru="она/он искал(а)" /></div>
          </div>
          <div>
            <div><InteractiveText fr="nous cherchions" displayFr={<>nous cherch<b>ions</b></>} ru="мы искали" /></div>
            <div><InteractiveText fr="vous cherchiez" displayFr={<>vous cherch<b>iez</b></>} ru="вы искали" /></div>
            <div><InteractiveText fr="elles/ils cherchaient" displayFr={<>elles/ils cherch<b>aient</b></>} ru="они искали" /></div>
          </div>
        </div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">
          <InteractiveText fr="Les verbes être et avoir" ru="Глаголы être и avoir" />
        </div>
        <ul>
          <li>
            <b><InteractiveText fr="Être :" ru="Быть:" /></b> <InteractiveText fr="j'étais sage, tu étais sage, elle/il était sage, nous étions sages, vous étiez sages, elles/ils étaient sages" displayFr={<>j'ét<b>ais</b> sage, tu ét<b>ais</b> sage, elle/il ét<b>ait</b> sage, nous ét<b>ions</b> sages, vous ét<b>iez</b> sages, elles/ils ét<b>aient</b> sages</>} ru="я был послушным, ты был послушным, она/он была/был послушным, мы были послушными, вы были послушными, они были послушными" />
          </li>
          <li>
            <b><InteractiveText fr="Avoir :" ru="Иметь:" /></b> <InteractiveText fr="j'avais froid, tu avais froid, elle/il avait froid, nous avions froid, vous aviez froid, elles/ils avaient froid" displayFr={<>j'av<b>ais</b> froid, tu av<b>ais</b> froid, elle/il av<b>ait</b> froid, nous av<b>ions</b> froid, vous av<b>iez</b> froid, elles/ils av<b>aient</b> froid</>} ru="мне было холодно, тебе было холодно, ей/ему было холодно, нам было холодно, вам было холодно, им было холодно" />
          </li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px', marginTop: '30px' }}>
        <div className="section-title">
          👁️ <InteractiveText fr="Je retiens l'essentiel" ru="Я запоминаю основное" />
        </div>
      </div>

      <div className="theory-block" style={{ border: '2px solid #5d8aa8', borderRadius: '10px', padding: '15px' }}>
        <div style={{ textAlign: 'center', backgroundColor: '#5d8aa8', color: 'white', padding: '5px', borderRadius: '5px', marginBottom: '10px' }}>
          <InteractiveText fr="Verbes du 1er groupe" ru="Глаголы 1-й группы" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <div><InteractiveText fr="Je : radical + ais" ru="Я: основа + ais" /></div>
            <div><InteractiveText fr="Tu : radical + ais" ru="Ты: основа + ais" /></div>
            <div><InteractiveText fr="Elle/Il : radical + ait" ru="Она/Он: основа + ait" /></div>
          </div>
          <div>
            <div><InteractiveText fr="Nous : radical + ions" ru="Мы: основа + ions" /></div>
            <div><InteractiveText fr="Vous : radical + iez" ru="Вы: основа + iez" /></div>
            <div><InteractiveText fr="Elles/Ils : radical + aient" ru="Они: основа + aient" /></div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div className="theory-block" style={{ flex: 1, border: '2px solid #c71585', borderRadius: '10px', padding: '15px' }}>
          <div style={{ textAlign: 'center', backgroundColor: '#c71585', color: 'white', padding: '5px', borderRadius: '5px', marginBottom: '10px' }}>
            <InteractiveText fr="Verbe être" ru="Глагол быть" />
          </div>
          <div>
            <div><InteractiveText fr="j'étais" ru="я был" /></div>
            <div><InteractiveText fr="Tu étais" ru="ты был" /></div>
            <div><InteractiveText fr="Elle/Il était" ru="она/он была/был" /></div>
            <div><InteractiveText fr="Nous étions" ru="мы были" /></div>
            <div><InteractiveText fr="Vous étiez" ru="вы были" /></div>
            <div><InteractiveText fr="Elles/Ils étaient" ru="они были" /></div>
          </div>
        </div>

        <div className="theory-block" style={{ flex: 1, border: '2px solid #8fbc8f', borderRadius: '10px', padding: '15px' }}>
          <div style={{ textAlign: 'center', backgroundColor: '#8fbc8f', color: 'white', padding: '5px', borderRadius: '5px', marginBottom: '10px' }}>
            <InteractiveText fr="Verbe avoir" ru="Глагол иметь" />
          </div>
          <div>
            <div><InteractiveText fr="J'avais" ru="у меня было" /></div>
            <div><InteractiveText fr="Tu avais" ru="у тебя было" /></div>
            <div><InteractiveText fr="Elle/Il avait" ru="у неё/него было" /></div>
            <div><InteractiveText fr="Nous avions" ru="у нас было" /></div>
            <div><InteractiveText fr="Vous aviez" ru="у вас было" /></div>
            <div><InteractiveText fr="Elles/Ils avaient" ru="у них было" /></div>
          </div>
        </div>
      </div>

      <div className="theory-block" style={{ backgroundColor: '#fffacd', borderRadius: '10px', padding: '15px', marginTop: '20px' }}>
        <div style={{ fontWeight: 'bold', textAlign: 'center', marginBottom: '5px' }}>
          <InteractiveText fr="Attention !" ru="Внимание!" />
        </div>
        <div style={{ textAlign: 'center' }}>
          <InteractiveText
            fr="Parfois, on entend la même terminaison, mais, selon le pronom, elle s'écrit différemment !"
            ru="Иногда мы слышим одно и то же окончание, но в зависимости от местоимения оно пишется по-разному!"
          /><br />
          <i>
            <InteractiveText
              fr="Je jouais, elle jouait, ils jouaient."
              displayFr={<>Je jou<b>ais</b>, elle jou<b>ait</b>, ils jou<b>aient</b>.</>}
              ru="Я играл, она играла, они играли."
            />
          </i>
        </div>
      </div>

    </div>
  );
}
