import InteractiveText from './InteractiveText';

export default function Lesson2Right() {
  return (
    <div className="page" style={{ paddingLeft: '50px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">
          вњЏпёЏ Je m'entraГ®ne
        </div>
      </div>

      <div className="blue-box">
        <div className="blue-box-title">Pour commencer</div>
        <InteractiveText fr="Relie comme il convient." ru="РЎРѕРµРґРёРЅРё, РєР°Рє РїРѕРґС…РѕРґРёС‚." type="inline" />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
          <div>
            <div style={{ color: '#1976d2', marginBottom: '5px' }}>a. Forme affirmative</div>
            <div style={{ color: '#1976d2', marginBottom: '5px' }}>b. Forme nГ©gative</div>
            <div style={{ color: '#1976d2' }}>c. Forme exclamative</div>
          </div>
          <div>
            <div style={{ marginBottom: '5px' }}><span style={{ color: '#1976d2' }}>вЂў 1.</span> <InteractiveText fr="Elle veut dire В« non В»." ru="РћРЅР° РѕР·РЅР°С‡Р°РµС‚ В«РЅРµС‚В»." type="inline" /></div>
            <div style={{ marginBottom: '5px' }}><span style={{ color: '#1976d2' }}>вЂў 2.</span> <InteractiveText fr="Elle exprime une Г©motion." ru="РћРЅР° РІС‹СЂР°Р¶Р°РµС‚ СЌРјРѕС†РёСЋ." type="inline" /></div>
            <div><span style={{ color: '#1976d2' }}>вЂў 3.</span> <InteractiveText fr="Elle veut dire В« oui В»." ru="РћРЅР° РѕР·РЅР°С‡Р°РµС‚ В«РґР°В»." type="inline" /></div>
          </div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">1</span>
          <span className="ex-stars">*</span>
          <span className="ex-instruction"><InteractiveText fr="Relie chaque phrase Г  la forme qui convient." ru="РЎРѕРµРґРёРЅРё РєР°Р¶РґРѕРµ РїСЂРµРґР»РѕР¶РµРЅРёРµ СЃ РїРѕРґС…РѕРґСЏС‰РµР№ С„РѕСЂРјРѕР№." type="inline" /></span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '15px' }}>
          <ul className="ex-list" style={{ flex: 1 }}>
            <li><span className="ex-letter">a.</span> <InteractiveText fr="Ils ne vont pas Г  l'Г©cole." ru="РћРЅРё РЅРµ РёРґСѓС‚ РІ С€РєРѕР»Сѓ." type="inline" /></li>
            <li><span className="ex-letter">b.</span> <InteractiveText fr="Tu te ranges devant la classe." ru="РўС‹ СЃС‚СЂРѕРёС€СЊСЃСЏ РїРµСЂРµРґ РєР»Р°СЃСЃРѕРј." type="inline" /></li>
            <li><span className="ex-letter">c.</span> <InteractiveText fr="Je n'ai pas de stylo." ru="РЈ РјРµРЅСЏ РЅРµС‚ СЂСѓС‡РєРё." type="inline" /></li>
            <li><span className="ex-letter">d.</span> <InteractiveText fr="Elle Г©crit avec soin." ru="РћРЅР° РїРёС€РµС‚ Р°РєРєСѓСЂР°С‚РЅРѕ." type="inline" /></li>
          </ul>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', fontWeight: 'bold' }}>
            <div>вЂў Affirmative</div>
            <div>вЂў NГ©gative</div>
          </div>
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">2</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction"><InteractiveText fr="Entoure les phrases Г  la forme exclamative." ru="РћР±РІРµРґРё РїСЂРµРґР»РѕР¶РµРЅРёСЏ РІ РІРѕСЃРєР»РёС†Р°С‚РµР»СЊРЅРѕР№ С„РѕСЂРјРµ." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li><span className="ex-letter">a.</span> <InteractiveText fr="Comme ton texte est drГґle !" ru="РљР°РєРѕР№ Сѓ С‚РµР±СЏ СЃРјРµС€РЅРѕР№ С‚РµРєСЃС‚!" type="inline" /></li>
          <li><span className="ex-letter">b.</span> <InteractiveText fr="Ne cours pas dans les couloirs." ru="РќРµ Р±РµРіР°Р№ РїРѕ РєРѕСЂРёРґРѕСЂР°Рј." type="inline" /></li>
          <li><span className="ex-letter">c.</span> <InteractiveText fr="ArrГЄte !" ru="РџСЂРµРєСЂР°С‚Рё!" type="inline" /></li>
          <li><span className="ex-letter">d.</span> <InteractiveText fr="Tu ne vas pas dans la cour ?" ru="РўС‹ РЅРµ РїРѕР№РґРµС€СЊ РІРѕ РґРІРѕСЂ?" type="inline" /></li>
          <li><span className="ex-letter">e.</span> <InteractiveText fr="J'ai trop de travail !" ru="РЈ РјРµРЅСЏ СЃР»РёС€РєРѕРј РјРЅРѕРіРѕ СЂР°Р±РѕС‚С‹!" type="inline" /></li>
          <li><span className="ex-letter">f.</span> <InteractiveText fr="Que j'aimerais ГЄtre en rГ©crГ©ation !" ru="РљР°Рє Р±С‹ СЏ С…РѕС‚РµР» Р±С‹С‚СЊ РЅР° РїРµСЂРµРјРµРЅРµ!" type="inline" /></li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">3</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Transforme les phrases en les mettant Г  la forme nГ©gative." displayFr={<><b>Transforme</b> les phrases en les mettant <b>Г  la forme nГ©gative</b>.</>} ru="РџРµСЂРµРґРµР»Р°Р№ РїСЂРµРґР»РѕР¶РµРЅРёСЏ, РїРѕСЃС‚Р°РІРёРІ РёС… РІ РѕС‚СЂРёС†Р°С‚РµР»СЊРЅСѓСЋ С„РѕСЂРјСѓ." type="inline" /></span>
        </div>
        <div style={{ fontSize: '0.9em', color: '#c44d3a', fontWeight: 'bold', marginBottom: '10px' }}>
          <InteractiveText fr="N'oublie pas les deux petits mots de la nГ©gation : ne... pas ou n'... pas." displayFr={<>N'oublie pas les deux petits mots de la nГ©gation : <b>ne... pas</b> ou <b>n'... pas</b>.</>} ru="РќРµ Р·Р°Р±СѓРґСЊ РїСЂРѕ РґРІР° РјР°Р»РµРЅСЊРєРёС… СЃР»РѕРІР° РѕС‚СЂРёС†Р°РЅРёСЏ: ne... pas РёР»Рё n'... pas." type="inline" />
        </div>
        <ul className="ex-list">
          <li><span className="ex-letter">a.</span> <InteractiveText fr="Le maГ®tre lit un conte aux Г©lГЁves." ru="РЈС‡РёС‚РµР»СЊ С‡РёС‚Р°РµС‚ СЃРєР°Р·РєСѓ СѓС‡РµРЅРёРєР°Рј." type="inline" /></li>
          <li><span className="ex-letter">b.</span> <InteractiveText fr="Cette histoire nous fait peur." ru="Р­С‚Р° РёСЃС‚РѕСЂРёСЏ РЅР°СЃ РїСѓРіР°РµС‚." type="inline" /></li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">4</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Entoure les mots de la nГ©gation. Puis transforme les phrases en les mettant Г  la forme affirmative." displayFr={<>Entoure les mots de la nГ©gation. Puis <b>transforme</b> les phrases en les mettant <b>Г  la forme affirmative</b>.</>} ru="РћР±РІРµРґРё СЃР»РѕРІР° РѕС‚СЂРёС†Р°РЅРёСЏ. Р—Р°С‚РµРј РїРµСЂРµРґРµР»Р°Р№ РїСЂРµРґР»РѕР¶РµРЅРёСЏ РІ СѓС‚РІРµСЂРґРёС‚РµР»СЊРЅСѓСЋ С„РѕСЂРјСѓ." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Noah n'est pas mon camarade." ru="РќРѕР№ РЅРµ РјРѕР№ С‚РѕРІР°СЂРёС‰." type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>в†’ ___________________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Je ne suis pas dans la mГЄme classe que lui." ru="РЇ РЅРµ РІ С‚РѕРј Р¶Рµ РєР»Р°СЃСЃРµ, С‡С‚Рѕ Рё РѕРЅ." type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>в†’ ___________________________________</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item" style={{ borderBottom: 'none' }}>
        <div>
          <span className="ex-number">5</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Mets les phrases Г  la forme exclamative en commenГ§ant par Comme ou Que." displayFr={<><b>Mets</b> les phrases <b>Г  la forme exclamative</b> en commenГ§ant par <b><span style={{color: '#c44d3a'}}>Comme</span></b> ou <b><span style={{color: '#c44d3a'}}>Que</span></b>.</>} ru="РџРѕСЃС‚Р°РІСЊ С„СЂР°Р·С‹ РІ РІРѕСЃРєР»РёС†Р°С‚РµР»СЊРЅСѓСЋ С„РѕСЂРјСѓ, РЅР°С‡Р°РІ СЃ Comme РёР»Рё Que." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Son illustration est belle." ru="Р•РіРѕ РёР»Р»СЋСЃС‚СЂР°С†РёСЏ РєСЂР°СЃРёРІР°СЏ." type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>______________________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Cette histoire est triste." ru="Р­С‚Р° РёСЃС‚РѕСЂРёСЏ РіСЂСѓСЃС‚РЅР°СЏ." type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>______________________________________</div>
          </li>
        </ul>
      </div>

    </div>
  );
}
