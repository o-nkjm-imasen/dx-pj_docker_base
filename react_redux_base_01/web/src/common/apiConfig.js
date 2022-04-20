const env = process.env 
export const fetchBeApiServer = () => {
    return `${env.REACT_APP_BE_API_ADDR}:${env.REACT_APP_BE_API_PORT}`
}
