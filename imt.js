const kg = document.getElementById("kg");
const m = document.getElementById("m");
const per = document.getElementById("per")
const perBtt = document.getElementById("perBtt");
const btn = document.getElementById("btn");
const result = document.getElementById("result");
const info = document.getElementById('in');

function perevod() {
    m.value = per.value/100;
}

perBtt.addEventListener('click',perevod);

function cal() {
    result.innerHTML="";
    let formula = kg.value/m.value**2;
    result.textContent = `Ваш ИМТ: ${formula.toFixed(2)}`;
    if (formula<=16) {
        result.innerHTML = `<p>Значительный дефицит массы тела (ИМТ: ${formula.toFixed(2)})</p>` 
    }
    else if (formula<18.5) {
        result.innerHTML = `<p>Недостаток массы тела (ИМТ: ${formula.toFixed(2)})</p>` 
    }
    else if (formula<25) {
        result.innerHTML = `<p>Нормальный вес (ИМТ: ${formula.toFixed(2)})</p>` 
    }
    else if (formula<30) {
        result.innerHTML = `<p>Лишний вес (ИМТ: ${formula.toFixed(2)})</p>` 
    }
    else if (formula<35) {
        result.innerHTML = `<p>Ожирение I степени (ИМТ: ${formula.toFixed(2)})</p>` 
    }
    else if (formula<40) {
        result.innerHTML = `<p>Ожирение II степени (ИМТ: ${formula.toFixed(2)})</p>` 
    }
    else if (formula>40) {
        result.innerHTML = `<p>Ожирение III степени (ИМТ: ${formula.toFixed(2)})</p>` 
    }
    else {
        result.innerHTML = `<p>Где-то ошибка</p>`
    }
}
btn.addEventListener("click",cal);