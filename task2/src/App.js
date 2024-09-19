import './App.css';
import {useState} from "react"
import data from "./data.json";
import PostCard from './components/postcard';



function App() {
  const [postsdata, setpostsdata] = useState(data.posts)

  return (
   <div className='main'>
   <div className='posts-header'>
    <h1>Posts ({data.total})</h1>
   </div>
    {postsdata.map((post, index)=>{
      return <PostCard  key={index} postdata={post}/>
    })}
   </div>
  );
}

export default App;
