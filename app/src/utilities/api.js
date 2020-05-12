const LOGIN = "http://158.69.156.182:8087/api/user-management-system/users/login";

export const login = (username, password) => {
    console.log("Inside sign in");
    console.log(username, password);
    return fetch(LOGIN, {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ userName: username, password: password })
    }).then((reponse) => reponse.json());
};