export default function randomIndex(maxValue = 0) {
    let rand;

    rand = Math.random() * maxValue;

    return Math.floor(rand);
}
