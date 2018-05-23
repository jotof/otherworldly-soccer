import _ from 'lodash';
import piece from '../piece/index.vue';
import fbg from './grid.vue';

// 設定値
const cellHeight = 50;
const xL = cellHeight * 9;
const xR = cellHeight * 10;
const yB = cellHeight * 12;
const yT = 0;

const makePiece = (name, hand, x, y, z) => {
  return {
    name : name
    , hand : hand
    , position : {
      x : x
      , y : y
      , z : z
    }
  };
};

export const firstPieces = () => {
  return {
    goal_keeper : makePiece('goal_keeper', 'first', xL, yB, 3)
    , rook : makePiece('rook', 'first', xL, yB - cellHeight, 4)
    , bishop : makePiece('bishop', 'first', xL, yB - (cellHeight * 2), 5)
    , knights : [
      makePiece('knight', 'first', xL, yB - (cellHeight * 3), 6)
      , makePiece('knight', 'first', xL, yB - (cellHeight * 4), 7)
    ]
    , pawns : [
      makePiece('pawn', 'first', xR, yB, 8)
      , makePiece('pawn', 'first', xR, yB - cellHeight, 9)
      , makePiece('pawn', 'first', xR, yB - (cellHeight * 2), 10)
      , makePiece('pawn', 'first', xR, yB - (cellHeight * 3), 11)
      , makePiece('pawn', 'first', xR, yB - (cellHeight * 4), 12)
      , makePiece('pawn', 'first', xR, yB - (cellHeight * 5), 13)
    ]
  }
};

export const secondPieces = () => {
  return {
    goal_keeper : makePiece('goal_keeper', 'second', xL, yT, 3)
    , rook : makePiece('rook', 'second', xL, yT + cellHeight, 4)
    , bishop : makePiece('bishop', 'second', xL, yT + (cellHeight * 2), 5)
    , knights : [
      makePiece('knight', 'second', xL, yT + (cellHeight * 3), 6)
      , makePiece('knight', 'second', xL, yT + (cellHeight * 4), 7)
    ]
    , pawns : [
      makePiece('pawn', 'second', xR, yT, 8)
      , makePiece('pawn', 'second', xR, yT + cellHeight, 9)
      , makePiece('pawn', 'second', xR, yT + (cellHeight * 2), 10)
      , makePiece('pawn', 'second', xR, yT + (cellHeight * 3), 11)
      , makePiece('pawn', 'second', xR, yT + (cellHeight * 4), 12)
      , makePiece('pawn', 'second', xR, yT + (cellHeight * 5), 13)
    ]
  }
};

export const ballPiece = () => {
  return makePiece('ball', 'ball', xL, cellHeight * 6, 14);
}

export default {
  name : 'FreeBoard'
  , props : ['pieces']
  , components : {
    piece
    , 'free-board-grid' : fbg
  }
  , watch : {
    pieces(v) {
      this.setData(v);
    }
  }
  , data() {
    return {
      first : this.pieces.first
      , second : this.pieces.second
      , ball : this.pieces.ball
    }
  }
  , methods : {
    setData(pieces) {
      let vm = this;
      _.keys(pieces.first).forEach((key) => {
        this.$set(this.first, key, pieces.first[key]);
      });
      _.keys(pieces.second).forEach((key) => {
        this.$set(this.second, key, pieces.second[key]);
      });
      this.$set(this.ball, 'ball', pieces.ball);
    }
    , updatePosition(ev, piece) {
      piece.position = ev.position
      this.$emit('change', {
        first : this.first
        , second : this.second
        , ball : this.ball
      });
    }
  }
}
