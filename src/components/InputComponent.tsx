import React, { useState } from "react";
import '../InputComponent.scss';
import TowerComponent from "./TowerComponent";
import {CupTower} from "../domain/CupTower";

const InputComponent: React.FC =()=>{
  const [volume, setVolume] = useState<string>("");
  const [showTower, setShowTower] = useState<boolean>(false);

  const [waterForTower, setWaterForTower]= useState<number>(0)
  const [cupTower, setCupTower] = useState<CupTower>(new CupTower())
  const handleFill=()=>{
    if(!isNaN(Number(volume))){
      cupTower.fillCupTower(Number(volume)* 1000)
      setShowTower(true)
      console.log()
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
          <input className="input__field" onChange={(e)=>{
            setVolume(e.target.value)
          }} value={volume}type="text" placeholder=" "/>
          <span className="input__label">Enter volume in litres(L)</span>
        </label>
        <div className="button-group">
          <button onClick={()=>handleFill()}>Fill cups</button>
          <button type="reset" onClick={()=>{handleReset()}}>Reset</button>
        </div>
      </div>

      {showTower&& <TowerComponent cupTower={cupTower} />}


      </>
  )
}

export default InputComponent