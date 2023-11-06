// Variables
let currentInput = document.querySelector('.currentInput');
let answerScreen = document.querySelector('.answerScreen');
let buttons = document.querySelectorAll('button');
let erasebtn = document.querySelector('#erase');
let clearbtn = document.querySelector('#clear');
let evaluate = document.querySelector('#evaluate');
let exponentBtn = document.querySelector('#exponent');




// Calculator Display
let realTimeScreenValue = []

// To Clear

clearbtn.addEventListener("click", () => {

    realTimeScreenValue = [''];
    answerScreen.innerHTML = 0;
    currentInput.className = 'currentInput'
    answerScreen.className = 'answerScreen';
    answerScreen.style.color = " rgba(150, 150, 150, 0.87)";
})

// Get value of any button clicked and display to the screen

exponentBtn.addEventListener("click", () => {
    if (realTimeScreenValue.length > 0) {
        const base = parseFloat(realTimeScreenValue.join(''))
        const exponent = parseFloat(exponentBtn.value) // Obter o valor do botão como expoente
        const result = Math.pow(base, exponent)
        realTimeScreenValue = [result.toString()]
        currentInput.innerHTML = realTimeScreenValue[0]
        answerScreen.innerHTML = realTimeScreenValue[0]
    }
})

buttons.forEach((btn) => {
    
    btn.addEventListener("click", () => {
        // when clicked button is not erased button 
        if (!btn.id.match('erase')) {
            // To display value on btn press
            realTimeScreenValue.push(btn.value)
            currentInput.innerHTML = realTimeScreenValue.join('');

            // To evaluate answer in real time
            if (btn.classList.contains('num_btn')) {

                answerScreen.innerHTML = eval(realTimeScreenValue.join(''));

            }

        }

        // When erase button is clicked
        if (btn.id.match('erase')) {
            realTimeScreenValue.pop();
            currentInput.innerHTML = realTimeScreenValue.join('');
            answerScreen.innerHTML = eval(realTimeScreenValue.join(''));
        }

        // When clicked button is evaluate button
        if (btn.id.match('evaluate')) {
            currentInput.className = 'answerScreen';
            answerScreen.className = 'currentInput';
            answerScreen.style.color = "white";
        }

        // To prevent undefined error in screen
        if (typeof eval(realTimeScreenValue.join('')) == 'undefined') {
            answerScreen.innerHTML = 0
        }

        

        

        

    })
})
