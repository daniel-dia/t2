<template>
  <div>
    <div v-if="hasValue">
      <span class="icon">↕️ </span>
      <span class="value">{{ formattedValue }}%</span>
    </div>
    <div v-else>
      <span class="icon">-</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({})
export default class SamplingError extends Vue {
  @Prop({ type: Number }) private readonly value!: number;

  get formattedValue(): string {
    return (Math.min(1, Math.max(0, this.value)) * 100).toFixed(1).replace(".0", "");
  }

  get hasValue(): boolean {
    return this.value !== null && this.value !== undefined;
  }
}
</script>
