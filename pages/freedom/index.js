import FreeBoard from '../components/free-board/index.vue';
import chat from '../components/chat/index.vue';
import join from '../components/join/index.vue';

const cycle = (vm) => {
};

export default {
  components : {
    FreeBoard
    , chat
    , join
  }
  , mounted() {
    // find record by ID
    // find chat logs by ID
    console.log(this.$route.params.board_id);
    // boot cycle engine
    cycle(vm);
  }
  , methods {
  }

}
