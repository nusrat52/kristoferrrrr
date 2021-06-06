import React from 'react'

import Logo from "./logo"


function Signin() {
    return (
        <div className="signin">
                <Logo className="signin__logo" />

            <div className="signin__comp1">
                <div className="sgnin__wrapper">
                <div className="signin__main">
                        <h2 className="signin__header">
                            Teachers
                    </h2>
                        <p className="signin__text">Log in to your account</p>
                        <form className="signin__form" >

                            <input placeholder="Email Adress" type="email" className="signin__input input--alt" />
                            <input placeholder="Password" type="password" className="signin__input input--top" />

                            <button className="signin__btn" >Log in</button>
                        </form>
                    </div>
                    </div>
            </div>
            <div className="signin__comp2">
            <div className="sgnin__wrapper">
                <div className="signin__main pt-50">
                        <h2 className="signin__header">
                            Teachers
                    </h2>
                        <p className="signin__text">Log in to your account</p>
                        <form className="signin__form" >

                            <input placeholder="Your Teacher's Username" type="text" className="signin__input " />

                            <button className="signin__btn" >Log in</button>
                        </form>
                    </div>
                    </div>

                </div>
        </div>
    )
}

export default Signin
