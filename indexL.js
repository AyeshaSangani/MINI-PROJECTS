



let run = document.getElementById("run")

run.addEventListener("click", function () {


    let p1 = prompt("enter value 1")
    let p2 = prompt("enter value 2")
    let p3 = prompt("enter value 3")
    let p4 = prompt("enter value 4")

    for (i = p1; i < 10; i++) {

        for (k = p2; k < 10; k++) {

            for (g = p3; g < 10; g++) {

                for (h = p4; h < 10; h++) {
                    console.log(i);

                }
            }
        }
    }
})