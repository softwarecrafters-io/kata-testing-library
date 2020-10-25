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
        callback();
        console.log(`✅ ${description}`);

        (callback() as Promise<void>)?.then(()=> console.log(`✅ ${description}`))
                .catch(error => console.log(`❌ ${description} ${error}`))
            ?? console.log(`✅ ${description}`);
    }
    catch (error){
        console.log(`❌ ${description} ${error}`);
    }
}

export const it = test;