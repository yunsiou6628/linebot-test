export default {
	type: 'bubble',
	hero: {
		type: 'image',
		url: '',
		size: 'full',
		aspectRatio: '1:1',
		aspectMode: 'cover'
	},
	body: {
		type: 'box',
		layout: 'vertical',
		contents: [
			{
				type: 'text',
				text: '',
				weight: 'bold',
				size: 'xl'
			},
			{
				type: 'text',
				text: 'hello, world'
			}
		]
	}
}
