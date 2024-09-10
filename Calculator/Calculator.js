let calculation = localStorage.getItem("calculate") || "";

    function updateCalculation(value) {
      calculation += value;
      showCalculation();
      saveCalculation();
    }
    function calculateResult() {
      calculation = eval(calculation);
      showCalculation();
      saveCalculation();
    }
    function resetCalculation() {
      localStorage.removeItem("calculate");
      document.querySelector(".js-display-calculation").innerHTML =
        calculation = "";
    }

    function saveCalculation() {
      localStorage.setItem("calculate", calculation);
    }
    function showCalculation() {
      document.querySelector(".js-display-calculation").innerHTML =
        calculation;
    }
    showCalculation();