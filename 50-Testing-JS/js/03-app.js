const suma = (a,b) => a + b;
const resta = (a,b) => a - b;

const sumaAsync = async (a,b) => Promise.resolve(suma(a,b));

let resultado = suma(1,2);
let esperado = 3;

// expected(esperado).toBe(resultado);

resultado = resta(10,5);
esperado = 4;

// expected(esperado).toBe(resultado);
// expected(esperado).toEqual(resultado);


const test = async (mensaje, callback) => {
    try {
        await callback();
        console.log(`El test: ${mensaje} se ejecutó correctamente`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

test('Suma 10 + 20 = 30', async () => {
    const resultado = await sumaAsync(10,20);
    const esperado = 31;
    expected(esperado).toBe(resultado);
});

function expected(esperado){
    return{
        toBe(resultado){
            if(resultado !== esperado){
                console.error(`El resultado: ${resultado} es diferente a lo esperado`);
            }else{
                console.log('prueba exitosa');
            } 
        },
        toEqual(resultado){
            if(resultado !== esperado){
                console.error(`El resultado: ${resultado} no es igual a lo esperado`);
            }else{
                console.log('prueba exitosa');
            } 
        }
    }
}