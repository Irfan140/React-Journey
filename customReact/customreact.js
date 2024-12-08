// Injects our element to the root

function customRender(reactElement,container){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    // Setting attribute to the element
    for(const prop in reactElement.props){
     domElement.setAttribute(prop,reactElement.props[prop])
    }

    // Inject the element in the container
    container.appendChild(domElement)
}


// This is how react sees its element (this is under the hood of react)
const reactElement = {
    type: 'a',
    props: { // props is an object
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to vsit google'
}

// Slecting our root
const mainContainer = document.querySelector('#root')


customRender(reactElement,mainContainer)