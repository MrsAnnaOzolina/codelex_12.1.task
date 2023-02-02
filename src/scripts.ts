// @ts-ignore
// import $ from 'jquery';
// global.$ = $;
// global.jQuery = $;

// const $ = require('jquery');

import checksName from "./utils/sum/checksName";
import checksEmail from "./utils/sum/checksEmail";
import checksPassword from './utils/sum/checksPassword'


$('.hero').append('<div>')
 $("div").append(" <label for='name'>Name</label ><input id='name' class='form__name'type='text' name='name' placeholder='your name'><label for='email'>e-mail</label><input class='form__email' type='text' name='email' placeholder='your email: abc@gmail.com'><label for='password'>password</label><input class='form__password' type='password' name='password' placeholder='pasword'> <button class='waves-effect waves-light btn-large' id='signInButton' > Sign in </button> ");

 // labāk likt formu submit nekā button. 

$("#signInButton").on("click", function onClick () {
    let errorMessage = ""; 
    let fieldsMissing = ""; 
if ($("#name").val() == ""){
    fieldsMissing +="<br> your name"
}if ($(".form__email").val() == ""){
    fieldsMissing +="<br>your email"
} if ($(".form__password").val() == ""){
    fieldsMissing +="<br>your password"
}if (fieldsMissing != ""){
    errorMessage += " <p>The following field(s) are missing:"+fieldsMissing
} else if   (checksName($("#name").val()) == false){
    errorMessage+= "<p>Your name is incorrect!  , please add atleast 2 character but not more then 50 - only letters<p>"
    } 
    else if(checksEmail($(".form__email").val()) == false){
        errorMessage += "<p>Your email address in incorrect. Address should look like abcdef@abc.com </p>"
    } else if(checksPassword($(".form__password").val()) == false){
        errorMessage += "<p>Your password is not valid, please add atleast 8 characters that contains atleast one number and 1 special syblom: !, @, #, $, %, ^, &, *  </p>"
    } 
    if (errorMessage != ""){
        $(".errorMessage").html(errorMessage)
    } 
    else {
        $(".successMesaage").show();
        $(".errorMessage").hide();
        $("#name").val("") ;
        $(".form__email").val("") ;
        $(".form__password").val("") ;
    }
});

export default checksPassword; 
