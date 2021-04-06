function calcul(a, b, car){
    var a = document.getElementById("primul").value;
    var b = document.getElementById("aldoilea").value;
    var car = document.getElementById("caracter").value;
    let c;
    c = a + car + b;
    c = eval(c);
    alert(c);
}