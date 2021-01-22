import React from 'react';

import { Button, TextBtn, IconField, BoxBtn } from './styles';


export default function RegisterBtn() {

  return(
        <Button>
            <BoxBtn>
                <IconField className="material-icons md-18">lock</IconField>
                <TextBtn>Cadastrar</TextBtn>
            </BoxBtn>
        </Button>
    );
}

