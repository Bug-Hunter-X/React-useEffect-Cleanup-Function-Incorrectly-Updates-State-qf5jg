```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct implementation: no state update in the cleanup function
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval); // Correct cleanup for the interval
    };
  }, []);

  return <div>Count: {count}</div>;
}
```