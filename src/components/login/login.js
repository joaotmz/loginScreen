import React, { useState } from 'react';
import LogoSVG from '../../assets/images/logo.svg'
import { Box, Banner, FormBox, Logo, PhraseBanner, TextBanner, FieldFormFull, FieldFormMiddle, FormBoxBody, TitleDiv, Title, Subtitle, Success, SuccessInformation, ErrorEmail } from './styles';
import InputField from '../../components/input-field';
import InputFieldPass from '../../components/input-field-pass';
import CheckBox from '../check-box/'
import RegisterBtn from '../Register-btn/'
import AlreadyAcustomer from '../already-a-customer/'
import { cpfMask, dateMask } from '../../util/mask';
 




export default function Login() {

    const [Email, setEmail] = useState()
    const [cpf, setCPF] = useState()
    const [dateBirth, setDateBirth] = useState()
    const [pass, setPass] = useState()

    let isRegister = false
    let isEmail = true

    const Register = () => {
        this.isRegister = true
    if(Email.length > 0){
        this.isRegister = true
        }
    else if(Email.length === 0){
        this.isEmail = false
    }

    }

    return (
        <>
            <Box>
                <Banner>
                    <PhraseBanner>
                        "Obtive crédito para capital de giro. O processo foi bem sucedido e tudo que foi abordado, foi cumprido."
                    </PhraseBanner>
                    <TextBanner>Camila Bragança,</TextBanner>
                    <TextBanner light>Sideral Tecnologia</TextBanner>
                </Banner>
                <FormBox>
                    {isRegister === true?                
                    <Success>
                        <SuccessInformation>
                            Parabéns! Cadastro realizado com sucesso!
                        </SuccessInformation>
                    </Success> 
                    :
                    <Logo src={LogoSVG}></Logo>
                    }
    
                    <TitleDiv>  
                        <Title>Criar meu cadastro</Title>
                        <Subtitle>Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.</Subtitle>
                    </TitleDiv>

                    <FormBoxBody>
                        <FieldFormFull>
                            <InputField type="text" maxLength="100" name="Email" label="E-mail" placeholder="Escreva seu E-mail" value={setEmail} />
                            {isEmail === false && 
                            <ErrorEmail>O campo email é obrigatório</ErrorEmail>
                            }
                        </FieldFormFull>
                        <FieldFormMiddle>
                            <InputField type="text" maxLength="14" name="cpf" label="CPF" placeholder="998.767.888-70" value={setCPF} maskChange={cpfMask} />
                        </FieldFormMiddle>
                        <FieldFormMiddle>
                            <InputField type="text" maxLength="10" name="dateBirth" label="Data de Nascimento" placeholder="21/12/1990" value={setDateBirth} maskChange={dateMask} />
                        </FieldFormMiddle>

                        <FieldFormFull>
                            <InputFieldPass maxLength="20" name="pass" label="Senha" placeholder="Cadastre uma senha" value={setPass} />
                        </FieldFormFull>
                        <FieldFormFull>
                            <CheckBox />
                        </FieldFormFull>
                        <FieldFormFull>
                            <RegisterBtn onclick={() => Register}/>
                        </FieldFormFull>
                        <FieldFormFull>
                            <AlreadyAcustomer />
                        </FieldFormFull>
                    </FormBoxBody>
                </FormBox>
            </Box>
        </>
    );
}
