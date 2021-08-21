import '../Tower.css';
const TowerComponent=()=>{
  const list=[["1"],["1","2"],["1","2","3","4"]]
  return(
    <div className={"wrapper"}>
      {
        list.map(row=>
          <div key={list.indexOf(row)} className={"row"}>

            {row.map(cup=>
              <div key={cup+"a"+row.length}  className={"block"}>{cup}</div>
            )}
            </div>

        )
      }
  </div>)
}

export default  TowerComponent