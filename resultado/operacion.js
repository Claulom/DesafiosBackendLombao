/*Este debe ser un proyecto de typescript que utilice clases, dynamic import Promises, async await, funciones flecha y tipado
en todos sus modulos.

Los calculos habilitados estaran definidos en archivos separados empleando clases donde los argumentos de entrada se
guardaran en propiedades instancia privadas y tendran un metodo resultadoo que hara efectiva la operacion.

Crear 2 funciones llamasdas operacion y operaciones

operacion recibira dos numeros y un string con el nombre de la operacion a efectuar entre ellos: suma o resta
    y cargara dinamicamente un modulo para realizar dicho calculo.

    operacion debera devolver el resultado a operaciones a traves de una promesa.

    operaciones llamara a operacion con los casos de prueba representando sus salidas

    Debe ser compilado para generar un archivo javascript ejecutable por node js. */
class Calculos {
    constructor(num1, num2, operacion) {
        this.num1 = num1;
        this.num2 = num2;
        this.operacion = operacion;
    }
    //tendran un metodo resultadoo que hara efectiva la operacion
    resultado() {
        if (this.operacion === "suma")
            return (this.num1 + this.num2);
        return (this.num1 - this.num2);
    }
}
//operacion debera devolver el resultado a operaciones a traves de una promesa.
export const operar = (num1, num2, operando) => {
    return new Promise((resolve, reject) => {
        if (operando === "suma" || operando === "resta") {
            let operacion;
            operacion = new Calculos(num1, num2, operando);
            resolve(operacion.resultado());
        }
        else {
            reject(`Èrror el tercer parametro puede ser "suma" o "resta" y se coloco ${operando}`);
        }
    });
};
