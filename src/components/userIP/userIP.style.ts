import styled from "styled-components";

export const Wrapper = styled.div`
    background-color: #204872;
    padding: 16px 60px 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    flex: 1;
    height: 540px;
    margin-right: 20px;
`;

export const WrapperInnerLeft = styled.div`

`

export const WrapperInnerRight = styled.div`

`

export const TextH1 = styled.div<any>`
  font-size: 32px;
  line-height: 44px;
  font-weight: 600;
  background-color: #2d587f;
  margin-bottom: 2px;
  padding: 12px;
  text-decoration: ${props => props.decorate && 'underline'};
}


`

export  const Text = styled.div`
  margin: 5px 0;
`
