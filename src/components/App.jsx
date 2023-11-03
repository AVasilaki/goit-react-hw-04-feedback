import { Feedback } from './feedback/Feedback';
import { Statistic } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onGood = () => {
    setGood(good + 1);
  };
  const onNeutral = () => {
    setNeutral(neutral + 1);
  };
  const onBad = () => {
    setBad(bad + 1);
  };
  const feedback = [
    { name: 'Good', set: onGood, id: 1 },
    { name: 'Bad', set: onBad, id: 2 },
    { name: 'Neutral', set: onNeutral, id: 3 },
  ];
  const countTotalFeedback = total => (total = good + neutral + bad);

  const countPositiveFeedbackPercentage = percentege => {
    const total = good + neutral + bad;

    if (total !== 0) {
      return Math.ceil((percentege = (good / total) * 100));
    }
  };

  return (
    <div>
      <Section title={'Please leave feedback'}>
        <Feedback
         
          feedback={feedback}
        ></Feedback>
      </Section>
      <Section title={'Statistic'}>
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback}
          countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        ></Statistic>
      </Section>
    </div>
  );
};
