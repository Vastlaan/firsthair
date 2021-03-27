export default function shortDaysToDutch(day) {
    switch (day) {
        case "Mon":
            return "Mo";
        case "Tue":
            return "Di";
        case "Wed":
            return "Wo";
        case "Thu":
            return "Do";
        case "Fri":
            return "Vr";
        case "Sat":
            return "Za";
        case "Sun":
            return "Zo";
        default:
            return "Ma";
    }
}
