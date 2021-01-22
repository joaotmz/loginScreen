import styled from 'styled-components';


const SmallText = styled.p`
  padding: 12px 12px 12px 13px;
  border-top: 1px solid #e6e6e6;
  font-size: 10pt;
  text-align: center;
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

export{
    SmallText
}