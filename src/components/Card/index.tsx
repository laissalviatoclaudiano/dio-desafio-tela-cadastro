import React from 'react'
import { FiThumbsUp } from 'react-icons/fi'

import { 
    CardContainer, 
    Content, 
    HasInfo, 
    ImageBackground, 
    PostInfo, 
    UserInfo, 
    UserPicture 
} from './styles';

const Card = () => {
  return (
    <CardContainer>
        <ImageBackground src="https://blogjack.blob.core.windows.net/medias/2020/06/hello-world.jpeg" />
        <Content>
            <UserInfo>
                <UserPicture src="https://avatars.githubusercontent.com/u/116599744?v=4" />
                <div>
                    <h4>Laís Claudiano</h4>
                    <p>Há 8 minutos</p>
                </div>
            </UserInfo>
            <PostInfo>
                <h4>Projeto para o curso de HTML e CSS</h4>
                <p>Projeto feito para o curso de HTML e CSS no bootcamp Orange Tech + da DIO...<strong>Saiba Mais</strong></p>
            </PostInfo>
            <HasInfo>
                <h4>#HTML #CSS #JavaScript</h4>
                <p>
                    <FiThumbsUp /> 10
                </p>
            </HasInfo>
        </Content>
    </CardContainer>
  )
}

export { Card }
