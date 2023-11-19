function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

async function fetchData(operation, num1, num2, bodyParams = {}) {
    let url = '/calculator';
    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    
    if (operation === 'add') {
        // use query parameters for addition
        const queryParams = `/${operation}?num1=${num1}&num2=${num2}`;
        url += queryParams;
    } else if (operation === 'subtract') {
        // use path parameters for subtraction
        url += `/${operation}/${num1}/${num2}`;
    } else if (operation === 'multiply' || operation === 'divide') {
        // use body parameters for multiplication and division
        url += `/${operation}`;
        options.body = JSON.stringify(bodyParams);
    }
    
    try {
        console.log('url: ', url);
        console.log({url});
        console.log(url)
        const res = await fetch(url, options);
        const json = await res.json();
        return json.result;
    } catch (error) {
        console.log(error);
        return "Error";
    }
    
}

function calculate() {
    try {
        const value = display.value;
        console.log({ value });

        let operator;
        let operation;
        let bodyParams = {};

        if (value.includes("+")) {
            operator = "+";
            operation = 'add';
        } else if (value.includes("-")) {
            operator = "-";
            operation = 'subtract';
        } else if (value.includes("*")) {
            operator = "*";
            operation = 'multiply';
            bodyParams = { num1: value.split(operator)[0], num2: value.split(operator)[1] };
        } else if (value.includes("/")) {
            operator = "/";
            operation = 'divide';
            bodyParams = { num1: value.split(operator)[0], num2: value.split(operator)[1] };
        }

        if (operation === 'add' || operation === 'subtract') {
            const [num1, num2] = value.split(operator);
            console.log({ num1, num2, operator });

            fetchData(operation, num1, num2)
                .then(result => {
                    display.value = result;
                });
        } else if (operation === 'multiply' || operation === 'divide') {
            console.log('bodyParams: ', bodyParams)
            fetchData(operation, null, null, bodyParams)
                .then(result => {
                    display.value = result;
                });
        } else {
            display.value = "Invalid operation";
        }
    } catch (error) {
        console.log(error);
        display.value = "Error";
    }
}