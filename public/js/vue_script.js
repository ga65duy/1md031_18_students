new Vue({
    el: 'main',
    data: {
        food: food,
        userInfo: {},
        isHidden: true
    },
    methods: {
        ordering: function() {
            console.log("Button clicked");

            this.userInfo = new GetInput();
            this.isHidden = false;
        }
    }
});