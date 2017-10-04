---
---
var pickOne=function(e){
    var n=e[Math.floor(Math.random()*e.length)];return n
};
function newRecipe(){
    var m={{ site.data.recipes.protein | json }},
    h=pickOne(m),
    l={{ site.data.recipes.vegetable | json }},
    c=pickOne(l),
    d={{ site.data.recipes.spice | json }},
    g=pickOne(d),
    u={{ site.data.recipes.cereal | json }},
    t=pickOne(u),
    s={{ site.data.recipes.herb | json }},
    n=pickOne(s),
    e={{ site.data.recipes.title | json }},
    i=pickOne(e),
    o={{ site.data.recipes.lastname | json }},
    r=pickOne(o),
    b={{ site.data.recipes.adjective | json }},
    j=pickOne(b),
    p={{ site.data.recipes.seasoning | json }},
    k=pickOne(p),
    a="<h2>"+i+" "+r+"'s "+j+"<br>"+h+", "+c+", "+g+", "+n+", "+k+"<br>and "+t+" Recipe!</h2>";
    document.getElementById("recipeName").innerHTML=a
};
document.getElementById("recipeButton").onclick=function(){
    newRecipe()
};
