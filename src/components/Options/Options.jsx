import s from './Options.module.css'

export default function Options ({onOptionClick, options}) {
    return (
        <div className={s.btnOptions}>
            {options.map(option => (
            <button key={option} onClick={() => onOptionClick(option)}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
            </button>
            ))}
        </div> 
    )
}