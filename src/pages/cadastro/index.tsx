import { MdEmail, MdLock, MdPerson, MdPhone } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

import { api } from '../../services/api';

import { 
    Container, 
    Wrapper, 
    Column, 
    Row,
    Title, 
    Subtitle,
    TitleCadastro, 
    SubtitleCadastro, 
    TermsAndConditionsText, 
    LoginText, 
    LoginTextHighlight } from "./styles";
import { IFormDataCadastro } from "./types";

const schema = yup.object({
    name: yup.string().required('Campo obrigatório'),
    email: yup.string().email('Este e-mail não é válido').required('Campo obrigatório'),
    phone: yup.number().required('Campo obrigatório'),
    password: yup.string().min(3, 'No mínimo 3 caracteres').required('Campo obrigatório'),
  }).required();

const Cadastro = () => {

    const navigate = useNavigate();

    const { control, handleSubmit, formState: { errors } } = useForm<IFormDataCadastro>({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData: IFormDataCadastro) => {
        try{
            const { data } = await api.get(`users?name=${formData.name}&email=${formData.email}&phone=${formData.phone}&senha=${formData.password}`);
            if(data.length === 1){
                navigate('/feed')
            }
        }catch{
            alert('Houve um erro, tente novamente.')
        }
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>
                    A plataforma para você aprender com experts, dominar as principais tecnologias e 
                    entrar mais rápido nas empresas mais desejadas.
                </Title>
                <br />
                <Subtitle>Voltar para login</Subtitle>
            </Column>
            <Column>
                <Wrapper>
                    <TitleCadastro>Comece agora grátis</TitleCadastro>
                    <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input name="name" errorMessage={errors?.name?.message} control={control} placeholder="Nome completo" leftIcon={<MdPerson/>} />
                        <Input name="email" errorMessage={errors?.email?.message} control={control} placeholder="Seu melhor @e-mail" leftIcon={<MdEmail />} />
                        <Input name="phone number" errorMessage={errors?.phone?.message} control={control} placeholder="Celular ex: (11) 96123-4567" leftIcon={<MdPhone />} />
                        <Input name="password" errorMessage={errors?.password?.message} control={control} placeholder="Senha" type="password" leftIcon={<MdLock />} />
                        <br />
                        <Button title="Criar minha conta grátis" variant="secondary" type="submit" />
                    </form>
                        <br />
                        <TermsAndConditionsText>Ao clicar em "criar minha conta grátis", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</TermsAndConditionsText>
                        <br />
                        <Row>
                            <LoginText>Já tenho conta.</LoginText>
                            <LoginTextHighlight>Fazer login.</LoginTextHighlight>
                        </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }