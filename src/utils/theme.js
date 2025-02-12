const Theme = 'theme';

export function getTheme(){
    return window.localStorage.getItem(Theme)
}

export function setTheme(token){
    return window.localStorage.setItem(Theme,token)
}

export function removeTheme(){
    return window.localStorage.removeItem(Theme)
}