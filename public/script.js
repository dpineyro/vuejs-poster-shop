new Vue({
    el: '#app',
    data: {
        total: 0,
        items: [
            {title: 'Item 1'},
            {title: 'Item 2'},
            {title: 'Item 3'},
            {title: 'Item 4'}
            
        ]
    },
    methods: {
        addItem: function(){
            console.log('AddITem');
            this.total += 9.99;
        }
    }
});