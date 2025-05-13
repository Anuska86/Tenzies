

export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

const renderPips=()=>{
    const pips = [];
    for (let i = 0; i < props.value; i++) {
      pips.push(<span key={i} className="pip"></span>);
    }
    return pips;
}   

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


