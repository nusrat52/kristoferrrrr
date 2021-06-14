import React from 'react'
import Layout from "../../components/Layout/Layout"
import "./style.css"

const StudentLogin = () => {

    return (
        <Layout>
            <div className="studentLogin">
                <div className="studentBox">
                    <div className="ns">
                        <p>OC</p>
                    </div>
                    <div className="fullName">
                        <p>Omar Charvez</p>
                    </div>
                    <button className="changeStuBtn">Change student</button>
                    <form>
                        <input type="password" placeholder="Your password" />
                        <button className="btn btn-primary">G0</button>
                    </form>
                </div>
            </div>
        </Layout>
    )
}

export default StudentLogin
