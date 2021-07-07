import React, { useEffect } from "react";
import "./Fourth.scss";
import bornreal from '../Img/bornreal.png';
import runreal from '../Img/runreal.png';
import askreal from '../Img/askreal.png';
import universreal from '../Img/universreal.png';
import number from '../Img/number.png';
import found from '../Img/found.png';
import laying from '../Img/laying.png';
import system32 from '../Img/system32.png';
import love from '../Img/love.png';
import heartbreak from '../Img/heartbreak.png';
import htmlcss from '../Img/htmlcss.png';
import js from '../Img/js.png';
import dis from '../Img/dis.png';
import mom from '../Img/mom.png';
import reactcourse from '../Img/reactcourse.png';
import wd from '../Img/wd.png';
import ferien from '../Img/ferien.png';
import evistep from '../Img/evistep.png';

export default function Third() {

    useEffect(() => {
        const rightButton = document.querySelector('.button-arrow.-right');
        const leftButton = document.querySelector('.button-arrow.-left');
        const cards = document.querySelector('.cards');
        let totalPixels = 0;

        function moveToRight() {
            totalPixels += 100;
            cards.style.transform = `translateX(${totalPixels}px)`;
        }

        function moveToLeft() {
            totalPixels -= 100;
            cards.style.transform = `translateX(${totalPixels}px)`;
        }

        rightButton.addEventListener('click', moveToLeft);

        leftButton.addEventListener('click', moveToRight);

        document.addEventListener('keyup', event => {
            const key = event.key;

            if (key === 'ArrowRight') {
                moveToLeft();
            }

            if (key === 'ArrowLeft') {
                moveToRight();
            }
        });
    }, [])
    return (
        <div id="fourth">
            <div className="container d-flex flex-column justify-content-around align-items-center w-100 h-100">
                <h1 className="main-title">My life <span className="d-flex flex-nowrap text-white">(+ Career)</span></h1>
                <section className="main-carousel">
                    <button className="button-arrow -left" title="Clique para voltar">
                        <span className="content">Voltar</span>
                    </button>

                    <div className="items">
                        <div className="cards">
                            <article className="node-card">
                                <h2 className="main-title -second">2001</h2>
                                <div className="logo">
                                    <img src={bornreal} alt="Logo da Locaweb" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2001</h2>
                                <div className="logo -no-padding">
                                    <img className="image" src={runreal} alt="Logo da Caelum" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2002</h2>
                                <div className="logo -bg-red">
                                    <img src={askreal} alt="Logo da GetNinjas" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2003</h2>
                                <div className="logo -no-padding">
                                    <img className="image" src={universreal} alt="Logo da Caelum" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2004</h2>
                                <div className="logo">
                                    <img src={number} alt="Logo da Impulso" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2005</h2>
                                <div className="logo -bg-red">
                                    <img src={found} alt="Logo da CollabCode" />
                                </div>
                            </article>
                            <article className="node-card">
                                <h2 className="main-title -second">2010</h2>
                                <div className="logo -no-padding">
                                    <img className="image" src={laying} alt="Logo da Caelum" />
                                </div>
                            </article>
                            <article className="node-card">
                                <h2 className="main-title -second">2012</h2>
                                <div className="logo">
                                    <img src={system32} alt="Logo da Locaweb" />
                                </div>
                            </article>
                            <article className="node-card">
                                <h2 className="main-title -second">2015</h2>
                                <div className="logo -no-padding">
                                    <img className="image" src={love} alt="Logo da Caelum" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2015</h2>
                                <div className="logo -bg-red">
                                    <img src={heartbreak} alt="Logo da GetNinjas" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2016</h2>
                                <div className="logo -no-padding">
                                    <img className="image" src={htmlcss} alt="Logo da Caelum" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2016</h2>
                                <div className="logo">
                                    <img src={js} alt="Logo da Impulso" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2016</h2>
                                <div className="logo -bg-red">
                                    <img src={dis} alt="Logo da CollabCode" />
                                </div>
                            </article>
                            <article className="node-card">
                                <h2 className="main-title -second">2017</h2>
                                <div className="logo">
                                    <img src={mom} alt="Logo da Locaweb" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2017</h2>
                                <div className="logo -no-padding">
                                    <img className="image" src={js} alt="Logo da Caelum" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2018</h2>
                                <div className="logo -bg-red">
                                    <img src={reactcourse} alt="Logo da GetNinjas" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2018</h2>
                                <div className="logo -no-padding">
                                    <img className="image" src={dis} alt="Logo da Caelum" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2019</h2>
                                <div className="logo">
                                    <img src={mom} alt="Logo da Impulso" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2020</h2>
                                <div className="logo -bg-red">
                                    <img src={wd} alt="Logo da CollabCode" />
                                </div>
                            </article>
                            <article className="node-card">
                                <h2 className="main-title -second">2020</h2>
                                <div className="logo">
                                    <img src={ferien} alt="Logo da Locaweb" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2021</h2>
                                <div className="logo -no-padding">
                                    <img className="image" src={evistep} alt="Logo da Caelum" />
                                </div>
                            </article>
                        </div>
                    </div>

                    <button className="button-arrow -right" title="Clique para avançar">
                        <span className="content">Avançar</span>
                    </button>
                </section>
            </div>
        </div>
    )
}
