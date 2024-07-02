import classNames from "classnames";

function Skeleton({times, className}) {
   const outerclassname = classNames(
    'relative',
    'overflow-hidden',
    'bg-gray-200',
    'mb-2.5',
    className
   );
   const innnerclassname = classNames(
    'animate-shimmer',
    'absolute',
    'inset-0',
    '-translate-x-full',
    'bg-gradient-to-r',
    'from-gray-200',
    'via-white',
    'to-gray-200'
   );
    const boxes = Array(times).fill(0).map((_,i)=>{
        return <div key={i} className={outerclassname}>
            <div className={innnerclassname}></div>
            </div>
    })

    return <div>{boxes}</div>

}

export default Skeleton;