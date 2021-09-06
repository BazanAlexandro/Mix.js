/**
 * Exports object as JSON file
 * Idea is to create in-memory link with href as encoded json object
 * and simulate a click on it
 */
const exportAsJSON = (filename, obj) => {
	const jsonString = JSON.stringify(obj)
	const blob = new Blob([jsonString], { type: 'text/json' })
	const link = document.createElement('a')

	link.download = filename
	link.href = window.URL.createObjectURL(blob)
	link.dataset.downloadurl = ['text/json', link.download, link.href].join(':')

	const event = new MouseEvent('click', { view: window })
	link.dispatchEvent(event)
	link.remove()
}

export function mixerAsJSON() {
	const json = window.mix.toJSON()
	exportAsJSON('mix.json', json)
}

window.mixerAsJSON = mixerAsJSON

export default mixerAsJSON