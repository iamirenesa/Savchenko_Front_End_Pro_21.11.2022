const year = prompt('What year were you born?');
const age = 2022 - year;
const ageResult = year >0 ? `${age}` : `It's a pity you haven't indicated your age!`;
//alert(ageResult);

const city = prompt('What city do you live in?');
let countryResult = ``;
switch (city) {
    case 'Kyiv':
        countryResult = `You live in the capital of Ukraine`;
        break;
    case 'Washington':
        countryResult = `You live in the capital of USA`;
        break;
    case 'London':
        countryResult = `You live in the capital of Great Britain`;
        break;
    default:
        countryResult = `You live in ${city}`;
        break;
    case null:
        countryResult = `It's a pity you haven't indicated the city you live in!`;
}
//alert(countryResult);

const sport = prompt('What kind of sport are you fond of?');
let sportResult = ``;
switch (sport) {
    case 'football':
        sportResult = `Cool! Do you want to become new Andrii Shevchenko?`;
        break;
    case 'box':
        sportResult = `Cool! Do you want to become new V. Klychko?`;
        break;
    case 'basketball':
        sportResult = `Cool! Do you want to become new Michael Jordan?`;
        break;
    default:
        sportResult = `Your favorite kind of sport is ${sport}`;
        break;
    case null:
        sportResult = `It's a pity you haven't indicated your favorite kind of sport!`;
}

alert(ageResult + `\n`+ countryResult + `\n`+ sportResult);








