import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function MyApp() {

//     return (
//      <div>
//         <h1>hey there i am just using react</h1>
//      </div>
//     )
//   }


// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'click me to vsit google'
// } 


// const anotherElement = (
//     <a href="https://google.com" target='_blank'>Vsit google</a>
// )

// const reactElement = React.createElement(
//     'a',
//     {href: 'https://google.com',target: '_blank'},
//     'click me to visit google'
// )

createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
