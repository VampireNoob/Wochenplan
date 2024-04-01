import { useEffect, useState } from 'react';
// mit diesem tool können wir im hintergrund mit "id" arbeiten, müssen es aber mit mit dem befehl "npm i uuid" durch
// den terminal instalieren
import { v4 as uuid } from 'uuid';
import './App.css';
import MyList from './MyList';
import MyWeeklyList from './MyWeeklyList';

function App() {

  const [plans, setPlan] = useState(
// "JSON.parse" formatiert die zeile in ein objekt, dadurch wird es abgebildet, wen nichts eingetragen worden ist,
// dann zeig ein leeres feld, funktioniert nur in verbindung mit "JSON.stringify"
    localStorage.plans ? JSON.parse(localStorage.plans) : []);
  const [selectDay, setSelectDay] = useState(false);

  useEffect(() => {
// "localStorage" wirkt wie eine lokale API, sprich wenn man etwas auf der seite einträgt, dann bleiben die sachen auch
// nach dem neuladen der seite erhalten, "JSON.stringify" ist wichtig für das erhalten der daten, er nimmt das objekt
// JS und formatiert es in eine zeile, funktioniert nur in verbindung mit "JSON.parse"
    localStorage.setItem('plans', JSON.stringify(plans))
  }, [plans])

// diese funktion fügt elemente hinzu und es wird im hintergrund direkt eine "id" hinzugefügt
  const addPlan = () => {
    const newPlan = {
      title: '',
      id: uuid(), // dieses tool ermöglicht es automatisch sachen eien "id" zuzuordnen
      planForADay: '',
      things: ''
    }
// im "setPlan" schließen wir den ausgangs zustand "plans" und veränderten zustand durch "newPlan" aneinander und
// durch den erweiterungs operator "..." gehen keine daten verloren
    setPlan([newPlan, ...plans])
    console.log(newPlan);
  }

// mit dieser funktion löschen wir elemente aus unserem massiv in dem wir die methode "filter" verwenden in der wir
// dem programm sagen, dass wenn die "id" die wir löschen wollen nicht mit im neuen massiv erscheinen soll, so soll
// das programm diese "id" löschen
  const deletePlan = (planId) => {
    setPlan(plans.filter(({id}) => id !== planId))
  }

// mit dieser konstante werden wir unsere angeklickten einträge ändern und abbilden können, in dem wir alles einer "id"
// angleichen, damit das programm auch die richtigen daten anzeigt
  const updateDayPlan = (myUpdatePlan) => {
    const updatedPlan = plans.map((plan) => {
// sprich wenn die "id" des gewählten objekts mit dem abgebildeten übereinstimmt, dann bilde alles ab was drin steht
// und es veränderungen gibt so trage die veränderungen ein und bilde es ab
      if (plan.id === myUpdatePlan.id) {
        return myUpdatePlan;
      }
// wenn auf keines der felder geklickt worden ist so wird auch keine form angezeigt
      return plan;
    })
    setPlan(updatedPlan)
  }

// mit dieser constante gleichen wir das ausgewählte objekt dem abgebildeten an und durch die methode "find" die nur
// auf einzelne objekte zugreift, wird auch nur die information angezeigt die für dieses kästchen zuständig ist, dafür
// ist die "id" zuständig
  const getActivePlan = () => {
    return plans.find(({id}) => id === selectDay)
  }

  return (
    <div className="App">
{/* mit den props "addPlan" und "deletePlan" stellen wir eine verbindung zu den knöpfen "zufügen" und "Löschen"
in der komponente "MyList" und die funktionen selber schreiben wir etwas oberhalb von return durch wie in diesem
beispiel */}
      <MyList 
      plans={ plans } 
      addPlan={ addPlan } 
      deletePlan={ deletePlan } 
      selectDay={ selectDay }
      setSelectDay={ setSelectDay } />
{/* hier verbinden wieder alles durch die "props" miteinander und gleichen es automatisch einer funktion an die wir
oben durchschreiben, "getActivePlan" ist für den ausgewählte tag verantwortlich womit die form angezeigt wird und
"updateDayPlan" ist für die veränderungen im feld zu ständig wenn wir etwas reinschreiben */}
      <MyWeeklyList
      selectDay={ getActivePlan() }
      updateDayPlan={ updateDayPlan } />
    </div>
  );
}

export default App;