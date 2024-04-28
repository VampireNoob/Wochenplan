// über die props verbinden wir die notwendigkeiten dieser komponente mit "App.js"
const MyList = ({ plans, addPlan, deletePlan, selectDay, setSelectDay }) => {
    return <div className="head">
        <div className="header">
            <h1>WOCHENPLAN</h1>
            <button className="button-add" onClick={addPlan}>ZUFÜGEN</button>
        </div>
        <div>
{/* durch diese schreibweise kriegen wir zugriff auf die objekte die wir verändern wollen */}
            {plans.map(({ id, title, planForADay }) => (
// in diesem div schreiben wir einen "ternary operator" der durch das draufklicken auf das feld die farbe wechselt
// dadurch wissen wir im welchem feld wir was verändern, wenn nicht draufgeklickt wird so hat es eine andere farbe
// dafür benutzen wir die klassen "selected" und "default" die wir dann in "App.css" die logik der abbildung
// durchschreiben und wir benutzen hier auch den veränderten zustand "setSelectDay" um den zustand des kästchens 
// zu verändern beim knopfdruck und gleichen es der "id" an damit das programm weiß im welchen kästchen was geändert
// werden soll, bei dem unterem div habe ich einen "key={id}" eingetragen um keinen fehler zu verursachen, es ist
// wichtig immer einen schlüßel dazuzuschreiben bei verwendung der methode "map"
                <div className={`plan ${id === selectDay ? 'selected' : 'default'}`}
                    onClick={ () => setSelectDay(id) } key={ id }>
                    <p>{ title.substring(0, 25) }</p>
{/* mit "substring(0, 20)" begrenzen wir die buchstabenanzahl bis auf 20 stück, somit verhindern wir, dass das
abgebildete feld bis ins unendliche wächst */}
                    <p>{ planForADay.substring(0, 25) }</p>
{/* die funktion "deletePlan" wird oben durch ein prop verbunden und hier als funktion aufgeschrieben die wir in
"App.js" durchgeschrieben haben */}
                    <button className="button-delete" onClick={() => deletePlan(id)}>🗑️</button>
                </div>
            ))}
        </div>
    </div>
}

export default MyList;
