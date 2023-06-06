const form = document.querySelector('.formulario');

form.addEventListener('submit', function (e){
    e.preventDefault();
    const inputDia = e.target.querySelector('.dia');
    const inputMes = e.target.querySelector('.mes');

    const dia = Number(inputDia.value);
    const mes = Number(inputMes.value);

    if (!dia || dia <= 0 || dia >=32) {
        setResultado('Dia inválido', false);
        return;
    }
    if (!mes || mes <= 0 || mes >= 13) {
        setResultado('Mês inválido', false);
        return;
    }

const signo = getSigno(dia, mes);


const msg = `Seu signo é ${signo}.`;

setResultado (msg, true);



});


function getSigno (dia, mes){
    const nivel = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitario', 'Capricórnio', 'Aquário', 'Peixes',]
  
    if((dia >= 21 && mes === 3)||(dia <= 20 && mes === 4)) return nivel[0];
    if((dia >= 21 && mes === 4)||(dia <= 20 && mes === 5)) return nivel[1];
    if((dia >= 21 && mes === 5)||(dia <= 20 && mes === 6)) return nivel[2];    
    if((dia >= 21 && mes === 6)||(dia <= 22 && mes === 7)) return nivel[3];
    if((dia >= 23 && mes === 7)||(dia <= 22 && mes === 8)) return nivel[4];
    if((dia >= 23 && mes === 8)||(dia <= 22 && mes === 9)) return nivel[5];
    if((dia >= 23 && mes === 9)||(dia <= 22 && mes === 10))return nivel [6];
    if((dia >= 23 && mes === 10)||(dia <= 21 && mes === 11))return nivel [7];
    if((dia >= 22 && mes === 11)||(dia <= 21 && mes === 12))return nivel [8];
    if((dia >= 22 && mes === 12)||(dia <= 20 && mes === 1))return nivel [9];
    if((dia >= 21  && mes === 1)||(dia <= 18 && mes === 2))return nivel [10];
    if((dia >= 19 && mes === 2)||(dia <= 20 && mes === 3))return nivel [11];
}

function criaP(){
    const p = document.createElement('p');
    return p
}

function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = '';
   
    

    const p = criaP();
    
    
    if (isValid){
     p.classList.add('paragrafo-resultado')    ;
    }
    else {
        p.classList.add('bad');
    }

    resultado.appendChild(p)
    p.innerHTML = msg
}

