/**
 * 棋譜エンジン
 */
export class Record {
  // noop
  constructor(seed) {
    this.seed = seed;
  };

  put(piece, hands) {
    let prefix = hands;
    let cell = piece.moves();
    let suffix = piece.suffix();
  }

  update() {
    // 保存した棋譜と同期
  }

  commit() {
    // 棋譜を反映して保存
  }
}
