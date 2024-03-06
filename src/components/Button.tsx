import styled from '@emotion/styled';
import React, { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  onClick?: () => void;
}

export const Button = ({ children, onClick }: Props) => {
  return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  display: flex;
  width: fit-content;
  padding: 4px 8px;
  border: 1px solid black;
  border-radius: 4px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: lightgray;
  }
`;
