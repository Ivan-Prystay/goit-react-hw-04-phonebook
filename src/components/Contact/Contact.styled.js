import styled from 'styled-components';

export const ContactItem = styled.li`
  font-size: inherit;
  line-height: 150%;
`;

export const DeleteContact = styled.button`
  margin-left: 20px;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: #e2e2e2f1;

  &:active,
  &:hover {
    background-color: #467bcad2;
    color: white;
    outline: none;
    border: none;
  }
  &:active {
    color: red;
    background-color: #e2e2e2f1;
  }
`;
