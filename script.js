let buttonCntainer = document.getElementById("buttonCntainer");
let saveButton = document.getElementById("saveButton");
let input = document.getElementById("input");

function createButtons() {
    let n = parseInt(document.getElementById("input").value);
    input.style.display = "none";
    saveButton.remove();

    for (let i = 1; i <= n; ++i) {
        let button = document.createElement("button");
        button.innerHTML = "Butonul " + i;
        button.classList.add("custom-button");
        buttonCntainer.appendChild(button);
        button.setAttribute("class", "buttons");
    }

    let buttons = document.querySelectorAll("button");
    let randomIndex = Math.floor(Math.random() * buttons.length);
    let congratulations = document.querySelector(".congratulations");
    let wrong = document.querySelector(".wrong");

    for (let i = 0; i < buttons.length; ++i) {
        if (i == randomIndex) {
            buttons[i].addEventListener("click", function() {
                congratulations.style.display = "block";
            });
        } else {
            buttons[i].addEventListener("click", function() {
                wrong.style.display = "block";
            });
        }
    }
}


