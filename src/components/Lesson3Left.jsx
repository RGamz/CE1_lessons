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
          💡 Je comprends
        </div>
      </div>

      <div className="theory-block">
        <InteractiveText 
          fr="Une phrase est constituée le plus souvent d'un verbe, de son sujet et d'un complément." 
          displayFr={<>Une phrase est constituée le plus souvent <b>d'un verbe, de son sujet et d'un complément</b>.</>}
          ru="Предложение чаще всего состоит из глагола, его подлежащего и дополнения." 
        />

        <div className="theory-subtitle" style={{ marginTop: '20px' }}>Le verbe</div>
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="Il indique souvent l'action dans la phrase." 
            displayFr={<>Il indique souvent <b>l'action</b> dans la phrase.</>}
            ru="Он часто указывает на действие в предложении." 
          />
          <span className="examples-label">Exemple : </span>
          <InteractiveText fr="Les poissons nagent dans l'océan." displayFr={<>Les poissons <b>nagent</b> dans l'océan.</>} ru="Рыбы плавают в океане." type="inline" />
        </div>

        <div className="theory-subtitle" style={{ marginTop: '20px' }}>Le sujet</div>
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="C'est le mot (ou groupe de mots) qui réalise l'action." 
            displayFr={<>C'est le mot (ou groupe de mots) qui <b>réalise l'action</b>.</>}
            ru="Это слово (или группа слов), которое выполняет действие." 
          />
          <span className="examples-label">Exemple : </span>
          <InteractiveText fr="Les poissons nagent dans l'océan." displayFr={<><b>Les poissons</b> nagent dans l'océan.</>} ru="Рыбы плавают в океане." type="inline" />
        </div>

        <div className="theory-subtitle" style={{ marginTop: '20px' }}>Les compléments</div>
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="• Ils enrichissent la phrase en donnant des renseignements supplémentaires sur le verbe." 
            displayFr={<>• Ils enrichissent la phrase en donnant des <b>renseignements supplémentaires</b> sur le verbe.</>}
            ru="Они обогащают предложение, давая дополнительную информацию о глаголе." 
          />
          <InteractiveText 
            fr="• Pour trouver les compléments, on pose les questions : où ? quand ? comment ? après le verbe." 
            displayFr={<>• Pour trouver les compléments, on pose les questions : <b>où ? quand ? comment ?</b> après le verbe.</>}
            ru="Чтобы найти дополнения, мы задаем вопросы: где? когда? как? после глагола." 
          />
          
          <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <span className="examples-label">Exemple : </span>
            <InteractiveText 
              fr="Ce matin, les poissons nagent lentement dans l'océan." 
              displayFr={<><b>Ce matin</b>, les poissons nagent <b>lentement</b> <b>dans l'océan</b>.</>} 
              ru="Этим утром рыбы плавают медленно в океане." 
              type="inline" 
            />
            <div style={{ display: 'flex', gap: '30px', fontSize: '0.85em', color: '#888', marginTop: '4px' }}>
              <span style={{ marginLeft: '70px' }}>quand ?</span>
              <span style={{ marginLeft: '130px' }}>comment ?</span>
              <span style={{ marginLeft: '20px' }}>où ?</span>
            </div>
          </div>

          <InteractiveText 
            fr="• Les compléments peuvent être déplacés ou supprimés." 
            displayFr={<>• Les compléments peuvent être <b>déplacés</b> ou <b>supprimés</b>.</>}
            ru="Дополнения могут быть перемещены или удалены." 
          />
          <span className="examples-label">Exemple : </span>
          <InteractiveText fr="Dans l'océan, les poissons nagent lentement ce matin. → Les poissons nagent." displayFr={<><b>Dans l'océan</b>, les poissons nagent <b>lentement</b> <b>ce matin</b>. → Les poissons nagent.</>} ru="В океане рыбы плавают медленно этим утром. → Рыбы плавают." type="inline" />
        </div>
      </div>

      {/* Je retiens l'essentiel section */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div className="section-title orange" style={{ background: '#d35400' }}>
          👁️ Je retiens l'essentiel
        </div>
      </div>

      <div style={{ background: '#f5f5f5', padding: '20px', borderRadius: '12px', border: '2px solid #e0e0e0', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ background: '#e91e63', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', width: '150px', textAlign: 'center' }}>Le verbe</div>
          <span style={{ margin: '0 10px', color: '#e91e63' }}>→</span>
          <div style={{ background: 'white', border: '1px solid #ccc', padding: '5px 15px', borderRadius: '20px', flex: 1, textAlign: 'center' }}><InteractiveText fr="indique l'action." ru="указывает на действие." type="inline" /></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ background: '#8bc34a', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', width: '150px', textAlign: 'center' }}>Le sujet</div>
          <span style={{ margin: '0 10px', color: '#8bc34a' }}>→</span>
          <div style={{ background: 'white', border: '1px solid #ccc', padding: '5px 15px', borderRadius: '20px', flex: 1, textAlign: 'center' }}><InteractiveText fr="réalise l'action." ru="выполняет действие." type="inline" /></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ background: '#673ab7', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', width: '150px', textAlign: 'center' }}>Les compléments</div>
          <span style={{ margin: '0 10px', color: '#673ab7' }}>→</span>
          <div style={{ background: 'white', border: '1px solid #ccc', padding: '5px 15px', borderRadius: '20px', flex: 1, textAlign: 'center', fontSize: '0.9em' }}>
            <InteractiveText fr="renseignement sur l'action" ru="информация о действии" type="inline" /><br/>
            (où, quand, comment)
          </div>
        </div>
      </div>

      <div style={{ background: '#fff9c4', padding: '15px', borderRadius: '8px', border: '1px solid #fff59d', textAlign: 'center' }}>
        <div style={{ fontWeight: 'bold', color: '#e65100', marginBottom: '5px' }}>Attention !</div>
        <InteractiveText fr="Certains compléments ne peuvent être ni déplacés, ni supprimés !" ru="Некоторые дополнения не могут быть ни перемещены, ни удалены!" type="inline" />
      </div>

    </div>
  );
}
