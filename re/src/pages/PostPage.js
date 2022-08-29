import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Posts from "../components/posts/Posts"
import { getPost } from "../redux/posts/postsAction";

const PostPage = () => {
    const id = useParams().id;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPost(id))
      //const dataL=  dispatch(state);
        //axios.get('/wp-json/wp/v2/pages/24').then(res=>setData(res.data))
    },[])
    //console.log(data );
    return(
        
        <div>
            <Posts/>
            PostPage
        </div>
    )
    }
    
    export default PostPage