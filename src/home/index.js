import React from 'react'
import NewList from './NewList'
import './Home.css'
import List from './List'

const Home = () => (
    <div className='page-container'>
        <NewList />
        <List />
    </div>
)

export default Home;