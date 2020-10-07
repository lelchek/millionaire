export default function validateQuestions(arr = []) {
    let temp = [];

    if (!arr.length) {
        return temp;
    }

    arr.forEach(item => {
        const { cost, question, answers } = item
        if (isNaN(cost)) {
            return;
        }
        if (!question) {
            return;
        }
        if (!validateAnswers(answers)) {
            return;
        }

        temp = [...temp, item];
    });

    return temp;
}

function validateAnswers(arr = []) {
    if (!arr.length) {
        return false;
    }

    const isAnswerTrue = arr.filter((item) => item.truth)
        .find(item => item.text);
    const isAnswerFalse = arr.filter((item) => !item.truth)
        .find(item => item.text);

    if (isAnswerTrue && isAnswerFalse) {
        return true;
    }

    return false;
}
