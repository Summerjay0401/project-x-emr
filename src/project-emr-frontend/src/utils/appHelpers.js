import {USE_IMAGE_PLACEHOLDERS} from "./constants/paths";

export const getAssetPath = (url, size) => {
    if(USE_IMAGE_PLACEHOLDERS) {
        return `https://via.placeholder.com/${size}.png`;
    }

    return url;
};