import React from 'react';
import {NavLink} from "react-router-dom";
import {BsArrowRight} from "react-icons/bs"


const Course_hero = () => {


    return (
            <div id="course">
                <div className="container">
                    <div className="course-span">
                        <span>Главная / Наши курсы</span>
                    </div>

                    <div className="course-block">
                        <h1 className="course-block-title">Курсы</h1>
                        <div className="course-block-block2">
                            <div className="course-block-block3">
                                <h1>Frontend-разработчик</h1>
                                <p className="master4">Мастер создания сайтов. Умеет делать их красивыми, интерактивными, с большим функционалом. Профессия отлично подойдет тем, кто хочет фрилансить и постоянно разрабатывать новые проект</p>
                               <div className="course-nav">
                                   <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                   <BsArrowRight/>
                               </div>
                            </div>
                            <div className="course-block-block3">
                                <h1>Backend-разработчик</h1>
                                <p>Специалист, который отвечает за построение логики для воплощения любой идеи. Он собирает фундамент и опорную систему для проекта - от простого сайта для магазина одежды до сложных вычислительных систем нейронных сетей.</p>
                               <div className="course-nav">
                                   <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                   <BsArrowRight/>
                               </div>
                            </div>
                            <div className="course-block-block3">
                                <h1 className="design1">UX / UI Дизайнер</h1>
                                <p className="master1">Креативный специалист, который придумывает дизайн и интерфейс продукта. Специалист UX/UI отвечает за подбор форм, цветов, Функциональности дизайна и прочих важных параметров для комфорьного использования продукта.</p>
                               <div className="course-nav">
                                   <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                   <BsArrowRight/>
                               </div>
                            </div>
                        </div>
                        <div className="course-block-block2">
                            <div className="course-block-block3">
                                <h1 className="design3">DevOps - инженер</h1>
                                <p className="master3">Он разбирается в программировании и инфраструктуре и объединяет эти знания для оптимальной работы бизнеса.</p>
                                <div className="course-nav">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                            <div className="course-block-block3">
                                <h1>Android-разработчик</h1>
                                <p className="master5">Создает, обновляет, усовершенствует мобильные приложения для смартфонов, планшетов, электронных книг, игровых приставок и других девайсов, работающих на операционной системе Android.</p>
                                <div className="course-nav">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                            <div className="course-block-block3">
                                <h1 className="design5">Java-разработчик</h1>
                                <p className="master6">Cпециалист, который создает приложения разной сложности, используя старейший язык программирования.</p>
                                <div className="course-nav">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                        </div>
                        <div className="course-block-block2">
                            <div className="course-block-block3">
                                <h1 className="design2">С++ - разработчик</h1>
                                <p className="master7">Занимается разработкой высокопроизводительных и высоконагруженных систем, таких как поисковики, драйверы, игры и приложения. </p>
                                <div className="course-nav">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                            <div className="course-block-block3">
                                <h1 className="design6">IOS - разработчик</h1>
                                <p className="master8">iOS разработчик - идеальная профессия для того, кто любит мобильную продукцию компании Apple. Специальность позволяет совмещать творческие способности.</p>
                                <div className="course-nav">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                            <div className="course-block-block3">
                                <h1>Python - разработчик</h1>
                                <p className="master9">Cпециалист, который применяет в работе многоуровневый язык программирования Python.</p>
                                <div className="course-nav">
                                    <NavLink className="nav-course" to={"/Frontend"}>Подробнее</NavLink>
                                    <BsArrowRight/>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
    );
};


export default Course_hero;