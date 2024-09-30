import "./switch.css";

export default function SwitchBtn() {
  return (
    <div className="btn-container" id="measurement_wrapper">
      <label className="switch btn-measurement-switch">
        <input value="1" id="measurement" name="measurement" type="checkbox" />
        <label
          className="btn-measurement-switch-inner"
          data-off="Cl"
          data-on="Oz"
          htmlFor="measurement"
        ></label>
      </label>
    </div>
  );
}
