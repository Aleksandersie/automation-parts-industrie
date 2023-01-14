import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// interface IAppContext {
//
// }

// export const appContext = React.createContext<IAppContext>(null)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    // <appContext.Provider value={{ }}>
    <React.StrictMode>
        <App />
    </React.StrictMode>
    // </appContext.Provider>
)
