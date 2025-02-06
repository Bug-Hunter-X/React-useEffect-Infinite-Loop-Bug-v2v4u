```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // The correct implementation updates the count only once
    setCount(count + 1);
  }, []);

  return <div>Count: {count}</div>;
}
```