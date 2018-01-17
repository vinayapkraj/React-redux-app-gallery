
How to Run:
Application can be hosted in any static server. Please follow the below steps for deploying it using node server.
  1. Open Command Prompt 
  2. Go to the downloaded path and open the project using 'cd $DownloadedPath\React-redux-app-gallery'
  3. Run the command npm run build for building the app for production.
  4. Run the command npm install -g serve and serve -s build to start the application.
  5. Run the command npm test for running the test cases.
  
Key points about Project:

1. REDUX framework is used for fetching data and managing the state which is rendered by REACT components.
2. Application is created using 'Create-react-app' tool.
3. Bundling default used in 'create-react-app' is 'Webpack'. 

Please find below the details about the implementation of redux in the project.

Component - .\React-redux-app-gallery\src\components\App.js  
          Stateless component which contains Header, Content and footer. 
          Content - Place holder for displaying the data received as a result of state change. List of series available is displayed inside content div.
          Created Tooltip that can be used for future enhancement to display the details about the series.

Action - .\React-redux-app-gallery\src\actions\index.js
          Contains functions that can be used for fetching the data from SERVER URL.
          Fetch the data using function 'fetchPostsWithRedux()' which in turn calls the 'fetchPostRequest()' and 'fetchPost()'.
          'fetchPostsSuccess()' will be called when fetching data succeeds and 'fetchPostsError()' when it fails.  

Container - .\React-redux-app-gallery\src\containers\Dashboard.js
          Fetches application state data by calling fetchPostsWithRedux method during Component mount lifecycle.
          Application state is mapped to the property 'posts' and passed to the component for re-rendering.
          As the JSON data holds array of array used nested return statement.
          As the state is initialized to null, created null check to avoid exceptions.
          Included img-responsive for responsive application.

Reducer - .\React-redux-app-gallery\src\reducers\index.js
          Pure functions that take the previous state and an action, and return the next state
          Dispatches the updated state / data to store.
          Each action and their corresponding dispatch state / data is defined inside switch case.

Store - .\React-redux-app-gallery\src\store\configure-store.js
          React components are stateless and state is kept in the Redux store, one common place, for simplicity.
          The props for React components come from Reducer('allReducer') is available in 'store' that tracks the state. 

