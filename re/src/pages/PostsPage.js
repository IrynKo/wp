import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Posts from "../components/posts/Posts"
import { getPosts } from "../redux/posts/postsAction";

const PostsPage = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPosts())
      //const dataL=  dispatch(state);
        //axios.get('/wp-json/wp/v2/pages/24').then(res=>setData(res.data))
    },[])
    //console.log(data );
    return(
        
        <div>
            <Posts/>
            PostsPage
        </div>
    )
    }
    
    export default PostsPage