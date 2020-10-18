<template>
  <div class="modal-label-row">
    <div class="modal-row">
      <div class="label">Type</div>
      <div class="label">Item</div>
      <div class="label center">Bulk</div>
      <div class="label center">{{ isMarket ? 'Price' : 'Act' }}</div>
      <div class="label center">
        {{ isMarket ? (box === 'market' ? 'Buy' : 'Sell') : 'Drop' }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isMarket: { type: Boolean, default: false },
    box: { type: String, required: true },
  },
};
</script>

<style lang="scss">
.modal-label-row {
  display: grid;
  grid-template-columns: auto auto 35px 35px 35px;
  .label {
    color: #444;
    padding: 0 5px;
    font-size: 100%;
  }
  .center {
    text-align: center;
  }
}
</style>
