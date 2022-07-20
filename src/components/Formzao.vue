<template>
  <div style="border: thin solid blue">
    <div><input v-model="internal.name" /></div>
    <div><input v-model="internal.age" /></div>
    <div><input type="checkbox" v-model="internal.check" /></div>
    <div><input type="button" @click="update" value="atualizar" /></div>
    <pre>{{ internal }}</pre>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue, Inject, Watch } from "vue-property-decorator";
import FormData from "./FormData";

@Component({ components: {} })
export default class Formzao extends Vue {
  @Prop() private readonly value!: FormData;

  // @Watch("value")
  // onChange() {
  //   this.internal = { ...this.value };
  // }

  mounted() {
    this.internal = { ...this.value };
  }

  update() {
    this.$emit("input", { ...this.internal });
  }

  private internal: FormData = this.value;
}
</script>
<style></style>
