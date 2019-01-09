import React from 'react'
import Form from './Form'
import './List.css'
import ListItem from './ListItem'
const CreateList = () => (
    <div className='page-container'>
        <Form />
        <div className='list-items-container'>
            <ListItem />
        </div>
    </div>
)



export default CreateList