import './components/style/post.css'
import Vector1 from './images/Vector (1).png'
import Vector2 from './images/Vector (2).png'
import Content from './components/Content'
import data from './data'

const Post = () =>{
    const items = 0 ;
    const content = data.map(items=>{
        return <Content
        items = {items}
        />
    })
    
    return (
        <>

        <div className='head'>
           <div className='left-elem'>
                  <div className='articles'>
                        <p>All Posts(32)</p>
                        <p>Article</p>
                        <p>Event</p>
                        <p>Education</p>
                        <p>Job</p>
                    </div>  
              {content}
           </div>

        <div className='write-elem'>
             <div className="write">
                 <p>write a post
                     <span>
                         <img src={Vector1}/>
                     </span>
                 </p>
             </div>

             <div className="join">
              <span>
                  <img src={Vector2}/>
                  Join Group
              </span>
             </div>
         </div>

     </div>
  </>
    )
}


export default Post