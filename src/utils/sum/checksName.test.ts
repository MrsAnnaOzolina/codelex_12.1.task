import checksName from "./checksName";

describe ('checksName', () =>{
    it ('Added name should cotnain atleast 2 character with letter only, but not more then 50 character', ()=>{
        const result = checksName("Anna")
       expect(result).toEqual(true);
    })
    it ('return false because name is not added', ()=>{
        const result = checksName(" ")
       expect(result).toBeFalsy();
    })

} )

