import { useLoaderData, Link } from 'react-router-dom';
import axios from 'axios';
import Wrapper from '../assets/wrappers/CocktailPage';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

// export const loader = async (data) => {
export const loader = async ({ params }) => {
  // console.log(data);
  const { id } = params;
  // const response = await axios.get(`${singleCocktailUrl}${id}`);
  const { data } = await axios.get(`${singleCocktailUrl}${id}`);
  // console.log(response);
  // return null;
  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();
  return <div>Cocktail</div>;
};
export default Cocktail;
