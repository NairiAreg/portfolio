import React, { useEffect } from "react";
import "./Fourth.scss";

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

        rightButton.addEventListener('click', moveToRight);

        leftButton.addEventListener('click', moveToLeft);

        document.addEventListener('keyup', event => {
            const key = event.key;

            if (key === 'ArrowRight') {
                moveToRight();
            }

            if (key === 'ArrowLeft') {
                moveToLeft();
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
                                <h2 className="main-title -second">2012</h2>
                                <div className="logo">
                                    <img src="https://i.ibb.co/G2rg5jQ/logo-locaweb.png" alt="Logo da Locaweb" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2014</h2>
                                <div className="logo -no-padding">
                                    <img className="image" src="https://i.ibb.co/ByHFYcf/logo-caelum.png" alt="Logo da Caelum" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2016</h2>
                                <div className="logo -bg-red">
                                    <img src="https://i.ibb.co/nRCkymQ/logo-getninjas.png" alt="Logo da GetNinjas" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2017</h2>
                                <div className="logo -no-padding">
                                    <img className="image" src="https://i.ibb.co/ByHFYcf/logo-caelum.png" alt="Logo da Caelum" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2018</h2>
                                <div className="logo">
                                    <img src="https://i.ibb.co/FBxTkK1/logo-impulso.png" alt="Logo da Impulso" />
                                </div>
                            </article>

                            <article className="node-card">
                                <h2 className="main-title -second">2019</h2>
                                <div className="logo -bg-red">
                                    <img src="https://i.ibb.co/XSmBYKm/logo-collabcode.png" alt="Logo da CollabCode" />
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
