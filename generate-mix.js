const fs = require('fs')
const path = require('path')
const { getAudioDurationInSeconds } = require('get-audio-duration')

const soundExtensions = [
	'wav',
	'bwf',
	'raw',
	'aiff',
	'flac',
	'm4a',
	'pac',
	'tta',
	'wv',
	'ast',
	'aac',
	'mp2',
	'mp3',
	'mp4',
	'amr',
	's3m',
	'3gp',
	'act',
	'au',
	'dct',
	'dss',
	'gsm',
	'm4p',
	'mmf',
	'mpc',
	'ogg',
	'oga',
	'opus',
	'ra',
	'sln',
	'vox'
]

const args = process.argv.slice(2)
const pathArg = args[0]

if (!pathArg) {
	throw new Error('Specify path as a command argument')
}

const folderName = pathArg.split(path.sep).pop()

// path accessible from web server (index.html)
const soundsPath = path.relative('public', pathArg)

const files = fs.readdirSync(pathArg)
const sounds = files.filter(f => soundExtensions.some(s => f.endsWith(`.${s}`)))
if (!sounds.length) {
	throw new Error('no sounds in the folder')
}

const firstSound = path.join(pathArg, sounds[0])

getAudioDurationInSeconds(firstSound).then(duration => {
	const mixObj = {
		name: folderName,
		gain: 1,
		position: 0,
		minTime: 0,
		maxTime: duration,
		tracks: sounds.map(s => ({
			name: s,
			path: path.join(soundsPath, s),
			gain: 0.5,
			pan: 0,
			muted: false,
			_muted: false,
			soloed: false,
			afl: true
		}))
	}

	const mixPath = path.join(pathArg, 'mix.json')
	const json = JSON.stringify(mixObj, null, 2)
	
	fs.writeFileSync(mixPath, json)

	console.log(`${mixPath} generated`)
})
