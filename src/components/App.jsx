import {useState} from "react";
import Section from "./Section/Section";
import FeedbackOptions  from "./FeedbackOptions/FeedbackOptions ";
import Statistics from "./Statistics/Statistics";
import Notification from "./Notification/Notification";


export default function App() {

  const [good, setGoog] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
   
  const  countTotalFeedback = (feedback) => {
    switch (feedback) {
      case "good":
        setGoog(prev => prev + 1);
        break;
      
      case "neutral":
        setNeutral(prev => prev + 1);
        break;    
      
      case "bad":
        setBad(prev => prev + 1);
        break;    
      default:
        return
    };
  };
   
  const  countPositiveFeedbackPercentage = (good, neutral, bad) => {
    const total = good + neutral + bad;
    if (total === 0) {
      return 0
    } 
    const positiveFeedback = (good / total) * 100;
    return positiveFeedback.toFixed(2);
  };

 

  let total = countPositiveFeedbackPercentage( good, neutral, bad);
    
    return (
      <Section title="Please leave feedback">
      <ul>
        <FeedbackOptions 
        countTotal={countTotalFeedback}  
        option={["Good", "Neutral", "Bad"]} />
      </ul>
        {total === 0
        ? <Notification message="There is no feedback" />
        :<Statistics
        good={good} 
        neutral={neutral}
        bad={bad}
        total={total}
      />
      }  
      </Section>
    )
  } 



















// import React, { Component } from "react";
// import Section from "./Section/Section";
// import FeedbackOptions  from "./FeedbackOptions/FeedbackOptions ";
// import Statistics from "./Statistics/Statistics";
// import Notification from "./Notification/Notification";


// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0
//   };
   
//   countTotalFeedback = (feedback) => {
//     this.setState(prevState => {
//       return {
//         ...prevState,
//         [feedback]: prevState[feedback] + 1
//       }
//     });

    
//   };
   
//   countPositiveFeedbackPercentage = (good, neutral, bad) => {
//     const total = good + neutral + bad;
//     if (total === 0) {
//       return 0
//     } 
//     const positiveFeedback = (good / total) * 100;
//     return positiveFeedback.toFixed(2);
//   };

//   render()
   
//   {
//     const { good, neutral, bad } = this.state;
//     let total = this.countPositiveFeedbackPercentage( good, neutral, bad);
    
//     return (
//       <Section title="Please leave feedback">
//       <ul>
//         <FeedbackOptions 
//         countTotal={this.countTotalFeedback}  
//         option={["Good", "Neutral", "Bad"]} />
//       </ul>
//         {total === 0
//         ? <Notification message="There is no feedback" />
//         :<Statistics
//         good={good} 
//         neutral={neutral}
//         bad={bad}
//         total={total}
//       />
//       }  
//       </Section>
//     )
//   } 
// };










