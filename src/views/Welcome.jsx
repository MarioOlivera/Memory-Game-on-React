import React,{ useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Welcome = (props) => {

    const [nameWrited,setNameWrited] = useState('')

    useEffect(() => {
        props.resetGame()
    },[])

    const onSubmit = (event) => {
        event.preventDefault()
        
        if(nameWrited.trim() != "")
        {
            props.enterName(nameWrited)
            props.history.push("/game")
        }
        else
        {
            alert("INGRESE UN NOMBRE")
        }
    }

    const handleInputName = (event) => {
        setNameWrited(event.target.value)
    }

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col lg={4}>
                    <h1 className="text-center">WELCOME</h1>

                    <Form onSubmit={onSubmit}>
                        <Form.Group>
                            <Form.Label>ENTER YOUR NAME</Form.Label>
                            <Form.Control type="text" onChange={handleInputName} value={nameWrited}/>
                        </Form.Group>
                        <Form.Group className="text-center">
                            <Button variant="primary" type="submit">
                                ENTER
                            </Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps = (state) => {
    return {
        name: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        enterName: (name) => {
            return dispatch({type: "INGRESO_USUARIO", payload: { name: name } });
        },
        resetGame: () => {
            return dispatch({type: "RESET_GAME", payload: {}})
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Welcome)