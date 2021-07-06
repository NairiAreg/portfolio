import React, { useState } from 'react'
import "./Second.scss";
import ScrollAnimation from 'react-animate-on-scroll';

import photoshop from '../Img/photoshop.png';
import after from '../Img/after.jpeg';
import premiere from '../Img/premiere.png';
import shop from '../Img/shop.jpg';
import guitar from '../Img/guitar.png';
import piano from '../Img/piano.png';
import hack from '../Img/hack.png';
import code from '../Img/code.png';
import music from '../Img/music.png';
import games from '../Img/games.png';
import tv from '../Img/tv.png';
import lang from '../Img/lang.png';
import bulb from '../Img/bulb.png';
import stack from '../Img/stack.png';

export default function Second2() {
    const [modalStyle, setmodalStyle] = useState({});
    const [modalText, setModalText] = useState("");
    return (
        <div id="second2" className="d-flex flex-column align-items-center justify-content-center p-5">
            <div style={modalStyle} className="modall">
                <div className="modalCover" onClick={() => setmodalStyle({})}></div>
                <div className="modalContent d-flex flex-column justify-content-center align-items-center">
                    <h4> <pre>{modalText}</pre></h4>
                    <button onClick={() => setmodalStyle({})} className="btn btn-dark">Close</button>
                </div>
            </div>
            <h1>Other Skills</h1>
            <hr />
            <div className="d-flex flex-column align-items-center">
                <h2 className="mb-3">& Hobbies</h2>
                <div className="d-flex w-100 justify-content-center flex-wrap">

                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={100}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`Doctor: "Your x-ray showed a broken rib...
... but we fixed it with Photoshop."`)
                        }}>
                            <img src={photoshop} alt="photoshop" className="glow" />
                            <img src={photoshop} alt="photoshop" />
                            <div className="skillTitle">
                                <h3>Photoshop</h3>
                            </div>
                        </div>

                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={200}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`What if I told you that you could animate anything?`)
                        }}>
                            <img src={after} alt="after" className="glow" />
                            <img src={after} alt="after" />
                            <div className="skillTitle">
                                <h3>After Effects</h3>
                            </div>
                        </div>

                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={300}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`I don't always edit with adobe premiere
                        
But when I do, adobe pays me to`)
                        }}>
                            <img src={premiere} alt="premiere" className="glow" />
                            <img src={premiere} alt="premiere" />
                            <div className="skillTitle">
                                <h3>Premiere Pro</h3>
                            </div>
                        </div>

                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={400}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`Running my own online shop since 2018, @altro_online_shop btw ;)`)
                        }}>
                            <img src={shop} alt="shop" className="glow" />
                            <img src={shop} alt="shop" />
                            <div className="skillTitle">
                                <h3>Online Shop</h3>
                            </div>
                        </div>

                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={500}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`Need 26 more exp to unlock F cord`)
                        }}>
                            <img src={guitar} alt="guitar" className="glow" />
                            <img src={guitar} alt="guitar" />
                            <div className="skillTitle">
                                <h3>Guitar</h3>
                            </div>
                        </div>

                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={600}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`Piano was invented so the musician would have a place to put his beer.
                        
                        `)
                        }}>
                            <img src={piano} alt="piano" className="glow" />
                            <img src={piano} alt="piano" />
                            <div className="skillTitle">
                                <h3>Piano</h3>
                            </div>
                        </div>

                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={700}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`#39 in Armenia =)`)
                        }}>
                            <img src={hack} alt="hack" className="glow" />
                            <img src={hack} alt="hack" />
                            <div className="skillTitle">
                                <h3>HackerRank</h3>
                            </div>
                        </div>

                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={800}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`148 Badges and some certificates (HTML etc...)`)
                        }}>
                            <img src={code} alt="code" className="glow" />
                            <img src={code} alt="code" />
                            <div className="skillTitle">
                                <h3>CodeCademy</h3>
                            </div>
                        </div>

                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={900}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`Got playlist with 311 songs :) `)
                        }}>
                            <img src={music} alt="music" className="glow" />
                            <img src={music} alt="music" />
                            <div className="skillTitle">
                                <h3>Music</h3>
                            </div>
                        </div>

                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={1000}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`Dota II One Love <3`)
                        }}>
                            <img src={games} alt="games" className="glow" />
                            <img src={games} alt="games" />
                            <div className="skillTitle">
                                <h3>Games</h3>
                            </div>
                        </div>

                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={1100}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`Top List
1. LOST
2. Кухня
3. Prison Break`)
                        }}>
                            <img src={tv} alt="tv" className="glow" />
                            <img src={tv} alt="tv" />
                            <div className="skillTitle">
                                <h3>TV Shows</h3>
                            </div>
                        </div>

                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={1200}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`Languages
                        
Armenian
Russian
English
French`)
                        }}>
                            <img src={lang} alt="lang" className="glow" />
                            <img src={lang} alt="lang" />
                            <div className="skillTitle">
                                <h3>Languages</h3>
                            </div>
                        </div>

                    </ScrollAnimation>
                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={1300}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`Learning a new and helpful skill feels always good, but Python was an ecstasy`)
                        }}>
                            <img src={bulb} alt="bulb" className="glow" />
                            <img src={bulb} alt="bulb" />
                            <div className="skillTitle">
                                <h3>Learning</h3>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation animateIn="bounceInRight"
                        duration={1}
                        delay={1300}>
                        <div className="cube" onClick={() => {
                            setmodalStyle({ width: "100vw" });
                            setModalText(`My second home, where I have ~800 reputation :DDD`)
                        }}>
                            <img src={stack} alt="stack" className="glow" />
                            <img src={stack} alt="stack" />
                            <div className="skillTitle">
                                <h3>StackOverflow</h3>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </div>
    )
}
