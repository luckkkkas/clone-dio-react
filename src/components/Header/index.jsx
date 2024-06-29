import React from "react";
import { Container, Row, BuscarInputContainer, Input, Menu, UserPicture, MenuRight, Wrapper} from "./style";
import { Button } from "../Button";
import logo from '../../assets/logo-dio 1.png'
import { Link } from "react-router-dom";

const Header = ()=>{
    return(
        <Wrapper>
            <Container>
                <Row>
                <Link to="/"><img src={logo} alt="Logo Da Dio"/></Link>
                    <BuscarInputContainer>
                        <Input placeholder='Buscar...' />
                    </BuscarInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <UserPicture src="https://avatars.githubusercontent.com/u/45184516?v=4" />
                    <MenuRight href="/">Home</MenuRight>
                    <Link to="/login"><Button title="Entrar"  /></Link>
                    <Link to="/cadastro"><Button title="Cadastrar" /></Link>
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header };