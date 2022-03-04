import styled from "styled-components";

export const Wrapper = styled.div`
  margin-bottom: 10px;
`;

export const Form = styled.form`
    background-color: transparent;
    margin: 4px 0 0;
    padding: 0;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    height: 45px;
    line-height: 45px;
    color: #6b6b6b;
    font-weight: 300;
    width: 80%;
    padding: 6px 12px;
    font-size: 16px;
    background-color: #fcfcfc;
    border: 1px solid #e6e6e6;
    outline: none;

      &:hover {
        border-color: #afabac;
      }

      &:focus-within {
        border-color: #afabac;
      }
`;

export const Text = styled.div`
  font-size: 32px;
  line-height: 44px;
  font-weight: 600;
`;

export const Warning = styled.div`
  color: #FE2939;
`


export const Button = styled.div`
    line-height: 45px;
    font-size: 25px;
    border: none;
    color: #fff;
    font-weight: 700;
    background-color: #0087bc;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
    width: 20%;
    padding: 6px;
`