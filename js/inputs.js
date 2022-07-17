class LoginUserEmailInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'LoginUserEmailInput'
        this.element.placeholder = 'Enter Email Address'
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log(event.target.value)
    }
}

class LoginUserPasswordInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'loginUserPasswordInput'
        this.element.placeholder = 'Enter Password'
        this.element.type = 'password'
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log(event.target.value)
    }
}

class SignupUserNameInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'signupUserNameInput'
        this.element.placeholder = 'Full Name'
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log(event.target.value)
    }
}
class SignupUserFirstNameInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'signupUserFirstNameInput'
        this.element.classList.add('halfWidth')
        this.element.placeholder = 'First Name'
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log(event.target.value)
    }
}
class SignupUserLastNameInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'signupUserLastNameInput'
        this.element.classList.add('halfWidth')
        this.element.placeholder = 'Last Name'
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log(event.target.value)
    }
}

class SignupUserEmailInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'signupUserEmailInput'
        this.element.placeholder = 'Email Address'
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log(event.target.value)
    }
}

class SignupUserMobileInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'SignupUserMobileInput'
        this.element.classList.add('quarterToFullWidth')
        this.element.placeholder = 'Mobile Number'
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log(event.target.value)
    }
}
class SignupUserMobileCallingCodeInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'signupUserMobileCallingCodeInput'
        this.element.classList.add('quarterWidth')
        this.element.placeholder = '+20'
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log(event.target.value)
    }
    onFocus(event){
        super.onFocus(event)
        window.pageStack.pushPage(new SignupCallingCodeCountriesPage())
    }

}
class SignupUserPickupAddressInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'signupUserPickupAddressInput'
        this.element.placeholder = 'Pickup Address'
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log(event.target.value)
    }
}

class SignupUserPasswordInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'signupUserPasswordInput'
        this.element.placeholder = 'Password'
        this.element.type = 'password'
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log(event.target.value)
    }
}

class SignupConfirmUserPasswordInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'signupConfirmUserPasswordInput'
        this.element.placeholder = 'Confirm Password'
        this.element.type = 'password'
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log(event.target.value)
    }
}

class InternationalShippingOriginInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'internationalShippingOriginInput'
        this.element.placeholder = 'Origin Country'
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log(event.target.value)
    }
    onFocus(event){
        super.onFocus(event)
        let stack = event.target.closest('.stack')
        window[stack.id].pushPage(new OriginCountriesPage())
    }

}
class InternationalShippingDestinationInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'internationalShippingDestinationInput'
        this.element.placeholder = 'Destination Country'
        return this
    }
    onInput(event){
        super.onInput(event)
    }
    onFocus(event){
        super.onFocus(event)
        let stack = event.target.closest('.stack')
        window[stack.id].pushPage(new DestinationCountriesPage())

    }

}

class InternationalShippingWeightInput extends Input{
    constructor(attributes){
        super(attributes)
        this.element.id = 'internationalShippingWeightInput'
        this.element.placeholder = 'Weight'
        this.element.type = 'number'
        this.element.step = '0.01'
        return this
    }
    onInput(event){
        super.onInput(event)
        console.log(event.target.value)
    }

}
