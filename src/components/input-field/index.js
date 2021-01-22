import React, { useState } from 'react';

import { BoxField, Label, Input } from './styles';

function InputField({
    type,
    name,
    label,
    value,
    maxLength,
    placeholder,
    maskChange
}) {

    const [valid, setValid] = useState(false);

    const onChangeValue = (e) => {
        const v = e.target.value.length > 0 ? 'visited' : '';
        setValid(v)
        if(maskChange){
            e.target.value = maskChange(e.target.value)
        }
        value(e.target.value)
    };

    return (
        <>
            <BoxField>
                <Label className={valid}>{label}</Label>
                <Input type={type} name={name} autoComplete="off" placeholder={placeholder} maxLength={maxLength} onChange={onChangeValue}></Input>
            </BoxField>
        </>
    );
}

export default InputField;