class Hamburger {
	constructor() {
		this.tughriks = 0;
		this.calories = 0;
	};
	size() {
		do {
			const hamburgerSize = prompt('Сеть фастфудов предлагает несколько видов гамбургеров: маленький - "Small"(50 тугриков, 20 калорий) и большой - "Big"(100 тугриков, 40 калорий).');
	
			if (hamburgerSize == 'Small') {
				this.tughriks += 50;
				this.calories += 20;
				break;
			} else if (hamburgerSize == 'Big') {
				this.tughriks += 100;
				this.calories += 40;
				break;
			} else if (hamburgerSize === null) {
				alert("Пока-пока :)");
				return;
			} else {
				alert("Введите, как было сказано в сообщении!!!");
				continue
			}
		} while (true);
		return this;
	}
	type() {
		do {
			const hamburgerType = prompt('Гамбургер может быть с одним из нескольких видов начинок: сыр - "Cheese"(+ 10 тугриков, + 20 калорий), салат - "Salad"(+ 20 тугриков, + 5 калорий), картофель - "Potatoes"(+ 15 тугриков, + 10 калорий). В одном гамбургере можно сразу несколько начинок! После того, как закончите, тыкните "Отмена".');

			if (hamburgerType == 'Cheese') {
				this.tughriks += 10;
				this.calories += 20;
			} else if (hamburgerType == 'Salad') {
				this.tughriks += 20;
				this.calories += 5;
			} else if (hamburgerType == 'Potatoes') {
				this.tughriks += 15;
				this.calories += 10;
			} else if (hamburgerType === null) {
				break;
			} else {
				alert("Введите, как было сказано в сообщении!!!");
				continue;
			}
		} while (true);
		return this;
	};
	supplements() {
		do {
			const hamburgerSupplements = prompt('Можно добавить добавки: посыпать приправой - "Seasoning"(+15 тугриков, 0 калорий) или полить майонезом - "Mayonnaise"(+20 тугриков, +5 калорий).');

			if (hamburgerSupplements == 'Seasoning') {
				this.tughriks += 15;
				this.calories += 0;
			} else if (hamburgerSupplements == 'Mayonnaise') {
				this.tughriks += 20;
				this.calories += 5;
			} else if (hamburgerSupplements === false) {
				break;
			} else {
				alert("Введите, как было сказано в сообщении!!!");
				continue;
			}

			const hamburgerSupplementsRepeat = confirm('Хотите ли вы ещё добавки?');
			if (hamburgerSupplementsRepeat !== false) {
				continue;
			} else {
				break;
			}
		} while (true);
		return this;
	};
};

const hamb = new Hamburger().size().type().supplements();
alert(`Всего было потрачено: ${hamb.tughriks} тугриков. Ради чего, наверняка спросите? Да вот, собственно, и причина - ${hamb.calories} калорий :)`);