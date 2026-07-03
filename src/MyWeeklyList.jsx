const MyWeeklyList = ({ selectDay, updateDayPlan }) => {
    const editPlan = (myInput, value) => {
        updateDayPlan({
            ...selectDay,
            [myInput]: value
        })
    }

    // Show nothing until a day is selected
    if (!selectDay) return <p></p>

    return <div className="whole-plan">
        <div className="list-editing">
            <input 
            placeholder="Heute ist..."
            type="text" 
            className="myInput" 
            id='title'
            value={selectDay.title}
            onChange={(e) => editPlan('title', e.target.value)} />
            <textarea 
            placeholder="Schreib dein termin hier auf..."
            id='planForADay'
            value={selectDay.planForADay}
            onChange={(e) => editPlan('planForADay', e.target.value)} />
            <textarea 
            placeholder="Genaueres..."
            id='things'
            value={selectDay.things}
            onChange={(e) => editPlan('things', e.target.value)} />
        </div>
    </div>
}

export default MyWeeklyList;