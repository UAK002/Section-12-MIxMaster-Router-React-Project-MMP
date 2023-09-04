import { useLoaderData } from 'react-router-dom';

import axios from 'axios';
import CocktailList from '../Components/CocktailList';

import SearchForm from '../Components/SearchForm';

import { useQuery } from '@tanstack/react-query';

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'all'],
    queryFn: async () => {
      const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
      console.log(response.data.drinks);
      return response.data.drinks;
    },
  };
};

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async ({ request }) => {
  console.log(request);
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  // const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);

  // return { drinks: response.data.drinks, searchTerm };
  return { searchTerm };
};

const Landing = () => {
  // const { drinks, searchTerm } = useLoaderData();
  const { searchTerm } = useLoaderData();
  const { data: drinks, isLoading } = useQuery(
    searchCocktailsQuery(searchTerm)
  );

  if (isLoading) return <h4>Loading...</h4>;

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
