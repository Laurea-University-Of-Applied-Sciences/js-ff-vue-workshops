//code for exercise1
var exercise1 = new Vue({
    el: '#exercise1',
    data: {
        isOpen: false
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
        }
    }
})
//code for exercise3
var exercise3 = new Vue({
    el: '#exercise3',
    data: {
        isOpen: false
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
