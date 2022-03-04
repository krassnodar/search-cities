import { Wrapper, StreetListUl } from "./streeetList.style";
import StreetItem from "../streetItem/StreetItem";
import { useTypedSelector } from "../../hooks/useTypedSelector";


const CityList = () => {

  const { streets } = useTypedSelector(state => state.street);

  return (
    <Wrapper>
      <StreetListUl>
        {streets.map(street => (
          <StreetItem 
            key={street.value}
            street={street.value}
          />
        ))}
      </StreetListUl>
    </Wrapper>
  );
};

export default CityList;
