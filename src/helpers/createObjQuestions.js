export default function createObjQuestions(arr = []) {
    const temp = {};

    if (!arr.length) {
        return temp;
    }

    arr.forEach((item) => {
        if (!temp[item.cost]) {
            temp[item.cost] = [];
        }
        temp[item.cost] = [...temp[item.cost], item];
    });

    return temp;
}
