const buttonel = document.querySelector('button');
const inputel = document.querySelector('input');
const listel = document.querySelector('ul');

function passdata(){
    const eneteredvalue = inputel.value;
    const listItemel = document.createElement('li');
    listItemel.textContent = eneteredvalue;
    listel.appendChild(listItemel);
    inputel.value = '';
}

buttonel.addEventListener('click', passdata);