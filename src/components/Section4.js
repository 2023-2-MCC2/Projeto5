import styled from "styled-components";
import Rodrigo from '../Assets/rodrigo.jpg'
import { Link } from "react-router-dom";
import Cracolandia from '../Assets/Cracolandia.jpeg'


const ImgFluid = styled.img`
transition: .3s;
border-radius: 50px;
width: 100%;
&:hover {
  transform: scale(1.02);
}
`
function Section4(){
    return(
<section class="container mt-5">
    <div class="row">
      <div class="col-md-6">
        <h2 >Cracolandia</h2>
        <p>De região nobre para centro do tráfico e de usuários de droga, entenda oq acontece na região mais desumanizada pela população de São Paulo.</p>
      </div>
      <div class="col-md-6">
        <Link to="cracolandia"><ImgFluid src={Cracolandia} alt="rodrigo"  class="img-fluid"/></Link>
        <p></p>
      </div>
    </div>
   </section>

    )
}

export default Section4;