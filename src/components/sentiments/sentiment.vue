<template>
  <tr class='sentiments-table_row'>
    <td>{{ item.name }}</td>
    <td>{{ item.text }}</td>
    <td class='sentiments-table_actions'>
      <transition name="fade">
      <a href='#' v-if="item.feedback !== false" @click.prevent='onUp' :class="activeClass('up')">
        <font-awesome-icon icon="thumbs-up" class='sentiments-table_left-icon'/>
      </a>
      </transition>
      <a href='#' v-if="item.feedback !== true" @click.prevent='onDown' :class="activeClass('down')">
        <font-awesome-icon icon="thumbs-down" />
      </a>
    </td>
    <td>{{ feedbackText }}</td>
  </tr>
</template>
<script>
  import { mapMutations } from 'vuex'
  export default {
    name: 'Sentiment',
    props: {
      item: Object
    },
    computed: {
      noFeedback() {
        return this.item.feedback === null
      },
      feedbackText() {
        if (this.noFeedback) { return '-'}
        return this.item.feedback ? 'Correct' : 'Not correct'
      }
    },
    methods: {
      onUp() {
        this.setSentiment({ id: this.item.id, feedback: true })
      },
      onDown() {
        this.setSentiment({ id: this.item.id, feedback: false })
      },
      activeClass(type){
        if (this.noFeedback) { return '' }

        if (this.item.feedback && type == 'up') {
          return 'active'
        }

        if (!this.item.feedback && type == 'down') {
          return 'active'
        }

        return ''
      },
      ...mapMutations('sentiments', ['setSentiment'])
    }
  }
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
