import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import DataGame from './../components/DataGame'
import Board from './../components/Board'

const Game = (props) => {

    const validateDataToPlay = () => 
    {
        if(props.name.trim() == "")
        {
            props.history.push("/")
        }
    }

    useEffect(() => {
        validateDataToPlay();
    }, [])

    const clickGoHome = () => {
        props.history.push("/")
    }

    return (
        <div style={{minHeight:"100vh"}}>
            <Container fluid>
                <DataGame name={props.name}></DataGame>
                <Board></Board>
            </Container>
            
            <div style={{backgroundColor:"#FF0",height:"100px",position:"relative",bottom:"0",width:"100%"}}>
                <button onClick={clickGoHome}>
                    IR AL HOME
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game)