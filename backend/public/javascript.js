const status = document.getElementById('status');
const messages = document.getElementById('messages');
const namedom = document.getElementById('name');

const formName = document.getElementById('formName');
const inputName = document.getElementById('inputName');

const form = document.getElementById('form');
const input = document.getElementById('input');

const ws = new WebSocket('ws://188.225.11.14:5000')

let name = '';

function setStatus(value) {
    status.innerHTML = value;
}

function setName(value) {
    name = value;
}


function printMessage(value) {
    const li = document.createElement('li');

    li.innerHTML = value;
    messages.appendChild(li);
}

form.addEventListener('submit', e=>{
    e.preventDefault();
    ws.send(name + ': ' + input.value);
    input.value = '';
})

formName.addEventListener('submit', e=>{
    e.preventDefault();
    setName(inputName.value);
})

ws.onopen = () => setStatus('ONLINE')

ws.onclose = () => setStatus('DISCONNECTED')

ws.onmessage = response => printMessage(response.data)