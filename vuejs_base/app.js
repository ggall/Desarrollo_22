new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alert: function () {
            alert('Some');
        },
        store: function (event) {
            this.value = event.target.value;
        }
    }    
   });
   new Vue({
    el:'#game',
    data:{
        value:0,
        second:5
    },
    computed:{
        result(){
            return this.value <37 ? 'not there yet':'done';
        }
    },
    watch:{
        result(){
            setTimeout(()=>this.value = 0, this.second*1000);
        }
    }
});