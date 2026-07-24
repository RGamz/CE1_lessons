import InteractiveText from './InteractiveText';

export default function Lesson4Left() {
  return (
    <div className="page" style={{ borderRight: '1px solid #eee' }}>
      
      {/* Header */}
      <div className="header-banner">
        <div className="header-number">4</div>
        <div className="header-title">Le verbe et son sujet</div>
      </div>

      {/* Je comprends section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title">
          рџ’Ў Je comprends
        </div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">Le verbe</div>
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="вЂў Il change selon le temps de la phrase et selon qui fait l'action. On dit qu'il se conjugue." 
            displayFr={<>вЂў Il change selon <b>le temps</b> de la phrase et selon <b>qui fait l'action</b>. On dit qu'il se <b>conjugue</b>.</>}
            ru="РћРЅ РјРµРЅСЏРµС‚СЃСЏ РІ Р·Р°РІРёСЃРёРјРѕСЃС‚Рё РѕС‚ РІСЂРµРјРµРЅРё РїСЂРµРґР»РѕР¶РµРЅРёСЏ Рё РѕС‚ С‚РѕРіРѕ, РєС‚Рѕ РІС‹РїРѕР»РЅСЏРµС‚ РґРµР№СЃС‚РІРёРµ. Р“РѕРІРѕСЂСЏС‚, С‡С‚Рѕ РѕРЅ СЃРїСЂСЏРіР°РµС‚СЃСЏ." 
          />
          <InteractiveText 
            fr="вЂў Pour trouver le verbe, on peut changer le temps ou le sujet." 
            displayFr={<>вЂў Pour trouver le verbe, on peut <b>changer le temps ou le sujet</b>.</>}
            ru="Р§С‚РѕР±С‹ РЅР°Р№С‚Рё РіР»Р°РіРѕР», РјРѕР¶РЅРѕ РёР·РјРµРЅРёС‚СЊ РІСЂРµРјСЏ РёР»Рё РїРѕРґР»РµР¶Р°С‰РµРµ." 
          />
          <span className="examples-label">Exemples : </span>
          <div style={{ marginTop: '5px' }}>
            <InteractiveText fr="Rachel regarde les vaches dans le prГ©." displayFr={<>Rachel <b>regarde</b> les vaches dans le prГ©.</>} ru="Р РµР№С‡РµР» СЃРјРѕС‚СЂРёС‚ РЅР° РєРѕСЂРѕРІ РЅР° Р»СѓРіСѓ." />
            <InteractiveText fr="Hier, Rachel regardait les vaches dans le prГ©." displayFr={<>Hier, Rachel <b>regardait</b> les vaches dans le prГ©.</>} ru="Р’С‡РµСЂР° Р РµР№С‡РµР» СЃРјРѕС‚СЂРµР»Р° РЅР° РєРѕСЂРѕРІ РЅР° Р»СѓРіСѓ." />
            <InteractiveText fr="Nous regardons les vaches dans le prГ©." displayFr={<>Nous <b>regardons</b> les vaches dans le prГ©.</>} ru="РњС‹ СЃРјРѕС‚СЂРёРј РЅР° РєРѕСЂРѕРІ РЅР° Р»СѓРіСѓ." />
          </div>
        </div>

        <div className="theory-subtitle" style={{ marginTop: '20px' }}>L'infinitif du verbe</div>
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="вЂў L'infinitif dГ©signe le verbe lorsqu'il n'est pas conjuguГ©." 
            displayFr={<>вЂў L'infinitif dГ©signe le verbe lorsqu'il <b>n'est pas conjuguГ©</b>.</>}
            ru="РРЅС„РёРЅРёС‚РёРІ РѕР±РѕР·РЅР°С‡Р°РµС‚ РіР»Р°РіРѕР», РєРѕРіРґР° РѕРЅ РЅРµ СЃРїСЂСЏРіР°РµС‚СЃСЏ." 
          />
          <InteractiveText 
            fr="вЂў Pour trouver l'infinitif, on peut commencer la phrase par В« Elle/Il est en train de... В»." 
            displayFr={<>вЂў Pour trouver l'infinitif, on peut commencer la phrase par <b>В« Elle/Il est en train de... В»</b>.</>}
            ru="Р§С‚РѕР±С‹ РЅР°Р№С‚Рё РёРЅС„РёРЅРёС‚РёРІ, РјРѕР¶РЅРѕ РЅР°С‡Р°С‚СЊ РїСЂРµРґР»РѕР¶РµРЅРёРµ СЃ В« РћРЅР°/РћРЅ РЅР°С…РѕРґРёС‚СЃСЏ РІ РїСЂРѕС†РµСЃСЃРµ... В»." 
          />
          <span className="examples-label">Exemple : </span>
          <InteractiveText fr="Rachel regarde les vaches dans le prГ©." ru="Р РµР№С‡РµР» СЃРјРѕС‚СЂРёС‚ РЅР° РєРѕСЂРѕРІ РЅР° Р»СѓРіСѓ." />
          <InteractiveText fr="в†’ Elle est en train de regarder. в†’ Infinitif : regarder" displayFr={<>в†’ <i>Elle est en train de</i> <b>regarder</b>. в†’ <i>Infinitif :</i> <b>regarder</b></>} ru="в†’ РћРЅР° РІ РїСЂРѕС†РµСЃСЃРµ СЃРјРѕС‚СЂРµРЅРёСЏ. в†’ РРЅС„РёРЅРёС‚РёРІ: СЃРјРѕС‚СЂРµС‚СЊ." />
        </div>

        <div className="theory-subtitle" style={{ marginTop: '20px' }}>Le sujet du verbe</div>
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="вЂў Pour trouver le sujet, on pose la question В« Qui est-ce qui... ? В» ou В« Qu'est-ce qui... ? В» devant le verbe." 
            displayFr={<>вЂў Pour trouver le sujet, on pose la question <b>В« Qui est-ce qui... ? В»</b> ou <b>В« Qu'est-ce qui... ? В»</b> devant le verbe.</>}
            ru="Р§С‚РѕР±С‹ РЅР°Р№С‚Рё РїРѕРґР»РµР¶Р°С‰РµРµ, РјС‹ Р·Р°РґР°РµРј РІРѕРїСЂРѕСЃ В« РљС‚Рѕ СЌС‚Рѕ, РєС‚Рѕ... ? В» РёР»Рё В« Р§С‚Рѕ СЌС‚Рѕ, С‡С‚Рѕ... ? В» РїРµСЂРµРґ РіР»Р°РіРѕР»РѕРј." 
          />
          <InteractiveText 
            fr="вЂў Dans la rГ©ponse, le sujet est alors encadrГ© par C'est... qui ou Ce sont... qui." 
            displayFr={<>вЂў Dans la rГ©ponse, le sujet est alors encadrГ© par <b>C'est... qui</b> ou <b>Ce sont... qui</b>.</>}
            ru="Р’ РѕС‚РІРµС‚Рµ РїРѕРґР»РµР¶Р°С‰РµРµ РѕР±СЂР°РјР»СЏРµС‚СЃСЏ 'C'est... qui' (Р­С‚Рѕ... РєС‚Рѕ) РёР»Рё 'Ce sont... qui'." 
          />
          <span className="examples-label">Exemples : </span>
          <InteractiveText fr="Rachel regarde les vaches dans le prГ©." ru="Р РµР№С‡РµР» СЃРјРѕС‚СЂРёС‚ РЅР° РєРѕСЂРѕРІ РЅР° Р»СѓРіСѓ." />
          <InteractiveText fr="в†’ Qui est-ce qui regarde ? - C'est Rachel qui regarde. в†’ Rachel est le sujet du verbe regarder." displayFr={<>в†’ <i>Qui est-ce qui</i> regarde ? - <b>C'est</b> Rachel <b>qui</b> regarde. в†’ <b>Rachel</b> est le sujet du verbe <i>regarder</i>.</>} ru="в†’ РљС‚Рѕ СЃРјРѕС‚СЂРёС‚? - Р­С‚Рѕ Р РµР№С‡РµР», РєС‚Рѕ СЃРјРѕС‚СЂРёС‚. в†’ Р РµР№С‡РµР» - РїРѕРґР»РµР¶Р°С‰РµРµ РіР»Р°РіРѕР»Р° СЃРјРѕС‚СЂРµС‚СЊ." />
          <div style={{ marginTop: '10px' }}>
            <InteractiveText fr="Les canetons nagent dans la mare." ru="РЈС‚СЏС‚Р° РїР»Р°РІР°СЋС‚ РІ РїСЂСѓРґСѓ." />
            <InteractiveText fr="в†’ Qui est-ce qui nagent ? - Ce sont les canetons qui nagent." displayFr={<>в†’ <i>Qui est-ce qui</i> nagent ? - <b>Ce sont</b> les canetons <b>qui</b> nagent.</>} ru="в†’ РљС‚Рѕ РїР»Р°РІР°РµС‚? - Р­С‚Рѕ СѓС‚СЏС‚Р° РїР»Р°РІР°СЋС‚." />
            <InteractiveText fr="в†’ Les canetons est le sujet du verbe nager." displayFr={<>в†’ <b>Les canetons</b> est le sujet du verbe <i>nager</i>.</>} ru="в†’ РЈС‚СЏС‚Р° - РїРѕРґР»РµР¶Р°С‰РµРµ РіР»Р°РіРѕР»Р° РїР»Р°РІР°С‚СЊ." />
          </div>
        </div>
      </div>

      {/* Je retiens l'essentiel section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title orange" style={{ background: '#d35400' }}>
          рџ‘ЃпёЏ Je retiens l'essentiel
        </div>
      </div>

      <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '12px', border: '2px solid #e0e0e0', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ background: '#e53935', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', width: '220px', textAlign: 'center' }}>Pour trouver le verbe conjuguГ©</div>
          <span style={{ margin: '0 10px', color: '#e53935' }}>в†’</span>
          <div style={{ background: 'white', border: '1px solid #ccc', padding: '5px 15px', borderRadius: '20px', flex: 1, textAlign: 'center' }}><InteractiveText fr="On change le temps ou on change le sujet." ru="РњС‹ РјРµРЅСЏРµРј РІСЂРµРјСЏ РёР»Рё РјС‹ РјРµРЅСЏРµРј РїРѕРґР»РµР¶Р°С‰РµРµ." type="inline" /></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ background: '#8bc34a', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', width: '220px', textAlign: 'center' }}>Pour trouver l'infinitif du verbe</div>
          <span style={{ margin: '0 10px', color: '#8bc34a' }}>в†’</span>
          <div style={{ background: 'white', border: '1px solid #ccc', padding: '5px 15px', borderRadius: '20px', flex: 1, textAlign: 'center' }}><InteractiveText fr="On complГЁte : В« Elle/Il est en train de... В»" ru="РњС‹ РґРѕРїРѕР»РЅСЏРµРј: В« РћРЅР°/РћРЅ РЅР°С…РѕРґРёС‚СЃСЏ РІ РїСЂРѕС†РµСЃСЃРµ... В»" type="inline" /></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ background: '#1976d2', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', width: '220px', textAlign: 'center' }}>Pour trouver le sujet</div>
          <span style={{ margin: '0 10px', color: '#1976d2' }}>в†’</span>
          <div style={{ background: 'white', border: '1px solid #ccc', padding: '5px 15px', borderRadius: '20px', flex: 1, textAlign: 'center', fontSize: '0.9em' }}>
            <InteractiveText fr="On pose la question :" ru="РњС‹ Р·Р°РґР°РµРј РІРѕРїСЂРѕСЃ:" type="inline" /><br/>
            <b>В« Qui est-ce qui ? В»</b><br/><b>В« Qu'est-ce qui ? В»</b>
            <hr style={{ margin: '5px 0' }}/>
            <InteractiveText fr="Dans la rГ©ponse, le sujet est encadrГ© par C'est... qui ou par Ce sont... qui." ru="Р’ РѕС‚РІРµС‚Рµ РїРѕРґР»РµР¶Р°С‰РµРµ РѕР±СЂР°РјР»СЏРµС‚СЃСЏ C'est... qui РёР»Рё Ce sont... qui." type="inline" />
          </div>
        </div>
      </div>

      <div style={{ background: '#fff9c4', padding: '15px', borderRadius: '8px', border: '1px solid #fff59d', textAlign: 'center' }}>
        <InteractiveText fr="Le sujet au singulier est encadrГ© par c'est... qui." displayFr={<>Le sujet <b>au singulier</b> est encadrГ© par <b>c'est... qui</b>.</>} ru="РџРѕРґР»РµР¶Р°С‰РµРµ РІ РµРґРёРЅСЃС‚РІРµРЅРЅРѕРј С‡РёСЃР»Рµ РѕР±СЂР°РјР»СЏРµС‚СЃСЏ c'est... qui." />
        <InteractiveText fr="Le sujet au pluriel est encadrГ© par ce sont... qui." displayFr={<>Le sujet <b>au pluriel</b> est encadrГ© par <b>ce sont... qui</b>.</>} ru="РџРѕРґР»РµР¶Р°С‰РµРµ РІРѕ РјРЅРѕР¶РµСЃС‚РІРµРЅРЅРѕРј С‡РёСЃР»Рµ РѕР±СЂР°РјР»СЏРµС‚СЃСЏ ce sont... qui." />
      </div>

    </div>
  );
}
