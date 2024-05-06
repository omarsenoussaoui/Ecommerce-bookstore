/*import { Offer } from "../types/offer";*/



export const calculateTimeRemaining = (endDate : Date) => {
    const now = new Date().getTime();
    const endTime = new Date(endDate).getTime();
    const distance = endTime - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
        days,
        hours,
        minutes,
        seconds
    };
};