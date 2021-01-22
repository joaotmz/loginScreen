import styled from 'styled-components';

const Button = styled.button`
  background:#4c8afe ;
  color: #fff;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #4c8afe;
  border-radius: 3px;
  display: block;
  margin: 0 auto;
  width: 100%;
  cursor: pointer
`;

const TextBtn = styled.p `
font-family: Arial;
font-size: 16px;
color: #fff;
font-weight: 800;
`;

const IconField = styled.i`
  color: #fff;
  width: 15%;
  text-align: center;
  margin-right: 5px;
  left: 25px;
  position: absolute;
`;

const BoxBtn= styled.div`
  display: inline-flex;
  align-items: center;
`;

export{
    Button,
    TextBtn,
    IconField,
    BoxBtn
}
