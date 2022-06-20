import DashboardPage from "../page/DashboardPage"
import HomePage from "../page/HomePage"
import SignInPage from "../page/SignInPage"

var appURL:any
var user:any

var homePage:any = new HomePage()
var signInPage:any = new SignInPage()
var dashboardPage:any = new DashboardPage()

describe('Sign in to Katana', () => 
{  

  before(() =>{
    cy.fixture('user.json').then((userJson) =>{
      user = userJson
    })

    cy.fixture('appUrl.json').then((url) =>{
      appURL = url
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

  it('Sign in', () => {    
    signInPage.enterEmail(user.email)
    signInPage.enterPassword(user.password)
    signInPage.clickSignInBtn()            
   })  

   it('Katana dashboard is displayed', () => {    
    dashboardPage.displayed()         
   }) 

})