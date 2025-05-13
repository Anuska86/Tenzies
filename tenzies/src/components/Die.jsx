export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

const renderPips = () => {
  const columns = [[], []]; // Two columns for the pips
  for (let i = 0; i < props.value; i++) {
    // Always add to the left column (columns[0]) if it has fewer pips
    const columnIndex = columns[0].length < columns[1].length ? 0 : 1;
    columns[columnIndex].push(<span key={i} className="pip"></span>);
  }
  return (
    <div className="pip-columns">
      {columns.map((column, index) => (
        <div key={index} className="pip-column">
          {column}
        </div>
      ))}
    </div>
  );
};

  return (
    <button
      className="die"
      style={styles}
      onClick={props.hold}
      aria-pressed={props.isHeld}
      aria-label={`Die showing ${props.value} ${
        props.isHeld ? "held" : "not held"
      }`}
    >
      <div className="pips-container">{renderPips()}</div>
    </button>
  );
}
