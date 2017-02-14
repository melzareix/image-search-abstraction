# Image Abstraction Microservice
### User stories:
```
1) User Story : I can get the image URLs, width, height, size and thumbnails 
   for a set of images relating to a given search string.
2) User Story : I can paginate through the responses by adding a ?offset=x parameter to the URL.
3) User Story : I can get a list of the most recently submitted search strings.
```


### Example usage:

```
https://image-search-abstractionz.herokuapp.com/api/v1/search/cats
https://image-search-abstractionz.herokuapp.com/api/v1/search/dogs?offset=10
https://image-search-abstractionz.herokuapp.com/api/v1/recent/
```


# How to install
 - Install NodeJS and NPM
 
    [https://docs.npmjs.com/getting-started/installing-node](https://docs.npmjs.com/getting-started/installing-node)
  
- Clone the project

  ```
  git clone https://github.com/melzareix/image-search-abstraction.git image-search-abstraction
  ```
- Install Dependencies

  ```
  cd image-search-abstraction
  npm install
  ```
- Run the project

  ```
    npm start
  ```
