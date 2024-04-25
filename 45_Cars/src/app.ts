import { features } from "process";

function storeCarInfo(manufacturer: string, modelName: string, ...extraOption: { [key: string] : any} [] ) : object {
    
    const carInfo = {
        manufacturer  ,
        modelName,
        ...Object.assign({},...extraOption)
    }
    return carInfo;
};

let answer = storeCarInfo('Honda', 'Civic', {color: 'White'}, {features: ['Navigation', 'Power windows'] })
console.log(answer)
