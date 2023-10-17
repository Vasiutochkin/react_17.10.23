const Simpson = ({simpson}) => {

    const {id, name, age, info, image} = simpson;

    return (
        <div>

            <div>id = {id} </div>
            <div>name = {name} </div>
            <div>age = {age} </div>
            <div>info = {info} </div>
            <img src={image} alt={name}/>

        </div>
    );
};

export {Simpson};