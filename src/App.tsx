import React from 'react'
import TopStrip from './components/TopStrip/TopStrip'
import './app.module.scss'
import TopNavBar from './components/TopNavBar/TopNavBar'
import TopImg from './components/TopImg/TopImg'
import SearchArea from './components/SearchArea/SearchArea'

function App() {
    return (
        <div>
            <TopStrip />
            <TopNavBar />
            <TopImg />
            <SearchArea />
        </div>
    )
}

export default App
