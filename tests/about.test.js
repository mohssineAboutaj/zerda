const file = require('../data/about.json')
const isEmpty = require('is-empty')

describe('About.json file testing >', () => {
	it('should file not empty', () => {
		expect(isEmpty(file)).toBeFalse()
	});

	it('should file contain the exact properties & it\'s not empty', () => {
		expect(isEmpty(file.id)).toBeFalse()
		expect(isEmpty(file.label)).toBeFalse()
		expect(isEmpty(file.img)).toBeFalse()
		expect(isEmpty(file.text)).toBeFalse()
	});

	it('should file contain the exact types of the properties', () => {
		expect(typeof file.id).toBe("string")
		expect(typeof file.label).toBe("string")
		expect(typeof file.img).toBe("string")
		expect(typeof file.text).toBe("string")
	});

});