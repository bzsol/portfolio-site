const Hero = () => {
    return (
        <section class="relative">
        <div class="container flex flex-col-reverse lg:flex-row items-center gap-12 mt-14 lg:mt-28">
            <div class="flex flex-1 flex-col items-center lg:items-left mb-6">
                <h2 class="text-sky-500 text-3xl md:text-4 lg:text-5xl text-center lg:text-left mb-10">
                    About me
                </h2>
                <p class="text-slate-800 dark:text-slate-100">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Magni, provident quis laudantium ducimus blanditiis quo similique. Perferendis fugiat, optio, rerum
                    eius, ipsam molestias molestiae laborum praesentium cumque distinctio autem illo?</p>
            </div>
            <div class="flex justify-center flex-wrap gap-6"></div>
            <div class="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0 z-10">
                <img src="" class="rounded-2xl w-5/6 h-5/6 sm:w-3/4 sm:h-3/4 md:w-full md:h-full" alt="Yes, that's me" />
            </div>
        </div>
    </section>
    );
}

export default Hero;