module.exports = {
    randomNumber,
    randomInteger,
    randomString,
    randomCharacters,
    randomBoolean,
};

function randomNumber(start, end, precision)
{
    if (!Number.isInteger(precision))
    {
        throw new TypeError('The precision of number must be an integer');
    }
    const {random} = Math;
    return (random() * (end - start) + start).toFixed(precision);
}

function randomInteger(start, end)
{
    if (!Number.isInteger(start) || !Number.isInteger(end))
    {
        throw new TypeError('The range of the integer must be integers');
    }

    const {random, round} = Math;
    return round(random() * (end - start) + start);
}

function randomString(length = 11)
{
    if (!Number.isInteger(length))
    {
        throw new TypeError('The length of the string must be an integer');
    }
    const charArray = [];
    if (length <= 11)
    {
        charArray.push(...Math.random().toString(36).slice(2, 2 + length));
    }
    else
    {
        const generateTime = Math.floor(length / 10);
        const restLength = length - 10 * generateTime;
        for (let i = 0; i < generateTime; i++)
        {
            charArray.push(...Math.random().toString(36).slice(2));
        }
        charArray.push(...Math.random().toString(36).slice(2, 2 + restLength));
    }
    return charArray.join('');
}

function randomCharacters(length = 5)
{
    if (!Number.isInteger(length))
    {
        throw new TypeError('The length of the string must be an integer');
    }
    const {random, round} = Math;
    const start = 0x4E00;
    const end = 0X9FA6;
    const characterArray = [];
    for (let i = 0; i < length; i++)
    {
        characterArray.push(round(random() * (end - start) + start));
    }
    return String.fromCodePoint(...characterArray);
}

function randomBoolean()
{
    const {random, round} = Math;
    return round(random()) === 1;
}