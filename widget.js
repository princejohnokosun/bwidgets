$(document).ready(function(){
            //Let's first setup the redirect
        function redirect(){
            window.location.assign('https://www.bloggingprince.com');
        }

            //which things we got to check
        function check(){
                if($('#credits').length === 0){
                    redirect();
                }

                else if($('#creditlink').length === 0){
                    redirect();
                }

                else if($("#creditlink").attr("href") !== "https://www.bloggingprince.com"){
                    redirect();
                }

                else if($('#creditlink').text() !== "Template Designed By Blogging Prince"){
                    redirect();
                } 
            }
        //execute the function on page load
        check();
        //excute the function at the intervals of 5 seconds.
        setInterval(function () {check()}, 5000);
        });


function removeHtmlTag(strx,chop){
if(strx.indexOf("<")!=-1)
{
var s = strx.split("<");
for(var i=0;i<s.length;i++){
if(s[i].indexOf(">")!=-1){
s[i] = s[i].substring(s[i].indexOf(">")+1,s[i].length);
}
}
strx = s.join("");
}
chop = (chop < strx.length-1) ? chop : strx.length-2;
while(strx.charAt(chop-1)!=' ' && strx.indexOf(' ',chop)!=-1) chop++;
strx = strx.substring(0,chop-1);
return strx+'...';
}
function createSummaryAndThumb(pID, pURL, pTITLE){
var div = document.getElementById(pID);
var imgtag = "";
var img = div.getElementsByTagName("img");
var summ = posts_no_thumb_sum;
if(img.length>=1) {
imgtag = '<span class="posts-thumb" style="float:left; margin-right: 10px;"><a href="'+ pURL +'" title="'+ pTITLE+'"><img src="'+img[0].src+'" width="'+img_thumb_width+'px" height="'+img_thumb_height+'px" /></a></span>';
summ = posts_thumb_sum;
}

var summary = imgtag + '<div>' + removeHtmlTag(div.innerHTML,summ) + '</div>';
div.innerHTML = summary;
}

