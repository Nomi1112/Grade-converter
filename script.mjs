function checkGrade() {
    var percent = parseInt(document.getElementById("percentInput").value);

    if (percent >= 80) {
        document.getElementById("result").textContent = "Grade: A+";
    } else if (percent >= 70) {
        document.getElementById("result").textContent = "Grade: A";
    } else if (percent >= 60) {
        document.getElementById("result").textContent = "Grade: B";
    } else if (percent >= 50) {
        document.getElementById("result").textContent = "Grade: C";
    } else {
        document.getElementById("result").textContent = "Grade: F";
    }
}

function appendToInput(value) {
    var input = document.getElementById("percentInput");
    input.value = input.value + value;
}