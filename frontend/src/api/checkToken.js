export default (status, history) => {
    if(status === 403) {
        window.localStorage.removeItem('token')
        history.push('/login')
    }
}