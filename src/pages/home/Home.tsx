import { Wrapper, Container } from "./home.style";
import { GlobalStyle } from "../../globalStyle";
import UserIP from "../../components/userIP/UserIP";
import CitySearch from "../../components/citySearch/StreetSearch";
import CityList from "../../components/cityList/StreetList";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import { useEffect } from "react";

const Home = () => {

  const { getIpAddress } = useActions();
  const { ipAddress, city, loading } = useTypedSelector(state => state.ip);
  const { streets } = useTypedSelector(state => state.street);

  useEffect(() => {
    getIpAddress();
  }, []);

  if(loading) {
    return (
      <>
        Загрузка...
      </>
    )
  }


  return (
    <Wrapper>
      <Container>
        <GlobalStyle />
        <UserIP 
          ipAddress={ipAddress}
          city={city}
        />
        <div style={{flex: '5'}}>
          <CitySearch 
              city={city}
            />
            {streets.length > 0 &&
              <CityList />
            }
        </div>
      </Container>
    </Wrapper>
  );
};

export default Home;
