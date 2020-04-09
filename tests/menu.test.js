const file = require('../data/menu.json')
const isEmpty = require('is-empty')

describe('menu.json file testing >', () => {
	it('should file not empty', () => {
		expect(isEmpty(file)).toBeFalse()
	});

	it('should file contain the exact properties & it\'s not empty', () => {
		expect(isEmpty(file.id)).toBeFalse()
		expect(isEmpty(file.label)).toBeFalse()
		expect(isEmpty(file.menuList)).toBeFalse()
	});

	it('should file contain the exact types of the properties', () => {
		expect(typeof file.id).toBe("string")
		expect(typeof file.label).toBe("string")
		expect(Array.isArray(file.menuList)).toBeTruthy()
	});

	it('should menuList property contain the exact properties & it\'s not empty', () => {
		for (const child of file.menuList) {
			expect(isEmpty(child)).toBeFalse()
		}
	});

	it('should menuList property exact types of the properties', () => {
		for (const child of file.menuList) {
			expect(typeof child.label).toBe("string")
			expect(Array.isArray(child.meals)).toBeTruthy()
		}
	});

});