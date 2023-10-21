import css from './css.module.css'

const Post = ({post, click}) => {

    const {id, title} = post;

    return (
        <div className={css.post}>
            <div>id- {id}</div>
            <div>title - {title}</div>
            <div className={css.button}>
                <button onClick={() => click(id)}> details</button>
            </div>
        </div>
    );
};

export {Post};