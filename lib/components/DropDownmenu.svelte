<script lang="ts">
   interface Iprops
    { title: string; 
      url: string;
       items: ({ title: string; url: string; isActive?: undefined; } | { title: string; url: string; isActive: boolean; })[]
    }
  	let { title ,url , items} = $props();

let open = $state(false)
let active = $state(false)
function toggleDropdown() {
  open = !open;
}
</script>

<ul class="space-y-2 ">
            <li >
             <div class="flex items-center"> <div>❤️</div> <a onclick={toggleDropdown}  href={url} class=" hover:bg-gray-300/15 px-3 py-2 rounded-lg font-bold  ">{title}</a></div> 
            {#if open}
            <ul class="ms-8">
              {#each items as item, i}
              <li><a href={item.url}  >{item.title}</a></li>
              {/each}
              </ul>
            {/if}
            </li>
          </ul>

