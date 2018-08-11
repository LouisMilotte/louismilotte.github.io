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
    var gravity = parseFloat($("#gravity").val());
    var mass = parseFloat($("#ship_mass").val());
    var thrust = parseFloat($("#thrust").val());
    var accel = thrust / mass;
    var netAccel = accel-gravity;
    if((accel - gravity) < 0){
        //alert("Flight not possible");
        $("#thrust-calculator-output").addClass("text-warning");
        $("#thrust-calculator-output").html("Flight not possible");
    }else{
        //alert("Flight possible, your acceleration is "+(accel-gravity)+" m/s/s");
        var seconds = 0;
        var position = 0;
        while(positon < 41000){
            position+=netAccel;
            seconds++;
        }
        $("#thrust-calculator-output").html("Flight is possible at "+netAccel+" m/s/s. You will achieve Earth-Like escape in "+seconds+" seconds.");
    }
});