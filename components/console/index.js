export default {
  name : 'Console'
  , data() {
    return {
      logs : ['あああああああああ','いいいいいいいい']
      , message : ''
      , name : ''
    }
  }
  , mouted() {
  }
  , methods : {
    sendChat() {
      this.message = '';
    }
  }
}
