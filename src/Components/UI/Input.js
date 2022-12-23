import classes from './Input.module.css';

const Input = props =>{
    return <div className={classes.input}>
        <label>{props.label}</label>

         {/* take all the props using spread operator from MealItemForm.js */}
        <input {...props.input}/> 
    </div>
}

export default Input;