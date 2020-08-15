/**
 * function that update UI.
 * @param {data} object 
 * {
 *   input_text: userInput,
 *   polar: 'data from server',
 *   subject: 'data from server',
 *   polar_conf: 'data from server',
 *   subject_conf: 'data from server'
 * }
 */
export const updateUI = (data) => {
    if (!data.text) {
        alert('Requested URL was not found');
        return false;
    }
    const result = document.getElementById('result');
    //show result section
    result.className = 'flex-box';

    //clear input textarea
    document.getElementById('text').value = "";

    //fill result section
    document.getElementById('input_text').innerHTML = data.text;
    document.getElementById('polar').innerHTML = data.polarity;
    document.getElementById('subject').innerHTML = data.subjectivity;
    document.getElementById('polar_conf').innerHTML = data.polarity_confidence;
    document.getElementById('subject_conf').innerHTML = data.subjectivity_confidence;
}
