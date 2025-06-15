<script>
  import Keyword from './Keyword.svelte';

	import Serviceone from './components/Serviceone.svelte';
	import Servicetwo from './components/Servicetwo.svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import '@splidejs/splide/dist/css/themes/splide-default.min.css';
	import Servicethree from './components/Servicethree.svelte';

	let keywords=[
		"استخراج تصريح زواج سعودي من أجنبية" ,
		"مكتب استخراج تصريح زواج" ,
		"معقب تصاريح الزواج" , 
		"استخراج تصريح زواج"
	]
</script>


<div class="mx-auto  lg:max-w-4xl text-white">
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
				class="border-gold text-gold rounded border px-2 py-1 hover:text-black hover:text-yellow-500"
				>العربية</button
			>
			<a href="#" class="text-gold hover:text-gold flex items-center gap-1">
				<svg class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"
					><path d="M20 2H4a2 2 0 0 0-2 2v16l4-4h14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" /></svg
				>
				تواصل معنا
			</a>
		</div>
    <div class="block md:hidden">
      nav
    </div>
	</nav>

	<!-- Hero Section -->
	<div class="relative md:flex items-center justify-center text-center gap-8 p-8">
		<!-- Text -->
		<div class="p-6 pt-16">
			<h1 class="text-gold mb-4 text-3xl font-bold md:text-4xl">
				الفهد للخدمات – مكتب استخراج تصاريح زواج
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
				href="https://wa.me/966547480287"
				target="_blank"
				class="bg-gold mt-6 inline-flex items-center gap-2 rounded-2xl px-6 py-3 text-lg font-bold text-black hover:bg-yellow-300 mb-10"
			>
				+966 547 480 287
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

		<div class="relative grid md:grid-cols-2 lg:grid-cols-3">
			<Serviceone />
			<Serviceone />
			<Serviceone />
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
			<Servicetwo />
			<Servicetwo />
			<Servicetwo />
			<Servicetwo />
			<Servicetwo />
			<Servicetwo />
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
  <SplideSlide>
    	<div class="relative flex flex-col justify-center items-center ">
						<img src=" man1.jpg " alt="" class="absolute md:size-28 size-20 rounded-full bg-cover top-4">
						<img src="ray.avif " alt="" class="">
						<div class="absolute flex flex-col items-center md:max-w-md max-w-xs md:top-38 top-29 text-center">
							<h3 class="md:text-3xl text-2xl font-black text-gold md:mb-8 mb-4">سعد الرفاعي</h3>
							<p class="text-sm md:text-[1.1rem]">​صراحة معقبنا أبو خالد كفو وتعامله راقي جداً , أنا بصراحة انبسطت وأنا تعاملت معاه ، يستاهل منا كل الخير وأكيد راح يكون هو أول معقب بشوفه لأنه خبير بشغله وينجز الخدمة بوقت قصير </p>
						</div>
					</div>
  </SplideSlide>
  <SplideSlide>
    	<div class="relative flex flex-col justify-center items-center ">
						<img src=" man2.jpg " alt="" class="absolute md:size-28 size-20 rounded-full bg-cover top-4">
						<img src="ray.avif " alt="" class="">
						<div class="absolute flex flex-col items-center md:max-w-md max-w-xs md:top-38 top-29 text-center">
							<h3 class="md:text-3xl text-2xl font-black text-gold md:mb-8 mb-4">خالد الجهني</h3>
							<p class="text-sm md:text-[1.1rem]">
​صراحه تجربتي  تجربة ناجحة كنت ابحث عن معقب استخراج تصريح زواج وصدفه بحثت على جوجل وحصلت على رقم ابو خالد مكتب السهم واتفقت معه وانا في مكاني بدون حضور حصلت على تصريح زواج والحمد لله خلصت كل الاجرائات   

							</p>
						</div>
					</div>
  </SplideSlide>
  <SplideSlide>
    	<div class="relative flex flex-col justify-center items-center ">
						<img src=" man3.jpg " alt="" class="absolute md:size-28 size-20 rounded-full bg-cover top-4">
						<img src="ray.avif " alt="" class="">
						<div class="absolute flex flex-col items-center md:max-w-md max-w-xs md:top-38 top-29 text-center">
							<h3 class="md:text-3xl text-2xl font-black text-gold md:mb-8 mb-4">محمد القرني</h3>
							<p class="text-sm md:text-[1.1rem]">
​انصح كل من يريد تصريح زواج من اجنبية مقيمه أو بالخارج لا يبحث عن  مكتب اخر غيرمكتب السهم الذهبي ( ابو خالد ) انا تعاملت مع ابو خالد يعلم الله لا يوجد معقب مثيل له بالانجاز والوفاء  اسال الله له دوام الصحه والعافيه
							</p>
						</div>
					</div>
  </SplideSlide>
</Splide>
		</div>
	</section>

	<div class="h-20"></div>
  <section class="mx-auto md:mt-16 mt-48 flex w-full flex-col items-center justify-center">
	
		

		<div class="relative grid  md:grid-cols-3">
			<Servicethree
			title="عدد العملاء "
			description="+26500"
			icon="icon1.webp"
			/>
			<Servicethree
			title="سنوات الخبرة "
			description="+10 "
			/>
			<Servicethree
			title="معاملات "
			description="+47682"
			/>
		

		</div>
	</section>
	<div class="h-20"></div>

	<section class="py-20">
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


