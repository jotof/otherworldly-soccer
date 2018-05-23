<template>
<div>
  <div class="board-grid">
    <div class="board-grid-row">
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell alone bold"></div>
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell space"></div>
    </div>
    <div class="board-grid-row">
      <div class="board-grid-cell start"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell bold-left"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell bold-right"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
    </div>

    <div class="board-grid-row">
      <div class="board-grid-cell start"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell bold-left bold-bottom"></div>
      <div class="board-grid-cell bold-bottom"></div>
      <div class="board-grid-cell bold-right bold-bottom"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
    </div>

    <div class="board-grid-row bottom-bold">
      <div class="board-grid-cell start"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
    </div>

    <div class="board-grid-row">
      <div class="board-grid-cell start"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
    </div>

    <div class="board-grid-row">
      <div class="board-grid-cell start"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
    </div>

    <div class="board-grid-row">
      <div class="board-grid-cell start"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
    </div>

    <div class="board-grid-row">
      <div class="board-grid-cell start"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
    </div>

    <div class="board-grid-row bottom-bold">
      <div class="board-grid-cell start"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
    </div>

    <div class="board-grid-row">
      <div class="board-grid-cell start"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
    </div>

    <div class="board-grid-row">
      <div class="board-grid-cell start"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell bold-left bold-top"></div>
      <div class="board-grid-cell bold-top"></div>
      <div class="board-grid-cell bold-right bold-top"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
    </div>
    <div class="board-grid-row">
      <div class="board-grid-cell start"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell bold-left"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell bold-right"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
      <div class="board-grid-cell"></div>
    </div>
    <div class="board-grid-row">
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell alone bold"></div>
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell space"></div>
      <div class="board-grid-cell space"></div>
    </div> 
  </div>
</div>
</template>
<style lang="stylus" src="./index.styl"></style>
<script>
export default {
  name : 'free-board-grid'
}
</script>
