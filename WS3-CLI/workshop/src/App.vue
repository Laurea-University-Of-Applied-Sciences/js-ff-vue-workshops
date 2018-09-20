<!--R0333 WS3 -->
<template>
    <div id="app">
        <!-- Header with number and title  -->
        <WsHeader number="3" title="Templates & CLI" />
        <!-- Loop through exercises -->
        <Exercise v-for="(exercise, index) in exercises" :exercise="exercise" :last="index==exercises.length-1" v-bind:key="index" />
        <!-- Simple footer -->
        <WsFooter />
    </div>
</template>

<script>
    // Import components
    import WsHeader from './components/ws-header.vue'
    import Exercise from './components/exercise.vue'
    import WsFooter from './components/ws-footer.vue'
    // Data for exercises
    const exercises = [
        {
            title: 'Templates',
            instructions: 'Change the structure of this HTML document so that you have following components: header, footer and exercise. Implement these as new Vue.js components. Experiment with different templating styles; try at least three different ways of creating templates.'
        },
        {
            title: 'CLI',
            instructions: 'Create this HTML document with the Vue CLI.'
        }
    ];
    // Model for workshop
    export default {
        name: 'app',
        components: {
            WsHeader,
            Exercise,
            WsFooter
        },
        data: function() {
            return {
                exercises
            }
        }
    }
</script>

<style>
    #app {
      font-family: Arial, Verdana, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: left;
      color: #31475e;
      margin-top: 60px;
    }
    body {
        font-family: Arial, Verdana, sans-serif;
    }
    footer {
        margin: 2em auto 0 auto;
        width: 100%;
        text-align: center;
        border-top: 1px solid #31475e;
        padding-top: 2em;
        color: #31475e;
    }
    hr {
        border: 1px solid #49d091;
        margin: 20px 0;
        clear: both;
    }
    table, th, td {
        border: 1px solid #31475e;
        border-collapse: collapse;
    }
    td, th {
        padding: 1em;
    }

    h1, h2, h3, p, body, .vue-gray {
        color: #31475e;
    }
    h1 {
        margin: 50px 0 0 0;
    }
    h2 {
        font-size: 2em;
    }
    h3 {
        font-size: 1.5em;
        cursor: pointer;
    }
    input[type="number"] {
        width: 3em;
        text-align: right;
    }
</style>
