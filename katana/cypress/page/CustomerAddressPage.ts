class CustomerAddressPage{
    
    addressLbl:string
    firstname:string
    lastname:string
    company:string
    phone:string
    address1:string
    address2:string
    city:string
    state:string
    zipCode:string
    country:string
    okBtn:string
    billingAddressTitle:string
    addAddressLnk:string

    constructor(){
        this.addressLbl = 'h2.MuiTypography-root.MuiTypography-h6'  
        this.firstname = 'div[data-testid="firstNameTextField"] > div > input[name="firstName"]'
        this.lastname = "div[data-testid='firstNameTextField'] + div > div > input[name='lastName']"  
        this.company = "div[data-testid='firstNameTextField'] + div + div > div > input[name='company']" 
        this.phone = "div[data-testid='firstNameTextField'] + div + div + div > div > input[name='phone']"
        this.address1 = "input[name=line1]"
        this.address2 = "input[name=line2]"
        this.city = "input[name=city]"
        this.state = "input[name=state]"
        this.zipCode = "input[name=zip]"
        this.country =  "input[name=country]"
        this.okBtn = "button#submitButton"
        this.billingAddressTitle = "div[data-testid=textContactInformation]"
        this.addAddressLnk = "button[class='MuiButtonBase-root MuiButton-root MuiButton-text print-hide MuiButton-textPrimary MuiButton-fullWidth']"

    }

    displayed(text:string){
        cy.get(this.addressLbl).should('have.text',text)
    }

    enterFirstname(firstname:string){
        cy.get(this.firstname).click()
        cy.get(this.firstname).clear()        
        cy.get(this.firstname).should('exist')
                              .should('be.visible')
                              .should('be.enabled')
                              .type(firstname)
                              .should('have.value', firstname)
    }

    enterLastname(lastname:string){
        cy.get(this.lastname).click()
        cy.get(this.lastname).clear()        
        cy.get(this.lastname).should('exist')
                              .should('be.visible')
                              .should('be.enabled')
                              .type(lastname)
                              .should('have.value', lastname)
    }

    enterCompany(company:string){
        cy.get(this.company).click()
        cy.get(this.company).clear()        
        cy.get(this.company).should('exist')
                              .should('be.visible')
                              .should('be.enabled')
                              .type(company)
                              .should('have.value', company)
    }

    enterPhone(phone:string){
        cy.get(this.phone).click()
        cy.get(this.phone).clear()        
        cy.get(this.phone).should('exist')
                              .should('be.visible')
                              .should('be.enabled')
                              .type(phone)
                              .should('have.value', phone)
    }

    enterAddress1(address:string){
        cy.get(this.address1).click()
        cy.get(this.address1).clear()        
        cy.get(this.address1).should('exist')
                              .should('be.visible')
                              .should('be.enabled')
                              .type(address) 
                              .wait(1000)
                              .type("{enter}")                                                                                     
                              .should('have.value', address)
    }

    enterAddress2(address:string){
        cy.get(this.address2).click({force:true})
        cy.get(this.address2).clear()        
        cy.get(this.address2).should('exist')
                              .should('be.visible')
                              .should('be.enabled')
                              .type(address)
                              .should('have.value', address)
    }

    enterCity(city:string){
        cy.get(this.city).click()
        cy.get(this.city).clear()        
        cy.get(this.city).should('exist')
                              .should('be.visible')
                              .should('be.enabled')
                              .type(city)
                              .should('have.value', city)
    }

    enterState(state:string){
        cy.get(this.state).click()
        cy.get(this.state).clear()        
        cy.get(this.state).should('exist')
                              .should('be.visible')
                              .should('be.enabled')
                              .type(state)
                              .should('have.value', state)
    }

    enterZipCode(zipCode:string){
        cy.get(this.zipCode).click()
        cy.get(this.zipCode).clear()        
        cy.get(this.zipCode).should('exist')
                              .should('be.visible')
                              .should('be.enabled')
                              .type(zipCode)
                              .should('have.value', zipCode)
    }

    enterCountry(country:string){
        cy.get(this.country).click()
        cy.get(this.country).clear()        
        cy.get(this.country).should('exist')
                              .should('be.visible')
                              .should('be.enabled')
                              .type(country)
                              .should('have.value', country)
    }

    clickOkButton(){               
        cy.get(this.okBtn).should('exist')
                              .should('be.visible')
                              .should('be.enabled')
                              .click()
    }

    VerifyBillingAddress(name:string, company:string){      
        cy.get(this.billingAddressTitle).should('have.text',name+", "+company)
    }

    clickAddAdressLink(){
        cy.get(this.addAddressLnk).should('exist')
                                  .should('be.visible')
                                  .should('be.enabled')
                                  .click()
    }
   
}

export default CustomerAddressPage