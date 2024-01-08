class Hamburger {
	constructor() {
		this.tughriks = 0;
		this.calories = 0;
	};
	size() {
		setTimeout(() => {
			wrapTitleContent.innerHTML = 'Сеть фастфудов предлагает несколько видов гамбургеров \u{1F60B}';

			const smallHam = document.createElement('button');
			smallHam.classList.add('btn');
			smallHam.id = 'smallHam';
			smallHam.innerHTML = 'Маленький';
			wrapFoodContent.appendChild(smallHam);
			const bigHam = document.createElement('button');
			bigHam.classList.add('btn');
			bigHam.id = 'bigHam';
			bigHam.innerHTML = 'Большой';
			wrapFoodContent.appendChild(bigHam);

			smallHam.addEventListener('click', () => {
				this.tughriks += 50;
				this.calories += 20;
				console.log(this);
				wrapFoodContent.innerHTML = '';
				this.type();
			});
			bigHam.addEventListener('click', () => {
				this.tughriks += 100;
				this.calories += 40;
				console.log(this);
				wrapFoodContent.innerHTML = '';
				this.type();
			});
		}, 3000);
		return this;
	}
	type() {
		wrapTitleContent.innerHTML = 'Гамбургер может быть с одним из нескольких видов начинок(Можно выбрать несколько ;D ) \u{1F608}';

		const fillings = ['cheese', 'salad', 'potatoes'];
		for (let i = 0; i < fillings.length; i++) {
			const button = document.createElement('button');
			button.classList.add('btn');
			button.id = `${fillings[i]}`;
			button.innerHTML = `${fillings[i]}`;
			wrapFoodContent.appendChild(button);
		};

		document.getElementById('cheese').innerHTML = 'Сыр';
		document.getElementById('salad').innerHTML = 'Салат';
		document.getElementById('potatoes').innerHTML = 'Картофель';

		wrapFood.style.margin = '30px 0';

		document.getElementById('cheese').addEventListener('click', () => {
			this.tughriks += 10;
			this.calories += 20;
			console.log(this);
		});
		document.getElementById('salad').addEventListener('click', () => {
			this.tughriks += 20;
			this.calories += 5;
			console.log(this);
		});
		document.getElementById('potatoes').addEventListener('click', () => {
			this.tughriks += 15;
			this.calories += 10;
			console.log(this);
		});

		toContinue('Достаточно ли для вас начинки? \u{1F914}', () => this.supplements());
	};
	supplements() {
		wrapTitleContent.innerHTML = 'Так же у нас есть различные добавки \u{1F929}';

		const supplements = ['seasoning', 'mayonnaise'];
		for (let i = 0; i < supplements.length; i++) {
			const button = document.createElement('button');
			button.classList.add('btn');
			button.id = `${supplements[i]}`;
			button.innerHTML = `${supplements[i]}`;
			wrapFoodContent.appendChild(button);
		};

		document.getElementById('seasoning').innerHTML = 'Приправа';
		document.getElementById('mayonnaise').innerHTML = 'Майонез';

		document.getElementById('seasoning').addEventListener('click', () => {
			this.tughriks += 15;
			this.calories += 0;
			console.log(this);
		});
		document.getElementById('mayonnaise').addEventListener('click', () => {
			this.tughriks += 20;
			this.calories += 5;
			console.log(this);
		});

		toContinue('Достаточно ли для вас добавок? \u{1F914}', () => {
			wrapTitleContent.innerHTML = 'Спасибо, что воспользовались нашей сетью фастфудов \u{1F970}. Нам очень приятно \u{1F618}. Приятного аппетита \u{1F495}';
			const wrapResults = document.createElement('div');
			wrapResults.classList.add('wrap-results');
			wrapper.appendChild(wrapResults);
			const wrapResultsTughriks = document.createElement('span');
			wrapResultsTughriks.classList.add('wrap-results-tughriks');
			wrapResultsTughriks.innerHTML = `Ваша оплата составила: ${this.tughriks} тугриков`;
			wrapResults.appendChild(wrapResultsTughriks);
			const wrapResultsCalories = document.createElement('span');
			wrapResultsCalories.classList.add('wrap-results-calories');
			wrapResultsCalories.innerHTML = `Калорийность: ${this.calories}`;
			wrapResults.appendChild(wrapResultsCalories);
		});
	};
};

function toContinue(title, move) {
	const wrapContinue = document.createElement('div');
		wrapContinue.classList.add('wrap-continue');
		wrapper.appendChild(wrapContinue);
		const wrapTitleContinue = document.createElement('div');
		wrapTitleContinue.classList.add('wrap-title-continue');
		wrapContinue.appendChild(wrapTitleContinue);
		const wrapTitleContinueContent = document.createElement('h2');
		wrapTitleContinueContent.classList.add('wrap-title-continue-content');
		wrapTitleContinueContent.innerHTML = title;
		wrapTitleContinue.appendChild(wrapTitleContinueContent);
		const wrapButtonContinue = document.createElement('div');
		wrapButtonContinue.classList.add('wrap-btn-continue');
		wrapContinue.appendChild(wrapButtonContinue);
		const wrapButtonContinueContent = document.createElement('button');
		wrapButtonContinueContent.classList.add('btn');
		wrapButtonContinueContent.id = 'toContinue';
		wrapButtonContinueContent.innerHTML = 'Достаточно';
		wrapButtonContinue.appendChild(wrapButtonContinueContent);

		wrapButtonContinueContent.addEventListener('click', () => {
			wrapFoodContent.innerHTML = '';
			wrapContinue.innerHTML = '';
			move();
		});
};

const wrapper = document.createElement('div');
wrapper.classList.add('wrapper');
document.body.appendChild(wrapper);
const wrapTitle = document.createElement('div');
wrapTitle.classList.add('wrap-title');
wrapper.appendChild(wrapTitle);
const wrapTitleContent = document.createElement('h1');
wrapTitleContent.classList.add('wrap-title-content');
wrapTitleContent.innerHTML = 'Вас приветствует сеть фастфудов \u{1F607}';
wrapTitle.appendChild(wrapTitleContent);
const wrapFood = document.createElement('div');
wrapFood.classList.add('wrap-food');
wrapper.appendChild(wrapFood);
const wrapFoodContent = document.createElement('div');
wrapFoodContent.classList.add('wrap-food-content');
wrapFood.appendChild(wrapFoodContent);

const hamb = new Hamburger().size();