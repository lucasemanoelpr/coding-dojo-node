import main from '../main'
import 'reflect-metadata'


main.listen(3000, () => {
	console.log('Starting... Bi bi')
})

main.on('error', (error) => {
	console.error(`ERROR: ${error}`)
})
