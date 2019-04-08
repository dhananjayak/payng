const NUMBER_OF_MONTHS = 12;
const MONTH_NUMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

export function now(): Date {
    return new Date();
}

export function months(){
    return MONTH_NAMES;
}

export function yearsFromNow(count: number): number[] {
    return years(now().getFullYear(), count)
}

export function years(from: number, count: number): number[] {
    return new Array(count).fill(0).map((v, i) => from + i)
}

function zip(xs, ys){
    if (!xs) return [];
    if (!ys) return [];

    let min = Math.min(xs.length, ys.length);
    let source = xs.length >= ys.length ? xs : ys;

    return source.map((x, i) => [x, ys[i]])
}