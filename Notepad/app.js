//Selectors
document.querySelector('form').addEventListener('submit', handleSubmit);

//Event Handlers
function handleSubmit(e) {
    e.preventDefault();
    var input = document.getElementById("text1");
    if (input.value != '') {
        addActivity(input.value);
    }
    input.value = '';
}

//Helpers
function delete_item(e) {
    document.getElementById("main").remove();
}

function addActivity(input) {
    var new_div = document.createElement("div");
    new_div.className = "card";
    new_div.id = "main";

    new_div.innerHTML = `
    <div class="card-header">
        Note:
    </div>
    <div class="card-body">
        <blockquote class="blockquote">
            <p>${input}</p>
        </blockquote>
        <td><button id="btnt" name="deleteButton" onclick="delete_item(this)"><i class="fa fa-minus-square"></i></button></td>
    </div>
    `;
    document.body.appendChild(new_div);
}
