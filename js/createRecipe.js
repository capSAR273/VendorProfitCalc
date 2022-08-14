function addRecipeRow(){
    var table = document.getElementById("table");
    var recipeRow = document.createElement("tr");
    var ingredients = prompt("Enter the number of ingredients: ");
    var recipeItem = recipeRow.appendChild(document.createElement("tr"));
    recipeRow.innerHTML = '<tr> Recipe Name: <input type=text></input></tr>';
    table.appendChild(recipeRow);
    for(let i=0; i<ingredients; i++)
    {
        recipeItem.innerHTML += '<tr>Item Name <input type=text></tr> <tr>Price: <input></tr>';
        table.appendChild(recipeItem);
    }
}