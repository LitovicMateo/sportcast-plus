import Image from "next/image";


export default function CategoryLoading() {
    // Or a custom loading skeleton component
    return <div className="w-full h-svh flex justify-center items-center">
       <Image src={"/logo.png"} height={50} width={50} alt="logo" className="aspect-square max-w-[50px]" />
    </div>
  }