<script>
  import Slider from './Slider.svelte';


	
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';
	import Servicetwo from './zawaj/components/Servicetwo.svelte';
	import Serviceone from './zawaj/components/Serviceone.svelte';
	import Servicethree from './zawaj/components/Servicethree.svelte';
	import Keyword from './zawaj/Keyword.svelte';
	import DarkmodeButton from '$lib/components/DarkmodeButton.svelte';

	let keywords=[
		"استخراج تصريح زواج سعودي من أجنبية" ,
		"مكتب استخراج تصريح زواج" ,
		"معقب تصاريح الزواج" , 
		"استخراج تصريح زواج"
	]
</script>


<div class="mx-auto  lg:max-w-4xl text-white  bg-black overflow-hidden">
	<!-- Navbar -->
	<nav class="border-gold flex items-center justify-between border-b-4 md:p-4 px-2">
		<div class=" max-w-2xs ">
			<img src="/logo.png" alt="logo" />
		</div>
		<div class="md:flex items-center justify-end md:gap-12 hidden ">
			<a href="#" class="text-white hover:text-yellow-500">الرئيسية</a>
			<a href="#" class="text-gold hover:text-yellow-500">المدونة</a>
			<a href="#" class="text-gold hover:text-yellow-500">خدماتنا</a>
			<button
				class="flex  gap-2 items-center border-gold text-gold rounded-xl border px-2 py-1 hover:text-black hover:text-yellow-500"
				>العربية <img src="SA.png" alt="saudi flag"></button
			>
			<a href="#" class="text-gold hover:text-gold flex items-center gap-1">
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"
					><path d="M20 2H4a2 2 0 0 0-2 2v16l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" /></svg
				>
				تواصل معنا
			</a>
		</div>
    <div class="block md:hidden">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu-icon lucide-menu text-gold me-4"><path d="M4 12h16"/><path d="M4 18h16"/><path d="M4 6h16"/></svg>
    </div>
	</nav>

	<!-- Hero Section -->
	<div class="relative md:flex items-center justify-center text-center gap-8 p-8">
		<!-- Text -->
		<div class="p-6 pt-16">
			<h1 class="text-gold mb-4 text-3xl font-bold md:text-4xl">
				الفهد للخدمات <br> مكتب استخراج تصاريح زواج
			</h1>
			<p class="text-sm leading-loose">
				نفتخر بتقديم خدماتنا المميزة لأبناء الوطن والمقيمين الكرام، ونحرص على تسهيل وتذليل كافة
				الصعوبات الممكنة في سبيل إنهاء معاملاتهم بكل سهولة ويسر، بدءاً من استخراج تصاريح الزواج
				ووصولاً إلى مختلف الخدمات الأخرى. نؤمن بأن عملائنا الكرام الذين يتوجهون إلينا يعطوننا ثقتهم
				بكوننا من أفضل مكاتب خدمات التعقيب في المملكة العربية السعودية، وذلك بفضل خبرتنا الطويلة
				وكفاءة فريقنا المتميز. نسعى دائماً لتحقيق الأفضل لعملائنا في كل مكان ومنحهم ثقة بنا ونتطلع
				للمزيد من التميز والنجاح. اتصل بنا واحصل على الرد من أفضل مكتب استخراج تصاريح زواج أو أي
				معاملات أخرى.
			</p>

			<a
				href="https://wa.me/966565325058"
				target="_blank"
				class="bg-gold mt-6 inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-lg font-bold text-black hover:bg-yellow-300 mb-10"
			>
				+966565325058
				<svg class="size-10" fill="currentColor" viewBox="0 0 24 24"
					><path
						d="M16.72 13.06c-.29-.15-1.72-.85-1.98-.95-.26-.1-.45-.15-.64.15-.19.29-.74.95-.9 1.14-.17.19-.33.22-.61.07-.29-.15-1.22-.45-2.33-1.44-.86-.76-1.44-1.7-1.6-1.98-.17-.29-.02-.45.13-.6.13-.13.29-.33.45-.5.15-.17.2-.29.3-.48.1-.19.05-.36-.02-.5-.07-.15-.64-1.53-.88-2.1-.23-.57-.47-.49-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-1 2.43 0 1.43 1.03 2.82 1.18 3.02.15.19 2.03 3.1 4.92 4.35.69.3 1.23.48 1.65.61.69.22 1.32.19 1.82.12.56-.08 1.72-.7 1.96-1.37.24-.67.24-1.24.17-1.37-.07-.13-.26-.2-.55-.35z"
					/></svg
				>
			</a>
		</div>
		<!-- Image -->
		<div class="relative mb-48 flex min-w-[300px] justify-center">
			<img
				src="/shapecircle.png"
				alt="توقيع"
				class=" absolute z-10 aspect-square size-72 scale-150 object-cover"
			/>
			<img src="/hero.webp" alt="توقيع" class="absolute z-0 aspect-square size-72 object-cover" />
		</div>
		<!-- background -->
		<img src="/back1.png" alt="توقيع" class=" absolute inset-0 object-cover" />
		<img src="/back2.png" alt="توقيع" class=" absolute top-0 left-0 object-cover" />
	</div>

	<!-- Services Section -->
	<section class="mx-auto md:mt-16 mt-48 flex w-full flex-col items-center justify-center">
		<div class="flex flex-col items-center">
			<h3 class="text-gold text-5xl font-bold">خدماتنا</h3>
			<img src="/divider.png" alt="divider" class=" w-xl bg-contain bg-center bg-no-repeat" />
		</div>
		<div
			class="flex w-full flex-col items-center justify-center bg-[url(shapegoledn.webp)] bg-contain bg-center bg-no-repeat p-12"
		>
			<h3 class="text-gold text-3xl font-bold">استخراج تصاريح زواج</h3>
		</div>

		<div class="relative grid grid-cols-1  md:grid-cols-3">
			<Serviceone
             title="  استخراج تصريح زواج سعودي " 
             
             description="
نقدم خدمة استخراج تصريح الزواج بشكل كامل وبأعلى مستويات الخدمة والدقة لكل الراغبين في إتمام إجراءات حفل زفافهم  وذالك بفضل فريقنا الذي يضم  افضل محامين ومعاقبين خبيرين في مجال محامة استخراج تصاريح الزواج يمكنك الاعتماد على خدماتنا الاحترافية بثقة تامة
نعمل بجد لتسهيل جميع الاجراءات الضرورية وللقيام باجراءات استخراج التصاريح بسهولة وفعالية."
             
             image="0111.jpg"
/>
			<Serviceone 
             title=" استخراج تصريح زواج سعودي من أجنبية مقيمة
" 
             description="نحن نوفر خدمة استخراج تصريح زواج سعودي من أجنبية مقيمة بكل سهولة ويسر ؛ مهما كانت جنسية الشريكة الأجنبية التي ترغب في الزواج منها، فإن فريقنا من المحامين المختصين سيمكنك من الحصول على الأوراق اللازمة  بأعلى جودة وأفضل الأسعار.
"
             image="0112.jpg"

            />
			<Serviceone
              title=" استخراج تصريح زواج سعودي من أجنبية غير مقيمة
" 
             description="يمكنك الاستفادة من خدماتنا المتخصصة في استخراج تصريح الزواج السعودي من أجنبية غير مقيمة ؛ مهما كانت جنسيتها

نقدم خدمة شاملة بدءاً من تجميع الوثائق اللازمة وحتى الحصول على تصريح الزواج. اعتمد علينا لجعل عملية استخراج تصريح زواجك سريعة وسلسة من البداية حتى النهاية."
             image="0113.jpg"
            />
			<img
				src="background5.webp"
				alt="divider"
				class=" absolute inset-0 -z-10 w-full bg-contain bg-no-repeat"
			/>
		</div>
	</section>
	<div class="mx-auto flex w-full max-w-xl items-center justify-center">
		<img src="more.webp" alt="more" />
	</div>


  <section class="mx-auto md:mt-16 mt-48 flex w-full flex-col items-center justify-center">
		<div class="flex flex-col items-center">
			<h3 class="text-gold text-5xl font-bold">مميزاتنا</h3>
			<img src="/divider.png" alt="divider" class=" w-xl bg-contain bg-center bg-no-repeat" />
		</div>
		

		<div class="relative grid md:grid-cols-2 xl:grid-cols-3">
			<Servicetwo 
             title="1. ​السرعة" 
             description="نقدم خدماتنا بمنتهى السرعة لضمان حصولك على تصريح الزواج في أسرع وقت ممكن.

نتعامل مع جميع الإجراءات الرسمية نيابة عنك، مما يوفر عليك الوقت والجهد.

نحرص على متابعة طلبك بشكل مستمر حتى الحصول على تصريح الزواج"
             icon="icon4.webp" 
             />
			<Servicetwo 
             title="2. الخبرة والكفاءة" 
             description="نمتلك فريقًا من الخبراء المختصين وذو الكفاءة في مجال استخراج  كافة تصاريح الزواج.

ونحرص على مراجعة جميع الأوراق والتأكد من صحتها لضمان سير عملية الزواج بشكل قانوني"
             icon="icon5.webp" 
              />
			<Servicetwo 
             title="3. ​أسعار تنافسية " 
             description="نقدم خدماتنا بأسعار تنافسية تناسب جميع كل من يرغب باستخراج تصريح زواج او إنجاز المعاملات الأخرى.

كما نضمن لك الحصول على أفضل الخدمات بأقل تكلف"
             icon="icon7.webp" 
              />
			<Servicetwo 
             title="4. الثقة والمصداقية
" 
             description="نتمتع بسمعة طيبة في مجال استخراج تصاريح الزواج ونلتزم بالمصداقية والشفافية في جميع تعاملاتنا مع العملاء.

ونحرص على بناء علاقات طويلة الأمد مع عملائنا الكرام "
             icon="icon3.webp" 
              />
			<Servicetwo 
             title="5. خدمات شاملة" 
             description="​نقدم لكم جميع الخدمات اللازمة لاستخراج تصريح الزواج، وإنجاز كافة المعاملات الأخرى وخدمات التعقيب"
             icon="icon2.webp" 
              />
			<Servicetwo 
             title="6. رضا العملاء" 
             description="نحرص على تحقيق رضا العملاء من خلال تقديم خدمات مضمون وسريعة وعالية الجودة ومتواجدين

 على مدار الساعة لرد على طلباتكم واستفساراتكم"
             icon="icon1.webp" 
              />
	
		
      <img
      src="shape4.webp"
      alt="divider"
      class=" absolute inset-0 top-28 -z-10 w-full bg-contain bg-no-repeat"
    />
		
		</div>
	</section>

	<section class="py-20">
		<div class="flex flex-col items-center">
			<h3 class="text-gold text-5xl font-bold">أراء العملاء</h3>
			<img src="/divider.png" alt="divider" class=" w-xl bg-contain bg-center bg-no-repeat" />
		</div>
		<div>
			<Splide options={ { rewind: true , autoplay:true , direction:'rtl', speed:3000 } } aria-label="My Favorite Images">
 <Slider
 image=" man1.jpg "
 title="سعود العتيبي"
 description="أنا تعاملت مع مكتب السهم الذهبي لنقل المهنة، وبالصراحة ما قصروا ، أبو خالد معقب خبير وما يقصر في تنفيذ الخدمة - وأكيد بتكون تجربتك معه سهلة وممتازة "
 />
 <Slider
 image=" man2.jpg "
 title=" عبدالرحمن الدوسري"
 description="​انصح كل من يريد تصريح زواج من اجنبية مقيمه أو بالخارج لا يبحث عن  مكتب اخر غيرمكتب السهم الذهبي ( ابو خالد ) انا تعاملت مع ابو خالد يعلم الله لا يوجد معقب مثيل له بالانجاز والوفاء  اسال الله له دوام الصحه والعافيه"
 />
 <Slider
 image=" man3.jpg "
 title="عبدالله المطيري"
 description="​صراحة معقبنا أبو خالد كفو وتعامله راقي جداً , أنا بصراحة انبسطت وأنا تعاملت معاه ، يستاهل منا كل الخير وأكيد راح يكون هو أول معقب بشوفه لأنه خبير بشغله وينجز الخدمة بوقت قصير 
"
 />
 
</Splide>
		</div>
	</section>

	<div class="h-20"></div>
  <section class="mx-auto md:mt-16 mt-48 flex w-full flex-col items-center justify-center">
	
		

		<div class="relative grid  md:grid-cols-3">
			<Servicethree
			title="عدد العملاء "
			description="+26500"
			icon="icon9.png"

			/>
			<Servicethree
			title="سنوات الخبرة "
			description="+10 "
						icon="icon10.png"

			/>
			<Servicethree
			title="معاملات "
			description="+47682"
						icon="icon11.png"

			/>
			

		</div>
	</section>
	<div class="h-20"></div>

	<section class="py-20 px-4">
	<div class="text-center flex flex-col gap-6 items-center justify-center">
		<h2 class="text-gold text-4xl font-black ">ما هو تصريح الزواج</h2>
		<p class="text-xl  mb-12 md:max-w-2xl">
			تصريح الزواج هو وثيقة رسمية تصدرها السلطات المختصة في الدولة، وتحتوي على معلومات حول الأزواج المراد تسجيل زواجهما، مثل الأسماء والهويات والعناوين والشهادات الصادرة عن الجهات المختصة.

يتم تقديم تصريح الزواج كجزء من إجراءات تسجيل الزواج وتثبيته رسمياً.
		</p>
	</div>
	<div class="text-center flex flex-col gap-8 items-center justify-center">
			<h2 class="text-gold text-4xl font-black ">
			أهمية استخراج تصريح زواج
			</h2>
		<p class="text-xl  mb-12 md:max-w-2xl">
		 أهمية الحصول على شهادة الزواج في المملكة العربية السعودية. تعتبر شهادة الزواج بمثابة وثيقة قانونية ورسمية تثبت زواج رجل وامرأة حسب نظام الأحوال في المملكة العربية السعودية. كما أنه يحمي حقوق الأزواج والأبناء، ويتيح لهم الاستفادة من مختلف الخدمات والحقوق التي تقدمها الدولة للمتزوجين. يساعد الحصول على شهادة الزواج على تنظيم عملية الزواج والتأكد من شرعيته ومنع الزواج غير الشرعي وحماية حقوق كلا الزوجين في حالة الطلاق.


		</p>
		<h5 class="text-gold font-bold">تابعنا على </h5>
		<img src="socialicons.png" alt="social" class="max-w-32">
	</div>


		<div class="flex flex-col items-center justify-center mt-32">
			<h5 class="text-gold font-bold text-2xl">من نحن   </h5>
		                        <img src="/divider.png" alt="divider" class=" bg-contain  bg-center bg-no-repeat w-sm ">

		<p class="text-md max-w-lg">
			نحن فريق خبراء متكامل نهدف إلى تسهيل جميع المعاملات بكفاءة وسرعة، وبدقة واحترافية عالية لضمان معالجة كافة الإجراءات، مما يساعدك على تجنب التعقيدات وفقدان الوقت. 
			اعتمد على خبرتنا واتصل بنا اليوم لتجربة تعامل مميزة وموثوقة، حيث نسعى لتلبية احتياجاتك بأفضل الطرق وتحقيق أقصى رضا.



		</p>
                        <img src="/callus.avif" alt="divider" class=" max-w-sm mb-8">

						<div class="grid md:grid-cols-2 gap-8">
					  {#each keywords as keyword}
						<Keyword 
						text={keyword}
						/>
					  {/each}
						</div>

		</div>
	</section>

	

</div>


