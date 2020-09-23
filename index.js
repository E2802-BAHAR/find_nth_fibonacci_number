function calculate() {

    const n = document.getElementById("user_num").value;

    function fibonacci(n) {
        if (n == 0) return 0
        else if (n == 1) return 1
        else return fibonacci(n - 1) + fibonacci(n - 2)
    }

    console.log(fibonacci(n));
    let result = fibonacci(n);
    document.getElementById("result").innerHTML = "The " + n + " th fibonacci number is " + result;
}
