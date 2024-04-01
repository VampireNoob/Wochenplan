// über die props verbinden wir die notwendigkeiten dieser komponente mit "App.js"
const MyWeeklyList = ({ selectDay, updateDayPlan }) => {

// für die funktion die wir unten bei "onChange" aufgeschrieben haben, schreiben wir hier die logik durch, und zwar
// wenn wir etwas auf unserem angebildetem feld ändern, so wird es auch im angeklicktem block verändert, weil wir
// hier durch "onChange" den zugriff auf unseren input kriegen und verwenden hier den erweiterten operator (...)
// damit die daten die vorher eingegeben worden sind, mitabgebildet werden 
    const editPlan = (myInput, value) => {
        updateDayPlan({
            ...selectDay,
            [myInput]: value
        })
    }

// durch diese zeile sorgen wir dafür, dass wenn die seite geladen hat und keine form angeklickt worden ist, so wird
// auch nichts aufgezeigt bis auf den knopf, den titel und die blöcke wenn vorhanden
    if (!selectDay) return <p></p>

    return <div className="whole-plan">
        <div className="list-editing">
{/* hier schreiben wir durch was wir erreichen wollen, z.B. wenn wir auf ein feld klicken so soll das programm uns
die dazugehörigen informationen anzeigen, damit das funktioniert verbinden wir alles wieder durch die props mit
"App.js" und einigen funktionen wie "editPlan" was wir dem "e.target.value" angleichen damit wir zugriff auf das
eingabefeld kriegen und was wir da eingeben wird im anderen feld abgebildet */}
            <input 
            placeholder="Heute ist..."
            type="text" 
            className="myInput" 
            id='title'
            value={selectDay.title}
            onChange={(e) => editPlan('title', e.target.value)} />

{/* durch die "id" und "value" kriegen einzelnen zugriff auf die felder wo wie etwas ändern wollen in dem wir andere
benennungen durchschreiben z.B. bei input ist es "title" und bei textarea ist es "planForADay" dadurch weiß das
programm welche wo wir was ändern und zu welchem objekt es gehört */}
            <textarea 
            placeholder="Schreib dein termin hier auf..."
            id='planForADay'
            value={selectDay.planForADay}
            onChange={(e) => editPlan('planForADay', e.target.value)} />

{/* hier übergeben wir keine information an unseren ausgangsfeld weil dafür müssen wir in der komponente "MyList.jsx"
noch eine zeile durchschreiben und durch das wort "things" miteinander verbinden, bei "id" muss dann auch "things"
stehen */}
            <textarea 
            placeholder="Genaueres..."
            id='planForADay'
            value={selectDay.things}
            onChange={(e) => editPlan('things', e.target.value)} />
        </div>
    </div>
}

export default MyWeeklyList;