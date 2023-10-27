// import { Component } from 'react';
import { Feedback } from './feedback/Feedback';
import { Statistic } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { useState } from 'react';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   leaveFeedback = newState => {
//     this.setState(prevState => ({
//       [newState]: prevState[newState] + 1,
//     }));
//   };

//   countTotalFeedback = total =>
//     (total = this.state.good + this.state.neutral + this.state.bad);

//   countPositiveFeedbackPercentage = percentege => {
//     const state = this.state;
//     const total = state.good + state.neutral + state.bad;

//     if (total !== 0) {
//       return Math.ceil((percentege = (state.good / total) * 100));
//     }
//   };

//   render() {
//     const state = this.state;

//     return (
//       <div>
//         <Section title={'Please leave feedback'}>
//           <Feedback leaveFeedback={this.leaveFeedback}></Feedback>
//         </Section>
//         <Section title={'Statistic'}>
//           <Statistic
//             state={state}
//             countTotalFeedback={this.countTotalFeedback}
//             countPositiveFeedbackPercentage={
//               this.countPositiveFeedbackPercentage
//             }
//           ></Statistic>
//         </Section>
//       </div>
//     );
//   }
// }
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
  const countTotalFeedback = total => (total = good + neutral + bad);
  return (
    <div>
      <Section title={'Please leave feedback'}>
        <Feedback
          onGood={onGood}
          onNeutral={onNeutral}
          onBad={onBad}
        ></Feedback>
      </Section>
      <Section title={'Statistic'}>
        <Statistic
          good={good}
          neutral={neutral}
          bad={bad}
          countTotalFeedback={countTotalFeedback}
        ></Statistic>
      </Section>
    </div>
  );
};
