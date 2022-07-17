// import { 
//     menuPage,
//     domesticShippingPage,
//     internationalShippingPage,
//     loadingPage,
//     shippingTypePage,
//     signinPage,
//     signupPage,
// } from './pages.js'

// import {
//     Page,
//     Template,
//     Splitter,
//     SplitterContent,
//     SplitterSide,
// } from './components.js'


window.addEventListener('DOMContentLoaded', onLoad, false);


function onLoad(){
    let loginPage = new LoginPage()
    window.pageStack = new PageStack({
        id: 'pageStack'
    }, loginPage)
    document.body.prepend(window.pageStack.element)
}

function onDeviceReady() {

}
