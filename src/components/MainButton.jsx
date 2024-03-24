
const MainButton = ({title, route}) => {
  return (
    <a href={route} className="bg-white flex justify-center w-80 m-10 p-20 rounded-md">
      <h2 className="text-2xl">{title}</h2>
    </a>
  )
}

export default MainButton