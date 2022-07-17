class PageStack {
    constructor(attributes={}, page){
        this.pages = []
        this.element = document.createElement('div')
        for(const[ key, value] of Object.entries(attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else {
                this.element[key] = value
            }
        }
        this.element.classList.add('stack')
        if(page!= undefined){
            this.pushPage(page)
        }
        return this
    }

    pushPage(page, options){
        this.pages.forEach(stackPage=>{
            if(stackPage.element.id == page.element.id){
                throw 'Page already exist'
            }
        })

        // dispatch page initEvent
        page.element.dispatchEvent(page.initEvent)
        
        // remove activePage active class
        if(this.activePage){

            this.activePage.element.dispatchEvent(this.activePage.hideEvent)

            this.activePage.element.classList.remove('active')
        }

        this.activePage = page

        // adds active class to the page element
        page.element.classList.add('active')

        // appends page element to the stack element
        this.element.append(page.element)

        // adds page to the stack object
        this.pages.push(page)

        // dispatch showEvent
        page.element.dispatchEvent(page.showEvent)

    }

    popPage(){

        if(this.pages.length < 2){
            throw 'Page stack can not be empty'
        }

        let previousSibling = this.activePage.element.previousSibling
        
        this.activePage.element.remove()

        for(const stackPage of this.pages){

            if( previousSibling && previousSibling.id == stackPage.element.id ){
                
                this.activePage.element.dispatchEvent(this.activePage.destroyEvent)

                this.activePage = stackPage

                this.activePage.element.dispatchEvent(this.activePage.showEvent)

                stackPage.element.classList.add('active')

                this.pages.pop()

                break

            }

        }

    }

    resetToPage(page, options){
        if(this.activePage){
            this.activePage.element.dispatchEvent(this.activePage.destroyEvent)
        }
        this.pages = []

        let stackPages = this.element.querySelectorAll('.page')

        Array.from(stackPages).forEach(stackPage=>{
            stackPage.remove()
        })
        
        this.activePage = page

        page.element.dispatchEvent(page.initEvent)

        this.pages.push(page)
        page.element.classList.add('active')
        this.element.append(page.element)

        page.element.dispatchEvent(page.showEvent)

    }

    getActivePage(){
        return this.activePage;
    }

}

class Page {
    constructor(
        attributes={}, 
    ){
        this.attributes = attributes
        this.initEvent = new Event('init')
        this.showEvent = new Event('show')
        this.hideEvent = new Event('hide')
        this.destroyEvent = new Event('destroy')

        this.element = document.createElement('div')

        this.element.addEventListener('init', this.onInit.bind(this), false)

        this.element.addEventListener('show', this.onShow.bind(this), false)

        this.element.addEventListener('hide', this.onHide.bind(this), false)

        this.element.addEventListener('destroy', this.onDestroy.bind(this), false)

        return this
    }
    onInit(event){
        console.log(event.target.id, ' OnInit logic')
        for(const[ key, value] of Object.entries(this.attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else {
                this.element[key] = value
            }
        }
        this.element.classList.add('page')

    }
    onShow(event){
        console.log(event.target.id, ' OnShow logic')
    }
    onHide(event){
        console.log(event.target.id, ' OnHide logic')
    }
    onDestroy(event){
        this.element.innerHTML = ''
        console.log(this)
        console.log(event.target.id, ' OnDestroy logic')
    }

}

class Loader{
    constructor(attributes={}){
        this.element = document.createElement('div')
        for(const[ key, value] of Object.entries(attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else {
                this.element[key] = value
            }
        }
        this.element.classList.add('contentLoader')
        return this
    }
}

class Card {
    constructor(attributes={}){
        this.element = document.createElement('div')
        for(const[ key, value] of Object.entries(attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else {
                this.element[key] = value
            }
        }
        this.element.addEventListener('click', this.onClick.bind(this), false)
        this.element.classList.add('card')
        return this
    }
    onClick(event){
        // console.log(this)
    }
}


class List {
    constructor(attributes={}){
        this.element = document.createElement('div')
        for(const[ key, value] of Object.entries(attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else {
                this.element[key] = value
            }
        }
        this.element.classList.add('list')
        return this
    }
}

class ListItem {
    constructor(attributes={}){
        this.element = document.createElement('div')
        for(const[ key, value] of Object.entries(attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else {
                this.element[key] = value
            }
        }
        this.element.addEventListener('click', this.onClick.bind(this))
        this.element.classList.add('listItem')
        return this
    }
    onClick(event){
        console.log('original')
    }
}

class CallingCodeCountryListItem extends ListItem {
    constructor(attributes={}){
        super(attributes)
        this.element.classList.add('callingCodeCountry')
        return this
    }
    onClick(event){
        super.onClick(event)
        let stack = event.target.closest('.stack')
        window[stack.id].popPage()
    }
}

class Toolbar {
    constructor(attributes={}){
        this.element = document.createElement('div')
        for(const[ key, value] of Object.entries(attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else {
                this.element[key] = value
            }
        }
        this.element.classList.add('toolbar')
        return this
    }
}

class ToolbarButton{
    constructor(attributes={}){
        this.element = document.createElement('div')
        for(const[ key, value] of Object.entries(attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else {
                this.element[key] = value
            }
        }
        this.element.addEventListener('click', this.onClick.bind(this), false)
        this.element.classList.add('toolbarButton')
        return this
    }
    onClick(event){
        console.log('test')
    }
}

class ToolbarContent {
    constructor(attributes={}){
        this.element = document.createElement('div')
        for(const[ key, value] of Object.entries(attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else {
                this.element[key] = value
            }
        }
        this.element.classList.add('toolbarContent')
        return this
    }
}


class ToolbarBackButton extends ToolbarButton{
    constructor(attributes={}){
        super(attributes)
        this.element.classList.add('toolbarBackButton')
        return this
    }
    onClick(event){
        super.onClick(event)
        let stack = event.target.closest('.stack')
        console.log(console.log(stack))
        window[stack.id].popPage()
    }
}

class Tabbar {
    constructor(attributes={}){
        this.element = document.createElement('div')
        this.element.classList.add('tabbar')
        for(const[ key, value] of Object.entries(attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else {
                this.element[key] = value
            }
        }
        return this
    }
}
class Tab {
    constructor(attributes={}, page){
        this.element = document.createElement('div')
        for(const[ key, value] of Object.entries(attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else if (key == 'icon'){

            } else {
                this.element[key] = value
            }
        }
        this.page = page
        this.element.classList.add('tab')
        this.element.addEventListener('click', this.onClick.bind(this), false)
        return this
    }
    onClick(event){
        let activeTab = document.querySelector('.tab.active')
        activeTab.classList.remove('active')
        this.element.classList.add('active')
        let stackId = event.target.parentNode.previousSibling.id
        window[stackId].resetToPage(this.page)
    }
}
class Form {
    constructor(attributes={}){
        this.element = document.createElement('form')
        for(const[ key, value] of Object.entries(attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else {
                this.element[key] = value
            }
        }
        return this
    }
}

class Input {
    constructor(attributes={}){
        this.element = document.createElement('input')
        for(const[ key, value] of Object.entries(attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else {
                this.element[key] = value
            }
        }
        this.element.addEventListener('input', this.onInput.bind(this), false)
        this.element.addEventListener('focus', this.onFocus.bind(this), false)
        this.element.addEventListener('blur', this.onBlur.bind(this), false)
        this.element.addEventListener('click', this.onClick.bind(this), false)
        return this
    }
    onInput(event){
        console.log('default input ')
    }
    onFocus(event){
        console.log('focused')
    }
    onBlur(event){
        console.log('blured')
    }
    onClick(event){
        console.log('clicked')
    }
}

class ToolbarSearchInput extends Input{
    constructor(attributes={}){
        super(attributes)
        this.element.classList.add('toolbarSearchInput')
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log('search')
    }
}

class Button {
    constructor(attributes={}){
        this.element = document.createElement('button')
        for(const[ key, value] of Object.entries(attributes)){
            if(key == 'style'){
                for(const [property, propertyValue] of Object.entries(value)){
                    this.element[key][property] = propertyValue
                }
            } else {
                this.element[key] = value
            }
        }
        this.element.addEventListener('click', this.onClick.bind(this), false)
        return this
    }
    onClick(event){
        event.preventDefault()
    }
}

class Logo {
    constructor(){
        this.element = `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="24" viewBox="0 0 22 24" fill="none">
        <path d="M4.8222 7.48889L11.1778 3.44444L17.5333 7.48889V14.4222L11.1778 18.3222L4.8222 14.4222V7.48889Z" stroke="black" stroke-width="2"/>
        <path d="M17.3889 7.48898L11.1778 11.1001L4.96667 7.48898" stroke="black" stroke-width="2"/>
        <path d="M11.0333 11.2444V17.8888" stroke="black" stroke-width="2"/>
        <path d="M7.13333 2L1.5 5.32222V12.1111" stroke="#FF0000" stroke-width="2" stroke-linecap="square"/>
        <path d="M15.3667 2L21 5.32222V12.1111" stroke="#FF0000" stroke-width="2" stroke-linecap="square"/>
        <path d="M17.0366 18.9885L11.3428 22.206L5.46343 18.8116" stroke="#FF0000" stroke-width="2" stroke-linecap="square"/>
        </svg>`
        return this
    }
}

class ContentLoaderLogo {
    constructor(){
        this.element = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="80" viewBox="0 0 22 24" fill="none">
        <path d="M4.8222 7.48889L11.1778 3.44444L17.5333 7.48889V14.4222L11.1778 18.3222L4.8222 14.4222V7.48889Z" stroke="black" stroke-width="2"/>
        <path d="M17.3889 7.48898L11.1778 11.1001L4.96667 7.48898" stroke="black" stroke-width="2"/>
        <path d="M11.0333 11.2444V17.8888" stroke="black" stroke-width="2"/>
        <path d="M7.13333 2L1.5 5.32222V12.1111" stroke="#FF0000" stroke-width="2" stroke-linecap="square"/>
        <path d="M15.3667 2L21 5.32222V12.1111" stroke="#FF0000" stroke-width="2" stroke-linecap="square"/>
        <path d="M17.0366 18.9885L11.3428 22.206L5.46343 18.8116" stroke="#FF0000" stroke-width="2" stroke-linecap="square"/>
        </svg>`
        return this
    }
}


// export { 
//     Button,
//     Form,
//     Input,
//     Logo,
//     Page,
//     Splitter,
//     SplitterSide,
//     SplitterContent,
//     Template,
//     Tabbar,
//     Toolbar,
// }