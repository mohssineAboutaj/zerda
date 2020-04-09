const file = require('../data/reservation.json')
const isEmpty = require('is-empty')

describe('reservation.json file testing >', () => {
	it('should file not empty', () => {
		expect(isEmpty(file)).toBeFalse()
	});

	it('should file contain the exact properties & it\'s not empty', () => {
		expect(isEmpty(file.id)).toBeFalse()
		expect(isEmpty(file.label)).toBeFalse()
		expect(isEmpty(file.text)).toBeFalse()
		expect(isEmpty(file.inputs)).toBeFalse()
	});

	it('should file contain the exact types of the properties', () => {
		expect(typeof file.id).toBe("string")
		expect(typeof file.label).toBe("string")
		expect(typeof file.text).toBe("string")
		expect(Array.isArray(file.inputs)).toBeTruthy()
	});

	it('should inputs not empty', () => {
		for (const prop of file.inputs) {
			expect(isEmpty(prop)).toBeFalsy()
		}	
	});

	it('should inputs contain the exact properties types', () => {
		for (const prop of file.inputs) {
			expect(isEmpty(prop.id)).toBeFalsy()
			expect(typeof prop.type).toBe("string")
			expect(typeof prop.id).toBe("string")
			expect(typeof prop.label).toBe("string")
			expect(typeof prop.icon).toBe("string")
			expect(typeof prop.required).toBe("boolean")
	
		}	
	});

});