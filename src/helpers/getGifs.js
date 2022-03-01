export const getGifs = async (category) => {
    const apiKey = 'wN7P9kXwgEaWUV61zpd15Uh1YyfNhVAD';


    const resp = await fetch(`https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=${apiKey}`);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}