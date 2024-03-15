
function MyFunction() {
    let a = "SADFFGGHHJKOPGHJGH";
    let b = "jsjfhsdjcjdhjnvudv";
    let c = "743562983579285783";
    let d = "!#@#$%^&*"
    let leng = document.getElementById("length").value
    let i = 0
    this.pass = ""
    while (i < leng) {
        let upp = document.getElementById("upper")
        if (upp.checked) {
            this.pass += a[Math.floor(Math.random() * a.length)]
            i++
        }
        let low = document.getElementById("lower")
        if (low.checked) {
            this.pass += b[Math.floor(Math.random() * b.length)]
            i++
        }
        let num = document.getElementById("number")
        if (num.checked) {
            this.pass += c[Math.floor(Math.random() * c.length)]
            i++
        }
        let char = document.getElementById("symbols")
        if (char.checked) {
            this.pass += d[Math.floor(Math.random() * d.length)]
            i++
        }

    }
    this.pass = this.pass.substr(0, leng)
    let password = document.getElementById("first-input")
    password.value = this.pass
    console.log(this.pass)

}

function MyFunction2() {
    let txt = document.getElementById("first-input")
    txt.select();
    document.execCommand("copy")


}
// let a = 
// console.log(typeof(a))
// a = ""
// console.log(a)
// this.pass += "hello"
// console.log(this.pass)
// console.log(a)
// console.log(this.pass)