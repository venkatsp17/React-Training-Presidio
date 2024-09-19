import LikeSection from "./likesection";
import DisLikeSection from "./dislikesection";
import ViewSection from "./viewsection";

function PostCard({ postdata }) {
    return <>
        <div className="main-card">
            <h2>{postdata.title}</h2>
            <p>{postdata.body}</p>
            <div className="reaction-section">
                <LikeSection likes={postdata.reactions.likes} />
                <DisLikeSection dislikes={postdata.reactions.dislikes}/>
                <ViewSection views={postdata.views}/>
            </div>
            {
                postdata.userId === 123 && 
                <div className="main-footer">
                    <button className="btn">Edit</button>
                    <button className="btn">Delete</button>
                </div>
            }
         
        </div>
    </>
}

export default PostCard;