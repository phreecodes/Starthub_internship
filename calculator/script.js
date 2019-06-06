function insertNum(num) {
    document.form.textview.value = document.form.textview.value + num;
}

function insertOperator(op) {
    document.form.textview.value = document.form.textview.value + op;
}

function equal() {
    var exp = document.form.textview.value
    if(exp){
        document.form.textview.value = eval(exp);
    }
}

function dan() {
    document.form.textview.value = "";
}

function back(){
    var exp = document.form.textview.value
    document.form.textview.value = exp.substring(0,exp.length-1);
}

function squar() {
    var answer = document.form.textview.value
    document.form.textview.value = eval(answer * answer);
}

function Sine() {
    var ans = document.form.textview.value
    document.form.textview.value = Math.sin(ans);
}

function tan() {
    var ans = document.form.textview.value
    document.form.textview.value = Math.tan(ans);
}

function cos() {
    var ans = document.form.textview.value
    document.form.textview.value = Math.cos(ans);
}

function ruth() {
    var ans = document.form.textview.value
    document.form.textview.value = Math.sqrt(ans);
}

function costeta() {
    var ans = document.form.textview.value
    document.form.textview.value = Math.acos(ans);
}

function tanteta() {
    var ans = document.form.textview.value
    document.form.textview.value = Math.atan(ans);
}

function sinteta() {
    var ans = document.form.textview.value
    document.form.textview.value = Math.asin(ans);
}