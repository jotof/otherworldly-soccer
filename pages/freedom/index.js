import FreeBoard from '../../components/free-board/index.vue';
import Console from '../../components/console/index.vue';
import db from '../../modules/firebase';
import record from '../../modules/freedom_record'; 

export default {
  components : {
    FreeBoard
    , Console
  }
  , data() {
    return {
      pieces : null
      , chats : null

      , database : null
      , board_id : null
    }
  }
  , mounted() {
    let board_id = this.$route.params.board_id;
    console.log(board_id);
    this.board_id = board_id;
    this.database = db(); 
    let board = this.database.ref('boards/' + board_id);
    let vm = this;
    board.on('value', (snapshot) => {
      let value = snapshot.val();
      if (!value) {
        board.update(record.initData());
      } else {
        vm.pieces = value.pieces;
        vm.chats = value.chats
      }
    });
  }

  , methods : {
    applyBoard(ev) {
      let board = this.database.ref('boards/' + this.board_id + '/pieces');
      board.update(ev);
    } 
    , addMessage(mes) {
      //this.database.ref('boards/' + board_id + '/chats').push(mes);
    }
  }

}
