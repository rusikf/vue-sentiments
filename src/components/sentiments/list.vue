<template>
  <table class='sentiments-table sentiments-table__centered'>
    <thead>
      <tr class='sentiments-table_head_row'>
        <th>Name</th>
        <th>Sentiment</th>
        <th>Action</th>
        <th>Feedback</th>
      </tr>
    </thead>
    <tbody>
      <Sentiment v-for="item in list" :item="item" :key="item.id"/>
    </tbody>
  </table>
</template>

<script>
import defaultList from './stub_api_list'
import { mapState, mapMutations } from 'vuex'
import Sentiment from './sentiment'

export default {
  name: 'SentimentsList',
  components: { Sentiment },
  created() { this.setList(defaultList) },
  methods: mapMutations('sentiments', ['setList']),
  computed: mapState('sentiments', ['list'])
}

</script>

<style>
/* TODO: move all to scss */
@import url('https://fonts.googleapis.com/css2?family=Kumbh+Sans:wght@300&display=swap');

.sentiments-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: 'Kumbh Sans', sans-serif;
  min-width: 800px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}

.sentiments-table_left-icon {
  margin-right: 15px;
}
.sentiments-table_actions {
  color: #dadada;
}

.sentiments-table__centered {
  margin-left: auto;
  margin-right: auto;
}

.sentiments-table_head_row {
  background-color: #5796d8;
  color: #ffffff;
}

.sentiments-table_actions a {
  color: #dadada;
}
.sentiments-table_actions a:active,
.sentiments-table_actions a.active {
  color: #a1a1f7;
}

.sentiments-table th,
.sentiments-table td {
  padding: 12px 15px;
  text-align: left;
}

.sentiments-table_row {
  border-bottom: 1px solid #dddddd;
}

.sentiments-table_row:nth-of-type(even) {
  background-color: #f3f3f3;
}

.sentiments-table_row:last-of-type {
  border-bottom: 2px solid #5796d8;
}

</style>
