const Card = ({imgSrc, title ,borderColor}) => {
  return (
    <div className={` w-52 mt-5 text-center mx-5 p-4 shadow-lg border-x-1 border-t-1 border-b-4 ${borderColor}`}>
        <div className="flex items-center justify-center">
        <img src={imgSrc} />
        </div>
        <div className="text-black font-thin text-lg my-4" >{title}</div>
    </div>
  )
}

export default Card