<script lang="ts">
  import * as Tooltip from "$lib/components/ui/tooltip/index.js";
	import { cn } from "$lib/utils";
  let {title , subtitle , class:className}:{title:string , subtitle?:string , class?:string}=$props()
  
</script>

                        <Tooltip.Provider >
                          <Tooltip.Root >
                            <Tooltip.Trigger 
                              >                     
                              <div><a href="/">
                              {title}
                              </a>
                            </div>
                              </Tooltip.Trigger
                            >
                            <Tooltip.Content class={cn( "bg-background mt-4 shadow-2xl rounded-2xl p-10 border-gray-200",className)} dir="rtl">
                             <div class="   flex flex-col gap-12 items-start ">
                             {#if subtitle}
                              <p class="text-2xl font-bold">{subtitle}</p>
                              {/if}
                              <slot/>
                             </div>
                            </Tooltip.Content>
                          </Tooltip.Root>
                        </Tooltip.Provider>
