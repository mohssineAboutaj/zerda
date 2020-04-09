const file = require('../data/navbar.json')
const isEmpty = require('is-empty')

describe('navbar.json file testing >', () => {
	it('should file not empty', () => {
		expect(isEmpty(file)).toBeFalse()
	});

	it('should type of file content is array', () => {
		expect(Array.isArray(file)).toBeTrue()
	});

	it('should type of child contain the exact types', () => {
		for (const prop of file) {
			expect(typeof(prop)).toBe("object")
		}
	});

	it('should type of sub props in childs contain the exact types', () => {
		for (const prop of file) {
			expect(typeof(prop.href)).toBe("string")
			expect(typeof(prop.text)).toBe("string")
			expect(typeof(prop.icon)).toBe("string")
		}
	});

});