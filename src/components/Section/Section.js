import { Container } from './Section.styled';
export const Section = ({ title, children }) => {
  return (
    <Container>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
    </Container>
  );
};
