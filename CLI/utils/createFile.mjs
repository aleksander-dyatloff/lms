import fs from 'fs'
import path from 'path'
import util from 'util'

const writeFile = util.promisify(fs.writeFile)

export async function createFile(directory, name, content) {
  const pathToFile = path.resolve(`${directory}/${name}`)
  await writeFile(pathToFile, content)
}
