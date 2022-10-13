import React, { useState } from 'react'
import './Second.scss'
import ScrollAnimation from 'react-animate-on-scroll'
import html5 from '../Img/html5.png'
import css3 from '../Img/css3.png'
import sass from '../Img/sass.png'
import bootstrap from '../Img/bootstrap.png'
import javascript from '../Img/javascript.png'
import jquery from '../Img/jquery.png'
import react from '../Img/react.png'
import redux from '../Img/redux.png'
import python from '../Img/python.png'
import php from '../Img/php.png'
import asp from '../Img/asp.png'
import csharp from '../Img/csharp.png'
import cplusplus from '../Img/cplusplus.png'
import bitrix from '../Img/bitrix.png'
import wordpress from '../Img/wordpress.png'
import firebase from '../Img/firebase.png'
import laravel from '../Img/laravel.png'
import ionic from '../Img/ionic.png'
import node from '../Img/node.png'
import aws from '../Img/aws.png'

export default function Second() {
  const [modalStyle, setmodalStyle] = useState({})
  const [modalText, setModalText] = useState('')
  return (
    <div
      id="second"
      className="d-flex flex-column align-items-center justify-content-center p-5"
    >
      <div style={modalStyle} className="modall">
        <div className="modalCover" onClick={() => setmodalStyle({})}></div>
        <div className="modalContent d-flex flex-column justify-content-center align-items-center">
          <h4>
            {' '}
            <pre>{modalText}</pre>
          </h4>
          <button onClick={() => setmodalStyle({})} className="btn btn-dark">
            Close
          </button>
        </div>
      </div>
      <h1>My Skills</h1>
      <hr />
      <div className="d-flex flex-column align-items-center">
        <h2 className="mb-3">Programming</h2>
        <div className="d-flex w-100 justify-content-center flex-wrap">
          <ScrollAnimation animateIn="flipInY" duration={3} delay={100}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`What did the HTML coding dog say?
Href Href!`)
              }}
            >
              <img src={html5} alt="html5" className="glow" />
              <img src={html5} alt="html5" />
              <div className="skillTitle">
                <h3>HTML5</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={200}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`.illuminati {
    position: absolute;
    visibility: hidden;
    }`)
              }}
            >
              <img src={css3} alt="css3" className="glow" />
              <img src={css3} alt="css3" />
              <div className="skillTitle">
                <h3>CSS3</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={300}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(
                  `When SASS came out, JavaScript developers were very sad :(`,
                )
              }}
            >
              <img src={sass} alt="sass" className="glow" />
              <img src={sass} alt="sass" />
              <div className="skillTitle">
                <h3>SASS</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={400}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`How many boomers does it take to screw in a lightbulb?
                        They won’t do it, they’re retired. Those lazy millennial lightbulbs need to pull themselves up by their bootstraps and screw themselves in.`)
              }}
            >
              <img src={bootstrap} alt="bootstrap" className="glow" />
              <img src={bootstrap} alt="bootstrap" />
              <div className="skillTitle">
                <h3>Bootstrap</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={500}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`//What is this?
class Sparta{
    this
}`)
              }}
            >
              <img src={javascript} alt="javascript" className="glow" />
              <img src={javascript} alt="javascript" />
              <div className="skillTitle">
                <h3>JavaScript</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={600}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`-How to add 1 number to another?
-You should definitely use jQuery`)
              }}
            >
              <img src={jquery} alt="jquery" className="glow" />
              <img src={jquery} alt="jquery" />
              <div className="skillTitle">
                <h3>jQuery</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={700}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`That's right, I use react

R - I can't
E - Setup
A - Node environment
C - Help
T - `)
              }}
            >
              <img src={react} alt="react" className="glow" />
              <img src={react} alt="react" />
              <div className="skillTitle">
                <h3>React js</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={800}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`Say react state management
                        
ONE MORE TIME!`)
              }}
            >
              <img src={redux} alt="redux" className="glow" />
              <img src={redux} alt="redux" />
              <div className="skillTitle">
                <h3>Redux js</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={900}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`Writes 10 line python script
                        
Eliminates the need for 5 jobs`)
              }}
            >
              <img src={python} alt="python" className="glow" />
              <img src={python} alt="python" />
              <div className="skillTitle">
                <h3>Python</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={1000}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`Java: Split()
C#: Split()
PHP: EXPLODE()!!!`)
              }}
            >
              <img src={php} alt="php" className="glow" />
              <img src={php} alt="php" />
              <div className="skillTitle">
                <h3>PHP</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={1100}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`ASP.NET
                        
Y U NO WORK?!?!?`)
              }}
            >
              <img src={asp} alt="asp" className="glow" />
              <img src={asp} alt="asp" />
              <div className="skillTitle">
                <h3>ASP.NET</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={1200}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`Level 1 - C#
Level 2 - C sharp
Level 3 - C Octothorpe
Level 4 - C HASHTAG
Level 5 - C Tic Tac Toe`)
              }}
            >
              <img src={csharp} alt="csharp" className="glow" />
              <img src={csharp} alt="csharp" />
              <div className="skillTitle">
                <h3>C#</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={1300}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`PHP4 - C++
PHP5 - C++
PHP7 - C++`)
              }}
            >
              <img src={cplusplus} alt="cplusplus" className="glow" />
              <img src={cplusplus} alt="cplusplus" />
              <div className="skillTitle">
                <h3>C++</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={1400}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(
                  `Nothing worse than ASP.NET can ever happen to a human being... Oh wait`,
                )
              }}
            >
              <img src={bitrix} alt="bitrix" className="glow" />
              <img src={bitrix} alt="bitrix" />
              <div className="skillTitle">
                <h3>1C Bitrix</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={1500}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(
                  `Yeah playing lego is cool, but just show me - where to write HTML CSS`,
                )
              }}
            >
              <img src={wordpress} alt="wordpress" className="glow" />
              <img src={wordpress} alt="wordpress" />
              <div className="skillTitle">
                <h3>Wordpress</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={1600}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`How to sign in with email and password?
                        
Oh... signInWithEmailAndPassword(email, password)`)
              }}
            >
              <img src={firebase} alt="firebase" className="glow" />
              <img src={firebase} alt="firebase" />
              <div className="skillTitle">
                <h3>Firebase</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={1700}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`Laravel... Laravel everywhere`)
              }}
            >
              <img src={laravel} alt="laravel" className="glow" />
              <img src={laravel} alt="laravel" />
              <div className="skillTitle">
                <h3>Laravel</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={1800}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`It is web, it is mobile, it's superman`)
              }}
            >
              <img src={ionic} alt="ionic" className="glow" />
              <img src={ionic} alt="ionic" />
              <div className="skillTitle">
                <h3>Ionic react js</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={1800}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`Two JavaScript variables are in a bar.
"I'm sorry I cannot be with you, your so not my Type.", one says.
The other Recasts and they lived happily ever after.`)
              }}
            >
              <img src={node} alt="node" className="glow" />
              <img src={node} alt="node" />
              <div className="skillTitle">
                <h3>Node JS</h3>
              </div>
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="flipInY" duration={3} delay={1800}>
            <div
              className="cube"
              onClick={() => {
                setmodalStyle({ width: '100vw' })
                setModalText(`Wasn't it just an aliexpress?`)
              }}
            >
              <img src={aws} alt="aws" className="glow" />
              <img src={aws} alt="aws" />
              <div className="skillTitle">
                <h3>AWS</h3>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </div>
  )
}
