import { useLoaderData } from 'react-router-dom';

import axios from 'axios';

const cocktailSearchUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const loader = async () => {
  // const searchTerm = 'margarita';
  const searchTerm = '';
  const response = await axios.get(`${cocktailSearchUrl}${searchTerm}`);
  // console.log(response);
  // return 'something';
  return { drinks: response.data.drinks, searchTerm };
};

const Landing = () => {
  // const data = useLoaderData();
  const { drinks, searchTerm } = useLoaderData();

  // console.log(data);
  console.log(drinks);

  return <div>Landing</div>;
};
export default Landing;
