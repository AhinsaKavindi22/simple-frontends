function dis(val){
    document.getElementById("result").value += val;

}


function clr(){
    document.getElementById("result").value = "";
}


function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}

