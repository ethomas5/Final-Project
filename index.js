

    
    const body = document.getElementsByTagName("body")[0];
    const one = document.getElementsByClassName("one") [0]
    const two = document.getElementsByClassName("two")
    const three = document.getElementsByClassName("three")







let colorValue = 0;
const interval = 25;

const colorBright = setInterval(() => {
    if (colorValue < 255) {
        
        body.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`
        colorValue++
    } else {
        clearInterval(colorBright)
    }
    
}, interval);

const mainColorBright = setInterval(() => {
    if (colorValue < 255) {
        
        one.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`
        colorValue++
    } else {
        clearInterval(colorBright)
    }
    
}, interval);

console.log(one)
   



