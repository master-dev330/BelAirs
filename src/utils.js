const months = [
    "Janvier","Février","Mars","Avril","Mai",
    "Juin","Juillet","Août","Septembre","Octobre",
    "Novembre","Décembre"
];


const getMonthAndyear = (d) => {
    const a = new Date(d);
    return [months[a.getMonth()], a.getFullYear()];
}

const orderEventByDate = (events) => {
    const eventsByDate = {};
    events.forEach((event) => {
        const date = getMonthAndyear(event.start_date)
        const month = date[0];
        const year = date[1];

        if (!eventsByDate[`${month} ${year}`]) {
            eventsByDate[`${month} ${year}`] = [event];
        } else {
            eventsByDate[`${month} ${year}`].push(event);
        }
    });
    return eventsByDate;
}

// number of days between two dates
export const daysBetween = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date1);
    const secondDate = new Date(date2);
    return Math.round(Math.abs((firstDate - secondDate) / oneDay)) + 1;
}

// rang of dates between two dates
export const rangeOfDates = (date1, date2) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const firstDate = new Date(date1);
    const nbOfDay = daysBetween(date1, date2);
    const dates = [];
    for (let i = 0; i < nbOfDay; i++) {
        dates.push(new Date(firstDate.getTime() + i * oneDay));
    }
    return dates;
}

// format date
export const formatDate = (date) => {
    if (!date) return 'loading...';
    let d = date
    if(typeof(d) === 'string') {
        d = new Date(date);
    }
    const year = d.getFullYear();
    const month = months[d.getMonth()];
    const day = d.getDate();
    return `${day} ${month} ${year}`;
}




export default orderEventByDate;