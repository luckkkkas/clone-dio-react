import React from "react";
import {Header} from "../../components/Header"
import { Button } from "../../components/Button";
import photo from "../../assets/image 1.png"
import { Container, P, Row, Span, Div } from "./style";

const Home = () => {
    return(
        <>
            <Header  autenticado={false}/>
            <Row>
                <Container>
                    <h1>
                        <Span>Implemente</Span> o seu futuro global agora!
                    </h1>
                    <P>Domine as tecnologias utilizadas pelas empresas mais inovadoras do mundo e encare seu novo desafio profissional, evoluindo em comunidade com os melhores experts.</P>
                    <Div>
                        <Button variant="secondary" title="Começar Agora" />
                    </Div>
                </Container>
                <Container>
                    <img src={photo} alt="" />
                </Container>
            </Row>
        </>
    )
}

export default Home;