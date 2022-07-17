// import { 
//     Form,
//     Input,
//     Page,
//     Splitter,
//     SplitterSide,
//     SplitterContent,
//     Tabbar,
//     Toolbar,
// } from './components.js'

// import{
//     PrimaryButton,
//     SecondaryButton
// } from './buttons.js'

///////////////////////////////////////
///////////// Login Page //////////////
///////////////////////////////////////

class LoginPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'loginPage'
        return this
    }
    onInit(event){
        super.onInit(event)
        let form = new Form({
            id: 'loginForm',
        })
        let loginUserEmailInput = new LoginUserEmailInput()
        let loginUserPasswordInput = new LoginUserPasswordInput()
        let loginButton = new LoginButton()
        let viewSignupButton = new ViewSignupButton()

        form.element.append(loginUserEmailInput.element)
        form.element.append(loginUserPasswordInput.element)
        form.element.append(loginButton.element)
        form.element.append(viewSignupButton.element)
        this.element.append(form.element)

    }
}


//////////////////////////////////////////
/////// Sing Up Page /////////////////////
//////////////////////////////////////////

class SignupPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'signupPage'
        return this
    }
    onInit(event){
        let form = new Form({
            id: 'signupForm',
        })
        let signupUserFirstNameInput = new SignupUserFirstNameInput()
        let signupUserLastNameInput = new SignupUserLastNameInput()
        let signupUserMobileCallingCodeInput = new SignupUserMobileCallingCodeInput()
        let signupUserMobileInput = new SignupUserMobileInput()
        let signupUserEmailInput = new SignupUserEmailInput()
        let signupUserPickupAddressInput = new SignupUserPickupAddressInput()
        let signupUserPasswordInput = new SignupUserPasswordInput()
        let signupConfirmUserPasswordInput = new SignupConfirmUserPasswordInput()
        let signupButton = new SignupButton()
        let viewLoginButton = new ViewLoginButton()

        form.element.append(signupUserFirstNameInput.element)
        form.element.append(signupUserLastNameInput.element)
        form.element.append(signupUserMobileCallingCodeInput.element)
        form.element.append(signupUserMobileInput.element)
        form.element.append(signupUserEmailInput.element)
        form.element.append(signupUserPickupAddressInput.element)
        form.element.append(signupUserPasswordInput.element)
        form.element.append(signupConfirmUserPasswordInput.element)
        form.element.append(signupButton.element)
        form.element.append(viewLoginButton.element)
        this.element.append(form.element)
    }
}

//////////////////////////////////////////
///////////// Splitter Page //////////////
//////////////////////////////////////////


class OverflowMenuPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'overflowMenuPage'
        return this
    }
    onInit(event){
        super.onInit(event)
        let settingsPage = new SettingsPage()
        window.overflowMenuPageStack = new PageStack({
            id: 'overflowMenuPageStack'
        }, settingsPage)
        this.element.append(window.overflowMenuPageStack.element)
    }
    onShow(event){
        super.onShow(event)
        console.log(this.element)
    }
    onHide(event){
        super.onHide(event)
    }
    onDestroy(event){
        super.onDestroy(event)
    }
}
    


//////////////////////////////////////////
/////// Loading Page /////////////////////
//////////////////////////////////////////

class LoadingPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'loadingPage'
        return this
    }
    onInit(event){
        super.onInit(event)
        let internationalButton = new PrimaryButton({
            id: 'internationalButton',
            innerText: 'International'
        })
        let domesticButton = new SecondaryButton({
            id: 'domesticButton',
            innerText: 'Domestic'
        })
        this.element.append(internationalButton.element)
        this.element.append(domesticButton.element)

    }
}


//////////////////////////////////////////
/////// Tabbar Page ///////////////
//////////////////////////////////////////


class TabbarPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'tabbarPage'
        return this
    }
    onInit(event){
        window.tabbarPageStack = new PageStack({
            id: 'tabbarPageStack',
        })

        let tabbar = new Tabbar({
            id: 'menuTabbar',
            style: {
                color: 'red',
                borderTop: '1px solid #ccc',
                background: 'white'
            }
        })

        let homePage = new HomePage()
        let tab = new Tab({
            id: 'homeTab',
            innerHTML: '<i class="zmdi zmdi-home"></i> Home',
            classList: 'active'
        },homePage)

        let shipmentsPage = new ShipmentsPage() 
        let someTab = new Tab({
            id: 'shipmentsTab',
            innerHTML: '<i class="zmdi zmdi-dropbox"></i> Shipments',
        },shipmentsPage)

        let anotherPage = new NotificationsPage() 
        let anotherTab = new Tab({
            id: 'notificationsTab',
            innerHTML: '<i class="zmdi zmdi-notifications-none"></i> Notifications',
        }, anotherPage)

        let somePage = new Page({
            innerText: 'some page'
        })
        let otherTab = new Tab({
            id: 'otherTab',
            innerHTML: '<i class="zmdi zmdi-car"></i> Other',
        }, somePage)

        let menuPage = new OverflowMenuPage()

        let overflowMenuTab = new Tab({
            id: 'overflowMenuTab',
            innerHTML: '<i class="zmdi zmdi-more"></i> More',
        }, menuPage)

        tabbarPageStack.pushPage(homePage)
        tabbar.element.append(tab.element)
        tabbar.element.append(someTab.element)
        tabbar.element.append(anotherTab.element)
        tabbar.element.append(otherTab.element)
        tabbar.element.append(overflowMenuTab.element)
        this.element.append(tabbarPageStack.element)
        this.element.append(tabbar.element)

    }
}


//////////////////////////////////////////
/////// Sign In Page /////////////////////
//////////////////////////////////////////

class SigninPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'signinPage'
        return this
    }
    onInit(event){

    }
}

//////////////////////////////////////////
/////// Signup Calling Code Countries Page //////
//////////////////////////////////////////

class SignupCallingCodeCountriesPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'signupCallingCodeCountriesPage'
        return this
    }
    onInit(event){
        let toolbar = new Toolbar({
            id: 'customToolbar',
            style: {
                background: 'red'
            }
        })
        let countriesList = new List({
            id:'callingCodeCountriesList',
        })
        for (let index = 0; index < 20; index++) {
            const element = index;
            let listItem = new CallingCodeCountryListItem({
                id: element,
                innerHTML: element
            })
            
            countriesList.element.append(listItem.element)
        }
        this.element.append(toolbar.element)
        this.element.append(countriesList.element)
    }
}


//////////////////////////////////////////
/////// International Shipping Page //////
//////////////////////////////////////////

class InternationalShippingPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'internationalShippingPage'
        return this
    }
    onInit(event){
        super.onInit(event)
        let form = new Form()
        let originCountryInput = new InternationalShippingOriginInput()
        let destinationCountryInput = new InternationalShippingDestinationInput()
        let destinationPostalCode = new Input({
            id: 'destinationPostalCode',
            placeholder: 'Postal Code'
        })
        let weightInput = new InternationalShippingWeightInput()
        let getQuoteButton = new InternationalShippingGetQuoteButton()
        let backButton = new InternationalShippingBackButton()
        form.element.append(originCountryInput.element)
        form.element.append(destinationCountryInput.element)
        form.element.append(destinationPostalCode.element)
        form.element.append(weightInput.element)
        form.element.append(getQuoteButton.element)
        form.element.append(backButton.element)
        this.element.append(form.element)
    }
}


//////////////////////////////////////////
/////// Origin Countries Page //////
//////////////////////////////////////////

class OriginCountriesPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'originCountriesPage'
        return this
    }
    onInit(event){
        super.onInit(event)
        let self = this
        let toolbar = new Toolbar({
            style:{
                background: 'red'
            }
        })
        let toolbarContent = new ToolbarContent()
        let toolbarSearchInput = new ToolbarSearchInput({
            oninput: function(e){
                let items = self.element.querySelectorAll('.listItem')
                if(e.target.value == ''){
                    Array.from(items).forEach(item=>{
                        item.classList.remove('hidden')
                    })
                }
                Array.from(items).forEach(item=>{
                    if(!item.id.toLowerCase().includes(e.target.value.toLowerCase())){
                        item.classList.add('hidden')
                    } else {
                        item.classList.remove('hidden')
                    }
                })
            }
        })
        let toolbarButton = new ToolbarBackButton({
            innerHTML: '<i class="zmdi zmdi-chevron-left"></i>',
            style: {
                color: 'white'
            },
        })
        toolbar.element.append(toolbarButton.element)
        toolbarContent.element.append(toolbarSearchInput.element)
        toolbar.element.append(toolbarContent.element)
        let logo = new ContentLoaderLogo({
                width: '100pt'
        })
        console.log(logo.element)
        let loader = new Loader({
            innerHTML: logo.element
        })
        console.log(loader)
        this.element.append(toolbar.element)
        this.element.append(loader.element)
        let list = new List({
        })
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries =>{
            for (let index = 0; index < countries.length; index++) {
                let listItem = new OriginCountryListItem({
                    id: countries[index].name.common,
                    innerText: countries[index].name.common,
                    style: {
                        color: 'red',
                    }
                })
                list.element.append(listItem.element)
            }
        }).then(()=>{
            loader.element.remove()
            this.element.append(list.element)
        })

    }

}

//////////////////////////////////////////
/////// Destination Countries Page //////
//////////////////////////////////////////

class DestinationCountriesPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'destinationCountriesPage'
        return this
    }
    onInit(event){
        super.onInit(event)
        let self = this
        let toolbar = new Toolbar({
            style:{
                background: 'red'
            }
        })
        let toolbarContent = new ToolbarContent()
        let toolbarSearchInput = new ToolbarSearchInput({
            placeholder: 'Search country name',
            oninput: function(e){
                let items = self.element.querySelectorAll('.listItem')
                if(e.target.value == ''){
                    Array.from(items).forEach(item=>{
                        item.classList.remove('hidden')
                    })
                }
                Array.from(items).forEach(item=>{
                    if(!item.id.toLowerCase().includes(e.target.value.toLowerCase())){
                        item.classList.add('hidden')
                    } else {
                        item.classList.remove('hidden')
                    }
                })
            }
        })
        let toolbarButton = new ToolbarBackButton({
            innerHTML: '<i class="zmdi zmdi-chevron-left"></i>',
            style: {
                color: 'white'
            }
        })
        toolbar.element.append(toolbarButton.element)
        toolbarContent.element.append(toolbarSearchInput.element)
        toolbar.element.append(toolbarContent.element)
        let loader = new Loader({
            innerText: 'loader'
        })
        console.log(loader)
        this.element.append(toolbar.element)
        this.element.append(loader.element)
        let list = new List({
        })
        fetch('https://restcountries.com/v3.1/all')
        .then(response => response.json())
        .then(countries =>{
            for (let index = 0; index < countries.length; index++) {
                let listItem = new DestinationCountryListItem({
                    id: countries[index].name.common,
                    innerText: countries[index].name.common,
                    style: {
                        color: 'red',
                    }
                })
                list.element.append(listItem.element)
            }
        }).then(()=>{
            loader.element.remove()
            this.element.append(list.element)
        })
    }
}

//////////////////////////////////////////
/////// Domestic Shipping Page //////
//////////////////////////////////////////

class DomesticShippingPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'domesticShippingPage'
        return this
    }
    onInit(event){
        super.onInit(event)
        let backButton = new DomesticShippingBackButton()
        this.element.append(backButton.element)

    }
}

class HomePage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'HomePage'
        return this
    }
    onInit(event){
        super.onInit(event)
        let shippingTypePage = new ShippingTypePage()
        window.homePageStack = new PageStack({
            id: 'homePageStack'
        }, shippingTypePage)
        this.element.append(window.homePageStack.element)
    }
}

class ShippingTypePage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'shippingTypePage'
        return this
    }
    onInit(event){
        super.onInit(event)
        let form = new Form({
            style:{
                height: 'calc(100vh - 40pt)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }
        })
        let paragraph = document.createElement('p')
        paragraph.innerText = 'What would you like to do ?'
        let internationalShippingButton = new InternationalShippingButton()
        let dometicShippingButton = new DomesticShippingButton()
        form.element.append(paragraph)
        form.element.append(internationalShippingButton.element)
        form.element.append(dometicShippingButton.element)
        this.element.append(form.element)

    }
}

class ShipmentsPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'shipmentsPage'
        return this
    }
    onInit(event){
        super.onInit(event)
        let self = this
        self.websocket = new WebSocket('ws://localhost:8081')
        self.websocket.onmessage = function(message){
            console.log(message)
        }
        let form = new Form({
            id: 'fileUploadForm'
        })
        let input = new Input({
            id: 'fileToPrint',
            type: 'file',
            style: {
                display: 'none'
            },
            onchange: function(e){
                selectFileButton.element.innerText = e.target.files[0].name
            }
        })
        let selectFileButton = new PrimaryButton({
            id: 'selectFileButton',
            innerText: 'Select File',
            onclick: function(e){
                input.element.click()
            }
        })
        let button = new PrimaryButton({
            id: 'uploadFileButton',
            innerText: 'Upload',
            onclick: function(e){
                e.target.innerHTML = '<i class="zmdi zmdi-more"></i>'
                setTimeout(() => {
                    e.target.innerText = 'Upload'
                }, 2000);
                self.websocket.send('text')
            }
        })
        form.element.append(input.element)
        form.element.append(selectFileButton.element)
        form.element.append(button.element)
        this.element.append(form.element)

    }
    onDestroy(event){
        super.onDestroy(event)
        this.websocket.close()
    }
}

class NotificationsPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'notificationsPage'
        return this
    }
    onInit(event){
        super.onInit(event)
        let toolbar = new Toolbar({
            style:{
                background: 'red'
            }
        })
        this.element.append(toolbar.element)

    }
}

class InternationalShippingQuotesPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'internationalShippingQuotesPage'
        return this
    }
    onInit(event){
        super.onInit(event)
        let toolbar = new Toolbar({
            style:{
                background: 'red',
                color: 'white'
            }
        })
        let toolbarButton = new ToolbarBackButton({
            innerHTML: '<i class="zmdi zmdi-chevron-left"></i>',
        })
        toolbar.element.append(toolbarButton.element)
        this.element.append(toolbar.element)

    }
}

class SettingsPage extends Page {
    constructor(attributes){
        super(attributes)
        this.element.id = 'settingsPage'
        return this
    }
    onInit(event){
        super.onInit(event)
        let form = new Form()
        let card = new Card()
        let list = new List()
        for (let index = 0; index < 5; index++) {
            const listItem = new ListItem({
                id: index,
                style:{
                    color: 'green',
                },
                onclick: function(e){
                    console.log('ali')
                }
            });
            let listIconDiv = document.createElement('div')
            listIconDiv.classList.add('listIconDiv')
            listIconDiv.innerHTML = '<i class="zmdi zmdi-home"></i>'
            listItem.element.append(listIconDiv)

            let listContentDiv = document.createElement('div')
            listContentDiv.classList.add('listContentDiv')
            listContentDiv.innerHTML = index
            listItem.element.append(listContentDiv)

            listIconDiv = document.createElement('div')
            listIconDiv.classList.add('listIconDiv')
            listIconDiv.innerHTML = '<i class="zmdi zmdi-chevron-right"></i>'
            listItem.element.append(listIconDiv)

            list.element.append(listItem.element)
        }
        card.element.append(list.element)
        form.element.append(card.element)
        card = new Card()
        list = new List()
        for (let index = 0; index < 5; index++) {
            const listItem = new ListItem({
                id: index,
            });
            let listIconDiv = document.createElement('div')
            listIconDiv.classList.add('listIconDiv')
            listIconDiv.innerHTML = '<i class="zmdi zmdi-home"></i>'
            listItem.element.append(listIconDiv)

            let listContentDiv = document.createElement('div')
            listContentDiv.classList.add('listContentDiv')
            listContentDiv.innerHTML = index
            listItem.element.append(listContentDiv)

            listIconDiv = document.createElement('div')
            listIconDiv.classList.add('listIconDiv')
            listIconDiv.innerHTML = '<i class="zmdi zmdi-chevron-right"></i>'
            listItem.element.append(listIconDiv)

            list.element.append(listItem.element)
        }
        card.element.append(list.element)
        form.element.append(card.element)
        this.element.append(form.element)

    }
}


// export { 
//     menuPage,
//     domesticShippingPage,
//     internationalShippingPage,
//     loadingPage, 
//     shippingTypePage,
//     signinPage,
//     signupPage,
// }
