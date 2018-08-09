/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$("form").keypress(function (e) {
    if (e.which == 13) {
        return false;
    }
});

$("#run-calculation").click(function () {
    const largeGridHydrogenLarge = 6000000;
    const largeGridHydrogenSmall = 900000;
    const largeGridAtmosphericLarge = 5400000;
    const largeGridAtmosphericSmall = 420000;
    const largeGridIonicLarge = 3600000;
    const largeGridIonicSmall = 288000;
    
    const smallGridHydrogenLarge = 6000000;
    const smallGridHydrogenSmall = 900000;
    const smallGridAtmosphericLarge = 5400000;
    const smallGridAtmosphericSmall = 420000;
    const smallGridIonicLarge = 3600000;
    const smallGridIonicSmall = 288000;
    
    var dorsalThrust = 0;
    var ventralThrust = 0;
    var portThrust = 0;
    var starboardThrust = 0;
    var foreThrust = 0;
    var aftThrust = 0;
    
    var thrusters = [];
    $("[role='thruster_type]").each(function(i,value){
        if(!thrusters.hasOwnProperty($(this).val())){
            thrusters.push({
                type:$(this).val(),
                count:1
            });
        }else{
            thrusters[$(this).val()].count +=1;
        }
    });
    if($("#ship-grid").val() == "large"){
    }else{
        
    }
});

$("#add-thruster").click(function () {

});
$("#remove-thruster").click(function () {

});