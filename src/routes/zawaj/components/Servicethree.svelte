<script>
    let{title,description,icon}=$props();

</script>

<div class=" w-full flex flex-col items-center justify-center">
                    
<div class="relative w-full ">
  <img src="shape4.avif" alt="" class=" w-full "/>
  <div class="absolute top-0 start-14  ">
     <h4 class="text-gold font-bold text-3xl text-center  mt-16">{title}</h4>
     <p class="text-2xl font-bold text-gold text-center mt-4">{description}  </p>
  </div>
      <img src={icon} alt="divider" class=" absolute size-16  bottom-6 start-23 ">

</div>                  

                       

                </div>

