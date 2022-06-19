for(let i = 1; i < 100; i++)
    if(i % 3 == 0 && i % 5 == 0)
        console.log(`FIZZ BUZZ ${i}`);
    else 
        if(i % 3 == 0 && i % 5 != 0)
            console.log(`FIZZ ${i}`);
    else 
        if(i % 3 != 0 && i % 5 == 0)
            console.log(`BUZZ ${i}`);