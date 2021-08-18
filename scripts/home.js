

function sendEmail(params) {
    var tempParams = {
        from_name: document.getElementById('fullName').value,
        to_name:'Pamoja LTD', 
        email:document.getElementById('fromEmail').value,
        message:document.getElementById('message').value    

    };
    emailjs.send("service_nsc2g4g","template_48adrmp",tempParams).then(function(res){
        console.log('success', res.status); 
        document.getElementById('fromEmail').value ="",
        document.getElementById('fullName').value = ""
        document.getElementById('message').value = ""
    })

}