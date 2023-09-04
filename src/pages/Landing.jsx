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

export const loader =
  (queryClient) =>
  async ({ request }) => {
    // console.log(request);
    const url = new URL(request.url);
    const searchTerm = url.searchParams.get('search') || '';
    await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
    return { searchTerm };
  };

const Landing = () => {
  const { searchTerm } = useLoaderData();
  // const { data: drinks, isLoading } = useQuery(
  const { data: drinks } = useQuery(searchCocktailsQuery(searchTerm));

  // if (isLoading) return <h4>Loading...</h4>;

  return (
    <>
      <SearchForm searchTerm={searchTerm} />
      <CocktailList drinks={drinks} />
    </>
  );
};
export default Landing;
