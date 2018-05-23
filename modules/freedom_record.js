import { firstPieces, secondPieces, ballPiece } from '../components/free-board/index.js';

const createSysMes = (mes) => {
  return {
    sys : true
    , name : null
    , timestamp : new Date().getTime()
    , message : mes
  }
}

const createMes = (name, mes) => {
  return {
    sys : false
    , name : name
    , timestamp : new Date().getTime()
    , message : mes
  }
}

const initData = () => {
  return {
    pieces : {
      first : firstPieces()
      , second : secondPieces()
      , ball : ballPiece()
    }
    , chat : [createSysMes('作成された。')]
  }
};

export default {
  initData : initData
  , createSystemMessage : createSysMes
  , createChatMessage : createMes
}
