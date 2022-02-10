    let currentNumber = document.getElementById("currentNumber");
    let btDecrement = document.getElementById("btDecrement");
    let btIncrement = document.getElementById("btIncrement");

    let number = 0;

    function increment() {
        number += 1;
        currentNumber.innerHTML = number;
    }

    function decrement() {
        number -= 1;
        currentNumber.innerHTML = number;
        if (number < 0) {
            currentNumber.innerHTML = 0;
            btDecrement.desabled = true;
            return increment();
        }
    }

    btIncrement.addEventListener("click", increment);
    btDecrement.addEventListener("click", decrement);

    increment();
    decrement();