const Login = () => {
  return (
    <div className='px-10 flex flex-col items-center mr-auto'>
      {/* <FirebaseAuth /> */}
      <button
        className="bg-[#DB4437] text-white hover:bg-slate-50 w-[250px] my-2 mx-1 py-3 rounded-full flex align-center justify-center last:mr-0 transition hover:-translate-y-1 hover:scale-100 hover:text-black">
        Continue with Google
      </button>

      <button className="bg-black text-white hover:bg-slate-50 w-[250px] my-2 mx-1 py-3 rounded-full flex align-center justify-center last:mr-0 transition hover:-translate-y-1 hover:scale-100 hover:text-black">
        Continue with Github
      </button>

      <button className="bg-black text-white hover:bg-slate-50 w-[250px] my-2 mx-1 py-3 rounded-full flex align-center justify-center last:mr-0 transition hover:-translate-y-1 hover:scale-100 hover:text-black">
        Continue with Apple
      </button>
    </div>
  );
}
 
export default Login;
