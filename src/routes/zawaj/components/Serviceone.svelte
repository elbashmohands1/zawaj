<script>
  let{title,description,image}=$props();
</script>


<div class="w-full flex flex-col items-center justify-center">
                    <div class="z-20 relative w-full flex items-center justify-center">
                      <div class="size-36  rounded-full aspect-square absolute overflow-clip">
                        <img src={image} alt="circlsshap" class="absolute" >
                      </div>
                            <img src="circlsshape.webp" alt="circlsshap" class="z-0"  >
                    </div>
                    <div class=" bg-[url(rectangleshape.webp)] p-12 bg-center bg-no-repeat bg-size-[450px_400px] lg:bg-contain w-full -mt-20">
                     <div class="py-6 w-full px-2">
                        <h4 class="text-gold font-bold text-2xl text-center mt-4">
                        {title}
                         </h4>
                        <img src="/divider.png" alt="divider" class=" bg-contain  bg-center bg-no-repeat w-sm ">
                        <p class="text-sm text-center px-7 md:px-0"> {description}    </p>
                     </div>
                    </div>
                </div>

