import React from 'react'

import {
    STATE_SHOWING_CARD
} from './../../helper/MemoryGame'

const CardGame = (props) => {

    return (
        <div 
            onClick={() => {props.handleClickCard(props.position)}}
            style={{backgroundColor:"#00F","height":"250px","width":"150px","display":"inline-block","margin":"5px 5px 5px 5px",color:"#FFF",fontSize: 15}}>
            
            {
                props.found ? 
                    props.image
                :
                (
                    props.state == STATE_SHOWING_CARD ?
                        props.image
                    :
                    "&nbsp"
                )
            }
        </div>
    )
}

export default CardGame