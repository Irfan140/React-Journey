import { StrictMode } from 'react' // React.StrictMode helps us for optimization..if we remove it -> no error
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// I can write here the method or i can create a seperate file for it
/*
function MyApp() {

    return (
     <div>
        <h1>hey there i am just using react</h1>
     </div>
    )
  }

*/



createRoot(document.getElementById('root')).render(
  
    <App/>
  
)
