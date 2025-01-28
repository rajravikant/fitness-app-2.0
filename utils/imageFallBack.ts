
export const getImage = (uri: string) => {
    if (uri) {
        return {uri};
    }
    else {
        return require("@/assets/images/user_fallback.png");
    }
    };