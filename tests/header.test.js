const file = require('../data/header.json')
const isEmpty = require('is-empty')

describe('header.json file testing >', () => {
	it('should file not empty', () => {
		expect(isEmpty(file)).toBeFalse()
	});

	it('should file contain the exact properties & it\'s not empty', () => {
		expect(isEmpty(file.id)).toBeFalse()
		expect(isEmpty(file.text)).toBeFalse()
		expect(isEmpty(file.btns)).toBeFalse()
	});

	it('should file contain the exact types of the properties', () => {
		expect(typeof file.id).toBe("string")
		expect(typeof file.text).toBe("string")
		expect(Array.isArray(file.btns)).toBeTruthy()
	});

});