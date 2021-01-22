import styled from 'styled-components';

const BoxField = styled.div`
  position: relative;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  margin: 0 10px;
  .visited{
    color: #5264ae;
  }
`;

const SmallText = styled.p`
  padding: 12px 12px 12px 13px;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  font-size: 10pt;
  outline: none;
  color: #8f8f8f;
  font-weight: 100;
  &:focus{
    border-color: #5264ae;
  }
  &:a{
    color: #4c8afe;
    font-weight: 100;
    font-size: 10pt;
  }
`;

const CheckBoxComp = styled.input `
    type: checkbox;
    width: 20px;
    margin-right: 5px;
    border: 1px solid #e6e6e6;
`


export {
    BoxField,
    SmallText,
    CheckBoxComp
}