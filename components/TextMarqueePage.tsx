import ScrollVelocity from './ScrollVelocity';
const TextMarqueePage = () => {
  return (
    <>
    
    
    <div className="my-5 w-full h-screen text-9xl ">
      <ScrollVelocity
  texts={['Imagine We Code ✦ ', 'Get It Now ➔']} 
  velocity={100} 
  className="custom-scroll-text"
/>
    </div>
    </>
  )
}

export default TextMarqueePage