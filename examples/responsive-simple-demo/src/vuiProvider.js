import vui from '@service.vui'

/**
 * 建立内置语音连接等初始化过程
 */
function initialize () {
  return new Promise((resolve, reject) => {
    vui.initialize({
      success: function(){
        console.log(`### initialize ### 初始化成功`)
        resolve()
      },
      fail: function(err){
        console.log(`### initialize ### 初始化失败：`, err)
        reject(err)
      }
    })
  })
}

/**
 * 开麦，打开收音能力
 */
function openMic () {
  return new Promise((resolve, reject) => {
    vui.openMic({
      success: function(){
        console.log(`### openMic ### 开麦成功`)
        resolve()
      },
      fail: function(err){
        console.log(`### openMic ### 开麦失败：`, err)
        reject(err)
      }
    })
  })
}

/**
 * 设置TTS播报内容
 * @param {*} text 
 */
function requestTts(text) {
  vui.requestTts({
    text: text,
    success: function(){
      console.log(`### 语音接口 ### TTS成功 播报内容：${text}`)
    },
    fail: function(err){
      console.log(`### 语音接口 ### TTS失败：`, err)
    }
  })
}

export default {
  initialize,
  openMic,
  requestTts
}
