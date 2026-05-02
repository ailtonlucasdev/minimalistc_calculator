function back() {
    const operations = document.getElementById('operations');
    operations.value = operations.value.slice(0, -1);
}

function calculate() {
    const calculateOperation = document.getElementById('operations');
    if (calculateOperation && calculateOperation.value) {
        let expression = calculateOperation.value;
        // tratamento com expressões regex
        expression = expression.replace(/x²/g, '**2')  // potenciação
        expression = expression.replace(/÷/g, '/')  // divisão 
        expression = expression.replace(/x/g, '*')  // multiplicação
        expression = expression.replace(/%/g, '/100')  // porcentagem
        expression = expression.replace(/√(\d+(\.\d+)?)/g, 'Math.sqrt($1)')  // radiciação

        try {
            calculateOperation.value = eval(expression);
        }
        catch (e) {
            calculateOperation.value = "Operação inválida"
        }
    }

}