today=new Date();

var exercise1 = new Vue({
    el: '#exercise1',
    data: {
        isOpen: false,
        message: 'Welcome!'
    }
})
var exercise2 = new Vue ({
    el: '#exercise2',
    data: {
        isOpen: false,
        show: true,
        name: '',
        title: 'This is title from Vue.js',
        src: 'img.png',
        alt: 'This is alternative text for the picture'
    }
})
var exercise3 = new Vue({
    el: '#exercise3',
    data: {
        isOpen: false,
        morning: today.getHours()<12
    }
})
var exercise4 = new Vue({
    el: '#exercise4',
    data: {
        isOpen: false,
        students : [
            { name: 'Meija' },
            { name: 'James' },
            { name: 'Jane' }
        ],
        count: 10
    }
})
var exercise5 = new Vue({
    el: '#exercise5',
    data: {
        isOpen: false,
        counter: 1
    },
    methods: {
        addOne: function (event) {
            this.counter++;
        }
    }
})
var exercise6 = new Vue({
    el: '#exercise6',
    data: {
        isOpen: false,
        items : [ 
            'butter'
        ],
        newItem: ''
    },
    methods: {
        addItem: function (event) {
            this.items.push(this.newItem)
        }
    }
})