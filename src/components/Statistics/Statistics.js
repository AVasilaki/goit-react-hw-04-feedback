export const Statistic = ({
  good,
  neutral,
  bad,
  countTotalFeedback,
  // countPositiveFeedbackPercentage,
}) => {
  if (countTotalFeedback() !== 0) {
    return (
      <>
        <p>Good:{good}</p>
        <p>Neutral:{neutral}</p>
        <p>Bad:{bad} </p>
        <p>Total:{countTotalFeedback()}</p>
        {/* <p>Positive feedback:{countPositiveFeedbackPercentage()}%</p> */}
      </>
    );
  } else return 'There is no feedback';
};
