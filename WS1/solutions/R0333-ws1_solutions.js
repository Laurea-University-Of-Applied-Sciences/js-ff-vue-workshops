//code for exercise1
var exercise1 = new Vue({
    el: '#exercise1',
    data: {
        isOpen: false, //this is needed for toggling exercises
        message: 'Welcome!' //variable for message
    }
})
//code for exercise2
var exercise2 = new Vue ({
    el: '#exercise2',
    data: {
        isOpen: false, //this is needed for toggling exercises
        show: true, //variable for toggling list
        name: '', //initialize name variable 
        title: 'This is title from Vue.js', //variable for title
        src: '../../vue_logo.png', //variable for img src
        alt: 'This is alternative text for the picture' //variable for img alt
    }
})
//code for exercise3
var exercise3 = new Vue({
    el: '#exercise3',
    data: {
        isOpen: false, //this is needed for toggling exercises
        morning: new Date().getHours()<12 //check the current hour
    }
})
//code for exercise4
var exercise4 = new Vue({
    el: '#exercise4',
    data: {
        isOpen: false, //this is needed for toggling exercises
        students : [ //array of students
            { name: 'Meija' }, //items have one property, name
            { name: 'James' },
            { name: 'Jane' }
        ],
        count: 10 //variable for count to print out ten times
    }
})
//code for exercise5
var exercise5 = new Vue({
    el: '#exercise5',
    data: {
        isOpen: false, //this is needed for toggling exercises
        counter: 1 //variable for counter, initialized as one
    },
    methods: {
        addOne: function (event) { //method to add one to counter
            this.counter++;
        }
    }
})
//code for exercise6
var exercise6 = new Vue({
    el: '#exercise6',
    data: {
        isOpen: false, //this is needed for toggling exercises
        items : [  //array for shopping list items
            'butter'
        ],
        newItem: '' //newItem variable to add new shopping list items
    },
    methods: {
        addItem: function (event) { //method to add items into the array
            this.items.push(this.newItem)
        }
    }
})