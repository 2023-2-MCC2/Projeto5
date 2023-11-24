import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle, css } from 'styled-components';
import Header from '../components/Header';
import Footer from "../components/Footer";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    color: #242424;
    font-family: sans-serif;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 900;
    color: #000;
  }
`
const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`
const Main = styled.main`
  display: block;
  background-color: #FFF;
`
const Container = styled.div`
  width: 100%;
  max-width: 760px;
  margin: 0 auto;
  padding: 0 20px;
`
const ModuleSection = styled.section`
  p {
    margin-bottom: 40px;
  }

  &:last-child {
    margin-bottom: 0;
  }

  h2 {
    margin-bottom: 40px;
    font-size: 30px;
  }
`
const ContentModule = styled(ModuleSection)`
  padding: 40px 0;
  background: #ece7d5;
`
const ParallaxModule = styled(ModuleSection)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh !important;
  width: 100%;
  position: relative;
  overflow: hidden;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

  &:after {
    content: "";
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 8;
    background: -moz-linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 40%, #000 100%);
    background: -webkit-linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 40%, #000 100%);
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 40%, #000 100%);
  }
`
const ParallaxModule1 = styled(ParallaxModule)`
  background-image: url(${require('../Assets/dapedrapararocha.jpg')});
`
const ParallaxModule2 = styled(ParallaxModule)`
  background-image: url(${require('../Assets/dpdr2.jpg')});
`
const ParallaxModule3 = styled(ParallaxModule)`
background-image: url(${require('../Assets/dpdr3.png')});
`
const ParallaxModuleTitle = styled.h1`
  color: #FFF;
  text-align: center;
  font-size: 78px;
  z-index: 50;
  text-transform: uppercase;
`
const MediaQueryStyles = css`
  @media all and (max-width: 820px) {
    ${ModuleSection} h2 {
      font-size: 32px;
    }

    ${Container} {
      margin: 0;
      padding: 0;
    }

    ${ParallaxModuleTitle} {
      font-size: 36px;
    }
  }
`
function PedraPage (){
    window.addEventListener('scroll', function() {
        var navbarBrand = document.querySelector('.navbar-brand');
        var scrollPosition = window.scrollY;
        var scrollThreshold = 780;  // Altura a partir da qual a transição começa
        var maxScrollThreshold = 802; // Altura onde a transição está completa
      
        // Ajuste a opacidade com base no scroll
        if (scrollPosition > scrollThreshold && scrollPosition < maxScrollThreshold) {
          var opacity = 0.5 - (scrollPosition - scrollThreshold) / (maxScrollThreshold - scrollThreshold);
          navbarBrand.style.opacity = opacity;
        } else if (scrollPosition >= maxScrollThreshold) {
          navbarBrand.style.opacity = '0';
        } else {
          navbarBrand.style.opacity = '1';
        }
      });
    return(
        <>
        <Header></Header>
    <GlobalStyles />
      <Wrapper>
        <Main>
          <ParallaxModule1>
            <ParallaxModuleTitle>Da Pedra para a Rocha</ParallaxModuleTitle>
          </ParallaxModule1>

          <ContentModule>
            <Container>
              <h2>Quem É.</h2>
              <p>
            Na conhecida Cracolândia, situada na região da rua Helvétia, próximo à Estação da Luz, nasceu a Associação da Pedra para a Rocha, uma organização não governamental (ONG) sem fins lucrativos dedicada à assistência e à reabilitação social das pessoas que por lá vivem. 
          </p>
           </Container>
          </ContentModule>

          <ParallaxModule2>
            <ParallaxModuleTitle>Resgate</ParallaxModuleTitle>
          </ParallaxModule2>

          <ContentModule>
            <Container>
              <h2>Trabalho com foco em Resgate.</h2>
              <p>
            Nossa missão diária dentro da Cracolândia é mostrar aos nossos irmãos que existe um caminho livre das angústias e do sofrimento que os levou até ali e que os faz permanecer, oferecer o resgate e uma nova oportunidade de renascer. 
          </p>         
          </Container>
          </ContentModule>

          <ParallaxModule3>
            <ParallaxModuleTitle>Nenhum ser humano é dispensável</ParallaxModuleTitle>
          </ParallaxModule3>

          <ContentModule>
            <Container>
              <h2>Reinserção.</h2>
              <p>
            Com as duas etapas anteriores cumpridas, nós os guiamos para a reinserção social, para que possam viver uma vida plena e reconstruída, com a certeza de que nunca mais o vício os irá controlar, mantendo uma rede de apoio e acolhimento sempre que precisarem. 
          </p> 
       </Container>
          </ContentModule>
        </Main>
      </Wrapper>

    </>
    )
}

export default PedraPage