//import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Container, FilterInput } from './Filter.styled';

export function Filter({ filter, handleChange }) {
  return (
    <Container>
      <label>
        Find contacts by name
        <br />
        <FilterInput
          type="text"
          name="filter"
          autoComplete="off"
          required
          onChange={handleChange}
          value={filter}
        />
      </label>
    </Container>
  );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
