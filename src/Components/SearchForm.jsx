import Wrapper from '../assets/wrappers/SearchForm';

import { Form, useNavigation } from 'react-router-dom';

const SearchForm = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';
  return (
    <Wrapper>
      <Form>
        <input
          type="search"
          className="form-input"
          name="search"
          defaultValue="vodka"
        />
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? 'searching...' : 'search'}
        </button>
      </Form>
    </Wrapper>
  );
};
export default SearchForm;
