import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createGlobalStyle, css } from 'styled-components';
import Header from '../components/Header';

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
  background-image: url(${require('../Assets/Rodrigo_Jalloul.jpg')});
`
const ParallaxModule2 = styled(ParallaxModule)`
  background-image: url(${require('../Assets/rodrigo4.jpg')});
`
const ParallaxModule3 = styled(ParallaxModule)`
background-image: url(${require('../Assets/Rodrigo3.jpg')});
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
function RodrigoPage (){
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
            <ParallaxModuleTitle>Rodrigo Jallol</ParallaxModuleTitle>
          </ParallaxModule1>

          <ContentModule>
            <Container>
              <h2>Quem É.</h2>
              <p>
            Assim como Padre Julio Lancelloti, Rodrigo é um militante que atua contra a Aporofobia na cidade de São Paulo. Sheik de um centro islâmico na Penha, Rodrigo reforça a importância da luta humanitária independente da religão que se segue. 
          </p>
          <p>
            Lutamos contra o preconceito religioso e contra a aporofobia, entendo como é importante ressaltar que sou de religião Islamica e independente disso me junto ao padre na guerra contra aqueles que oprimem o pobre.           </p>          
        </Container>
          </ContentModule>

          <ParallaxModule2>
            <ParallaxModuleTitle>Islã e cracolandia.</ParallaxModuleTitle>
          </ParallaxModule2>

          <ContentModule>
            <Container>
              <h2>Trabalho humanitario.</h2>
              <p>
            O trabalho de Rodrigo quebra as barreiras da religião e se torna mais importante quando analisado em um contexto onde a intolerancia religiosa no Brasil é extrema e sem  pudor. Rodrigo com a ajuda humanitaria que realiza na cracolandia se tornou simbolo de pessoa e imagem islâmica. Assim podend dar esperanças as pessas em condição de rua e aqueles que acreditam um dia poder ser um religioso islâmico sem sofrer preconceitos. 
          </p>         
        </Container>
          </ContentModule>

          <ParallaxModule3>
            <ParallaxModuleTitle>O ano preconceituoso.</ParallaxModuleTitle>
          </ParallaxModule3>

          <ContentModule>
            <Container>
              <h2>Rodrigo e as Eleições.</h2>
              <p>
            Rodrigo sofreu muitas ataques durante as eleições do ano de 2022. Na época por estarem sendo disputadas eleições bastantes polarizadas, eleitores de Bolsonaro praticaram ataques contra Rodrigo pelo seu trabalho na Cracolândia, segundo os ataques, Rodrigo financiava o crime e o trafico de drogas. O mesmo diz que os atacantes foram “desleais” e  preconceituosos, 
          </p> 
         </Container>
          </ContentModule>
        </Main>
      </Wrapper>
    </>
    )
}
export default RodrigoPage