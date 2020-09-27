export const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=10&api_key=4La8ff0FWXfd1wVKFKJ6rkGJXpwTSzca`
    const resp = await fetch( url );
    const {data} = await resp.json();

    

    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized.url
        }
    })

    return gifs;


}