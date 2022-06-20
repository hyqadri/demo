import DashboardPage from "../page/DashboardPage"
import HeaderSection from "../page/HeaderSection"
import HomePage from "../page/HomePage"
import SignInPage from "../page/SignInPage"
import UserMenu from "../page/UserMenu"

var appURL:any
var user:any

var homePage:any = new HomePage()
var signInPage:any = new SignInPage()
var dashboardPage:any = new DashboardPage()
var headerSection:any = new HeaderSection()
var userMenu:any = new UserMenu()

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
        dashboardPage.displayed()         
    })  

    it('Logout', () => {  
        headerSection.displayed()
        headerSection.clickMenuIcon()
        userMenu.clickLogoutLnk()          
    })    

    it('Katana home page is displayed', () => { 
        homePage.displayed()  
    }) 

})