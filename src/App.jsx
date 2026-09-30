export default function App() {

  function login () {
    alert("Login Executado!")

  }



  return (
    <div className="w-full h-screen bg-[url('../public/netflix-bg.jpg')]">
      <div className="w-full h-full bg-black/50 flex items-center justify-center relative">
        <img src="/netflix-logo.svg" className="absolute top-10 left-[200px]"  width="200px" alt="" />
        <div className="w-[500px] h-auto min-h-[400px] bg-black/70 py-[30px] px-[60px]">
          <h1 className="font-bold text-[30px]">Sign in</h1>
          <form
            className="pt-5 flex flex-col gap-[20px] mt-[15px]"
            onSubmit={login}
          >

            <input
              type="email"
              placeholder="Email adress"
              className="w-full h-[50px] bg-[#2727276a] border border-gray-400 pl-4 rounded-sm"
            />
            <input  
              type="password"
              placeholder="Password"
              className="w-full h-[50px] bg-[#2727276a] border border-gray-400 pl-4 rounded-sm"
            />

            <button type="submit" className="w-full h-[50px] bg-[#e50816] rounded-sm border-none text-white font-bold text-[16px] cursor-pointer mt-[35px]">
              Sign in
            </button>


          </form>

        </div>
      </div>

    </div>  
  )
}