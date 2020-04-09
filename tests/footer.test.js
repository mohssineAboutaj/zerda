const file = require('../data/footer.json')
const isEmpty = require('is-empty')

describe('footer.json file testing >', () => {
	it('should file not empty', () => {
		expect(isEmpty(file)).toBeFalse()
	});

	it('should file contain the exact properties & it\'s not empty', () => {
		expect(isEmpty(file.id)).toBeFalse()
		expect(isEmpty(file.openHours)).toBeFalse()
		expect(isEmpty(file.inputs)).toBeFalse()
	});

	it('should file contain the exact types of the properties', () => {
		expect(typeof file.id).toBe("string")
		expect(Array.isArray(file.openHours)).toBeTruthy()
		expect(Array.isArray(file.inputs)).toBeTruthy()
	});

});