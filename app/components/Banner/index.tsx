import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl my-10 sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-black'>Donna McGrath</button>
                    </div>
                    <div className="py-3 text-center lg:text-start flex flex-col gap-8">
                        <h1 className='text-6xl lg:text-48xl font-bold text-white'>
                            Donna McGrath
                        </h1>
                        <h3 className='text-xl lg:text-2xl font-bold text-white'>
                            ENERGY MASTER & MEDICAL MEDIUM
                        </h3>
                        <h5 className='text-xl lg:text-xl font-bold text-white'>NIH SCIENTIST, AUTHOR, SPEAKER & TEACHER</h5>
                    </div>
                    {/* <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 rounded-full hover:bg-hoblue'>
                            Get Started
                        </button>
                    </div> */}
                </div>

                {/* COLUMN-2 */}

                <div className='lg:-m-24 lg:pt-20 hidden lg:block rounded-full'>
                    <Image  className="rounded-xl" src="/images/banner/banner2.jpg" alt="hero-image" width={800} height={642} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
