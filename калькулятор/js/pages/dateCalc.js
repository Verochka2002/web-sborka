import { printError, printDateDiff } from '../utils/calc/print.js'
import getDateDiff from '../utils/calc/getDateDiff.js';
const form = document.getElementById("calcDate");

form.onsubmit = (event) => {
    event.preventDefault();
    const fromData = new FormData(form);
    const dateFrom = fromData.get("dateFrom");
    const dateTo = fromData.get("dateTo");

    if (!dateFrom || !dateTo) {
        printError('Ошибка, заполните оба поля!')
        return
    }

    const dateDiff = getDateDiff(dateFrom, dateTo);
    printDateDiff(dateDiff)
}