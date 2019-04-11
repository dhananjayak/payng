import { AbstractControl } from '@angular/forms';

export function validCard(ctrl: AbstractControl) {
    const {value: ccno} = ctrl;

    return isValid(ccno) ? null : {validCard:false}
}

export function isValid(ccno: string): boolean {
    const value = 
        split(ccno).reverse()
                   .map(toParse)
                   .map(doubleEven)
                   .map(addTwoDigit)
                   .reduce(sum, 0);

    return (value % 10) === 0;
}


function doubleEven(num: number, index: number): number {
    return (index % 2 !== 0) ? 2*num : num;
}

function addTwoDigit(num): number {
    const q = Math.floor(num / 10);
    const r = num % 10;

    return q + r;
}

function toParse(s: string): number {
    return Number(s)
}

function split(s: string): string[] {
    return s.split('');
}

function sum(a, c): number {
    return a + c;
}

