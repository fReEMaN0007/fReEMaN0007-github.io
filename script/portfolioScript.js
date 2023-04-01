function navContentSwitch(selector){
    var navHead= [];
    var content= [];
    navHead[0]=document.getElementById("navTrainings");
    navHead[1]=document.getElementById("navEducation");
    navHead[2]=document.getElementById("navWorkExperience");
    navHead[3]=document.getElementById("navSkills");
    navHead[4]=document.getElementById("navProjects");
    navHead[5]=document.getElementById("navInterests");
    navHead[6]=document.getElementById("navArt");

    content[0]=document.getElementById("contentTrainings");
    content[1]=document.getElementById("contentEducation");
    content[2]=document.getElementById("contentWork");
    content[3]=document.getElementById("contentSkills");
    content[4]=document.getElementById("contentProjects");
    content[5]=document.getElementById("contentInterest");
    content[6]=document.getElementById("contentArt");
    
   

    for(var i=0;i<=6;i++){
        if(selector-1 == i){
            navHead[i].className="active";
            content[i].style.display="block";
        }
        else{
            navHead[i].className="nonActive";
            content[i].style.display="none";
        }
    }
}
var artWork= [];
artWork[0]="images/artwork/unlisted1.jpg";
artWork[1]="images/artwork/ALPHA.jpg";
artWork[2]="images/artwork/angelo.png";
artWork[3]="images/artwork/COMSCI.jpg";
artWork[4]="images/artwork/logo.png";
artWork[5]="images/artwork/magazine.jpg";
artWork[6]="images/artwork/page1.jpg";
artWork[7]="images/artwork/poster.jpg";
artWork[8]="images/artwork/webmock.jpg";
artWork[9]="images/artwork/activity8.gif";
artWork[10]="images/artwork/COMSCI2.jpg";
artWork[11]="images/artwork/police.jpg";
var imgSelector;
const bullets =[];
bullets[0]="bullet0";
bullets[1]="bullet1";
bullets[2]="bullet2";
bullets[3]="bullet3";
bullets[4]="bullet4";
bullets[5]="bullet5";
bullets[6]="bullet6";
bullets[7]="bullet7";
bullets[8]="bullet8";
bullets[9]="bullet9";
bullets[10]="bullet10";
bullets[11]="bullet11"; 

function artWorkLoad(){
    artWorkLoad = function(){};
   
    for(let x=0;x<=11;x++){
        var div = document.createElement("div");
        var img = document.createElement("img");
        var div2 = document.createElement("div");
        var img2 = document.createElement("img");
        div.id = "box";
        div.className = "artPicCon";
        div2.className = "artPicCon";
        div.onclick = function showModal(){
            document.getElementById("artModal").style.display = "block";
            document.getElementById("modalImage").src= artWork[x];
            document.getElementById(bullets[x]).className="bulletsActive";
            imgSelector=x;
            winOnclick();
            }
            
        img.src=artWork[x]; 
        img2.src=artWork[x]; 
        document.getElementById("contentArt").appendChild(div);
        div.appendChild(img);

        document.getElementById("contentArtMobile").appendChild(div2);
        div2.appendChild(img2);     
    }
  
}

function closeModal(){
    document.getElementById("artModal").style.display = "none";
    for(var x=0;x<=11;x++){
        document.getElementById(bullets[x]).className="bullets";  
    } 
}
function downClick(){
    document.getElementById("forwardButton").style.opacity=".8";
    document.getElementById("backButton").style.opacity=".8";
}
function upClick(){
    document.getElementById("forwardButton").style.opacity=".5";
    document.getElementById("backButton").style.opacity=".5";
}


function next(){
    imgSelector=imgSelector+1;
    if(imgSelector>11){
        imgSelector=0;
    }
    document.getElementById("modalImage").src= artWork[imgSelector];
    bulletSelector();
    
}
function prev(){
    imgSelector=imgSelector-1;
    if(imgSelector<0){
        imgSelector=11;
    }
    document.getElementById("modalImage").src= artWork[imgSelector];
    bulletSelector();
}

function bulletSelector(){
    for(var x=0;x<=11;x++){
        if(x==imgSelector){
            document.getElementById(bullets[imgSelector]).className="bulletsActive";
        }
        else{
            document.getElementById(bullets[x]).className="bullets";  
        }  
    } 
}

function winOnclick(){
    /*
    window.onmouseup = function(event) {
        var modal = document.getElementById("artModal");

        var next = document.getElementById("forwardButton");
        var prev = document.getElementById("backButton");
        var imgArt = document.getElementById("artModal");

        if (event.target != document.getElementsByClassName("navButton")) {
            modal.style.display = "none";
        }
      
      
    }
    */

}
function certNav(){

    if( document.getElementById("webDev").style.display=="block" ||
    document.getElementById("webDevMobile").style.display=="block")
        {
        document.getElementById("webDev").style.display = "none";
        document.getElementById("webDevMobile").style.display = "none";
        document.getElementById("webDevComp").style.display = "none";
        document.getElementById("webDevCompMobile").style.display = "none";
        document.getElementById("creativeWebDesign").style.display = "block";
        document.getElementById("creativeWebDesignMobile").style.display = "block";
        document.getElementById("webDesignComp").style.display = "block";
        document.getElementById("webDesignCompMobile").style.display = "block";
        document.getElementById("bulletCert1").className="bulletCertConActive";
        document.getElementById("bulletCert0").className="bulletsCert";
        document.getElementById("bulletCert1Mobile").className="bulletCertConActive";
        document.getElementById("bulletCert0Mobile").className="bulletsCert";


        
    }
    else{
        document.getElementById("webDev").style.display = "block";
        document.getElementById("webDevComp").style.display = "block";
        document.getElementById("creativeWebDesign").style.display = "none";
        document.getElementById("webDesignComp").style.display = "none";
        document.getElementById("bulletCert0").className="bulletCertConActive";
        document.getElementById("bulletCert1").className="bulletsCert";

        document.getElementById("webDevMobile").style.display = "block";
        document.getElementById("webDevCompMobile").style.display = "block";
        document.getElementById("creativeWebDesignMobile").style.display = "none";
        document.getElementById("webDesignCompMobile").style.display = "none";
        document.getElementById("bulletCert0Mobile").className="bulletCertConActive";
        document.getElementById("bulletCert1Mobile").className="bulletsCert";
    }

    
}

function dropDown(){
var drop = document.getElementById("dropDown4Mobile")
if(drop.style.display == "block"){
    drop.style.display = "none";
}
else{
    drop.style.display = "block";
}

}




    