/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var tblFW = document.getElementById("fwtable");
tblFW.addEventListener("click",handleClick(event));

function handleClick(event) {
    var rows = tblFW.getElementsByTagName("tr");

    for (i = 0; i < rows.length; i++) {
        var currentRow = rows[i];
        currentRow.onclick = createClickHandler(currentRow);
    }
    
}

//function createClickHandler(row) {
//    var cell = row.getElementsByTagName("td")[0];
 //   var id = cell.innerHTML;
  //  alert("Row id:" + id);
//}
//window.onload = addRowHandlers();
