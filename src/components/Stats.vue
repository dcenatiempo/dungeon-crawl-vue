<template>
  <div class="stats">
    <h3 v-if="char.type === 'player'">
      {{ char.name }}: level {{ getExpLevel(char) }}
    </h3>
    <h3 v-else>{{ char.type }}: level {{ getExpLevel(char) }}</h3>
    <h4>Primary Stats:</h4>
    <li>strength: {{ char.strength }}</li>
    <li>speed: {{ char.speed }}</li>
    <li>tenacity: {{ char.tenacity }}</li>
    <li>intelligence: {{ char.intel }}</li>
    <li v-if="char.type === 'player'">experience: {{ char.expLevel }}</li>
    <h4>Secondary Stats:</h4>
    <li>health: {{ char.health }}/{{ getMaxHealth(char) }}</li>
    <li>attack: {{ getAttackPoints(char) }}</li>
    <li>defense: {{ getDefense(char) * 100 }}%</li>
    <li>dodge: {{ getDodge(char) }}%</li>
    <li>moves/turn: {{ getMaxMoves(char) }}</li>
    <li>attacks/turn: {{ getMaxAttacks(char) }}</li>
    <!-- {#if char.type === 'player'}
			<li>carry capacity: {char.carryCapacity}</li>
		{/if} -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
    char: { type: Object, default: null },
  },
  computed: {
    ...mapGetters([
      'getAttackPoints',
      'getMaxHealth',
      'getExpLevel',
      'getMaxMoves',
      'getMaxAttacks',
      'getDodge',
      'getDefense',
    ]),
  },
};
</script>

<style lang="scss">
.stats {
}
</style>
