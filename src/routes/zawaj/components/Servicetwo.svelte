<script>
    let{title,description,icon}=$props();

</script>

<div class=" flex flex-col items-center justify-center relative mb-32 ">
                    
                    
                   <div class="flex flex-col relative z-10 items-center justify-center px-24">
                     <img src={icon} alt="icon" class="size-16 mt-18 ">
                         <h4 class="text-gold font-bold text-2xl text-center mt-12">{title}</h4>
                        <img src="/divider.png" alt="divider" class=" bg-contain  bg-center bg-no-repeat w-sm ">
                        <p class="text-sm text-center ">{description}</p>
                    </div>
                                         <img src="backrectangle2.webp" alt="backrectangle2" class="absolute inset-0 z-0 w-full  ">

                 
                </div>

