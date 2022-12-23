import { Component } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import { Container, FilterInput } from './Filter.styled';

export class Filter extends Component {
  FilterInput = nanoid(3);

  render() {
    return (
      <Container>
        <label htmlFor={this.FilterInput}>Find contacts by name</label>
        <FilterInput
          type="text"
          name="filter"
          autoComplete="off"
          required
          onChange={this.props.handleChange}
          value={this.props.filter}
          id={this.FilterInput}
        />
      </Container>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
