import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson8Left() {
  return (
    <div className="page" style={{ borderRight: '1px solid #eee', paddingRight: '20px' }}>
      <div className="header-banner">
        <div className="header-number">8</div>
        <div className="header-title">
          <InteractiveText fr="Le présent" ru="Настоящее время" />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title">
          <InteractiveText fr="💡 Je comprends" ru="💡 Я понимаю" />
        </div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">
          <InteractiveText fr="L'emploi du présent" ru="Использование настоящего времени" />
        </div>
        <ul>
          <li>
            <InteractiveText 
              fr="On utilise le présent lorsque l'action se déroule au moment où l'on parle. Il peut aussi énoncer une vérité générale." 
              ru="Настоящее время используется, когда действие происходит в момент речи. Оно также может выражать общеизвестную истину." 
            />
          </li>
        </ul>
        <div style={{ marginLeft: '20px' }}>
          <span className="examples-label">Exemple : </span>
          <InteractiveText 
            fr="Maintenant, nous écoutons de la musique. La Terre est ronde." 
            ru="Пример: Сейчас мы слушаем музыку. Земля круглая." 
          />
        </div>

        <div className="theory-subtitle" style={{ marginTop: '20px' }}>
          <InteractiveText fr="Les verbes du 1er groupe" ru="Глаголы 1-го спряжения" />
        </div>
        <ul>
          <li>
            <InteractiveText 
              fr="Un verbe est composé d'un radical, qui ne change pas, et d'une terminaison, la partie qui change selon le temps ou la personne." 
              ru="Глагол состоит из корня, который не изменяется, и окончания, части, которая изменяется в зависимости от времени или лица." 
            />
          </li>
        </ul>
        <div style={{ marginLeft: '20px' }}>
          <span className="examples-label">Exemple : </span>
          <InteractiveText 
            fr="le verbe chanter → chant (radical) er (terminaison)" 
            displayFr={<>le verbe chanter → chant <i>(radical)</i> er <i>(terminaison)</i></>}
            ru="глагол chanter (петь) → chant (корень) er (окончание)" 
          />
        </div>
        <ul>
          <li>
            <InteractiveText 
              fr="Les verbes du 1er groupe se terminent par -er à l'infinitif." 
              displayFr={<>Les verbes du 1<sup>er</sup> groupe se terminent par <span style={{ color: 'red' }}>-er</span> à l'infinitif.</>}
              ru="Глаголы 1-го спряжения оканчиваются на -er в инфинитиве." 
            />
            <br />
            <InteractiveText 
              fr="Attention, le verbe aller n'appartient pas au 1er groupe." 
              displayFr={<>Attention, le verbe <i>aller</i> n'appartient pas au 1<sup>er</sup> groupe.</>}
              ru="Внимание, глагол aller не относится к 1-му спряжению." 
            />
          </li>
          <li>
            <InteractiveText 
              fr="Pour conjuguer un verbe du 1er groupe au présent, on écrit le radical et on ajoute les terminaisons : -e, -es, -e, -ons, -ez, -ent." 
              displayFr={<>Pour conjuguer un verbe du 1<sup>er</sup> groupe au présent, on écrit le radical et on ajoute les terminaisons : <span style={{ color: 'red' }}>-e, -es, -e, -ons, -ez, -ent</span>.</>}
              ru="Чтобы проспрягать глагол 1-го спряжения в настоящем времени, мы пишем корень и добавляем окончания: -e, -es, -e, -ons, -ez, -ent." 
            />
          </li>
        </ul>
        <div style={{ marginLeft: '20px' }}>
          <span className="examples-label">Exemple : </span>
          <InteractiveText 
            fr="je chante, tu chantes, elle/il chante, nous chantons, vous chantez, elles/ils chantent" 
            displayFr={<>j<span style={{ color: 'red' }}>e</span> chant<span style={{ color: 'red' }}>e</span>, t<span style={{ color: 'red' }}>u</span> chant<span style={{ color: 'red' }}>es</span>, ell<span style={{ color: 'red' }}>e</span>/i<span style={{ color: 'red' }}>l</span> chant<span style={{ color: 'red' }}>e</span>, nou<span style={{ color: 'red' }}>s</span> chant<span style={{ color: 'red' }}>ons</span>, vou<span style={{ color: 'red' }}>s</span> chant<span style={{ color: 'red' }}>ez</span>, elle<span style={{ color: 'red' }}>s</span>/il<span style={{ color: 'red' }}>s</span> chant<span style={{ color: 'red' }}>ent</span></>}
            ru="я пою, ты поешь, она/он поет, мы поем, вы поете, они поют" 
          />
        </div>

        <div className="theory-subtitle" style={{ marginTop: '20px' }}>
          <InteractiveText fr="Les verbes être et avoir" ru="Глаголы быть и иметь" />
        </div>
        <ul>
          <li>
            <InteractiveText 
              fr="Être et avoir ont une conjugaison particulière, car leur radical change." 
              displayFr={<><i>Être</i> et <i>avoir</i> ont une conjugaison particulière, car leur radical change.</>}
              ru="Être и avoir имеют особое спряжение, так как их корень меняется." 
            />
          </li>
          <li>
            <InteractiveText 
              fr="Être : je suis sage, tu es sage, elle/il est sage, nous sommes sages, vous êtes sages, elles/ils sont sages" 
              displayFr={<><i>Être</i> : je <b>suis</b> sage, tu <b>es</b> sage, elle/il <b>est</b> sage, nous <b>sommes</b> sages, vous <b>êtes</b> sages, elles/ils <b>sont</b> sages</>}
              ru="Быть: я послушный, ты послушный, она/он послушный, мы послушные, вы послушные, они послушные" 
            />
          </li>
          <li>
            <InteractiveText 
              fr="Avoir : j'ai froid, tu as froid, elle/il a froid, nous avons froid, vous avez froid, elles/ils ont froid" 
              displayFr={<><i>Avoir</i> : j'<b>ai</b> froid, tu <b>as</b> froid, elle/il <b>a</b> froid, nous <b>avons</b> froid, vous <b>avez</b> froid, elles/ils <b>ont</b> froid</>}
              ru="Иметь: мне холодно, тебе холодно, ей/ему холодно, нам холодно, вам холодно, им холодно" 
            />
          </li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', margin: '30px 0 20px' }}>
        <div className="section-title" style={{ backgroundColor: '#e8743f', color: 'white', padding: '10px', borderRadius: '10px' }}>
          <InteractiveText fr="👁️ Je retiens l'essentiel" ru="👁️ Я запоминаю главное" />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', fontSize: '0.9em' }}>
        <div style={{ flex: '1', border: '2px solid #5a8bc6', borderRadius: '8px', padding: '10px', backgroundColor: '#eef4fa' }}>
          <div style={{ textAlign: 'center', backgroundColor: '#5a8bc6', color: 'white', padding: '5px', borderRadius: '5px', marginBottom: '10px' }}>
            <InteractiveText fr="Verbes du 1er groupe" ru="Глаголы 1-го спряжения" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <InteractiveText fr="Je : radical + e" displayFr={<>Je : radical + <span style={{color: 'red'}}>-e</span></>} ru="Я : корень + e" /><br/>
              <InteractiveText fr="Tu : radical + es" displayFr={<>Tu : radical + <span style={{color: 'red'}}>-es</span></>} ru="Ты : корень + es" /><br/>
              <InteractiveText fr="Elle/Il : radical + e" displayFr={<>Elle/Il : radical + <span style={{color: 'red'}}>-e</span></>} ru="Она/Он : корень + e" />
            </div>
            <div>
              <InteractiveText fr="Nous : radical + ons" displayFr={<>Nous : radical + <span style={{color: 'red'}}>-ons</span></>} ru="Мы : корень + ons" /><br/>
              <InteractiveText fr="Vous : radical + ez" displayFr={<>Vous : radical + <span style={{color: 'red'}}>-ez</span></>} ru="Вы : корень + ez" /><br/>
              <InteractiveText fr="Elles/Ils : radical + ent" displayFr={<>Elles/Ils : radical + <span style={{color: 'red'}}>-ent</span></>} ru="Они : корень + ent" />
            </div>
          </div>
        </div>

        <div style={{ flex: '1', border: '2px solid #d44e7c', borderRadius: '8px', padding: '10px', backgroundColor: '#f9eaee' }}>
          <div style={{ textAlign: 'center', backgroundColor: '#d44e7c', color: 'white', padding: '5px', borderRadius: '5px', marginBottom: '10px' }}>
            <InteractiveText fr="Verbe être" ru="Глагол быть" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <InteractiveText fr="Je suis" ru="Я есть" /><br/>
              <InteractiveText fr="Tu es" ru="Ты есть" /><br/>
              <InteractiveText fr="Elle/Il est" ru="Она/Он есть" />
            </div>
            <div>
              <InteractiveText fr="Nous sommes" ru="Мы есть" /><br/>
              <InteractiveText fr="Vous êtes" ru="Вы есть" /><br/>
              <InteractiveText fr="Elles/Ils sont" ru="Они есть" />
            </div>
          </div>
        </div>

        <div style={{ flex: '1', border: '2px solid #8ab846', borderRadius: '8px', padding: '10px', backgroundColor: '#f2f7ec' }}>
          <div style={{ textAlign: 'center', backgroundColor: '#8ab846', color: 'white', padding: '5px', borderRadius: '5px', marginBottom: '10px' }}>
            <InteractiveText fr="Verbe avoir" ru="Глагол иметь" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <InteractiveText fr="J'ai" ru="У меня есть" /><br/>
              <InteractiveText fr="Tu as" ru="У тебя есть" /><br/>
              <InteractiveText fr="Elle/Il a" ru="У неё/него есть" />
            </div>
            <div>
              <InteractiveText fr="Nous avons" ru="У нас есть" /><br/>
              <InteractiveText fr="Vous avez" ru="У вас есть" /><br/>
              <InteractiveText fr="Elles/Ils ont" ru="У них есть" />
            </div>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '20px', border: '1px solid #f9d575', backgroundColor: '#fdf7e3', padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
        <strong><InteractiveText fr="Attention !" ru="Внимание!" /></strong><br />
        <InteractiveText fr="Parfois, la terminaison ne s'entend pas !" ru="Иногда окончание не слышно!" /><br />
        <InteractiveText fr="Je joue ; tu joues ; elle joue." displayFr={<>Je jou<span style={{color: 'red'}}>e</span> ; tu jou<span style={{color: 'red'}}>es</span> ; elle jou<span style={{color: 'red'}}>e</span>.</>} ru="Я играю ; ты играешь ; она играет." />
      </div>

    </div>
  );
}
