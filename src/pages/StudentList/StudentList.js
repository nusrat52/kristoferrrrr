import React from 'react'
import Layout from "../../components/Layout/Layout"
import { Container, Row, Col } from "react-bootstrap"
import "./style.css"

const StudentList = () => {
    return (
        <Layout >
            <div class="teacherClass">
                <h1>Mrs. Richard’s Class</h1>
                <button>Change Teacher</button>
            </div>

            <Container>
                <Row style={{ marginTop: "5.5rem" }}>
                    <Col md={3} xs={12}>
                        <div class="box">
                            <div class="ns">
                                <p>OC</p>
                            </div>
                            <div class="fullName">
                                <p>Omar <br /> Charvez</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={3} xs={12}>
                        <div class="box">
                            <div class="ns">
                                <p>OC</p>
                            </div>
                            <div class="fullName">
                                <p>Omar <br /> Charvez</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={3} xs={12}>
                        <div class="box">
                            <div class="ns">
                                <p>OC</p>
                            </div>
                            <div class="fullName">
                                <p>Omar <br /> Charvez</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={3} xs={12}>
                        <div class="box">
                            <div class="ns">
                                <p>OC</p>
                            </div>
                            <div class="fullName">
                                <p>Omar <br /> Charvez</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={3} xs={12}>
                        <div class="box">
                            <div class="ns">
                                <p>OC</p>
                            </div>
                            <div class="fullName">
                                <p>Omar <br /> Charvez</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={3} xs={12}>
                        <div class="box">
                            <div class="ns">
                                <p>OC</p>
                            </div>
                            <div class="fullName">
                                <p>Omar <br /> Charvez</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={3} xs={12}>
                        <div class="box">
                            <div class="ns">
                                <p>OC</p>
                            </div>
                            <div class="fullName">
                                <p>Omar <br /> Charvez</p>
                            </div>
                        </div>
                    </Col>

                    <Col md={3} xs={12}>
                        <div class="box">
                            <div class="ns">
                                <p>OC</p>
                            </div>
                            <div class="fullName">
                                <p>Omar <br /> Charvez</p>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </Layout>
    )
}

export default StudentList
