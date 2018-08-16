Vue.component('wsHeader', {
    props: ['number', 'title'],
    render(createElement) {
        return createElement(
            'div',
            [
                createElement(
                    'img',
                    {
                        attrs: {
                            'src': '../../vue_logo.png',
                            'alt': 'vue.js',
                            'class': 'logo'
                        }
                    }
                ),
                createElement(
                    'h1', 'R0333 - Project Web App Development with a JavaScript Framework'
                ),
                createElement(
                    'h2', 'Vue.js: Workshop ' + this.number  + ' - ' + this.title
                )
            ]
        )
    }
})
Vue.component('wsFooter', {
    template: '<footer>&copy; Meija Lohiniva Laurea UAS</footer>'
})
Vue.component('exercise', {
    props: ['number', 'title', 'instructions', 'content'],
    data: function () {
        return {
            isOpen: false
        }
    },
    template: `<div><hr/>
                <div :id="'exercise' + number">
                <h3 v-on:click="isOpen = !isOpen">Exercise {{ number }} - {{ title }}</h3>
                <div v-show="isOpen">
                    <p>{{ instructions }}</p>
                    <div class="bordered">
                        {{ content}}
                    </div>
                </div>
            </div></div>`
})
var ws = new Vue({
    el: '#ws'
})
