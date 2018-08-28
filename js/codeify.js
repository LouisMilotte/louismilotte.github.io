/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$('code').each(function(){
    var html = $(this).html();
    var htmlExploded = html.split("");
    var htmlReplace = "";
    for(var i =0; i < htmlExploded.length; i++){
        switch(htmlExploded[i]){
            case "'":
            case "\"":
                break;
            case "<":
            case ">":
            case "<?php":
            case "?>":
                break;
                
        }
    }
});