const generateRandomColor = () => {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  // avoid displaying a white logo on the white background
  while (randomColor[0] === 'f') {
    randomColor = `a${randomColor.slice(1)}`;
  }
  return randomColor;
};

const techStack = [
  {
    label: 'HTML5',
    src: `https://img.shields.io/badge/html5-%23.svg?style=for-the-badge&logo=html5&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'CSS3',
    src: `https://img.shields.io/badge/css3-%23.svg?style=for-the-badge&logo=css3&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'JavaScript',
    src: `https://img.shields.io/badge/javascript-%23.svg?style=for-the-badge&logo=javascript&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'Chart.js',
    src: `https://img.shields.io/badge/ChartJS-%23.svg?style=for-the-badge&logo=chart-dot-js&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'Node.js',
    src: `https://img.shields.io/badge/Node.js-%23.svg?style=for-the-badge&logo=node-dot-js&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'npm',
    src: `https://img.shields.io/badge/npm-%23.svg?style=for-the-badge&logo=npm&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'Express.js',
    src: `https://img.shields.io/badge/express-%23.svg?style=for-the-badge&logo=express&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'React',
    src: `https://img.shields.io/badge/react-%23.svg?style=for-the-badge&logo=react&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'React Router',
    src: `https://img.shields.io/badge/react_router-%23.svg?style=for-the-badge&logo=react-router&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'Styled-Components',
    src: `https://img.shields.io/badge/Styled--Components-%23.svg?style=for-the-badge&logo=Styled-Components&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'Redux',
    src: `https://img.shields.io/badge/redux-%23.svg?style=for-the-badge&logo=redux&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'Sequelize',
    src: `https://img.shields.io/badge/Sequelize-%23.svg?style=for-the-badge&logo=Sequelize&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'PostgreSQL',
    src: `https://img.shields.io/badge/PostgreSQL-%23.svg?style=for-the-badge&logo=PostgreSQL&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'Markdown',
    src: `https://img.shields.io/badge/Markdown-%23.svg?style=for-the-badge&logo=Markdown&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'Heroku',
    src: `https://img.shields.io/badge/Heroku-%23.svg?style=for-the-badge&logo=Heroku&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'Git',
    src: `https://img.shields.io/badge/Git-%23.svg?style=for-the-badge&logo=Git&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'Postman',
    src: `https://img.shields.io/badge/Postman-%23.svg?style=for-the-badge&logo=Postman&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
  {
    label: 'Canva',
    src: `https://img.shields.io/badge/Canva-%23.svg?style=for-the-badge&logo=Canva&logoColor=${generateRandomColor()}&color=white&labelColor=white&logoWidth=-1`,
  },
];

export default techStack;
