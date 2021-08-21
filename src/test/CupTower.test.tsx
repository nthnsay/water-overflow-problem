
import { CupTower} from '../domain/CupTower';
test('fill cup tower with 0.250L i=0, j=0', () => {
   const cupTower= new CupTower()
   cupTower.fillCupTower(250)
   expect(cupTower.getLastFilledCupCapacity()).toEqual({i:0, j:0, capacity:250})


});

test('fill cup tower with 3L i=0, j=0', () => {
    const cupTower= new CupTower() 
    cupTower.originalVolume = 3100

    cupTower.findi()
    expect(cupTower.i).toEqual(3)
         
 });

 test('fill cup tower with 3L i=0, j=0', () => {
    const cupTower= new CupTower() 

    expect(cupTower.getNumberOfCups(0)).toEqual(1)
         
 });

test('fill cup tower with 3L i=0, j=0', () => {
    const cupTower= new CupTower() 
    cupTower.fillCupTower(3000)

    expect(cupTower.getLastFilledCupCapacity()).toEqual({i:3, j:4, capacity:250})
         
 });

 test('fill cup tower with 3L i=0, j=0', () => {
    const cupTower= new CupTower() 
    cupTower.fillCupTower(3100)

    expect(cupTower.getLastFilledCupCapacity()).toEqual({i:3, j:5, capacity:100})
         
 });

// //  test('fill cup tower with 3L i=0, j=0', () => {
// //     const cupTower= new CupTower() 
// //     cupTower.fillCupTower(3)
// //     expect(cupTower.getLastFilledCupCapacity()).toEqual({i:4, j:0, capacity:250})
         
// //  });

// //  test('if volume is 4000 i=4',()=>{
// //      const cupTower = new CupTower()
// //     cupTower.i = 4000
// //      expect(cupTower.findi()).toEqual(4)
// //  })

