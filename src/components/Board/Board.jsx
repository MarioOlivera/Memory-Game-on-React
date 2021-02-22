import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import CardGame from './../CardGame'

import {
    generateInicialCards,
    STATE_SHOWING_CARD,
    STATE_HIDE_CARD
} from './../../helper/MemoryGame'


const Board = (props) => {

    const [cardGames,setCardGames] = useState(null)

    useEffect(() => {

        if(props.name.trim() != "")
        {
            if(cardGames == null)
            {
                console.log("ENTRA")
                setCardGames(generateInicialCards())
            }
            else
            {
                console.log("NO ENTRA")
            }

            console.log("useEffect",cardGames)
        }
    }, [cardGames])

    const handleClickCard = (position) => {

        let newCardGames = []

        for(let i = 0; i < cardGames.length; i++)
        {
            newCardGames.push(cardGames[i]);
        }

        newCardGames[position].state = STATE_SHOWING_CARD

        setCardGames(newCardGames)
    }

    return (
        <Row>
            {   cardGames ? 
                <Col lg={12} style={{textAlign:"center"}}>
                    {
                        cardGames.map((row,index) => <CardGame {...row} position={index} handleClickCard={handleClickCard}></CardGame>)
                    }
                </Col> 
                :
                null
            }
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

const mapDispatchToProps = null

export default connect(mapStateToProps,mapDispatchToProps)(Board)