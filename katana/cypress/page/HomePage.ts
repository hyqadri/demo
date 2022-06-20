class HomePage{   
    
    pageTitle:string

    constructor(){
        this.pageTitle = 'Katana │ Manufacturing ERP Software for Total Visibility'
    }
    
    navigate(baseURL:string){
        cy.visit(baseURL)        
    }

    displayed(){
        cy.title().should("eq", this.pageTitle)
    }
    
}
export default HomePage