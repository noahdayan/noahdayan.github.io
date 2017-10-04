var pickOne=function(e){
    var n=e[Math.floor(Math.random()*e.length)];return n
};
function newRecipe(){
    var m=["Beef","Chicken","Pork","Shrimp","Tofu","Tempeh","Natto","Salmon","Cod","Mackerel","Tuna"],
    h=pickOne(m),
    l=["Carrot","Leek","Mushroom","Cabbage","Pak Choi","Courgette","Celery","Onion","Kale","Spinach","Squash","Aubergine","Tomato"],
    c=pickOne(l),
    d=["Garlic","Ginger","Chives","Sesame Seed","Chilli Pepper","Caper","Anchovy","Olive"],
    g=pickOne(d),
    u=["Rice","Pasta","Soba","Udon","Potatoes","Barley","Salad"],
    t=pickOne(u),
    s=["Basil","Oregano","Mint","Coriander","Parsley","Thyme","Sage","Rosemary","Bay Leaf"],
    n=pickOne(s),
    e=["Mister","Miss","Chef","Lady","Sir","Madam"],
    i=pickOne(e),
    o=["Dayan","Lugez","Flounder","Fin"],
    r=pickOne(o),
    b=["Awesome","Amazing","Brilliant","Wonderful","Feel-Good","Genius","Random"],
    j=pickOne(b),
    p=["Salt & Pepper","Soy Sauce & Mirin","Miso","Dashi","Curry","Tomato Sauce","Chilli & Olive Oil","Honey & Mustard"],
    k=pickOne(p),
    a="<h2>"+i+" "+r+"'s "+j+"<br>"+h+", "+c+", "+g+", "+n+", "+k+"<br>and "+t+" Recipe!</h2>";
    document.getElementById("recipeName").innerHTML=a
};
document.getElementById("recipeButton").onclick=function(){
    newRecipe()
};
