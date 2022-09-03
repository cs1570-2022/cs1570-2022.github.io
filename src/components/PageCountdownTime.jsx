import clsx from "clsx";
import React from "react"

export const PageCountdownTime = (props) => {
    const { date } = props;
    const numberDate = Date.parse(date);
    const dateDifference = Date.now() - numberDate;
    console.log(dateDifference, numberDate, date)

    function computeIcon() {
        if (dateDifference < 0) {
            return 'fa-calendar-check';
        }
        /* not due yet */
        if (dateDifference < 7200000) {
            return 'fa-exclamation';
        }

        if (dateDifference < 86400000) {
            return 'fa-calendar-day';
        }

        if (dateDifference < 604800000) {
            return 'fa-calendar-week';
        }

        return 'fa-calendar';
    }

    function computeDisplay(){
        if(dateDifference < 7200000){
            return dateDifference / (1000 * 3600);
        }
        else {
            return dateDifference / (1000 * 3600 * 24)
        }
    }

    return <span>
        <span>{date}</span>
        <span class="ml-1">(</span>
            <i className={clsx("fas fa-lg", computeIcon())}></i>
            <span class="ml-1 text-capitalize font-weight-light">{computeDisplay()}</span>
        <span>)</span>
    </span>
}