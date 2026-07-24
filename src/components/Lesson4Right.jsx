import InteractiveText from './InteractiveText';

export default function Lesson4Right() {
  return (
    <div className="page" style={{ paddingLeft: '50px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">
          вњЏпёЏ Je m'entraГ®ne
        </div>
      </div>

      <div className="blue-box">
        <div className="blue-box-title">Pour commencer</div>
        <InteractiveText fr="Dans chacune des phrases, souligne le verbe." ru="Р’ РєР°Р¶РґРѕРј РёР· РїСЂРµРґР»РѕР¶РµРЅРёР№ РїРѕРґС‡РµСЂРєРЅРё РіР»Р°РіРѕР»." type="inline" />
        <div style={{ marginTop: '10px', fontSize: '1.1em' }}>
          <InteractiveText fr="Le petit veau tГЁte sa mГЁre." displayFr={<>Le petit veau <u>tГЁte</u> sa mГЁre.</>} ru="РњР°Р»РµРЅСЊРєРёР№ С‚РµР»РµРЅРѕРє СЃРѕСЃРµС‚ СЃРІРѕСЋ РјР°С‚СЊ." type="inline" />
          <span style={{ color: '#888', margin: '0 10px' }}>в†’</span>
          <InteractiveText fr="Hier, le petit veau tГ©tait sa mГЁre." displayFr={<>Hier, le petit veau <u>tГ©tait</u> sa mГЁre.</>} ru="Р’С‡РµСЂР° РјР°Р»РµРЅСЊРєРёР№ С‚РµР»РµРЅРѕРє СЃРѕСЃР°Р» СЃРІРѕСЋ РјР°С‚СЊ." type="inline" />
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">1</span>
          <span className="ex-stars">*</span>
          <span className="ex-instruction"><InteractiveText fr="RГ©cris les phrases au passГ© en commenГ§ant par Hier. Puis encadre le verbe." displayFr={<><b>RГ©cris</b> les phrases <b>au passГ©</b> en commenГ§ant par <b>Hier</b>. Puis <b>encadre</b> le verbe.</>} ru="РџРµСЂРµРїРёС€Рё РїСЂРµРґР»РѕР¶РµРЅРёСЏ РІ РїСЂРѕС€РµРґС€РµРј РІСЂРµРјРµРЅРё, РЅР°С‡Р°РІ СЃ Hier (Р’С‡РµСЂР°). Р—Р°С‚РµРј РѕР±РІРµРґРё РІ СЂР°РјРєСѓ РіР»Р°РіРѕР»." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Les poules pondent des Е“ufs." ru="РљСѓСЂРёС†С‹ РЅРµСЃСѓС‚ СЏР№С†Р°." type="inline" /></div>
            <div style={{ color: '#c44d3a', fontWeight: 'bold', marginLeft: '20px' }}>Hier, ___________________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="La fermiГЁre porte un panier." ru="Р¤РµСЂРјРµСЂС€Р° РЅРµСЃРµС‚ РєРѕСЂР·РёРЅСѓ." type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>_________________________________________</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">2</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction"><InteractiveText fr="Entoure les verbes. Puis Г©cris leur infinitif." displayFr={<><b>Entoure</b> les verbes. Puis <b>Г©cris</b> leur infinitif.</>} ru="РћР±РІРµРґРё РіР»Р°РіРѕР»С‹. Р—Р°С‚РµРј РЅР°РїРёС€Рё РёС… РёРЅС„РёРЅРёС‚РёРІ." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Le tracteur avance dans le champ." ru="РўСЂР°РєС‚РѕСЂ РїСЂРѕРґРІРёРіР°РµС‚СЃСЏ РїРѕ РїРѕР»СЋ." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>в†’ infinitif : __________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Le fermier ferme l'enclos." ru="Р¤РµСЂРјРµСЂ Р·Р°РєСЂС‹РІР°РµС‚ Р·Р°РіРѕРЅ." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>в†’ infinitif : __________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">c.</span> <InteractiveText fr="Les cochons dorment dans la boue." ru="РЎРІРёРЅСЊРё СЃРїСЏС‚ РІ РіСЂСЏР·Рё." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>в†’ infinitif : __________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">d.</span> <InteractiveText fr="Les chГЁvres mangent des feuilles." ru="РљРѕР·С‹ РµРґСЏС‚ Р»РёСЃС‚СЊСЏ." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>в†’ infinitif : __________________________</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">3</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction"><InteractiveText fr="ComplГЁte les phrases commenГ§ant par C'est... qui afin de trouver le sujet." displayFr={<><b>ComplГЁte</b> les phrases commenГ§ant par <b>C'est... qui</b> afin de trouver le sujet.</>} ru="Р”РѕРїРѕР»РЅРё РїСЂРµРґР»РѕР¶РµРЅРёСЏ, РЅР°С‡РёРЅР°СЋС‰РёРµСЃСЏ СЃ C'est... qui, С‡С‚РѕР±С‹ РЅР°Р№С‚Рё РїРѕРґР»РµР¶Р°С‰РµРµ." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Jules caresse les Гўnes." displayFr={<>Jules <span style={{border: '1px solid #e53935', padding: '2px 4px', borderRadius: '4px'}}>caresse</span> les Гўnes.</>} ru="Р–СЋР»СЊ РіР»Р°РґРёС‚ РѕСЃР»РѕРІ." type="inline" /></div>
            <div style={{ marginLeft: '20px', fontStyle: 'italic' }}>Qui est-ce qui caresse les Гўnes ?</div>
            <div style={{ marginLeft: '20px' }}>C'est ____________________ qui caresse les Гўnes.</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Ce petit agneau tГЁte sa mГЁre." displayFr={<>Ce petit agneau <span style={{border: '1px solid #e53935', padding: '2px 4px', borderRadius: '4px'}}>tГЁte</span> sa mГЁre.</>} ru="Р­С‚РѕС‚ РјР°Р»РµРЅСЊРєРёР№ СЏРіРЅРµРЅРѕРє СЃРѕСЃРµС‚ СЃРІРѕСЋ РјР°С‚СЊ." type="inline" /></div>
            <div style={{ marginLeft: '20px', fontStyle: 'italic' }}>Qui est-ce qui tГЁte sa mГЁre ?</div>
            <div style={{ marginLeft: '20px' }}>C'est ____________________ qui tГЁte sa mГЁre.</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">4</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction"><InteractiveText fr="Souligne les sujets des verbes encadrГ©s." displayFr={<><b>Souligne</b> les sujets des verbes encadrГ©s.</>} ru="РџРѕРґС‡РµСЂРєРЅРё РїРѕРґР»РµР¶Р°С‰РёРµ РѕР±РІРµРґРµРЅРЅС‹С… РіР»Р°РіРѕР»РѕРІ." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li><span className="ex-letter">a.</span> <InteractiveText fr="Nous fabriquons du fromage de chГЁvre." displayFr={<>Nous <span style={{border: '1px solid #888', padding: '2px 4px'}}>fabriquons</span> du fromage de chГЁvre.</>} ru="РњС‹ РґРµР»Р°РµРј РєРѕР·РёР№ СЃС‹СЂ." type="inline" /></li>
          <li><span className="ex-letter">b.</span> <InteractiveText fr="Les dindons mangent des graines." displayFr={<>Les dindons <span style={{border: '1px solid #888', padding: '2px 4px'}}>mangent</span> des graines.</>} ru="РРЅРґСЋРєРё РµРґСЏС‚ СЃРµРјРµРЅР°." type="inline" /></li>
          <li><span className="ex-letter">c.</span> <InteractiveText fr="Ce poussin s'Г©loigne du poulailler." displayFr={<>Ce poussin <span style={{border: '1px solid #888', padding: '2px 4px'}}>s'Г©loigne</span> du poulailler.</>} ru="Р­С‚РѕС‚ С†С‹РїР»РµРЅРѕРє СѓРґР°Р»СЏРµС‚СЃСЏ РѕС‚ РєСѓСЂСЏС‚РЅРёРєР°." type="inline" /></li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">5</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Entoure le verbe et souligne le sujet." displayFr={<><b>Entoure</b> le verbe et <b>souligne</b> le sujet.</>} ru="РћР±РІРµРґРё РіР»Р°РіРѕР» Рё РїРѕРґС‡РµСЂРєРЅРё РїРѕРґР»РµР¶Р°С‰РµРµ." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li><span className="ex-letter">a.</span> <InteractiveText fr="Ma tante travaille dans une ferme." ru="РњРѕСЏ С‚РµС‚СЏ СЂР°Р±РѕС‚Р°РµС‚ РЅР° С„РµСЂРјРµ." type="inline" /></li>
          <li><span className="ex-letter">b.</span> <InteractiveText fr="Elle trait les vaches tous les matins." ru="РћРЅР° РґРѕРёС‚ РєРѕСЂРѕРІ РєР°Р¶РґРѕРµ СѓС‚СЂРѕ." type="inline" /></li>
          <li><span className="ex-letter">c.</span> <InteractiveText fr="Son mГ©tier est difficile !" ru="Р•Рµ РїСЂРѕС„РµСЃСЃРёСЏ С‚СЂСѓРґРЅР°!" type="inline" /></li>
        </ul>
      </div>

      <div className="exercise-item" style={{ borderBottom: 'none' }}>
        <div>
          <span className="ex-number">6</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Entoure le verbe, Г©cris son infinitif et souligne le sujet." displayFr={<><b>Entoure</b> le verbe, <b>Г©cris</b> son infinitif et <b>souligne</b> le sujet.</>} ru="РћР±РІРµРґРё РіР»Р°РіРѕР», РЅР°РїРёС€Рё РµРіРѕ РёРЅС„РёРЅРёС‚РёРІ Рё РїРѕРґС‡РµСЂРєРЅРё РїРѕРґР»РµР¶Р°С‰РµРµ." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Les chevaux gambadent dans le prГ©." ru="Р›РѕС€Р°РґРё СЂРµР·РІСЏС‚СЃСЏ РЅР° Р»СѓРіСѓ." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>в†’ infinitif : __________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Arthur observe les lapins dans leur clapier." ru="РђСЂС‚СѓСЂ РЅР°Р±Р»СЋРґР°РµС‚ Р·Р° РєСЂРѕР»РёРєР°РјРё РІ РёС… РєР»РµС‚РєРµ." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>в†’ infinitif : __________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">c.</span> <InteractiveText fr="Le petit du lapin s'appelle le lapereau." ru="Р”РµС‚РµРЅС‹С€ РєСЂРѕР»РёРєР° РЅР°Р·С‹РІР°РµС‚СЃСЏ РєСЂРѕР»СЊС‡РѕРЅРѕРє." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>в†’ infinitif : __________________________</div>
          </li>
        </ul>
      </div>

    </div>
  );
}
