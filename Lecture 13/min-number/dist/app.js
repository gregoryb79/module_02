var nextNumber = prompt("please enter number (write \"stop\" to stop).");
if (nextNumber != "stop") {
    var minNumber = Number(nextNumber);
    for (var i = 0; i < 1; i = i) {
        var nextNumber_1 = prompt("please enter number (write \"stop\" to stop).");
        if (nextNumber_1 === "stop") {
            i = 1;
            // break
        }
        else if (minNumber > Number(nextNumber_1)) {
            minNumber = Number(nextNumber_1);
        }
    }
    alert("The smallest number is: " + minNumber);
}
