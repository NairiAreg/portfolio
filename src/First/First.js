import React from 'react';
import "./First.scss";
import avatar from "../Img/nairi.jpg";
import ScrollAnimation from 'react-animate-on-scroll';


export default function First() {
    return (
        <div id="first" className="d-flex justify-content-center align-items-center">
            <div className="cover">
                <div className="book">
                    <label htmlFor="page-1" className="book__page book__page--1 d-flex justify-content-center">
                        <img src={avatar} alt="" />
                    </label>

                    <label htmlFor="page-2" className="book__page book__page--4">
                        <div className="page__content  d-flex flex-column justify-content-center align-items-center">
                            <h1 className="page__content-title">Contacts</h1>
                            <table className="page__content-table">
                                <tbody>
                                    <tr>
                                        <td align="left">Email</td><td align="left">hnairiareg@gmail.com</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Tel.</td><td align="left">055-54-77-64</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Tel. 2</td><td align="left">093-54-77-64</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Facebook</td><td align="left">fb.com/Nairi2001</td>
                                    </tr>
                                    <tr>
                                        <td align="left">Instagram</td><td align="left">@Nairi007</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="page__number">
                                <button onClick={() => document.getElementsByClassName("controls")[0].lastChild.click()} className="btn">My Skills</button>
                            </div>
                        </div>
                    </label>

                    {/* <!-- Resets the page --> */}
                    <input type="radio" name="page" id="page-1" />

                    {/* <!-- Goes to the second page --> */}
                    <input type="radio" name="page" id="page-2" />
                    <label className="book__page book__page--2">
                        <div className="book__page-front">
                            <div className="page__content">
                                <h1 className="page__content-book-title">portfolio</h1>
                                <ScrollAnimation animateIn="bounceInUp"
                                duration={2}>
                                    <h2 className="page__content-author">Nairi Areg</h2>
                                </ScrollAnimation>

                                <p className="page__content-credits">
                                    Profession
          <span>Web Developer</span>
                                </p>

                                <p className="page__content-credits">
                                    Content
                                        <span>Biography</span>
                                </p>

                                <div className="page__content-copyright">
                                    <button className="btn mb-3">Click</button>
                                    <p>To turn the page</p>
                                </div>
                            </div>
                        </div>
                        <div className="book__page-back">
                            <div className="page__content">
                                <h1 className="page__content-title">BIOGRAPHY</h1>

                                <div className="page__content-text">
                                    <p>Hello my name is Nairi I am a web developer. I am programming since 2018-2019. I am looking for a job and for new opportunities to grow professionally by learning and practising, for me good relations between workmates is the most important thing and of course I will do everything to make it so :D</p>

                                </div>
                            </div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    )
}
