//script imc com js

let btnEnv = document.querySelector('#enviar');
let btnLimp = document.querySelector('#limpar');

let form = document.querySelector('form');

let userName = document.querySelector('#name');

let userAge = document.querySelector('#idade');

let userHight = document.querySelector('#altura');

let userWeight = document.querySelector('#peso');

let cxIMC = document.querySelector('#resultado');

let solver = document.querySelector('#solveFinal');

btnLimp.addEventListener('click', function(){
    userName.value = '';
    userAge.value = '';
    userHight.value = '';
    userWeight.value = '';
    cxIMC.value = '00.00 IMC';
    solver.innerHTML = '';
})
//funcao para pega o valor dos input
btnEnv.addEventListener('click', function(e){
    e.preventDefault();
    
    let nome = userName.value;
    let age = userAge.value;
    let hight = userHight.value;
    let weigth = userWeight.value;
    let imc = (weigth / (hight * hight)).toFixed(2);

    //enquanto elementos como h1, p, a sofrem alteracoes nos valores por innerHTML ou textContent
    //elementos de entrada sofrem alteracoes com o value. p. ex. input.value = 3;
    cxIMC.value = `${imc} IMC`;

    let sitImc = situacao(imc);
    solver.innerHTML = sitImc;

    console.log(nome);
    console.log(age);
    console.log(hight);
    console.log(weigth);
    console.log(imc);   
})


const situacao = (imc) => {
    let situation = '';
    if (imc <= 16){
        situation = "magreza grave";
    }else if (imc > 16 && imc <= 17 ){
        situation = "magreza moderada";
    }else if (imc > 17 && imc <= 18.5){
        situation = "magreza leve";
    }else if (imc > 18.5 && imc <= 25){
        situation = "saudável";
    }else if (imc > 25 && imc <= 30){
        situation = "sobrepeso";
    }else if (imc > 30 && imc < 35){
        situation = "obsidade grau I"
    }else if(imc >= 35){
        situation = "obsidade severa"
    }else {
        situation = "informe seu peso corretamente"
        solveresult.classList = "resultado";
    }
    return situation
}
