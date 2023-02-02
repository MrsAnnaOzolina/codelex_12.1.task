
export default function checksPassword(password:(string | number | string[])){
    if (password.toString().length+1 > 8 ){
       var number = /([0-9])/; 
   var specialCharacter = /([!, @, #, $, %, ^, &, *])/;
       
      return   number.test(password.toString()) && specialCharacter.test(password.toString())
   } else {
       return false
   }
}
