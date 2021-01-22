import styled, { css } from 'styled-components';
import bannerBg from '../../assets/images/background.png';


const Box = styled.div`
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100vw;
    position: relative;
`;

const FormBox = styled.div`
    padding: 10px;
    background-color: #fff;
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media(max-width: 767px) {
        width: 100%
      }
`;

const FormBoxBody = styled.div`
    display: flex;
    flex-flow: wrap;
    padding: 20px 30px;
    position: relative;
    width: 70%;
`;

const FieldFormMiddle = styled.div`
    width: 50%;
    box-sizing: border-box;
    @media(max-width: 1025px) {
        width: 100%
      }
`;

const FieldFormFull = styled.div`
    width: 100%;
`;

const Banner = styled.div`
    width: 50%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-repeat: no-repeat;
    background-size: inherit;
    align-items: flex-end;
    justify-content: flex-end;
    background-image: url(${bannerBg});
    background-size: cover;
    background-position: center;
    &::before{
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0) 16%, rgba(0, 0, 0, 0) 42%, rgba(0, 0, 0, 0.5) 69%, rgba(0, 0, 0, 0.8) 96%);
        z-index: 1;
    }

    @media(max-width: 767px) {
        display: none
      }

`;


const Logo = styled.img`
    width: 85px;
    position: absolute;
    right: 30px;
    top: 30px;
    @media(max-width: 815px) {
        border-bottom: 1px solid #e6e6e6
      }
    
`;

const PhraseBanner = styled.h4`
    color: #fff;
    width: 80%;
    text-align: right;
    font-size: 19pt;
    padding: 0 30px;
    z-index: 2;
    line-height: 27pt;
    font-weight: 400;
    margin: 10px 0;
`;

const TextBanner = styled.p`
    color: #fff;
    width: 40%;
    max-width: 320px;
    text-align: right;
    font-size: 18pt;
    padding: 0 30px;
    z-index: 2;
    font-weight: 800;
    margin: 0;
    ${props => props.light && css`
        font-weight: 400;
        padding-bottom: 40px;
    `}
`;

const TitleDiv = styled.div `
    margin-top: 20px;
    @media(min-width: 1200px) {
        position: absolute;
        top: 130px;
        width: 320px
      }
`

const Title = styled.h3`
    color: #333;
    text-align: center;
    font-size: 24px;
    padding: 0 30px;
    font-weight: 600;
    margin: 0;


`;

const Subtitle = styled.p `
    color: #8f8f8f;
    font-size: 16px;
    text-align: center
`

const Success = styled.div `
    background: #2ecc71;
    width: 50%;
    height: 64px;
    position: absolute;
    top: 0
`

const SuccessInformation = styled.p`
    color: #fff;
    font-size: 16px;
    text-align: center;
    padding: 10px
`

const ErrorEmail = styled.p `
    color: #ff5863;
    font-size: 14px;    
`



export {
    Box,
    FormBox,
    FormBoxBody,
    Banner,
    Logo,
    PhraseBanner,
    TextBanner,
    FieldFormMiddle,
    FieldFormFull,
    Title,
    TitleDiv,
    Subtitle,
    Success,
    SuccessInformation,
    ErrorEmail
}