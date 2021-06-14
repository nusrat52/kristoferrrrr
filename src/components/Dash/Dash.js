import React from 'react'
import Layout from "../Layout/Layout"
import classes from "./style.module.css"
import { Row, Col } from "react-bootstrap"
import data from "../../data"


const Dash = () => {
    return (
        <Layout sidebar classCode items={data} user='Ms. Richards' room='16' teacher >

            <div className={classes.Roster}>
                <h3>Roster</h3>
                <div className={classes.Table}>
                    <div className={classes.Header}>
                        <p>Room 16</p>
                        <div className={classes.ClassCode}>
                            <p>Class code: <span>H34xXf</span></p>
                        </div>
                    </div>
                    <div className={classes.Buttons}>
                        <button>Add students</button>
                        <button>Import from Google Classroom</button>
                    </div>

                    <Row>
                        <Col md={2}>e</Col>
                        <Col md={2}>e</Col>
                        <Col md={2}>e</Col>
                        <Col md={6}>e</Col>
                    </Row>

                </div>
            </div>

        </Layout>
    )
}

export default Dash
