function showMessage() {
      let name = document.getElementById("userName").value;

      if (name === "") {
        document.getElementById("output").innerHTML = "Please insert your name";
      } else if (name.toLowerCase() === "rameez") {
        document.getElementById("output").innerHTML = "Welcome Boss Rameez!";
      } else {
        document.getElementById("output").innerHTML = "Welcome, " + name + "! Welcome to JavaScript.";
      }
    }

    function addNumbers() {
      let n1 = Number(document.getElementById("num1").value);
      let n2 = Number(document.getElementById("num2").value);
      let sum = n1 + n2;

      document.getElementById("result").innerHTML = "Result: " + sum;
    }
