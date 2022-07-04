import {Component} from "react";

import feedback from '../data/dataFeedback'
import Section from './Section'
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Notification from "./Notification";

import styles from './app.module.css'

export class App extends Component {

  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }

  onLeaveFeedback = (propertyName) => {
    this.setState(prevState => {
      return {
        [propertyName]: prevState[propertyName] +1
      }
    })
    
  }
  
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const result = `${Math.round(good * 100 / totalFeedback)}%`;
    return result
  }


  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return(
      <div className={styles.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.onLeaveFeedback} options={feedback} />
      </Section>
        <Section title="Statistics">
          {total ? (<Statistics total={total} good={good} neutral={neutral} bad={bad} percentage={percentage} />) : <Notification message="There is no feedback" />}
     </Section>
     </div>
   )
  }
};
