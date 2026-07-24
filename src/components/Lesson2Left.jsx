import InteractiveText from './InteractiveText';

export default function Lesson2Left() {
  return (
    <div className="page" style={{ borderRight: '1px solid #eee' }}>
      
      {/* Header */}
      <div className="header-banner">
        <div className="header-number">2</div>
        <div className="header-title">Les formes de phrases</div>
      </div>

      {/* Je comprends section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title">
          рџ’Ў Je comprends
        </div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">La forme affirmative ou nГ©gative</div>
        
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="вЂў La forme affirmative indique une action qui a lieu." 
            displayFr={<>вЂў La forme affirmative indique une action qui <b>a lieu</b>.</>}
            ru="РЈС‚РІРµСЂРґРёС‚РµР»СЊРЅР°СЏ С„РѕСЂРјР° СѓРєР°Р·С‹РІР°РµС‚ РЅР° РїСЂРѕРёСЃС…РѕРґСЏС‰РµРµ РґРµР№СЃС‚РІРёРµ." 
          />
          <span className="examples-label">Exemples : </span>
          <InteractiveText fr="Il colorie son dessin." ru="РћРЅ СЂР°СЃРєСЂР°С€РёРІР°РµС‚ СЃРІРѕР№ СЂРёСЃСѓРЅРѕРє." type="inline" />{' '}
          <InteractiveText fr="Il aime colorier." ru="РћРЅ Р»СЋР±РёС‚ СЂР°СЃРєСЂР°С€РёРІР°С‚СЊ." type="inline" />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="вЂў La forme nГ©gative est le contraire de la forme affirmative." 
            displayFr={<>вЂў La forme nГ©gative est le <b>contraire</b> de la forme affirmative.</>}
            ru="РћС‚СЂРёС†Р°С‚РµР»СЊРЅР°СЏ С„РѕСЂРјР° вЂ” СЌС‚Рѕ РїСЂРѕС‚РёРІРѕРїРѕР»РѕР¶РЅРѕСЃС‚СЊ СѓС‚РІРµСЂРґРёС‚РµР»СЊРЅРѕР№." 
          />
          <InteractiveText 
            fr="Elle indique une action qui n'a pas lieu." 
            displayFr={<>Elle indique une action qui <b>n'a pas lieu</b>.</>}
            ru="РћРЅР° СѓРєР°Р·С‹РІР°РµС‚ РЅР° РґРµР№СЃС‚РІРёРµ, РєРѕС‚РѕСЂРѕРµ РЅРµ РїСЂРѕРёСЃС…РѕРґРёС‚." 
          />
          <InteractiveText 
            fr="Le verbe est encadrГ© par ne... pas ou n'... pas." 
            displayFr={<>Le verbe est encadrГ© par <b><span style={{color: '#c44d3a'}}>ne... pas</span></b> ou <b><span style={{color: '#c44d3a'}}>n'... pas</span></b>.</>}
            ru="Р“Р»Р°РіРѕР» РѕРєСЂСѓР¶РµРЅ СЃР»РѕРІР°РјРё ne... pas РёР»Рё n'... pas." 
          />
          <span className="examples-label">Exemples : </span>
          <InteractiveText fr="Il ne colorie pas son dessin." displayFr={<>Il <b><span style={{color: '#c44d3a'}}>ne</span></b> colorie <b><span style={{color: '#c44d3a'}}>pas</span></b> son dessin.</>} ru="РћРЅ РЅРµ СЂР°СЃРєСЂР°С€РёРІР°РµС‚ СЃРІРѕР№ СЂРёСЃСѓРЅРѕРє." type="inline" />{' '}
          <InteractiveText fr="Il n'aime pas colorier." displayFr={<>Il <b><span style={{color: '#c44d3a'}}>n'</span></b>aime <b><span style={{color: '#c44d3a'}}>pas</span></b> colorier.</>} ru="РћРЅ РЅРµ Р»СЋР±РёС‚ СЂР°СЃРєСЂР°С€РёРІР°С‚СЊ." type="inline" />
        </div>

        <div className="theory-subtitle" style={{ marginTop: '25px' }}>La forme exclamative</div>
        
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="вЂў Elle exprime un sentiment : la surprise, la joie, la colГЁre, l'admiration, la peur..." 
            displayFr={<>вЂў Elle exprime un <b>sentiment</b> : la surprise, la joie, la colГЁre, l'admiration, la peur...</>}
            ru="РћРЅР° РІС‹СЂР°Р¶Р°РµС‚ С‡СѓРІСЃС‚РІРѕ: СѓРґРёРІР»РµРЅРёРµ, СЂР°РґРѕСЃС‚СЊ, РіРЅРµРІ, РІРѕСЃС…РёС‰РµРЅРёРµ, СЃС‚СЂР°С…..." 
          />
          <InteractiveText 
            fr="вЂў Une phrase peut ГЄtre Г  la fois affirmative et exclamative, ou nГ©gative et exclamative." 
            displayFr={<>вЂў Une phrase peut ГЄtre Г  la fois <b>affirmative et exclamative</b>, ou <b>nГ©gative et exclamative</b>.</>}
            ru="РџСЂРµРґР»РѕР¶РµРЅРёРµ РјРѕР¶РµС‚ Р±С‹С‚СЊ РѕРґРЅРѕРІСЂРµРјРµРЅРЅРѕ СѓС‚РІРµСЂРґРёС‚РµР»СЊРЅС‹Рј Рё РІРѕСЃРєР»РёС†Р°С‚РµР»СЊРЅС‹Рј, РёР»Рё РѕС‚СЂРёС†Р°С‚РµР»СЊРЅС‹Рј Рё РІРѕСЃРєР»РёС†Р°С‚РµР»СЊРЅС‹Рј." 
          />
          <InteractiveText 
            fr="вЂў Une phrase exclamative se termine toujours par un point d'exclamation." 
            displayFr={<>вЂў Une phrase exclamative se termine toujours par <b>un point d'exclamation</b>.</>}
            ru="Р’РѕСЃРєР»РёС†Р°С‚РµР»СЊРЅРѕРµ РїСЂРµРґР»РѕР¶РµРЅРёРµ РІСЃРµРіРґР° Р·Р°РєР°РЅС‡РёРІР°РµС‚СЃСЏ РІРѕСЃРєР»РёС†Р°С‚РµР»СЊРЅС‹Рј Р·РЅР°РєРѕРј." 
          />
          <span className="examples-label">Exemples : </span>
          <InteractiveText fr="Comme il colorie bien !" ru="РљР°Рє РѕРЅ С…РѕСЂРѕС€Рѕ СЂР°СЃРєСЂР°С€РёРІР°РµС‚!" type="inline" />{' '}
          <InteractiveText fr="Il ne veut surtout pas qu'on l'aide !" ru="РћРЅ СЃРѕРІСЃРµРј РЅРµ С…РѕС‡РµС‚, С‡С‚РѕР±С‹ РµРјСѓ РїРѕРјРѕРіР°Р»Рё!" type="inline" />
        </div>
      </div>

      {/* Je retiens l'essentiel section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title orange" style={{ background: '#d35400' }}>
          рџ‘ЃпёЏ Je retiens l'essentiel
        </div>
      </div>

      <div style={{ background: '#e8f5e9', padding: '20px', borderRadius: '12px', textAlign: 'center', border: '2px solid #c8e6c9', marginBottom: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '15px' }}>
          <div style={{ background: '#4caf50', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold' }}>FORME AFFIRMATIVE</div>
          <div style={{ background: '#e53935', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold' }}>FORME NГ‰GATIVE</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around', fontSize: '0.95em' }}>
          <InteractiveText fr="ClГ©ment veut aller Г  l'Г©cole." ru="РљР»РµРјР°РЅ С…РѕС‡РµС‚ РїРѕР№С‚Рё РІ С€РєРѕР»Сѓ." type="inline" />
          <InteractiveText fr="ClГ©ment ne veut pas aller Г  l'Г©cole." displayFr={<>ClГ©ment <b><span style={{color: '#c44d3a'}}>ne</span></b> veut <b><span style={{color: '#c44d3a'}}>pas</span></b> aller Г  l'Г©cole.</>} ru="РљР»РµРјР°РЅ РЅРµ С…РѕС‡РµС‚ РёРґС‚Рё РІ С€РєРѕР»Сѓ." type="inline" />
        </div>
        
        <div style={{ marginTop: '20px', background: '#1976d2', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', display: 'inline-block' }}>FORME EXCLAMATIVE</div>
        <div style={{ marginTop: '10px' }}>
          <InteractiveText fr="Mon Г©cole est fantastique !" ru="РњРѕСЏ С€РєРѕР»Р° РїСЂРѕСЃС‚Рѕ С„Р°РЅС‚Р°СЃС‚РёРєР°!" type="inline" />
        </div>
      </div>

      <div style={{ background: '#fff9c4', padding: '15px', borderRadius: '8px', border: '1px solid #fff59d', fontSize: '0.9em' }}>
        <InteractiveText fr="La forme affirmative veut dire В« oui В»." ru="РЈС‚РІРµСЂРґРёС‚РµР»СЊРЅР°СЏ С„РѕСЂРјР° РѕР·РЅР°С‡Р°РµС‚ В«РґР°В»." />
        <InteractiveText fr="La forme nГ©gative veut dire В« non В»." ru="РћС‚СЂРёС†Р°С‚РµР»СЊРЅР°СЏ С„РѕСЂРјР° РѕР·РЅР°С‡Р°РµС‚ В«РЅРµС‚В»." />
        <InteractiveText fr="La forme exclamative exprime une Г©motion." ru="Р’РѕСЃРєР»РёС†Р°С‚РµР»СЊРЅР°СЏ С„РѕСЂРјР° РІС‹СЂР°Р¶Р°РµС‚ СЌРјРѕС†РёСЋ." />
      </div>

    </div>
  );
}
