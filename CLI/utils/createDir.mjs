import fs from 'fs'
import util from 'util'

const exists = util.promisify(fs.exists)
const mkdir = util.promisify(fs.mkdir)

export async function createDir(directory) {
  const isExists = await exists(directory)
  if(!isExists) await mkdir(directory)
}
