"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modelName, ...extraOption) {
    const carInfo = Object.assign({ manufacturer,
        modelName }, Object.assign({}, ...extraOption));
    return carInfo;
}
;
let answer = storeCarInfo('Honda', 'Civic', { color: 'White' }, { features: ['Navigation', 'Power windows'] });
console.log(answer);
