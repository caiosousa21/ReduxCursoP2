import React from 'react'
import CustomCard from '../common/CustomCard'
import CheckBox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import ListItemFooter from './ListItemFooter'

const ListItem = () => (
<CustomCard link='#' containerClass='list-item' footer={<ListItemFooter/>} image='http://lorempixel.com/output/cats-q-c-640-480-7.jpg'>
                <div>
                    <div className='list-item-header'>
                        <Typography variant='subtitle1' component='h2'>Café</Typography>
                        <CheckBox />
                    </div>
                    <Typography component='p'>1 unidade</Typography>
                    <Typography component='p'>R$ 10.00</Typography>
                </div>
            </CustomCard>
)

export default ListItem