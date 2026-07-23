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
          💡 Je comprends
        </div>
      </div>

      <div className="theory-block">
        <div className="theory-subtitle">Le verbe</div>
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="• Il change selon le temps de la phrase et selon qui fait l'action. On dit qu'il se conjugue." 
            displayFr={<>• Il change selon <b>le temps</b> de la phrase et selon <b>qui fait l'action</b>. On dit qu'il se <b>conjugue</b>.</>}
            ru="Он меняется в зависимости от времени предложения и от того, кто выполняет действие. Говорят, что он спрягается." 
          />
          <InteractiveText 
            fr="• Pour trouver le verbe, on peut changer le temps ou le sujet." 
            displayFr={<>• Pour trouver le verbe, on peut <b>changer le temps ou le sujet</b>.</>}
            ru="Чтобы найти глагол, можно изменить время или подлежащее." 
          />
          <span className="examples-label">Exemples : </span>
          <div style={{ marginTop: '5px' }}>
            <InteractiveText fr="Rachel regarde les vaches dans le pré." displayFr={<>Rachel <b>regarde</b> les vaches dans le pré.</>} ru="Рейчел смотрит на коров на лугу." />
            <InteractiveText fr="Hier, Rachel regardait les vaches dans le pré." displayFr={<>Hier, Rachel <b>regardait</b> les vaches dans le pré.</>} ru="Вчера Рейчел смотрела на коров на лугу." />
            <InteractiveText fr="Nous regardons les vaches dans le pré." displayFr={<>Nous <b>regardons</b> les vaches dans le pré.</>} ru="Мы смотрим на коров на лугу." />
          </div>
        </div>

        <div className="theory-subtitle" style={{ marginTop: '20px' }}>L'infinitif du verbe</div>
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="• L'infinitif désigne le verbe lorsqu'il n'est pas conjugué." 
            displayFr={<>• L'infinitif désigne le verbe lorsqu'il <b>n'est pas conjugué</b>.</>}
            ru="Инфинитив обозначает глагол, когда он не спрягается." 
          />
          <InteractiveText 
            fr="• Pour trouver l'infinitif, on peut commencer la phrase par « Elle/Il est en train de... »." 
            displayFr={<>• Pour trouver l'infinitif, on peut commencer la phrase par <b>« Elle/Il est en train de... »</b>.</>}
            ru="Чтобы найти инфинитив, можно начать предложение с « Она/Он находится в процессе... »." 
          />
          <span className="examples-label">Exemple : </span>
          <InteractiveText fr="Rachel regarde les vaches dans le pré." ru="Рейчел смотрит на коров на лугу." />
          <InteractiveText fr="→ Elle est en train de regarder. → Infinitif : regarder" displayFr={<>→ <i>Elle est en train de</i> <b>regarder</b>. → <i>Infinitif :</i> <b>regarder</b></>} ru="→ Она в процессе смотрения. → Инфинитив: смотреть." />
        </div>

        <div className="theory-subtitle" style={{ marginTop: '20px' }}>Le sujet du verbe</div>
        <div style={{ marginBottom: '15px' }}>
          <InteractiveText 
            fr="• Pour trouver le sujet, on pose la question « Qui est-ce qui... ? » ou « Qu'est-ce qui... ? » devant le verbe." 
            displayFr={<>• Pour trouver le sujet, on pose la question <b>« Qui est-ce qui... ? »</b> ou <b>« Qu'est-ce qui... ? »</b> devant le verbe.</>}
            ru="Чтобы найти подлежащее, мы задаем вопрос « Кто это, кто... ? » или « Что это, что... ? » перед глаголом." 
          />
          <InteractiveText 
            fr="• Dans la réponse, le sujet est alors encadré par C'est... qui ou Ce sont... qui." 
            displayFr={<>• Dans la réponse, le sujet est alors encadré par <b>C'est... qui</b> ou <b>Ce sont... qui</b>.</>}
            ru="В ответе подлежащее обрамляется 'C'est... qui' (Это... кто) или 'Ce sont... qui'." 
          />
          <span className="examples-label">Exemples : </span>
          <InteractiveText fr="Rachel regarde les vaches dans le pré." ru="Рейчел смотрит на коров на лугу." />
          <InteractiveText fr="→ Qui est-ce qui regarde ? - C'est Rachel qui regarde. → Rachel est le sujet du verbe regarder." displayFr={<>→ <i>Qui est-ce qui</i> regarde ? - <b>C'est</b> Rachel <b>qui</b> regarde. → <b>Rachel</b> est le sujet du verbe <i>regarder</i>.</>} ru="→ Кто смотрит? - Это Рейчел, кто смотрит. → Рейчел - подлежащее глагола смотреть." />
          <div style={{ marginTop: '10px' }}>
            <InteractiveText fr="Les canetons nagent dans la mare." ru="Утята плавают в пруду." />
            <InteractiveText fr="→ Qui est-ce qui nagent ? - Ce sont les canetons qui nagent." displayFr={<>→ <i>Qui est-ce qui</i> nagent ? - <b>Ce sont</b> les canetons <b>qui</b> nagent.</>} ru="→ Кто плавает? - Это утята плавают." />
            <InteractiveText fr="→ Les canetons est le sujet du verbe nager." displayFr={<>→ <b>Les canetons</b> est le sujet du verbe <i>nager</i>.</>} ru="→ Утята - подлежащее глагола плавать." />
          </div>
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
          <div style={{ background: '#e53935', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', width: '220px', textAlign: 'center' }}>Pour trouver le verbe conjugué</div>
          <span style={{ margin: '0 10px', color: '#e53935' }}>→</span>
          <div style={{ background: 'white', border: '1px solid #ccc', padding: '5px 15px', borderRadius: '20px', flex: 1, textAlign: 'center' }}><InteractiveText fr="On change le temps ou on change le sujet." ru="Мы меняем время или мы меняем подлежащее." type="inline" /></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <div style={{ background: '#8bc34a', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', width: '220px', textAlign: 'center' }}>Pour trouver l'infinitif du verbe</div>
          <span style={{ margin: '0 10px', color: '#8bc34a' }}>→</span>
          <div style={{ background: 'white', border: '1px solid #ccc', padding: '5px 15px', borderRadius: '20px', flex: 1, textAlign: 'center' }}><InteractiveText fr="On complète : « Elle/Il est en train de... »" ru="Мы дополняем: « Она/Он находится в процессе... »" type="inline" /></div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ background: '#1976d2', color: 'white', padding: '5px 15px', borderRadius: '4px', fontWeight: 'bold', width: '220px', textAlign: 'center' }}>Pour trouver le sujet</div>
          <span style={{ margin: '0 10px', color: '#1976d2' }}>→</span>
          <div style={{ background: 'white', border: '1px solid #ccc', padding: '5px 15px', borderRadius: '20px', flex: 1, textAlign: 'center', fontSize: '0.9em' }}>
            <InteractiveText fr="On pose la question :" ru="Мы задаем вопрос:" type="inline" /><br/>
            <b>« Qui est-ce qui ? »</b><br/><b>« Qu'est-ce qui ? »</b>
            <hr style={{ margin: '5px 0' }}/>
            <InteractiveText fr="Dans la réponse, le sujet est encadré par C'est... qui ou par Ce sont... qui." ru="В ответе подлежащее обрамляется C'est... qui или Ce sont... qui." type="inline" />
          </div>
        </div>
      </div>

      <div style={{ background: '#fff9c4', padding: '15px', borderRadius: '8px', border: '1px solid #fff59d', textAlign: 'center' }}>
        <InteractiveText fr="Le sujet au singulier est encadré par c'est... qui." displayFr={<>Le sujet <b>au singulier</b> est encadré par <b>c'est... qui</b>.</>} ru="Подлежащее в единственном числе обрамляется c'est... qui." />
        <InteractiveText fr="Le sujet au pluriel est encadré par ce sont... qui." displayFr={<>Le sujet <b>au pluriel</b> est encadré par <b>ce sont... qui</b>.</>} ru="Подлежащее во множественном числе обрамляется ce sont... qui." />
      </div>

    </div>
  );
}
