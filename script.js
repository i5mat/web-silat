/* 
WAN MUHAMMAD ISMAT BIN WAN AZMY
B031920032
SILAT CEKAK WEBPAGE
*/

document.getElementById("colorSelection").addEventListener("change", ChangeBackgroundColor);
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
        var bb = document.getElementById("phone").value;
        var c = document.getElementById("address").value;
        var cc = document.getElementById("tshirtSelection").value;
        var d = document.getElementById("sizeS").checked;
        var e = document.getElementById("sizeM").checked;
        var ee = document.getElementById("sizeL").checked;
        var f = document.getElementById("qty").value;

        var size = "Not Defined by User";

        if (d) size = "Size S";
        else if (e) size = "Size M";
        else if (ee) size = "Size L";

        var cal = cc * f;

        var write = `
        <h3>Thank You for ordering T-Shirt with our company! ✅</h3>
            <p><b>Date:</b> ${date}</p>
            <p><b>Customer Name:</b> ${a} ${aa}</p>
            <p><b>Customer Email:</b> ${b}</p>
            <p><b>Customer Phone:</b> ${bb}</p>
            <p><b>Customer Address:</b> ${c}</p>
            <p><b>Selected Size:</b> ${size}</p>
            <p><b>Selected T-Shirt Type:</b> ${cc}</p>
            <p><b>T-Shirt Qty:</b> ${f}</p>
            <p><b>Total Price (RM):</b> ${cal}</p>
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
    document.getElementById("form").reset();
}
