import * as React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-family: ${({ theme }) => theme.font.family.montserrat};
`;

const H2 = styled.h2`
  font-family: ${({ theme }) => theme.font.family.cormorant};
  font-weight: 300;
`;

const IndexPage = () => {
  return (
    <div>
      <H1>Witaj Świecie</H1>
      <H2>Witaj Świecie</H2>
    </div>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
