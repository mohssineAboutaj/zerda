const file = require('../data/services.json')
const isEmpty = require('is-empty')

describe('services.json file testing >', () => {
	it('should file not empty', () => {
		expect(isEmpty(file)).toBeFalse()
	});

	it('should file contain the exact properties & it\'s not empty', () => {
		expect(isEmpty(file.id)).toBeFalse()
		expect(isEmpty(file.label)).toBeFalse()
		expect(isEmpty(file.services)).toBeFalse()
	});

	it('should file contain the exact types of the properties', () => {
		expect(typeof file.id).toBe("string")
		expect(typeof file.label).toBe("string")
		expect(Array.isArray(file.services)).toBeTruthy()
	});

});