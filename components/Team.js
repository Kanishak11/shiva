const members = [
    {
        "img": "team/004.jpg",
        "name": "Dr Mahesh Baweja",
        "job": "Director",
        "desc" : "Practicing ayurvedic medicine for more than 4 decade"
      },
      {
        "img": "team/003.jpg",
        "name": "Surender Baweja",
        "job": "CEO",
        "desc" : "Something Something"
      },
    {
      "img": "team/002.jpg",
      "name": "Gulshan Baweja",
      "job": "Sales Manager",
      "desc" : "Manages Sale at Store"
    },  
  ]
export const Team = () => {
    console.log(members)
    return (
        <div id="team" className="bg-gray-300">
        <p className="flex flex-row margin-auto text-center justify-center font-extrabold text-4xl">Our Team</p>
        <div className="w-full  flex flex-col lg:flex-row m-auto justify-center">
    {members.map((desc, i) => { 
        return (   
<div key={i} className="md:flex gap-8 ">
    <div className="md:w-100 text-center mb-8 md:mb-0 p-10">
        <img className="w-48 h-48 rounded-full mx-auto -mb-24" src={desc.img} alt="Avatar"/>
        <div className="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
            <h3 className="font-title text-gray-800 text-xl mb-3">
                {desc.name}
            </h3>
            <p className="font-body">
                {desc.job}
            </p>
            <p className="font-body text-gray-600 text-sm mt-4 mb-4 lg:w-60">
                {desc.desc}
            </p>
            <a className="font-body text-blue-500 hover:text-gray-800" href="#">
               
            </a>
        </div>
    </div>
</div>

        )
    })
}
    </div>
    </div>
    )
  }


  
