<script lang="ts">
	import { Feature } from ".";

  

const features =[
    {
        icon:"icon1" , 
        title:'قسّمها على 4 دفعات بدون فوائد ',
        description:'اختار تابي كوسيلة دفع عند إتمام الشراء، وقسّم قيمة مشترياتك على 4 دفعات شهرية بدون فوائد.'
    } , 
    {
        icon:"icon1" , 
        title:'بدون فوائد ولا رسوم',
        description:'تابي مبنية على الثقة، وليس على الفوائد، لن تدفع أي رسوم إضافية، ومن ضمنها رسوم التأخير.'
    } , 
    {
        icon:"icon1" , 
        title:'أفضل العروض ',
        description:'احصل على عروض وأكواد خصم حصرية في التطبيق واحفظ منتجاتك المفضلة عشان تجيك تنبيهات انخفاض الأسعار.'
    } , 

]
</script>

<div class="mx-auto lg:max-w-6xl max-w-md py-24 px-8 ">
        <h2 class="lg:text-5xl text-3xl mb-10 font-bold">بُعد جديد لعالم التسوّق</h2>
        <div class="grid lg:grid-cols-3 gap-12">
            {#each features as feature (feature)}
            <Feature
             icon={feature.icon}
             title={feature.title}
             description={feature.description}
            />
                
            {/each}
          
            
        </div>

    </div>

