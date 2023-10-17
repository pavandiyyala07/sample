import classes from './sample.module.css';

const Sample = () =>{
    return (
        <div>
            <header className={classes.head}>
                <h1>Great Quotes</h1>
                <div className={classes.options}>
                    <p>All Quotes</p>
                    <p>Add a Quote</p>
                </div>
            </header>
            <div className={classes.body1}>                
                <body >
                    <div className={classes.box}>
                        <p className={classes.text1}>This is a test!</p>
                        <p className={classes.text2}>Test</p>
                    </div>
                    <div className={classes.body2}>
                        <h1 className={classes.headTag}>User Comments</h1>
                        <button className={classes.btn}>Add a Comment</button>
                        <p className={classes.text3}>Test</p>
                        <div className={classes.anotherComponentBox}>
                            <p className={classes.text3}>Another Comment!</p>
                        </div>
                    </div>
                </body>
                <div>
                    <div className={classes.ascBox}>
                        <p className={classes.ascText}>Sort Ascending</p>
                    </div>
                    <div className={classes.taskBox}>
                        <div>
                            <p className={classes.taskHead}>This is a test!</p>
                            <p className={classes.taskTail}>Test</p>
                        </div>
                        <button className={classes.btn}>View Fullscreen</button>
                    </div>
                </div>
                <form className={classes.formBox}>
                    <label className={classes.inputHead} htmlFor="text">Author</label>
                    <input className={classes.input} type="text" id="text"/>
                    <label className={classes.inputHead} htmlFor="message">Text</label>
                    <textarea className={classes.textarea} type="text" id="message"/>
                    <div className={classes.addQuoteBox}>
                        <button className={classes.btn}>Add Quote</button>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default Sample;