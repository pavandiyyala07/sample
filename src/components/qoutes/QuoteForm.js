import { Fragment, useRef, useState } from 'react';
import { Prompt } from 'react-router-dom';
import Card from '../UI/Card';
// import LoadingSpinner from '../UI/LoadingSpinner';
import classes from './QuoteForm.module.css';

const QuoteForm = (props) =>{
    const authorInputRef = useRef();
    const textInputRef = useRef();
    const [isEntering, setIsEntering] = useState(false);

    function submitFormHandler(event){
        event.preventDefault();

        const enteredAuthor = authorInputRef.current.value;
        const enteredText = textInputRef.current.value;

        props.onAddQuote({author:enteredAuthor, text:enteredText});
    }
    
    const finishEnteringHandler = () =>{
        setIsEntering(false);
    };

    const formFocusedHandler = () =>{
        setIsEntering(true);
    };

    return(
        <Fragment>
            <Prompt 
                when={isEntering} 
                message={(location) =>
                    'Are you sure, you want to leave? All your entered data will be lost!'
                }
            />
            <Card>
                <form className={classes.form} onSubmit={submitFormHandler} onFocus={formFocusedHandler}>
                    {props.isLoading &&(
                        <div className={classes.loading}>
                            {/* <LoadingSpinner /> */}
                        </div>
                    )}

                    <div className={classes.control}>
                        <label className={classes.inputHead} htmlFor='author'>Author</label>
                        <input className={classes.input} type='text' id='author' ref={authorInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label className={classes.inputHead} htmlFor='text'>Text</label>
                        <textarea className={classes.textarea} id='text' rows='5' ref={textInputRef} ></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button onClick={finishEnteringHandler} className={classes.btn}>Add Quote</button>
                    </div>
                </form>
            </Card>
        </Fragment>
    )
};

export default QuoteForm