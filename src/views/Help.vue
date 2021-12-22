<template>
  <app-page back title="Помощь">
    <question-item
        v-for="q in questions"
        :question="q"
        :key="q.id"
    />
  </app-page>
</template>

<script>
import AppPage from "../components/ui/AppPage";
import QuestionItem from "../components/question/QuestionItem";

export default {
  name: "Help",
  setup() {
    const questions = [
      {id: 1, title: 'Name1 question', text: 'text1 text1 text1'},
      {id: 2, title: 'Name2 question', text: 'text2 text2 text2'},
    ]

    return {
      questions
    }
  },
  components: {
    AppPage,
    QuestionItem
  }
}
</script>

<style scoped>

</style>
