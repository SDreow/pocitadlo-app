import "./IncreaseButton.css"

const IncreaseButton = (props) => {

    return <>
        <button className="inc-btn" onClick={props.increase}>Zvíšit o 1</button>
    </>
}

export default IncreaseButton