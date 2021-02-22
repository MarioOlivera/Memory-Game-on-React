import React from 'react'

import {
    STATE_SHOWING_CARD
} from './../../helper/MemoryGame'

const CardGame = (props) => {

    return (
        <div 
            onClick={() => {props.handleClickCard(props.position)}}
            style={{"height":"250px","width":"150px","display":"inline-block","margin":"5px 5px 5px 5px",color:"#FFF",fontSize: 15}}>
            
            {
                props.found ? 
                    <img src={"assets/img/"+props.image}></img>
                :
                (
                    props.state == STATE_SHOWING_CARD ?
                        <img src={"assets/img/"+props.image}></img>
                    :
                    <img src="assets/img/carta-parte-trasera.jpg"/>
                )
            }
        </div>
    )
}

export default CardGame