import {notices} from './notice.js'

const swiperApp = {
    data(){
        return {
            noticeList: notices,
        }
    }
}

Vue.createApp(swiperApp).mount('#app')