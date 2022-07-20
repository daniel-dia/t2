<template>
  <div class="hello">


    <Formzin v-model="teste" />
    <Formzin v-model="teste" />
    <Formzin v-model="teste" />

    <Formzao v-model="form" />

    <Formzao v-model="form" />

    <input type="button" @click="print" value="print"/>

    <pre>{{ form }}</pre>
  </div>
</template>

<script lang="ts">
import Formzin from "./Formzin.vue";
import Formzao from "./Formzao.vue";
import FormData from "./FormData";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({ components: { Formzin, Formzao } })
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  teste: string = "";

  form: FormData ={
    name: "padrão",
    age: 0,
    check: false,
  }; 

  print() {
    console.log(JSON.stringify(this.form));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
