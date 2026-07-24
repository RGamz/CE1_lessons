import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson10Left() {
  return (
    <div className="page" style={{ borderRight: '1px solid #eee' }}>
      <div className="header-banner">
        <div className="header-number">10</div>
        <div className="header-title">
          <InteractiveText fr="Le futur" ru="Будущее время" />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title">💡 <InteractiveText fr="Je comprends" ru="Я понимаю" /></div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">
          <InteractiveText fr="L'emploi du futur" ru="Использование будущего времени" />
        </div>
        <p>
          <InteractiveText 
            fr="On utilise le futur lorsque l'action n'a pas encore eu lieu et qu'elle se déroulera plus tard." 
            ru="Мы используем будущее время, когда действие еще не произошло и оно произойдет позже." 
          />
        </p>
        <div>
          <span className="examples-label">
            <InteractiveText fr="Exemples :" ru="Примеры:" /> 
          </span>
          <ul>
            <li>
              <InteractiveText fr="Le week-end prochain, je rangerai ma chambre." ru="В следующие выходные я уберусь в своей комнате." />
            </li>
            <li>
              <InteractiveText fr="Tu seras fier de moi quand ce sera fini." ru="Ты будешь гордиться мной, когда это закончится." />
            </li>
            <li>
              <InteractiveText fr="Mon frère et moi, nous aurons plus de place pour jouer." ru="У нас с братом будет больше места для игр." />
            </li>
          </ul>
        </div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">
          <InteractiveText fr="Les verbes du 1er groupe" ru="Глаголы 1-го спряжения" />
        </div>
        <p>
          <InteractiveText 
            fr="Pour conjuguer un verbe du 1er groupe au futur, on écrit son infinitif et on ajoute les terminaisons : -ai, -as, -a, -ons, -ez, -ont." 
            displayFr={
              <>
                Pour conjuguer un verbe du 1<sup>er</sup> groupe au futur, on écrit son infinitif et on ajoute les terminaisons : <b>-ai</b>, <b>-as</b>, <b>-a</b>, <b>-ons</b>, <b>-ez</b>, <b>-ont</b>.
              </>
            }
            ru="Чтобы проспрягать глагол 1-го спряжения в будущем времени, мы пишем его инфинитив и добавляем окончания: -ai, -as, -a, -ons, -ez, -ont." 
          />
        </p>
        <div>
          <span className="examples-label">
            <InteractiveText fr="Exemple : le verbe ranger" ru="Пример: глагол ranger (убирать)" />
          </span>
          <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '10px' }}>
            <div>
              <div><InteractiveText fr="je rangerai" displayFr={<>je ranger<b>ai</b></>} ru="я уберусь" /></div>
              <div><InteractiveText fr="tu rangeras" displayFr={<>tu ranger<b>as</b></>} ru="ты уберешься" /></div>
              <div><InteractiveText fr="elle/il rangera" displayFr={<>elle/il ranger<b>a</b></>} ru="она/он уберется" /></div>
            </div>
            <div>
              <div><InteractiveText fr="nous rangerons" displayFr={<>nous ranger<b>ons</b></>} ru="мы уберемся" /></div>
              <div><InteractiveText fr="vous rangerez" displayFr={<>vous ranger<b>ez</b></>} ru="вы уберетесь" /></div>
              <div><InteractiveText fr="elles/ils rangeront" displayFr={<>elles/ils ranger<b>ont</b></>} ru="они уберутся" /></div>
            </div>
          </div>
        </div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">
          <InteractiveText fr="Les verbes être et avoir" ru="Глаголы être (быть) и avoir (иметь)" />
        </div>
        <ul>
          <li>
            <b><InteractiveText fr="Être :" ru="Être :" /></b>{' '}
            <InteractiveText fr="je serai sage, tu seras sage, elle/il sera sage, nous serons sages, vous serez sages, elles/ils seront sages" ru="я буду послушным, ты будешь послушным, она/он будет послушным, мы будем послушными, вы будете послушными, они будут послушными" />
          </li>
          <li>
            <b><InteractiveText fr="Avoir :" ru="Avoir :" /></b>{' '}
            <InteractiveText fr="j'aurai froid, tu auras froid, elle/il aura froid, nous aurons froid, vous aurez froid, elles/ils auront froid" ru="мне будет холодно, тебе будет холодно, ей/ему будет холодно, нам будет холодно, вам будет холодно, им будет холодно" />
          </li>
        </ul>
      </div>

      <div style={{ textAlign: 'center', margin: '30px 0 20px' }}>
        <div className="section-title">👁️ <InteractiveText fr="Je retiens l'essentiel" ru="Я запоминаю основное" /></div>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <div style={{ border: '2px solid #5a9bd4', borderRadius: '10px', padding: '10px', minWidth: '200px' }}>
          <div style={{ backgroundColor: '#5a9bd4', color: 'white', textAlign: 'center', padding: '5px', borderRadius: '5px', marginBottom: '10px' }}>
            <InteractiveText fr="Verbes du 1er groupe" ru="Глаголы 1-го спряжения" />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <div><InteractiveText fr="Je : infinitif + ai" displayFr={<>Je : infinitif + <span style={{ color: '#d9534f' }}>ai</span></>} ru="Je : инфинитив + ai" /></div>
              <div><InteractiveText fr="Tu : infinitif + as" displayFr={<>Tu : infinitif + <span style={{ color: '#d9534f' }}>as</span></>} ru="Tu : инфинитив + as" /></div>
              <div><InteractiveText fr="Elle/Il : infinitif + a" displayFr={<>Elle/Il : infinitif + <span style={{ color: '#d9534f' }}>a</span></>} ru="Elle/Il : инфинитив + a" /></div>
            </div>
            <div>
              <div><InteractiveText fr="Nous : infinitif + ons" displayFr={<>Nous : infinitif + <span style={{ color: '#5a9bd4' }}>ons</span></>} ru="Nous : инфинитив + ons" /></div>
              <div><InteractiveText fr="Vous : infinitif + ez" displayFr={<>Vous : infinitif + <span style={{ color: '#5a9bd4' }}>ez</span></>} ru="Vous : инфинитив + ez" /></div>
              <div><InteractiveText fr="Elles/Ils : infinitif + ont" displayFr={<>Elles/Ils : infinitif + <span style={{ color: '#5a9bd4' }}>ont</span></>} ru="Elles/Ils : инфинитив + ont" /></div>
            </div>
          </div>
        </div>

        <div style={{ border: '2px solid #d9534f', borderRadius: '10px', padding: '10px', minWidth: '150px' }}>
          <div style={{ backgroundColor: '#d9534f', color: 'white', textAlign: 'center', padding: '5px', borderRadius: '5px', marginBottom: '10px' }}>
            <InteractiveText fr="Verbe être" ru="Глагол être" />
          </div>
          <div><InteractiveText fr="Je serai" displayFr={<>Je ser<span style={{ color: '#d9534f' }}>ai</span></>} ru="Я буду" /></div>
          <div><InteractiveText fr="Tu seras" displayFr={<>Tu ser<span style={{ color: '#d9534f' }}>as</span></>} ru="Ты будешь" /></div>
          <div><InteractiveText fr="Elle/Il sera" displayFr={<>Elle/Il ser<span style={{ color: '#d9534f' }}>a</span></>} ru="Она/Он будет" /></div>
          <div><InteractiveText fr="Nous serons" displayFr={<>Nous ser<span style={{ color: '#5a9bd4' }}>ons</span></>} ru="Мы будем" /></div>
          <div><InteractiveText fr="Vous serez" displayFr={<>Vous ser<span style={{ color: '#5a9bd4' }}>ez</span></>} ru="Вы будете" /></div>
          <div><InteractiveText fr="Elles/Ils seront" displayFr={<>Elles/Ils ser<span style={{ color: '#5a9bd4' }}>ont</span></>} ru="Они будут" /></div>
        </div>

        <div style={{ border: '2px solid #5cb85c', borderRadius: '10px', padding: '10px', minWidth: '150px' }}>
          <div style={{ backgroundColor: '#5cb85c', color: 'white', textAlign: 'center', padding: '5px', borderRadius: '5px', marginBottom: '10px' }}>
            <InteractiveText fr="Verbe avoir" ru="Глагол avoir" />
          </div>
          <div><InteractiveText fr="J'aurai" displayFr={<>J'aur<span style={{ color: '#d9534f' }}>ai</span></>} ru="У меня будет" /></div>
          <div><InteractiveText fr="Tu auras" displayFr={<>Tu aur<span style={{ color: '#d9534f' }}>as</span></>} ru="У тебя будет" /></div>
          <div><InteractiveText fr="Elle/Il aura" displayFr={<>Elle/Il aur<span style={{ color: '#d9534f' }}>a</span></>} ru="У нее/него будет" /></div>
          <div><InteractiveText fr="Nous aurons" displayFr={<>Nous aur<span style={{ color: '#5a9bd4' }}>ons</span></>} ru="У нас будет" /></div>
          <div><InteractiveText fr="Vous aurez" displayFr={<>Vous aur<span style={{ color: '#5a9bd4' }}>ez</span></>} ru="У вас будет" /></div>
          <div><InteractiveText fr="Elles/Ils auront" displayFr={<>Elles/Ils aur<span style={{ color: '#5a9bd4' }}>ont</span></>} ru="У них будет" /></div>
        </div>

        <div style={{ backgroundColor: '#fdf3d1', padding: '15px', borderRadius: '10px', maxWidth: '250px' }}>
          <p style={{ margin: 0, fontWeight: 'bold' }}>
            <InteractiveText fr="Ne confonds pas les terminaisons -ons et -ont !" ru="Не путай окончания -ons и -ont!" />
          </p>
          <p style={{ margin: '10px 0 0 0' }}>
            <InteractiveText fr="Nous jouerons, elles/ils joueront." displayFr={<>Nous jouer<span style={{ color: '#5a9bd4' }}>ons</span>, elles/ils jouer<span style={{ color: '#5a9bd4' }}>ont</span>.</>} ru="Мы будем играть, они будут играть." />
          </p>
        </div>
      </div>
    </div>
  );
}
