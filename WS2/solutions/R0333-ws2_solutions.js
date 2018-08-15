//code for exercise 4
Vue.component('test-component', {
    props: ['title', 'text'],
    data: function () {
        return {
            hidden: false
        }
    },
    template: '<div><h2>{{ title }}<button v-on:click="hidden=!hidden" class="left-margin">Toggle text.</button></h2><p v-show="!hidden">{{ text }}</p></div>'
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
//code for exercise1
var exercise1 = new Vue({
    el: '#exercise1',
    data: {
        isOpen: false,
        text: '',
        keyCount: 0,
        enter: ''
    },
    methods: {
        handleKeydown: function() {
            this.keyCount = this.text.length;
        },
        enterClicked: function() {
            this.enter = "Enter clicked";
        }
    }
})
//code for exercise2
var exercise2 = new Vue ({
    el: '#exercise2',
    data: {
        isOpen: false,
        runningMon: 0,
        runningTue: 0,
        runningWed: 0,
        runningThu: 0,
        runningFri: 0,
        runningSat: 0,
        runningSun: 0,
        gym : [
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
        runningTotal: function() {
            return this.runningMon + this.runningTue + this.runningWed + this.runningThu + this.runningFri + this.runningSat + this.runningSun;
        },
        gymTotal : function() {
            return this.gym.reduce((acc, item) => acc + item.value, 0);
        },
        weekTotal : function() {
            return this.runningTotal + this.gymTotal;
        },
        status : function() {
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
//code for exercise3
var exercise3 = new Vue({
    el: '#exercise3',
    data: {
        isOpen: false,
        results: [],
        GBP: '',
        USD: '',
        amount: 0
    },
    methods: {
        //using fetch
        getRates: function() {
            var app = this;
            fetch('https://exchangeratesapi.io/api/latest?symbols=USD,GBP').then(function (response) { 
                return response.json();
            }).then(function (result) {
				app.GBP = result.rates.GBP;
                app.USD = result.rates.USD;
			});
        },
        //using axios
        getRates1: function() {
            var app = this;
            axios.get('https://exchangeratesapi.io/api/latest?symbols=USD,GBP').then(function(response) { 
				app.GBP = response.data.rates.GBP;
                app.USD = response.data.rates.USD;
			});
        }
    },
    computed: {
        amountGBP: function() {
            if(this.GBP == '') {
                this.getRates();
            }
            return this.amount * this.GBP;
        },
        amountUSD: function() {
            return this.amount * this.USD;
        }
    }
})
//code for exercise4
var exercise4 = new Vue({
    el: '#exercise4',
    data: {
        isOpen: false
    }
})
//code for exercise5
var exercise5 = new Vue({
    el: '#exercise5',
    data: {
        isOpen: false
    }
})
//code for exercise6
var exercise6 = new Vue({
    el: '#exercise6',
    data: {
        isOpen: false
    }
})
