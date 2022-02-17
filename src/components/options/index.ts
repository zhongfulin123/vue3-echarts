import _ from 'lodash'
import { barOptions, lineOptions, pieOptions } from './defaultOtions'
import { toRefs } from 'vue'
const getLineOptions = (options?: object): object => {
  //通过merge函数递归的合并默认对象和传入对象
  const opt = _.merge(lineOptions, options)
  //需要toRefs恢复响应式
  return {
    ...toRefs(opt)
  }
}
const getPieOptions = (options?: object): object => {
  //通过merge函数递归的合并默认对象和传入对象
  const opt = _.merge(pieOptions, options)
  //需要toRefs恢复响应式
  return {
    ...toRefs(opt)
  }
}
const getBarOptions = (options?: object): object => {
  //通过merge函数递归的合并默认对象和传入对象
  const opt = _.merge(barOptions, options)
  //需要toRefs恢复响应式
  return {
    ...toRefs(opt)
  }
}
export {
  getLineOptions,
  getPieOptions,
  getBarOptions
}