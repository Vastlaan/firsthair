export default function appendZeroToUnit(unit) {
    return unit.toString().length === 1 ? `0${unit}` : unit.toString();
}
