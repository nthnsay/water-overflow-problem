import '../Tower.css';
import React, {useEffect, useState} from "react";
import {CupTower} from "../domain/CupTower";
import {Cup} from "../domain/Cup";

interface Props {

  cupTower: CupTower
}

const TowerComponent: React.FC<Props> = ({cupTower}: Props) => {

  return (
    <>
      { cupTower.cupTowerList.length>0 &&(<><h2> ith Row:{cupTower.getLastFilledCupCapacity().i}</h2>
      <h2> jth Cup:{cupTower.getLastFilledCupCapacity().j}</h2>
      <h2> jth Cup Capacity:{cupTower.getLastFilledCupCapacity().capacity}</h2></>)}
      <div className={"wrapper"}>
        {
          cupTower.cupTowerList.map(row =>
            <div key={cupTower.cupTowerList.indexOf(row)} className={"row"}>

              {row.map((cup: Cup) =>
                <div key={cup + "a" + row.length} className={"block"}>

                  {cup.isCupFull() &&
                  <img className={"glassImage"} src={require('../glassFull.png').default} alt="Glass full"/>}
                  {(cup.capacity < 250 && cup.capacity > 0) &&
                  <img className={"glassImage"} src={require('../glassPartial.png').default} alt="Glass partial"/>}
                  {cup.capacity === 0 &&
                  <img className={"glassImage"} src={require('../glassEmpty.png').default} alt="Glass empty"/>}
                </div>
              )}
            </div>
          )
        }
      </div>
    </>)
}

export default TowerComponent