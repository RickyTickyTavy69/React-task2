import React, {useState} from 'react';
import Counter from "./counter";

const CountersList = () => {

    const initialState = [
        {id: 0, value: 0, name: 'Ненужная вещь', price: "200$"},
        {id: 1, value: 4, name: 'Ложка'}, 
        {id: 2, value: 0, name: 'Вилка'},
        {id: 3, value: 0, name: 'Тарелка'},
        {id: 4, value: 0, name: 'Набор минималиста'}
    ];

    const [counters, setCounters] = useState(initialState);

    function deleteTag(id){
        const newCounters = counters.filter((count) => count.id !== id);
        setCounters(newCounters);
    }

    function handleReset () {
        setCounters((prevState) => initialState);
    }

    function handleIncrease (id) {

        const newCounters = counters.map( (counter) => {
            counter.value = counter.id === id ?
            counter.value + 1 :
            counter.value;
            return counter; 
        });

        setCounters((prevState) => newCounters);
        
    }

    function handleDecreament (id) {
        const newCounters = counters.map( (counter) => {
            counter.value = counter.id === id ?
            counter.value - 1:
            counter.value;
            return counter; 
        });

        setCounters((prevState) => newCounters);
    }

    return ( 
    
        <div>
            {counters.map((count) => (
               
                <Counter key={count.id} 
                onDelete={(id) => deleteTag(id)} 
                onIncrease={(id) => handleIncrease(id)} 
                onDecrease={(id) => handleDecreament(id)} 
                {...count}/>
            ))
            }
            <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>Сброс</button>
        </div>

    );
}

export default CountersList;