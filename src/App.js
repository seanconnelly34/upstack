import useFetchData from "./hooks/useFetchData";
import ListData from "./components/ListData";

function App() {
  const { data, loading, error } = useFetchData();
  return (
    <div className='App'>
      {error && "Error fetching data"}
      {loading ? " Data is Loading" : <ListData sampleData={data} />}
    </div>
  );
}

export default App;
