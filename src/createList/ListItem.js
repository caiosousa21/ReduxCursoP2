import React from 'react'
import CustomCard from '../common/CustomCard'
import CheckBox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import ListItemFooter from './ListItemFooter'

const ListItem = (props) => (
<CustomCard link='#' containerClass='list-item' footer={<ListItemFooter total={props.item.total}/>} image='http://lorempixel.com/output/cats-q-c-640-480-7.jpg'>
                <div>
                    <div className='list-item-header'>
                        <Typography variant='subtitle1' component='h2'>{props.item.product}</Typography>
                        <CheckBox />
                    </div>
                    <Typography component='p'>{props.item.quantity} {props.item.unit}</Typography>
                    <Typography component='p'>R$ {props.item.price}</Typography>
                </div>
            </CustomCard>
)

export default ListItem