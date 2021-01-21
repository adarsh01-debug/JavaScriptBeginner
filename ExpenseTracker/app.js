//Selectors
document.querySelector('form').addEventListener('submit', handleSubmit);


//Event Handlers
function handleSubmit(e)
{
    e.preventDefault();
    var name = document.getElementById("desc");
    var date = document.getElementById("dob");
    var amount = document.getElementById("amount");
    console.log(name.value);
    console.log(date);
    console.log(amount.value);

    if(name.value != '' && date.value != '' && amount.value != '')
    {
        addActivity(name.value, date.value, amount.value);
    }
    name.value = '';
    date.value = '';
    amount.value ='';
}

//Helpers
function delete_item(e)
{
    var item = e.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(item);
}

function addActivity(name, date, amount)
{
    var tbody = document.querySelector('tbody');
    var tr = document.createElement('tr');

    tr.innerHTML = `
        <td>${name}</td>
        <td>${date}</td>
        <td>Rs. ${amount}</td>
        <td><button id="btnt" name="deleteButton" onclick="delete_item(this)"><i class="fa fa-minus-square"></i></button></td>
    `;

    tr.classList.add('todo-item-list');
    tbody.appendChild(tr);
}
