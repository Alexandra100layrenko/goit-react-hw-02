import s from './Options.module.css'

export default function Options () {
    return (
        <div className={s.btnOptions}>
            <button onClick={() => setValue((value) => value + 1)}>
                count is {value}
            </button>
      </div> 
    )
}