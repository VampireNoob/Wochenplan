<h1 align="center">Wochenplaner 📆</h1>  
<p align="center">
    A lightweight weekly planner app built with <a href="https://reactjs.org/">React</a>
</p>

![wochenplan](https://github.com/VampireNoob/Wochenplan/assets/128150500/7c2e9290-5c86-4511-8ee4-36158539aae4)


## Here I have created a somewhat complex weekly planner app with React.js, UUID and localStorage.

You can view a live demo of the project here: https://wochen-plan.netlify.app/

## 🙂 Features:

- ✔️ Work with JSON.parse and JSON.stringify,
- ✔️ Work with UUID v4 to assign a number to the notes,
- ✔️ Work with localStorage to save the comments when reloading the page.

## I use POST request here, you can also see how an external alert is used here.
````
const [plans, setPlan] = useState(
    localStorage.plans ? JSON.parse(localStorage.plans) : []);
  const [selectDay, setSelectDay] = useState(false);

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
````

## Built With

In this section you will find the programming languages ​​/ frameworcs / libraries that I used in this project.

* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/c43e4d15-62e4-4254-a673-c4021fd4cf25" width="30">
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/e8f0b5ca-935a-45d1-b5c0-419f02ee83d4" width="30">
* <img src="https://github.com/VampireNoob/Wedding-Wish-List/assets/128150500/d1885e0d-bc56-480b-b104-b181b8c82cbf" width="30">
* <img src="https://github.com/VampireNoob/Wochenplan/assets/128150500/d7f67a61-e656-4ece-8297-2ca0c7a185d5" width="30">
## Contact
