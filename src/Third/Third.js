import React, { useState } from "react";
import "./Third.scss";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from '../../node_modules/react-awesome-slider/dist/autoplay';
import apartment from '../Img/apartment.mp4';
import cleopatra from '../Img/cleopatra.mp4';
import arkhitektor from '../Img/arkhitektor.mp4';
import rose from '../Img/rose.mp4';
import kristi from '../Img/kristi.mp4';
import constructor1 from '../Img/constructor.mp4';

export default function Third() {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const animArr = ["fallAnimation", "cubeAnimation", "scaleOutAnimation", "openAnimation", "foldOutAnimation"];
    const [animationName, setAnimationName] = useState(0);

    return (
        <div id="third" className="py-5">
            <div className="container d-flex flex-column justify-content-around align-items-center w-100 h-100">
                <button className="btn" onClick={() => animationName !== 4 ? setAnimationName(animationName + 1) : setAnimationName(0)}>
                    Change Sliding Animation
                </button>
                <span>Click on the video to view the live demo</span>
                <AutoplaySlider
                    animation={animArr[animationName]}
                    play={true}
                    cancelOnInteraction={true}
                    interval={6000}
                >

                    <div>
                        <a href="https://arkhitektor.netlify.app" target="_blank" rel="noreferrer">
                            <video loop autoPlay muted  src={arkhitektor} />
                        </a>
                    </div>


                    <div>
                        <a href="https://cleopatra-complex.netlify.app" target="_blank" rel="noreferrer">
                            <video loop autoPlay muted  src={cleopatra} />
                        </a>
                    </div>

                    <div>
                        <a href="https://rose-del-mare.netlify.app" target="_blank" rel="noreferrer">
                            <video loop autoPlay muted  src={rose} />
                        </a>
                    </div>

                    <div>
                        <a href="https://nairi.netlify.app" target="_blank" rel="noreferrer">
                            <video loop autoPlay muted  src={apartment} />
                        </a>
                    </div>

                    <div>
                        <a href="https://kristi.netlify.app" target="_blank" rel="noreferrer">
                            <video loop autoPlay muted  src={kristi} />
                        </a>
                    </div>

                    <div>
                        <a href="https://nairi-constructor.netlify.app" target="_blank" rel="noreferrer">
                            <video loop autoPlay muted  src={constructor1} />
                        </a>
                    </div>

                </AutoplaySlider>
            </div>
        </div >
    )
}
