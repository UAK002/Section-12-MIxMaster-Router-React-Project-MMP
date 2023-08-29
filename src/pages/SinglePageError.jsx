import { useRouteError } from 'react-router-dom';

const SinglePageError = () => {
  const error = useRouteError();
  console.log(error);
  //   return <div>SinglePageError</div>;
  return <h2>{error.message}</h2>;
};
export default SinglePageError;
