import React, { useState } from "react";
import '../InputComponent.scss';

const InputComponent =()=>{
  const [volume, setVolume] = useState<string>();

  return(
    <>
      <div className="card">
        <h2>
          Water overflow problem
        </h2>
        <label className="input">
          <input className="input__field" onChange={(e)=>{
            setVolume(e.target.value)
          }} value={volume}type="text" placeholder=" "/>
          <span className="input__label">Enter volume in litres(L)</span>
        </label>
        <div className="button-group">
          <button>Fill cups</button>
          <button type="reset" onClick={()=>{setVolume("")}}>Reset</button>
        </div>
      </div>


      </>
  )
}

export default InputComponent