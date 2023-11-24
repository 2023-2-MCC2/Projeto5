import styled from "styled-components";
import Pedra from '../Assets/pedra.jpg'
import { Link } from "react-router-dom";

const ImgFluid = styled.img`
transition: .3s;
border-radius: 50px;
width: 100%;
&:hover {
  transform: scale(1.02);
}
`
function Section3(){
    return(
<section class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <Link to="pedra"><ImgFluid src={Pedra} alt="pedra" id="PedraArea" class="img-fluid"/></Link>
      </div>
      <div class="col-md-6">
        <h2>PEDRA PARA A ROCHA</h2>
        <p>Na conhecida Cracolândia, situada na região da rua Helvétia, próximo à Estação da Luz, nasceu a Associação da Pedra para a Rocha, uma organização não governamental (ONG) sem fins lucrativos dedicada à assistência e à reabilitação social das pessoas que por lá vivem. </p>
        <p></p>
      </div>
    </div>
   </section>
    )
}

export default Section3;