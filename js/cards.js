class OriginCountryListItem extends ListItem{
    constructor(attributes){
        super(attributes)
        this.element.classList.add('countryCard')
        this.element.classList.add('originCountryCard')
        return this
    }
    onClick(event){
        super.onClick(event)
        let page = event.target.closest('.page')
        let input = page.previousElementSibling.querySelector('#internationalShippingOriginInput')
        input.value = event.target.innerText
        let stack = event.target.closest('.stack')
        window[stack.id].popPage()
    }
}

class DestinationCountryListItem extends ListItem{
    constructor(attributes){
        super(attributes)
        // this.element.classList.add('countryCard')
        // this.element.classList.add('destinationCountryCard')
        return this
    }
    onClick(event){
        super.onClick(event)
        let page = event.target.closest('.page')
        let input = page.previousElementSibling.querySelector('#internationalShippingDestinationInput')
        input.value = event.target.innerText
        let stack = event.target.closest('.stack')
        window[stack.id].popPage()
    }
}
