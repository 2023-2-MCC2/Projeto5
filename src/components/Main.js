import styled from 'styled-components'
import Lancelotti from '../Assets/Lancelottu.png'
import Rodrigo from '../Assets/rodrigo.jpg'
import Pedra from '../Assets/pedra.jpg'


const Gallery = styled.div `
display: flex;
    width: 100%;
    height: 100% ;
    padding-bottom:15px
`
const ImageMain = styled.img `
aspect-ratio: 9/16;
    min-width: 0;
    flex: 1 1 10px;
    object-fit: cover;
    opacity: .5;
    transition: .5s;
    border: 12px;
    border-color: black;
    &:hover{
        flex: 1 1 50px;
    opacity: 1;  
    }
`

function Main(){
    return(
        <main>
            <Gallery>
                <ImageMain src={Lancelotti}></ImageMain>
                <ImageMain src={Rodrigo}></ImageMain>
                <ImageMain src={Pedra}></ImageMain>
            </Gallery>
        </main>
    )
}

export default Main;