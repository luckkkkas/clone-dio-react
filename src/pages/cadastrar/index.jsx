import { Header } from "../../components/Header"
import {Row, Column, Text, Form} from './style'
import  Input  from "../../components/Input"
import { MdPerson, MdPerson2, MdEmail, MdLock, MdPerson3 } from "react-icons/md"
import { Button } from "../../components/Button"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import {api} from '../../services/api'


const Cadastrar = () =>{
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
        <Header autenticado={false} />
        <Row>
            <Text>
            A plataforma para você aprender com experts, 
            dominar as principais tecnologias e entrar mais 
            rápido nas empresas mais desejadas.
            </Text>
            <Column>
                <h1>Comece agora grátis</h1>
                <h5>Crie sua conta e make the change._</h5>
                <Form action="get" onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="digite seu nome completo" leftIcon={<MdPerson3 />} name="name" control={control} />
                    <Input placeholder="digite seu e-mail..." leftIcon={<MdEmail />} name="email" control={control}/>
                    <Input placeholder="digite sua senha " leftIcon={<MdLock />} name="password" control={control}/>
                    <Button variant="Secondary" title="Criar conta" />
                </Form>
                <p>Ao clicar em "criar minha conta grátis",<br /> declaro que aceitoas Políticas de Privacidade <br /> e os Termos de Uso da DIO.</p>
            </Column>
        </Row>
        </>
    )
}
export default Cadastrar;