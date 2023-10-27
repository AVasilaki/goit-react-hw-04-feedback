import { Wrapper } from './feedback.styled';
export const Feedback = ({ leaveFeedback }) => {
  return (
    <Wrapper>
      <button type="button" onClick={() => leaveFeedback('good')}>
        Good
      </button>
      <button type="button" onClick={() => leaveFeedback('neutral')}>
        Neutral
      </button>
      <button type="button" onClick={() => leaveFeedback('bad')}>
        Bad
      </button>
    </Wrapper>
  );
};
