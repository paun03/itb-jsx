let generateImage = (src) => {
    let image = document.createElement("img");
    image.src = src;
    image.width = 300;
    return image;
};

export default generateImage;