import { Link } from "react-router-dom"
import classes from './QuoteItem.module.css';

const QuoteItem = (props) =>{
    return (
        <li className={classes.item}>
            <figure className={classes.figure}>
                <blockquote className={classes.taskHead}>
                    <p >{props.text}</p>
                </blockquote>
                <figcaption className={classes.taskTail}>{props.author}</figcaption>
            </figure>
            <Link className={classes.btn} to={`/quotes/${props.id}`}>
                View Fullscreen
            </Link>
        </li>
    );
};

export default QuoteItem;