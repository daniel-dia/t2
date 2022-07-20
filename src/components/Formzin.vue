<template>
  <div style="border: thin solid red">
    <div><input v-model="name" /></div>
    <!-- <div><input type="button" @click="update" value="emitir evento" /></div> -->
    <!-- <input :value="value" @input="(event) => (value = event.target.value) /> -->
    <div>
      {{ name }}
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, VModel } from "vue-property-decorator";
@Component({ components: {} })
export default class Formzin extends Vue {
  @VModel() private readonly name!: string;
}
</script>
<style></style>
