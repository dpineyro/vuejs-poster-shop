var PRICE = 9.99;
new Vue({
    el: '#app',
    data: {
        total: 0,
        items: [
            {id:1,title: 'Item 1'},
            {id:2,title: 'Item 2'},
            {id:3,title: 'Item 3'},
            {id:4,title: 'Item 4'}
            
        ],
        cart:[]
    },
    methods: {
        addItem: function(index){
            //console.log('AddITem');
            this.total += PRICE;
            //console.log(index);
            //this.cart.push(this.items[index]);
            //console.log(this.cart.length);
            var item =  this.items[index];
            var found = false;
            for(var i = 0 ; i<this.cart.length;i++){
                if(this.cart[i].id === item.id){
                    found = true;
                    this.cart[i].qty++;
                }
            }
            if(!found){
                this.cart.push({
                    id: item.id,
                    title: item.title,
                    qty: 1,
                    price: PRICE
                });
            }
       },
       inc: function(item){
            console.log("inc");
            item.qty++;
            this.total += PRICE;
       },
       dec: function(item){
            console.log("dec");
            item.qty--;
            this.total -= PRICE;
            if(item.qty <= 0){
                for(var i = 0 ; i < this.cart.length ; i++) {
                    if(this.cart[i].id === item.id){
                        this.cart.splice(i , 1);
                        break;
                    }
                }
            }
       }
    },
    filters:{
        currency: function(price){
            return '$'.concat(price.toFixed(2));//5.0900090 to 5.09
        }
    }
});