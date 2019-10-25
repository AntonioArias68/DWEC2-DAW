{
    const valores = [true, 5, false, "hola", "adios", 2];

    //Cual texto es mayor
    if (valores[3]>valores[4])
        alert("El texto mayor es " + valores[3]);

    else
        alert("El texto mayor es " + valores[4]);

    //Devolver un True
    alert(valores[0] || valores[2]);

    //Devolver un False
    alert(valores[0] && valores[2]);

    //Suma
    alert(valores[1] + valores[5]);

    //Resta
    alert(valores[1] - valores[5]);

    //Multiplicacion
    alert(valores[1] * valores[5]);

    //Division
    alert(valores[1] / valores[5]);

    //Resto Division
    alert(valores[1] % valores[5]);

}