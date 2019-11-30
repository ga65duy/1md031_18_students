'use strict';
var socket = io();

new Vue({
    el: 'main',
    data: {
        food: food,
        userInfo: {},
        isHidden: true,
        orders: {},
    },
    methods: {
        ordering: function() {
            console.log("Button clicked");

            this.userInfo = new GetInput();
            this.isHidden = false;
            this.addOrder();
        },
        addOrder: function () {
            console.log("addOrder");
            console.log(this.orders.order.details);
            socket.emit("addOrder", {
                details: this.orders.order.details,
                orderItems: [this.userInfo.burgers],
                customerInfo: {fullname: this.userInfo.fullname, email: this.userInfo.email,
                    payment: this.userInfo.payment, gender: this.userInfo.gender}
                }
            );
        },
        displayOrder: function (event) {
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top};
            var details = { x: event.clientX - 10 - offset.x,
                y: event.clientY - 10 - offset.y };
            let order = {details: details};
            this.orders = {order: order};
        }
    }
});