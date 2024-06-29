import React from "react";
import { Header } from "../../components/Header";
import {Row, Container, P, Title1, Title2, A, Span} from './style';
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import {useForm, Controller} from "react-hook-form";
import {MdEmail, MdLock} from 'react-icons/md';
import {api} from "../../services/api";
import {useNavigate} from 'react-router-dom';
import yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

const Login = () => {
    
    const navigate = useNavigate();
    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try{
            const {data} = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            if(data.length && data[0].id){
                navigate('/feed') 
                return
            }

            alert('Usuário ou senha inválido')
        }catch(e){
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);
  
    
    return(
        <>
        <Header />
        <Row>
            <Container>
                <P>A plataforma para você aprender
                    com experts, dominar as principais
                    tecnologias e entrar mais rápido nas empresas mais desejadas.
                </P>
            </Container>
            <Container>
                <Title1>Faça Seu Cadastro</Title1>
                <Title2>Faça seu Login E make the change._</Title2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="digite seu e-mail..." leftIcon={<MdEmail />} name="email" control={control}/>
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <br />
                    <Input placeholder="digite sua senha..." leftIcon={<MdLock />} name="password" control={control}/>
                    {errors.senha && <span>Senha é obrigatório</span>}

                    <Button variant="secondary" title="Entrar" type="submit"/>
                </form>
                <A href="/home"> <Span>esqueci minha Senha</Span></A>
                <A href="/cadastrar">Criar Conta</A>
            </Container>
        </Row>
        </>
    )
}

export default Login;