$(document).ready(function(){
    //count calls
    function counter(){
        var i = 0;
        return function(  ){
            i++;
            console.log(i);
        }
    }
    var cnt = counter();
    cnt();
    cnt();
    cnt();

    //bind click handlers #1
    var links = $('.links');

    function generateLink(cnt) {
        return function () {
            alert("User clicked on link " + cnt);
        }
    }

    for(var i=0; i<links.length; i++) {
        links[i].onclick = generateLink(i+1);
    }

    //bind click handlers #2 closures
    var links2 = $('.links2');

    links2.each(function(ind,el){
        el.onclick =
        ((function(ind) {
            return function () {
                alert("User clicked on link " + (ind+1));
            }
        })(ind));
    });

    //inheritance #1
    function C(){
        this.color = "yellow";
    }

    C.prototype.getColor = function(){return this.color;}

    function D(){
        this.color = "blue";
    }

    var F = function(){};
    F.prototype = C.prototype;
    var f = new F();
    D.prototype = f;
    D.prototype.constructor = D;
    D.super = C.prototype;


    var c = new C();
    var d = new D();
    console.log(c.getColor());
    console.log(d.getColor());

    //inheritance #2
    function Tree(){
        this.name = "Tree";
    }
    Tree.prototype.grow = function(){console.log("Tree grows");};
    Tree.prototype.flowers = function(){console.log("No fruits so far");};
    Tree.prototype.getApples = function(){console.log("Get apples");};

    function Apple(){
        this.name = "Apple";
    }

    var tr = new Tree();
    console.log(tr.name);

    Apple.prototype = Object.create(Tree.prototype);
    var ap = new Apple();
    console.log(ap.name);
    console.log(ap.flowers());
    console.log(ap.getApples());




























});
