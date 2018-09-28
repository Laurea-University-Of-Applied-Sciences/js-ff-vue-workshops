// code for exercise 4 - Components
Vue.component('test-component', { //create a new component called test-component
    props: ['title', 'text'], // define properties title and text for test-component
    data: function () { // data should always be defined as a function so each instance of the component has their own values
        return {
            hidden: false
        }
    },
    template: '<div><h2>{{ title }}<button v-on:click="hidden=!hidden" class="left-margin">Toggle text.</button></h2><p v-show="!hidden">{{ text }}</p></div>'
})
//code for exercise 5 - Mixins
// define a mixin object
var log = {
    created: function () { // created hook is called when component is created 
        this.log() // call method log()
    },
    data: function () {
        return {
            name: 'log',
        }
    },
    methods: {
        log: function () {
            console.log(this.name + ' called ' + Date()) // add a note in console log
        }
    }
}
// code for exercise 5 - Mixins
// create three components that use mixins
Vue.component('mixin-component', {
    template: '<p>This is component</p>',
    data: function () {
        return {
            name: 'mixin-component',
        }
    },
    mixins: [log]
})
Vue.component('second-mixin-component', {
    template: '<p>This is second component</p>',
    data: function () {
        return {
            name: 'second-mixin-component',
        }
    },
    mixins: [log]
})
Vue.component('mixin-component3', {
    template: '<p>This is component 3</p>',
    data: function () {
        return {
            name: 'mixin-component3',
        }
    },
    mixins: [log]
})
Vue.component('mixin-component4', {
    template: '<p>This is component 4</p>',
    data: function () {
        return {
            name: 'mixin-component4',
        }
    },
    mixins: [log]
})

Vue.component('exercise', {
    props: ['number', 'title', 'text'],
    data: function () {
        return {
            hidden: false
        }
    },
    template: '<h2 v-on:click="isOpen = !isOpen">Exercise {{ number }} - {{ title }}</h2>'
})
// code for exercise 6 - Custom Directives
// define a custom directive
Vue.directive("red",{
   bind(e1, binding, vnode) { // hook bind when directive is added to an element
      e1.style.backgroundColor = "red"; // change the elements background red
   }
});
// code for exercise1 - Events
var exercise1 = new Vue({
    el: '#exercise1',
    data: {
        isOpen: false,
        text: '', // this property is bound to the input 
        keyCount: 0, // this property holds the number of characters i.e. the length of text in the input, bound to a span below the input
        enter: '' // this property holds the text Enter clicked if enter has been clicked
    },
    methods: {
        handleKeydown: function(event) { // user presses a key down (if a user holds down a key, keydown is triggered repeatedly but keyup only once)
            this.keyCount = event.target.value.length; // check the length of the text in input and update the length
        },
        enterClicked: function() { // user clicks enter 
            this.enter = "Enter clicked"; // update the text in a span
        }
    }
})
// code for exercise2 - Computed Properties
var exercise2 = new Vue ({
    el: '#exercise2',
    data: {
        isOpen: false,
        runningMon: 0, // variables for running are defined as separate variables for each weekday
        runningTue: 0,
        runningWed: 0,
        runningThu: 0,
        runningFri: 0,
        runningSat: 0,
        runningSun: 0,
        gym : [ // values for gym hours are defined as an array
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 },
            { value: 0 }
        ]
    },
    computed: {
        runningTotal: function() { // computed property to calculate total hours of running
            return this.runningMon + this.runningTue + this.runningWed + this.runningThu + this.runningFri + this.runningSat + this.runningSun;
        },
        gymTotal : function() { // computed property to calculate total hours of gym
            return this.gym.reduce((acc, item) => acc + item.value, 0);
        },
        weekTotal : function() { // computed property to calculate total hours of the week
            return this.runningTotal + this.gymTotal;
        },
        status : function() { // computed property for week status (poor/intermediate/good)
            if(this.weekTotal < 10) {
                return 'poor';
            } else if(this.weekTotal < 20) {
                return 'intermediate';
            } else {
                return 'good';
            }
        }   
    }
})
// code for exercise3 - AJAX
var exercise3 = new Vue({
    el: '#exercise3',
    data: {
        isOpen: false,
        results: [], // this property is to store the rates got from API
        GBP: '', 
        USD: '',
        amount: 0
    },
    methods: {
        //using fetch
        getRates: function() { // get rates from API
            var app = this;
            fetch('https://api.exchangeratesapi.io/latest?symbols=USD,GBP').then(function (response) { 
                return response.json();
            }).then(function (result) {
				app.GBP = result.rates.GBP;
                app.USD = result.rates.USD;
			});
        },
        //using axios
        getRates1: function() {
            var app = this;
            axios.get('https://exchangeratesapi.io/latest?symbols=USD,GBP').then(function(response) { 
				app.GBP = response.data.rates.GBP;
                app.USD = response.data.rates.USD;
			});
        }
    },
    computed: {
        amountGBP: function() { // computed property for the amount in British Pounds
            if(this.GBP == '') {
                this.getRates();
            }
            return this.amount * this.GBP;
        },
        amountUSD: function() { // computed property for the amount in US Dollars
            return this.amount * this.USD;
        }
    }
})
// code for exercise4 - Components
var exercise4 = new Vue({
    el: '#exercise4',
    data: {
        isOpen: false
    }
})
// code for exercise5 - Mixins
var exercise5 = new Vue({
    el: '#exercise5',
    data: {
        isOpen: false
    }
})
// code for exercise6 - Custom Directives
var exercise6 = new Vue({
    el: '#exercise6',
    data: {
        isOpen: false
    }
})