var addItem = function() {
    var list = document.getElementById("thelist");
    var newitem = document.createElement("li");
    var text = "item "+list.childElementCount;
    newitem.innerHTML = text;
    list.appendChild(newitem);
    newitem.addEventListener("mouseover",replaceHeader);
    newitem.addEventListener("mouseout",returnHeader);
    newitem.addEventListener("click",remove);
    newitem.addEventListener("click",returnHeader);
};

var addBFItem = function() {
    var list = document.getElementById("bfl");
    var newitem = document.createElement("li");
    var text = fib(list.childElementCount)+","+fibR(list.childElementCount);
    newitem.innerHTML = text;
    list.appendChild(newitem);
};

var fib = function(n) {
    var golden = (Math.sqrt(5)+1)/2.0;
    return Math.round((Math.pow(golden,n+1)-Math.pow(-(golden),-(n+1)))/Math.sqrt(5));
};

var fibR = function(n) {
    if (n == 0) {
	return 1;
    }
    else if (n == 1) {
	return 1;
    }
    else {
	return fibR(n-1) + fibR(n-2);
    }
};

var addRektItem = function() {
    var list = document.getElementById("rektL");
    var newitem = document.createElement("li");
    var text = "Your life is worth: "+list.childElementCount*0;
    newitem.innerHTML = text;
    list.appendChild(newitem);
};

var addSquareItem = function() {
    var list = document.getElementById("sqrL");
    var newitem = document.createElement("li");
    var text = getsqr(list.childElementCount);
    newitem.innerHTML = text;
    list.appendChild(newitem);
};

var getsqr = function(x) {
    var s = Math.pow(x+1, 2);
    return s;
};

var b = document.getElementById("b");
b.addEventListener("click",addItem);

var bfb = document.getElementById("bfb");
bfb.addEventListener("click",addBFItem);

var rekt = document.getElementById("rekt");
rekt.addEventListener("click",addRektItem);

var sqr = document.getElementById("sqr");
sqr.addEventListener("click", addSquareItem);

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
