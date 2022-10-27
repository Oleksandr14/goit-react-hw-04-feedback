import { useState } from 'react';

import { GlobalStyle } from '../styles/GlobalStyle';

import { Statistics } from './Statistics/Statistics';

import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

import { Section } from './Section/Section';

import { Notification } from './Notification/Notification';

import { Box } from './Box';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const leaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(p => p + 1);
        break;
      case 'neutral':
        setNeutral(p => p + 1);
        break;
      case 'bad':
        setBad(p => p + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;

  const positiveFeedback = Math.round((good * 100) / totalFeedback);

  return (
    <div>
      <Box
        width={480}
        ml="auto"
        mr="auto"
        boxShadow={
          '0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2)'
        }
      >
        <Section>
          <FeedbackOptions
            title="Please leave feedback"
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={leaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {totalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedback ? positiveFeedback : 0}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </Box>
      <GlobalStyle />
    </div>
  );
};
