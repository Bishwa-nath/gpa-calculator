$(function(){
    // $('#pointandgrade').prepend('selected', false).find('option:first').prepend('selected', true);
    $('.result').hide();
    $('.title').hide();
    $('.point').hide();
    alert("Now calculates Humanities Group Only. Other Groups will be added very soon.");
    $('button').click(function(){
        var values = []
        var subs = []
        var all_grade = true;
        var check_fail = false;
        let total = 0;
        var duplicate_sub = false;

        $("#calculate-table #pointandgrade").each(function(){
            var val = $(this).val();
            values.push(val);
        })

        $("#calculate-table #subject_all").each(function(){
            var sub = $(this).val();
            subs.push(sub);
        })
        console.log(subs);

        var sub_len = subs.length;
        for(var i=0; i<sub_len-1; i++){
            for(var j=i+1; j<sub_len; j++){
                if(subs[i] == subs[j]){
                    duplicate_sub = true;
                    break;
                }
            }
            if(duplicate_sub){
                break;
            }
        }

        var len = values.length;
        for(var i = 0; i<len; i++){
            if(values[i] == ''){
                all_grade = false;
                break;
            }
            if(values[i] == 0 && i != len-1) {
                check_fail = true;
            }
        }

        if(duplicate_sub){
            window.alert("One subject selected twich!")
        } else if(!all_grade) {
            window.alert("Please, select grade points for all subjects!")
        } else {
            for(var i=0; i<len-1; i++) {
                total += parseFloat(values[i]);
            }

            if(values[len-1] >= '3'){
                total += parseFloat(values[len-1]) - 2;
            }
            var agv = parseFloat(total/9).toFixed(2)
            avg = parseFloat(agv);
            
            if(check_fail){
                console.log("Sorry, you failed!");
                $('.result').show().html("Sorry, You Failed!");
                $('.title').hide();
                $('.point').hide();
            } else {
                $('.result').hide();
                if(avg >= 5){
                    $('.title').show().html('Your Grade: A+').css("background-color", "#0FBD52")
                    $('.point').show().html('Your Point: 5.00').css("background-color", "#0FBD52")
                } else if(avg >= 4) {
                    $('.title').show().html('Your Grade: A').css("background-color", "#0FBD52")
                    $('.point').show().html('Your Point: ' + avg).css("background-color", "#0FBD52")
                } else if(avg >= 3.5) {
                    $('.title').show().html('Your Grade: A-').css("background-color", "#9ECD47")
                    $('.point').show().html('Your Point: ' + avg).css("background-color", "#9ECD47")
                } else if(avg >= 3) {
                    $('.title').show().html('Your Grade: B').css("background-color", "#9ECD47")
                    $('.point').show().html('Your Point: ' + avg).css("background-color", "#9ECD47")
                } else if(avg >= 2) {
                    $('.title').show().html('Your Grade: C').css("background-color", "#D9D44A")
                    $('.point').show().html('Your Point: ' + avg).css("background-color", "#D9D44A")
                } else if(avg >= 1) {
                    $('.title').show().html('Your Grade: D').css("background-color", "#D9D44A")
                    $('.point').show().html('Your Point: ' + avg).css("background-color", "#D9D44A")
                }
            }

        }
    })
});