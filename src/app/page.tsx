import Header from "@/components/ui/Header";
import MyImage from "@/components/ui/MyImage";
import TextFront from "@/components/ui/TextFront";


export default function Home() {
  return (
    <main className="min-h-screen  sm:pt-5 bg-gradient-to-r  via-purple-900 from-violet-800 to-black">
     <Header />

     <div className="grid m-4 gap-4 sm:grid-cols-2 ">
        <div className="min-h-[100px] hover:sm:border border-purple-600 shadow  rounded-lg flex justify-center items-center flex-col text-white pb-2"> 
          <TextFront />
        </div>
        <div className="min-h-[100px] hover:sm:border border-purple-600 shadow rounded-lg">
          <MyImage />
        </div>
     </div>
     <div className="min-h-screen ">
       <div className="grid sm:grid-cols-2 m-4 gap-4 ">
          <div className="min-h-[100px] bg-pink-700 rounded-xl">

          </div>
          <div className="min-h-[100px] bg-green-700 rounded-xl" >

          </div>
       </div>
     </div>

    </main>
  );
}
