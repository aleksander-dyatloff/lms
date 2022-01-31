import path from 'path'
import { createDir } from '../utils/createDir.mjs'
import { createFile } from '../utils/createFile.mjs'
import { index, component, memo, styles, componentTest, types }  from './content.mjs'

export async function createComponent(pathTo) {
  const directory = path.resolve(`./components/${pathTo}`)

  await createDir(directory)

  const files = {
    'index.ts': index(pathTo),
    'component.tsx': component(pathTo),
    'memo.ts': memo(pathTo),
    'types.ts': types(pathTo),
    'styles.ts': styles(pathTo),
    'component.test.tsx': componentTest(pathTo),
  }

  const folders = []

  Object.entries(files).forEach(([name, content]) => createFile(directory, name, content))
  folders.forEach(folder => createDir(`${directory}/${folder}`))

  console.info(`Component ${pathTo} was successfully created`)
}
