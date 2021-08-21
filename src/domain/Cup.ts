class Cup{

    capacity: number =0
    
    maxCapacity: number = 250

    public isCupFull =()=>{
        return this.capacity === this.maxCapacity
    }

    public fillCup =(volume: number)=>{
        
       
       if(volume <= this.maxCapacity){
           this.capacity += volume
            return 0
       }else{
           this.capacity+= this.maxCapacity
           return volume - 250
       }
      
    
    }

}

export {Cup}