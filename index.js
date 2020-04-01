const form = document.querySelector('#formData');
const silniaInfoPlace = document.querySelector('#silniaInfo');

formData.addEventListener('submit', (e)=>{
    e.preventDefault();
    const number = parseInt(document.querySelector('#silnia').value);

    const silniaValue = silnia(number);

    silniaInfoPlace.innerHTML = `Silnia liczby ${number} to ${silniaValue}`
});

function silnia(number){
    if(number === 0){
        return 0;
    } else if (number === 1){
        return 1;
    } else if (number === 2){
        return 2;
    }else{
        return silnia(number-1)*number;
    }
}