class Cup{

    capacity: number =0
    
    maxCapacity: number = 250
    
    cupLeft: Cup | undefined
    cupRight: Cup| undefined

    public isCupFull =()=>{
        return this.capacity === this.maxCapacity
    }

    public fillCup =(volume: number)=>{
        this.capacity += volume
    }

}

export {Cup}