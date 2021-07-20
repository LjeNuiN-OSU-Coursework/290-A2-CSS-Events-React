import React from 'react';
import {useState} from 'react'

function ZipCode(){
    const [zip, setZip] = useState('');
    return (
          <form>
            <fieldset>
              <legend>Enter Your Zipcode</legend>
              <label>
                -- 

                <input type="number" min="00501" max="99999" value={zip}
                  onChange={e => setZip(e.target.value)}/> 
                --
              </label>
            </fieldset>
            <button onClick={e => {
              setZip(e.target.value);
              alert(`Your Zip is ${zip}`);
              e.preventDefault();
            }}>Submit</button>
          </form>
    );
  }

export default ZipCode
