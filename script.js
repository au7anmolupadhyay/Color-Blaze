// using event handler

function getColor(){
    const randomNumber = Math.floor(Math.random()*16777215);
    const code = '#'+ randomNumber.toString(16);
    document.body.style.backgroundColor = code;

    document.getElementById('hex-code').innerText = code;

    navigator.clipboard.writeText(code);
}

// whenever our window will be loaded this function will automatically start
getColor();






// using event listener (remove the onclick in html for event listener)

// const btn = document.getElementById('btn');
// btn.addEventListener('click', ()=>{
//     const randomNumber = Math.floor(Math.random()*16777215);
//     const code = '#'+ randomNumber.toString(16);
//     document.body.style.backgroundColor = code
// })






// 16777215


// const getColor =()=>{
//     const randomNumber = Math.floor(Math.random()*16777215);
//     const randomCode = '#'+ randomNumber.toString(16);
//     document.body.style.backgroundColor = randomCode;
// }

// document.getElementById("btn").addEventListener(
//     'click', getColor
// )