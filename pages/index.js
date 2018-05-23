import board from '../components/board/index.vue';
import logs from '../components/logs/index.vue';
import chat from '../components/chat/index.vue';
import join from '../components/join/index.vue';

const cycle = (vm) => {
};

export default {
  components : {
    board
    , logs
    , chat
    , join
  }
  , mounted() {
    // find record by ID
    // find chat logs by ID
    console.log(this.$route.params.board_id);
    // boot cycle engine
  }
  , methods : {
  }

}
