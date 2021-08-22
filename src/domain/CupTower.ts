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
            let numberOfCups= currentRow
    
            for( let i=0; i<numberOfCups; i++){
                const cup = new Cup()
                currentVolumeOfWater = cup.fillCup(currentVolumeOfWater)
                cupRow.push(cup)
            }
            this.insertIntoCupTowerList(cupRow)
        }
        
    }

    public findi( ){
        let count = 1
        let rowVolume = 0
        this.i=count
        while( this.originalVolume >rowVolume){
            rowVolume = rowVolume +250 * count
            if(rowVolume >= this.originalVolume){
                this.i = count
            }
            count++
        }
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
            if(currentRow[n].capacity >0 ){
                jthCup= n
                jthCapacity = currentRow[n].capacity
            }
        }

        return{i:this.i-1, j: jthCup, capacity:jthCapacity}

    }
}

export {CupTower}

