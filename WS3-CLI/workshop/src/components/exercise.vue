<!--R0333 WS3 -->
<template>
    <div id="exercise1">
        <h3 v-on:click="isOpen = !isOpen">Exercise {{exercise.number}} - {{exercise.title}}</h3>
        <div v-show="isOpen">
            <p>{{ exercise.instructions }}</p>
            <div class="bordered">
            </div>
        </div>
        <!-- Show horizontal ruler if current element is not the last element of the array -->
        <hr v-if="last===false"/>
    </div>
</template>

<script>
    export default {
        name: "Task",
        props: ['exercise', 'last'],
        data: function () {
            return {
                isOpen: false
            }
        }
    }
</script>

<style scoped>
    .bordered {
        border: 1px solid #31475e;
        padding: 10px;
        margin: 10px 0;
    }
    .hidden {
        display: none;
    }
</style>