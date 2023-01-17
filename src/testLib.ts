export function expect<T>(expected: T) {
    return {
        toBe(result: T) {
            if (result !== expected)
                throw new Error(`${result} is not equal to ${expected}`);
        }
    }
}

export function describe (context:string, callback:()=>void){
    console.log(context);
    callback();
}

export function test(description:string, callback:()=> void | Promise<void>){
    try{
        isPromise(callback())
            ? evaluatePromise(description, callback as ()=> Promise<void>)
            : evaluate(description, callback);
    }
    catch (error){
        console.log(`❌ ${description} ${error}`);
    }
}

function evaluate(description:string, callback:()=>void){
    callback();
    console.log(`✅ ${description}`);
}

function evaluatePromise(description:string, callback:()=>Promise<void>){
    (callback())
        .then(()=> console.log(`✅ ${description}`))
        .catch(error => console.log(`❌ ${description} ${error}`))
}

function isPromise(promise) {
    return !!promise && typeof promise.then === 'function'
}

export const it = test;
