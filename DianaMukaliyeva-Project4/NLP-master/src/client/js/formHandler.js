/* Function that called on button click */
export const handleSubmit = (event) => {
    event.preventDefault();
    const data = {};

    //hide the result section in case it shows old results
    const result = document.getElementById('result');
    result.className = 'hidden';

    // get the user's input
    const format = document.querySelector('input[name=format]:checked').value;
    const clientInput = document.getElementById('text').value;

    //check whether it was url or custom text
    if (format === 'url') {
        try {
            new URL(clientInput);
        } catch (_) {
            alert('It is not valid URL');
            return false;
        }
        data.url = clientInput;
    } else {
        data.text = clientInput;
    }

    //call function getAnalys to send request to the server
    Client.getAnalys('http://localhost:8081/analys', data)
    .then(function(res) {
        //update UI according to response
        Client.updateUI(res);
    })
}
