import { Tooltip } from "bootstrap";

function getTooltip(ref) {
    if (ref) {
        const refCurrent = ref.current;
        if (refCurrent) {
            return new Tooltip(refCurrent, {
                trigger: "hover",
                placement: "top",
                delay: { show: 300, hide: 400 }
            });
        }
    } else {
        return null;
    }
}

export default getTooltip;
