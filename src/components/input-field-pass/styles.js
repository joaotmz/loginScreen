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

const Input = styled.input`
  padding: 12px 12px 12px 13px;
  border: 0;
  font-size: 14pt;
  outline: none;
  color: #8f8f8f;
  font-weight: 100;
  width: 90%;
  &:focus{
    border-color: #5264ae;
  }
  &::placeholder{
    color: #cccccc;
    font-weight: 100;
    font-size: 14pt;
  }
`;

const Label = styled.label`
  color: #999;
  font-size: 14pt;
  padding: 5px 0;
  line-height: 16pt;
  ${Input}:focus ~ & {
    color: #5264ae;
  }
`;

const IconField = styled.i`
  color: #999;
  cursor: pointer;
  width: 15%;
  text-align: center;
`;

const BoxInput = styled.div`
  display: inline-flex;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  align-items: center;
`;



export {
  BoxField,
  Label,
  Input,
  IconField,
  BoxInput
}
