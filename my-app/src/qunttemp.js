import React, { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'

function Quantity() {
    const {useState} = React;
    const[count,setCount]= useState(0);
    let quantityUp;
    let quantityDown;

    function countDown(){
        if (0<count<10){
        setCount(count - 1)
        }else {
            setCount(count + 0)
        }

        }

    function countUp(){
        if (0<count<10){
        setCount(count + 1)
    } else{
        setCount(count - 0)
    }
}
    return (
        <>
        <b id="down">
        {quantityDown
            ? <AiOutlineMinusCircle onClick={countDown}></AiOutlineMinusCircle>
            : <AiOutlineMinusCircle onClick={countDown}></AiOutlineMinusCircle>

        }
        </b>
        <b id="counter">{count}</b>

        <b id="up">
        { quantityUp
            ? <AiOutlinePlusCircle onClick={countUp}></AiOutlinePlusCircle>
            : <AiOutlinePlusCircle onClick={countUp}></AiOutlinePlusCircle>
        }
        </b>
        

    </>
    );
}

export default Quantity;