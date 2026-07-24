import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson13Right() {
  return (
    <div className="page" style={{ paddingLeft: '20px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">✏️ <InteractiveText fr="Je m'entraîne" ru="Я тренируюсь" /></div>
      </div>

      <div className="exercise-item" style={{ backgroundColor: '#eef6fc', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <div className="theory-subtitle" style={{ color: '#4a90e2', marginBottom: '10px' }}>
          ■ <InteractiveText fr="Pour commencer" ru="Для начала" />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <InteractiveText fr="Relie comme il convient." ru="Соедини как подходит." />
        </div>
        <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ marginBottom: '10px' }}>
            <span style={{ marginRight: '10px', color: '#e24a75' }}>a.</span>
            <InteractiveText 
              fr="s entre deux voyelles, comme dans maison, se prononce..." 
              displayFr={<><b>s</b> entre deux voyelles, comme dans mai<b>s</b>on, se prononce...</>}
              ru="s между двумя гласными, как в maison, произносится..." 
            />
            <span style={{ float: 'right' }}>➔ 👂 <InteractiveText fr="J'entends « z »" ru="Я слышу « z »" /></span>
          </li>
          <li style={{ marginBottom: '10px' }}>
            <span style={{ marginRight: '10px', color: '#e24a75' }}>b.</span>
            <InteractiveText 
              fr="ss entre deux voyelles, comme dans trousse, se prononce..." 
              displayFr={<><b>ss</b> entre deux voyelles, comme dans trou<b>ss</b>e, se prononce...</>}
              ru="ss между двумя гласными, как в trousse, произносится..." 
            />
            <span style={{ float: 'right' }}>➔ 👂 <InteractiveText fr="J'entends « s »" ru="Я слышу « s »" /></span>
          </li>
          <li>
            <span style={{ marginRight: '10px', color: '#e24a75' }}>c.</span>
            <InteractiveText 
              fr="s entre voyelle et consonne, comme dans piscine, se prononce..." 
              displayFr={<><b>s</b> entre voyelle et consonne, comme dans pi<b>s</b>cine, se prononce...</>}
              ru="s между гласной и согласной, как в piscine, произносится..." 
            />
            <span style={{ float: 'right' }}>➔ 👂 <InteractiveText fr="J'entends « s »" ru="Я слышу « s »" /></span>
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">1</span>
          <span className="ex-stars">*</span>
          <span className="ex-instruction">
            <InteractiveText fr="Place les mots dans le tableau." ru="Помести слова в таблицу." />
          </span>
        </div>
        <div style={{ margin: '10px 0 20px 20px', fontStyle: 'italic' }}>
          <InteractiveText 
            fr="une basket – un blouson – une brosse – un costume – une chemisette – une visière" 
            ru="кроссовка – куртка – щетка – костюм – рубашка – козырек" 
          />
        </div>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '10px', width: '30%', backgroundColor: '#f9f9f9' }}>
                <InteractiveText fr="J'entends « s »" ru="Я слышу « s »" />
              </td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                 une basket, une brosse, un costume
              </td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ccc', padding: '10px', backgroundColor: '#f9f9f9' }}>
                <InteractiveText fr="J'entends « z »" ru="Я слышу « z »" />
              </td>
              <td style={{ border: '1px solid #ccc', padding: '10px' }}>
                 un blouson, une chemisette, une visière
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">2</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction">
            <InteractiveText fr="Complète les mots avec s ou ss pour faire le son « s »." ru="Дополни слова буквой s или ss, чтобы получился звук «s»." />
          </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '10px' }}>
          <div style={{ width: '45%' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>a.</span> <InteractiveText fr="un ve...ton" displayFr={<>un ve<b>s</b>ton</>} ru="пиджак" />
          </div>
          <div style={{ width: '45%' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>d.</span> <InteractiveText fr="un ma...que" displayFr={<>un ma<b>s</b>que</>} ru="маска" />
          </div>
          <div style={{ width: '45%' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>b.</span> <InteractiveText fr="une peli...e" displayFr={<>une peli<b>ss</b>e</>} ru="шуба" />
          </div>
          <div style={{ width: '45%' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>e.</span> <InteractiveText fr="un ju...taucorps" displayFr={<>un ju<b>s</b>taucorps</>} ru="купальник / боди" />
          </div>
          <div style={{ width: '45%' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>c.</span> <InteractiveText fr="une bra...ière" displayFr={<>une bra<b>ss</b>ière</>} ru="бюстгальтер" />
          </div>
          <div style={{ width: '45%' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>f.</span> <InteractiveText fr="un ca...que" displayFr={<>un ca<b>s</b>que</>} ru="шлем" />
          </div>
        </div>
      </div>

      <div className="exercise-item" style={{ marginTop: '20px' }}>
        <div>
          <span className="ex-number">3</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction">
            <InteractiveText fr="Complète les mots pour faire le son « s » ou le son « z »." ru="Дополни слова, чтобы получился звук «s» или звук «z»." />
          </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '10px' }}>
          <div style={{ width: '45%' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>a.</span> <InteractiveText fr="des chau...ons" displayFr={<>des chau<b>ss</b>ons</>} ru="тапочки" />
          </div>
          <div style={{ width: '45%' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>d.</span> <InteractiveText fr="une combinai...on" displayFr={<>une combinai<b>s</b>on</>} ru="комбинезон" />
          </div>
          <div style={{ width: '45%' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>b.</span> <InteractiveText fr="un maga...in de sport" displayFr={<>un maga<b>s</b>in de sport</>} ru="спортивный магазин" />
          </div>
          <div style={{ width: '45%' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>e.</span> <InteractiveText fr="des cui...ardes" displayFr={<>des cui<b>ss</b>ardes</>} ru="ботфорты" />
          </div>
          <div style={{ width: '45%' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>c.</span> <InteractiveText fr="un éla...tique" displayFr={<>un éla<b>s</b>tique</>} ru="резинка" />
          </div>
          <div style={{ width: '45%' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>f.</span> <InteractiveText fr="un chemi...ier" displayFr={<>un chemi<b>s</b>ier</>} ru="блузка" />
          </div>
        </div>
      </div>

      <div className="exercise-item" style={{ marginTop: '20px', backgroundColor: '#fcf8e3', padding: '15px', borderRadius: '8px' }}>
        <div>
          <span className="ex-number">4</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction">
            <InteractiveText fr="Complète les mots avec s ou ss." ru="Дополни слова буквой s или ss." />
          </span>
        </div>
        <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '10px' }}>
          <li style={{ marginBottom: '10px' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>a.</span>
            <InteractiveText 
              fr="Ma cou...ine porte des jupes pli...ées et des ...andales pour aller travailler." 
              displayFr={<>Ma cou<b>s</b>ine porte des jupes pli<b>ss</b>ées et des <b>s</b>andales pour aller travailler.</>}
              ru="Моя кузина носит плиссированные юбки и сандалии на работу." 
            />
          </li>
          <li style={{ marginBottom: '10px' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>b.</span>
            <InteractiveText 
              fr="Il met de gro...es chau...ures et un blou...on fourré pour avoir chaud." 
              displayFr={<>Il met de gro<b>ss</b>es chau<b>ss</b>ures et un blou<b>s</b>on fourré pour avoir chaud.</>}
              ru="Он надевает массивные ботинки и утепленную куртку, чтобы было тепло." 
            />
          </li>
          <li>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>c.</span>
            <InteractiveText 
              fr="Dans le ve...tiaire, tu peux mettre tes chau...ettes et tes ba...kets dans un ca...ier." 
              displayFr={<>Dans le ve<b>s</b>tiaire, tu peux mettre tes chau<b>ss</b>ettes et tes ba<b>s</b>kets dans un ca<b>s</b>ier.</>}
              ru="В раздевалке ты можешь положить свои носки и кроссовки в шкафчик." 
            />
          </li>
        </ul>
      </div>

      <div className="exercise-item" style={{ marginTop: '20px' }}>
        <div>
          <span className="ex-number">5</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction">
            <InteractiveText fr="Devinettes ! Complète par un mot qui contient s ou ss." ru="Загадки! Дополни словом, которое содержит s или ss." />
          </span>
        </div>
        <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: '0', marginTop: '10px' }}>
          <li style={{ marginBottom: '10px' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>a.</span>
            <InteractiveText 
              fr="Cet animal a des nageoires et des écailles. C'est un poisson." 
              displayFr={<>Cet animal a des nageoires et des écailles.<br/>C'est un <b>poisson</b>.</>}
              ru="У этого животного есть плавники и чешуя. Это рыба." 
            />
          </li>
          <li style={{ marginBottom: '10px' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>b.</span>
            <InteractiveText 
              fr="Le venin du serpent en est un. C'est du poison." 
              displayFr={<>Le venin du serpent en est un.<br/>C'est du <b>poison</b>.</>}
              ru="Змеиный яд является им. Это яд." 
            />
          </li>
          <li style={{ marginBottom: '10px' }}>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>c.</span>
            <InteractiveText 
              fr="Cet appareil électrique permet de faire le ménage. C'est un aspirateur." 
              displayFr={<>Cet appareil électrique permet de faire le ménage.<br/>C'est un <b>aspirateur</b>.</>}
              ru="Этот электрический прибор позволяет делать уборку. Это пылесос." 
            />
          </li>
          <li>
            <span style={{ color: '#e24a75', marginRight: '5px' }}>d.</span>
            <InteractiveText 
              fr="Ce sont de petits animaux qui possèdent six pattes. Ce sont les insectes." 
              displayFr={<>Ce sont de petits animaux qui possèdent six pattes.<br/>Ce sont les <b>insectes</b>.</>}
              ru="Это маленькие животные, у которых шесть лапок. Это насекомые." 
            />
          </li>
        </ul>
      </div>
    </div>
  );
}
