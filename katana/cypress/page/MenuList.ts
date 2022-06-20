class MenuList{   
    
    menuListBtn:string

    constructor(){
        this.menuListBtn = '.MuiFab-label > .MuiSvgIcon-root'
    }
    
    open(baseURL:string){
        cy.get(this.menuListBtn).click()
    }
}
export default MenuList