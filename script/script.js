//Não deixa letras entrarem no input type text
function numbers() {
    let { input } = pegarelemento();
    input.value = input.value.replace(/[^0-9.-]/g, '').replace(/(\..*?)\..*/g, '$1');
    input.value = input.value.replace(/[^0-9.-]/g, '').replace(/(\-.*?)\-.*/g, '$1');
}
//Pega elemento/Valor
function pegarelemento() {
    let input = document.getElementById('celsius');
    let resultado = document.getElementById('resultado');
    return { input, resultado };
}
function pegarvalue() {
    let { input } = pegarelemento();
    let inputvalue = input.value;
    return { inputvalue };
}
//Calcula em C/F/K
function calC() {
    let { inputvalue } = pegarvalue();
    let fh, k, c;
    c = parseFloat(inputvalue);
    fh = (9 * c + 160) / 5;
    k = (c + 273.15);
    ({ fh, k, c } = fixed(fh, k, c));
    return { c, fh, k }
}

function calcF() {
    let { inputvalue } = pegarvalue();
    let fh, k, c;
    fh = parseFloat(inputvalue);
    c = (fh - 32) * 5 / 9;
    k = (fh - 32) * 5 / 9 + 273.15;
    ({ fh, k, c } = fixed(fh, k, c));
    return { fh, k, c }
}
function calcK() {
    let { inputvalue } = pegarvalue();
    let fh, k, c;
    k = parseFloat(inputvalue);
    c = k - 273.15;
    fh = (k - 273.15) * 9 / 5 + 32;
    ({ fh, k, c } = fixed(fh, k, c));
    return { fh, k, c }
}
//Conserta número para ter somente 2 casas decimais após a virgula
function fixed(fh, k, c) {
    fh = fh.toFixed(2);
    k = k.toFixed(2);
    c = c.toFixed(2);
    return { fh, k, c };
}
//Apresenta o resultado
function apresentaC() {
    let { resultado } = pegarelemento();
    let { c, fh, k } = calC();
    resultado.innerHTML = `<h1 class="temperara">${c} °C</h1>`
    resultado.innerHTML += `<h1 class="temperara">${fh} °F</h1>`
    resultado.innerHTML += `<h1 class="temperara">${k} K</h1>`
}
function apresentaF() {
    let { resultado } = pegarelemento();
    let { c, fh, k } = calcF();
    resultado.innerHTML = `<h1 class="temperara">${fh} °F</h1>`
    resultado.innerHTML += `<h1 class="temperara">${c} °C</h1>`
    resultado.innerHTML += `<h1 class="temperara">${k} K</h1>`
}
function apresentaK() {
    let { resultado } = pegarelemento();
    let { c, fh, k } = calcK();
    resultado.innerHTML = `<h1 class="temperara">${k} K</h1>`
    resultado.innerHTML += `<h1 class="temperara">${fh} °F</h1>`
    resultado.innerHTML += `<h1 class="temperara">${c} °C</h1>`
}
//não pode deixar em branco
function embrancoC() {
    let { inputvalue } = pegarvalue();
    if ((inputvalue == '') || (inputvalue.substr(1, 1) == '-') || (inputvalue.substr(0, 1) == '.') || (inputvalue == '-')) {
        alert('Não pode deixar o campo em branco');
    } else {
        apresentaC();
    }
}
function embrancoF() {
    let { inputvalue } = pegarvalue();
    if ((inputvalue == '') || (inputvalue.substr(1, 1) == '-') || (inputvalue.substr(0, 1) == '.') || (inputvalue == '-')) {
        alert('Não pode deixar o campo em branco');
    } else {
        apresentaF();
    }
}
function embrancoK() {
    let { inputvalue } = pegarvalue();
    if ((inputvalue == '') || (inputvalue.substr(1, 1) == '-') || (inputvalue.substr(0, 1) == '.') || (inputvalue == '-')) {
        alert('Não pode deixar o campo em branco');
    } else {
        apresentaK();
    }
}