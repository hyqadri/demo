class DashboardPage{   
    
    pageTitle:string

    constructor(){
        this.pageTitle = 'Sales list - Katana'       
    }
    
    displayed(){    
        cy.title().should("eq", this.pageTitle)
    }
}
export default DashboardPage