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
      <tr class='sentiments-table_row'>
        <td>Melissa</td>
        <td>I think this coffee is awesome!</td>
        <td class='sentiments-table_actions'>
          <font-awesome-icon icon="thumbs-up" class='sentiments-table_left-icon'/>
          <font-awesome-icon icon="thumbs-down"/>
        </td>
        <td>Correct</td>
      </tr>
      <tr class='sentiments-table_row_active'>
        <td>John</td>
        <td>I think this coffee is tasty</td>
        <td>-</td>
        <td>Not correct</td>
      </tr>
      <tr class='sentiments-table_row'>
        <td>Jack</td>
        <td>Bad coffee</td>
        <td></td>
        <td></td>
      </tr>
      <tr class='sentiments-table_row'>
        <td>Paulo</td>
        <td>Looks great!</td>
        <td></td>
        <td></td>
      </tr>
      <tr class='sentiments-table_row'>
        <td>Jim</td>
        <td>Looks bad</td>
        <td></td>
        <td></td>
      </tr>
      <tr class='sentiments-table_row'>
        <td>Suzan</td>
        <td>Looks awesome</td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'SentimentsList',
  props: {
    msg: String
  }
}
</script>

<style scoped>
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

.sentiments-table_row_active {
  font-weight: bold;
  color: #5796d8;
}
</style>
