import InteractiveText from './InteractiveText';

export default function Lesson3Left() {
  return (
    <div className="page" style={{ borderRight: '1px solid #eee' }}>
      
      {/* Header */}
      <div className="header-banner">
        <div className="header-number">3</div>
        <div className="header-title">Les constituants de la phrase</div>
      </div>

      {/* Je comprends section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title">
          рџ’Ў Je comprends
        </div>
      </div>

      <div className="theory-block">
        <InteractiveText 
          fr="Une phrase est constituГ©e le plus souvent d'un verbe, de son sujet et d'un complГ©ment." 
          displayFr={<>Une phrase est constituГ©e le plus souvent <b>d'un verbe, de son sujet et d'un complГ©ment</b>.</>}
          ru="РџСЂРµРґР»РѕР¶РµРЅРёРµ С‡Р°С‰Рµ РІСЃРµРіРѕ СЃРѕСЃС‚РѕРёС‚ РёР· РіР»Р°РіРѕР»Р°, РµРіРѕ РїРѕРґР»РµР¶Р°С‰РµРіРѕ Рё РґРѕРїРѕР»РЅРµРЅРёСЏ." 
        />

        <div className="theory-subtitle" style={{ marginTop: '20px' }}>Le verbe</div>
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="Il indique souvent l'action dans la phrase." 
            displayFr={<>Il indique souvent <b>l'action</b> dans la phrase.</>}
            ru="РћРЅ С‡Р°СЃС‚Рѕ СѓРєР°Р·С‹РІР°РµС‚ РЅР° РґРµР№СЃС‚РІРёРµ РІ РїСЂРµРґР»РѕР¶РµРЅРёРё." 
          />
          <span className="examples-label">Exemple : </span>
          <InteractiveText fr="Les poissons nagent dans l'ocГ©an." displayFr={<>Les poissons <b>nagent</b> dans l'ocГ©an.</>} ru="Р С‹Р±С‹ РїР»Р°РІР°СЋС‚ РІ РѕРєРµР°РЅРµ." type="inline" />
        </div>

        <div className="theory-subtitle" style={{ marginTop: '20px' }}>Le sujet</div>
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="C'est le mot (ou groupe de mots) qui rГ©alise l'action." 
            displayFr={<>C'est le mot (ou groupe de mots) qui <b>rГ©alise l'action</b>.</>}
            ru="Р­С‚Рѕ СЃР»РѕРІРѕ (РёР»Рё РіСЂСѓРїРїР° СЃР»РѕРІ), РєРѕС‚РѕСЂРѕРµ РІС‹РїРѕР»РЅСЏРµС‚ РґРµР№СЃС‚РІРёРµ." 
          />
          <span className="examples-label">Exemple : </span>
          <InteractiveText fr="Les poissons nagent dans l'ocГ©an." displayFr={<><b>Les poissons</b> nagent dans l'ocГ©an.</>} ru="Р С‹Р±С‹ РїР»Р°РІР°СЋС‚ РІ РѕРєРµР°РЅРµ." type="inline" />
        </div>

        <div className="theory-subtitle" style={{ marginTop: '20px' }}>Les complГ©ments</div>
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="вЂў Ils enrichissent la phrase en donnant des renseignements supplГ©mentaires sur le verbe." 
            displayFr={<>вЂў Ils enrichissent la phrase en donnant des <b>renseignements supplГ©mentaires</b> sur le verbe.</>}
            ru="РћРЅРё РѕР±РѕРіР°С‰Р°СЋС‚ РїСЂРµРґР»РѕР¶РµРЅРёРµ, РґР°РІР°СЏ РґРѕРїРѕР»РЅРёС‚РµР»СЊРЅСѓСЋ РёРЅС„РѕСЂРјР°С†РёСЋ Рѕ РіР»Р°РіРѕР»Рµ." 
          />
          <InteractiveText 
            fr="вЂў Pour trouver les complГ©ments, on pose les questions : oГ№ ? quand ? comment ? aprГЁs le verbe." 
            displayFr={<>вЂў Pour trouver les complГ©ments, on pose les questions : <b>oГ№ ? quand ? comment ?</b> aprГЁs le verbe.</>}
            ru="Р§С‚РѕР±С‹ РЅР°Р№С‚Рё РґРѕРїРѕР»РЅРµРЅРёСЏ, РјС‹ Р·Р°РґР°РµРј РІРѕРїСЂРѕСЃС‹: РіРґРµ? РєРѕРіРґР°? РєР°Рє? РїРѕСЃР»Рµ РіР»Р°РіРѕР»Р°." 
          />
          
          <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <span className="examples-label">Exemple : </span>
            <InteractiveText 
              fr="Ce matin, les poissons nagent lentement dans l'ocГ©an." 
              displayFr={<><b>Ce matin</b>, les poissons nagent <b>lentement</b> <b>dans l'ocГ©an</b>.</>} 
              ru="Р­С‚РёРј СѓС‚СЂРѕРј СЂС‹Р±С‹ РїР»Р°РІР°СЋС‚ РјРµРґР»РµРЅРЅРѕ РІ РѕРєРµР°РЅРµ." 
              type="inline" 
            />
            <div style={{ display: 'flex', gap: '30px', fontSize: '0.85em', color: '#888', marginTop: '4px' }}>
              <span style={{ marginLeft: '70px' }}>quand ?</span>
              <span style={{ marginLeft: '130px' }}>comment ?</span>
              <span style={{ marginLeft: '20px' }}>oГ№ ?</span>
            </div>
          </div>

          <InteractiveText 
            fr="вЂў Les complГ©ments peuvent ГЄtre dГ©placГ©s ou supprimГ©s." 
            displayFr={<>вЂў Les complГ©ments peuvent ГЄtre <b>dГ©placГ©s</b> ou <b>supprimГ©s</b>.</>}
            ru="Р”РѕРїРѕР»РЅРµРЅРёСЏ РјРѕРіСѓС‚ Р±С‹С‚СЊ РїРµСЂРµРјРµС‰РµРЅС‹ РёР»Рё СѓРґР°Р»РµРЅС‹." 
          />
          <span className="examples-label">Exemple : </span>
          <InteractiveText fr="Dans l'ocГ©an, les poissons nagent lentement ce matin. в†’ Les poissons nagent." displayFr={<><b>Dans l'ocГ©an</b>, les poissons nagent <b>lentement</b> <b>ce matin</b>. в†’ Les poissons nagent.</>} ru="Р’ РѕРєРµР°РЅРµ СЂС‹Р±С‹ РїР»Р°РІР°СЋС‚ РјРµРґР»РµРЅРЅРѕ СЌС‚РёРј СѓС‚СЂРѕРј. в†’ Р С‹Р±С‹ РїР»Р°РІР°СЋС‚." type="inline" />
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
          <div style={{ background: '#e91e63', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', width: '150px', textAlign: 'center' }}>Le verbe</div>
          <span style={{ margin: '0 10px', color: '#e91e63' }}>в†’</span>
          <div style={{ background: 'white', border: '1px solid #ccc', padding: '5px 15px', borderRadius: '20px', flex: 1, textAlign: 'center' }}><InteractiveText fr="indique l'action." ru="СѓРєР°Р·С‹РІР°РµС‚ РЅР° РґРµР№СЃС‚РІРёРµ." type="inline" /></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ background: '#8bc34a', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', width: '150px', textAlign: 'center' }}>Le sujet</div>
          <span style={{ margin: '0 10px', color: '#8bc34a' }}>в†’</span>
          <div style={{ background: 'white', border: '1px solid #ccc', padding: '5px 15px', borderRadius: '20px', flex: 1, textAlign: 'center' }}><InteractiveText fr="rГ©alise l'action." ru="РІС‹РїРѕР»РЅСЏРµС‚ РґРµР№СЃС‚РІРёРµ." type="inline" /></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ background: '#673ab7', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', width: '150px', textAlign: 'center' }}>Les complГ©ments</div>
          <span style={{ margin: '0 10px', color: '#673ab7' }}>в†’</span>
          <div style={{ background: 'white', border: '1px solid #ccc', padding: '5px 15px', borderRadius: '20px', flex: 1, textAlign: 'center', fontSize: '0.9em' }}>
            <InteractiveText fr="renseignement sur l'action" ru="РёРЅС„РѕСЂРјР°С†РёСЏ Рѕ РґРµР№СЃС‚РІРёРё" type="inline" /><br/>
            (oГ№, quand, comment)
          </div>
        </div>
      </div>

      <div style={{ background: '#fff9c4', padding: '15px', borderRadius: '8px', border: '1px solid #fff59d', textAlign: 'center' }}>
        <div style={{ fontWeight: 'bold', color: '#e65100', marginBottom: '5px' }}>Attention !</div>
        <InteractiveText fr="Certains complГ©ments ne peuvent ГЄtre ni dГ©placГ©s, ni supprimГ©s !" ru="РќРµРєРѕС‚РѕСЂС‹Рµ РґРѕРїРѕР»РЅРµРЅРёСЏ РЅРµ РјРѕРіСѓС‚ Р±С‹С‚СЊ РЅРё РїРµСЂРµРјРµС‰РµРЅС‹, РЅРё СѓРґР°Р»РµРЅС‹!" type="inline" />
      </div>

    </div>
  );
}
