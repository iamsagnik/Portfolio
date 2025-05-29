import SplitText from "../animation/SplitText";
import ClickSpark from "../animation/ClickSpark";

function Bridge() {

  const handleAnimationComplete = () => {
  console.log('All letters have animated!');
  };


  return (
    <ClickSpark
      sparkColor='#FFCC00'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="flex h-screen bg-red">
        <div className="w-1/2 bg-[#BEBEBE] flex justify-end items-center">
          <SplitText
            text="Welcome to"
            className="text-4xl font-bold text-black"
            delay={150}
            animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
            animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
            onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>
        <div className="w-1/2  flex justify-start items-center bg-[#404040] pl-2">
          <div>
            <h1 className="text-4xl font-bold text-white">The Bridge</h1>
          </div>
          <div className="absolute bottom-0 right-0">
            <h1 className="text-sm font-semibold text-white p-2 opacity-50">Click in the screen to see some magic</h1>
          </div>
        </div>
      </div>
    </ClickSpark>
  )
}

export default Bridge;