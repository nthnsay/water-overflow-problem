import React, { useState } from "react";
import '../InputComponent.scss';
import TowerComponent from "./TowerComponent";
import {CupTower} from "../domain/CupTower";

const InputComponent: React.FC =()=>{
  const [volume, setVolume] = useState<string>("");
  const [showTower, setShowTower] = useState<boolean>(false);

  const [cupTower, setCupTower] = useState<CupTower>(new CupTower())
  const handleFill=()=>{
    if(!isNaN(Number(volume)) && volume !==""){
      let value = Number(volume)
      console.log(value)
      cupTower.fillCupTower(value* 1000)
      setShowTower(true)
      // setVolume("")
    }
  }
  const handleReset=()=>{
    setVolume("")
    setCupTower(new CupTower())
    setShowTower(false)
  }

  return(
    <>
      <div className="card">
        <h2>
          Water overflow problem
        </h2>
        <label className="input">
          <input disabled={showTower?true:false} className="input__field" onChange={(e)=>{
            setVolume(e.target.value)
          }} value={volume}type="text" placeholder=" "/>
          <span className="input__label">{showTower?"Press reset to fill again":"Enter volume in litres(L)"}</span>
        </label>
        <div className="button-group">
          {showTower? <button type="reset"onClick={()=>{handleReset()}}>Reset</button>:
            <button onClick={()=>handleFill()}>Fill cups</button>}
        </div>
      </div>

      {showTower&& <TowerComponent cupTower={cupTower} />}


      </>
  )
}

export default InputComponent