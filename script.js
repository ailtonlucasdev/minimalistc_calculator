function back() {
    const operations = document.getElementById('operations');
    operations.value = operations.value.slice(0, -1);
}

function calculate() {
    const calculateOperation = document.getElementById('operations');
    if (calculateOperation) {
        operations.value = eval(calculateOperation.value)
    }
    
}