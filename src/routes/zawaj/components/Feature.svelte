<script lang="ts">
  interface Iprops{
    icon:string;
    title:string;
    description:string;
  }
let{icon,title,description}:Iprops = $props();
    

</script>

<div class="flex flex-col items-start">
                    <div class="lg:size-12 size-10 mb-8">
                    <svg  stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" xmlns="http://www.w3.org/2000/svg" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                    </div>    
                 <h3 class="text-2xl font-bold mb-4"> {title} </h3>
                <p class="text-muted-foreground"> {description}  </p>          

            </div>

