/* 
WAN MUHAMMAD ISMAT BIN WAN AZMY
B031920032
SILAT CEKAK WEBPAGE
*/

document.getElementById("colorSelection").addEventListener("change", ChangeBackgroundColor);
document.getElementById("resetButton").addEventListener("click", resetForm);
document.getElementById("calDistanceBtn").addEventListener("click", PostDistance);

var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

function PostDistance() {
    var form = document.getElementById("formDistance");
    form.onsubmit = (event)  =>{
        event.preventDefault();

        var x1 = parseInt(document.getElementById("x1val").value);
        var y1 = parseInt(document.getElementById("y1val").value);
        var x2 = parseInt(document.getElementById("x2val").value);
        var y2 = parseInt(document.getElementById("y2val").value);
        var t = document.getElementById("taylor").checked;
        var k = document.getElementById("mcphee").checked;
        var c = document.getElementById("chris").checked;
        var e = document.getElementById("elliot").checked;

        var totalSlope = (y2 - y1) / (x2 - x1);
        var totalSum = x1 + x2 + y1 + y2;
        var totalAvg = totalSum / 4;
        var totalProduct = x1 * x2 * y1 * y2;
        var findLargest = Math.max(x1, y1, x2, y2);
        var findSmallest = Math.min(x1, y1, x2, y2);

        var choice = "";

        if (t) choice += "Taylor | ";
        if (k) choice += "Katharine | ";
        if (c) choice += "Chris | ";
        if (e) choice += "Elliot ";

        var output = `
        <table style="width: 50%;">
            <tr>
                <th>Date</th>
                <td><p>${date}</p></td>
            </tr>
            <tr>
                <th>Result Slope</th>
                <td><input type="text" value="${Math.abs(totalSlope)}" disabled /></td>
            </tr>
            <tr>
                <th>Sum</th>
                <td><input type="number" value="${totalSum}" disabled /></td>
            </tr>
            <tr>
                <th>Average</th>
                <td><input type="text" value="${totalAvg}" disabled /></td>
            </tr>
            <tr>
                <th>Product</th>
                <td><input type="number" value="${totalProduct}" disabled /></td>
            </tr>
            <tr>
                <th>Largest</th>
                <td><input type="number" value="${findLargest}" disabled /></td>
            </tr>
            <tr>
                <th>Smallest</th>
                <td><input type="number" value="${findSmallest}" disabled /></td>
            </tr>
            <tr>
                <th>Favourite Idol</th>
                <td><input type="text" value="${choice}" size="50" disabled /></td>
            </tr>
        </table>
        `;

        document.getElementById("displayOutput").innerHTML = output;

    }
}

function ChangeBackgroundColor(){
    document.getElementById("bodyPage").style.backgroundColor = document.getElementById("colorSelection").value;
}

function resetForm() {
    alert("Your form will be reset!");
    document.getElementById("x1val").value = "";
    document.getElementById("y1val").value = "";
    document.getElementById("x2val").value = "";
    document.getElementById("y2val").value = "";
    alert("Form is done reset!");
}
