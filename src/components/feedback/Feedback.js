import { Wrapper } from './feedback.styled';
export const Feedback = ({ feedback }) => {
  return (
    <ul>
      <Wrapper>
        {feedback.map(item => (
          <li key={item.id}>
            <button type="button" onClick={item.set}>
              {item.name}
            </button>
          </li>
        ))}
      </Wrapper>
    </ul>
  );
};
