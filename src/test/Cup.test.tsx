import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Cup} from '../domain/Cup';


test('cup has been filled and has reached maximum capacity', () => {
        const cup = new Cup()
        cup.fillCup(250)
     
        expect(cup.isCupFull()).toEqual(true)

});

test('cup has ben filled and not reached maximum capacity', () => {
    const cup = new Cup()
    cup.fillCup(20)
    expect(cup.isCupFull()).toEqual(false)

});

test('when cup is filled with a volume of 275 cup left has capacity 125',()=>{
    const cup = new Cup()
    cup.fillCup(275)
    expect(cup.cupLeft?.capacity).toEqual(125)
})

test('when cup is filled with a volume of 625 cup left if filled',()=>{
    const cup = new Cup()
    cup.fillCup(625)
    expect(cup.cupRight?.capacity).toEqual(125)
})