import { Wrapper, Form, Button, SearchInput, Text, Warning } from "./streetSearch.style";
import { useActions } from "../../hooks/useActions";
import React, { useState} from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const CitySearch = ({city} : {city: string}) => {

  const { fetchStreets } = useActions();
  const [query, setQuery] = useState('');

  const { error, streets } = useTypedSelector(state => state.street);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetchStreets(city, query);
  };

  const handleSearchInputChnage = (query: string) => {
    if(streets.length) {
      console.log('query', query);
      fetchStreets(city, query);
    }
  }


  return (
    <Wrapper>
      <Text>Поиск по улицам в г. {city}</Text>
        <Form onSubmit={handleFormSubmit}>
          <SearchInput 
            lang='ru'
            placeholder="введите название улицы" 
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setQuery(e.target.value);
              handleSearchInputChnage(e.target.value);
            }}
          />
          <Button onClick={handleFormSubmit}>
            Поиск
          </Button>
        </Form>
        {error  &&
          <Warning>
            {error}
          </Warning>
        }
    </Wrapper>
  );
};

export default CitySearch;
