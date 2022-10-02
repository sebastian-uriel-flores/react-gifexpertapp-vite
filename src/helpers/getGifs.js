export const getGifs = async( category ) => {
    const apiKey = '2lzQGEEQvySUcOji323c9p3jZ2Z97Vjj';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=20`;
    const response = await fetch( url );
    const { data } = await response.json();

    const gifs = data.map( ({ id, title, images }) => ({
        id: id,
        title: title,
        url: images.downsized_medium.url
    }));

    return gifs;
}