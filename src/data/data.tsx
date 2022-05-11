import happyFamilyApp from '../assets/images/happyFamilyMockUp.png';
import spendingApp from '../assets/images/SpendingMockUp.png';
import myPortfolio from '../assets/images/myPortfolio.png'
import coffeeShop from '../assets/images/coffeeShop.png';
import quiz from '../assets/images/quiz.png';
import shoppingCart from '../assets/images/shoppingCart.png';
import gamesBoard from '../assets/images/gamesBoard.png';
import todoTask from '../assets/images/todoTask.png';


export const PROJECTS_DATA = [
	{
		id: 1,
		title: 'Spending App',
		content: 'A user-friendly spending app for calculations and adding, editing or removing records. With visualization line chart for the income or expense within 30 days. The idea for the app came from the need to record my daily expenditures.',
		projectUrl: 'https://gy-spending.netlify.app/#/money',
		githubUrl: 'https://github.com/Yueran-Yu/spending-app-dev',
		skills: ['React','React-Router-Dom', 'Typescript', 'Mobile Responsive', 'UI/UX', 'Custom-Hooks', 'Local-Storage', 'Apache-ECharts', 'React-Icons', 'Webpack'],
		img: spendingApp,
		alt: 'Spending App'
	},
	{
		id: 2,
		title: 'Happy Family Clothing',
		content: 'This is an E-Commerce Project that I learned from Andrei Neagoie and Yihua Zhang at Udemy. Redux, Thunk, Hooks, HOC, GraphQL, Stripe Payment API, etc. are some of the technologies used in this project. I replaced the data source with Rapid API. Part of the design and layout also has been reconstructed.',
		projectUrl: 'https://happy-family-clothing.netlify.app/',
		githubUrl: 'https://github.com/Yueran-Yu/happy-family-clothing-dev',
		skills: ['Typescript', 'React', 'Firebase', 'Rapid-API', 'Stripe-API', 'Redux', 'Authentication', 'Styled-Components'],
		img: happyFamilyApp,
		alt: 'Happy Family Clothing'
	},
	{
		id: 3,
		title: 'Quick Quiz',
		content: 'A quiz with multiple question conditions for players to choose from. Players will be encouraged to challenge themselves to reach higher scores when they enjoy answering these questions.',
		projectUrl: 'https://ts-quick-quiz.netlify.app/',
		githubUrl: 'https://github.com/Yueran-Yu/ts-quiz',
		skills: ['React', 'Typescript', 'Custom Hooks', 'Mobile Responsive', 'Material UI', 'Error-Boundary', 'Axios', 'Styled-Components', 'Local-Storage'],
		img: quiz,
		alt: 'Quick Quiz'
	},
	{
		id: 4,
		title: 'Grace Portfolio',
		content: "It is my first time making a personal portfolio and I had no clue at the beginning. After doing a lot of studies I gradually got the inspiration. I wrote the first edition in Javascript before migrating to Typescript. I chose a one-page presentation since it was straightforward and easy to read.",
		projectUrl: 'https://ts-grace-port.netlify.app/',
		githubUrl: 'https://github.com/Yueran-Yu/ts-my-portfolio',
		skills: ['Typescript', 'React', 'Custom-Hooks', 'UI/UX Design', 'Google-Recaptcha', 'Framer-Motion', 'Animations', 'TailwindCss', 'Local-Storage', 'React-Lazy'],
		img: myPortfolio,
		alt: 'Grace Portfolio'
	},
	{
		id: 5,
		title: 'Shopping Cart',
		content: 'Implemented the shopping cart function by imitating the Sephora‘s web page, including part of the design.',
		projectUrl: 'https://ts-shoppingcart2.netlify.app/',
		githubUrl: 'https://github.com/Yueran-Yu/ts-shopping-cart-demo',
		skills: ['Typescript', 'React', 'React Query', 'Promise', 'Custom Hooks', 'Material UI', 'Styled-Components', 'Error Boundary'],
		img: shoppingCart,
		alt: 'Shopping Cart'
	},
	{
		id: 6,
		title: 'Games Board',
		content: 'The filtering board helps people quickly find the target games based on various conditions.',
		projectUrl: 'https://free-games-board.netlify.app',
		githubUrl: 'https://github.com/Yueran-Yu/ts-free-games',
		skills: ['Typescript', 'React', 'React-Router-Dom','Axios','Custom Hooks', 'Styled-Components','Axios','SVG Module', 'Media-Query','Error Boundary'],
		img: gamesBoard,
		alt: 'Games Board'
	},
	{
		id: 7,
		title: 'To-Do Tasks',
		content: 'The classic to-do list project with drag and drop functions, also including edit, delete, and strikethrough functions.',
		projectUrl: 'https://ts-todo-dragdrop.netlify.app/',
		githubUrl: 'https://github.com/Yueran-Yu/TS-Todo-Dnd',
		skills: ['Typescript', 'React','Local-Storage','React-Beautiful-Dnd', 'React-Icons'],
		img: todoTask,
		alt: 'To-Do Tasks'
	},
	{
		id: 8,
		title: 'GY Coffee Shop',
		content: 'GY Coffee Shop is a simple landing page for marketing the specific coffee. It uses vanilla javascript with html and font-awesome. It includes hamburger bar, loading page, video background with the on/off button.',
		projectUrl: 'https://gy-coffee-shop.netlify.app/',
		githubUrl: 'https://github.com/Yueran-Yu/coffee-shop',
		skills: ['Javascript', 'Prototype', 'Font-Awesome', 'HTML', 'CSS'],
		img: coffeeShop,
		alt: 'GY Coffee Shop'
	}
]


