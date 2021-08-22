
import { CupTower} from '../domain/CupTower';
test('fill cup tower with 0.250L i=0, j=0 capacity=250', () => {
   const cupTower= new CupTower()
   cupTower.fillCupTower(250)
   expect(cupTower.getLastFilledCupCapacity()).toEqual({i:0, j:0, capacity:250})


});

test('find i when volume is 5250', () => {
    const cupTower= new CupTower() 
    cupTower.originalVolume = 5250

    cupTower.findi()
    expect(cupTower.i).toEqual(6)
         
 });



test('fill cup tower with 3L i=4, j=1', () => {
    const cupTower= new CupTower() 
    cupTower.fillCupTower(3000)

    expect(cupTower.getLastFilledCupCapacity()).toEqual({i:4, j:1, capacity:250})
         
 });

 test('fill cup tower with 4.187L i=5, j=1 capacity=187', () => {
    const cupTower= new CupTower() 
    cupTower.fillCupTower(4187)

    expect(cupTower.getLastFilledCupCapacity()).toEqual({i:5, j:1, capacity:187})
         
 });

