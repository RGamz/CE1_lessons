import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson11Left() {
  return (
    <div className="page" style={{ borderRight: '1px solid #eee' }}>
      <div className="header-banner">
        <div className="header-number">11</div>
        <div className="header-title">
          <InteractiveText fr="Le passé composé" ru="Прошедшее сложное время (passé composé)" />
        </div>
      </div>

      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title">💡 <InteractiveText fr="Je comprends" ru="Я понимаю" /></div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">
          <span style={{ color: '#88b544' }}>■</span> <InteractiveText fr="L'emploi du passé composé et sa formation" ru="Использование passé composé и его образование" />
        </div>
        <div>
          <InteractiveText fr="Le passé composé est un temps du passé. Il est formé de deux mots :" ru="Passé composé — это прошедшее время. Оно состоит из двух слов:" />
          <ul>
            <li><InteractiveText fr="l'auxiliaire être ou avoir conjugué au présent ;" displayFr={<>l'auxiliaire <i>être</i> ou <i>avoir</i> conjugué au présent ;</>} ru="вспомогательный глагол être или avoir, спрягаемый в настоящем времени;" /></li>
            <li><InteractiveText fr="le participe passé du verbe à conjuguer." ru="причастие прошедшего времени спрягаемого глагола." /></li>
          </ul>
        </div>
        <div style={{ marginBottom: '15px' }}>
          <span className="examples-label">Exemple : </span>
          <InteractiveText 
            fr="Hier, je suis arrivé au restaurant et j'ai mangé une pizza." 
            displayFr={<>Hier, je <span style={{ color: 'red' }}>suis arrivé</span> au restaurant et j'<span style={{ color: 'red' }}>ai mangé</span> une pizza.</>} 
            ru="Вчера я пришел в ресторан и съел пиццу." 
          />
        </div>

        <div className="theory-subtitle">
          <span style={{ color: '#88b544' }}>■</span> <InteractiveText fr="Les verbes du 1er groupe" ru="Глаголы 1-й группы" />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ color: '#e56b55' }}>•</span> <InteractiveText fr="Pour conjuguer ces verbes au passé composé, on utilise l'auxiliaire être ou avoir au présent, suivi du participe passé terminé par -é." displayFr={<>Pour conjuguer ces verbes au passé composé, on utilise l'auxiliaire <i>être</i> ou <i>avoir</i> au présent, suivi du participe passé terminé par <b>-é</b>.</>} ru="Чтобы спрягать эти глаголы в passé composé, мы используем вспомогательный глагол être или avoir в настоящем времени, за которым следует причастие прошедшего времени, оканчивающееся на -é." />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <span style={{ color: '#e56b55' }}>•</span> <InteractiveText fr="Avec l'auxiliaire avoir, le participe passé ne s'accorde pas avec le sujet." displayFr={<>Avec l'auxiliaire <i>avoir</i>, <b>le participe passé ne s'accorde pas avec le sujet</b>.</>} ru="Со вспомогательным глаголом avoir причастие прошедшего времени не согласуется с подлежащим." />
        </div>
        <div style={{ marginBottom: '15px', paddingLeft: '15px' }}>
          <span className="examples-label">Exemple : </span>
          <InteractiveText fr="manger -> j'ai mangé, tu as mangé, elle/il a mangé, nous avons mangé, vous avez mangé, elles/ils ont mangé" displayFr={<><i>manger</i> &rarr; j'ai mangé, tu as mangé, elle/il a mangé,<br/>nous avons mangé, vous avez mangé, elles/ils ont mangé</>} ru="есть -> я поел, ты поел, она/он поел, мы поели, вы поели, они поели" />
        </div>

        <div style={{ marginBottom: '10px' }}>
          <span style={{ color: '#e56b55' }}>•</span> <InteractiveText fr="Avec l'auxiliaire être, le participe passé s'accorde en genre et en nombre avec le sujet." displayFr={<>Avec l'auxiliaire <i>être</i>, <b>le participe passé s'accorde en genre et en nombre avec le sujet</b>.</>} ru="Со вспомогательным глаголом être причастие прошедшего времени согласуется в роде и числе с подлежащим." />
        </div>
        <div style={{ paddingLeft: '15px' }}>
          <span className="examples-label">Exemple : </span>
          <InteractiveText fr="tomber -> je suis tombé(e), tu es tombé(e), elle/il est tombé(e), nous sommes tombé(e)s, vous êtes tombé(e)s, elles/ils sont tombé(e)s" displayFr={<><i>tomber</i> &rarr; je suis tombé<span style={{ color: 'red' }}>(e)</span>, tu es tombé<span style={{ color: 'red' }}>(e)</span>, elle/il est tombé<span style={{ color: 'red' }}>(e)</span>,<br/>nous sommes tombé<span style={{ color: 'red' }}>(e)s</span>, vous êtes tombé<span style={{ color: 'red' }}>(e)s</span>, elles/ils sont tombé<span style={{ color: 'red' }}>(e)s</span></>} ru="падать -> я упал(а), ты упал(а), она/он упал(а), мы упали, вы упали, они упали" />
        </div>
      </div>

      <div style={{ textAlign: 'center', margin: '30px 0 20px 0' }}>
        <div className="section-title" style={{ backgroundColor: '#e56b55' }}>👁️ <InteractiveText fr="Je retiens l'essentiel" ru="Я запоминаю главное" /></div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '0.9em' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#a4c639', color: 'white', padding: '10px', borderRadius: '5px', textAlign: 'center', width: '120px' }}>
            <InteractiveText fr="Passé composé" ru="Passé composé" />
          </div>
          <div>=</div>
          <div style={{ backgroundColor: '#7a528f', color: 'white', padding: '10px', borderRadius: '5px', textAlign: 'center', width: '120px' }}>
            <InteractiveText fr="Auxiliaire être ou avoir" ru="Вспомогательный глагол être или avoir" />
          </div>
          <div>+</div>
          <div style={{ backgroundColor: '#e56b55', color: 'white', padding: '10px', borderRadius: '5px', textAlign: 'center', width: '140px' }}>
            <InteractiveText fr="Participe passé du verbe conjugué" ru="Причастие прошедшего времени спрягаемого глагола" />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
          <div style={{ backgroundColor: '#4a89dc', color: 'white', padding: '10px', borderRadius: '5px', textAlign: 'center', width: '120px' }}>
            <InteractiveText fr="Avec l'auxiliaire avoir" ru="Со вспомогательным глаголом avoir" />
          </div>
          <div style={{ color: '#4a89dc' }}>&rarr;</div>
          <div style={{ border: '1px solid #4a89dc', padding: '10px', borderRadius: '15px', textAlign: 'center', width: '160px' }}>
            <InteractiveText fr="Nous avons rangé notre chambre." displayFr={<>Nous <i>avons rangé</i><br/>notre chambre.</>} ru="Мы убрали нашу комнату." />
          </div>
          <div style={{ color: '#4a89dc' }}>&rarr;</div>
          <div style={{ border: '1px solid #4a89dc', padding: '10px', borderRadius: '15px', textAlign: 'center', width: '180px' }}>
            <InteractiveText fr="Le participe passé ne s'accorde pas avec le sujet." ru="Причастие прошедшего времени не согласуется с подлежащим." />
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'center' }}>
          <div style={{ backgroundColor: '#4a89dc', color: 'white', padding: '10px', borderRadius: '5px', textAlign: 'center', width: '120px' }}>
            <InteractiveText fr="Avec l'auxiliaire être" ru="Со вспомогательным глаголом être" />
          </div>
          <div style={{ color: '#4a89dc' }}>&rarr;</div>
          <div style={{ border: '1px solid #4a89dc', padding: '10px', borderRadius: '15px', textAlign: 'center', width: '160px' }}>
            <InteractiveText fr="Nous sommes resté(e)s au lit." displayFr={<>Nous <i>sommes resté(e)s</i><br/>au lit.</>} ru="Мы остались в постели." />
          </div>
          <div style={{ color: '#4a89dc' }}>&rarr;</div>
          <div style={{ border: '1px solid #4a89dc', padding: '10px', borderRadius: '15px', textAlign: 'center', width: '180px' }}>
            <InteractiveText fr="Le participe passé s'accorde avec le sujet." ru="Причастие прошедшего времени согласуется с подлежащим." />
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: '#fff4cc', border: '1px dashed #f6bb42', borderRadius: '10px', padding: '15px', marginTop: '30px', width: '70%', margin: '30px auto 0 auto' }}>
        <div style={{ fontWeight: 'bold', color: '#e56b55', marginBottom: '10px', textAlign: 'center' }}>
          <InteractiveText fr="Rappelle-toi !" ru="Запомни!" />
        </div>
        <ul style={{ margin: 0, paddingLeft: '20px' }}>
          <li style={{ color: '#e56b55', marginBottom: '5px' }}>
            <span style={{ color: 'black' }}><InteractiveText fr="Passé composé du verbe être : j'ai été." displayFr={<>Passé composé du verbe <i>être</i> : <b>j'ai été</b>.</>} ru="Passé composé глагола être: j'ai été." /></span>
          </li>
          <li style={{ color: '#e56b55' }}>
            <span style={{ color: 'black' }}><InteractiveText fr="Passé composé du verbe avoir : j'ai eu." displayFr={<>Passé composé du verbe <i>avoir</i> : <b>j'ai eu</b>.</>} ru="Passé composé глагола avoir: j'ai eu." /></span>
          </li>
        </ul>
      </div>

    </div>
  );
}
