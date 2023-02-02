import checksPassword from "./checksPassword"; 

describe ('checksPassword', () =>{
    it ('Added password should contain atlest 8 characters and  atlest -  1 special symbol and 1 number ', ()=>{
        const result = checksPassword("Anna123%")
       expect(result).toEqual(true);
    })
} )
