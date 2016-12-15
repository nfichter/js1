var addItem = function() {
    var list = document.getElementById("thelist");
    var newitem = document.createElement("li");
    var listitems = document.getElementsByTagName("li");
    var text = "item "+listitems.length;
    newitem.innerHTML = text;
    list.appendChild(newitem);
    newitem.addEventListener("mouseover",replaceHeader);
    newitem.addEventListener("mouseout",returnHeader);
    newitem.addEventListener("click",remove);
    newitem.addEventListener("click",returnHeader);
};

var b = document.getElementById("b");
b.addEventListener("click",addItem);

var startup = function() {
    var listitems = document.getElementsByTagName("li");
    for (var i = 0; i < listitems.length; i++) {
	listitems[i].addEventListener("mouseover",replaceHeader);
	listitems[i].addEventListener("mouseout",returnHeader);
	listitems[i].addEventListener("click",remove);
	listitems[i].addEventListener("click",returnHeader);
    }
};

var replaceHeader = function() {
    var header = document.getElementById("h");
    header.innerHTML = this.innerHTML;
};

var returnHeader = function() {
    var header = document.getElementById("h");
    header.innerHTML = "Hello World!";
};

var remove = function() {
    this.remove()
};

startup();
