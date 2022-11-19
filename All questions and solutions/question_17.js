// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm

const date = new Date();

const formateDate = (Date) => {
    if(Date > 9) { 
        return Date;
    } else {
        return `0${Date}`;
    }
}

const formatHour = (Hour) => {
    if(Hour > 12) {
        return Hour - 12;
    } else if(Hour < 10){
        return `0${Hour}`;
    } else {
        return Hour;
    }
}


const format = {
    YYYY: date.getFullYear(),
    MM: formateDate(date.getMonth() + 1),
    DD: formateDate(date.getDate()),
    HH: formateDate(formatHour(date.getHours())),
    mm: formateDate(date.getMinutes())
};

const yyyy_mm_dd = (format) => {
    console.log(`${format.YYYY}-${format.MM}-${format.DD} ${format.HH}:${format.mm}`);
}

const dd_mm_yyyy = (format) => {
    console.log(`${format.DD}-${format.MM}-${format.YYYY} ${format.HH}:${format.mm}`);
}

const DD_MM_YYYY = (format) => {
    console.log(`${format.DD}/${format.MM}/${format.YYYY} ${format.HH}:${format.mm}`);
}


yyyy_mm_dd(format);
dd_mm_yyyy(format);
DD_MM_YYYY(format);