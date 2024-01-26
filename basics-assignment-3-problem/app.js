const app = Vue.createApp({
    data() {
        return {
            number: 0,
            result: 0,
            // message: ''
        }
    },
    methods: {
        addNumber(num) {
            this.result = this.number += num;
        }
        // outputMessage() {
        //     if (this.result < 37) {
        //       return 'Not there yet';
        //     }
        //     return 'Too much!';
        // },
    },
    watch: {
        result(value) {
            if(value > 37) {
                const that = this;
                setTimeout(function() {
                    that.number = 0;
                }, 5000);            
            }
        },
    },
    computed: {
        message() {
          // console.log('Running again...');
          if (this.result < 37) {
            return 'Not There Yet';
          }else{
            return 'Too much'
          }
        }
    },
});
app.mount('#assignment');