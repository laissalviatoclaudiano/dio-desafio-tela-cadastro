import React from 'react'
import { IUserInfo } from "./types";

import { Container, UserPicture, NameText, Progress } from './styles'

const UserInfo = ({name, image, percentage}: IUserInfo) => {
  return (
    <Container>
        <UserPicture src={image} />
        <div>
            <NameText>{name}</NameText>
            <Progress percentage={percentage} />
        </div>
    </Container>
  )
}

export { UserInfo }
