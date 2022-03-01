import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -7rem;
`;

export const Card = styled.div`
  background: var(--shape);
  padding: 1.5rem 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 0.875rem;
    font-size: 2rem;
    font-weight: 500;
  }
`;

interface TotalCardProps {
  amount: number;
}

export const TotalCard = styled(Card)<TotalCardProps>`
  background: ${props => {
    if (props.amount > 0) {
      return 'var(--green)';
    } else if (props.amount < 0) {
      return 'var(--red)';
    } else {
      return 'var(--shape)';
    }
  }};

  color: ${props => {
    if (props.amount > 0 || props.amount < 0) {
      return 'var(--shape)';
    } else {
      return 'var(--text-title)';
    }
  }};
`;
