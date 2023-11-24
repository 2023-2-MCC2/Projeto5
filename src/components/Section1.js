import styled from "styled-components";
import Lancelotti from '../Assets/Lancelottu.png'
import { Link } from "react-router-dom";

const ImgFluid = styled.img`
transition: .3s;
width: 100%;
border-radius: 50px;
maxWidth: '100%';
height: 'auto';
&:hover {
  transform: scale(1.02);
}
`

function Section1 (){
    return(
        <section class="container mt-5">
      <div class="row">
      <div class="col-md-6">
        <Link to="/padre"><ImgFluid src={Lancelotti} alt="lancelotti"  class="img-fluid area-1"/></Link>
      </div>
      <div class="col-md-6 area-1">
        <h2 id="PadreArea">PADRE JULIO</h2>
        <p>Júlio Lancellotti é conhecido por seu trabalho de assistência a pessoas em situação de rua.</p>
          <p id="RodArea">Em suas redes sociais, ele denuncia com frequência casos de violência policial e
          de construções com arquitetura hostil, que restringem o uso do espaço público - aporofobia.</p>
        
      </div>
    </div>
   </section> 
    )
}

export default Section1;