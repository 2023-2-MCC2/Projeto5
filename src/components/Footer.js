import styled from "styled-components";
import { Link } from "react-router-dom";
function Footer(){
    return(
<footer class="bg-dark text-white pt-4 mt-5">
    <div class="container">
        <div class="row">
            
            <div class="col-md-3 mb-4">

                <ul class="list-unstyled">
                    <li><a href="#" class="text-white">Início</a></li>
                  </ul>
            </div>
            
            <div class="col-md-3 mb-4">
                <h5>Contato</h5>
                <ul class="list-unstyled">
                    <li><a href="mailto:galvesdeoliveira80@gmail.com"  class="text-white-emphasis">Tracksuit</a></li>
                </ul>
            </div>
            
            <div class="col-md-3 mb-4">
                <h5>Perfil</h5>
                <ul class="list-unstyled">
                    <li><a href="https://allmylinks.com/tracksuit-project" target="_blank" class="text-white" >Linkedin</a>
                    </li>
                </ul>
            </div>
            
            <div class="col-md-3 mb-4">

                <p>Inscreva-se para receber novidades</p>
                <form>
                    <Link to="/contact" class="btn btn-primary">Inscreva-se</Link>

                </form>
            </div>
        </div>
        
        <div class="row d-flex justify-content-center">
            <p class="text-center text-md-left">
                2023 - Creative Commons - Tracksuit Project Website by Guilherme, João, Gustavo is marked with  <Link to="https://creativecommons.org/publicdomain/zero/1.0/?ref=chooser-v1" target="_blank">CC0 1.0</Link> </p>
        </div>
    </div>
  </footer>
    )
}

export default Footer;