import React from 'react'
import Form from './Form'
import './List.css'
import ListItem from './ListItem'

import { connect } from 'react-redux'
import { Creators as ListActions } from '../store/actions/list'
import { bindActionCreators } from 'redux'

class CreateList extends React.Component {
    addProduct = (product, list) => {
        this.props.addProduct(product, list)
    }
    render() {
        return (
            <div className='page-container'>
                <Form addProduct={this.addProduct}/>
                <div className='list-items-container'>
                    <ListItem />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    list: state.list
})

const mapDispatchToProps = dispatch => bindActionCreators(ListActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CreateList)