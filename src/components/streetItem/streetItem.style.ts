import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px 16px;
  cursor: pointer;
  display: flex;
  color: #333;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.45;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid #e1e1e1;

  &:hover {
    background-color: #EDF3FE;
    text-decoration: underline;
  }
`

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`