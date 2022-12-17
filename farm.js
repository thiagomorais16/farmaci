var farm = [];

function addFarm() {
    event.preventDefault();
    let newMed = {
        "farName": document.getElementById("fname").value,
        "qtd": document.getElementById("fqtd").value,
        "tclass": document.getElementById("fclass").value
      
    }
    resetForm();
    farm.push(newMed);
    renderTable();
}
console.log()
function removeFarm(index){
    farm.splice(index,1);
    renderTable();
}


function renderTable(){
    let table = document.getElementById("dataTable");
    table.innerHTML =  `             <tr>
    <th>ID</th>
    <th>Medicamento</th>
    <th>Quantidade</th>
    <th>Classe de Medicamento</th>
    <th>Remover</th>

</tr>`;

console.log(farm.length);

    for(let i = 0; i < farm.length; i++)
    {

        
        table.innerHTML = table.innerHTML  +  `<tr>
        <td>${i}</td>
        <td>${farm[i].farName}</td>
        <td>${farm[i].qtd}</td>
        <td>${farm[i].tClass}</td>
        <td><img src="remove.png" width="25px" height="25px" onclick="removefarm(${i})"></td>
    </tr>`
    }
}

function resetForm(){
    document.getElementById("fName").value = "";
    document.getElementById("fqtd").value = "";
    document.getElementById("fClass").value = "";
}

renderTable();