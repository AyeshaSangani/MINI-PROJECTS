

function run() {

    let maths = Number(document.getElementById("maths").value)
    let phy = Number(document.getElementById("phy").value)
    let eng = Number(document.getElementById("eng").value)

    if (maths > 98 || phy > 98 || eng > 98) {
        alert("Max.Marks 98")
    }
    else {

        let obtmarks = maths + phy + eng

        document.getElementById ("obt").innerHTML = obtmarks

        let totalMarks = 300

        let per = obtmarks / totalMarks * 100 
        document.getElementById ("per").innerHTML = per + "%"
    }

}