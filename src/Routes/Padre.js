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
  background-image: url(${require('../Assets/padremissa.jpg')});
`
const ParallaxModule2 = styled(ParallaxModule)`
  background-image: url(${require('../Assets/Padre2.webp')});
`
const ParallaxModule3 = styled(ParallaxModule)`
background-image: url(${require('../Assets/Padre-Casa.png')});
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
function PadrePage (){
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
            <ParallaxModuleTitle>Padre Julio Lancelotti</ParallaxModuleTitle>
          </ParallaxModule1>

          <ContentModule>
            <Container>
              <h2>Quem É.</h2>
              <p>
            Júlio Renato Lancellotti, GCONM é um pedagogo e presbítero católico brasileiro. Exerce a função de pároco da paróquia de São Miguel Arcanjo no bairro da Mooca, na cidade de São Paulo. Além da paróquia, o padre também é responsável pelas missas realizadas na capela da Universidade São Judas Tadeu, situada na mesma rua.
          </p>
          <p>
            Lutamos contra a aporofobia [o ódio aos pobres] e essa arquitetura hostil, que vemos por todo o país além do racismo e da transfobia. Comer é conviver. Partilhar e conviver. A dor do nosso irmão é nossa dor. A fome do irmão é a nossa fome. Eu sempre digo que nós não devemos apenas dar de comer para o irmão. É preciso comer com o irmão e escutar suas histórias para entender sua dor. Nós só seremos felizes e plenamente humanos quando ninguém mais tiver fome.</p>
            </Container>
          </ContentModule>

          <ParallaxModule2>
            <ParallaxModuleTitle>Jesus na Luta contra a aporofobia</ParallaxModuleTitle>
          </ParallaxModule2>

          <ContentModule>
            <Container>
              <h2>Nacionalismo e Jesus.</h2>
              <p>
            "Jesus era contra o nacionalismo. Quando ele fala do sírio e da mulher de Sarepta quando ele dá o pão pra ela, eles expulsam Jesus da sinagoga e querem matá-lo. Ele recita um texto na sinagoga e tem uma parte no texto que eles, os nacionalistas gostam, que fala de vingança e ódio, mas Jesus pula essa parte então eles se revoltam, agarram Jesus e tentam jogá-lo do precipício. Tudo isso porque ele contesta a teologia nacionalista. Entende como isso está ligado na nossa história atual?"
          </p> 

            </Container>
          </ContentModule>

          <ParallaxModule3>
            <ParallaxModuleTitle>LUTA VITORIOSA</ParallaxModuleTitle>
          </ParallaxModule3>

          <ContentModule>
            <Container>
              <h2>Uma Vitoria Democratica.</h2>
              <p>
            Luta pacífica e no campo das ideias, a vitória de Padre Júlio é uma vitória da democracia. Para o padre, que dedica a vida na defesa dos marginalizados, democratizar os espaços públicos de São Paulo e de todas cidades do país é só o começo.
          </p>
            </Container>
          </ContentModule>
        </Main>
      </Wrapper>
    </>
    )
}

export default PadrePage