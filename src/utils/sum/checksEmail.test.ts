import checksEmail from "./checksEmail";

describe ('checksEmail', () =>{
    it ('Added email should look like email 123@mail.com', ()=>{
        const result = checksEmail("abc@gmail.com")
       expect(result).toEqual(true);
    })

} )

