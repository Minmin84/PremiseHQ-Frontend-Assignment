import { useState, useEffect } from "react";
import CardContainer from "./containers/CardContainer/CardContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import { sampleData } from "./data/sampleData";
import "./styles/variables.css";

function App() {
  const [filteredData, setFilterData] = useState(sampleData);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    const newFilteredData = sampleData.filter((card) => {
      return card.name.toLocaleLowerCase().includes(searchField);
    });
    setFilterData(newFilteredData);
  }, [searchField]);

  const onSearchChange = (event) => {
    const searchFieldName = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldName);
  };

  return (
    <div className="App">
      {/* Add Responsive container component here. Render the card components inside of that component.  */}
      <div className="assignment">
        <h1> Premise Frontend Assignment </h1>
        <h2> By Jingwen Min </h2>
      </div>

      <SearchBar
        onChangeHandler={onSearchChange}
        placeholder="Search card by name..."
      />

      <CardContainer cards={filteredData} />
    </div>
  );
}

export default App;
