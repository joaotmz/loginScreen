import React, { useState, useReducer } from 'react';
import { BoxField, SmallText, CheckBoxComp } from './styles';



export default function CheckBox() {
const Checkbox = ({ fnClick, fnChange, checked = false }) => (
      <CheckBoxComp
        onClick={e => {
          if (fnClick !== undefined) fnClick(e.target.checked);
        }}
        onChange={e => {
          if (fnChange !== undefined) fnChange(e.target.checked);
        }}
        checked={checked}
      />
  );

    const initialState = {
      click: false,
      change: false
      };

    const reducer = (state, action) => ({ ...state, ...action });
    const [state, setState] = useReducer(reducer, initialState);
  

    return(
        <>
        <BoxField>
            <SmallText>
            <Checkbox
            fnClick={v => setState({ click: v })}
            checked={state.click}
            />
            Li e estou de acordo com a <a href="/">Política de Privacidade</a> e a <a href="/">Política de Uso de Informações</a>.
            </SmallText>
        </BoxField>
    </>
    )

}
