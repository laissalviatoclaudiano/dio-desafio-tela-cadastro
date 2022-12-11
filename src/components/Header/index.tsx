import React from 'react';

import { useNavigate } from 'react-router-dom';

import logo from '../../assets/logo-dio.png';
import { Button } from '../Button';

import {
    BuscarInputContainer,
    Container,
    Input,
    Menu,
    Row,
    UserPicture,
    Wrapper
} from './styles';
import { IHeader } from './types';

const Header = ({autenticado}: IHeader) => {

    const navigate = useNavigate();

    const handleClickHome = () => {
        navigate('/')
    }

    const handleClickLogin = () => {
        navigate('/login')
    }

    const handleClickCadastro = () => {
        navigate('/cadastro')
    }

    return (
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt="Logo da DIO" />
                    {autenticado ? (
                        <>
                            <BuscarInputContainer>
                                <Input placeholder='Buscar...' />
                            </BuscarInputContainer>
                            <Menu>Live Code</Menu>
                            <Menu>Global</Menu>
                        </>
                    ) : null}
                </Row>
                <Row>
                    {autenticado ? (
                        <UserPicture src="https://avatars.githubusercontent.com/u/116599744?v=4" />
                    ) : (
                        <>
                            <Button title="Home" variant="primary" onClick={handleClickHome} />
                            <Button title="Entrar" variant="primary" onClick={handleClickLogin} />
                            <Button title="Cadastrar" variant="primary" onClick={handleClickCadastro} />
                        </>
                    )}
                </Row>
            </Container>
        </Wrapper>
    )
}

export { Header }