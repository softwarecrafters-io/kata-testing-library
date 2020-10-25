import * as stats from "./stats";

export function average(numbers: number[]){
    return Promise.resolve(stats.average(numbers));
}

export function sum(numbers: number[]){
    return Promise.resolve(stats.sum(numbers));
}
