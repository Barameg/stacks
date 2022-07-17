// import { Button } from "./components.js";

class PrimaryButton extends Button {
    constructor(attributes){
        super(attributes)
        this.element.classList.add('primaryButton')
        return this
    }
    onClick(event){
        super.onClick(event)
    }
}

class SecondaryButton extends Button{
    constructor(attributes){
        super(attributes)
        this.element.classList.add('secondaryButton')
        return this
    }
    onClick(event){
        super.onClick(event)
    }
}

class LoginButton extends PrimaryButton{
    constructor(attributes){
        super(attributes)
        this.element.id = 'loginButton'
        this.element.innerText = 'Login'
        return this
    }
    onClick(event){
        super.onClick(event)
        let stack = event.target.closest('.stack')
        window[stack.id].resetToPage(new TabbarPage())
    }

}

class ViewSignupButton extends SecondaryButton{
    constructor(attributes){
        super(attributes)
        this.element.id = 'viewSignupButton'
        this.element.innerText = 'Signup'
        return this
    }
    onClick(event){
        super.onClick(event)
        let stack = event.target.closest('.stack')
        window[stack.id].pushPage(new SignupPage())
    }

}

class SignupButton extends PrimaryButton{
    constructor(attributes){
        super(attributes)
        this.element.id = 'signupButton'
        this.element.innerText = 'Confirm'
        return this
    }
    onClick(event){
        super.onClick(event)
        let stack = event.target.closest('.stack')
        window[stack.id].resetToPage(new TabbarPage())
    }

}

class ViewLoginButton extends SecondaryButton{
    constructor(attributes){
        super(attributes)
        this.element.id = 'viewLoginButton'
        this.element.innerText = 'Login'
        return this
    }
    onClick(event){
        super.onClick(event)
        let stack = event.target.closest('.stack')
        window[stack.id].popPage()
    }

}

class InternationalShippingButton extends PrimaryButton{
    constructor(attributes){
        super(attributes)
        this.element.id = 'internationalShippingButton'
        this.element.innerText = 'International Shipping'
        return this
    }
    onClick(event){
        super.onClick(event)
        let stack = event.target.closest('.stack')
        window[stack.id].pushPage(new InternationalShippingPage())
    }

}

class DomesticShippingButton extends SecondaryButton{
    constructor(attributes){
        super(attributes)
        this.element.id = 'dometicShippingButton'
        this.element.innerText = 'Domestic Shipping'
        return this
    }
    onClick(event){
        super.onClick(event)
        let stack = event.target.closest('.stack')
        window[stack.id].pushPage(new DomesticShippingPage())
    }

}

class InternationalShippingBackButton extends SecondaryButton{
    constructor(attributes){
        super(attributes)
        this.element.id = 'internationalShippingBackButton'
        this.element.innerText = 'Back'
        return this
    }
    onClick(event){
        super.onClick(event)
        let stack = event.target.closest('.stack')
        window[stack.id].popPage()
    }

}

class InternationalShippingGetQuoteButton extends PrimaryButton{
    constructor(attributes){
        super(attributes)
        this.element.id = 'internationalShippingGetQuoteButton'
        this.element.innerText = 'Get Quote'
        return this
    }
    onClick(event){
        super.onClick(event)
        let stack = event.target.closest('.stack')
        window[stack.id].pushPage(new InternationalShippingQuotesPage())
    }

}

class DomesticShippingBackButton extends SecondaryButton{
    constructor(attributes){
        super(attributes)
        this.element.id = 'domesticShippingBackButton'
        this.element.innerText = 'Back'
        return this
    }
    onClick(event){
        super.onClick(event)
        let stack = event.target.closest('.stack')
        window[stack.id].popPage()
    }

}


// export {
//     PrimaryButton,
//     SecondaryButton
// }