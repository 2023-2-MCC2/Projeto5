import styled from "styled-components";
import Rodrigo from '../Assets/rodrigo.jpg'
import { Link } from "react-router-dom";

const ImgFluid = styled.img`
transition: .3s;
border-radius: 50px;
width: 100%;
&:hover {
  transform: scale(1.02);
}
`
function Section2(){
    return(
<section class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h2 >RODRIGO JALLOL</h2>
        <p>Rodrigo Jallol é um Sheik do centro Islamico da Penha. Efetua um lindo trabalho social na cracolandia onde é um forte defensor dos direitos humanos.</p>
          <p>Atua junto ao Padre Julio, mesmo com os dois dividindo crenças diferentes. Seu trabalho muda vidas necessitadas todos os dias assim tornando nosso mundo melhor. </p>
      </div>
      <div class="col-md-6">
        <Link to="rodrigo"><ImgFluid src={Rodrigo} alt="rodrigo"  class="img-fluid"/></Link>
        <p></p>
      </div>
    </div>
   </section>
    )
}

export default Section2;