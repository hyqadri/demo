class SignInPage{   
   
    menuBtn:string 
    signInlnk:string 
    emailTxtBx:string
    passwordTxtBx:string
    signInBtn:string
    signInLbl:string
    wrongCredentialsErrorMsg:string
    invalidCredentialsErrorMsg:string

    constructor(){
        this.menuBtn = "button[aria-label='Menu']"  
        this.signInlnk = ".header__auth > .button--text > .button__inner > .button__text" 
        this.emailTxtBx = "input[type=email]" 
        this.passwordTxtBx = "input[type=password]" 
        this.signInBtn = ".auth0-lock-submit" 
        this.signInLbl = ".auth0-lock-submit"
        this.wrongCredentialsErrorMsg = "div.auth0-global-message.auth0-global-message-error"
        this.invalidCredentialsErrorMsg = "div.auth0-lock-error-invalid-hint"

    }

    navigate(){
        cy.get(this.menuBtn).click()
        cy.get(this.signInlnk).click({force:true})         
    }

    displayed(){
        cy.get(this.signInLbl).should('have.text','Sign in')
    }

    enterEmail(email:string){
        cy.get(this.emailTxtBx).clear()
        cy.get(this.emailTxtBx).should("exist")
                               .should("be.visible")
                               .should("be.enabled")
                               .click().type(email)
                               .should('have.value',email)   
    }

    enterPassword(password:string){
        cy.get(this.passwordTxtBx).clear()
        cy.get(this.passwordTxtBx).should("exist")
                                  .should("be.visible")
                                  .should("be.enabled")
                                  .click()
                                  .type(password)
    }

    clickSignInBtn(){
        cy.get(this.signInBtn).click()         
    }

    wrongCredentialsErrorMessageDisplayed(){
        cy.get(this.wrongCredentialsErrorMsg).should('have.text','Wrong email or password.')         
    }

    invalidCredentialsErrorMessageDisplayed(){
        cy.get(this.invalidCredentialsErrorMsg).should('have.text','Email is invalid')         
    }

}

export default SignInPage