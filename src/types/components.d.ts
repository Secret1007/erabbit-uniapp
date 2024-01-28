/**
 * declare module '@vue/runtime-core'
 *   现调整为
 * declare module 'vue'
 */
import 'vue'
import XtxSwiper from './XtxSwiper.vue'
import XtxGuessVue from '/XtxGuess.vue'

declare module 'vue' {
  export interface GlobalComponents {
    XtxSwiper: typeof XtxSwiper
    XtxGuess: typeof XtxGuessVue
  }
}
// 组件实例类型
export type XtxGuessInstance = InstanceType<typeof XtxGuess>
