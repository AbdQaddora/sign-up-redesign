import './style.css';
const MyAlert = ({ success, index, children }) => {
    return (
        <div
            className={`alert ${success ? "success" : ""}`}
            style={{ top: index ? (index + 1) * 55 : 55 }}
        >
            {console.log(index ? (index + 1) * 70 : 25)}
            {children}
        </div>)
}

export default MyAlert
