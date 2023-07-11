
const Cat = () => {


  let url = 'https://cataas.com/cat'


const handleChange = () =>{
  location.reload()
}


  return (





    <div className="flex flex-col justify-center items-center">
      <div className="text-3xl sm:text-6xl font-semibold mb-10">Show me a Cat</div>
      <img src={url}  className="h-96 rounded-lg"/>
      <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white mt-5 py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={()=>{handleChange()}}>
        Change cat
      </button>
    </div>
  )
}

export default Cat