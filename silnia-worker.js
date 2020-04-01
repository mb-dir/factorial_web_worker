function silnia(number) {
    if (number === 0) {
        return 0;
    } else if (number === 1) {
        return 1;
    } else if (number === 2) {
        return 2;
    } else {
        return silnia(number - 1) * number;
    }
}

onmessage = ({data})=>{
    const silniaValue = silnia(data);
    postMessage(silniaValue);
}