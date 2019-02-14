module.exports = {
    prefix,
    removeSlashes,
};

function removeSlashes(str)
{
    let index = -1;
    for (let i = 0; i < str.length; i++)
    {
        if (str.charAt(i) !== '/')
        {
            index = i;
            break;
        }
    }
    if (index === -1)
    {
        return str;
    }
    else
    {
        return str.substring(index);
    }
}

function prefix(url)
{
    url = removeSlashes(url);
    return `/server/${url}`;
}