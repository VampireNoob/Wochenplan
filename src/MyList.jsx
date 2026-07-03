const MyList = ({ plans, addPlan, deletePlan, selectDay, setSelectDay }) => {
    return <div className="head">
        <div className="header">
            <h1>WOCHENPLAN</h1>
            <button className="button-add" onClick={addPlan}>ZUFÜGEN</button>
        </div>
        <div>
            {plans.map(({ id, title, planForADay }) => (
                <div className={`plan ${id === selectDay ? 'selected' : 'default'}`}
                    onClick={ () => setSelectDay(id) } key={ id }>
                    <p>{ title.substring(0, 25) }</p>
                    <p>{ planForADay.substring(0, 25) }</p>
                    <button className="button-delete" onClick={() => deletePlan(id)}>🗑️</button>
                </div>
            ))}
        </div>
    </div>
}

export default MyList;