import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 20px;
  background-color: grey;
`;

export const SectionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: space-around;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 400px;
  height: 400px;
  padding: 20px;
  background-color: white;
  border-radius: 2%;
  box-shadow: ${({ theme }) => {
    return theme.boxShadow;
  }};
  &.contacts {
    overflow-y: auto;
  }
`;

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
  font-size: 20px;
  text-transform: uppercase;
`;

export const SectionTitle = styled.h2`
  margin-top: 0;
  text-align: center;
  font-size: 20px;
`;
