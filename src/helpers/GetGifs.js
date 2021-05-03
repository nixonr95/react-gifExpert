

 export const getGifs = async (category) =>{
    const url= `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=U3SW939ZII8lyADYooKpeA235KixhSXa`;  //encodeURI arregla espacios y los cambia por + ...etc
    const resp = await fetch(url);
    const {data} = await resp.json(); //la respuesta es un .json por eso toca con .json se desestructura porque se quiere la data que hay dentro de la data
    
    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url     //se le pone signo de interrogacion para preguntarle que si viene la imagen si la utilice
        }
    })

    return gifs;
}