function MenuItem(burger_name, kCal, gluten, lactose) {
    this.burgername = burger_name;
    this.kCal =kCal;
    this.gluten = gluten;
    this.lactose = lactose;
    this.namekCal = function() {
        return this.burgername + " "+ this.kCal;
    };
}

var burger1 = new MenuItem("chicken", "1000 kCal", false, true);
var burger2 = new MenuItem("bacon", "1300 kCal", true, false);
var burger3 = new MenuItem("halumni", "1200 kCal", true, true);
var burger4 = new MenuItem("beef", "1800 kCal", false, false);
var burger5 = new MenuItem("pork", "1900 kCal", true, false);

let menu_array = [burger1,burger2,burger3, burger4, burger5];

var myBurgers = document.getElementById("mytest");
for (var burger in menu_array) {
    if (burger.gluten || burger.lactose){
        var listItem = document.createElement("li");
        var listValue = document.createTextNode(burger.burgername);
        listItem.appendChild(listValue);
        myBurgers.appendChild(listItem);
    }
}

console.log(burger1);
console.log(burger1.namekCal());
console.log(burger2.namekCal());
console.log(menu_array);