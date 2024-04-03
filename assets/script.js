const greeting = 'Hi full-stacker!';
const topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
let topicsList = "";


const listTopics = () => {
  for (let i = 0; i < topics.length; i++) {
    if (i < 3) {
      topicsList += ` ${topics[i]},`;
    } else {
      topicsList += ` ${topics[i]}.`;
    }  
  }
  
  console.log(`Let\'s study! Our topics are:${topicsList}`);
};

const readyFunc = () => {
  console.log(greeting);
  listTopics();
};

window.onload = readyFunc();