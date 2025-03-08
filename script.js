const inputTarefa = document.querySelector("#inputList");
const addTarefa = document.querySelector("#addList");
const lista = document.querySelector(".list");
let removeTarefa = document.querySelectorAll(".removeList");

addTarefa.addEventListener("click", () => {
    lista.insertAdjacentHTML("beforeend", 
        `<div class="col-12 input-group">
            <div class="input-group-text">
                <input class="task-check form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input">
            </div>
            <textarea class="task-description form-control" aria-label="Text input with checkbox">${inputTarefa.value}</textarea>
            <button type="button" class="btn border border-dark-subtle btn-secondary removeList"><img src="img/trash.png"></button>
         </div>`
    );
    inputTarefa.value = '';
    removeTarefa = document.querySelectorAll(".removeList");
    removeTarefa[removeTarefa.length - 1].addEventListener('click', event => {
            lista.removeChild(event.target.closest('.input-group'));
    });
});