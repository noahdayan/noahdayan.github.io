---
---
var pickOne=function(e){
    var n=e[Math.floor(Math.random()*e.length)];return n
};
function generateRecipe(){
    var m=["{{ site.data.recipes.protein | join: '","' }}"],
    h=pickOne(m),
    l=["{{ site.data.recipes.vegetable | join: '","' }}"],
    c=pickOne(l),
    d=["{{ site.data.recipes.spice | join: '","' }}"],
    g=pickOne(d),
    u=["{{ site.data.recipes.cereal | join: '","' }}"],
    t=pickOne(u),
    s=["{{ site.data.recipes.herb | join: '","' }}"],
    n=pickOne(s),
    e=["{{ site.data.recipes.titlename | join: '","' }}"],
    i=pickOne(e),
    o=["{{ site.data.recipes.lastname | join: '","' }}"],
    r=pickOne(o),
    b=["{{ site.data.recipes.adjective | join: '","' }}"],
    j=pickOne(b),
    p=["{{ site.data.recipes.seasoning | join: '","' }}"],
    k=pickOne(p),
    a="<h2>"+i+" "+r+"'s "+j+"<br>"+h+", "+c+", "+g+", "+n+", "+k+"<br>and "+t+" Recipe!</h2>";
    document.getElementById("generateRecipeName").innerHTML=a
};
document.getElementById("generateRecipeButton").onclick=function(){
    generateRecipe()
};
function findRecipe(){
    var m=["{{ site.data.recipes.recipename | join: '","' }}"],
    h=pickOne(m),
    a="<h2>"+h+"!</h2>";
    document.getElementById("findRecipeName").innerHTML=a
};
document.getElementById("findRecipeButton").onclick=function(){
    findRecipe()
};
