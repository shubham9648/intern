import './style/content.css'
const Content = (props) =>{
    console.log(props)
    return (
        <>
     <div className='new'> 
         <img src={props.items.imageUrl}/>
         <img src={props.items.title}/>
         <div className="des">
             <h4>{props.items.description}</h4>
             <img src={props.items.more}/>
         </div>
         <p>{props.items.comments}</p>
         <div className='footer'>
             <img src={props.items.photo}/>
             <h3>{props.items.name}</h3>
             <div className='more-details'>
                 <img src={props.items.icon}/>
                 <p>{props.items.views}</p>
                 <img src={props.items.share}/>
             </div>
         </div>
     </div>
        </>
    )
}

export default Content