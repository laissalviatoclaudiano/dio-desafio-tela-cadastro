import { Card } from "../../components/Card"
import { UserInfo } from "../../components/UserInfo"
import { Header } from "../../components/Header"

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
    return (<>
        <Header autenticado={true} />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
                <TitleHighlight>#RANKING DA SEMANA</TitleHighlight>
                <UserInfo percentage={35} name="Laís Claudiano" image="https://avatars.githubusercontent.com/u/116599744?v=4"/>
                <UserInfo percentage={83} name="Laís Claudiano" image="https://avatars.githubusercontent.com/u/116599744?v=4"/>
                <UserInfo percentage={69} name="Laís Claudiano" image="https://avatars.githubusercontent.com/u/116599744?v=4"/>
                <UserInfo percentage={24} name="Laís Claudiano" image="https://avatars.githubusercontent.com/u/116599744?v=4"/>
                <UserInfo percentage={57} name="Laís Claudiano" image="https://avatars.githubusercontent.com/u/116599744?v=4"/>
            </Column>
        </Container>
    </>)
}

export { Feed }