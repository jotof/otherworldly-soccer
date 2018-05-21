import _ from 'lodash';
import Hands from '../domains/hands';
import { Cell, GoalCell } from './cell';

/**
 * 盤
 *
 * 1. セルの管理
 * 2. 駒の管理
 */
export class Board {
  constructor() {
    this.cells = this.createCells();
    // コマ
    this.pieces = {
      first : null
      , second : null
    };
  }

  // private
  /**
   * 初期セル生成
   */
  createCells() {
    let cells = [];
    _.range(0, 9).forEach((x) => {
      // 後手エリア
      _.range(0, 3).forEach((y) => {
        let c = new Cell(x, y);
        c.field = Field.SECOND;
        // ペナルティエリア
        if ((y === 0 || y === 1)
          && (x >= 3 && x <= 5)) {
          c.penalty_area = true;
        }
        cells.push(c);
      });
      // 中盤エリア
      _.range(3, 8).forEach((y) => {
        let c = new Cell(x, y);
        c.field = Field.CENTER;
        cells.push(c);
      });
      // 先手エリア
      _.range(8, 11).forEach((y) => {
        let c = new Cell(x, y);
        c.field = Field.FIRST;
        // ペナルティエリア
        if ((y === 9 || y === 10)
          && (x >= 3 && x <= 5)) {
          c.penalty_area = true;
        }
        cells.push(c);
      });
    });
    cells.push(new GoalCell(Hands.FIRST));
    cells.push(new GoalCell(Hands.SECOND));
    return cells;
  }

  /**
   * コマの初期配置
   */
  initialPlacement(hand, pieces) {
    if (hand === Hands.FIRST) {
      this.pieces.first = pieces;
    } else {
      this.pieces.second = pieces;
    }
  }

  /**
   * セル抽出
   * ゴールは第一引数に手番指定
   */
  pick(x, y) {
    // ゴール指定
    if (typeof x === 'string' && !y) {
      return _.find(this.cells, (c) => {
        return c.constructor.name === 'GoalCell'
          && c.hand === x;
      });
    }
    return _.find(this.cells, (c) => {
      return c.x === x
        && c.y === y;
    });
  }

  /**
   * 棋譜を反映
   */
  applyRecord(record) {
  }

  graphics() {
    // レンダリング用のオブジェクト返却
  }

}
