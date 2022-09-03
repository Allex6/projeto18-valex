/**
 * @description Returns the card holder name based on the name of the employee.
 * @param {string} employeeName Name of the employee.
 */
export function getCardHolderName(employeeName: string){

    const splitted = employeeName.split(' ');
    let cardholderName = '';

    for(let i = 0; i < splitted.length; i++){

        const name = splitted[i];

        if(i === 0 || i === (splitted.length - 1)) {

            cardholderName += `${name.toUpperCase()} `;

        } else if(name.length >= 3) {

            const initialChar = name.at(0)?.toUpperCase();
            cardholderName += `${initialChar} `;

        }

    }

    return cardholderName.trim();

};