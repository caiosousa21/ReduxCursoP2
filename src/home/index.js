import React from 'react'
import NewList from './NewList'
import './Home.css'
import List from './List'
import {connect} from 'react-redux'

import {getListTotal} from '../store/reducers/list'

const Home = (props) => (
    <div className='page-container'>
        <NewList />
        { props.list.items.length > 0 &&
            <List list={props.list.list} total={props.total}/>
        }
    </div>
)

const mapStateToProps = state =>({
    list: state.list,
    total: getListTotal(state),
});

export default connect(mapStateToProps, null)(Home);