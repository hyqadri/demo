class CustomerPage{
    
    customerLnk:string
    customerLbl:string
    firstnameTxtBx:string
    lastnameTxtBx:string
    companyTxtBx:string
    emailTxtBx:string
    phoneTxtBx:string   
    commentTxtBx:string 
    addressTxtBx:string
    savedLbl:string
    notSavedLbl:string
    customerNameLbl:string
    crossIcon:string

    constructor(){
        this.customerLnk = '#add-customer'      
        this.firstnameTxtBx = "input[name=firstName]"       
        this.lastnameTxtBx = "input[name=lastName]" 
        this.companyTxtBx = "input[name=company]" 
        this.emailTxtBx = "input[name=email]" 
        this.phoneTxtBx = "input[name=phone]"      
        this.phoneTxtBx = "input[name=phone]" 
        this.commentTxtBx = "input[name=comment]" 
        this.addressTxtBx = "input[name=defaultBillingAddress]"
        this.savedLbl = "div[class*='saved katana-label print-hide']"
        this.notSavedLbl = "div[class*='notSaved katana-label print-hide']"
        this.customerNameLbl = "span[data-testid='header-name-customer']"    
        this.crossIcon = ".MuiButtonBase-root.MuiIconButton-root.print-hide"    
    }

    navigate(){
        cy.get(this.customerLnk).click()        
    }

    displayed(){
        cy.get(this.firstnameTxtBx).should('exist')
                                   .should('be.visible')
    }

    enterFirstname(firstname:string){
        cy.get(this.firstnameTxtBx).clear()
        cy.get(this.firstnameTxtBx).should("exist")
                                   .should("be.visible")
                                   .should("be.enabled")
                                   .click()
                                   .type(firstname)
                                   .should('have.value',firstname)        
    }

    enterLastname(lastname:string){
        cy.get(this.lastnameTxtBx).clear()
        cy.get(this.lastnameTxtBx).should("exist")
                                  .should("be.visible")
                                  .should("be.enabled")
                                  .click()
                                  .type(lastname)
                                  .should('have.value',lastname)
      
    }

    enterCompany(company:string){
        cy.get(this.companyTxtBx).clear()
        cy.get(this.companyTxtBx).should("exist")
                                 .should("be.visible")
                                 .should("be.enabled")
                                 .click()
                                 .type(company)
                                 .should('have.value',company)
    }

    enterEmail(email:string){
        cy.get(this.emailTxtBx).clear()
        cy.get(this.emailTxtBx).should("exist")
                               .should("be.visible")
                               .should("be.enabled")
                               .click()
                               .type(email)
                               .should('have.value',email)       
    }

    enterPhone(phone:string){
        cy.get(this.phoneTxtBx).clear()
        cy.get(this.phoneTxtBx).should("exist")
                               .should("be.visible")
                               .should("be.enabled")
                               .click()
                               .type(phone)
                               .should('have.value',phone)
    }

    enterComment(comment:string){
        cy.get(this.commentTxtBx).clear()
        cy.get(this.commentTxtBx).should("exist")
                                 .should("be.visible")
                                 .should("be.enabled")
                                 .click()
                                 .type(comment)
                                 .should('have.value', comment)
    }

    checkSavedStatus(){
        cy.get(this.savedLbl).should('have.text','All changes saved')
    }

    checkNotSavedStatus(){
        cy.get(this.notSavedLbl).should('have.text','Not saved')
    }

    clickCustomerNameLabel(){
        cy.get(this.customerNameLbl).should("exist")
                                    .should("be.visible")
                                    .click()
    }

    clickCustomerAddressTextBox(){
        cy.get(this.addressTxtBx).should("exist")
                                 .should("be.visible")
                                 .should("be.enabled")
                                 .click()
    }

    closeWindow(){
        cy.get(this.crossIcon).should("be.visible")
                              .click()
    }
}

export default CustomerPage