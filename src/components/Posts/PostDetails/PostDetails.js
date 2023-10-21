const PostDetails = ({postDetails}) => {
    const {body, id, title, userId} = postDetails;

    return (
        <div>
            <div>body - {body} </div>
            <div>id - {id} </div>
            <div>title - {title} </div>
            <div>userId - {userId} </div>
            <div> - {} </div>
        </div>
    );
};

export {PostDetails};