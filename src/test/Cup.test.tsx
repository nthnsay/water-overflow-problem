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

