
window.onload=init;

function init()
{
    console.log("window has loaded");
    state.i=1;
    state.j=1;
    state.k=1;
    state.o=1;
    state.b=1;
    state.m=1;
    state.p=1;
    state.a=1;
}

var state = {
    i : 0,
    j:0,
    k:0,
    o:0,
    b: 0,
    m: 0,
    p: 0,
    a: 0
};

function nextdress()
{
    console.log("inside function nextdress");
    console.log(state.i);
    var dress=document.getElementById("clothes");
    if(state.i===0){
    dress.setAttribute("class","dress1");
        state.i++;
        console.log(state.i);
    }
    else 
        if(state.i===1){
    dress.setAttribute("class","dress2");
         state.i++;
         console.log(state.i);
    }
    else
     if(state.i===2){
    dress.setAttribute("class","dress3");
             state.i++;
        console.log(state.i);
    }
    else
        if(state.i===3){
    dress.setAttribute("class","dress4");
             state.i++;
                 console.log(state.i);

    }
    else
     if(state.i===4){
    dress.setAttribute("class","dress5");
         state.i=0;
        console.log(state.i);
    }
    
}

function nextshoe()
{
    console.log("inside function nextshoe");
    console.log(state.j);
    var shoe=document.getElementById("shoes");
    if(state.j===0){
    shoe.setAttribute("class","shoe1");
        state.j++;
        console.log(state.j);
    }
    else
     if(state.j===1){
    shoe.setAttribute("class","shoe2");
         state.j++;
         console.log(state.j);
    }
    else
     if(state.j===2){
    shoe.setAttribute("class","shoe3");
         state.j++;
                  console.log(state.j);

    }
    else
         if(state.j===3){
    shoe.setAttribute("class","shoe4");
         state.j=0;
            console.log(state.j);

    }



    
}

function nexthair()
{
    console.log("inside function nexthair");
    
    console.log(state.k);
    var hairf=document.getElementById("hairfront");
    var hairb=document.getElementById("hairback");
    hairb.setAttribute("class","hairback");
    
    if(state.k===0){
    hairf.setAttribute("class","hairfront1");
        state.k++;
        console.log(state.k);
    }
    else
     if(state.k===1){
    hairf.setAttribute("class","hairfront2");
         state.k++;
         console.log(state.k);
    }
    else
     if(state.k===2){
    hairf.setAttribute("class","hairfront3");
             state.k++;
    }
    else
     if(state.k===3){
    hairf.setAttribute("class","hairfront4");
         state.k++;
         console.log(state.k);
    }
    else
     if(state.k==4){
    hairf.setAttribute("class","hairfront5");
             state.k++;
    }
    else
     if(state.k===5){
    hairf.setAttribute("class","hairfront6");
                  state.k=0;
    }
    
}

function nextorejas()
{
    console.log("inside function nextorejas");
    
    console.log(state.o);
    var orejas=document.getElementById("orejas");
    
    if(state.o===0){
    orejas.setAttribute("class","orejas1");
        state.o++;
        console.log(state.o);
    }
    else
     if(state.o===1){
    orejas.setAttribute("class","orejas2");
         state.o++;
         console.log(state.o);
    }
    else
     if(state.o===2){
    orejas.setAttribute("class","orejas3");
             state.o++;
    }
    else
     if(state.o===3){
    orejas.setAttribute("class","orejas4");
         state.o++;
         console.log(state.o);
    }
    else
     if(state.o==4){
    orejas.setAttribute("class","orejas5");
             state.o++;
    }
    else
     if(state.o===5){
    orejas.setAttribute("class","orejas6");
             state.o++;
    }
    else
     if(state.o==6){
    orejas.setAttribute("class","orejas7");
             state.o++;
    }
    else
     if(state.o==7){
    orejas.setAttribute("class","orejas8");
                  state.o=0;
    }
    
}

function nextbocas()
{
    console.log("inside function nextbocas");
    
    console.log(state.b);
    var bocas=document.getElementById("bocas");
    
    if(state.b===0){
    bocas.setAttribute("class","bocas1");
        state.b++;
        console.log(state.b);
    }
    else
     if(state.b===1){
    bocas.setAttribute("class","bocas2");
         state.b++;
         console.log(state.b);
    }
    else
     if(state.b===2){
    bocas.setAttribute("class","bocas3");
             state.b++;
    }
    else
     if(state.b===3){
    bocas.setAttribute("class","bocas4");
         state.b++;
         console.log(state.b);
    }
    else
     if(state.b==4){
    bocas.setAttribute("class","bocas5");
             state.b++;
    }
    else
     if(state.b===5){
    bocas.setAttribute("class","bocas6");
             state.b++;
    }
    else
     if(state.b==6){
    bocas.setAttribute("class","bocas7");
             state.b++;
    }
    else
     if(state.b==7){
    bocas.setAttribute("class","bocas8");
             state.b++;
    }
    else
     if(state.b==8){
    bocas.setAttribute("class","bocas9");
                  state.b=0;
    }
    
}

function nextmanos()
{
    console.log("inside function nextmanos");
    console.log(state.m);
    var manos=document.getElementById("manos");
    if(state.m===0){
    manos.setAttribute("class","manos1");
        state.m++;
        console.log(state.m);
    }
    else
     if(state.m===1){
    manos.setAttribute("class","manos2");
         state.m++;
         console.log(state.m);
    }
    else
     if(state.m===2){
    manos.setAttribute("class","manos3");
         state.m++;
                  console.log(state.m);

    }
    else
         if(state.m===3){
    manos.setAttribute("class","manos4");
         state.m=0;
            console.log(state.m);

    }    
}

function nextpatas()
{
    console.log("inside function nextpatas");
    console.log(state.p);
    var patas=document.getElementById("patas");
    if(state.p===0){
    patas.setAttribute("class","patas1");
        state.p++;
        console.log(state.p);
    }
    else
     if(state.p===1){
    patas.setAttribute("class","patas2");
         state.p++;
         console.log(state.p);
    }
    else
     if(state.p===2){
    patas.setAttribute("class","patas3");
         state.p=0;
                  console.log(state.p);

    }

}

function nextalas()
{
    console.log("inside function nextalas");
    console.log(state.a);
    var alas=document.getElementById("alas");
    if(state.a===0){
    alas.setAttribute("class","alas1");
        state.a++;
        console.log(state.a);
    }
    else
     if(state.a===1){
    alas.setAttribute("class","alas2");
         state.a++;
         console.log(state.a);
    }
    else
     if(state.a===2){
    alas.setAttribute("class","alas3");
         state.a++;
                  console.log(state.a);

    }
    else
         if(state.a===3){
    alas.setAttribute("class","alas4");
         state.a=0;
            console.log(state.a);

    }    
}