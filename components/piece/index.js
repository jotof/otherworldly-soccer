const board_padding = 50;

export default {
  name : 'piece'
  , props : ['name', 'hand', 'x', 'y', 'z']
  , data() {
    return {
      dragging : false
      , offset : {
        x : 0
        , y : 0
      }
    }
  }
  , computed : {
    top() {
      return this.y + 'px';
    }
    , left() {
      return this.x + 'px';
    }
    , piece_name() {
      let n = this.name;
      let is_first = this.hand === 'first';
      switch(n) {
        case 'goal_keeper':
          return is_first ? '王' : 'Ｇ';
        case 'rook':
          return is_first ? '飛' : 'Ｒ';
        case 'bishop':
          return is_first ? '角' : 'Ｂ';
        case 'knight':
          return is_first ? '桂' : 'Ｎ';
        case 'pawn':
          return is_first ? '歩' : 'Ｐ';
        case 'ball':
          return '球';
        default: return '💩';
      }
    }
    , is_ball() {
      return this.name === 'ball';
    }
    , is_second() {
      return this.hand === 'second';
    }
  }

  , methods : {
    setStyle(pos) {
      this.top = pos.y + 'px';
      this.left = pos.x + 'px';
      this.$emit('moved', {
        name : this.name
        , hand : this.hand
        , position : {
          x : pos.x
          , y : pos.y
          , z : this.z
        }
      });
    }

    , startDrag(ev) {
      this.dragging = true;
      this.offset.x = ev.offsetX;
      this.offset.y = ev.offsetY;
    }
    , stopDrag(ev) {
      if (this.dragging) {
        this.setStyle({
          x : ev.pageX - this.offset.x - board_padding
          , y : ev.pageY - this.offset.y - board_padding 
        });
        this.dragging = false;
      }
    }
  }
}
