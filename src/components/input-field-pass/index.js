import React, { useState } from 'react';

import { BoxField, Label, Input, IconField, BoxInput } from './styles';

function InputFieldPass({
    name,
    label,
    value,
    placeholder
}) {

    const [valid, setValid] = useState(false);
    const [typePass, setTypePass] = useState('password');

    const onChangeValue = (e) => {
        const v = e.target.value.length > 0 ? 'visited' : '';
        setValid(v)
        value(e.target.value)
    };

    const onClickField = (e) => {
        if (typePass === 'password') {
            e.target.innerText = "visibility_off"
            setTypePass('text')
        }
        else {
            e.target.innerText = "visibility"
            setTypePass('password')
        }

    };

    return (
        <>
            <BoxField>
                <Label className={valid}>{label}</Label>
                <BoxInput>
                    <Input type={typePass} name={name} autoComplete="new-password" placeholder={placeholder} onChange={onChangeValue}></Input>
                    <IconField onClick={onClickField} className="material-icons md-18">visibility</IconField>
                </BoxInput>
            </BoxField>
        </>
    );
}

export default InputFieldPass;