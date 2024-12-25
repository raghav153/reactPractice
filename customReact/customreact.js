function customRender(reactElement,container){

    // this code is working but not optimal

    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href',reactElement.props.href)
    // domElement.setAttribute('target',reactElement.props.target)

    // container.appendChild(domElement)

    // ========================================================================

    // now we will do same work with loop

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for (const prop in reactElement.props) {
        if(prop === 'childer') continue;

        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)

}

const reactElement = {
    type : 'a',
    props: {
        href : 'https://google.com',
        target: '_blank'
    },
    children : 'click me to visit google'
}

const mainContainer = document.querySelector('#root');

customRender(reactElement,mainContainer)