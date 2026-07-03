import { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import MyList from './MyList';
import MyWeeklyList from './MyWeeklyList';

function App() {
  const [plans, setPlan] = useState(
    localStorage.plans ? JSON.parse(localStorage.plans) : []);
  const [selectDay, setSelectDay] = useState(false);

  // Persist plans to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('plans', JSON.stringify(plans))
  }, [plans])

  const addPlan = () => {
    const newPlan = {
      title: '',
      id: uuid(),
      planForADay: '',
      things: ''
    }
    setPlan([newPlan, ...plans])
  }

  const deletePlan = (planId) => {
    setPlan(plans.filter(({id}) => id !== planId))
  }

  // Replace the matching plan with its updated version
  const updateDayPlan = (myUpdatePlan) => {
    const updatedPlan = plans.map((plan) => {
      if (plan.id === myUpdatePlan.id) {
        return myUpdatePlan;
      }
      return plan;
    })
    setPlan(updatedPlan)
  }

  const getActivePlan = () => {
    return plans.find(({id}) => id === selectDay)
  }

  return (
    <div className="App">
      <MyList 
      plans={ plans } 
      addPlan={ addPlan } 
      deletePlan={ deletePlan } 
      selectDay={ selectDay }
      setSelectDay={ setSelectDay } />
      <MyWeeklyList
      selectDay={ getActivePlan() }
      updateDayPlan={ updateDayPlan } />
    </div>
  );
}

export default App;