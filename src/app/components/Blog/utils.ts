
export const replace_id = (el: any) => {
    if (typeof el == "string") {
        return el.replace(/\W/g , '-').toLowerCase()
    }

    return "";
}