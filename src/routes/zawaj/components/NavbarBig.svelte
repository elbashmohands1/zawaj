<script>
	import Button from '$lib/components/ui/button/button.svelte';
	import Popnav from './Popnav.svelte';

  let props = $props()

</script>

<div  {...props}>
                <div class="flex gap-8 items-center justify-between  w-full ps-12">
                  <div>
                      
                    <ul class="flex gap-6   ">

                               <li><a href="/">السوق</a></li>
                                <Popnav title="طرق الدفع" subtitle="تسوق مع تابي"/> 
                                <Popnav title="للأعمال"  subtitle="عزز مبيعاتك مع تابي">
                                  <div class="flex gap-24">
                                    <a class="font-normal  flex gap-2 text-lg" href="/">الدفع عند الاستلام</a>
                                    <a class="font-normal  flex gap-2 text-lg" href="/">
                                      <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="muirtl-1qoq1b3" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg" style="transform: scale(-1, 1);"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                                      مركز المساعدة
                                    </a>
                                    
                                  </div>
                                  </Popnav> 
                                

                    </ul>
                     
                  </div>
                  <div class="flex items-center gap-8">
                        <div class="flex">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M16 21H8C6.895 21 6 20.105 6 19V5C6 3.895 6.895 3 8 3H16C17.105 3 18 3.895 18 5V19C18 20.105 17.105 21 16 21Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M11.999 17.25C11.861 17.25 11.749 17.362 11.75 17.5C11.75 17.638 11.862 17.75 12 17.75C12.138 17.75 12.25 17.638 12.25 17.5C12.25 17.362 12.138 17.25 11.999 17.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.75 6H13.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                            <a href="/">حمل التطبيق</a>
                        </div>
                         <div>
                          <Popnav title="تسجيل الدخول أو إنشاء الحساب" class="lg:min-w-md">
                           <div class="flex flex-col gap-4 items-start">
                            <h3 class="text-2xl ">العميل</h3>
                            <p class="font-normal">تابي متاح حصريا عبر التطبيق <br> تسوق وادفع وتابع صرفياتك من مكان واحد</p>
                            <Button  class="text-foreground rounded-full font-semibold text-lg py-2.5 px-7">حمل التطبيق  </Button>
                           </div>
                           <div class="h-0.5 bg-gray-300 w-full relative ">
                            <div class="absolute start-1/2 top-1/2 p-4 -mt-6 -mr-6 bg-background flex items-center justify-center ">أو</div>

                           </div>
                           <div class="flex flex-col gap-4 items-start">
                            <h3 class="text-2xl ">الأعمال</h3>
                            <Button  class="text-foreground rounded-full font-semibold text-lg py-2.5 px-7">تسجيل الدخول أعمال </Button>
                            <Button variant="outline"  class="text-foreground rounded-full font-semibold text-lg py-2.5 px-7">
                             إنشاء حساب أعمال

                            </Button>
                           </div>
                          
                          </Popnav>

                         </div>
                      <div class="flex items-center gap-8">
                           
                            <div class="rounded-full border border-gray-300 flex items-center  p-3 divide-x-[1px] divide-gray-300 ">
                                <div class="flex items-center gap-2 justify-center pe-4">
                                  <img class="rounded-full" src="data:image/png;base64,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" alt="ksa" width="40" height="40">
                                    <a href="/" class="text-lg">KSA</a>
                                </div>
                                <div>
                                    <a href="/" class="px-3 font-bold">English</a>
                                </div>
                            </div>
                      </div>
                  </div>
                </div>
            </div>

