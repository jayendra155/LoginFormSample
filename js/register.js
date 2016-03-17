function usernameAvailability(){
    console.log("function invoked");
    var img=document.getElementById('usernameAvailability');
    console.log(img.style);
    img.style.visibility="visible";
    img.removeAttribute('class');
}