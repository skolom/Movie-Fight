// const input = document.querySelector("input");

const debounce = (func, delay) => {
    let timeoutId;

    return (...args) => {
        if (timeoutId) {        
            clearTimeout(timeoutId);            
        }
        timeoutId = setTimeout(() => {
            func.apply(null, args);
        }, delay)
    };
};