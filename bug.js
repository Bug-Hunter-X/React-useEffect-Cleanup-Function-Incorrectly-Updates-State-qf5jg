```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrectly attempting to update count inside the useEffect cleanup function
    return () => {
      setCount(count + 1); // This will cause errors!
    };
  }, []);

  return <div>Count: {count}</div>;
}
```