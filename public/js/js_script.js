function MenuItem(burger_name, kCal, gluten, lactose) {
    this.name = burger_name;
    this.kCal =kCal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.namekCal = function() {
        return this.name + " "+ this.kCal;
    };
}

let burger1 = new MenuItem("chicken", "1000 kCal", false, true);
let burger2 = new MenuItem("bacon", "1300 kCal", true, false);
let burger3 = new MenuItem("halumni", "1200 kCal", true, true);
let burger4 = new MenuItem("beef", "1800 kCal", false, false);
let burger5 = new MenuItem("pork", "1900 kCal", true, false);

let menu_array = [burger1,burger2,burger3, burger4, burger5];

let myBurgers = document.getElementsByClassName("burgers");
for (let burger of food){
    console.log(Object.values(burger).length);
    let div = document.createElement("div");
    let heading = document.createElement("h3");
    let headingtext = document.createTextNode(burger.name);
    heading.setAttribute("class","burger_heading");
    let ul = document.createElement("ul");
    for (let i = 0; i < Object.values(burger).length; i++) {
        let li = document.createElement('li');
        let value =Object.values(burger)[i];
        if(i===2 && value){
            li.appendChild(document.createTextNode("contains gluten"));
            ul.appendChild(li);
            continue;
        }
        if(i===3 && value){
            li.appendChild(document.createTextNode("contains lactose"));
            ul.appendChild(li);
            continue;
        }

        li.appendChild(document.createTextNode(value));
        ul.appendChild(li);

    }
    heading.appendChild(headingtext);
    div.appendChild(heading);
    div.appendChild(ul);
    myBurgers[0].appendChild(div);
    /*console.log(burger);
    var div = document.createElement("div");
    var heading = document.createElement("h3");
    var headingtext = document.createTextNode(burger.burgername);
    var unorderdlist = document.createElement("ul");

    var listItem1 = document.createElement("li");
    var listValue1 = document.createTextNode(burger.kCal);
    listItem1.appendChild(listValue1);
    if (burger.gluten){
        var listItem2 = document.createElement("li");
        var listValue2 = document.createTextNode("conatains gluten");
        listItem2.appendChild(listValue2);
    }
    if (burger.lactose){
        var listItem3 = document.createElement("li");
        var listValue3 = document.createTextNode("contains lactose");
        listItem3.appendChild(listValue3);
    }
    unorderdlist.appendChild(listItem1);

    div.appendChild(unorderdlist);
    heading.appendChild(headingtext);
    div.appendChild(heading);
    myBurgers[0].appendChild(div);*/

    /*for(var value of Object.values(burger)){
        console.log(value);
        var div = document.createElement("div");
        var heading = document.createElement("h3");

        var unorderdlist = document.createElement("ul");
        var listItem = document.createElement("li");
        if (burger.gluten){
            var listValue = document.createTextNode("conatains gluten");
        }
        if (burger.lactose){
            var listValue = document.createTextNode("contains lactose");
        }
        var listValue = document.createTextNode(value);
        listItem.appendChild(listValue);
        unorderdlist.appendChild(listItem);
        div.appendChild(unorderdlist);
        myBurgers[0].appendChild(div);
    }*/
}
