import { Wrapper } from './feedback.styled';
export const Feedback = ({ onGood, onNeutral, onBad }) => {
  return (
    <Wrapper>
      <button type="button" onClick={onGood}>
        Good
      </button>
      <button type="button" onClick={onNeutral}>
        Neutral
      </button>
      <button type="button" onClick={onBad}>
        Bad
      </button>
    </Wrapper>
  );
};
