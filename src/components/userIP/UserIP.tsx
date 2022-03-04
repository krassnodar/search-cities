import { 
  Wrapper,
  Text,
  TextH1,
  WrapperInnerLeft,
  WrapperInnerRight
} from "./userIP.style";

interface IProps {
  ipAddress: string;
  city: string;
}

const UserIP = ({ ipAddress, city }: IProps) => {
  return (
  <Wrapper>
    <WrapperInnerLeft>
      <Text>
      What is my IP address?
      </Text>
      <TextH1 decorate>
        {ipAddress}
      </TextH1>
      <Text>
        My IP address location:
      </Text>
      <TextH1>
        {city}
      </TextH1>
    </WrapperInnerLeft>
    <WrapperInnerRight>

    </WrapperInnerRight>
  </Wrapper>
  );
};

export default UserIP;
