export default function createArrAnswers(arr = []) {
    if (!arr.length) {
        return arr;
    }

    const arrSort = randomSort(arr);
    const answerTrue = findAnswerTrue(arrSort);
    const answersFalse = findAnswersFalse(arrSort);
    const temp = [...answersFalse, answerTrue];

    return randomSort(temp);
}

function randomSort(arr = []) {
    let j;
    let temp;

    if (!arr.length) {
        return arr;
    }

    for (let i = arr.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

function findAnswerTrue(arr = []) {
    if (!arr.length) {
        return;
    }

    return arr.find((item) => item.truth);
}

function findAnswersFalse(arr = []) {
    if (!arr.length) {
        return arr;
    }

    const allAnswerFalse = arr.filter((item) => !item.truth);
    let temp = [];

    for (let i = 0; i < 3; i++) {
        if (!allAnswerFalse[i]) {
            break;
        }

        temp = [...temp, allAnswerFalse[i]];
    }

    return temp;
}
