import { React, useState } from "react"

function Calc(){
    const [value,setvalue]=useState('');

    function appendToDisplay(e){
        setvalue((prevValue)=> prevValue + e.target.value);
    }
    function Calculate(){
        try{
            setvalue(eval(value).toString())
        }catch(error){
            setvalue('Error')
        }
    }
    function Clear(){
        setvalue('');
    }

    return(
        <div id="calc">
            <input id="display" readOnly value={value}/>
            <div id="keys">
            <button onClick={(e) => appendToDisplay(e)} value={'+'} className="operator-btn">+</button>
            <button onClick={(e) => appendToDisplay(e)} value={'7'}>7</button>
            <button onClick={(e) => appendToDisplay(e)} value={'8'}>8</button>
            <button onClick={(e) => appendToDisplay(e)} value={'9'}>9</button>
            <button onClick={(e) => appendToDisplay(e)} value={'-'} className="operator-btn">-</button>
            <button onClick={(e) => appendToDisplay(e)} value={'4'}>4</button>
            <button onClick={(e) => appendToDisplay(e)} value={'5'}>5</button>
            <button onClick={(e) => appendToDisplay(e)} value={'6'}>6</button>
            <button onClick={(e) => appendToDisplay(e)} value={'*'} className="operator-btn">*</button>
            <button onClick={(e) => appendToDisplay(e)} value={'1'}>1</button>
            <button onClick={(e) => appendToDisplay(e)} value={'2'}>2</button>
            <button onClick={(e) => appendToDisplay(e)} value={'3'}>3</button>
            <button onClick={(e) => appendToDisplay(e)} value={'/'} className="operator-btn">/</button>
            <button onClick={(e) => appendToDisplay(e)} value={'0'}>0</button>
            <button onClick={(e) => appendToDisplay(e)} value={'.'} >.</button>
            <button onClick={Calculate} >=</button>
            <button onClick={Clear} className="operator-btn">C</button>
            </div>
        </div>
    )
}
export default Calc