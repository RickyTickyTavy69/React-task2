import React from "react";


const Counter = (props) => {                                                                 // любой компонент в React является функцией, которая
    const { value } = props;

    function formatValue() {
        return value === 0 ? "empty" : value;
    }

    function getBageClasses() {
        let classes = "badge m-2 ";
        classes += value === 0 ? 'bg-warning' : 'bg-primary';
        return classes;
    }

    return (
        <div>
            <span>{props.name}</span>
            <span className={getBageClasses()}>{formatValue()}</span>
            <button className="btn btn-primary btn-sm m-2" onClick={() => { props.onIncrease(props.id) }}>+</button>
            <button className="btn btn-primary btn-sm m-2" onClick={() => { props.onDecrease(props.id) }}>-</button>
            <button className="btn btn-danger btn-sm m-4" onClick={() => { props.onDelete(props.id) }}>delete</button>
        </div>
    );
}



export default Counter;