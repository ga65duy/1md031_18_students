new Vue({
    el: 'main',
    data: {
        food: food,
        userInfo: new GetInput()
    },
    methods: {
        ordering: function() {
            console.log("Button clicked");

            let userInfo =new GetInput();
            let div = document.createElement("div");
            let heading = document.createElement("h3");
            let headingtext = document.createTextNode("Your order");
            heading.setAttribute("class", "burger_heading");

            let br1 = document.createElement("br");
            let br2 = document.createElement("br");
            let br3 = document.createElement("br");
            let br4 = document.createElement("br");

            let labelfn = document.createElement('label');
            labelfn.appendChild(document.createTextNode("Fullname: "+userInfo.fullname));
            labelfn.appendChild(br1);

            let labelemail = document.createElement('label');
            labelemail.appendChild(document.createTextNode("E-mail: "+userInfo.email));
            labelemail.appendChild(br2);

            let labelpmnt = document.createElement('label');
            labelpmnt.appendChild(document.createTextNode("Payment: "+userInfo.payment));
            labelpmnt.appendChild(br3);

            let gender = document.createElement('label');
            gender.appendChild(document.createTextNode("Gender: "+userInfo.gender));
            gender.appendChild(br4);

            let burgers = document.createElement('label');
            burgers.appendChild(document.createTextNode("Burgers: " + userInfo.burgers));

            let orderinfo = document.getElementById("orderinfo");

            heading.appendChild(headingtext);
            div.appendChild(heading);
            div.appendChild(labelfn);
            div.appendChild(labelemail);
            div.appendChild(gender);
            div.appendChild(labelpmnt);
            div.appendChild(burgers);
            orderinfo.appendChild(div);
        }
    }
});