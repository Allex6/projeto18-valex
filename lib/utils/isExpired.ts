import dayjs from "dayjs";
import errorFactory from "./errorFactory";

/**
 * @description This function verifies if the card has already expired, based on the expirationDate param.
 * @param expirationDateString Card expiration date string. Format must be => mm/yy
 * @returns A boolean that indicates if the card has already expired.
 */
export default function isExpired(expirationDateString: string){

    const expirationMonth = expirationDateString.split('/')[0];
    const expirationYear = expirationDateString.split('/')[1];

    if(!expirationMonth || !expirationYear) throw errorFactory('invalid_expiration_date', 'Expiration date must be formatted as "mm/yy"');

    const now = dayjs();
    const expirationDate = dayjs().set('months', Number(expirationMonth)).set('years', Number(expirationYear));

    if(!expirationDate.isValid()) throw errorFactory('invalid_expiration_date', 'Expiration date must be formatted as "mm/yy"');

    return (expirationDate.unix() >= now.unix());

}