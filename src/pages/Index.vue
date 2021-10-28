
<template>
  <q-page class="row items-center justify-evenly">
    <example-component1
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component2
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component3
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component4
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component5
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component6
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component7
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component8
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component9
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component10
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component11
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component12
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component13
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component14
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component15
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component16
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component17
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component18
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component19
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component20
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component21
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component22
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component23
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component24
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component25
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component26
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component27
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component28
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component29
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    /><example-component30
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    />
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import ExampleComponent1 from 'components/CompositionComponent1.vue';import ExampleComponent2 from 'components/CompositionComponent2.vue';import ExampleComponent3 from 'components/CompositionComponent3.vue';import ExampleComponent4 from 'components/CompositionComponent4.vue';import ExampleComponent5 from 'components/CompositionComponent5.vue';import ExampleComponent6 from 'components/CompositionComponent6.vue';import ExampleComponent7 from 'components/CompositionComponent7.vue';import ExampleComponent8 from 'components/CompositionComponent8.vue';import ExampleComponent9 from 'components/CompositionComponent9.vue';import ExampleComponent10 from 'components/CompositionComponent10.vue';import ExampleComponent11 from 'components/CompositionComponent11.vue';import ExampleComponent12 from 'components/CompositionComponent12.vue';import ExampleComponent13 from 'components/CompositionComponent13.vue';import ExampleComponent14 from 'components/CompositionComponent14.vue';import ExampleComponent15 from 'components/CompositionComponent15.vue';import ExampleComponent16 from 'components/CompositionComponent16.vue';import ExampleComponent17 from 'components/CompositionComponent17.vue';import ExampleComponent18 from 'components/CompositionComponent18.vue';import ExampleComponent19 from 'components/CompositionComponent19.vue';import ExampleComponent20 from 'components/CompositionComponent20.vue';import ExampleComponent21 from 'components/CompositionComponent21.vue';import ExampleComponent22 from 'components/CompositionComponent22.vue';import ExampleComponent23 from 'components/CompositionComponent23.vue';import ExampleComponent24 from 'components/CompositionComponent24.vue';import ExampleComponent25 from 'components/CompositionComponent25.vue';import ExampleComponent26 from 'components/CompositionComponent26.vue';import ExampleComponent27 from 'components/CompositionComponent27.vue';import ExampleComponent28 from 'components/CompositionComponent28.vue';import ExampleComponent29 from 'components/CompositionComponent29.vue';import ExampleComponent30 from 'components/CompositionComponent30.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
ExampleComponent1,ExampleComponent2,ExampleComponent3,ExampleComponent4,ExampleComponent5,ExampleComponent6,ExampleComponent7,ExampleComponent8,ExampleComponent9,ExampleComponent10,ExampleComponent11,ExampleComponent12,ExampleComponent13,ExampleComponent14,ExampleComponent15,ExampleComponent16,ExampleComponent17,ExampleComponent18,ExampleComponent19,ExampleComponent20,ExampleComponent21,ExampleComponent22,ExampleComponent23,ExampleComponent24,ExampleComponent25,ExampleComponent26,ExampleComponent27,ExampleComponent28,ExampleComponent29,ExampleComponent30,
    },
  setup() {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { todos, meta };
  }
});
</script>
