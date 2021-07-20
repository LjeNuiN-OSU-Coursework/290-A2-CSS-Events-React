import React, { useState } from 'react';
import { AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'

function Quantity() {
    const {useState} = React;
    const[count,setCount]= useState(0);


    function countDown(){
        if (count>0){
        setCount(count - 1)
        }
    }

    function countUp(){
        if (count<10){
        setCount(count + 1)
    } 
}
    return (
        <>
        
             <AiOutlineMinusCircle onClick={countDown}></AiOutlineMinusCircle>

        <b>{count}</b>

             <AiOutlinePlusCircle onClick={countUp}></AiOutlinePlusCircle>
        

    </>
    );
}

export default Quantity;