const nextNumber = prompt(`please enter number (write "stop" to stop).`);
if (nextNumber != "stop") {
    let minNumber = Number(nextNumber);

    for (let i = 0; i < 1; i = i) {
        const nextNumber = prompt(`please enter number (write "stop" to stop).`);
        if (nextNumber === "stop") {
            i = 1;
            // break
        } else if (minNumber > Number(nextNumber)) {
            minNumber = Number(nextNumber);        
        }
    }

    alert("The smallest number is: " + minNumber);
}


