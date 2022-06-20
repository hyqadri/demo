class HeaderSection{   
    
    menuIcon:string

    constructor(){
        this.menuIcon = "button > span > svg[data-testid='userInfoContainer']"
    }
    
    displayed(){
        cy.get(this.menuIcon).should("be.visible")
    }

    clickMenuIcon(){
        cy.get(this.menuIcon).click()
    }
}
export default HeaderSection