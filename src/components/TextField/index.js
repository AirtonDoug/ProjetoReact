import './TextField.css'
const TextField = (props) => {
    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input
                onChange={event => props.onChange(event.target.value)}
                placeholder={props.placeholder}
                required={props.obrigatorio}
            />
        </div>
    )
}
export default TextField