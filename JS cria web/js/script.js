
// Styles 
const body = document.querySelector('body');
body.style.position = 'absolute';
body.style.top = '50%';
body.style.left = '50%';
body.style.transform = 'translate(-50%, -50%)';
body.style.backgroundColor = 'white';

const div2 = document.createElement('div');
div2.style.width = `500px`;
div2.style.height = `300px`;
div2.style.display = `flex`;
div2.style.justifyContent = `center`;
div2.style.alignItems = `center`;
div2.style.backgroundColor = `gray`;
body.appendChild(div2);

const frm = document.createElement('form');
const resp = document.createElement('h3');

frm.addEventListener("submit", (e) => {
    e.preventDefault(); 

    const nome = frm.inNome.value;
    const num1 = Number(frm.inNumero1.value);
    const num2 = Number(frm.inNumero2.value);
    const num3 = Number(frm.inNumero3.value); 
    const media = (num1 + num2 + num3) / 3 ; 
    
    if(media >= 10){
        resp.innerHTML = `${nome}.UAU! Parabéns Top, aprovado! média é ${media.toFixed(1)}`;
        resp.style.color = 'Blue'; 
    }else if (media >= 7) {
        resp.innerHTML = `${nome}. Parabéns, aprovado! média é ${media.toFixed(1)}`;
        resp.style.color = 'green';    
    } else if (media <= 3) {
        resp.innerHTML = `${nome}. está reprovado média é ${media.toFixed(1)}`;
        resp.style.color = 'red' ;   
    } else {
        resp.innerHTML = `${nome}. Recuperação média é ${media.toFixed(1)}`;
        resp.style.color = 'yellow' ; 
    }
    });


// Criar o elemento input
const inputElementText = document.createElement('input');
const inputElementBr = document.createElement('br');
const inputElementNumber1 = document.createElement('input');
const inputElementBr1 = document.createElement('br');
const inputElementNumber2 = document.createElement('input');
const inputElementBr2 = document.createElement('br');
const inputElementNumber3 = document.createElement('input');
const inputElementBr3 = document.createElement('br');
const inputElementSubmit = document.createElement('input');
const inputElementBr4 = document.createElement('br');
const inputElementBr6 = document.createElement('br');
const inputElementBr5 = document.createElement('h3');

// Input tipo de type
inputElementText.type = 'text';
inputElementNumber1.type = 'number';
inputElementNumber2.type = 'number';
inputElementNumber3.type = 'number';
inputElementSubmit.type = 'submit';

// Adiciona o placeholder
inputElementText.placeholder = 'Digite seu nome';
inputElementNumber1.placeholder = 'Digite a primeira nota';
inputElementNumber2.placeholder = 'Digite a segunda nota';
inputElementNumber3.placeholder = 'Digite a terceira nota';
inputElementSubmit.value = 'Calcular Média';

// Adicionar id 
inputElementText.id = 'inNome';
inputElementNumber1.id = 'inNumero1';
inputElementNumber2.id = 'inNumero2';
inputElementNumber3.id = 'inNumero3';

// Adiciona o input ao corpo do documento que antes colocar frm linha 1
frm.appendChild(inputElementText);  
frm.appendChild(inputElementBr);
frm.appendChild(inputElementNumber1);
frm.appendChild(inputElementBr1);
frm.appendChild(inputElementNumber2);
frm.appendChild(inputElementBr2);
frm.appendChild(inputElementNumber3);
frm.appendChild(inputElementBr3);
frm.appendChild(inputElementSubmit);
frm.appendChild(inputElementBr4);
frm.appendChild(inputElementBr6);
frm.appendChild(inputElementBr5);

// formulario enviar 
document.body.appendChild(frm);
document.body.appendChild(resp);