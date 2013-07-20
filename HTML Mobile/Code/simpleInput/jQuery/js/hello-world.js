// JavaScript Document
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);

// PhoneGap is ready
function onDeviceReady() {
    navigator.splashscreen.hide();
}


  
//=======================Say Hello (Page 1) Operations=======================//
function sendEmail() {
    var iEmail = document.getElementById('iEmail').value;
    var iName = document.getElementById('iName').value;
    var iMessage = document.getElementById('iMessage').value;
    var iPhone = document.getElementById('iPhone').value;
    document.location.href = "mailto:"+iEmail+"?Subject=Email From Mobile App&body="+iName+" "+iPhone+".";
    alert('Message has been sent');
}

