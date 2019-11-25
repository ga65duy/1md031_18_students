new Vue({
    el: 'main',
    data: {
        food: food,
        userInfo: getInput()
    },
    methods: {
        ordering: function() {
            console.log("Button clicked");
            return true;
        }
    }
});



