import { createComponent } from './createComponent/index.mjs'

async function main() {
  const type = process.argv[2]
  const name = process.argv[3]

  if(!name) {
    console.error('Please, specify name like: ui/Button')
  }

  if(type === 'component') await createComponent(name)
  else console.error('Incorrect type:', type)
}

main()
