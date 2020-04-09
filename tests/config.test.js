const file = require('../data/config.json')
const isEmpty = require('is-empty')

describe('config.json file testing >', () => {
	it('should file not empty', () => {
		expect(isEmpty(file)).toBeFalse()
	});

	it('should file contain the exact properties & it\'s not empty', () => {
		expect(isEmpty(file.data)).toBeFalse()
		expect(isEmpty(file.src)).toBeFalse()
		expect(isEmpty(file.dist)).toBeFalse()
		expect(isEmpty(file.js)).toBeFalse()
		expect(isEmpty(file.less)).toBeFalse()
		expect(isEmpty(file.hbsIndex)).toBeFalse()
		expect(isEmpty(file.cookieName)).toBeFalse()
		expect(isEmpty(file.defaultTheme)).toBeFalse()
		expect(isEmpty(file.sectionsGlobalClasses)).toBeFalse()
		expect(isEmpty(file.head)).toBeFalse()
		expect(isEmpty(file.follow)).toBeFalse()
		expect(isEmpty(file.themes)).toBeFalse()
	});

	it('should file contain the exact properties is exact types', () => {
		expect(typeof(file.data)).toBe("string")
		expect(typeof(file.src)).toBe("string")
		expect(typeof(file.dist)).toBe("string")
		expect(typeof(file.js)).toBe("string")
		expect(typeof(file.less)).toBe("string")
		expect(typeof(file.hbsIndex)).toBe("string")
		expect(typeof(file.cookieName)).toBe("string")
		expect(typeof(file.defaultTheme)).toBe("string")
		expect(typeof(file.sectionsGlobalClasses)).toBe("string")
		expect(typeof(file.head)).toBe("object")
		expect(Array.isArray(file.follow)).toBeTrue()
		expect(Array.isArray(file.themes)).toBeTrue()
	});

});