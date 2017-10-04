---
---
var pickOne=function(e){
    var n=e[Math.floor(Math.random()*e.length)];return n
};
function newRecipe(){
    var m={{site.data.recipes.protein}},
    h=pickOne(m),
    l={{site.data.recipes.vegetable}},
    c=pickOne(l),
    d={{site.data.recipes.spice}},
    g=pickOne(d),
    u={{site.data.recipes.cereal}},
    t=pickOne(u),
    s={{site.data.recipes.herb}},
    n=pickOne(s),
    e={{site.data.recipes.title}},
    i=pickOne(e),
    o={{site.data.recipes.lastname}},
    r=pickOne(o),
    b={{site.data.recipes.adjective}},
    j=pickOne(b),
    p={{site.data.recipes.seasoning}},
    k=pickOne(p),
    a="<h2>"+i+" "+r+"'s "+j+"<br>"+h+", "+c+", "+g+", "+n+", "+k+"<br>and "+t+" Recipe!</h2>";
    document.getElementById("recipeName").innerHTML=a
};
document.getElementById("recipeButton").onclick=function(){
    newRecipe()
};
