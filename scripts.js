const calculatebtn = document.getElementById("calculator")
const points_deducted_1 = document.getElementById("points_deducted_1")
const points_deducted_2 = document.getElementById("points_deducted_2")

const total_points_1_label = document.getElementById("total_points_1")
const total_points_2_label = document.getElementById("total_points_2")

const f1 = document.getElementById("f1")
const f2 = document.getElementById("f2")

// Fighter names
const fighter1_input = document.getElementById("fighter1_name")
const fighter2_input = document.getElementById("fighter2_name")

// Fighter 1
const f1r1 = document.getElementById("f1r1")
const f1r2 = document.getElementById("f1r2")
const f1r3 = document.getElementById("f1r3")
const f1r4 = document.getElementById("f1r4")
const f1r5 = document.getElementById("f1r5")
const f1r6 = document.getElementById("f1r6")
const f1r7 = document.getElementById("f1r7")
const f1r8 = document.getElementById("f1r8")
const f1r9 = document.getElementById("f1r9")
const f1r10 = document.getElementById("f1r10")
const f1r11 = document.getElementById("f1r11")
const f1r12 = document.getElementById("f1r12")

// Fighter 2
const f2r1 = document.getElementById("f2r1")
const f2r2 = document.getElementById("f2r2")
const f2r3 = document.getElementById("f2r3")
const f2r4 = document.getElementById("f2r4")
const f2r5 = document.getElementById("f2r5")
const f2r6 = document.getElementById("f2r6")
const f2r7 = document.getElementById("f2r7")
const f2r8 = document.getElementById("f2r8")
const f2r9 = document.getElementById("f2r9")
const f2r10 = document.getElementById("f2r10")
const f2r11 = document.getElementById("f2r11")
const f2r12 = document.getElementById("f2r12")

function countpoints_and_compare() {
    // Fighters scores arrays
    let fighter1_score_array = [
        f1r1.value,
        f1r2.value,
        f1r3.value,
        f1r4.value,
        f1r5.value,
        f1r6.value,
        f1r7.value,
        f1r8.value,
        f1r9.value,
        f1r10.value,
        f1r11.value,
        f1r12.value
    ];

    let fighter2_score_array = [
        f2r1.value,
        f2r2.value,
        f2r3.value,
        f2r4.value,
        f2r5.value,
        f2r6.value,
        f2r7.value,
        f2r8.value,
        f2r9.value,
        f2r10.value,
        f2r11.value,
        f2r12.value
    ];

    // Main logic
    // Get the total scores

    // Check Missing values
    if (fighter1_input.value == ""){
        fighter1_input.value = "Fighter 1"
    }
    if (fighter2_input.value == ""){
        fighter2_input.value = "Fighter 2"
    }
    if (points_deducted_1.value == "") {
        points_deducted_1.value = 0;
    }
    if (points_deducted_2.value == "") {
        points_deducted_2.value = 0;
    }

    let fighter1_score = 0;
    let fighter2_score = 0;

    for (let i=0; i<fighter1_score_array.length; i++) {
        fighter1_score += parseInt(fighter1_score_array[i])
        fighter2_score += parseInt(fighter2_score_array[i]);
    }
    fighter1_score -= points_deducted_1.value;
    fighter2_score -= points_deducted_2.value;

    total_points_1_label.innerHTML = fighter1_score;
    total_points_2_label.innerHTML = fighter2_score;

    f1.innerHTML = fighter1_input.value;
    f2.innerHTML = fighter2_input.value;

    // Compare the score and alert the winner
    if (fighter1_score > fighter2_score) {
        total_points_1_label.innerHTML += " WINNER"
    }
    else if (fighter1_score < fighter2_score) {
        total_points_2_label.innerHTML += " WINNER"
    }
    else {
        total_points_1_label.innerHTML += " DRAW"
        total_points_2_label.innerHTML += " DRAW"
    }
}

calculatebtn.addEventListener("click", countpoints_and_compare)