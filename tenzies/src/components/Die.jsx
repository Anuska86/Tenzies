

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  const renderPips = () => {
    const columns = [[], []]; // Two columns for the pips
    for (let i = 0; i < props.value; i++) {
      const columnIndex = i % 2; // Alternate between column 0 and column 1
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
      aria-label={`Die showing ${props.value} ${props.isHeld ? "held" : "not held"}`}
    >
      <div className="pips-container">{renderPips()}</div>
    </button>
  );
}


