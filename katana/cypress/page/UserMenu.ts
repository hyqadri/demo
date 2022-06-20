class UserMenu{   
    
    logoutListItm:string

    constructor(){
        this.logoutListItm = "li#logout"
    }
    
    clickLogoutLnk(){
        cy.get(this.logoutListItm).click()        
    }
}
export default UserMenu