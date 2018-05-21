class BaseCell {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

/**
 * ボードの構成要素のセル
 */
export class Cell extends BaseCell {
  constructor(x, y) {
    super(x, y)
    this.field = null;
    this.penalty_area = false;
  }
}

export class GoalCell extends Cell {
  constructor(hand) {
    super(null, null);
    this.hand = hand;
  }
}

/**
 * ボード上のセルを指すもの
 * （絶対）
 */
export class AbsoluteCell extends BaseCell {
  constructor(x, y) {
    super(x, y);
  }
}

/**
 * ボード上のセルを指すもの
 * （相対）
 */
export class RelativeCell extends BaseCell {
  constructor(x, y) {
    super(x, y);
  }

  /**
   * 所持している座標をベクトルとして
   * (0, 0)からの方向への絶対セルを全て返す
   * バウンスを適用する
   */
  directions() {
  }

  /**
   * 指定されたアンカーポイントから
   * 相対セルを計算して
   * 絶対セルにして返却
   */
  anchor(x, y) {
    // 足し算する
    // バウンスを計算する
  }
}
