import HomePage from "../page/HomePage"
import SignInPage from "../page/SignInPage"

var appURL:any
var user:any

var homePage:any = new HomePage()
var signInPage:any = new SignInPage()

describe('User cannot sign in with invalid credentials', () => 
{  

  before('Load test data',() =>{

    cy.fixture('appUrl.json').then((url) =>{
        appURL = url
      })

    cy.fixture('user.json').then((userJson) =>{
     user = userJson
    })  
   
  })
    
  it('Navigate to home page', () => {    
    homePage.navigate(appURL.url) 
    homePage.displayed()   
  })  

  it('Navigate to Sign in screen', () => {   
    signInPage.navigate() 
    signInPage.displayed()          
  })   

  it('Sign in with incorrect password', () => {    
    signInPage.enterEmail(user.email)
    signInPage.enterPassword(user.wrongPassword)
    signInPage.clickSignInBtn()
    signInPage.wrongCredentialsErrorMessageDisplayed()
   })  

   it('Sign in with invalid email', () => {    
    signInPage.enterEmail(user.invalidEmail)
    signInPage.enterPassword(user.password)
    signInPage.clickSignInBtn()
    signInPage.invalidCredentialsErrorMessageDisplayed()
   })

})