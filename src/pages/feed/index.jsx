import React from "react";
import {Header} from "../../components/Header";
import {Container, Column, Row, Img, Card, Progress} from './style'
import Banner from '../../assets/Rectangle 6.png'
import UserPicture from '../../assets/logo-dio 1.png'
import { UserInfo } from "../../components/UserInfo";

const Feed = () =>{
    return(
        <>
        <Header autenticado={true} />
        <Container>
          
            <Column>   
                <Card>
                    <img src={Banner} alt="Banner" />
                <Row>
                    <Img src={UserPicture} alt="Foto de usuario" />
                    <Column>
                        <h3>Paulo Henrique</h3>
                        <p>Há 8 Minutos</p>
                    </Column>
                </Row>
                <Column>
                        <h2>Projeto para curso de Html e CSS.</h2>
                        <p>Projeto que foca no desenvolvimento em html e CSS</p>
                        <p>#html #CSS #dio #aprendizado!</p>
                </Column>
                </Card>
                <Card>
                    <img src={Banner} alt="Banner" />
                <Row>
                    <Img src={UserPicture} alt="Foto de usuario" />
                    <Column>
                        <h3>Paulo Henrique</h3>
                        <p>Há 8 Minutos</p>
                    </Column>
                </Row>
                <Column>
                        <h2>Projeto para curso de Html e CSS.</h2>
                        <p>Projeto que foca no desenvolvimento em html e CSS</p>
                        <p>#html #CSS #dio #aprendizado!</p>
                </Column>
                </Card>
                <Card>
                    <img src={Banner} alt="Banner" />
                <Row>
                    <Img src={UserPicture} alt="Foto de usuario" />
                    <Column>
                        <h3>Paulo Henrique</h3>
                        <p>Há 8 Minutos</p>
                    </Column>
                </Row>
                <Column>
                        <h2>Projeto para curso de Html e CSS.</h2>
                        <p>Projeto que foca no desenvolvimento em html e CSS</p>
                        <p>#html #CSS #dio #aprendizado!</p>
                </Column>
                </Card>
                <Card>
                    <img src={Banner} alt="Banner" />
                <Row>
                    <Img src={UserPicture} alt="Foto de usuario" />
                    <Column>
                        <h3>Paulo Henrique</h3>
                        <p>Há 8 Minutos</p>
                    </Column>
                </Row>
                <Column>
                        <h2>Projeto para curso de Html e CSS.</h2>
                        <p>Projeto que foca no desenvolvimento em html e CSS</p>
                        <p>#html #CSS #dio #aprendizado!</p>
                </Column>
                </Card>
                <Card>
                    <img src={Banner} alt="Banner" />
                <Row>
                    <Img src={UserPicture} alt="Foto de usuario" />
                    <Column>
                        <h3>Paulo Henrique</h3>
                        <p>Há 8 Minutos</p>
                    </Column>
                </Row>
                <Column>
                        <h2>Projeto para curso de Html e CSS.</h2>
                        <p>Projeto que foca no desenvolvimento em html e CSS</p>
                        <p>#html #CSS #dio #aprendizado!</p>
                </Column>
                </Card>
            </Column>     
            <Column>
                <h4>Ranking top 5 Da semana!!!</h4>
                
                <UserInfo nome="Lucas" percentual={99} image={UserPicture} /> 
                <UserInfo nome="Ratão" percentual={70} image={UserPicture} /> 
                <UserInfo nome="Ludio" percentual={65} image={UserPicture} /> 
                <UserInfo nome="fulano" percentual={50} image={UserPicture} /> 
                <UserInfo nome="Renata" percentual={89} image={UserPicture} /> 
            </Column>
        </Container>
        </>

    )
} 

export default Feed;