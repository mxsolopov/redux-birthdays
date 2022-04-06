const maleGifts = [
	'Часы',
	'Бритва',
	'Шампунь',
	'Носки',
	'Бельё',
	'Ноутбук',
	'Приставка',
	'Авторучка',
	'Коптер',
	'Фотоаппарат',
	'Смартфон',
	'Очки',
	'Кроссовки',
	'Футболка',
	'Кепка',
	'Браслет',
	'Повербанк',
	'Флешка',
	'Ирригатор',
	'Скейт',
]

const femaleGifts = [
	'Весы',
	'Цепочка',
	'Кольцо',
	'Мультварка',
	'Бельё',
	'Смартфон',
	'Сковорода',
	'Браслет',
	'Часы',
	'Духи',
	'Серьги',
	'Халат',
	'Пижама',
	'Шляпа',
	'Термокружка',
	'Абонемент',
	'Набор красоты',
	'Расчёска',
	'Тапочки',
	'Кулон',
]

function createGiftsVariantsForName(gifts) {
	let obj = {}
	const chars = [
		'а',
		'б',
		'в',
		'г',
		'д',
		'е',
		'ё',
		'ж',
		'з',
		'и',
		'й',
		'к',
		'л',
		'м',
		'н',
		'о',
		'п',
		'р',
		'с',
		'т',
		'у',
		'ф',
		'х',
		'ц',
		'ч',
		'ш',
		'щ',
		'э',
		'ю',
		'я',
	]
	for (let char of chars) {
		obj[char] = createGiftVariantsForAge(gifts)
	}
	return obj
}

function createGiftVariantsForAge(gifts) {
	let map = new Map()
	map.set([-Infinity, 5], createArrOfGifts(gifts, 5))
	map.set([6, 12], createArrOfGifts(gifts, 5))
	map.set([13, 18], createArrOfGifts(gifts, 5))
	map.set([19, 35], createArrOfGifts(gifts, 5))
	map.set([36, 65], createArrOfGifts(gifts, 5))
	map.set([66, Infinity], createArrOfGifts(gifts, 5))
	return map
}

function createArrOfGifts(gifts, num) {
	let arr = []
	const indexes = generateRndIndexes(gifts, num)
	for (let i = 0; i < num; i++) {
		arr.push(gifts[indexes[i]])
	}
	return arr
}

function generateRndIndexes(gifts, num) {
	let set = new Set()
	while (set.size < num) {
		set.add(randomInteger(0, gifts.length - 1))
	}
	return [...set]
}

function randomInteger(min, max) {
	let rand = min + Math.random() * (max + 1 - min)
	return Math.floor(rand)
}

const giftsVariants = {
	male: createGiftsVariantsForName(maleGifts),
	female: createGiftsVariantsForName(femaleGifts),
}

export default giftsVariants
