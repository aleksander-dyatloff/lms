type CheckFunction = () => boolean

// eslint-disable-next-line @typescript-eslint/no-implied-eval
const isNode = new Function('try {return this===global;}catch(e){return false;}') as CheckFunction

export default isNode
