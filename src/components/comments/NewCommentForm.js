import { useRef } from 'react';

import useHttp from '../../hooks/use-http';
import { addComment } from '../../lib/api';
import classes from './NewCommentForm.module.css';

const NewCommentForm = (props) =>{
    const commentTextRef = useRef();
    
    const {sendRequest, status} = useHttp(addComment);

    const submitFormHandler = (event) =>{
        event.preventDefault();
        const enteredText = commentTextRef.current.value;

        sendRequest({text: enteredText});
    };

    return(
        <form className={classes.form} onSubmit={submitFormHandler}>
            {/* {status === pending &&(<div className='centered'><LoadingSpinner /></div>)} */}
            <div className={classes.control} onSubmit={submitFormHandler}>
                <label htmlFor='comment' className={classes.inputHead}>Your Comment</label>
                <textarea id='comment' row='5' ref={commentTextRef} className={classes.textarea}></textarea>
            </div>
            <div className={classes.actions}>
                <button className={classes.btn}>Add Comment</button>
            </div>
        </form>
    );
};

export default NewCommentForm;