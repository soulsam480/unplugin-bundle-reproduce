/* eslint-disable */

const { writeFileSync } = require('fs');

const files = [...Array(30).keys()].map((i) => i + 1);

const fileData = (idx) => `
<template>
  <div>
    <p>{{ title }}</p>
    <ul>
      <li v-for="todo in todos" :key="todo.id" @click="increment">
        {{ todo.id }} - {{ todo.content }}
      </li>
    </ul>
    <p>Count: {{ todoCount }} / {{ meta.totalCount }}</p>
    <p>Active: {{ active ? 'yes' : 'no' }}</p>
    <p>Clicks on todos: {{ clickCount }}</p>

    <div>
      {{ $route.path }}
    </div>

    <q-btn @click="loading.show()" label="Some button"> </q-btn>
  </div>
</template>

<script lang="ts">
import { PropType, Ref } from 'vue';
import { Todo, Meta } from './models';

function useClickCount() {
  const clickCount = ref(0);
  function increment() {
    clickCount.value += 1;
    return clickCount.value;
  }

  return { clickCount, increment };
}

function useDisplayTodo(todos: Ref<Todo[]>) {
  const todoCount = computed(() => todos.value.length);
  return { todoCount };
}

export default defineComponent({
  name: 'CompositionComponent${idx}',
  props: {
    title: {
      type: String,
      required: true,
    },
    todos: {
      type: Array as PropType<Todo[]>,
      default: () => [],
    },
    meta: {
      type: Object as PropType<Meta>,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
  setup(props) {
    const { loading, notify } = useQuasar();
    const route = useRoute();
    const router = useRouter();
    return {
      ...useClickCount(),
      ...useDisplayTodo(toRef(props, 'todos')),
      route,
      router,
      loading,
      notify,
    };
  },
});
</script>
`;

files.forEach((file) => {
  writeFileSync(
    `src/components/CompositionComponent${file}.vue`,
    fileData(file)
  );

  console.log(`wrote ${file}`);
});

const getUsage = () =>
  files
    .map(
      (file) =>
        `<example-component${file}
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    />`
    )
    .join('');

const getImport = () =>
  files
    .map(
      (file) =>
        `import ExampleComponent${file} from 'components/CompositionComponent${file}.vue';`
    )
    .join('');

const getRegister = () =>
  files.map((file) => `ExampleComponent${file},`).join('');
console.log(getImport());

const indexFileData = () => `
<template>
  <q-page class="row items-center justify-evenly">
    ${getUsage()}
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
${getImport()}

export default defineComponent({
  name: 'PageIndex',
  components: {
${getRegister()}
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
`;

writeFileSync('src/pages/Index.vue', indexFileData());

console.log(`wrote Index file`);
