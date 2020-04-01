const form = document.querySelector('#formData');
const silniaInfoPlace = document.querySelector('#silniaInfo');

formData.addEventListener('submit', (e)=>{
    e.preventDefault();
    const number = parseInt(document.querySelector('#silnia').value);
    const worker = new Worker('./silnia-worker.js');

    worker.addEventListener('message', ({data})=>{
        silniaInfoPlace.innerHTML = `Silnia liczby ${number} wynosi ${data}`
        worker.terminate();
    });

    worker.postMessage(number);
});