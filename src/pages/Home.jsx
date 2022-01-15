import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Sliderh from '../components/Sliderh'

const Home = () => {
    return (
        <div>
            <Announcement/>
            <Navbar/>
            <Sliderh/>
            <Categories/>
        </div>
    )
}

export default Home
