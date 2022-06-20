import CustomerPage from "../page/CustomerPage"
import DashboardPage from "../page/DashboardPage"
import HomePage from "../page/HomePage"
import MenuList from "../page/MenuList"
import SignInPage from "../page/SignInPage"

var user:any
var appURL:any
var customer:any

var homePage:any = new HomePage()
var signInPage:any = new SignInPage()
var dashboardPage:any = new DashboardPage()
var menuList:any = new MenuList()
var customerPage:any = new CustomerPage()

describe('Add Customer', () => 
{  

  before(() =>{
    cy.fixture('user.json').then((userJson) =>{
      user = userJson
    })

    cy.fixture('appUrl.json').then((url) =>{
      appURL = url
    })

    cy.fixture('customer.json').then((customerJson) =>{
      customer = customerJson
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
    dashboardPage.displayed()         
  }) 
   
  it('Open menu list', () => {    
      menuList.open()       
  })

  it('Navigate to Customer screen', () => {    
    customerPage.navigate()  
    customerPage.displayed()     
  })

  it('Check customer not saved status', () => {      
    customerPage.checkNotSavedStatus()      
  })

})