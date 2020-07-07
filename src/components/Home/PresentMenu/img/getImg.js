import meat from './meat.jpg';
import eggs from './eggs.jpg';
import bread from './bread.jpg';
import fruit from './fruit.jpg';
import dairy from './dairy.jpg';
import seafood from './seafood.jpg';
import vegetable from './vegetables.jpg';

const getImg = (name) => {
	switch (name) {
		case 'Meat':
			return meat;

		case 'Eggs':
			return eggs;

		case 'Bread':
			return bread;

		case 'Fruits':
			return fruit;

		case 'Dairy':
			return dairy;

		case 'Seafood':
			return seafood;

		case 'Vegetables':
			return vegetable;

		default:
			return null;
	}
};

export default getImg;
