# React Gallery App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This project uses the React library to make components to render a single page app. It also uses react-router-dom to
handle routing. The axios library is utilized to make requests to the Flickr API and retrieve images. Three routes are static and their
data sets will only be generated at the start of the app. However, the search function works dynamically. A loading bar has been added
along with a three second forced waiting period so that it will always display on the search function.

## Running the project

### Install the dependencies
Navigate to the project directory. Run the following command:
```bash
npm i
```

### Get a Flickr API key
You can [apply here](https://www.flickr.com/services/apps/create/apply/)

### Create a config file
Inside the "src" directory, create a config.js file. It should look like this, but replace `<your api key>` with the API key you got from Flickr

```js
const apiKey = '<your api key>';
export default apiKey;
```

Wait for the packages to install. Run the following command:

```bash
npm start
```
