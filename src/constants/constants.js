const isDeploy = true;
export const prefix = isDeploy ? "/my-personal-website" : "";

export const projects = [
  {
    title: 'Memories App',
    description: "A pictures-sharing application building with MERN stack. Supporting sign in, sign up, Google account login, and comments functionalities.",
    image: prefix+'/images/1.png',
    tags: ['MongoDb', 'Express.js', 'React.js', 'Node.js'],
    source: 'https://github.com/JaneShaosyx/memories_app',
    visit: 'https://my-memories-project-client.netlify.app/',
    id: 0,
  },
  {
    title: 'Simple Piano Keyboard',
    description: "A playable virtual piano keyboard that can use the computer keyboard, touches(mobile devices), or clicks (PC) to play the notes. Using Vue.js to build the project and Tone.js to control the audio synthesis.",
    image: prefix+'/images/2.png',
    tags: ['Vue.js', 'Tone.js'],
    source: 'https://github.com/JaneShaosyx/simple-keyboard',
    visit: 'https://janeshaosyx.github.io/simple-keyboard/',
    id: 1,
  },
  {
    title: '2048 game',
    description: "A playable little web game using JQuery to implement the DOM manipulations.",
    image: prefix+'/images/3.png',
    tags: ['JQuery', 'HTML', "CSS"],
    source: 'https://github.com/JaneShaosyx/js-practice-2048',
    visit: 'https://janeshaosyx.github.io/js-practice-2048/',
    id: 2,
  },
  {
    title: 'Mini-React',
    description: "This is a code repository for the corresponding video tutorial. In this video, we will create a full Realtime Chat Application",
    image: prefix+'/images/4.png',
    tags: ['JavaScript'],
    source: 'https://github.com/JaneShaosyx/Mini-React',
    visit: 'https://codepen.io/janeshaosyx/pen/RwZPdJb',
    id: 3,
  },
];

export const TimeLineData = [
  { year: 2016, text: 'Started my journey, built a mini-game using PyGame', },
  { year: 2018, text: 'Start studying at McGill University', },
  { year: 2020, text: 'Self-learning JavaScript and its libraries', },
  { year: 2021, text: 'Graduated from McGill University', },
];