import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { registerLicense } from '@syncfusion/ej2-base';

registerLicense('Mgo+DSMBaFt/QHRqVVhkVFpHaV1EQmFJfFBmRGNTf1Z6dFRWACFaRnZdQV1hS3pRdEVrWX5Yd3JX;Mgo+DSMBPh8sVXJ0S0J+XE9AflRBQmFPYVF2R2BJfl56dF1MYF1BJAtUQF1hSn5RdEFhW39WcHVTT2Fe;ORg4AjUWIQA/Gnt2VVhkQlFacldJXnxLeEx0RWFab19wflVOalxQVBYiSV9jS31TdEdnW31eeHRUQWBYUw==;MTIwMjU2NUAzMjMwMmUzNDJlMzBXSFYrRjJLNk44UTNqOGthNW9KbVRXWHdUN0gvdEdMWHBaanE4TVpHVWdvPQ==;MTIwMjU2NkAzMjMwMmUzNDJlMzBYclZLQmVzZjh1bDFjVTlMRkJHbHlQeWwvdWkvdFVZdjhYeTVubHlLY0xZPQ==;NRAiBiAaIQQuGjN/V0Z+WE9EaFtKVmBWfFVpR2NbfE5xdF9GaFZRRWY/P1ZhSXxQdkdhXX1ccHxVR2dbUUY=;MTIwMjU2OEAzMjMwMmUzNDJlMzBjWkpzNENYdEdWN0xMSUw5ZEU4c0ZrV3pvV3NVbG0rS1RGYmUzWDdRV05rPQ==;MTIwMjU2OUAzMjMwMmUzNDJlMzBWekdBVlZTSExycWFUM2VZWDFoQmd5ZnY4ZS84L3RrejE3RnlxcFNwM3FVPQ==;Mgo+DSMBMAY9C3t2VVhkQlFacldJXnxLeEx0RWFab19wflVOalxQVBYiSV9jS31TdEdnW31eeHRUTmJVUw==;MTIwMjU3MUAzMjMwMmUzNDJlMzBqKytDRHowRWlqUkRnVGYxOVNIVXQ3WCt1bE40YU5DeGI0dHFZQVphKzZVPQ ==;MTIwMjU3MkAzMjMwMmUzNDJlMzBhbWcxa1g3TmlQNjZrZTZxTjkyb1NWM1hMZmtvZE9Qb3dtM2tDZXVIOWlVPQ==;MTIwMjU3M0AzMjMwMmUzNDJlMzBjWkpzNENYdEdWN0xMSUw5ZEU4c0ZrV3pvV3NVbG0rS1RGYmUzWDdRV05rPQ==')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();