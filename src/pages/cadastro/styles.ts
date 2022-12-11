import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin: 100px 250px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
`

export const Wrapper = styled.div`
    width: 100%;
    max-width: 300px;
`

export const Column = styled.div`
    flex: 1;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.h2`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    width: 320px;
    margin-bottom: 20px;
    line-height: 44px;

    color: #FFFFFF;
`

export const Subtitle = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    border-sizing: border-box;
    margin-bottom: 48px;
    text-transform: uppercase;

    color: #6A3FA6;
`

export const TitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    margin-bottom: 20px;
    line-height: 44px;
`

export const SubtitleCadastro = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    margin-bottom: 35px;
    line-height: 25px;
`

export const TermsAndConditionsText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 13px;
    line-height: 150%;
    box-sizing: border-box;
    margin: 16px 0;

    color: #FFFFFF;
`
export const LoginText = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    border-sizing: border-box;
    margin-bottom: 48px;

    color: #FFFFFF;
`
export const LoginTextHighlight = styled.p`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    border-sizing: border-box;
    margin-bottom: 48px;

    color: #22DD7A;
`