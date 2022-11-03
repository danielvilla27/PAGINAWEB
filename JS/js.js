var nombre;
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
