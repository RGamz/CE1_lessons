import InteractiveText from './InteractiveText';

export default function Lesson3Right() {
  return (
    <div className="page" style={{ paddingLeft: '50px' }}>
      
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <div className="exercise-header">
          вњЏпёЏ Je m'entraГ®ne
        </div>
      </div>

      <div className="blue-box">
        <div className="blue-box-title">Pour commencer</div>
        <InteractiveText fr="Entoure le sujet en vert, le verbe en rouge et le complГ©ment en bleu." ru="РћР±РІРµРґРё РїРѕРґР»РµР¶Р°С‰РµРµ Р·РµР»РµРЅС‹Рј, РіР»Р°РіРѕР» РєСЂР°СЃРЅС‹Рј, Р° РґРѕРїРѕР»РЅРµРЅРёРµ СЃРёРЅРёРј." type="inline" />
        <div style={{ marginTop: '10px', fontSize: '1.1em' }}>
          <InteractiveText fr="Les enfants jouent sur la plage." ru="Р”РµС‚Рё РёРіСЂР°СЋС‚ РЅР° РїР»СЏР¶Рµ." type="inline" />
        </div>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">1</span>
          <span className="ex-stars">*</span>
          <span className="ex-instruction"><InteractiveText fr="Remets les groupes de mots dans l'ordre pour former des phrases." ru="Р Р°СЃСЃС‚Р°РІСЊ РіСЂСѓРїРїС‹ СЃР»РѕРІ РїРѕ РїРѕСЂСЏРґРєСѓ, С‡С‚РѕР±С‹ РїРѕР»СѓС‡РёР»РёСЃСЊ РїСЂРµРґР»РѕР¶РµРЅРёСЏ." type="inline" /></span>
        </div>
        <div style={{ fontSize: '0.9em', color: '#c44d3a', fontWeight: 'bold', marginBottom: '10px' }}>
          <InteractiveText fr="N'oublie pas les majuscules et les points !" ru="РќРµ Р·Р°Р±СѓРґСЊ РїСЂРѕ Р·Р°РіР»Р°РІРЅС‹Рµ Р±СѓРєРІС‹ Рё С‚РѕС‡РєРё!" type="inline" />
        </div>
        <ul className="ex-list">
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Г  la mer вЂ“ allons вЂ“ nous" ru="РЅР° РјРѕСЂРµ - РёРґРµРј - РјС‹" type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>в†’ ___________________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="naviguent вЂ“ les bateaux вЂ“ calmement" ru="РїР»С‹РІСѓС‚ - Р»РѕРґРєРё - СЃРїРѕРєРѕР№РЅРѕ" type="inline" /></div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>в†’ ___________________________________</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">2</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction"><InteractiveText fr="RГ©ponds Г  la question posГ©e pour chacune de ces phrases." ru="РћС‚РІРµС‚СЊ РЅР° Р·Р°РґР°РЅРЅС‹Р№ РІРѕРїСЂРѕСЃ РґР»СЏ РєР°Р¶РґРѕРіРѕ РёР· СЌС‚РёС… РїСЂРµРґР»РѕР¶РµРЅРёР№." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Les moules s'accrochent sur les rochers." ru="РњРёРґРёРё С†РµРїР»СЏСЋС‚СЃСЏ Р·Р° СЃРєР°Р»С‹." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>в†’ OГ№ ? _______________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="La prochaine fois, je prendrai mon Г©puisette." ru="Р’ СЃР»РµРґСѓСЋС‰РёР№ СЂР°Р· СЏ РІРѕР·СЊРјСѓ СЃРІРѕР№ СЃР°С‡РѕРє." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>в†’ Quand ? ____________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">c.</span> <InteractiveText fr="La mer se retire doucement." ru="РњРѕСЂРµ РјРµРґР»РµРЅРЅРѕ РѕС‚СЃС‚СѓРїР°РµС‚." type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>в†’ Comment ? __________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">d.</span> <InteractiveText fr="Parfois, les mouettes crient trГЁs fort !" ru="РРЅРѕРіРґР° С‡Р°Р№РєРё РєСЂРёС‡Р°С‚ РѕС‡РµРЅСЊ РіСЂРѕРјРєРѕ!" type="inline" /></div>
            <div style={{ color: '#888', marginLeft: '20px' }}>в†’ Quand ? Comment ? __________________</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">3</span>
          <span className="ex-stars">**</span>
          <span className="ex-instruction"><InteractiveText fr="Recopie les phrases en suivant les indications." ru="РџРµСЂРµРїРёС€Рё РїСЂРµРґР»РѕР¶РµРЅРёСЏ, СЃР»РµРґСѓСЏ СѓРєР°Р·Р°РЅРёСЏРј." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> <InteractiveText fr="Chaque jour, des bateaux accostent au port." ru="РљР°Р¶РґС‹Р№ РґРµРЅСЊ РєРѕСЂР°Р±Р»Рё С€РІР°СЂС‚СѓСЋС‚СЃСЏ РІ РїРѕСЂС‚Сѓ." type="inline" /></div>
            <div style={{ color: '#1976d2', marginLeft: '20px' }}>в†’ DГ©place les complГ©ments :</div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>______________________________________</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Les Г©toiles de mer se dГ©placent frГ©quemment au fond de l'ocГ©an." ru="РњРѕСЂСЃРєРёРµ Р·РІРµР·РґС‹ С‡Р°СЃС‚Рѕ РїРµСЂРµРґРІРёРіР°СЋС‚СЃСЏ РїРѕ РґРЅСѓ РѕРєРµР°РЅР°." type="inline" /></div>
            <div style={{ color: '#1976d2', marginLeft: '20px' }}>в†’ Supprime les complГ©ments :</div>
            <div style={{ color: '#ccc', marginLeft: '20px' }}>______________________________________</div>
          </li>
        </ul>
      </div>

      <div className="exercise-item">
        <div>
          <span className="ex-number">4</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Choisis parmi les sujets, les verbes et les complГ©ments proposГ©s pour Г©crire une phrase." ru="Р’С‹Р±РµСЂРё РёР· РїСЂРµРґР»РѕР¶РµРЅРЅС‹С… РїРѕРґР»РµР¶Р°С‰РёС…, РіР»Р°РіРѕР»РѕРІ Рё РґРѕРїРѕР»РЅРµРЅРёР№, С‡С‚РѕР±С‹ РЅР°РїРёСЃР°С‚СЊ РїСЂРµРґР»РѕР¶РµРЅРёРµ." type="inline" /></span>
        </div>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px', marginBottom: '15px', fontSize: '0.9em' }}>
          <thead>
            <tr style={{ background: '#e3f2fd' }}>
              <th style={{ border: '1px solid #90caf9', padding: '8px' }}>Sujets</th>
              <th style={{ border: '1px solid #90caf9', padding: '8px' }}>Verbes</th>
              <th style={{ border: '1px solid #90caf9', padding: '8px' }}>ComplГ©ments</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #90caf9', padding: '8px' }}>papy et mamie<br/>le surfeur<br/>mes amis<br/>je</td>
              <td style={{ border: '1px solid #90caf9', padding: '8px' }}>glisse<br/>dessine<br/>chantent<br/>arriveront</td>
              <td style={{ border: '1px solid #90caf9', padding: '8px' }}>sur le sable<br/>sur la vague<br/>demain<br/>joyeusement</td>
            </tr>
          </tbody>
        </table>
        <div style={{ color: '#ccc', marginLeft: '20px' }}>______________________________________</div>
      </div>

      <div className="exercise-item" style={{ borderBottom: 'none' }}>
        <div>
          <span className="ex-number">5</span>
          <span className="ex-stars">***</span>
          <span className="ex-instruction"><InteractiveText fr="Ajoute un complГ©ment pour rГ©pondre Г  la question posГ©e." ru="Р”РѕР±Р°РІСЊ РґРѕРїРѕР»РЅРµРЅРёРµ, С‡С‚РѕР±С‹ РѕС‚РІРµС‚РёС‚СЊ РЅР° Р·Р°РґР°РЅРЅС‹Р№ РІРѕРїСЂРѕСЃ." type="inline" /></span>
        </div>
        <ul className="ex-list" style={{ marginTop: '10px' }}>
          <li style={{ flexDirection: 'column' }}>
            <div><span className="ex-letter">a.</span> ____________________, <InteractiveText fr="nous partirons." ru="РјС‹ СѓРµРґРµРј." type="inline" /></div>
            <div style={{ color: '#c44d3a', marginLeft: '20px', fontSize: '0.85em' }}>quand ?</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">b.</span> <InteractiveText fr="Je ramasse de jolis coquillages" ru="РЇ СЃРѕР±РёСЂР°СЋ РєСЂР°СЃРёРІС‹Рµ СЂР°РєСѓС€РєРё" type="inline" /> ____________________</div>
            <div style={{ color: '#c44d3a', marginLeft: '20px', fontSize: '0.85em' }}>oГ№ ?</div>
          </li>
          <li style={{ flexDirection: 'column', marginTop: '10px' }}>
            <div><span className="ex-letter">c.</span> <InteractiveText fr="Ce petit crabe a peur, il se dГ©place" ru="Р­С‚РѕС‚ РјР°Р»РµРЅСЊРєРёР№ РєСЂР°Р± Р±РѕРёС‚СЃСЏ, РѕРЅ РїРµСЂРµРґРІРёРіР°РµС‚СЃСЏ" type="inline" /> ____________________</div>
            <div style={{ color: '#c44d3a', marginLeft: '20px', fontSize: '0.85em' }}>comment ?</div>
          </li>
        </ul>
      </div>

    </div>
  );
}
