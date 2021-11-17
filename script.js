/* 
WAN MUHAMMAD ISMAT BIN WAN AZMY
B031920032
SILAT CEKAK WEBPAGE
*/

document.getElementById("colorSelection").addEventListener("change", ChangeBackgroundColor);
document.getElementById("pageSelection").addEventListener("change", ChangePage);
document.getElementById("resetButton").addEventListener("click", resetForm);
document.getElementById("postData").addEventListener("click", PostData);
var today = new Date();
var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

function PostData() {
    var form = document.getElementById("form");
    form.onsubmit = (event)  =>{
        event.preventDefault();

        var a = document.getElementById("firstName").value;
        var aa = document.getElementById("lastName").value;
        var b = document.getElementById("email").value;
        var c = document.getElementById("address").value;
        var d = document.getElementById("fem").checked;
        var e = document.getElementById("mal").checked;
        var f = document.getElementById("comment").value;
        var g = document.getElementById("google").checked;
        var h = document.getElementById("fb").checked;
        var i = document.getElementById("utem").checked;

        var gender = "Not Defined by User";

        if (d) gender = "Female";
        else if (e) gender = "Male";

        var websites = "";

        if (g) websites += "https://www.google.com | ";
        if (h) websites += "https://www.facebook.com | ";
        if (i) websites += "https://www.utem.edu.my  ";


        var write = `
        <table style="width: 50%;">
            <tr>
                <td>
                    <p><b>Date:</b> ${date}</p>
                    <p><b>Name:</b> ${a}</p>
                    <p><b>Last Name:</b> ${aa}</p>
                    <p><b>Email:</b> ${b}</p>
                    <p><b>Address:</b> ${c}</p>
                    <p><b>Gender:</b> ${gender}</p>
                    <p><b>Comment:</b> ${f}</p>
                    <p><b>Favorite Site:</b> ${websites}</p>
                </td>
            </tr>
        </table>
        `;

        document.getElementById("submitted").innerHTML = write;

    }
}

function ChangePage(){
    window.location.href = document.getElementById("pageSelection").value;
}

function ChangeBackgroundColor(){
    document.getElementById("bodyPage").style.backgroundColor = document.getElementById("colorSelection").value;
}

function resetForm() {
    alert("Your form will be reset!");
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("address").value = "";
    document.getElementById("email").value = "";
    document.getElementById("comment").value = "";
    alert("Form is done reset!");
}
