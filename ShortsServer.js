import Api from '@/services/Api'

export default {
    index() {
        return Api().get('shorts')
    },
    show(shortsId){
        return Api().get('shorts/'+shortsId)
    },
    post(shorts){
        return Api().post('shorts', shorts)
    },
    put(shorts){
        return Api().put('shorts/'+shorts.id, shorts)
    },
    delete(shorts){
        return Api().delete('shorts/'+shorts.id, shorts)
    },
}