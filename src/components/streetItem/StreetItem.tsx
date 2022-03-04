import {
  Wrapper,
  Icon
} from './streetItem.style';
import { GoLocation } from 'react-icons/go';

export const StreetItem = ({street} : {street: string}) => {
  return (
    <Wrapper>
      <Icon>
        <GoLocation />
      </Icon>
      {street}
    </Wrapper>
  )
}

export default StreetItem;