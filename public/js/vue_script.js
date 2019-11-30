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
        },
        getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
                return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
        },
        addOrder: function (event) {
            console.log("addORder");
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
                y: event.currentTarget.getBoundingClientRect().top};
            socket.emit("addOrder", { orderId: this.getNext(),
                details: { x: event.clientX - 10 - offset.x,
                    y: event.clientY - 10 - offset.y },
                orderItems: ["Beans", "Curry"]
            });
        },
        created: function () {
            socket.on('initialize', function (data) {
                this.orders = data.orders;
            }.bind(this));

            socket.on('currentQueue', function (data) {
                this.orders = data.orders;
            }.bind(this));
        }
    }
});