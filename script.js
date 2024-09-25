$(document).ready(function() {
    let curr = 0;
    const images = $('.image-slider img');
    const imageLength = images.length;

    images.hide().eq(curr).show();

    function showNext() {
        images.eq(curr).fadeOut();
        curr = (curr + 1) % imageLength;
        images.eq(curr).fadeIn();
    }

    function showPrev() {
        images.eq(curr).fadeOut();
        curr = (curr - 1 + imageLength) % imageLength;
        images.eq(curr).fadeIn();
    }

    $('#next').click(showNext);
    $('#prev').click(showPrev);

});

function validateForm(){
    
    const username = document.getElementById("username");

    const email = document.getElementById("email");

    const password = document.getElementById("password");

    const repassword = document.getElementById("repassword");

    const male = document.getElementById("male");

    const female = document.getElementById("female");

    const today = new Date(); 

    const dob = document.getElementById("dob");
    const dobDate = new Date(dob.value);

    const tnc = document.getElementById("tnc");

    if(username.value.length < 6){
        alert("Username must contain more than 5 characters!");
        return false;
    }else if(!email.value.endsWith("@email.com")){
        alert("Email must end with @email.com!");
        return false;
    }else if(password.value.length <= 8){
        alert("Password must be longer than 8 characters!");
        return false;
    }else if(password.value != repassword.value){
        alert("Your password did not match!");
        return false
    }else if(!male.checked&&!female.checked){
        alert("Please choose one of the genders!");
        return false;
    }else if(dobDate > today){
        alert("Your date of birth must be before today!");
        return false;
    }else if(!dob.value){
        alert("Please select a date!");
        return false;
    }else if(!tnc.checked){
        alert("Please agree to the terms and conditions!");
        return false;
    }else{
        return true;
    }
}