let saveFile = () => {

    const name = document.getElementById("clientname");
    const phone = document.getElementById("clientphone");
    const email = document.getElementById("clientemail");
    const enquiry = document.getElementById("clientenquiry");


    let data = "\r Name: " + name.value + " \r\n " + "Phone: " + phone.value + " \r\n " + "Email: " + email.value + " \r\n " + "Enquiry: " + enquiry.value + " \r\n ";
    console.log(data);
    const textToBLOB = new Blob([data], { type: "text/plain" });
    var filename = new Date();
    var month = new Date();
    month = month.getMonth();

    var day = new Date();
    var day = day.getUTCDate();

    var year = new Date();
    var year = year.getUTCFullYear();

    newdate = year + "/" + month + "/" + day;
    const sFileName = filename;

    let newLink = document.createElement("a");
    newLink.download = new Date();

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    } else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }

    newLink.click();
};