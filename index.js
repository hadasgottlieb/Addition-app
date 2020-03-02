//This function adds text to the output element, which is the two inputs added together. Only if two inputs exist.

function addition() {
    console.log(`addition function ran.`);
        $("#equals").on("click", function() {
            let sum = parseInt($("#number1").val()) + parseInt($("#number2").val());
            $("#answer").text(`${sum}`);
        });
    
    
}

function refresh() {
    console.log(`refresh function ran.`)
    $("#refresh").on("click", function() {
        $("#number1").val("");
        $("#number2").val("");
        $("#answer").text("0");
    });
}

function allPage() {
    addition();
    refresh();
}

$(allPage);