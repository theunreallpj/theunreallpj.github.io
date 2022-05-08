function schaltjahr_berechnung () {
    let value = document.getElementById("input").value;
    if((value%4 == 0 && value%100 == 0  && value%400 == 0 ) || (value%4 == 0  && !value%100 == 0 )) {
        alert(value+" ist ein Schaltjahr!");
    }
    else{
        alert(value+" ist kein Schaltjahr!");
    }
}