<script>
    let{title,description,icon}=$props();

</script>

<div class="w-full flex flex-col items-center justify-center">
                    
                    <div class="relative bg-[url(backrectangle2.webp)] md:p-16 bg-center bg-no-repeat md:bg-size-[360px_480px] bg-size-[500px_450px] w-full px-16 min-h-96">
                    
                      <div class="absolute size-16 inset-x-[43%] top-4 md:top-14 md:inset-x-[40%]  "
                      >
                    <img src={icon} alt="icon">
                    </div>
                      <div class="py-6 w-full px-2">
                        <h4 class="text-gold font-bold text-2xl text-center md:mt-16 mt-24">{title}</h4>
                        <img src="/divider.png" alt="divider" class=" bg-contain  bg-center bg-no-repeat w-sm ">
                        <p class="text-sm text-center">{description}</p>
                     </div>
                    </div>
                </div>

