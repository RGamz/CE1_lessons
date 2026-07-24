import React from 'react';
import InteractiveText from './InteractiveText';

export default function Lesson6Right() {
  return (
    <div className="page" style={{ paddingLeft: '50px' }}>
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header" style={{ backgroundColor: '#e57373', color: 'white', display: 'inline-block', padding: '10px 20px', borderRadius: '25px', fontWeight: 'bold' }}>
          <InteractiveText fr="✏️ Je m'entraîne" ru="✏️ Я тренируюсь" />
        </div>
      </div>

      <div className="exercise-item" style={{ border: '1px solid #bbdefb', borderRadius: '10px', padding: '15px', marginBottom: '20px', backgroundColor: '#f4fafe' }}>
        <div style={{ marginBottom: '10px', fontWeight: 'bold', color: '#1976d2' }}>
          <InteractiveText fr="■ Pour commencer" ru="■ Для начала" />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText fr="Relie comme il convient." ru="Соедини как следует." />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ color: '#1976d2' }}>a. <InteractiveText fr="Le déterminant" ru="Детерминатив" /> •</div>
            <div style={{ color: '#1976d2' }}>b. <InteractiveText fr="Le nom" ru="Существительное" /> •</div>
            <div style={{ color: '#1976d2' }}>c. <InteractiveText fr="L'adjectif" ru="Прилагательное" /> •</div>
          </div>
          <div>
            <div>• 1. <InteractiveText fr="donne un renseignement sur le nom." ru="дает информацию о существительном." /></div>
            <div>• 2. <InteractiveText fr="indique le genre et le nombre." ru="указывает род и число." /></div>
            <div>• 3. <InteractiveText fr="désigne une personne, un animal, une chose..." ru="обозначает человека, животное, вещь..." /></div>
          </div>
        </div>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <span className="ex-number" style={{ backgroundColor: '#e91e63', color: 'white', borderRadius: '50%', width: '25px', height: '25px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>1</span>
          <span className="ex-stars" style={{ color: '#ffca28', marginRight: '10px' }}>*</span>
          <span className="ex-instruction" style={{ fontWeight: 'bold' }}>
            <InteractiveText fr="Entoure les déterminants et souligne les noms." ru="Обведи детерминативы и подчеркни существительные." />
          </span>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <span style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '5px 15px' }}><InteractiveText fr="ce clown" ru="этот клоун" /></span>
          <span style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '5px 15px' }}><InteractiveText fr="ton cirque" ru="твой цирк" /></span>
          <span style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '5px 15px' }}><InteractiveText fr="mon billet" ru="мой билет" /></span>
          <span style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '5px 15px' }}><InteractiveText fr="des spectateurs" ru="зрители" /></span>
          <span style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '5px 15px' }}><InteractiveText fr="le chapiteau" ru="шатер (цирка)" /></span>
          <span style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '5px 15px' }}><InteractiveText fr="cette contorsionniste" ru="эта женщина-змея" /></span>
          <span style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '5px 15px' }}><InteractiveText fr="ces dompteurs" ru="эти укротители" /></span>
          <span style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '5px 15px' }}><InteractiveText fr="l'équilibriste" ru="эквилибрист" /></span>
          <span style={{ border: '1px solid #ccc', borderRadius: '20px', padding: '5px 15px' }}><InteractiveText fr="un jongleur" ru="жонглер" /></span>
        </div>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <span className="ex-number" style={{ backgroundColor: '#e91e63', color: 'white', borderRadius: '50%', width: '25px', height: '25px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>2</span>
          <span className="ex-stars" style={{ color: '#ffca28', marginRight: '10px' }}>**</span>
          <span className="ex-instruction" style={{ fontWeight: 'bold' }}>
            <InteractiveText fr="Entoure les déterminants, souligne les noms et encadre les adjectifs." ru="Обведи детерминативы, подчеркни существительные и возьми в рамку прилагательные." />
          </span>
        </div>
        <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ marginBottom: '10px', color: '#e53935' }}>a. <span style={{ color: 'black' }}><InteractiveText fr="un numéro dangereux" ru="опасный номер" /></span></li>
          <li style={{ marginBottom: '10px', color: '#e53935' }}>b. <span style={{ color: 'black' }}><InteractiveText fr="l'immense piste" ru="огромная арена" /></span></li>
          <li style={{ marginBottom: '10px', color: '#e53935' }}>c. <span style={{ color: 'black' }}><InteractiveText fr="son nez rouge" ru="его красный нос" /></span></li>
        </ul>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <span className="ex-number" style={{ backgroundColor: '#e91e63', color: 'white', borderRadius: '50%', width: '25px', height: '25px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>3</span>
          <span className="ex-stars" style={{ color: '#ffca28', marginRight: '10px' }}>**</span>
          <span className="ex-instruction" style={{ fontWeight: 'bold' }}>
            <InteractiveText fr="Souligne les groupes nominaux." ru="Подчеркни именные группы." />
          </span>
        </div>
        <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ marginBottom: '10px', color: '#e53935' }}>a. <span style={{ color: 'black' }}><InteractiveText fr="Ma grande cousine est une jongleuse professionnelle." ru="Моя старшая двоюродная сестра — профессиональная жонглерша." /></span></li>
          <li style={{ marginBottom: '10px', color: '#e53935' }}>b. <span style={{ color: 'black' }}><InteractiveText fr="Ce fabuleux équilibriste maîtrise son numéro." ru="Этот потрясающий эквилибрист в совершенстве владеет своим номером." /></span></li>
          <li style={{ marginBottom: '10px', color: '#e53935' }}>c. <span style={{ color: 'black' }}><InteractiveText fr="Léo admire l'impressionnant spectacle des jongleurs." ru="Лео восхищается впечатляющим шоу жонглеров." /></span></li>
        </ul>
      </div>

      <div className="exercise-item" style={{ marginBottom: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <span className="ex-number" style={{ backgroundColor: '#e91e63', color: 'white', borderRadius: '50%', width: '25px', height: '25px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>4</span>
          <span className="ex-stars" style={{ color: '#ffca28', marginRight: '10px' }}>***</span>
          <span className="ex-instruction" style={{ fontWeight: 'bold' }}>
            <InteractiveText fr="Souligne les groupes nominaux. Puis écris au-dessous : D pour déterminant, N pour nom, A pour adjectif." displayFr={<>Souligne les groupes nominaux. Puis écris au-dessous : <span style={{ color: '#e91e63' }}>D</span> pour déterminant, <span style={{ color: '#e91e63' }}>N</span> pour nom, <span style={{ color: '#e91e63' }}>A</span> pour adjectif.</>} ru="Подчеркни именные группы. Затем напиши под ними: D для детерминатива, N для существительного, A для прилагательного." />
          </span>
        </div>
        <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ marginBottom: '10px', color: '#e53935' }}>a. <span style={{ color: 'black' }}><InteractiveText fr="Cette jolie trapéziste porte un justaucorps pailleté." ru="Эта красивая гимнастка на трапеции носит расшитое блестками трико." /></span></li>
          <li style={{ marginBottom: '10px', color: '#e53935' }}>b. <span style={{ color: 'black' }}><InteractiveText fr="Les spectateurs applaudissent ces magnifiques artistes." ru="Зрители аплодируют этим великолепным артистам." /></span></li>
          <li style={{ marginBottom: '10px', color: '#e53935' }}>c. <span style={{ color: 'black' }}><InteractiveText fr="Les clowns montent sur une grande plate-forme." ru="Клоуны поднимаются на большую платформу." /></span></li>
        </ul>
      </div>

      <div className="exercise-item">
        <div style={{ marginBottom: '15px' }}>
          <span className="ex-number" style={{ backgroundColor: '#e91e63', color: 'white', borderRadius: '50%', width: '25px', height: '25px', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginRight: '10px' }}>5</span>
          <span className="ex-stars" style={{ color: '#ffca28', marginRight: '10px' }}>***</span>
          <span className="ex-instruction" style={{ fontWeight: 'bold' }}>
            <InteractiveText fr="Complète par un groupe nominal en respectant les indications données." ru="Дополни именной группой, соблюдая данные указания." />
          </span>
        </div>
        <ul className="ex-list" style={{ listStyleType: 'none', paddingLeft: '0' }}>
          <li style={{ marginBottom: '20px', color: '#e53935' }}>a. <span style={{ color: 'black' }}><span style={{ backgroundColor: '#1976d2', color: 'white', padding: '2px 8px', borderRadius: '5px', marginRight: '5px' }}><InteractiveText fr="dét. + nom" ru="дет. + сущ." /></span> .................................... <InteractiveText fr="font le salut final." ru="делают финальный поклон." /></span></li>
          <li style={{ marginBottom: '20px', color: '#e53935' }}>b. <span style={{ color: 'black' }}><span style={{ backgroundColor: '#1976d2', color: 'white', padding: '2px 8px', borderRadius: '5px', marginRight: '5px' }}><InteractiveText fr="dét. + adjectif + nom" ru="дет. + прил. + сущ." /></span> .................................... <InteractiveText fr="réalise une pirouette." ru="выполняет пируэт." /></span></li>
          <li style={{ marginBottom: '20px', color: '#e53935' }}>c. <span style={{ color: 'black' }}><InteractiveText fr="Le rideau se ferme à la fin de" ru="Занавес закрывается в конце" /> <span style={{ backgroundColor: '#1976d2', color: 'white', padding: '2px 8px', borderRadius: '5px', marginLeft: '5px' }}><InteractiveText fr="dét. + nom + adjectif" ru="дет. + сущ. + прил." /></span> ....................................</span></li>
        </ul>
      </div>

    </div>
  );
}
