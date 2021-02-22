import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const DataGame = (props) => {

    return (
        <div>
            <Row>
                <Col lg={12}>
                    <h3 className="text-center">{props.name}</h3>
                </Col> 
            </Row>
            <Row>
                <Col lg={4} md={4} sm={4}>
                    <h4 className="text-center">Intentos <span className="text-danger">40</span></h4>
                </Col> 
                <Col lg={4} md={4} sm={4}>
                    <h4 className="text-center">Puntos <span className="text-success">120</span>  </h4>
                </Col> 
                <Col lg={4} md={4} sm={4}>
                    <h4 className="text-center">Tiempo de partida <span className="text-danger">00:20</span>  </h4>
                </Col> 
            </Row>
        </div>
    )
}

export default DataGame