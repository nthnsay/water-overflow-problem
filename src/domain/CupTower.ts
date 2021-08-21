import { Cup } from "./Cup"

class CupTower{

    cupTowerList: any[] = []
    i: number = 0
    originalVolume = 0      

    public fillCupTower(volume: number){
        let currentVolumeOfWater = volume
        this.originalVolume = volume
        this.findi()
        
        for(let currentRow =0; currentRow<=this.i; currentRow++){
            let cupRow = []
            let numberOfCups= this.getNumberOfCups(currentRow)
    
            for( let i=0; i<numberOfCups; i++){
                const cup = new Cup()
                currentVolumeOfWater = cup.fillCup(currentVolumeOfWater)
                cupRow.push(cup)
            }
            this.insertIntoCupTowerList(cupRow)
        }
        
    }

    public findi( ){
        if(this.originalVolume >=250){
            const value = Math.floor(this.originalVolume/250)
            const i= Math.floor(Math.log2(value))
            this.i = i
        }
    }

    public getNumberOfCups(currentRow: number){
        return Math.pow(2,currentRow)
    }

    public insertIntoCupTowerList(list: Cup[]){
        this.cupTowerList.push(list)
    }

    public getLastFilledCupCapacity(){
        if(this.cupTowerList.length === 1){
            return{i:this.i, j: 0, capacity: this.cupTowerList[0][0].capacity}
        }
        let cupTowerListLastIndex = this.cupTowerList.length - 1
        let currentRow = this.cupTowerList[cupTowerListLastIndex]
        let jthCup = 0
        let jthCapacity= 0
        
        for(let n = 0; n< currentRow.length; n++){
            if(n>0 && currentRow[n].capacity >0 ){
                jthCup= n
                jthCapacity = currentRow[n].capacity
            }
        }

        return{i:this.i, j: jthCup, capacity:jthCapacity}

    }
}

export {CupTower}

