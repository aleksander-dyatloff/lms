type CheckFunction = () => boolean

// eslint-disable-next-line @typescript-eslint/no-implied-eval
const isBrowser = new Function('try {return this===window;}catch(e){ return false;}') as CheckFunction

export default isBrowser
