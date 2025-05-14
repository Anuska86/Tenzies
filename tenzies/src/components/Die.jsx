export default function Die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  const renderPips = () => {
    switch (props.value) {
      case 1:
        return (
          <div className="pip-center">
            <span className="pip"></span>
          </div>
        );
      case 2:
        return (
          <div className="pip-diagonal">
            <span className="pip top-left"></span>
            <span className="pip bottom-right"></span>
            <span className="pip"></span>
          </div>
        );
      case 3:
        return (
          <div className="pip-diagonal">
            <span className="pip top-left"></span>
            <span className="pip bottom-right"></span>
            <span className="pip center"></span>
          </div>
        );
      case 4:
        return (
          <div className="pip-grid">
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        );
      case 5:
        return (
          <div className="pip-grid">
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip center"></span>
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        );
      case 6:
        return (
          <div className="pip-grid">
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
            <span className="pip"></span>
          </div>
        );
      default:
        return null;
    }
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
