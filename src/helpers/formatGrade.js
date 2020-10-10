export default function formatGrade(value) {
    let tmp = value.toLocaleString().replace(/\s+/g, ",");

    return `$${tmp}`;
}