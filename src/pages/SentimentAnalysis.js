import React, { useEffect, useState } from 'react';

const SentimentAnalysis = () => {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const runPythonCode = async () => {
      try {
        // Load Pyodide
        const pyodide = await window.languagePluginLoader;

        // Define and run Python code using pyodide.runPython()
        const pythonCode = `
        result = 42
      `;
      

        // Run Python code and update state with the result
        setResult(pyodide.runPython(pythonCode));
      } catch (error) {
        console.error('Error running Python code:', error);
      }
    };

    runPythonCode();
  }, []);

  return (
    <div>
      <h2>Sentiment Analysis Results</h2>
      {result !== null ? (
        <div>
          <p>Python Result:</p>
          <pre>{JSON.stringify(result, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SentimentAnalysis;
