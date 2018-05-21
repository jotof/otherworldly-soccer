import _ from 'lodash';

/*
 * コマ
 */
export class Piece {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.is_retired = false;
    this.has_ball = false;
  }
  
  // 移動できるセルを返却
  movable() {
    alert('Override this method is required.'); 
  }

  // パスできるセルを返却
  kickable() {
    alert('Override this method is required.'); 
  }

  move(x, y) {
    this.x = x;
    this.y = y;
  }

  // 絶対セルを返却
  absoluteCells(relative_cells) {
    let x = this.x;
    let y = this.y;
    return _.map(relative_cells, (rc) => {
      return rc.anchor(x, y);
    });
  }
}

/**
 * 歩兵
 *
 */
export class Pawn extends Piece {
  movable() {
    let ms = [
      // 上
      new RelativeCell(0, 1)
      // 右
      , new RelativeCell(1, 0)
      // 左
      , new RelativeCell(-1, 0)
      // 下
      , new RelativeCell(0, -1)
    ];
    return this.absoluteCells(ms);
  }

  kickable() {
    let ms = this.movable();
    let ks = [
      // 上２
      new RelativeCell(0, 2)
      // 右２
      , new RelativeCell(2, 0)
      // 下２
      , new RelativeCell(0, -2)
      // 左２
      , new RelativeCell(-2, 0)
    ];
    return ms.concat(this.absoluteCells(ks));
  }
}

/**
 * 桂馬
 */
export class Knight extends Piece {
  movable() {
    let relative_cells = [
      new RelativeCell(1, 2)
      , new RelativeCell(1, -2)
      , new RelativeCell(2, 1)
      , new RelativeCell(2, -1)

      , new RelativeCell(-1, 2)
      , new RelativeCell(-1, -2)
      , new RelativeCell(-2, 1)
      , new RelativeCell(-2, -1)
    ];
    return this.absoluteCells(relative_cells);
  }

  kickable() {
    return this.movable();
  }
}

/**
 * 角行
 */
export class Bishop extends Piece {
  movable() {
    let right_up = new RelativeCell(1,1).directions();
    let right_down = new RelativeCell(1,-1).directions(); 
    let left_up = new RelativeCell(-1,-1).directions();
    let left_down = new RelativeCell(-1,-1).directions();
    return []
      .concat(this.absoluteCells(right_up))
      .concat(this.absoluteCells(right_down))
      .concat(this.absoluteCells(left_up))
      .concat(this.absoluteCells(left_down));
  }

  kickable() {
    return this.movable();
  }
}

/**
 * 飛車
 */
export class Rook extends Piece {
  movable() {
    let up = new RelativeCell(0,1).directions();
    let down = new RelativeCell(0,-1).directions(); 
    let left = new RelativeCell(-1,0).directions();
    let right = new RelativeCell(1,0).directions();
    return []
      .concat(this.absoluteCells(up))
      .concat(this.absoluteCells(down))
      .concat(this.absoluteCells(left))
      .concat(this.absoluteCells(right));
  }

  kickable() {
    return this.movable();
  }
}

/**
 * 王将
 */
export class GoalKeeper extends Piece {
  movable() {
    let ms = [
      new RelativeCell(0, 1)
      , new RelativeCell(1, 1)
      , new RelativeCell(1, 0)
      , new RelativeCell(1, -1)
      , new RelativeCell(0, -1)
      , new RelativeCell(-1, -1)
      , new RelativeCell(-1, 0)
      , new RelativeCell(-1, 1)
    ];
    return this.absoluteCells(ms);
  }

  kickable() {
    let ms = this.movable();
    let ks = [
      new RelativeCell(0, 2)
      , new RelativeCell(2, 2)
      , new RelativeCell(2, 0)
      , new RelativeCell(2, -2)
      , new RelativeCell(0, -2)
      , new RelativeCell(-2, -2)
      , new RelativeCell(-2, 0)
      , new RelativeCell(-2, 2)
    ];
    return ms.concat(this.absoluteCells(ks));
  }
}

/**
 * ボール
 */
export class Ball extends Piece {
  movable() {
    alert('this method is not supported');
  }
  kickable() {
    alert('this method is not supported');
  }
}

/**
 * 初期手持ち
 */
export function initialPieces() {
  return [
    new GoalKeeper()
    , new Rook()
    , new Bishop()
    , new Knight()
    , new Knight()
    , new Pawn()
    , new Pawn()
    , new Pawn()
    , new Pawn()
    , new Pawn()
    , new Pawn()
  ];
}
