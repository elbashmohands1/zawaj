<script lang="ts">


	import { BigBanner, Details, DownloadappFixed, Features, Footer, HeroSection, Logo, Navbar } from './components';
	import { fade } from 'svelte/transition';
	import { onMount } from 'svelte';
	import { showAfterScroll, initScrollDetection } from './stores/scrollStore';
	import { initResponsiveDetection, isMobile } from './stores/responsiveStore';

	onMount(() => {
		// Initialize scroll detection with 30% threshold
		const ScrollDetection = initScrollDetection();
		return ScrollDetection; // This will clean up the event listener
	});
	onMount(() => {
		// Initialize scroll detection with 30% threshold
		const deviceDetection = initResponsiveDetection();
		return deviceDetection; // This will clean up the event listener
	});
	$inspect(isMobile);
</script>

<div class="min-h-screen bg-background">
	<Navbar />
	<HeroSection />
	<Features />
	<Details
		image="https://scdn.tabby.ai/images/cbjxg0yl/v2/2fef2de5dfde5bb51fe258e2a363661e3035377d-1144x1020.jpg?w=572&h=510&fm=webp&fit=crop&dpr=2"
		title="رمز الريال السعودي"
		description="رمز يجسّد أصالتنا واقتصادنا ومستقبلنا. "
	/>
	<Details
		image="https://scdn.tabby.ai/images/cbjxg0yl/v2/533acc54553e5deefdce224ec0ed16bd78744be4-1144x1020.png?w=572&h=510&fm=webp&fit=crop&dpr=2"
		title="رمز الريال السعودي"
		description="رمز يجسّد أصالتنا واقتصادنا ومستقبلنا. "
		isReverse
	/>

	<Details
		image="https://scdn.tabby.ai/images/cbjxg0yl/v2/1c2be0bc9e2dd0e1b4835dea7e5fd575725f6b2a-1144x1020.png?w=572&h=510&fm=webp&fit=crop&dpr=2"
		subtitle="أمان التسوق"
		title=" اضمن أمان مشترياتك "
		description="حماية تابي تسمح لك التسوق بكل ثقة. في حال حصول أي خطأ في مشترياتك، ولم يتمكن المتجر من مساعدتك، "
		buttonText="تعرف أكثر"
		buttonLink="/"
	/>
	<Details
		image="https://scdn.tabby.ai/images/cbjxg0yl/v2/b695e06db4f97259a91db8cabcc29876831d8843-1145x1020.jpg?rect=1,0,1144,1020&w=572&h=510&fm=webp&fit=crop&dpr=2"
		subtitle="تابي للتسوق"
		title=" تسوّق بطريقة تسهل حياتك"
		description="تابي هو مساعد التسوّق الأفضل اللي يتيح لك اكتشاف وتتبع أفضل المنتجات والبراندات والعروض، كلّه في تطبيق واحد. "
		buttonText="اعرف  أكثر"
		buttonLink="/"
		isReverse
	/>

 <BigBanner/>


 <Details
 image="https://scdn.tabby.ai/images/cbjxg0yl/v2/d0ccfce0c82383022fc73c01d9ed16eda6a10391-1145x1020.png?rect=1,0,1144,1020&w=572&h=510&fm=webp&fit=crop&dpr=2"
 title=" ضبّط نشاطك التجاري"
 description="تزيل تابي حواجز السعر عبر زيادة القوة الشرائية لعملاء متجرك، وتعزز أرباحك عبر رفع معدلات إتمام الشراء ومتوسط حجم السلة الشرائية."
  buttonText="تابي للأعمال "
 buttonLink="/"
/>


<Footer/>














	{#if $isMobile}
		{#if $showAfterScroll}
			<div transition:fade={{ duration: 300 }}>
				<DownloadappFixed />
			</div>
		{/if}
	{/if}
</div>
