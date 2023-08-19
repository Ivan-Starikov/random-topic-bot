const topics = [
  'What is the one random word you always say?',
  'Do you believe in Reincarnation?',
  'What’s the best dream you’ve ever seen and always wish for it to repeat?',
  'What do you regret doing in life?',
  'What is something you never shared with any person?',
  'Who do you think has the easiest life in your friend group/family?',
];

export const getRandomTopic = () => {
  return topics[Math.floor(Math.random() * topics.length)];
};

