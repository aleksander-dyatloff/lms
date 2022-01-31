import CombineClassesUtil from './types'

const combineClasses = (...classes: CombineClassesUtil.ClassName[]) => String(classes
  .reduce((classString, className) => (typeof className === 'string' ? `${classString} ${className}` : classString), ''))

export default combineClasses
