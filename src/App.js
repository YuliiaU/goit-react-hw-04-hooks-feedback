import { useState } from "react";
import Section from "./components/Section";
import Statistics from "./components/Statistics";
import FeedbackOptions from "./components/FeedbackOptions";
import Notification from "./components/Notification";


export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = (feedback) => {
    switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        return;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        return;
      case 'bad':
        setBad(prevState => prevState + 1);
        return;
      default:
        return;
    };
  };

  const countTotalFeedback = good + neutral + bad;
  const countPositiveFeedbackPercentage = Math.round(
      (good / countTotalFeedback) * 100
  );
  const options = Object.keys({ good, neutral, bad });
  
  return (
      <>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={handleFeedback}
          />
        </Section>

        <Section title="Statistics">
          {countTotalFeedback ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback}
              positivePercentage={countPositiveFeedbackPercentage}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
};