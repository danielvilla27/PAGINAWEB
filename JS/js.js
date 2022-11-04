/* var nombre;
var apellido;
var num1;
var num2;
var resto;
var resto2;
var div;



num1=parseInt(prompt("Ingrese numero 1"));
num2=parseInt(prompt("Ingrese numero 2"));


document.write(`Los Datos ingresados son:  ${num1} y ${num2}<br>` );



resto=(num1 % num2);
resto2=(num1 % 5);
div=(num1 / num2);
suma=(num1 + num2);




document.write(`Muestra el resto (modulo) de dos números es:  ${resto} <br>` );
document.write(`Muestra el resto (modulo) del primer numero dividido entre 5 es:  ${resto2} <br>` );
document.write(`Muestra el resultado de dividir los dos números es: ${div} <br>` );
document.write(`Muestra la suma de dos números es: ${suma} <br>` );
 */


/* var nombre;
var edad;



edad=parseInt(prompt("Ingrese su la edad"));


if (edad>18) 
{

    document.write(`Su edad es: ${edad} por lo tanto es apto para conducir <br>` );
    
}

else 
{

    document.write(`Su edad es: ${edad} por lo tanto NO es apto para conducir <br>` );
}

 */

/* var nombre;
var nota;



nota=parseInt(prompt("Ingrese la nota"));


if (nota<=3) 
{

    document.write(`Muy deficiente ${nota} <br>` );
    
}


else if (nota<=5) 
{

    document.write(`Insuficiente ${nota} <br>` );

}

else if (nota<=6) 
{

    document.write(`suficiente ${nota} <br>` );

}
else if (nota<=7) 
{

    document.write(`Bien ${nota} <br>` );

}
else if (nota<=9) 
{

    document.write(`Notable ${nota} <br>` );

}
else if (nota>=10) 
{

    document.write(`Sobresaliente ${nota} <br>` );

} */

var key;

key=parseInt(prompt("Ingrese un numero del 1 al 7"));


switch (key) {
    case 1:
        document.write(`Lunes ${key} <br>` );
        break;
        case 2:
            document.write(`Martes ${key} <br>` );
            break;
            case 3:
                document.write(`Miercoles ${key} <br>` );
                break;
                case 4:
                    document.write(`Jueves ${key} <br>` );
                    break;
                    case 5:
                        document.write(`Viernes ${key} <br>` );
                        break;
                        case 6:
                            document.write(`Sabado ${key} <br>` );
                            break;
                            case 7:
                                document.write(`Domingo ${key} <br>` );
                                break;


    default:
        break;
}