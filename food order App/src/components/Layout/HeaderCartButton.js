import { useContext , useEffect ,useState} from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/CartContext";
import classes from "./HeaderCartButton.module.css"
const HeaderCartButton = (props) =>{
    const [buttonIsHighLighted,setButtonIsHighLighted] = useState(false);
    const cartContext = useContext(CartContext);
    const {items} = cartContext;
        const numberOfCartItems =items.reduce((currentNumber,item)=>{
            return currentNumber + item.amount;
        },0);

        const buttonClasses = `${classes.button} ${buttonIsHighLighted ? classes.bump : ''}`
        useEffect(()=>{
            if(items.length === 0 ){
                return;
            }
            setButtonIsHighLighted(true);

            const timer =setTimeout(() => {
                setButtonIsHighLighted(false)
            }, 300);
            return () => {
                clearTimeout(timer);
            };
        },[items])

    return (<button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
    );
};

export default HeaderCartButton;