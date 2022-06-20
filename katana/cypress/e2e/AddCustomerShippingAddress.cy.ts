import CustomerAddressPage from "../page/CustomerAddressPage"
import CustomerPage from "../page/CustomerPage"
import DashboardPage from "../page/DashboardPage"
import HeaderSection from "../page/HeaderSection"
import HomePage from "../page/HomePage"
import MenuList from "../page/MenuList"
import SignInPage from "../page/SignInPage"
import UserMenu from "../page/UserMenu"

var user:any
var appURL:any
var customer:any

var homePage:any = new HomePage()
var signInPage:any = new SignInPage()
var dashboardPage:any = new DashboardPage()
var menuList:any = new MenuList()
var customerPage:any = new CustomerPage()
var customerAddressPage = new CustomerAddressPage()

describe('Add customer with shipping address', () => 
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

  it('Add customer', () => {   
    customerPage.enterFirstname(customer.firstname) 
    customerPage.enterLastname(customer.lastname)
    customerPage.enterCompany(customer.company)
    customerPage.enterEmail(customer.email)
    customerPage.enterPhone(customer.phone) 
    customerPage.enterComment(customer.comment)
    customerPage.clickCustomerNameLabel()
    customerPage.checkSavedStatus()           
  })

  it('Add billing address', () => {     
    customerPage.clickCustomerAddressTextBox()
    customerAddressPage.displayed('Billing Address') 
    customerAddressPage.enterFirstname(customer.firstname) 
    customerAddressPage.enterLastname(customer.lastname)
    customerAddressPage.enterCompany(customer.company)   
    customerAddressPage.enterPhone(customer.phone)     
    customerAddressPage.enterAddress1(customer.address1) 
    customerAddressPage.clickOkButton()
    customerAddressPage.VerifyBillingAddress(customer.firstname+" "+customer.lastname,customer.company) 
    customerPage.checkSavedStatus()            
  })

  it('Add shipping address', () => {     
    customerAddressPage.clickAddAdressLink()
    customerAddressPage.displayed('Shipping Address')   
    customerAddressPage.enterFirstname(customer.firstname) 
    customerAddressPage.enterLastname(customer.lastname)
    customerAddressPage.enterCompany(customer.shippingCompany)   
    customerAddressPage.enterPhone(customer.shippingPhone)     
    customerAddressPage.enterAddress1(customer.shippingAddress) 
    customerAddressPage.clickOkButton()   
    customerPage.checkSavedStatus()                  
  })
  

})