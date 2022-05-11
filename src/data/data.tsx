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
		content: 'I have the habit of recording my spending every day for more than ten years.  So in the process of learning React, I came up with the idea of making my own Spending App. You can do addition, subtraction, clear, with the calculator. Each entry can be viewed, edited, or deleted in the first Tab. I will gradually add more functions to make this app more perfect in the future.',
		projectUrl: 'https://gy-spending.netlify.app/#/money',
		githubUrl: 'https://github.com/Yueran-Yu/spending-app-dev',
		skills: ['React', 'Typescript', 'UI/UX', 'Custom-Hooks', 'Local-Storage', 'Apache-ECharts', 'React-Icons', 'Webpack'],
		img: spendingApp,
		alt: 'Spending App'
	},
	{
		id: 2,
		title: 'Happy Family Clothing',
		content: 'Happy Family Clothing is an E-Commerce Project that I learned from Andrei Neagoie and Yihua Zhang in Udemy. This course included Redux, Hooks, HOC, GraphQL,  Payment API, and so on. I have done some changes, like the data source, which I grabbed from Rapid API. Part of the design and layout also has been modified. ',
		projectUrl: 'https://happy-family-clothing.netlify.app/',
		githubUrl: 'https://github.com/Yueran-Yu/happy-family-clothing-dev',
		skills: ['Typescript', 'React', 'Firebase', 'Rapid-API', 'Stripe-API', 'Redux', 'Authentication', 'Styled-Components'],
		img: happyFamilyApp,
		alt: 'Happy Family Clothing'
	},
	{
		id: 3,
		title: 'Quick Quiz',
		content: 'ABC',
		projectUrl: 'https://ts-quick-quiz.netlify.app/',
		githubUrl: 'https://github.com/Yueran-Yu/ts-quiz',
		skills: ['React'],
		img: quiz,
		alt: 'Quick Quiz'
	},
	{
		id: 4,
		title: 'Grace Portfolio',
		content: "This is the first portfolio that I've done independently. and I had no clue at the beginning. After doing a lot of studying I gradually got the inspiration. I wrote it with Javascript in the first edition and then migrated it into Typescript. I chose a one-page presentation because it was straightforward, simple and clear.",
		projectUrl: 'https://ts-grace-port.netlify.app/',
		githubUrl: 'https://github.com/Yueran-Yu/ts-my-portfolio',
		skills: ['Typescript', 'React', 'Custom-Hooks', 'UI/UX', 'Google-Recaptcha', 'Framer-Motion', 'Animations', 'TailwindCss', 'Local-Storage', 'React-Lazy'],
		img: myPortfolio,
		alt: 'Grace Portfolio'
	},
	{
		id: 5,
		title: 'Shopping Cart',
		content: 'ABC',
		projectUrl: 'https://ts-shoppingcart2.netlify.app/',
		githubUrl: 'https://github.com/Yueran-Yu/ts-shopping-cart-demo',
		skills: ['Typescript', 'React'],
		img: shoppingCart,
		alt: 'Shopping Cart'
	},
	{
		id: 6,
		title: 'Board Game',
		content: 'ABC',
		projectUrl: 'https://free-games-board.netlify.app',
		githubUrl: 'https://github.com/Yueran-Yu/ts-free-games',
		skills: ['Typescript', 'React'],
		img: gamesBoard,
		alt: 'Board Game'
	},
	{
		id: 7,
		title: 'To Do Tasks',
		content: 'ABC',
		projectUrl: 'https://ts-todo-dragdrop.netlify.app/',
		githubUrl: 'https://github.com/Yueran-Yu/TS-Todo-Dnd',
		skills: ['Typescript', 'React'],
		img: todoTask,
		alt: 'To Do Task'
	},
	{
		id: 8,
		title: 'GY Coffee Shop',
		content: 'GY Coffee Shop is a simple landing page for marketing the specific coffee. It uses vanilla javascript code with html and font-awesome. It includes hamburger bar, loading page, video background with the on/off button.',
		projectUrl: 'https://gy-coffee-shop.netlify.app/',
		githubUrl: 'https://github.com/Yueran-Yu/coffee-shop',
		skills: ['Javascript', 'Prototype', 'Font-Awesome', 'HTML', 'CSS'],
		img: coffeeShop,
		alt: 'GY Coffee Shop'
	}
]


