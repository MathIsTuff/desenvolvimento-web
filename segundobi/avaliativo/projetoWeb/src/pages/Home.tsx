import Logo from "../assets/logo.svg";
import Button from "../components/button";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import { useState, useEffect } from "react";
import "../styles/header.css";
import "../styles/utility.css";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import Champion from "../assets/champion.svg";
import "../styles/solution.css";
import CardVantagem from "../components/cardVantagem.tsx";
import ProfileImageOne from "../assets/images/profileOne.png";
import "../styles/testimonials.css";
import CardTestimonials from "../components/cardTestimonials.tsx";
import starFilled from "../assets/starFilled.svg";
import starEmpty from "../assets/starEmpty.svg";
import ProfileImageTwo from "../assets/images/profileTwo.png";
import ProfileImageThree from "../assets/images/profileThree.png";


export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    useEffect(() => {
        const html = document.querySelector("html");
        if (html) {
            html.style.overflow = showMobileMenu ? "hidden" : "auto";
        }
    }, [showMobileMenu]);
    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Arcitech" width={220} height={200} />

                    <div className="desktop-only">
                        <ul className="flex gap-1">
                            <li>
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#solution">Soluções</a>
                            </li>
                            <li>
                                <a href="#testimonials">Depoimentos</a>
                            </li>
                            <li>
                                <a href="#pricing">Preços</a>
                            </li>
                            <li>
                                <a href="#contact">Contato</a>
                            </li>
                        </ul>
                    </div>

                    <div className="desktop-only">
                        <div className="flex items-center">
                            <a className="reverse-color ml-lg" href="">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ?
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#">Home</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#solution">Soluções</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#testimonials">Depoimentos</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#pricing">Preços</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} href="#contact">Contato</a>
                                        </li>
                                        <li>
                                            <a onClick={() => setShowMobileMenu(!showMobileMenu)} className="reverse-color" href="#">Login</a>
                                        </li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            :
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper" >
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        }
                    </div>

                </nav>
            </header>

            <section id="hero">
                <span className="desktop-only">
                    <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />
                <div className="container content">
                    <p className="desktop-only">
                        Olá
                    </p>
                    <h1>Computadores personalizados e manutenção especializada para levar mais performance ao seu dia a dia.</h1>
                    <p>Na ArciTech, você encontra eletrônicos de alto nível, soluções personalizadas para trabalho e gaming e manutenção confiável para manter seu equipamento sempre pronto.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>
            <section className="container" id="solution">
                <header>
                    <span>
                        <h2>Soluções</h2>
                        <span className="desktop-only">
                            <h2>
                                Sob medida para você
                            </h2>
                        </span>
                    </span>
                    <p>
                        Inovação é com a gente! A <strong>Arcitech </strong>
                        já conquistou diversos clientes, seja você mais um deles,
                        veja tudo que pode ganhar com nossos serviços.
                    </p>
                </header>
                <section className="even-columns">
                    <CardVantagem
                        imagem={Champion}
                        titulo="Produtos de alta performance"
                        descricao="Nossos computadores e acessórios são selecionados para entregar velocidade e confiabilidade em qualquer tarefa." />
                    <CardVantagem
                        imagem={Champion}
                        titulo="Personalização sob medida"
                        descricao="Montamos PCs personalizados com os componentes certos para o seu uso, do home office ao setup gamer." />
                    <CardVantagem
                        imagem={Champion}
                        titulo="Manutenção especializada"
                        descricao="Oferecemos suporte técnico e manutenção para garantir que seu equipamento funcione sempre da melhor forma." />
                </section>
            </section>
            <section id="testimonials">
                <header>
                    <span>
                        <p className="desktop-only">
                            Conselho de quem conhece
                        </p>
                        <h2>Cada cliente importa!</h2>
                    </span>
                    <p>
                        Clientes da ArciTech sabem que tecnologia de verdade precisa de confiança, performance e atendimento próximo. Veja o que nossos clientes dizem sobre os resultados que conquistamos.
                    </p>
                </header>
                <section className="carousel">
                    <div className="carousel-content">
                        <CardTestimonials
                            imagem={ProfileImageOne}
                            rating={4}
                            starFilled={starFilled}
                            starEmpty={starEmpty}
                            texto="Meu PC ficou muito mais rápido e confiável depois da personalização da ArciTech. O atendimento foi excelente e a manutenção resolveu problemas que eu achava irreversíveis."
                            nome="Redondinho Gaúcho"
                            cargo="Jogador peso pesado de futebol"
                        />
                        <CardTestimonials
                            imagem={ProfileImageTwo}
                            rating={5}
                            starFilled={starFilled}
                            starEmpty={starEmpty}
                            texto="Pedi um PC gamer personalizado e a ArciTech entregou exatamente o que eu queria. O desempenho é incrível e o suporte técnico foi muito atencioso."
                            nome="Pirata do Habib's"
                            cargo="Hater de de grandes fumantes (Big Smoke)"
                        />
                        <CardTestimonials
                            imagem={ProfileImageThree}
                            rating={5}
                            starFilled={starFilled}
                            starEmpty={starEmpty}
                            texto="A ArciTech me ajudou a montar um setup de home office que realmente atende às minhas necessidades. A manutenção preventiva que eles oferecem me dá tranquilidade para trabalhar sem interrupções."
                            nome="Adão Areia"
                            cargo="Jogador de golfe profissional com problemas de raiva"
                        />
                    </div>
                    <div className="carousel-content">
                        <CardTestimonials
                            imagem={ProfileImageOne}
                            rating={4}
                            starFilled={starFilled}
                            starEmpty={starEmpty}
                            texto="Meu PC ficou muito mais rápido e confiável depois da personalização da ArciTech. O atendimento foi excelente e a manutenção resolveu problemas que eu achava irreversíveis."
                            nome="Redondinho Gaúcho"
                            cargo="Jogador peso pesado de futebol"
                        />
                        <CardTestimonials
                            imagem={ProfileImageTwo}
                            rating={5}
                            starFilled={starFilled}
                            starEmpty={starEmpty}
                            texto="Pedi um PC gamer personalizado e a ArciTech entregou exatamente o que eu queria. O desempenho é incrível e o suporte técnico foi muito atencioso."
                            nome="Pirata do Habib's"
                            cargo="Hater de de grandes fumantes (Big Smoke)"
                        />
                        <CardTestimonials
                            imagem={ProfileImageThree}
                            rating={5}
                            starFilled={starFilled}
                            starEmpty={starEmpty}
                            texto="A ArciTech me ajudou a montar um setup de home office que realmente atende às minhas necessidades. A manutenção preventiva que eles oferecem me dá tranquilidade para trabalhar sem interrupções."
                            nome="Adão Areia"
                            cargo="Jogador de golfe profissional com problemas de raiva"
                        />
                    </div>
                </section>
            </section>
        </>
    )
}