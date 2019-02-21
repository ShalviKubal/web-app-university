/*export default function LoginService() {
    var loginToApp = fetch('https://facebook.github.io/react-native/movies.json')
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.movies;
    })
    .catch((error) => {
      console.error(error);
    });
    return{
        loginToApp :loginToApp
    }
}https://facebook.github.io/react-native/movies.json*/
export default {
    getItems: (data) => {
      return fetch('http://localhost:5555/login', {
        method: 'post',
        headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    },
    otherApiCall: (params) => {
    }
  }