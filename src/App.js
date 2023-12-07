// App.js

// Import necessary dependencies from React
import React, { useState } from 'react';

// Import the CSS file for styling
import './App.css';

// Functional component definition
const App = () => {
  // State hook to manage the count variable
  const [count, setCount] = useState(0);

  // Function to increase the count when the "Increase" button is clicked
  const increaseCount = () => {
    setCount(count + 1);
  };

  // Function to decrease the count when the "Decrease" button is clicked
  const decreaseCount = () => {
    setCount(count - 1);
  };

  // JSX structure representing the UI of the ReactJS app
  return (
    <div className="App">
      <header className="App-header">
        <h1>ReactJS Sample App</h1>

        {/* Container for displaying the count and buttons */}
        <div className="count-container">
          <p>Count: {count}</p>

          {/* Container for the "Increase" and "Decrease" buttons */}
          <div className="button-container">
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
          </div>
        </div>
      </header>
    </div>
  );
};

// Export the App component as the default export
export default App;
