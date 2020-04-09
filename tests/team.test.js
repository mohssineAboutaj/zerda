let x = {
	"id": "chef",
	"label": "our chefs",
	"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit, numquam placeat fuga porro accusantium.",
	"team": [
		{
			"name": "john doe",
			"work": "CEO, Co Founder",
			"avatar": "img/chef-1.jpg",
			"socialMedia": [
				{
					"icon": "facebook",
					"label": "facebook",
					"href": "#"
				},
				{
					"icon": "twitter",
					"label": "twitter",
					"href": "#"
				},
				{
					"icon": "instagram",
					"label": "instagram",
					"href": "#"
				}
			]
		},
		{
			"name": "jane smith",
			"work": "chef",
			"avatar": "img/chef-2.jpg",
			"socialMedia": [
				{
					"icon": "facebook",
					"label": "facebook",
					"href": "#"
				},
				{
					"icon": "twitter",
					"label": "twitter",
					"href": "#"
				},
				{
					"icon": "instagram",
					"label": "instagram",
					"href": "#"
				}
			]
		},
		{
			"name": "carl johnson",
			"work": "chef",
			"avatar": "img/chef-3.jpg",
			"socialMedia": [
				{
					"icon": "facebook",
					"label": "facebook",
					"href": "#"
				},
				{
					"icon": "twitter",
					"label": "twitter",
					"href": "#"
				},
				{
					"icon": "instagram",
					"label": "instagram",
					"href": "#"
				}
			]
		},
		{
			"name": "Luke escape",
			"work": "Head chef",
			"avatar": "img/chef-4.jpg",
			"socialMedia": [
				{
					"icon": "facebook",
					"label": "facebook",
					"href": "#"
				},
				{
					"icon": "twitter",
					"label": "twitter",
					"href": "#"
				},
				{
					"icon": "instagram",
					"label": "instagram",
					"href": "#"
				}
			]
		}
	]
}

const file = require('../data/team.json')
const isEmpty = require('is-empty')

describe('team.json file testing >', () => {
	it('should file not empty', () => {
		expect(isEmpty(file)).toBeFalse()
	});

	it('should file contain the exact properties & it\'s not empty', () => {
		expect(isEmpty(file.id)).toBeFalse()
		expect(isEmpty(file.label)).toBeFalse()
		expect(isEmpty(file.text)).toBeFalse()
		expect(isEmpty(file.team)).toBeFalse()
	});

	it('should file contain the exact types of the properties', () => {
		expect(typeof file.id).toBe("string")
		expect(typeof file.label).toBe("string")
		expect(typeof file.text).toBe("string")
		expect(Array.isArray(file.team)).toBeTruthy()
	});

	it('should every memeber in the team contain the exact props', () => {
		for (const member of file.team) {
			expect(typeof member.name).toBe("string")
			expect(typeof member.work).toBe("string")
			expect(typeof member.avatar).toBe("string")
			expect(Array.isArray(member.socialMedia)).toBeTruthy()
		}
	});

	it('should every memeber socialMedia has the exact props types', () => {
		for (const member of file.team) {
			for (const sm of member.socialMedia) {
				expect(typeof sm.icon).toBe('string')
				expect(typeof sm.label).toBe('string')
				expect(typeof sm.href).toBe('string')
			}
		}
	});

});