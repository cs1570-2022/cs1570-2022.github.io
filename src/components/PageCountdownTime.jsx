import clsx from "clsx";
import React from "react";
import { Links } from "../Configuration";
import formatDistance from "date-fns/formatDistance";

export const PageCountdownTime = (props) => {
    const { date } = props;
    const properDate = new Date(date);
    properDate.setFullYear(Links.year);

    const differenceDisplay = formatDistance(properDate, Date.now(), { addSuffix: true });
    const dateDifference = Date.now() - properDate.valueOf();

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

    return <span>
        <span>{date}</span>
        {dateDifference < 0 && (
            <>
                <span className="ml-1">(</span>
                    <i className={clsx("fas fa-lg", computeIcon())}></i>
                    <span className="ml-1 text-capitalize font-weight-light">{differenceDisplay}</span>
                <span>)</span>
            </>
        )}
    </span>
}