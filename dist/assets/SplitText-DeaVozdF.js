var Dl=Object.defineProperty;var Al=(s,t,i)=>t in s?Dl(s,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[t]=i;var A=(s,t,i)=>Al(s,typeof t!="symbol"?t+"":t,i);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&e(o)}).observe(document,{childList:!0,subtree:!0});function i(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(r){if(r.ep)return;r.ep=!0;const n=i(r);fetch(r.href,n)}})();const Ec=[{id:1,name:"Bún ốc nguội",html:`
            <div class="main-content">
                <div class="title">
                    <h1 class="white-text">Bún ốc nguội</h1>
                    <h5 class="white-text">Chilled Snail Vermicelli</h5>
                </div>
                <img class="box" src="bun_oc_nguoi/bun-oc-nguoi-1.png" alt="">
                <div class="box primary"></div>
                <video autoplay loop muted src="bun_oc_nguoi/bunocnguoi (1).mp4"></video>
                <div class="box tertiary">
                    <h6>
                        Walking through the winding streets of Hanoi on a hot summer day, there is one dish that feels like a gentle breeze - <span>bún ốc nguội</span> . 
                    </h6>
                </div>
                <div class="two-box-horizontal tertiary">
                    <h6>Unlike the steaming bowls of noodle soup we often associate with Vietnam, this dish is served cold, a clever creation of <span>Hanoian</span> vendors who knew exactly how to bring comfort in the heat. Over generations, it has become more than street food; it is a taste of the city’s character, quiet yet full of depth.</h6>
                </div>
                <div class="box primary"></div>
                <div class="box primary"></div>
                <div class="box black"></div>
                <img src="bun_oc_nguoi/image16.png" alt="">
                <div class="combination">
                    <img class="one" src="bun_oc_nguoi/bunoc2.png" alt="">
                    <img class="two" src="bun_oc_nguoi/image14.png" alt="">
                    <img class="three" src="bun_oc_nguoi/grid-2.png" alt="">
                    <div class="four two-box-vertical tertiary">
                        <h6>At first glance, it seems simple: rice vermicelli, snails, and broth. But the magic lies in the details. Snails are freshly boiled to keep their chewy sweetness, while the broth - simmered with bones, crab shells, tomatoes, vinegar, and fermented rice water - is cooled before serving. A sprinkle of perilla, coriander, and scallions adds a fresh finish.</h6>
                    </div>
                </div>
                <div class="box tertiary">
                    <p>The broth surprises with its tangy, savory coolness. Soft noodles, chewy snail meat, and crisp herbs weave together in every bite, telling a story of Hanoi - resourceful, balanced, and quietly elegant. To taste bún ốc nguội is to experience a tradition kept alive for centuries.</p>
                </div>
                <img class="box" src="bun_oc_nguoi/bun-nguoi-2.png" alt="">
                <img class="box" src="bun_oc_nguoi/image15.png" alt="">
                <img src="bun_oc_nguoi/no-background.png" alt="" class="no-background">
            </div>
        `,css:`
            .title {
                position: relative;
                width: 672px;
                height: 320px;
            }
            .title h1 {
                position: absolute;
                top: 60px;
                left: 0;
                font: var(--h1-d-serif);
            }
            .title h5 {
                position: absolute;
                top: 202px;
                right: 11px;
            }

            video {
                width: 320px;
                height: 320px;
                object-fit: cover;
            }

            .combination {
                display: grid;
                grid-template-areas: 
                "one two four"
                "three three four";
                gap: 32px;
            }

            .combination .one {
                grid-area: one;
                width: 320px;
                height: 320px;
                object-fit: cover;
                object-position: -20px;
            }
            .combination .two {
                grid-area: two;
                width: 320px;
                height: 320px;
            }
            .combination .three {
                grid-area: three;
                width: 672px;
                height: 320px;
            }
            .combination .four {
                grid-area: four;
            }

            .four h6 {
                margin-top: 96px;
            }

            .no-background {
                position: absolute;
                top: 704px;
                right: 0;
                width: 672px;
                height: 848px;
            }
        `,background:"var(--secondary)"},{id:2,name:"Phở cuốn",html:`
            <div class="main-content">
                <video autoplay muted loop src="pho_cuon/phocuon1 (1).mp4" class="box"></video>
                <div class="two-box-horizontal tertiary">
                    <p>On a hot summer day around 2000, a small <span>phở</span> shop faced a common scene: diners enjoying steaming noodles while struggling with the heat. <span>Phở</span> was delicious, yet hardly comfortable in such weather.
                    <br>
                    <br>
                    With only rice sheets and beef left, the cook tried something new - wrapping beef and herbs inside soft sheets for a cooler bite, served with a sweet-and-sour dipping sauce. To everyone’s surprise, the fresh rolls delighted diners and soon gained their own name: <span>phở cuốn</span>.</p>
                </div>

                <div class="combination">
                    <div class="title box one">
                        <h1 class="h1-one">Phở</h1>
                        <h1 class="h1-two">cuốn</h1>
                        <h5>Rolling Pho</h5>
                    </div>
                    <div class="two-box-vertical accent two"></div>
                    <div class="two-box-vertical secondary three"></div>
                    <div class="two-box-vertical secondary four">
                        <h6 class="white-text"><span>Phở cuốn</span> keeps the essence of <span>phở</span> but in a refreshing form. The rice sheets, smooth and slightly chewy, come from the same batter as <span>phở</span> noodles but remain uncut. Inside, beef stir-fried with garlic pairs with herbs like lettuce, cilantro, and basil. A dipping sauce of fish sauce, lime, garlic, chili, and sugar completes the harmony. Simple in appearance, its flavors require the careful touch of a <span>Hànộian</span> cook.</h6>
                    </div>
                    <img src="pho_cuon/pattern1.png" alt="" class="box five">
                    <div class="box secondary six"></div>
                </div>
                

                <div class="box tertiary">
                    <h6>Eating <span>phở cuốn</span> feels light and playful. You dip a roll into the sauce and take a bite: the cool rice sheet, warm beef, crisp herbs, and tangy sweetness all blend together.</h6>
                </div>
                <img src="pho_cuon/image1.png" alt="" class="two-box-horizontal">
                <video autoplay muted loop src="pho_cuon/phocuon2 (1).mp4" class="two-box-horizontal"></video>
                <div class="box secondary">
                    <h6 class="white-text">Less heavy than a steaming bowl, it is perfect for a leisurely evening meal with friends. Each bite carries Hanoi’s spirit - practical, inventive, and irresistibly delicious.</h6>
                </div>
                <img src="pho_cuon/pattern2.png" alt="" class="box">
                <div class="two-box-horizontal secondary">
                    <img class="no-bg-3" src="pho_cuon/no-bg-3.png" alt="">
                </div>

                <img class="no-bg-1" src="pho_cuon/no-bg-1.png" alt="">
                <img class="no-bg-2" src="pho_cuon/no-bg-2.png" alt="">
            </div>
        `,css:`
            .title {
                position: relative;
            }
            .title .h1-one {
                position: absolute;
                top: 27px;
                left: 0;
                font: var(--h1-d-serif);
                margin: 0;
            }
            .title .h1-two {
                position: absolute;
                top: 140px;
                left: 0;
                font: var(--h1-d-serif);
                margin: 0
            }
            .title h5 {
                position: absolute;
                transform: rotate(270deg);
                top: 180px;
                right: -40px;
                margin: 0;
            }

            .combination {
                display: grid;
                grid-template-areas: 
                "one two three"
                "four two three"
                "four five six";
                gap: 32px;
            }

            .combination .one {
                grid-area: one;
            }
            .combination .two {
                grid-area: two;
            }
            .combination .three {
                grid-area: three;
            }
            .combination .four {
                grid-area: four;
            }
            .combination .five {
                grid-area: five;
            }
            .combination .six {
                grid-area: six;
            }

            .no-bg-1 {
                position: absolute;
                top: 352px;
                left: 352px;
            }
            .no-bg-2 {
                position: absolute;
                top: 352px;
                right: 0;
            }
        `,background:"var(--primary)"},{id:3,name:"Tào phớ thạch găng",html:`
            <div class="main-content">
                <img class="two-box-horizontal" src="tao_pho_thach_gang/image1.png" alt="">
                <img src="tao_pho_thach_gang/image2.png" alt="" class="box">
                <div class="box gray">
                    <p>There are flavors in Hànội that go beyond food, becoming memories. Among them is <span>tào phớ thạch găng</span>, a dessert locals recall with a smile. Once carried through small alleys by street vendors, its gentle call signaled a pause from the heat - a brief moment of sweetness and calm.</p>
                </div>
                <div class="title two-box-horizontal">
                    <h1 class="h1-one">Tào phớ</h1>
                    <h1 class="h1-two">thạch găng</h1>
                    <h5>Tofu Pudding Jelly</h5>
                </div>
                <div class="combination">
                    <div class="one box gray"></div>
                    <div class="two box light-gray"></div>
                    <div class="three box tertiary"></div>
                    <img class="four" src="tao_pho_thach_gang/pattern1.png" alt="">
                    <div class="five two-box-vertical tertiary">
                        <h6>Its charm lies in natural, delicate ingredients. Silken tofu, smooth and tender, forms the base, while <span>thạch găng</span> - a jelly from wild leaves - adds a refreshing, slightly bitter note. Sweet syrup, often scented with jasmine or pandan leaves, and crushed ice complete the harmony.</h6>
                    </div>
                </div>
                <img src="tao_pho_thach_gang/image3.png" alt="" class="box">
                <div class="box light-gray">
                    <h6>Eating <span>tào phớ thạch găng</span> is like tasting a breeze. The tofu melts instantly on the tongue, the jelly slides down cool and silky, and the syrup lingers with floral sweetness.</h6>
                </div>
                <img src="tao_pho_thach_gang/pattern2.png" alt="" class="box">
                <div class="two-box-vertical tertiary">
                    <h6>Every spoonful feels both refreshing and nostalgic, reminding many Hanoians of childhood afternoons when this dessert was the simplest joy. It is not just a bowl of tofu and jelly—it is the taste of Hanoi’s summer, timeless and unforgettable.</h6>
                    <img src="tao_pho_thach_gang/no-background2.png" alt="" class="no-bg-2">
                </div>
                <img src="tao_pho_thach_gang/image4.png" alt="" class="big-pic">
                <img src="tao_pho_thach_gang/no-background.png" alt="" class="no-bg-1">
                
            </div>
        `,css:`
            .title {
                position: relative;
            }
            .title .h1-one {
                position: absolute;
                top: 0;
                left: 0;
                font: var(--h1-d-serif);
                margin: 0;
            }
            .title .h1-two {
                position: absolute;
                top: 127px;
                right: 0;
                font: var(--h1-d-serif);
                margin: 0
            }
            .title h5 {
                position: absolute;
                bottom: 8px;
                left: 0;
                margin: 0;
            }

            .combination {
                display: grid;
                grid-template-areas: 
                "one two five"
                "three four five";
                gap: 32px;
            }

            .combination .one {
                grid-area: one;
            }
            .combination .two {
                grid-area: two;
            }
            .combination .three {
                grid-area: three;
            }
            .combination .four {
                grid-area: four;
            }
            .combination .five {
                grid-area: five;
            }

            .no-bg-1 {
                position: absolute;
                top: 704px;
                left: -42px;
            }

            .no-bg-2 {
                position: absolute;
                bottom: 0;
                right: 0;
            }
        `,background:"var(--white)"},{id:4,name:"Bánh tôm hồ Tây",html:`
            <div class="main-content">
                <div class="title three-box-horizontal tertiary">
                    <h1>Bánh tôm hồ Tây</h1>
                    <h5>West Lake Shrimp Cake</h5>
                </div>

                <img src="banh_tom_ho_tay/image1.png" alt="" class="two-box-horizontal z-index">
                <div class="box primary">
                    <h6>West Lake Shrimp Cake <span>(Bánh tôm hồ Tây)</span> is one of Hanoi’s most famous specialties, closely associated with the romantic scenery of the lake and the traditional culinary culture of the city</h6>
                </div>
                <img src="banh_tom_ho_tay/pattern1.png" alt="" class="box">
                <div class="box accent"></div>
                <img src="banh_tom_ho_tay/pattern2.png" alt="" class="box">
                <div class="three-box-horizontal accent"></div>
                <div class="combination">
                    <div class="box primary one">
                        <p class="accent-text">The dish first appeared in the mid-20th century, when street vendors around West Lake began selling hot shrimp cakes to passersby.
                        <br>
                        Over time, it became a beloved delicacy, deeply tied to the memories and daily life of Hanoians</p>
                    </div>
                    <img src="banh_tom_ho_tay/pattern3.png" alt="" class="box two">
                    <video autoplay loop muted src="banh_tom_ho_tay/bánh tôm 6.mp4" class="two-box-horizontal three"></video>
                    <div class="two-box-vertical primary four">
                        <p class="accent-text">The key ingredients of this dish are fresh shrimp, sweet potatoes, and batter. 
                        <br><br>
                        Live shrimp are preferred, kept with their shells to retain their natural sweetness and crispiness after frying. 
                        <br><br>
                        The sweet potatoes are thinly shredded, mixed with wheat, rice, and tapioca flour, then topped with shrimp before being deep-fried until golden. 
                        <br><br>
                        The result is a crispy, golden cake that is crunchy on the outside yet tender and flavorful on the inside.
                        </p>
                    </div>
                </div>
                <div class="box accent">
                    <p class="white-text">West Lake Shrimp Cake is typically served with fresh herbs and a dipping sauce made of fish sauce, vinegar, garlic, and chili. 
                    <br><br>
                    When enjoyed, diners can savor the richness of the shrimp, the starchy sweetness of the sweet potatoes, and the refreshing balance from herbs and dipping sauce</p>
                </div>
                <img src="banh_tom_ho_tay/image2.png" alt="" class="box">
                <div class="box accent">
                    <p class="white-text">This simple yet harmonious combination has made West Lake Shrimp Cake an unforgettable dish, one that every visitor to Hanoi should try at least once.</p>
                </div>
                <img src="banh_tom_ho_tay/no-bg-1.png" alt="" class="no-bg-1">
                <img src="banh_tom_ho_tay/no-bg-2.png" alt="" class="no-bg-2">
                <img src="banh_tom_ho_tay/no-bg-3.png" alt="" class="no-bg-3">
                <img src="banh_tom_ho_tay/no-bg-4.png" alt="" class="no-bg-4">
            </div>
        `,css:`
            .title {
                position: relative;
            }
            .title h1 {
                position: absolute;
                top: 89px;
                left: 142px;
                font: var(--h1-d-serif);
                margin: 0;
            }
            .title h5 {
                position: absolute;
                top: 224px;
                left: 196px;
                margin: 0;
            }

            .combination {
                display: grid;
                grid-template-areas: 
                "one two four"
                "three three four";
                gap: 32px;
            }

            .combination .one {
                grid-area: one;
            }
            .combination .two {
                grid-area: two;
            }
            .combination .three {
                grid-area: three;
            }
            .combination .four {
                grid-area: four;
            }

            .z-index {
                z-index: 2;
            }

            .no-bg-1 {
                position: absolute;
                top: -362px;
                right: -559px;
            }
            .no-bg-2 {
                position: absolute;
                top: -131px;
                left: -160px;
            }
            .no-bg-3 {
                position: absolute;
                top: 437px;
                left: 82px;
            }
            .no-bg-4 {
                position: absolute;
                bottom: 200px;
                right: -128px;
            }

        `,background:"var(--tertiary)"},{id:5,name:"Sứa đỏ",html:`
            <div class="main-content">
                <div class="title three-box-horizontal accent">
                    <h1 class="primary-text">Sứa đỏ</h1>
                    <h5 class="primary-text">Red Jellyfish</h5>
                </div>
                <img src="sua_do/image 1.png" alt="" class="six-box">
                <div class="box primary">
                    <p><span>Sứa đỏ</span> (Red Jellyfish) is a unique seasonal dish of Hanoi, categorized as a side dish/snack, yet it possesses a rare sophistication, demonstrating the ingenuity and seasonal resourcefulness of the people of Hanoi.</p>
                </div>
                    <img src="sua_do/pattern 1.png" alt="" class="box">
                <div class="box primary">
                    <h6>This dish only appears seasonally, starting from mid-January until May of the lunar calendar, making it a highly anticipated seasonal specialty.</h6>
                </div>
                <div class="combination">
                    <div class="one two-box-vertical primary tertiary">
                        <img src="sua_do/no background 1.png" alt="" class="no-bg-2">
                        <img src="sua_do/no background 2.png" alt="" class="no-bg-3">
                    </div>
                    <img class="two" src="sua_do/image 2.png" alt="">
                    <img class="three" src="sua_do/image 3.png" alt="">

                    <div class="four two-box-horizontal white">
                        <p>Only the freshest jellyfish is selected, carefully processed to remove any irritants, and then the jellyfish is cut into small pieces using a bamboo or rattan knife <span>(thanh tre/cật nứa)</span>. This process helps the jellyfish maintain its signature crunch. It is typically presented on a bamboo tray or large plate and is served with an abundance of fresh, aromatic herbs. The accompanying ingredients include grilled tofu, thinly sliced coconut meat, Vietnamese coriander <span>(kinh giới)</span>, and fresh perilla leaves <span>(tía tô)</span>, creating a vibrant harmony of colors and flavors.</p>
                    </div>
                </div>
                <div class="box primary">
                    <p>The way <span>Sứa đỏ</span> is eaten is also quite specific: the diner picks up a crunchy piece of jellyfish, rolls it with tofu, coconut meat, kinh giới, and tía tô, and then dips it deeply into a bowl of fermented shrimp paste (mắm tôm) already mixed with chili and lime.</p>
                </div>
                    <div class="two-box-horizontal primary">
                    <img src="sua_do/no background 3.png" alt="" class="no-bg-1">
                </div>
            </div>
        `,css:`
            .title {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                padding-top: 48px;
            }
            .title h1 {
                font: var(--h1-d-serif);
            }

            .no-bg-1{
                position:absolute;
                top: 0;
                right:0;
            }
            .no-bg-2{
                position: absolute;
                top: 0;
                left:0;
            }
            .no-bg-3{
                position:absolute;
                bottom:0;
                left:0;
            }
            .combination {
                display: grid;
                grid-template-areas: 
                "one two three"
                "one four four";
                gap: 32px;
            }
            .one {
                grid-area: one;
            }
            .two {
                grid-area: two;
            }
            .three {
                grid-area:three;
            }
            .four {
                grid-area:four;
            }
        `,background:"var(--accent)"},{id:6,name:"Bún chả",html:`
            <div class="main-content">
                <div class="title box accent">
                    <h1 class="h1-one primary-text">Bún</h1>
                    <h1 class="h1-two primary-text">Chả</h1>
                    <h5 class="white-text">Grilled Pork with Vermicelli</h5>
                </div>
                <img src="bun_cha/image1.png" alt="" class="two-box-horizontal">
                <div class="box secondary">
                    <h6 class="white-text"><span>Bún Chả</span> is one of the most iconic dishes of Hanoi, embodying both the simplicity and the culinary elegance of Vietnam’s capital. This dish has existed for decades and has become a familiar choice in the daily life of Hanoians.</h6>
                </div>
                <img src="bun_cha/image2.png" alt="" class="box z-index">
                <img src="bun_cha/pattern1.png" alt="" class="box">
                <div class="two-box-both primary"></div>
                <div class="two-box-vertical secondary z-index">
                    <p class="white-text">
                        Unlike Pho, which is usually enjoyed in the morning, Bun Cha is a popular lunch dish, making small street-side eateries always bustling with customers. 
                        <br><br>
                        Notably, Hanoi’s Bun Cha was once selected by National Geographic as one of the world’s top 10 street foods, affirming its international reputation
                        <br><br>
                        The main ingredients of Bun Cha include fresh rice noodles, pork, and fresh herbs. Pork belly is often sliced thinly to grill into savory pieces, while shoulder meat is minced to make pork patties.
                    </p>
                </div>
                <div class="three-box-horizontal primary z-index">
                    <p class="long-one">After being marinated with garlic, shallots, fish sauce, pepper, and a touch of honey, the meat is grilled over charcoal, giving off an irresistible smoky aroma. 
                    <br><br>
                    The dish is served with thin vermicelli noodles, a variety of fresh herbs such as lettuce, perilla, mint, and Vietnamese balm, along with a dipping sauce made from fish sauce, sugar, vinegar, garlic, chili, and sometimes thin slices of green papaya for extra crunch.
                    </p>
                    <p class="long-two">
                        When enjoying Bun Cha, diners dip the noodles and herbs into the dipping sauce and pair them with the grilled pork. 
                        <br><br>
                        The rich, smoky flavor of the meat, the sweet and tangy balance of the sauce, and the freshness of the noodles and herbs come together in perfect harmony. 
                        <br><br>
                        This combination creates not only a traditional culinary experience but also a dish that easily appeals to international visitors. It is this harmony that has made Bun Cha a memorable culinary symbol of Hanoi.
                    </p>
                </div>
                <div class="box accent"></div>
                <img src="bun_cha/image3.png" alt="" class="box">
                <img src="bun_cha/image4.png" alt="" class="box">
                <img src="bun_cha/pattern2.png" alt="" class="box">
                <video autoplay loop muted src="bun_cha/bún chả 5.mp4" class="two-box-horizontal"></video>
                <img src="bun_cha/no-bg-1.png" alt="" class="no-bg-1">
                <img src="bun_cha/no-bg-2.png" alt="" class="no-bg-2">
            </div>
        `,css:`
            .title {
                position: relative;
            }
            .title .h1-one {
                position: absolute;
                top: 0;
                left: 24px;
                font: var(--h1-d-serif);
                margin: 0;
            }
            .title .h1-two {
                position: absolute;
                top: 104px;
                right: 24px;
                font: var(--h1-d-serif);
                margin: 0;
            }
            .title h5 {
                position: absolute;
                width: 180px;
                bottom: 8px;
                left: 32px;
                margin: 0;
            }

            .long-one {
                width: 390px;
                top: 32px !important;
                left: 48px !important;
            }
            .long-two {
                width: 475px;
                top: 32px !important;
                left: 499px !important;
            }

            .no-bg-1 {
                position: absolute;
                top: 604px;
                left: -89px;
            }

            .no-bg-2 {
                position: absolute;
                bottom: 544px;
                left: -210px;
                z-index: 3;
            }
        `,background:"var(--accent)"},{id:7,name:"Bún thang",html:`
            <div class="main-content">
                <div class="box secondary"></div>
                <video autoplay loop muted src="bun_thang/bún thang 4.mp4" class="two-box-horizontal"></video>
                <div class="box tertiary">
                    <h6><span>Bún thang</span> is a special dish of Hanoi, originating from leftover ingredients after the Lunar New Year holiday, yet it has become a culinary symbol of elegance and refinement.</h6>
                </div>
                <div class="title two-box-horizontal secondary">
                    <h1 class="white-text">Bún thang</h1>
                    <h5 class="white-text">Hanoi Chicken, Pork & Egg Vermicelli Soup</h5>
                </div>
                <div class="two-box-horizontal primary">
                    <p class="p-1">Traditionally, Hanoians created this dish in the early spring to make use of remaining chicken, pork rolls, and eggs,</p>
                    <p class="p-2">turning them into a delicate noodle soup that reflects the ingenuity of Hanoi’s cuisine.</p>
                    <p class="p-3">These are accompanied by dried radish and aromatic herbs such as Vietnamese coriander and scallions.</p>
                </div>
                <div class="box gray"></div>
                <img src="bun_thang/pattern1.png" alt="" class="box">
                <div class="box tertiary"></div>
                <div class="box gray"></div>
                <div class="three-box-horizontal primary">
                    <p class="long-one">
                        The broth is carefully simmered from chicken bones, dried shrimp, and a hint of fermented shrimp paste, creating a light yet flavorful base with a distinctive aroma.
                        <br><br>
                        What makes Bun Thang stand out is the meticulous preparation: the egg must be cooked into very thin layers before being sliced into threads, while the chicken and pork are arranged with precision, so that the bowl is not only delicious but also visually appealing.
                    </p>
                    <p class="long-two">
                        When served, the steaming clear broth is poured over the noodles and toppings, releasing a fragrant aroma. 
                        <br><br>
                        The subtle sweetness of the chicken, the richness of the egg, the chewy texture of pork rolls, and the slight pungency of shrimp paste all come together in harmony. 
                        <br><br>
                        Unlike heavier noodle soups, Bun Thang offers a refined and gentle taste, perfectly balancing richness and lightness. It is more than just a dish of frugality and resourcefulness, it has become an emblem of Hanoi’s sophistication in gastronomy.
                    </p>
                </div>
                <img src="bun_thang/pattern2.png" alt="" class="box">
                <div class="box secondary"></div>
                <img src="bun_thang/pattern3.png" alt="" class="box">
                <div class="three-box-horizontal tertiary last">
                    <img class="no-bg-5" src="bun_thang/no-bg-5.png" alt="">
                    <img class="no-bg-5" src="bun_thang/no-bg-6.png" alt="">
                </div>
                <img src="bun_thang/no-bg-1.png" alt="" class="no-bg-1">
                <img src="bun_thang/no-bg-2.png" alt="" class="no-bg-2">
                <img src="bun_thang/no-bg-3.png" alt="" class="no-bg-3">
                <img src="bun_thang/no-bg-4.png" alt="" class="no-bg-4">
            </div>
        `,css:`
            .title {
                position: relative;
            }
            .title h1 {
                position: absolute;
                width: 480px;
                top: 28px;
                right: 0;
                font: var(--h1-d-serif);
                margin: 0;
            }
            .title h5 {
                position: absolute;
                width: 560px;
                top: 160px;
                left: 72px;
                margin: 0;
            }

            .p-1 {
            width: 509px; 
            }
            .p-2 {
                width: 409px;
                top: 94px !important;
            }
            .p-3 {
                width: 385px;
                top: 183px !important;
            }

            .long-one {
                width: 390px;
                top: 32px !important;
                left: 48px !important;
            }
            .long-two {
                width: 475px;
                top: 32px !important;
                left: 499px !important;
            }

            .last {
                height: 370px;
                display: flex;
                justify-content: space-between;
            }

            .no-bg-1 {
                position: absolute;
                top: -192px;
                left: -256px;
            }
            .no-bg-2 {
                position: absolute;
                top: 330px;
                right: -155px;
            }
            .no-bg-3 {
                position: absolute;
                top: 592px;
                right: -150px;
            }
            .no-bg-4 {
                position: absolute;
                bottom: 400px;
                left: 353px;
            }
        `,background:"var(--secondary)"},{id:8,name:"Phở",html:`
            <div class="main-content">
                <div class="box black"></div>
                <div class="box black title">
                    <h1 class="white-text">
                        <span>Phở</span>
                    </h1>
                </div>
                <img src="pho_hn/pattern 1.png" alt="" class="box">
                <div class="three-box-horizontal white">
                    <h6 class="long">Pho is the most iconic dish of Hanoi, deeply rooted in the city’s culinary heritage and regarded as a national symbol of Vietnam. Originally appearing in the early 20th century, Pho quickly became a beloved breakfast staple and later gained worldwide recognition, representing the soul of Vietnamese cuisine.
                    </h6>
                </div>
                <div class="two-box-horizontal primary hehe">
                    <h6>
                        Traditionally, Pho is prepared with flat rice noodles, tender slices of beef or chicken, and an assortment of fresh herbs. The heart of the dish lies in its broth, which is simmered for hours from beef bones, charred ginger, onions, and a mix of spices such as star anise, cinnamon, and cloves. This slow-cooking process creates a clear yet aromatic soup that perfectly balances depth of flavor and lightness. 
                    </h6>
                </div>
                <img src="pho_hn/pattern 2.png" class="box">
                <img src="pho_hn/pattern 2.png" class="box">
                <img src="pho_hn/image 1.png" class="box">
                <div class="box tertiary ">
                    <h6>
                        What makes Pho distinctive is not only the richness of the broth but also the harmony between noodles, meat, and herbs, making each bowl a refined composition.
                    </h6>
                    <img class="no-bg-3" src="pho_hn/no background 3.png">
                </div>

                <div class="combination">
                    <div class="two-box-vertical white one">
                        <h6>
                            When served, the steaming broth is ladled over the noodles and meat, releasing an irresistible fragrance. The freshness of scallions and cilantro, the zest of lime, and the optional heat of chili or chili sauce all elevate the dish to suit different tastes. Pho offers a balance between comforting warmth and refreshing brightness, making it a dish that can be enjoyed at any time of the day.
                        </h6>
                    </div>
                    <div class="box primary two"></div>
                    <div class="box black three"></div>
                    <img src="pho_hn/image 2.png" class="two-box-horizontal four">

                    <img src="pho_hn/pattern 1.png" class="box">
                    <div class="box black"></div>
                    <div class="box tertiary">
                        <p> 
                            Unlike other noodle soups that may lean toward heaviness, Pho embodies Hanoi’s philosophy of elegance and subtlety in cooking. Beyond being a simple meal, it has become a cultural experience, inviting both locals and travelers to savor the essence of Hanoi’s gastronomy.
                        </p>
                    </div>
                </div>
                <img  class="no-bg-6" src="pho_hn/no background 6.png">
                <img  class="no-bg-2" src="pho_hn/no background 2.png">
                <img  class="no-bg-4" src="pho_hn/no background 4.png">
                <img  class="no-bg-5" src="pho_hn/no background 5.png">
            </div>   
        `,css:`
            .title {
                position: relative;
            }
            .title h1 {
                position: absolute;
                font: var(--h1-d-serif);
                right: 48px;
                bottom: 48px;
            }
            .hihi {
                display: flex;
                justify-content: space-between;
            }
            .hihi h6 {
                position:static;
                margin:32px 0 0 32px;
            }

            .hehe {
                display: flex;
                justify-content: space-between;
            }
            .hehe h6 {
                position: absolute;
                top: 72px;
                left: 32px;
            }

            .combination {
                display: grid;
                grid-template-areas: 
                "one two three"
                "one four four";
                gap: 32px;
            }

            .one {
                grid-area: one;
            }
            .two {
                grid-area: two;
            }
            .three {
                grid-area:three;
            }
            .four {
                grid-area:four;
            }

            .no-bg-6 {
                position:absolute; 
                top: 67px;
                right: 571px;
                z-index: 2;
            }
            .no-bg-2 {
                position:absolute;
                left:-301px;
                top:352px;
                z-index: 2;
            }

            .no-bg-3 {
                position: absolute; 
                bottom: -128px;
                right: 0;
                z-index: 2;
            }

            .no-bg-4 {
                position:absolute; 
                top: 1500px;
                right: -48px;
                z-index: 2;
            }

            .no-bg-5 {
                position:absolute; 
                bottom: 149px;
                left: 238px;
                z-index: 2;
            }

            .long {
                left: 360px !important;
            }
        `,background:"var(--black)"},{id:9,name:"Chả cá Lã Vọng",html:`
            <div class="main-content">
                <img src="cha_ca_la_vong/pattern 1.png" alt="" class="box">
                <div class="box tertiary title">
                    <h1 class="h1-one">Chả cá</h1>
                    <h5>La Vong Grilled Turmeric Fish with Dill</h5>
                </div>
                <img src="cha_ca_la_vong/pattern 2.png" class="box">
                <div class="box tertiary title">
                    <h1 class="h1-two">Lã</h1>
                </div>
                <div class="box tertiary">
                </div>
                <div class="box tertiary title">
                    <h1 class="h1-three">Vọng</h1>
                </div>
                <div class="combination">
                    <div class="box primary one"></div>
                    <img src="cha_ca_la_vong/pattern 2.png" class="box two">
                    <div class="two-box-vertical secondary three">
                        <h6 class="white-text">Traditionally, the dish features fresh chunks of fish, usually snakehead or catfish, marinated with turmeric, galangal, and shrimp paste, then grilled until golden and fragrant. The cooked fish is served sizzling in a pan with generous handfuls of dill and scallions - an unusual but quintessentially Hanoian combination
                        </h6>
                    </div>
                    <img src="cha_ca_la_vong/pattern 1.png" class="box four">
                    <img src="cha_ca_la_vong/image 2.png" class="box five">
                </div>

                <div class="combination-2">
                    <div class="two-box-horizontal primary a hehe">
                        <img src="cha_ca_la_vong/image 1.png">
                        <h6>Diners add rice vermicelli, roasted peanuts, herbs, and a splash of fish sauce or fermented shrimp sauce, creating a harmony of textures and flavors that is both bold and balanced.
                        </h6>
                    </div>
                    <div class="two-box-vertical secondary c">
                        <h6 class="white-text">When enjoyed at the table, the dish is interactive: guests gather around the sizzling pan, adding herbs and noodles as they wish. This communal style of eating makes <span>Chả Cá Lã Vọng</span> more than a dish—it is a shared experience that reflects Hanoi’s warmth and hospitality. Unlike quick street snacks, <span>Chả Cá Lã Vọng</span> is meant to be savored slowly, with its layered flavors and social atmosphere.</h6>
                    </div>
                    <img src="cha_ca_la_vong/image 3.png" class="two-box-horizontal b">
                </div>
                <div class="box tertiary"></div>
                <div class="box primary">
                    <h6>Today, it stands as a culinary landmark of Hanoi, offering both locals and travelers a taste of tradition infused with history and identity.
                    </h6>
                </div>
                <img src="cha_ca_la_vong/pattern 2.png" class="box">
                <img  class="no-bg-1" src="cha_ca_la_vong/no background 1.png">
                <img  class="no-bg-2" src="cha_ca_la_vong/no background 2.png">
                <img  class="no-bg-3" src="cha_ca_la_vong/no background 3.png">
                <img  class="no-bg-4" src="cha_ca_la_vong/no background 4.png">
            </div>
        `,css:`
            .title {
                position: relative;
            }
            .title .h1-one {
                position: absolute;
                font: var(--h1-d-serif);
                top: 48px;
                left: 10px;
            }
            .title .h1-two {
                position: absolute;
                top: 36px;
                left: 24px;
                font: var(--h1-d-serif);
            }
            .title .h1-three {
                position: absolute;
                bottom: 36px;
                right: 24px;
                font: var(--h1-d-serif); 
            }
            .title h5 {
                position: absolute;
                text-align: center;
                top: 160px;
                left: 10px;
            }

            .combination {
                display: grid;
                grid-template-areas: 
                "one three four"
                "two three five";
                gap: 32px;
            }

            .one {
                grid-area: one;
            }
            .two {
                grid-area: two;
            }
            .three {
                grid-area:three;
            }
            .four {
                grid-area:four;
            }
            .five{
                grid-area:five;
            }

            .combination-2 {
                display: grid;
                grid-template-areas: 
                "a c"
                "b c";
                gap:32px;

            }

            .a {
                grid-area:a;
            }
            .b {
                grid-area:b;
            }
            .c {
                grid-area:c;
            }

            .no-bg-1 {
                position:absolute; 
                top: 266px;
                left: 157px;
                z-index: 2;
            }
            .no-bg-2 {
                position:absolute;
                top:0px;
                right:0px;
                z-index: 2;
            }

            .no-bg-3 {
                position:absolute; 
                top: 486px;
                left: 0px;
                z-index: 2;
            }

            .no-bg-4 {
                position:absolute; 
                bottom: 343px;
                left: -190px;
                z-index: 2;
            }

            .hehe {
                display: flex;
                justify-content: space-between;
            }
            .hehe h6 {
                position:static;
                margin:32px 0 0 32px;
            }
        `,background:"var(--tertiary)"},{id:10,name:"Kem Tràng Tiền",html:`
            <div class="main-content">
                <div class="two-box-horizontal light gray"></div>
                <img src="kem_trang_tien/pattern 2.png">
                <div class="two-box-horizontal white title">
                    <h1>Kem Tràng Tiền</h1>
                    <h5>Trang Tien Ice cream</h5>
                </div>
                <img src="kem_trang_tien/pattern 1.png">
                <div class="two-box-horizontal accent">
                    <h6 class="white-text">
                        Established in 1958 on Trang Tien Street, near Hoan Kiem Lake, the shop has become an inseparable part of the city’s cultural memory. For many Hanoians, enjoying Trang Tien ice cream is not simply about the sweet treat itself, but about reliving childhood moments and sharing in a tradition that has spanned generations. 
                    </h6>
                </div>
                <div class="box light gray"></div>
                <img src="kem_trang_tien/pattern 2.png">
                <img src="kem_trang_tien/image 1.png" class="two-box-horizontal">

                <div class="combination">
                    <div class="box accent one"> 
                    </div>

                    <div class="box light gray two">
                        <p>Standing in front of the shop, holding a stick of ice cream while watching the city’s rhythm unfold, is a simple yet unforgettable Hanoi moment. More than just a dessert, Trang Tien Ice Cream has become a cultural landmark, offering travelers a taste not only of sweetness but also of the everyday life of Hanoi.</p>
                    </div>
                    <img src="kem_trang_tien/image 2.png" class="box three">
                    <img src="kem_trang_tien/pattern 1.png" class="box four">

                    <div class="two-box-vertical accent five">
                        <h6 class="white-text">The ice cream is known for its simple yet distinctive flavors such as vanilla, green tea, chocolate, mung bean, and coconut. Unlike the creamy, Western-style desserts, Trang Tien ice cream has a light, icy texture that is refreshing in Hanoi’s humid climate. </h6>
                    </div>
                </div>

                <img src="kem_trang_tien/image 3.png" class="two-box-horizontal" >
                <div class="box light gray">
                    <h6>It is often served on sticks or in cones, making it easy to enjoy while strolling around the bustling streets or by the lakeside.</h6>
                </div>

                <img  class="no-bg-1" src="kem_trang_tien/no background 1.png">
                <img  class="no-bg-2" src="kem_trang_tien/no background 2.png">
                <img  class="no-bg-3" src="kem_trang_tien/no background 3.png">
                <img  class="no-bg-4" src="kem_trang_tien/no background 4.png">
            </div>
        `,css:`
            .title {
                position: relative;
            }
            .title h1 {
                position: absolute;
                font: var(--h1-d-serif);
                top: 128px;
            }
            .title h5 {
                position: absolute;
                top: 240px;
                left: 36px;
            }
            .combination {
            display: grid;
            grid-template-areas:
                "one  three  five "
                "two  four   five";
            gap: 32px;
            }

            /* Grid areas */
            .one   { grid-area: one; }
            .two   { grid-area: two; }
            .three { grid-area: three; }
            .four  { grid-area: four; }
            .five  { grid-area: five; }

            .no-bg-1 {
                position:absolute; 
                top: 0px;
                left: 0px;
                z-index: 2;
            }
            .no-bg-2 {
                position:absolute;
                top: 285px;
                right: -58px;
                z-index: 2;
            }

            .no-bg-3 {
                position:absolute; 
                bottom: 1038px;
                right: 615px;
                z-index: 2;
            }

            .no-bg-4 {
                position:absolute; 
                bottom: 760px;
                right: 0px;
                z-index: 2;
            }

        `,background:"var(--white)"},{id:11,name:"Bún đậu",html:`
            <div class="main-content">
                <div class="title two-box-horizontal primary">
                    <h1 class="h1-one">Bún đậu</h1>
                    <h1 class="h1-two">Mắm tôm</h1>
                    <h5>Vermicelli with fried tofu and shrimp paste</h5>
                </div>
                <div class="box secondary">
                    <p class="white-text"><span>Bún đậu mắm tôm</span> is a traditional Hanoi specialty featuring rice vermicelli, golden fried tofu, fresh herbs and pungent fermented shrimp paste, a dish once humble yet now iconic in Vietnamese street food culture.</p>
                </div>
                <img src="bun_dau_mam_tom/image1.png" alt="" class="two-box-horizontal">
                <img src="bun_dau_mam_tom/pattern1.png" alt="" class="box">
                <div class="box tertiary"></div>
                <div class="two-box-horizontal secondary">
                    <h6 class="white-text">In the early 2000s, amid the bustling streets of Hanoi, a modest food stall introduced what would become one of the city’s most beloved dishes: <span>bún đậu mắm tôm</span> - vermicelli with fried tofu and shrimp paste. At first glance, it seems humble: soft white rice noodles cut into neat squares, crispy golden tofu fresh from the pan, slices of tender boiled pork, and perhaps a bit of crunchy sausage or fragrant green rice patties.</h6>
                </div>
                <div class="three-box-horizontal accent">
                    <h6 class="white-text short">Yet the soul of the dish lies in its dipping sauce: pungent shrimp paste whipped to a froth with lime, chili, and a splash of hot oil. This combination transforms a simple meal into an unforgettable experience.</h6>
                </div>
                <img src="bun_dau_mam_tom/pattern2.png" alt="" class="box">
                <div class="two-box-horizontal tertiary"></div>
                <img src="bun_dau_mam_tom/image2.png" alt="">
                <img src="bun_dau_mam_tom/pattern3.png" alt="">
                <img src="bun_dau_mam_tom/image3.png" alt="" class="two-box-horizontal">
                <div class="box gray">
                    <p>Eating <span>bún đậu</span> requires no ceremony. You pick up a piece of tofu, dip it into the glossy purple sauce, add a bite of noodles and fresh herbs, and let the flavors collide. Hanoians often joke that if you can love <span>bún đậu</span>, you truly understand their city’s taste.
                    </p>
                </div>
                <img src="bun_dau_mam_tom/no-bg-1.png" alt="" class="no-bg-1">
                <img src="bun_dau_mam_tom/no-bg-2.png" alt="" class="no-bg-2">
            </div>
        `,css:`
            .title {
                position: relative;
            }
            .title .h1-one {
                position: absolute;
                top: 16px;
                left: 32px;
                font: var(--h1-d-serif);
                margin: 0;
            }
            .title .h1-two {
                position: absolute;
                top: 120px;
                left: 149px;
                font: var(--h1-d-serif);
                margin: 0;
            }
            .title h5 {
                position: absolute;
                width: 560px;
                top: 256px;
                left: 120px;
                margin: 0;
            }

            .short {
                width: 500px;
            }

            .no-bg-1 {
                position: absolute;
                top: -8px;
                left: 380px;
            }
            .no-bg-2 {
                position: absolute;
                top: 1112px;
                right: 0;
                width: 670px;
                height: 760px;
            }
        `,background:"var(--primary)"},{id:12,name:"Bánh gối",html:`
            <div class="main-content">
                <div class="three-box-horizontal tertiary title">
                    <h1 class="h1-one accent-text">Bánh</h1>
                </div>
                <img src="banh_goi/pattern1.png" alt="" class="box">
                <div class="two-box-horizontal tertiary title">
                    <h1 class="h1-two accent-text">Gối</h1>
                    <h5>Vietnamese fried pillow cake</h5>
                </div>
                <div class="three-box-horizontal secondary">
                    <h6 class="white-text long">Among Hanoi’s many street snacks, <span>bánh gối</span> - literally “pillow cake” - holds a special charm. Its name comes from its shape: a small golden pastry resembling a pillow, deep-fried to crisp perfection. The thin, crunchy shell encases a hearty filling of minced pork, wood ear mushrooms, glass noodles, and quail eggs, sometimes balanced with bits of vegetables for sweetness. With each bite, the crisp exterior meets the savoury, fragrant filling, creating a harmony that lingers long after.</h6>
                </div>
                <div class="box primary">
                    <p>The dish is never complete without its dipping sauce: a delicate mix of fish sauce, vinegar, sugar, garlic, chili, and thin slices of green papaya. This bright, tangy sauce cuts through the richness of the filling, making the flavors dance together.</p>
                </div>
                <img src="banh_goi/pattern2.png" alt="" class="box">
                <div class="box accent">
                    <h6 class="white-text">Hanoians fondly call bánh gối a snack that is “light to eat but hard to forget,” a humble afternoon treat that leaves a lasting impression.</h6>
                </div>
                <div class="combination">
                    <img src="banh_goi/image1.png" alt="" class="two-box-horizontal one">
                    <img src="banh_goi/pattern3.png" alt="" class="box two">
                    <div class="box tertiary three"></div>
                    <div class="two-box-vertical gray four">
                        <h6>Today, whether found at humble street stalls or served in modern eateries, <span>bánh gối</span> remains a true symbol of Hanoi street food - simple yet flavourful, humble yet comforting, and forever timeless in its appeal</h6>
                    </div>
                </div>
                <img src="banh_goi/image2.png" alt="" class="three-box-horizontal">
                <img src="banh_goi/no-bg-1.png" alt="" class="no-bg-1">
                <img src="banh_goi/no-bg-2.png" alt="" class="no-bg-2">
            </div>
        `,css:`
            .title {
                position: relative;
            }
            .title .h1-one {
                position: absolute;
                top: 72px;
                left: 96px;
                font: var(--h1-d-serif);
                margin: 0;
            }
            .title .h1-two {
                position: absolute;
                top: 100px;
                right: 160px;
                font: var(--h1-d-serif);
                margin: 0;
            }
            .title h5 {
                position: absolute;
                top: 210px;
                right: 160px;
                margin: 0;
            }

            .short {
                width: 500px;
            }

            .combination {
                display: grid;
                grid-template-areas: 
                "one one four"
                "two three four";
                gap: 32px;
            }

            .one {
                grid-area: one;
            }
            .two {
                grid-area: two;
            }
            .three {
                grid-area: three;
            }
            .four {
                grid-area: four;
            }

            .long {
                max-width: 90% !important;
            }

            .no-bg-1 {
                position: absolute;
                top: -20px;
                left: 205px;
            }

            .no-bg-2 {
                position: absolute;
                top: 1700px;
                left: 313px;
            }
        `,background:"var(--tertiary)"},{id:13,name:"Xôi cốm",html:`
            <div class="main-content">
                <div class="title two-box-horizontal black">
                    <h1 class="white-text">Xôi cốm</h1>
                    <h5 class="white-text">Green rice flakes sticky rice </h5>
                </div>
                <img src="xoi_com/pattern1.png" alt="" class="box">
                <div class="three-box-horizontal tertiary">
                    <p class="short">Unlike the steaming bowls of noodle soup we often associate with Vietnam, this dish is served cold, a clever creation When autumn arrives in Hanoi, one cannot miss the delicate taste of <span>xôi cốm</span> - green sticky rice cooked into a dish that embodies the soul of the land and the artistry of its people. 
                    <br><br>
                    <span>Cốm</span> is young glutinous rice, harvested while still tender, lightly roasted and pounded, with the finest originating from Vòng village on the outskirts of old Hanoi. From these emerald-green grains, Hanoians created <span>xôi cốm</span>: humble yet refined, a dish that has long been tied to the city’s crisp autumn days.</p>
                    <img src="xoi_com/no-bg-2.png" alt="" class="no-bg-2">
                    <img src="xoi_com/no-bg-3.png" alt="" class="no-bg-3">
                </div>
                <div class="combination">
                    <div class="box one primary"></div>
                    <img src="xoi_com/image1.png" alt="" class="box two">
                    <img src="xoi_com/image2.png" alt="" class="box three">
                    <img src="xoi_com/pattern2.png" alt="" class="box four">
                    <div class="two-box-vertical tertiary five">
                        <h6><span>Xôi cốm</span>, with its jade-green grains, buttery mung beans, sweet coconut, and lotus leaf aroma, is more than a delicacy - it symbolizes harmony, prosperity, and togetherness, long cherished in festivals, weddings, and ancestral offerings.</h6>
                    </div>
                </div>
                <img src="xoi_com/image3.png" alt="" class="three-box-horizontal">
                <div class="two-box-vertical tertiary">
                    <p>Its origin is traced to the legend of Vòng village, where a storm once flattened fields of young rice. Farmers salvaged the crop by roasting the grains, discovering a flavor both tender and fragrant. From then on, cốm and its many variations - including <span>xôi cốm</span> - became treasured gifts of Hanoi. Even today, each bite of this sticky rice carries the gentle sweetness of autumn and the timeless spirit of the capital.</p>
                </div>
                <img src="xoi_com/image4.png" alt="" class="two-box-both">
                <img src="xoi_com/no-bg-1.png" alt="" class="no-bg-1">
                <img src="xoi_com/no-bg-4.png" alt="" class="no-bg-4">
            </div>
        `,css:`
            .title {
                position: relative;
            }
            .title h1 {
                position: absolute;
                top: 180px;
                right: 48px;
                font: var(--h1-d-serif);
                margin: 0;
            }

            .title h5 {
                position: absolute;
                top: 140px;
                right: 24px;
                margin: 0;
            }

            .combination {
                display: grid;
                grid-template-areas: 
                "one two five"
                "three four five";
                gap: 32px;
            }

            .one {
                grid-area: one;
            }
            .two {
                grid-area: two;
            }
            .three {
                grid-area: three;
            }
            .four {
                grid-area: four;
            }
            .five {
                grid-area: five;
            }

            .short {
                width: 598px !important;
            }

            .no-bg-1 {
            position: absolute; 
            top: 0;
            left: -290px;
            }
            .no-bg-2 {
                position: absolute;
                bottom: 0;
                right: -8px;
            }
            .no-bg-3 {
                position: absolute;
                bottom: 0;
                right: 180px;
            }
            .no-bg-4 {
                position: absolute;
                bottom: 400px;
                left: 0;
            }
        `,background:"var(--black)"},{id:14,name:"Bánh cuốn Thanh Trì",html:`
            <div class="main-content">
                <div class="title two-box-horizontal">
                    <h1 class="h1-one">Bánh cuốn</h1>
                    <h1 class="h1-two">Thanh Trì</h1>
                    <h5>Thanh Tri Steamed Rice Roll</h5>
                </div>
                <div class="box light-gray"></div>
                <img src="banh_cuon_thanh_tri/pattern 1.png" alt="" class="box">
                <div class="box light-gray"></div>
                <div class="box tertiary">
                    <h6><span>Bánh cuốn Thanh Trì</span> (Thanh Tri steamed rice roll) is a famous specialty, closely associated with the historic <span>Thanh Trì</span> Village, now part of <span>Thanh Trì</span> district.</h6>
                </div>
                <div class="box black"></div>
                <div class="two-box-horizontal gray">
                        <p class="long">The main ingredient of <span>Bánh cuốn Thanh Trì</span> is ordinary rice, soaked, finely ground into flour, and then steamed into incredibly thin sheets. The defining characteristics of this dish are that the steamed rolls are served cold, are soft, smooth, thin, and are stacked in multiple delicate layers. To enjoy it properly, the eater must separate the layers before cutting them into small pieces, showing the detail-oriented nature of the dish. </p>
                    </div>
                <div class="box primary"></div>
                <img src="banh_cuon_thanh_tri/pattern 2.png" alt="" class="box">
                <div class="box tertiary"></div>
            
                    <div class="one two-box-vertical light-gray">
                        <p>The rolls are typically plain, highlighting the pure flavor of the rice flour. When presented, the pristine white rolls are neatly stacked and generously topped with golden fried shallots. <span>Bánh cuốn Thanh Trì</span> must be eaten with its quintessential dipping sauce—a sweet and sour fish sauce concoction traditionally enhanced with civet paste essence or a slice of fresh chili. The supple, silky texture of the roll, combined with the buttery richness of the fried shallots, is uplifted by the light dipping sauce, creating a delicate, harmonious flavor that has captivated generations of Hanoians.</p>
                    </div>
                    <img class="two four-box" src="banh_cuon_thanh_tri/image 1.png" alt="">
                    <img src="banh_cuon_thanh_tri/image 2.png" alt="" class="box">
                    <img src="banh_cuon_thanh_tri/image 3.png" alt="" class="box">
                    <img src="banh_cuon_thanh_tri/image 4.png" alt="" class="box">
                <img src="banh_cuon_thanh_tri/no background 1.png" alt="" class="no-bg-1 z-index">
                <img src="banh_cuon_thanh_tri/no background 2.png" alt="" class="no-bg-2">
            </div>
        `,css:`
            .title {
                position: relative;
            }
            .title .h1-one {
                position: absolute;
                top: 24px;
                left: 32px;
                font: var(--h1-d-serif);
            }
            .title .h1-two {
                position: absolute;
                top: 128px;
                left: 32px;
                font: var(--h1-d-serif);
            }
            .title h5 {
                position: absolute;
                bottom: 16px;
                left: 8px;
            }

            .no-bg-1 {
                position: absolute;
                top: -140px;
                right: -110px;
            }
            .no-bg-2{
                position: absolute;
                top: 704px;
                left:0;
            }
            .combination {
                display: grid;
                grid-template-areas: 
                "one two three"
                "four five seven" ;
                gap: 32px;
            }
            .one {
                grid-area: one;
            }
            .two {
                grid-area: two;
            }
            .long {
                left: 160px !important;
                padding-right: 56px;
            }
        `,background:"var(--white)"},{id:15,name:"Bún bò Nam Bộ",html:`
            <div class="main-content">
                <div class="box gray"> </div>
                <img src="bun_bo_nam_bo/image 1.png" alt="" class="box">
                <div class="box tertiary">
                    <p><span>Bún bò Nam Bộ</span> did not originate in the South but rather from the former <span>Lê Duẩn</span> Street, which was previously called <span>Đường Nam Bộ</span> (Southern Road), and it has since become an indispensable culinary symbol of the capital.</p>
                </div>
                <img src="bun_bo_nam_bo/image 2.png" alt="" class="box">

                <div class="title two-box-horizontal">
                    <h1 class="h1-one white-text">Bún bò</h1>
                    <h1 class="h1-two white-text">Nam Bộ</h1>
                    <h5 class="white-text">Southern Beef Rice Noodles</h5>
                </div>
                <div class="two-box-horizontal tertiary">
                        <h6>The main components include fresh rice vermicelli, fragrant stir-fried beef, lightly blanched bean sprouts, and a medley of fresh herbs like lettuce, Vietnamese coriander <span>(kinh giới)</span>, and mint. Essential finishing touches are crushed roasted peanuts and crispy fried shallots, providing a delightful richness and aroma. The soul of the dish lies in the flavorful sweet and sour dressing, skilfully prepared with fish sauce, sugar, lime, garlic, and chili.</h6>
                    </div>
                <img src="bun_bo_nam_bo/image 3.png" alt="" class="box">
                <div class="combination">
                    <div class="one box gray"> </div>
                    <div class="two box black"> </div>

                    <img class="three" src="bun_bo_nam_bo/pattern 1.png" alt="">
                    <div class="four box secondary"> </div>
                    <img class="five" src="bun_bo_nam_bo/pattern 2.png" alt="">
                    <img class="six two-box-horizontal" src="bun_bo_nam_bo/image 4.png" alt="">

                    <div class="seven two-box-vertical tertiary">
                        <h6><span>Bún bò Nam Bộ</span>  is a quintessential dish of Hanoi's street food scene, despite its misleading name. <span>Bún bò Nam Bộ</span> offers a full spectrum of sensory experiences: aromatic, rich, crunchy, chewy, sour, and spicy, making it an appealing and satisfying choice for any weather, solidifying its position as one of Hanoi's favorite main noodle dishes. It represents a blended style of cuisine, where Hanoi's inherent refinement meets a vibrant, casual dining style.</h6>
                    </div>
                </div>
                        <img src="bun_bo_nam_bo/no background 1.png" alt="" class="no-bg-1">
                <div class="box tertiary">
                    <p>When served, the diner thoroughly mixes all the ingredients. The hot, tender stir-fried beef blends with the cool vermicelli, the crunch of bean sprouts, the nuttiness of peanuts, and the crispness of fried shallots, all thoroughly coated in the balanced, tangy dressing.</p>
                </div>
                <img src="bun_bo_nam_bo/image 5.png" alt="" class="box">
                <div class="box secondary"></div>

            </div>
        `,css:`
            .title {
                position: relative;
            }
            .title .h1-one {
                position: absolute;
                top: 16px;
                left: 32px;
                font: var(--h1-d-serif);
                margin: 0;
            }
            .title .h1-two {
                position: absolute;
                top: 120px;
                left: 149px;
                font: var(--h1-d-serif);
                margin: 0;
            }
            .title h5 {
                position: absolute;
                width: 560px;
                top: 256px;
                left: 120px;
                margin: 0;
            }
            .no-bg-1 {
                position: absolute;
                top: 904px;
                left: -74px;
            }
            .no-bg-2{
                position: absolute;
                top: 0;
                left:0;
            }
            .no-bg-3{
                position:absolute;
                bottom:0;
                left:0;
            }
            .combination {
                display: grid;
                grid-template-areas: 
                "one two three"
                "four five seven" 
                "six six seven";
                gap: 32px;
            }
            .one {
                grid-area: one;
            }
            .two {
                grid-area: two;
            }
            .three {
                grid-area:three;
            }
            .four {
                grid-area:four;
            }
            .five {
                grid-area:five;
            }.six {
                grid-area:six;
            }.seven {
                grid-area:seven;
            }

        `,background:"var(--black)"}];function ii(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function sa(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Se={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},br={duration:.5,overwrite:!1,delay:0},Ys,Wt,ct,ze=1e8,st=1/ze,ps=Math.PI*2,Ll=ps/4,Nl=0,oa=Math.sqrt,Fl=Math.cos,Bl=Math.sin,Lt=function(t){return typeof t=="string"},_t=function(t){return typeof t=="function"},ai=function(t){return typeof t=="number"},Vs=function(t){return typeof t>"u"},Ke=function(t){return typeof t=="object"},he=function(t){return t!==!1},Xs=function(){return typeof window<"u"},fn=function(t){return _t(t)||Lt(t)},aa=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Kt=Array.isArray,gs=/(?:-?\.?\d|\.)+/gi,la=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,hr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zn=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ha=/[+-]=-?[.\d]+/,ca=/[^,'"\[\]\s]+/gi,Il=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,ft,Xe,_s,Us,ke={},An={},ua,fa=function(t){return(An=vr(t,ke))&&de},$s=function(t,i){return console.warn("Invalid property",t,"set to",i,"Missing plugin? gsap.registerPlugin()")},Zr=function(t,i){return!i&&console.warn(t)},da=function(t,i){return t&&(ke[t]=i)&&An&&(An[t]=i)||ke},Jr=function(){return 0},Wl={suppressEvents:!0,isStart:!0,kill:!1},kn={suppressEvents:!0,kill:!1},Hl={suppressEvents:!0},qs={},wi=[],ms={},pa,ve={},Jn={},_o=30,Cn=[],Gs="",js=function(t){var i=t[0],e,r;if(Ke(i)||_t(i)||(t=[t]),!(e=(i._gsap||{}).harness)){for(r=Cn.length;r--&&!Cn[r].targetTest(i););e=Cn[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new Ba(t[r],e)))||t.splice(r,1);return t},Hi=function(t){return t._gsap||js(Re(t))[0]._gsap},ga=function(t,i,e){return(e=t[i])&&_t(e)?t[i]():Vs(e)&&t.getAttribute&&t.getAttribute(i)||e},ce=function(t,i){return(t=t.split(",")).forEach(i)||t},yt=function(t){return Math.round(t*1e5)/1e5||0},Ct=function(t){return Math.round(t*1e7)/1e7||0},fr=function(t,i){var e=i.charAt(0),r=parseFloat(i.substr(2));return t=parseFloat(t),e==="+"?t+r:e==="-"?t-r:e==="*"?t*r:t/r},Yl=function(t,i){for(var e=i.length,r=0;t.indexOf(i[r])<0&&++r<e;);return r<e},Ln=function(){var t=wi.length,i=wi.slice(0),e,r;for(ms={},wi.length=0,e=0;e<t;e++)r=i[e],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Ks=function(t){return!!(t._initted||t._startAt||t.add)},_a=function(t,i,e,r){wi.length&&!Wt&&Ln(),t.render(i,e,!!(Wt&&i<0&&Ks(t))),wi.length&&!Wt&&Ln()},ma=function(t){var i=parseFloat(t);return(i||i===0)&&(t+"").match(ca).length<2?i:Lt(t)?t.trim():t},ba=function(t){return t},Ce=function(t,i){for(var e in i)e in t||(t[e]=i[e]);return t},Vl=function(t){return function(i,e){for(var r in e)r in i||r==="duration"&&t||r==="ease"||(i[r]=e[r])}},vr=function(t,i){for(var e in i)t[e]=i[e];return t},mo=function s(t,i){for(var e in i)e!=="__proto__"&&e!=="constructor"&&e!=="prototype"&&(t[e]=Ke(i[e])?s(t[e]||(t[e]={}),i[e]):i[e]);return t},Nn=function(t,i){var e={},r;for(r in t)r in i||(e[r]=t[r]);return e},Wr=function(t){var i=t.parent||ft,e=t.keyframes?Vl(Kt(t.keyframes)):Ce;if(he(t.inherit))for(;i;)e(t,i.vars.defaults),i=i.parent||i._dp;return t},Xl=function(t,i){for(var e=t.length,r=e===i.length;r&&e--&&t[e]===i[e];);return e<0},va=function(t,i,e,r,n){var o=t[r],a;if(n)for(a=i[n];o&&o[n]>a;)o=o._prev;return o?(i._next=o._next,o._next=i):(i._next=t[e],t[e]=i),i._next?i._next._prev=i:t[r]=i,i._prev=o,i.parent=i._dp=t,i},qn=function(t,i,e,r){e===void 0&&(e="_first"),r===void 0&&(r="_last");var n=i._prev,o=i._next;n?n._next=o:t[e]===i&&(t[e]=o),o?o._prev=n:t[r]===i&&(t[r]=n),i._next=i._prev=i.parent=null},ki=function(t,i){t.parent&&(!i||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Yi=function(t,i){if(t&&(!i||i._end>t._dur||i._start<0))for(var e=t;e;)e._dirty=1,e=e.parent;return t},Ul=function(t){for(var i=t.parent;i&&i.parent;)i._dirty=1,i.totalDuration(),i=i.parent;return t},bs=function(t,i,e,r){return t._startAt&&(Wt?t._startAt.revert(kn):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(i,!0,r))},$l=function s(t){return!t||t._ts&&s(t.parent)},bo=function(t){return t._repeat?yr(t._tTime,t=t.duration()+t._rDelay)*t:0},yr=function(t,i){var e=Math.floor(t=Ct(t/i));return t&&e===t?e-1:e},Fn=function(t,i){return(t-i._start)*i._ts+(i._ts>=0?0:i._dirty?i.totalDuration():i._tDur)},Gn=function(t){return t._end=Ct(t._start+(t._tDur/Math.abs(t._ts||t._rts||st)||0))},jn=function(t,i){var e=t._dp;return e&&e.smoothChildTiming&&t._ts&&(t._start=Ct(e._time-(t._ts>0?i/t._ts:((t._dirty?t.totalDuration():t._tDur)-i)/-t._ts)),Gn(t),e._dirty||Yi(e,t)),t},ya=function(t,i){var e;if((i._time||!i._dur&&i._initted||i._start<t._time&&(i._dur||!i.add))&&(e=Fn(t.rawTime(),i),(!i._dur||ln(0,i.totalDuration(),e)-i._tTime>st)&&i.render(e,!0)),Yi(t,i)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(e=t;e._dp;)e.rawTime()>=0&&e.totalTime(e._tTime),e=e._dp;t._zTime=-st}},$e=function(t,i,e,r){return i.parent&&ki(i),i._start=Ct((ai(e)?e:e||t!==ft?Ee(t,e,i):t._time)+i._delay),i._end=Ct(i._start+(i.totalDuration()/Math.abs(i.timeScale())||0)),va(t,i,"_first","_last",t._sort?"_start":0),vs(i)||(t._recent=i),r||ya(t,i),t._ts<0&&jn(t,t._tTime),t},xa=function(t,i){return(ke.ScrollTrigger||$s("scrollTrigger",i))&&ke.ScrollTrigger.create(i,t)},wa=function(t,i,e,r,n){if(Zs(t,i,n),!t._initted)return 1;if(!e&&t._pt&&!Wt&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&pa!==xe.frame)return wi.push(t),t._lazy=[n,r],1},ql=function s(t){var i=t.parent;return i&&i._ts&&i._initted&&!i._lock&&(i.rawTime()<0||s(i))},vs=function(t){var i=t.data;return i==="isFromStart"||i==="isStart"},Gl=function(t,i,e,r){var n=t.ratio,o=i<0||!i&&(!t._start&&ql(t)&&!(!t._initted&&vs(t))||(t._ts<0||t._dp._ts<0)&&!vs(t))?0:1,a=t._rDelay,l=0,h,c,f;if(a&&t._repeat&&(l=ln(0,t._tDur,i),c=yr(l,a),t._yoyo&&c&1&&(o=1-o),c!==yr(t._tTime,a)&&(n=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==n||Wt||r||t._zTime===st||!i&&t._zTime){if(!t._initted&&wa(t,i,r,e,l))return;for(f=t._zTime,t._zTime=i||(e?st:0),e||(e=i&&!f),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,h=t._pt;h;)h.r(o,h.d),h=h._next;i<0&&bs(t,i,e,!0),t._onUpdate&&!e&&Te(t,"onUpdate"),l&&t._repeat&&!e&&t.parent&&Te(t,"onRepeat"),(i>=t._tDur||i<0)&&t.ratio===o&&(o&&ki(t,1),!e&&!Wt&&(Te(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=i)},jl=function(t,i,e){var r;if(e>i)for(r=t._first;r&&r._start<=e;){if(r.data==="isPause"&&r._start>i)return r;r=r._next}else for(r=t._last;r&&r._start>=e;){if(r.data==="isPause"&&r._start<i)return r;r=r._prev}},xr=function(t,i,e,r){var n=t._repeat,o=Ct(i)||0,a=t._tTime/t._tDur;return a&&!r&&(t._time*=o/t._dur),t._dur=o,t._tDur=n?n<0?1e10:Ct(o*(n+1)+t._rDelay*n):o,a>0&&!r&&jn(t,t._tTime=t._tDur*a),t.parent&&Gn(t),e||Yi(t.parent,t),t},vo=function(t){return t instanceof ne?Yi(t):xr(t,t._dur)},Kl={_start:0,endTime:Jr,totalDuration:Jr},Ee=function s(t,i,e){var r=t.labels,n=t._recent||Kl,o=t.duration()>=ze?n.endTime(!1):t._dur,a,l,h;return Lt(i)&&(isNaN(i)||i in r)?(l=i.charAt(0),h=i.substr(-1)==="%",a=i.indexOf("="),l==="<"||l===">"?(a>=0&&(i=i.replace(/=/,"")),(l==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(i.substr(1))||0)*(h?(a<0?n:e).totalDuration()/100:1)):a<0?(i in r||(r[i]=o),r[i]):(l=parseFloat(i.charAt(a-1)+i.substr(a+1)),h&&e&&(l=l/100*(Kt(e)?e[0]:e).totalDuration()),a>1?s(t,i.substr(0,a-1),e)+l:o+l)):i==null?o:+i},Hr=function(t,i,e){var r=ai(i[1]),n=(r?2:1)+(t<2?0:1),o=i[n],a,l;if(r&&(o.duration=i[1]),o.parent=e,t){for(a=o,l=e;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=he(l.vars.inherit)&&l.parent;o.immediateRender=he(a.immediateRender),t<2?o.runBackwards=1:o.startAt=i[n-1]}return new kt(i[0],o,i[n+1])},Ei=function(t,i){return t||t===0?i(t):i},ln=function(t,i,e){return e<t?t:e>i?i:e},Gt=function(t,i){return!Lt(t)||!(i=Il.exec(t))?"":i[1]},Ql=function(t,i,e){return Ei(e,function(r){return ln(t,i,r)})},ys=[].slice,Ta=function(t,i){return t&&Ke(t)&&"length"in t&&(!i&&!t.length||t.length-1 in t&&Ke(t[0]))&&!t.nodeType&&t!==Xe},Zl=function(t,i,e){return e===void 0&&(e=[]),t.forEach(function(r){var n;return Lt(r)&&!i||Ta(r,1)?(n=e).push.apply(n,Re(r)):e.push(r)})||e},Re=function(t,i,e){return ct&&!i&&ct.selector?ct.selector(t):Lt(t)&&!e&&(_s||!wr())?ys.call((i||Us).querySelectorAll(t),0):Kt(t)?Zl(t,e):Ta(t)?ys.call(t,0):t?[t]:[]},xs=function(t){return t=Re(t)[0]||Zr("Invalid scope")||{},function(i){var e=t.current||t.nativeElement||t;return Re(i,e.querySelectorAll?e:e===t?Zr("Invalid scope")||Us.createElement("div"):t)}},Sa=function(t){return t.sort(function(){return .5-Math.random()})},ka=function(t){if(_t(t))return t;var i=Ke(t)?t:{each:t},e=Vi(i.ease),r=i.from||0,n=parseFloat(i.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,h=i.axis,c=r,f=r;return Lt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(d,u,g){var p=(g||i).length,m=o[p],w,x,k,v,b,S,T,C,P;if(!m){if(P=i.grid==="auto"?0:(i.grid||[1,ze])[1],!P){for(T=-ze;T<(T=g[P++].getBoundingClientRect().left)&&P<p;);P<p&&P--}for(m=o[p]=[],w=l?Math.min(P,p)*c-.5:r%P,x=P===ze?0:l?p*f/P-.5:r/P|0,T=0,C=ze,S=0;S<p;S++)k=S%P-w,v=x-(S/P|0),m[S]=b=h?Math.abs(h==="y"?v:k):oa(k*k+v*v),b>T&&(T=b),b<C&&(C=b);r==="random"&&Sa(m),m.max=T-C,m.min=C,m.v=p=(parseFloat(i.amount)||parseFloat(i.each)*(P>p?p-1:h?h==="y"?p/P:P:Math.max(P,p/P))||0)*(r==="edges"?-1:1),m.b=p<0?n-p:n,m.u=Gt(i.amount||i.each)||0,e=e&&p<0?La(e):e}return p=(m[d]-m.min)/m.max||0,Ct(m.b+(e?e(p):p)*m.v)+m.u}},ws=function(t){var i=Math.pow(10,((t+"").split(".")[1]||"").length);return function(e){var r=Ct(Math.round(parseFloat(e)/t)*t*i);return(r-r%1)/i+(ai(e)?0:Gt(e))}},Ca=function(t,i){var e=Kt(t),r,n;return!e&&Ke(t)&&(r=e=t.radius||ze,t.values?(t=Re(t.values),(n=!ai(t[0]))&&(r*=r)):t=ws(t.increment)),Ei(i,e?_t(t)?function(o){return n=t(o),Math.abs(n-o)<=r?n:o}:function(o){for(var a=parseFloat(n?o.x:o),l=parseFloat(n?o.y:0),h=ze,c=0,f=t.length,d,u;f--;)n?(d=t[f].x-a,u=t[f].y-l,d=d*d+u*u):d=Math.abs(t[f]-a),d<h&&(h=d,c=f);return c=!r||h<=r?t[c]:o,n||c===o||ai(o)?c:c+Gt(o)}:ws(t))},Pa=function(t,i,e,r){return Ei(Kt(t)?!i:e===!0?!!(e=0):!r,function(){return Kt(t)?t[~~(Math.random()*t.length)]:(e=e||1e-5)&&(r=e<1?Math.pow(10,(e+"").length-2):1)&&Math.floor(Math.round((t-e/2+Math.random()*(i-t+e*.99))/e)*e*r)/r})},Jl=function(){for(var t=arguments.length,i=new Array(t),e=0;e<t;e++)i[e]=arguments[e];return function(r){return i.reduce(function(n,o){return o(n)},r)}},th=function(t,i){return function(e){return t(parseFloat(e))+(i||Gt(e))}},eh=function(t,i,e){return Oa(t,i,0,1,e)},Ea=function(t,i,e){return Ei(e,function(r){return t[~~i(r)]})},ih=function s(t,i,e){var r=i-t;return Kt(t)?Ea(t,s(0,t.length),i):Ei(e,function(n){return(r+(n-t)%r)%r+t})},rh=function s(t,i,e){var r=i-t,n=r*2;return Kt(t)?Ea(t,s(0,t.length-1),i):Ei(e,function(o){return o=(n+(o-t)%n)%n||0,t+(o>r?n-o:o)})},tn=function(t){for(var i=0,e="",r,n,o,a;~(r=t.indexOf("random(",i));)o=t.indexOf(")",r),a=t.charAt(r+7)==="[",n=t.substr(r+7,o-r-7).match(a?ca:gs),e+=t.substr(i,r-i)+Pa(a?n:+n[0],a?0:+n[1],+n[2]||1e-5),i=o+1;return e+t.substr(i,t.length-i)},Oa=function(t,i,e,r,n){var o=i-t,a=r-e;return Ei(n,function(l){return e+((l-t)/o*a||0)})},nh=function s(t,i,e,r){var n=isNaN(t+i)?0:function(u){return(1-u)*t+u*i};if(!n){var o=Lt(t),a={},l,h,c,f,d;if(e===!0&&(r=1)&&(e=null),o)t={p:t},i={p:i};else if(Kt(t)&&!Kt(i)){for(c=[],f=t.length,d=f-2,h=1;h<f;h++)c.push(s(t[h-1],t[h]));f--,n=function(g){g*=f;var p=Math.min(d,~~g);return c[p](g-p)},e=i}else r||(t=vr(Kt(t)?[]:{},t));if(!c){for(l in i)Qs.call(a,t,l,"get",i[l]);n=function(g){return eo(g,a)||(o?t.p:t)}}}return Ei(e,n)},yo=function(t,i,e){var r=t.labels,n=ze,o,a,l;for(o in r)a=r[o]-i,a<0==!!e&&a&&n>(a=Math.abs(a))&&(l=o,n=a);return l},Te=function(t,i,e){var r=t.vars,n=r[i],o=ct,a=t._ctx,l,h,c;if(n)return l=r[i+"Params"],h=r.callbackScope||t,e&&wi.length&&Ln(),a&&(ct=a),c=l?n.apply(h,l):n.call(h),ct=o,c},Dr=function(t){return ki(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Wt),t.progress()<1&&Te(t,"onInterrupt"),t},cr,Ma=[],za=function(t){if(t)if(t=!t.name&&t.default||t,Xs()||t.headless){var i=t.name,e=_t(t),r=i&&!e&&t.init?function(){this._props=[]}:t,n={init:Jr,render:eo,add:Qs,kill:yh,modifier:vh,rawVars:0},o={targetTest:0,get:0,getSetter:to,aliases:{},register:0};if(wr(),t!==r){if(ve[i])return;Ce(r,Ce(Nn(t,n),o)),vr(r.prototype,vr(n,Nn(t,o))),ve[r.prop=i]=r,t.targetTest&&(Cn.push(r),qs[i]=1),i=(i==="css"?"CSS":i.charAt(0).toUpperCase()+i.substr(1))+"Plugin"}da(i,r),t.register&&t.register(de,r,ue)}else Ma.push(t)},nt=255,Ar={aqua:[0,nt,nt],lime:[0,nt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,nt],navy:[0,0,128],white:[nt,nt,nt],olive:[128,128,0],yellow:[nt,nt,0],orange:[nt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[nt,0,0],pink:[nt,192,203],cyan:[0,nt,nt],transparent:[nt,nt,nt,0]},ts=function(t,i,e){return t+=t<0?1:t>1?-1:0,(t*6<1?i+(e-i)*t*6:t<.5?e:t*3<2?i+(e-i)*(2/3-t)*6:i)*nt+.5|0},Ra=function(t,i,e){var r=t?ai(t)?[t>>16,t>>8&nt,t&nt]:0:Ar.black,n,o,a,l,h,c,f,d,u,g;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Ar[t])r=Ar[t];else if(t.charAt(0)==="#"){if(t.length<6&&(n=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+n+n+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&nt,r&nt,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&nt,t&nt]}else if(t.substr(0,3)==="hsl"){if(r=g=t.match(gs),!i)l=+r[0]%360/360,h=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(h+1):c+h-c*h,n=c*2-o,r.length>3&&(r[3]*=1),r[0]=ts(l+1/3,n,o),r[1]=ts(l,n,o),r[2]=ts(l-1/3,n,o);else if(~t.indexOf("="))return r=t.match(la),e&&r.length<4&&(r[3]=1),r}else r=t.match(gs)||Ar.transparent;r=r.map(Number)}return i&&!g&&(n=r[0]/nt,o=r[1]/nt,a=r[2]/nt,f=Math.max(n,o,a),d=Math.min(n,o,a),c=(f+d)/2,f===d?l=h=0:(u=f-d,h=c>.5?u/(2-f-d):u/(f+d),l=f===n?(o-a)/u+(o<a?6:0):f===o?(a-n)/u+2:(n-o)/u+4,l*=60),r[0]=~~(l+.5),r[1]=~~(h*100+.5),r[2]=~~(c*100+.5)),e&&r.length<4&&(r[3]=1),r},Da=function(t){var i=[],e=[],r=-1;return t.split(Ti).forEach(function(n){var o=n.match(hr)||[];i.push.apply(i,o),e.push(r+=o.length+1)}),i.c=e,i},xo=function(t,i,e){var r="",n=(t+r).match(Ti),o=i?"hsla(":"rgba(",a=0,l,h,c,f;if(!n)return t;if(n=n.map(function(d){return(d=Ra(d,i,1))&&o+(i?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),e&&(c=Da(t),l=e.c,l.join(r)!==c.c.join(r)))for(h=t.replace(Ti,"1").split(hr),f=h.length-1;a<f;a++)r+=h[a]+(~l.indexOf(a)?n.shift()||o+"0,0,0,0)":(c.length?c:n.length?n:e).shift());if(!h)for(h=t.split(Ti),f=h.length-1;a<f;a++)r+=h[a]+n[a];return r+h[f]},Ti=function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Ar)s+="|"+t+"\\b";return new RegExp(s+")","gi")}(),sh=/hsl[a]?\(/,Aa=function(t){var i=t.join(" "),e;if(Ti.lastIndex=0,Ti.test(i))return e=sh.test(i),t[1]=xo(t[1],e),t[0]=xo(t[0],e,Da(t[1])),!0},en,xe=function(){var s=Date.now,t=500,i=33,e=s(),r=e,n=1e3/240,o=n,a=[],l,h,c,f,d,u,g=function p(m){var w=s()-r,x=m===!0,k,v,b,S;if((w>t||w<0)&&(e+=w-i),r+=w,b=r-e,k=b-o,(k>0||x)&&(S=++f.frame,d=b-f.time*1e3,f.time=b=b/1e3,o+=k+(k>=n?4:n-k),v=1),x||(l=h(p)),v)for(u=0;u<a.length;u++)a[u](b,d,S,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){ua&&(!_s&&Xs()&&(Xe=_s=window,Us=Xe.document||{},ke.gsap=de,(Xe.gsapVersions||(Xe.gsapVersions=[])).push(de.version),fa(An||Xe.GreenSockGlobals||!Xe.gsap&&Xe||{}),Ma.forEach(za)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),h=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},en=1,g(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),en=0,h=Jr},lagSmoothing:function(m,w){t=m||1/0,i=Math.min(w||33,t)},fps:function(m){n=1e3/(m||240),o=f.time*1e3+n},add:function(m,w,x){var k=w?function(v,b,S,T){m(v,b,S,T),f.remove(k)}:m;return f.remove(m),a[x?"unshift":"push"](k),wr(),k},remove:function(m,w){~(w=a.indexOf(m))&&a.splice(w,1)&&u>=w&&u--},_listeners:a},f}(),wr=function(){return!en&&xe.wake()},J={},oh=/^[\d.\-M][\d.\-,\s]/,ah=/["']/g,lh=function(t){for(var i={},e=t.substr(1,t.length-3).split(":"),r=e[0],n=1,o=e.length,a,l,h;n<o;n++)l=e[n],a=n!==o-1?l.lastIndexOf(","):l.length,h=l.substr(0,a),i[r]=isNaN(h)?h.replace(ah,"").trim():+h,r=l.substr(a+1).trim();return i},hh=function(t){var i=t.indexOf("(")+1,e=t.indexOf(")"),r=t.indexOf("(",i);return t.substring(i,~r&&r<e?t.indexOf(")",e+1):e)},ch=function(t){var i=(t+"").split("("),e=J[i[0]];return e&&i.length>1&&e.config?e.config.apply(null,~t.indexOf("{")?[lh(i[1])]:hh(t).split(",").map(ma)):J._CE&&oh.test(t)?J._CE("",t):e},La=function(t){return function(i){return 1-t(1-i)}},Na=function s(t,i){for(var e=t._first,r;e;)e instanceof ne?s(e,i):e.vars.yoyoEase&&(!e._yoyo||!e._repeat)&&e._yoyo!==i&&(e.timeline?s(e.timeline,i):(r=e._ease,e._ease=e._yEase,e._yEase=r,e._yoyo=i)),e=e._next},Vi=function(t,i){return t&&(_t(t)?t:J[t]||ch(t))||i},Zi=function(t,i,e,r){e===void 0&&(e=function(l){return 1-i(1-l)}),r===void 0&&(r=function(l){return l<.5?i(l*2)/2:1-i((1-l)*2)/2});var n={easeIn:i,easeOut:e,easeInOut:r},o;return ce(t,function(a){J[a]=ke[a]=n,J[o=a.toLowerCase()]=e;for(var l in n)J[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=J[a+"."+l]=n[l]}),n},Fa=function(t){return function(i){return i<.5?(1-t(1-i*2))/2:.5+t((i-.5)*2)/2}},es=function s(t,i,e){var r=i>=1?i:1,n=(e||(t?.3:.45))/(i<1?i:1),o=n/ps*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Bl((c-o)*n)+1},l=t==="out"?a:t==="in"?function(h){return 1-a(1-h)}:Fa(a);return n=ps/n,l.config=function(h,c){return s(t,h,c)},l},is=function s(t,i){i===void 0&&(i=1.70158);var e=function(o){return o?--o*o*((i+1)*o+i)+1:0},r=t==="out"?e:t==="in"?function(n){return 1-e(1-n)}:Fa(e);return r.config=function(n){return s(t,n)},r};ce("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var i=t<5?t+1:t;Zi(s+",Power"+(i-1),t?function(e){return Math.pow(e,i)}:function(e){return e},function(e){return 1-Math.pow(1-e,i)},function(e){return e<.5?Math.pow(e*2,i)/2:1-Math.pow((1-e)*2,i)/2})});J.Linear.easeNone=J.none=J.Linear.easeIn;Zi("Elastic",es("in"),es("out"),es());(function(s,t){var i=1/t,e=2*i,r=2.5*i,n=function(a){return a<i?s*a*a:a<e?s*Math.pow(a-1.5/t,2)+.75:a<r?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};Zi("Bounce",function(o){return 1-n(1-o)},n)})(7.5625,2.75);Zi("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});Zi("Circ",function(s){return-(oa(1-s*s)-1)});Zi("Sine",function(s){return s===1?1:-Fl(s*Ll)+1});Zi("Back",is("in"),is("out"),is());J.SteppedEase=J.steps=ke.SteppedEase={config:function(t,i){t===void 0&&(t=1);var e=1/t,r=t+(i?0:1),n=i?1:0,o=1-st;return function(a){return((r*ln(0,o,a)|0)+n)*e}}};br.ease=J["quad.out"];ce("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Gs+=s+","+s+"Params,"});var Ba=function(t,i){this.id=Nl++,t._gsap=this,this.target=t,this.harness=i,this.get=i?i.get:ga,this.set=i?i.getSetter:to},rn=function(){function s(i){this.vars=i,this._delay=+i.delay||0,(this._repeat=i.repeat===1/0?-2:i.repeat||0)&&(this._rDelay=i.repeatDelay||0,this._yoyo=!!i.yoyo||!!i.yoyoEase),this._ts=1,xr(this,+i.duration,1,1),this.data=i.data,ct&&(this._ctx=ct,ct.data.push(this)),en||xe.wake()}var t=s.prototype;return t.delay=function(e){return e||e===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+e-this._delay),this._delay=e,this):this._delay},t.duration=function(e){return arguments.length?this.totalDuration(this._repeat>0?e+(e+this._rDelay)*this._repeat:e):this.totalDuration()&&this._dur},t.totalDuration=function(e){return arguments.length?(this._dirty=0,xr(this,this._repeat<0?e:(e-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(e,r){if(wr(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(jn(this,e),!n._dp||n.parent||ya(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&e<this._tDur||this._ts<0&&e>0||!this._tDur&&!e)&&$e(this._dp,this,this._start-this._delay)}return(this._tTime!==e||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===st||!e&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=e),_a(this,e,r)),this},t.time=function(e,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),e+bo(this))%(this._dur+this._rDelay)||(e?this._dur:0),r):this._time},t.totalProgress=function(e,r){return arguments.length?this.totalTime(this.totalDuration()*e,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(e,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-e:e)+bo(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(e,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(e-1)*n,r):this._repeat?yr(this._tTime,n)+1:1},t.timeScale=function(e,r){if(!arguments.length)return this._rts===-st?0:this._rts;if(this._rts===e)return this;var n=this.parent&&this._ts?Fn(this.parent._time,this):this._tTime;return this._rts=+e||0,this._ts=this._ps||e===-st?0:this._rts,this.totalTime(ln(-Math.abs(this._delay),this.totalDuration(),n),r!==!1),Gn(this),Ul(this)},t.paused=function(e){return arguments.length?(this._ps!==e&&(this._ps=e,e?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(wr(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==st&&(this._tTime-=st)))),this):this._ps},t.startTime=function(e){if(arguments.length){this._start=e;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&$e(r,this,e-this._delay),this}return this._start},t.endTime=function(e){return this._start+(he(e)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(e){var r=this.parent||this._dp;return r?e&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fn(r.rawTime(e),this):this._tTime:this._tTime},t.revert=function(e){e===void 0&&(e=Hl);var r=Wt;return Wt=e,Ks(this)&&(this.timeline&&this.timeline.revert(e),this.totalTime(-.01,e.suppressEvents)),this.data!=="nested"&&e.kill!==!1&&this.kill(),Wt=r,this},t.globalTime=function(e){for(var r=this,n=arguments.length?e:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(e):n},t.repeat=function(e){return arguments.length?(this._repeat=e===1/0?-2:e,vo(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(e){if(arguments.length){var r=this._time;return this._rDelay=e,vo(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(e){return arguments.length?(this._yoyo=e,this):this._yoyo},t.seek=function(e,r){return this.totalTime(Ee(this,e),he(r))},t.restart=function(e,r){return this.play().totalTime(e?-this._delay:0,he(r)),this._dur||(this._zTime=-st),this},t.play=function(e,r){return e!=null&&this.seek(e,r),this.reversed(!1).paused(!1)},t.reverse=function(e,r){return e!=null&&this.seek(e||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(e,r){return e!=null&&this.seek(e,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(e){return arguments.length?(!!e!==this.reversed()&&this.timeScale(-this._rts||(e?-st:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-st,this},t.isActive=function(){var e=this.parent||this._dp,r=this._start,n;return!!(!e||this._ts&&this._initted&&e.isActive()&&(n=e.rawTime(!0))>=r&&n<this.endTime(!0)-st)},t.eventCallback=function(e,r,n){var o=this.vars;return arguments.length>1?(r?(o[e]=r,n&&(o[e+"Params"]=n),e==="onUpdate"&&(this._onUpdate=r)):delete o[e],this):o[e]},t.then=function(e){var r=this;return new Promise(function(n){var o=_t(e)?e:ba,a=function(){var h=r.then;r.then=null,_t(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=h),n(o),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},t.kill=function(){Dr(this)},s}();Ce(rn.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-st,_prom:0,_ps:!1,_rts:1});var ne=function(s){sa(t,s);function t(e,r){var n;return e===void 0&&(e={}),n=s.call(this,e)||this,n.labels={},n.smoothChildTiming=!!e.smoothChildTiming,n.autoRemoveChildren=!!e.autoRemoveChildren,n._sort=he(e.sortChildren),ft&&$e(e.parent||ft,ii(n),r),e.reversed&&n.reverse(),e.paused&&n.paused(!0),e.scrollTrigger&&xa(ii(n),e.scrollTrigger),n}var i=t.prototype;return i.to=function(r,n,o){return Hr(0,arguments,this),this},i.from=function(r,n,o){return Hr(1,arguments,this),this},i.fromTo=function(r,n,o,a){return Hr(2,arguments,this),this},i.set=function(r,n,o){return n.duration=0,n.parent=this,Wr(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new kt(r,n,Ee(this,o),1),this},i.call=function(r,n,o){return $e(this,kt.delayedCall(0,r,n),o)},i.staggerTo=function(r,n,o,a,l,h,c){return o.duration=n,o.stagger=o.stagger||a,o.onComplete=h,o.onCompleteParams=c,o.parent=this,new kt(r,o,Ee(this,l)),this},i.staggerFrom=function(r,n,o,a,l,h,c){return o.runBackwards=1,Wr(o).immediateRender=he(o.immediateRender),this.staggerTo(r,n,o,a,l,h,c)},i.staggerFromTo=function(r,n,o,a,l,h,c,f){return a.startAt=o,Wr(a).immediateRender=he(a.immediateRender),this.staggerTo(r,n,a,l,h,c,f)},i.render=function(r,n,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,h=this._dur,c=r<=0?0:Ct(r),f=this._zTime<0!=r<0&&(this._initted||!h),d,u,g,p,m,w,x,k,v,b,S,T;if(this!==ft&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&h&&(c+=this._time-a,r+=this._time-a),d=c,v=this._start,k=this._ts,w=!k,f&&(h||(a=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(S=this._yoyo,m=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,n,o);if(d=Ct(c%m),c===l?(p=this._repeat,d=h):(b=Ct(c/m),p=~~b,p&&p===b&&(d=h,p--),d>h&&(d=h)),b=yr(this._tTime,m),!a&&this._tTime&&b!==p&&this._tTime-b*m-this._dur<=0&&(b=p),S&&p&1&&(d=h-d,T=1),p!==b&&!this._lock){var C=S&&b&1,P=C===(S&&p&1);if(p<b&&(C=!C),a=C?0:c%h?h:c,this._lock=1,this.render(a||(T?0:Ct(p*m)),n,!h)._lock=0,this._tTime=c,!n&&this.parent&&Te(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1),a&&a!==this._time||w!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,l=this._tDur,P&&(this._lock=2,a=C?h:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!w)return this;Na(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=jl(this,Ct(a),Ct(d)),x&&(c-=d-(d=x._start))),this._tTime=c,this._time=d,this._act=!k,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&c&&!n&&!b&&(Te(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(u=this._first;u;){if(g=u._next,(u._act||d>=u._start)&&u._ts&&x!==u){if(u.parent!==this)return this.render(r,n,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,n,o),d!==this._time||!this._ts&&!w){x=0,g&&(c+=this._zTime=-st);break}}u=g}else{u=this._last;for(var E=r<0?r:d;u;){if(g=u._prev,(u._act||E<=u._end)&&u._ts&&x!==u){if(u.parent!==this)return this.render(r,n,o);if(u.render(u._ts>0?(E-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(E-u._start)*u._ts,n,o||Wt&&Ks(u)),d!==this._time||!this._ts&&!w){x=0,g&&(c+=this._zTime=E?-st:st);break}}u=g}}if(x&&!n&&(this.pause(),x.render(d>=a?0:-st)._zTime=d>=a?1:-1,this._ts))return this._start=v,Gn(this),this.render(r,n,o);this._onUpdate&&!n&&Te(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(v===this._start||Math.abs(k)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(c===l&&this._ts>0||!c&&this._ts<0)&&ki(this,1),!n&&!(r<0&&!a)&&(c||a||!l)&&(Te(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},i.add=function(r,n){var o=this;if(ai(n)||(n=Ee(this,n,r)),!(r instanceof rn)){if(Kt(r))return r.forEach(function(a){return o.add(a,n)}),this;if(Lt(r))return this.addLabel(r,n);if(_t(r))r=kt.delayedCall(0,r);else return this}return this!==r?$e(this,r,n):this},i.getChildren=function(r,n,o,a){r===void 0&&(r=!0),n===void 0&&(n=!0),o===void 0&&(o=!0),a===void 0&&(a=-ze);for(var l=[],h=this._first;h;)h._start>=a&&(h instanceof kt?n&&l.push(h):(o&&l.push(h),r&&l.push.apply(l,h.getChildren(!0,n,o)))),h=h._next;return l},i.getById=function(r){for(var n=this.getChildren(1,1,1),o=n.length;o--;)if(n[o].vars.id===r)return n[o]},i.remove=function(r){return Lt(r)?this.removeLabel(r):_t(r)?this.killTweensOf(r):(r.parent===this&&qn(this,r),r===this._recent&&(this._recent=this._last),Yi(this))},i.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ct(xe.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),s.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},i.addLabel=function(r,n){return this.labels[r]=Ee(this,n),this},i.removeLabel=function(r){return delete this.labels[r],this},i.addPause=function(r,n,o){var a=kt.delayedCall(0,n||Jr,o);return a.data="isPause",this._hasPause=1,$e(this,a,Ee(this,r))},i.removePause=function(r){var n=this._first;for(r=Ee(this,r);n;)n._start===r&&n.data==="isPause"&&ki(n),n=n._next},i.killTweensOf=function(r,n,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)mi!==a[l]&&a[l].kill(r,n);return this},i.getTweensOf=function(r,n){for(var o=[],a=Re(r),l=this._first,h=ai(n),c;l;)l instanceof kt?Yl(l._targets,a)&&(h?(!mi||l._initted&&l._ts)&&l.globalTime(0)<=n&&l.globalTime(l.totalDuration())>n:!n||l.isActive())&&o.push(l):(c=l.getTweensOf(a,n)).length&&o.push.apply(o,c),l=l._next;return o},i.tweenTo=function(r,n){n=n||{};var o=this,a=Ee(o,r),l=n,h=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,u,g=kt.to(o,Ce({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:n.duration||Math.abs((a-(h&&"time"in h?h.time:o._time))/o.timeScale())||st,onStart:function(){if(o.pause(),!u){var m=n.duration||Math.abs((a-(h&&"time"in h?h.time:o._time))/o.timeScale());g._dur!==m&&xr(g,m,0,1).render(g._time,!0,!0),u=1}c&&c.apply(g,f||[])}},n));return d?g.render(0):g},i.tweenFromTo=function(r,n,o){return this.tweenTo(n,Ce({startAt:{time:Ee(this,r)}},o))},i.recent=function(){return this._recent},i.nextLabel=function(r){return r===void 0&&(r=this._time),yo(this,Ee(this,r))},i.previousLabel=function(r){return r===void 0&&(r=this._time),yo(this,Ee(this,r),1)},i.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+st)},i.shiftChildren=function(r,n,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,h;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(n)for(h in l)l[h]>=o&&(l[h]+=r);return Yi(this)},i.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return s.prototype.invalidate.call(this,r)},i.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,o;n;)o=n._next,this.remove(n),n=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Yi(this)},i.totalDuration=function(r){var n=0,o=this,a=o._last,l=ze,h,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)h=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$e(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(n-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>n&&a._ts&&(n=a._end),a=h;xr(o,o===ft&&o._time>n?o._time:n,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(r){if(ft._ts&&(_a(ft,Fn(r,ft)),pa=xe.frame),xe.frame>=_o){_o+=Se.autoSleep||120;var n=ft._first;if((!n||!n._ts)&&Se.autoSleep&&xe._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||xe.sleep()}}},t}(rn);Ce(ne.prototype,{_lock:0,_hasPause:0,_forcing:0});var uh=function(t,i,e,r,n,o,a){var l=new ue(this._pt,t,i,0,1,Xa,null,n),h=0,c=0,f,d,u,g,p,m,w,x;for(l.b=e,l.e=r,e+="",r+="",(w=~r.indexOf("random("))&&(r=tn(r)),o&&(x=[e,r],o(x,t,i),e=x[0],r=x[1]),d=e.match(Zn)||[];f=Zn.exec(r);)g=f[0],p=r.substring(h,f.index),u?u=(u+1)%5:p.substr(-5)==="rgba("&&(u=1),g!==d[c++]&&(m=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:p||c===1?p:",",s:m,c:g.charAt(1)==="="?fr(m,g)-m:parseFloat(g)-m,m:u&&u<4?Math.round:0},h=Zn.lastIndex);return l.c=h<r.length?r.substring(h,r.length):"",l.fp=a,(ha.test(r)||w)&&(l.e=0),this._pt=l,l},Qs=function(t,i,e,r,n,o,a,l,h,c){_t(r)&&(r=r(n||0,t,o));var f=t[i],d=e!=="get"?e:_t(f)?h?t[i.indexOf("set")||!_t(t["get"+i.substr(3)])?i:"get"+i.substr(3)](h):t[i]():f,u=_t(f)?h?_h:Ya:Js,g;if(Lt(r)&&(~r.indexOf("random(")&&(r=tn(r)),r.charAt(1)==="="&&(g=fr(d,r)+(Gt(d)||0),(g||g===0)&&(r=g))),!c||d!==r||Ts)return!isNaN(d*r)&&r!==""?(g=new ue(this._pt,t,i,+d||0,r-(d||0),typeof f=="boolean"?bh:Va,0,u),h&&(g.fp=h),a&&g.modifier(a,this,t),this._pt=g):(!f&&!(i in t)&&$s(i,r),uh.call(this,t,i,d,r,u,l||Se.stringFilter,h))},fh=function(t,i,e,r,n){if(_t(t)&&(t=Yr(t,n,i,e,r)),!Ke(t)||t.style&&t.nodeType||Kt(t)||aa(t))return Lt(t)?Yr(t,n,i,e,r):t;var o={},a;for(a in t)o[a]=Yr(t[a],n,i,e,r);return o},Ia=function(t,i,e,r,n,o){var a,l,h,c;if(ve[t]&&(a=new ve[t]).init(n,a.rawVars?i[t]:fh(i[t],r,n,o,e),e,r,o)!==!1&&(e._pt=l=new ue(e._pt,n,t,0,1,a.render,a,0,a.priority),e!==cr))for(h=e._ptLookup[e._targets.indexOf(n)],c=a._props.length;c--;)h[a._props[c]]=l;return a},mi,Ts,Zs=function s(t,i,e){var r=t.vars,n=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,h=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,d=r.keyframes,u=r.autoRevert,g=t._dur,p=t._startAt,m=t._targets,w=t.parent,x=w&&w.data==="nested"?w.vars.targets:m,k=t._overwrite==="auto"&&!Ys,v=t.timeline,b,S,T,C,P,E,N,O,R,B,W,I,D;if(v&&(!d||!n)&&(n="none"),t._ease=Vi(n,br.ease),t._yEase=f?La(Vi(f===!0?n:f,br.ease)):0,f&&t._yoyo&&!t._repeat&&(f=t._yEase,t._yEase=t._ease,t._ease=f),t._from=!v&&!!r.runBackwards,!v||d&&!r.stagger){if(O=m[0]?Hi(m[0]).harness:0,I=O&&r[O.prop],b=Nn(r,qs),p&&(p._zTime<0&&p.progress(1),i<0&&c&&a&&!u?p.render(-1,!0):p.revert(c&&g?kn:Wl),p._lazy=0),o){if(ki(t._startAt=kt.set(m,Ce({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!p&&he(l),startAt:null,delay:0,onUpdate:h&&function(){return Te(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,i<0&&(Wt||!a&&!u)&&t._startAt.revert(kn),a&&g&&i<=0&&e<=0){i&&(t._zTime=i);return}}else if(c&&g&&!p){if(i&&(a=!1),T=Ce({overwrite:!1,data:"isFromStart",lazy:a&&!p&&he(l),immediateRender:a,stagger:0,parent:w},b),I&&(T[O.prop]=I),ki(t._startAt=kt.set(m,T)),t._startAt._dp=0,t._startAt._sat=t,i<0&&(Wt?t._startAt.revert(kn):t._startAt.render(-1,!0)),t._zTime=i,!a)s(t._startAt,st,st);else if(!i)return}for(t._pt=t._ptCache=0,l=g&&he(l)||l&&!g,S=0;S<m.length;S++){if(P=m[S],N=P._gsap||js(m)[S]._gsap,t._ptLookup[S]=B={},ms[N.id]&&wi.length&&Ln(),W=x===m?S:x.indexOf(P),O&&(R=new O).init(P,I||b,t,W,x)!==!1&&(t._pt=C=new ue(t._pt,P,R.name,0,1,R.render,R,0,R.priority),R._props.forEach(function(U){B[U]=C}),R.priority&&(E=1)),!O||I)for(T in b)ve[T]&&(R=Ia(T,b,t,W,P,x))?R.priority&&(E=1):B[T]=C=Qs.call(t,P,T,"get",b[T],W,x,0,r.stringFilter);t._op&&t._op[S]&&t.kill(P,t._op[S]),k&&t._pt&&(mi=t,ft.killTweensOf(P,B,t.globalTime(i)),D=!t.parent,mi=0),t._pt&&l&&(ms[N.id]=1)}E&&Ua(t),t._onInit&&t._onInit(t)}t._onUpdate=h,t._initted=(!t._op||t._pt)&&!D,d&&i<=0&&v.render(ze,!0,!0)},dh=function(t,i,e,r,n,o,a,l){var h=(t._pt&&t._ptCache||(t._ptCache={}))[i],c,f,d,u;if(!h)for(h=t._ptCache[i]=[],d=t._ptLookup,u=t._targets.length;u--;){if(c=d[u][i],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==i&&c.fp!==i;)c=c._next;if(!c)return Ts=1,t.vars[i]="+=0",Zs(t,a),Ts=0,l?Zr(i+" not eligible for reset"):1;h.push(c)}for(u=h.length;u--;)f=h[u],c=f._pt||f,c.s=(r||r===0)&&!n?r:c.s+(r||0)+o*c.c,c.c=e-c.s,f.e&&(f.e=yt(e)+Gt(f.e)),f.b&&(f.b=c.s+Gt(f.b))},ph=function(t,i){var e=t[0]?Hi(t[0]).harness:0,r=e&&e.aliases,n,o,a,l;if(!r)return i;n=vr({},i);for(o in r)if(o in n)for(l=r[o].split(","),a=l.length;a--;)n[l[a]]=n[o];return n},gh=function(t,i,e,r){var n=i.ease||r||"power1.inOut",o,a;if(Kt(i))a=e[t]||(e[t]=[]),i.forEach(function(l,h){return a.push({t:h/(i.length-1)*100,v:l,e:n})});else for(o in i)a=e[o]||(e[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:i[o],e:n})},Yr=function(t,i,e,r,n){return _t(t)?t.call(i,e,r,n):Lt(t)&&~t.indexOf("random(")?tn(t):t},Wa=Gs+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Ha={};ce(Wa+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Ha[s]=1});var kt=function(s){sa(t,s);function t(e,r,n,o){var a;typeof r=="number"&&(n.duration=r,r=n,n=null),a=s.call(this,o?r:Wr(r))||this;var l=a.vars,h=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,u=l.overwrite,g=l.keyframes,p=l.defaults,m=l.scrollTrigger,w=l.yoyoEase,x=r.parent||ft,k=(Kt(e)||aa(e)?ai(e[0]):"length"in r)?[e]:Re(e),v,b,S,T,C,P,E,N;if(a._targets=k.length?js(k):Zr("GSAP target "+e+" not found. https://gsap.com",!Se.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,g||d||fn(h)||fn(c)){if(r=a.vars,v=a.timeline=new ne({data:"nested",defaults:p||{},targets:x&&x.data==="nested"?x.vars.targets:k}),v.kill(),v.parent=v._dp=ii(a),v._start=0,d||fn(h)||fn(c)){if(T=k.length,E=d&&ka(d),Ke(d))for(C in d)~Wa.indexOf(C)&&(N||(N={}),N[C]=d[C]);for(b=0;b<T;b++)S=Nn(r,Ha),S.stagger=0,w&&(S.yoyoEase=w),N&&vr(S,N),P=k[b],S.duration=+Yr(h,ii(a),b,P,k),S.delay=(+Yr(c,ii(a),b,P,k)||0)-a._delay,!d&&T===1&&S.delay&&(a._delay=c=S.delay,a._start+=c,S.delay=0),v.to(P,S,E?E(b,P,k):0),v._ease=J.none;v.duration()?h=c=0:a.timeline=0}else if(g){Wr(Ce(v.vars.defaults,{ease:"none"})),v._ease=Vi(g.ease||r.ease||"none");var O=0,R,B,W;if(Kt(g))g.forEach(function(I){return v.to(k,I,">")}),v.duration();else{S={};for(C in g)C==="ease"||C==="easeEach"||gh(C,g[C],S,g.easeEach);for(C in S)for(R=S[C].sort(function(I,D){return I.t-D.t}),O=0,b=0;b<R.length;b++)B=R[b],W={ease:B.e,duration:(B.t-(b?R[b-1].t:0))/100*h},W[C]=B.v,v.to(k,W,O),O+=W.duration;v.duration()<h&&v.to({},{duration:h-v.duration()})}}h||a.duration(h=v.duration())}else a.timeline=0;return u===!0&&!Ys&&(mi=ii(a),ft.killTweensOf(k),mi=0),$e(x,ii(a),n),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!h&&!g&&a._start===Ct(x._time)&&he(f)&&$l(ii(a))&&x.data!=="nested")&&(a._tTime=-st,a.render(Math.max(0,-c)||0)),m&&xa(ii(a),m),a}var i=t.prototype;return i.render=function(r,n,o){var a=this._time,l=this._tDur,h=this._dur,c=r<0,f=r>l-st&&!c?l:r<st?0:r,d,u,g,p,m,w,x,k,v;if(!h)Gl(this,r,n,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=f,k=this.timeline,this._repeat){if(p=h+this._rDelay,this._repeat<-1&&c)return this.totalTime(p*100+r,n,o);if(d=Ct(f%p),f===l?(g=this._repeat,d=h):(m=Ct(f/p),g=~~m,g&&g===m?(d=h,g--):d>h&&(d=h)),w=this._yoyo&&g&1,w&&(v=this._yEase,d=h-d),m=yr(this._tTime,p),d===a&&!o&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(k&&this._yEase&&Na(k,w),this.vars.repeatRefresh&&!w&&!this._lock&&d!==p&&this._initted&&(this._lock=o=1,this.render(Ct(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(wa(this,c?r:d,o,n,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(h!==this._dur)return this.render(r,n,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(v||this._ease)(d/h),this._from&&(this.ratio=x=1-x),!a&&f&&!n&&!m&&(Te(this,"onStart"),this._tTime!==f))return this;for(u=this._pt;u;)u.r(x,u.d),u=u._next;k&&k.render(r<0?r:k._dur*k._ease(d/this._dur),n,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(c&&bs(this,r,n,o),Te(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!n&&this.parent&&Te(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&bs(this,r,!0,!0),(r||!h)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&ki(this,1),!n&&!(c&&!a)&&(f||a||w)&&(Te(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},i.targets=function(){return this._targets},i.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),s.prototype.invalidate.call(this,r)},i.resetTo=function(r,n,o,a,l){en||xe.wake(),this._ts||this.play();var h=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Zs(this,h),c=this._ease(h/this._dur),dh(this,r,n,o,a,c,h,l)?this.resetTo(r,n,o,a,1):(jn(this,0),this.parent||va(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},i.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?Dr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Wt),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,mi&&mi.vars.overwrite!==!0)._first||Dr(this),this.parent&&o!==this.timeline.totalDuration()&&xr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Re(r):a,h=this._ptLookup,c=this._pt,f,d,u,g,p,m,w;if((!n||n==="all")&&Xl(a,l))return n==="all"&&(this._pt=0),Dr(this);for(f=this._op=this._op||[],n!=="all"&&(Lt(n)&&(p={},ce(n,function(x){return p[x]=1}),n=p),n=ph(a,n)),w=a.length;w--;)if(~l.indexOf(a[w])){d=h[w],n==="all"?(f[w]=n,g=d,u={}):(u=f[w]=f[w]||{},g=n);for(p in g)m=d&&d[p],m&&((!("kill"in m.d)||m.d.kill(p)===!0)&&qn(this,m,"_pt"),delete d[p]),u!=="all"&&(u[p]=1)}return this._initted&&!this._pt&&c&&Dr(this),this},t.to=function(r,n){return new t(r,n,arguments[2])},t.from=function(r,n){return Hr(1,arguments)},t.delayedCall=function(r,n,o,a){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(r,n,o){return Hr(2,arguments)},t.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(r,n)},t.killTweensOf=function(r,n,o){return ft.killTweensOf(r,n,o)},t}(rn);Ce(kt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});ce("staggerTo,staggerFrom,staggerFromTo",function(s){kt[s]=function(){var t=new ne,i=ys.call(arguments,0);return i.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,i)}});var Js=function(t,i,e){return t[i]=e},Ya=function(t,i,e){return t[i](e)},_h=function(t,i,e,r){return t[i](r.fp,e)},mh=function(t,i,e){return t.setAttribute(i,e)},to=function(t,i){return _t(t[i])?Ya:Vs(t[i])&&t.setAttribute?mh:Js},Va=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e6)/1e6,i)},bh=function(t,i){return i.set(i.t,i.p,!!(i.s+i.c*t),i)},Xa=function(t,i){var e=i._pt,r="";if(!t&&i.b)r=i.b;else if(t===1&&i.e)r=i.e;else{for(;e;)r=e.p+(e.m?e.m(e.s+e.c*t):Math.round((e.s+e.c*t)*1e4)/1e4)+r,e=e._next;r+=i.c}i.set(i.t,i.p,r,i)},eo=function(t,i){for(var e=i._pt;e;)e.r(t,e.d),e=e._next},vh=function(t,i,e,r){for(var n=this._pt,o;n;)o=n._next,n.p===r&&n.modifier(t,i,e),n=o},yh=function(t){for(var i=this._pt,e,r;i;)r=i._next,i.p===t&&!i.op||i.op===t?qn(this,i,"_pt"):i.dep||(e=1),i=r;return!e},xh=function(t,i,e,r){r.mSet(t,i,r.m.call(r.tween,e,r.mt),r)},Ua=function(t){for(var i=t._pt,e,r,n,o;i;){for(e=i._next,r=n;r&&r.pr>i.pr;)r=r._next;(i._prev=r?r._prev:o)?i._prev._next=i:n=i,(i._next=r)?r._prev=i:o=i,i=e}t._pt=n},ue=function(){function s(i,e,r,n,o,a,l,h,c){this.t=e,this.s=n,this.c=o,this.p=r,this.r=a||Va,this.d=l||this,this.set=h||Js,this.pr=c||0,this._next=i,i&&(i._prev=this)}var t=s.prototype;return t.modifier=function(e,r,n){this.mSet=this.mSet||this.set,this.set=xh,this.m=e,this.mt=n,this.tween=r},s}();ce(Gs+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(s){return qs[s]=1});ke.TweenMax=ke.TweenLite=kt;ke.TimelineLite=ke.TimelineMax=ne;ft=new ne({sortChildren:!1,defaults:br,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Se.stringFilter=Aa;var Xi=[],Pn={},wh=[],wo=0,Th=0,rs=function(t){return(Pn[t]||wh).map(function(i){return i()})},Ss=function(){var t=Date.now(),i=[];t-wo>2&&(rs("matchMediaInit"),Xi.forEach(function(e){var r=e.queries,n=e.conditions,o,a,l,h;for(a in r)o=Xe.matchMedia(r[a]).matches,o&&(l=1),o!==n[a]&&(n[a]=o,h=1);h&&(e.revert(),l&&i.push(e))}),rs("matchMediaRevert"),i.forEach(function(e){return e.onMatch(e,function(r){return e.add(null,r)})}),wo=t,rs("matchMedia"))},$a=function(){function s(i,e){this.selector=e&&xs(e),this.data=[],this._r=[],this.isReverted=!1,this.id=Th++,i&&this.add(i)}var t=s.prototype;return t.add=function(e,r,n){_t(e)&&(n=r,r=e,e=_t);var o=this,a=function(){var h=ct,c=o.selector,f;return h&&h!==o&&h.data.push(o),n&&(o.selector=xs(n)),ct=o,f=r.apply(o,arguments),_t(f)&&o._r.push(f),ct=h,o.selector=c,o.isReverted=!1,f};return o.last=a,e===_t?a(o,function(l){return o.add(null,l)}):e?o[e]=a:a},t.ignore=function(e){var r=ct;ct=null,e(this),ct=r},t.getTweens=function(){var e=[];return this.data.forEach(function(r){return r instanceof s?e.push.apply(e,r.getTweens()):r instanceof kt&&!(r.parent&&r.parent.data==="nested")&&e.push(r)}),e},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(e,r){var n=this;if(e?function(){for(var a=n.getTweens(),l=n.data.length,h;l--;)h=n.data[l],h.data==="isFlip"&&(h.revert(),h.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(e)}),l=n.data.length;l--;)h=n.data[l],h instanceof ne?h.data!=="nested"&&(h.scrollTrigger&&h.scrollTrigger.revert(),h.kill()):!(h instanceof kt)&&h.revert&&h.revert(e);n._r.forEach(function(c){return c(e,n)}),n.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Xi.length;o--;)Xi[o].id===this.id&&Xi.splice(o,1)},t.revert=function(e){this.kill(e||{})},s}(),Sh=function(){function s(i){this.contexts=[],this.scope=i,ct&&ct.data.push(this)}var t=s.prototype;return t.add=function(e,r,n){Ke(e)||(e={matches:e});var o=new $a(0,n||this.scope),a=o.conditions={},l,h,c;ct&&!o.selector&&(o.selector=ct.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=e;for(h in e)h==="all"?c=1:(l=Xe.matchMedia(e[h]),l&&(Xi.indexOf(o)<0&&Xi.push(o),(a[h]=l.matches)&&(c=1),l.addListener?l.addListener(Ss):l.addEventListener("change",Ss)));return c&&r(o,function(f){return o.add(null,f)}),this},t.revert=function(e){this.kill(e||{})},t.kill=function(e){this.contexts.forEach(function(r){return r.kill(e,!0)})},s}(),Bn={registerPlugin:function(){for(var t=arguments.length,i=new Array(t),e=0;e<t;e++)i[e]=arguments[e];i.forEach(function(r){return za(r)})},timeline:function(t){return new ne(t)},getTweensOf:function(t,i){return ft.getTweensOf(t,i)},getProperty:function(t,i,e,r){Lt(t)&&(t=Re(t)[0]);var n=Hi(t||{}).get,o=e?ba:ma;return e==="native"&&(e=""),t&&(i?o((ve[i]&&ve[i].get||n)(t,i,e,r)):function(a,l,h){return o((ve[a]&&ve[a].get||n)(t,a,l,h))})},quickSetter:function(t,i,e){if(t=Re(t),t.length>1){var r=t.map(function(c){return de.quickSetter(c,i,e)}),n=r.length;return function(c){for(var f=n;f--;)r[f](c)}}t=t[0]||{};var o=ve[i],a=Hi(t),l=a.harness&&(a.harness.aliases||{})[i]||i,h=o?function(c){var f=new o;cr._pt=0,f.init(t,e?c+e:c,cr,0,[t]),f.render(1,f),cr._pt&&eo(1,cr)}:a.set(t,l);return o?h:function(c){return h(t,l,e?c+e:c,a,1)}},quickTo:function(t,i,e){var r,n=de.to(t,Ce((r={},r[i]="+=0.1",r.paused=!0,r.stagger=0,r),e||{})),o=function(l,h,c){return n.resetTo(i,l,h,c)};return o.tween=n,o},isTweening:function(t){return ft.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Vi(t.ease,br.ease)),mo(br,t||{})},config:function(t){return mo(Se,t||{})},registerEffect:function(t){var i=t.name,e=t.effect,r=t.plugins,n=t.defaults,o=t.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!ve[a]&&!ke[a]&&Zr(i+" effect requires "+a+" plugin.")}),Jn[i]=function(a,l,h){return e(Re(a),Ce(l||{},n),h)},o&&(ne.prototype[i]=function(a,l,h){return this.add(Jn[i](a,Ke(l)?l:(h=l)&&{},this),h)})},registerEase:function(t,i){J[t]=Vi(i)},parseEase:function(t,i){return arguments.length?Vi(t,i):J},getById:function(t){return ft.getById(t)},exportRoot:function(t,i){t===void 0&&(t={});var e=new ne(t),r,n;for(e.smoothChildTiming=he(t.smoothChildTiming),ft.remove(e),e._dp=0,e._time=e._tTime=ft._time,r=ft._first;r;)n=r._next,(i||!(!r._dur&&r instanceof kt&&r.vars.onComplete===r._targets[0]))&&$e(e,r,r._start-r._delay),r=n;return $e(ft,e,0),e},context:function(t,i){return t?new $a(t,i):ct},matchMedia:function(t){return new Sh(t)},matchMediaRefresh:function(){return Xi.forEach(function(t){var i=t.conditions,e,r;for(r in i)i[r]&&(i[r]=!1,e=1);e&&t.revert()})||Ss()},addEventListener:function(t,i){var e=Pn[t]||(Pn[t]=[]);~e.indexOf(i)||e.push(i)},removeEventListener:function(t,i){var e=Pn[t],r=e&&e.indexOf(i);r>=0&&e.splice(r,1)},utils:{wrap:ih,wrapYoyo:rh,distribute:ka,random:Pa,snap:Ca,normalize:eh,getUnit:Gt,clamp:Ql,splitColor:Ra,toArray:Re,selector:xs,mapRange:Oa,pipe:Jl,unitize:th,interpolate:nh,shuffle:Sa},install:fa,effects:Jn,ticker:xe,updateRoot:ne.updateRoot,plugins:ve,globalTimeline:ft,core:{PropTween:ue,globals:da,Tween:kt,Timeline:ne,Animation:rn,getCache:Hi,_removeLinkedListItem:qn,reverting:function(){return Wt},context:function(t){return t&&ct&&(ct.data.push(t),t._ctx=ct),ct},suppressOverwrites:function(t){return Ys=t}}};ce("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Bn[s]=kt[s]});xe.add(ne.updateRoot);cr=Bn.to({},{duration:0});var kh=function(t,i){for(var e=t._pt;e&&e.p!==i&&e.op!==i&&e.fp!==i;)e=e._next;return e},Ch=function(t,i){var e=t._targets,r,n,o;for(r in i)for(n=e.length;n--;)o=t._ptLookup[n][r],o&&(o=o.d)&&(o._pt&&(o=kh(o,r)),o&&o.modifier&&o.modifier(i[r],t,e[n],r))},ns=function(t,i){return{name:t,headless:1,rawVars:1,init:function(r,n,o){o._onInit=function(a){var l,h;if(Lt(n)&&(l={},ce(n,function(c){return l[c]=1}),n=l),i){l={};for(h in n)l[h]=i(n[h]);n=l}Ch(a,n)}}}},de=Bn.registerPlugin({name:"attr",init:function(t,i,e,r,n){var o,a,l;this.tween=e;for(o in i)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",i[o],r,n,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,i){for(var e=i._pt;e;)Wt?e.set(e.t,e.p,e.b,e):e.r(t,e.d),e=e._next}},{name:"endArray",headless:1,init:function(t,i){for(var e=i.length;e--;)this.add(t,e,t[e]||0,i[e],0,0,0,0,0,1)}},ns("roundProps",ws),ns("modifiers"),ns("snap",Ca))||Bn;kt.version=ne.version=de.version="3.13.0";ua=1;Xs()&&wr();J.Power0;J.Power1;J.Power2;J.Power3;J.Power4;J.Linear;J.Quad;J.Cubic;J.Quart;J.Quint;J.Strong;J.Elastic;J.Back;J.SteppedEase;J.Bounce;J.Sine;J.Expo;J.Circ;/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var To,bi,dr,io,Ii,So,ro,Ph=function(){return typeof window<"u"},li={},Ni=180/Math.PI,pr=Math.PI/180,ir=Math.atan2,ko=1e8,no=/([A-Z])/g,Eh=/(left|right|width|margin|padding|x)/i,Oh=/[\s,\(]\S/,qe={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ks=function(t,i){return i.set(i.t,i.p,Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},Mh=function(t,i){return i.set(i.t,i.p,t===1?i.e:Math.round((i.s+i.c*t)*1e4)/1e4+i.u,i)},zh=function(t,i){return i.set(i.t,i.p,t?Math.round((i.s+i.c*t)*1e4)/1e4+i.u:i.b,i)},Rh=function(t,i){var e=i.s+i.c*t;i.set(i.t,i.p,~~(e+(e<0?-.5:.5))+i.u,i)},qa=function(t,i){return i.set(i.t,i.p,t?i.e:i.b,i)},Ga=function(t,i){return i.set(i.t,i.p,t!==1?i.b:i.e,i)},Dh=function(t,i,e){return t.style[i]=e},Ah=function(t,i,e){return t.style.setProperty(i,e)},Lh=function(t,i,e){return t._gsap[i]=e},Nh=function(t,i,e){return t._gsap.scaleX=t._gsap.scaleY=e},Fh=function(t,i,e,r,n){var o=t._gsap;o.scaleX=o.scaleY=e,o.renderTransform(n,o)},Bh=function(t,i,e,r,n){var o=t._gsap;o[i]=e,o.renderTransform(n,o)},dt="transform",fe=dt+"Origin",Ih=function s(t,i){var e=this,r=this.target,n=r.style,o=r._gsap;if(t in li&&n){if(this.tfm=this.tfm||{},t!=="transform")t=qe[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return e.tfm[a]=ri(r,a)}):this.tfm[t]=o.x?o[t]:ri(r,t),t===fe&&(this.tfm.zOrigin=o.zOrigin);else return qe.transform.split(",").forEach(function(a){return s.call(e,a,i)});if(this.props.indexOf(dt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(fe,i,"")),t=dt}(n||i)&&this.props.push(t,i,n[t])},ja=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Wh=function(){var t=this.props,i=this.target,e=i.style,r=i._gsap,n,o;for(n=0;n<t.length;n+=3)t[n+1]?t[n+1]===2?i[t[n]](t[n+2]):i[t[n]]=t[n+2]:t[n+2]?e[t[n]]=t[n+2]:e.removeProperty(t[n].substr(0,2)==="--"?t[n]:t[n].replace(no,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),i.setAttribute("data-svg-origin",this.svgo||"")),n=ro(),(!n||!n.isStart)&&!e[dt]&&(ja(e),r.zOrigin&&e[fe]&&(e[fe]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Ka=function(t,i){var e={target:t,props:[],revert:Wh,save:Ih};return t._gsap||de.core.getCache(t),i&&t.style&&t.nodeType&&i.split(",").forEach(function(r){return e.save(r)}),e},Qa,Cs=function(t,i){var e=bi.createElementNS?bi.createElementNS((i||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):bi.createElement(t);return e&&e.style?e:bi.createElement(t)},De=function s(t,i,e){var r=getComputedStyle(t);return r[i]||r.getPropertyValue(i.replace(no,"-$1").toLowerCase())||r.getPropertyValue(i)||!e&&s(t,Tr(i)||i,1)||""},Co="O,Moz,ms,Ms,Webkit".split(","),Tr=function(t,i,e){var r=i||Ii,n=r.style,o=5;if(t in n&&!e)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(Co[o]+t in n););return o<0?null:(o===3?"ms":o>=0?Co[o]:"")+t},Ps=function(){Ph()&&window.document&&(To=window,bi=To.document,dr=bi.documentElement,Ii=Cs("div")||{style:{}},Cs("div"),dt=Tr(dt),fe=dt+"Origin",Ii.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Qa=!!Tr("perspective"),ro=de.core.reverting,io=1)},Po=function(t){var i=t.ownerSVGElement,e=Cs("svg",i&&i.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),n;r.style.display="block",e.appendChild(r),dr.appendChild(e);try{n=r.getBBox()}catch{}return e.removeChild(r),dr.removeChild(e),n},Eo=function(t,i){for(var e=i.length;e--;)if(t.hasAttribute(i[e]))return t.getAttribute(i[e])},Za=function(t){var i,e;try{i=t.getBBox()}catch{i=Po(t),e=1}return i&&(i.width||i.height)||e||(i=Po(t)),i&&!i.width&&!i.x&&!i.y?{x:+Eo(t,["x","cx","x1"])||0,y:+Eo(t,["y","cy","y1"])||0,width:0,height:0}:i},Ja=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Za(t))},Gi=function(t,i){if(i){var e=t.style,r;i in li&&i!==fe&&(i=dt),e.removeProperty?(r=i.substr(0,2),(r==="ms"||i.substr(0,6)==="webkit")&&(i="-"+i),e.removeProperty(r==="--"?i:i.replace(no,"-$1").toLowerCase())):e.removeAttribute(i)}},vi=function(t,i,e,r,n,o){var a=new ue(t._pt,i,e,0,1,o?Ga:qa);return t._pt=a,a.b=r,a.e=n,t._props.push(e),a},Oo={deg:1,rad:1,turn:1},Hh={grid:1,flex:1},Ci=function s(t,i,e,r){var n=parseFloat(e)||0,o=(e+"").trim().substr((n+"").length)||"px",a=Ii.style,l=Eh.test(i),h=t.tagName.toLowerCase()==="svg",c=(h?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",u=r==="%",g,p,m,w;if(r===o||!n||Oo[r]||Oo[o])return n;if(o!=="px"&&!d&&(n=s(t,i,e,"px")),w=t.getCTM&&Ja(t),(u||o==="%")&&(li[i]||~i.indexOf("adius")))return g=w?t.getBBox()[l?"width":"height"]:t[c],yt(u?n/g*f:n/100*g);if(a[l?"width":"height"]=f+(d?o:r),p=r!=="rem"&&~i.indexOf("adius")||r==="em"&&t.appendChild&&!h?t:t.parentNode,w&&(p=(t.ownerSVGElement||{}).parentNode),(!p||p===bi||!p.appendChild)&&(p=bi.body),m=p._gsap,m&&u&&m.width&&l&&m.time===xe.time&&!m.uncache)return yt(n/m.width*f);if(u&&(i==="height"||i==="width")){var x=t.style[i];t.style[i]=f+r,g=t[c],x?t.style[i]=x:Gi(t,i)}else(u||o==="%")&&!Hh[De(p,"display")]&&(a.position=De(t,"position")),p===t&&(a.position="static"),p.appendChild(Ii),g=Ii[c],p.removeChild(Ii),a.position="absolute";return l&&u&&(m=Hi(p),m.time=xe.time,m.width=p[c]),yt(d?g*n/f:g&&n?f/g*n:0)},ri=function(t,i,e,r){var n;return io||Ps(),i in qe&&i!=="transform"&&(i=qe[i],~i.indexOf(",")&&(i=i.split(",")[0])),li[i]&&i!=="transform"?(n=sn(t,r),n=i!=="transformOrigin"?n[i]:n.svg?n.origin:Wn(De(t,fe))+" "+n.zOrigin+"px"):(n=t.style[i],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=In[i]&&In[i](t,i,e)||De(t,i)||ga(t,i)||(i==="opacity"?1:0))),e&&!~(n+"").trim().indexOf(" ")?Ci(t,i,n,e)+e:n},Yh=function(t,i,e,r){if(!e||e==="none"){var n=Tr(i,t,1),o=n&&De(t,n,1);o&&o!==e?(i=n,e=o):i==="borderColor"&&(e=De(t,"borderTopColor"))}var a=new ue(this._pt,t.style,i,0,1,Xa),l=0,h=0,c,f,d,u,g,p,m,w,x,k,v,b;if(a.b=e,a.e=r,e+="",r+="",r.substring(0,6)==="var(--"&&(r=De(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(p=t.style[i],t.style[i]=r,r=De(t,i)||r,p?t.style[i]=p:Gi(t,i)),c=[e,r],Aa(c),e=c[0],r=c[1],d=e.match(hr)||[],b=r.match(hr)||[],b.length){for(;f=hr.exec(r);)m=f[0],x=r.substring(l,f.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),m!==(p=d[h++]||"")&&(u=parseFloat(p)||0,v=p.substr((u+"").length),m.charAt(1)==="="&&(m=fr(u,m)+v),w=parseFloat(m),k=m.substr((w+"").length),l=hr.lastIndex-k.length,k||(k=k||Se.units[i]||v,l===r.length&&(r+=k,a.e+=k)),v!==k&&(u=Ci(t,i,p,k)||0),a._pt={_next:a._pt,p:x||h===1?x:",",s:u,c:w-u,m:g&&g<4||i==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=i==="display"&&r==="none"?Ga:qa;return ha.test(r)&&(a.e=0),this._pt=a,a},Mo={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Vh=function(t){var i=t.split(" "),e=i[0],r=i[1]||"50%";return(e==="top"||e==="bottom"||r==="left"||r==="right")&&(t=e,e=r,r=t),i[0]=Mo[e]||e,i[1]=Mo[r]||r,i.join(" ")},Xh=function(t,i){if(i.tween&&i.tween._time===i.tween._dur){var e=i.t,r=e.style,n=i.u,o=e._gsap,a,l,h;if(n==="all"||n===!0)r.cssText="",l=1;else for(n=n.split(","),h=n.length;--h>-1;)a=n[h],li[a]&&(l=1,a=a==="transformOrigin"?fe:dt),Gi(e,a);l&&(Gi(e,dt),o&&(o.svg&&e.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",sn(e,1),o.uncache=1,ja(r)))}},In={clearProps:function(t,i,e,r,n){if(n.data!=="isFromStart"){var o=t._pt=new ue(t._pt,i,e,0,0,Xh);return o.u=r,o.pr=-10,o.tween=n,t._props.push(e),1}}},nn=[1,0,0,1,0,0],tl={},el=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},zo=function(t){var i=De(t,dt);return el(i)?nn:i.substr(7).match(la).map(yt)},so=function(t,i){var e=t._gsap||Hi(t),r=t.style,n=zo(t),o,a,l,h;return e.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,n=[l.a,l.b,l.c,l.d,l.e,l.f],n.join(",")==="1,0,0,1,0,0"?nn:n):(n===nn&&!t.offsetParent&&t!==dr&&!e.svg&&(l=r.display,r.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(h=1,a=t.nextElementSibling,dr.appendChild(t)),n=zo(t),l?r.display=l:Gi(t,"display"),h&&(a?o.insertBefore(t,a):o?o.appendChild(t):dr.removeChild(t))),i&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},Es=function(t,i,e,r,n,o){var a=t._gsap,l=n||so(t,!0),h=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,u=l[0],g=l[1],p=l[2],m=l[3],w=l[4],x=l[5],k=i.split(" "),v=parseFloat(k[0])||0,b=parseFloat(k[1])||0,S,T,C,P;e?l!==nn&&(T=u*m-g*p)&&(C=v*(m/T)+b*(-p/T)+(p*x-m*w)/T,P=v*(-g/T)+b*(u/T)-(u*x-g*w)/T,v=C,b=P):(S=Za(t),v=S.x+(~k[0].indexOf("%")?v/100*S.width:v),b=S.y+(~(k[1]||k[0]).indexOf("%")?b/100*S.height:b)),r||r!==!1&&a.smooth?(w=v-h,x=b-c,a.xOffset=f+(w*u+x*p)-w,a.yOffset=d+(w*g+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=b,a.smooth=!!r,a.origin=i,a.originIsAbsolute=!!e,t.style[fe]="0px 0px",o&&(vi(o,a,"xOrigin",h,v),vi(o,a,"yOrigin",c,b),vi(o,a,"xOffset",f,a.xOffset),vi(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",v+" "+b)},sn=function(t,i){var e=t._gsap||new Ba(t);if("x"in e&&!i&&!e.uncache)return e;var r=t.style,n=e.scaleX<0,o="px",a="deg",l=getComputedStyle(t),h=De(t,fe)||"0",c,f,d,u,g,p,m,w,x,k,v,b,S,T,C,P,E,N,O,R,B,W,I,D,U,V,_,Q,ot,Pt,lt,Nt;return c=f=d=p=m=w=x=k=v=0,u=g=1,e.svg=!!(t.getCTM&&Ja(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[dt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[dt]!=="none"?l[dt]:"")),r.scale=r.rotate=r.translate="none"),T=so(t,e.svg),e.svg&&(e.uncache?(U=t.getBBox(),h=e.xOrigin-U.x+"px "+(e.yOrigin-U.y)+"px",D=""):D=!i&&t.getAttribute("data-svg-origin"),Es(t,D||h,!!D||e.originIsAbsolute,e.smooth!==!1,T)),b=e.xOrigin||0,S=e.yOrigin||0,T!==nn&&(N=T[0],O=T[1],R=T[2],B=T[3],c=W=T[4],f=I=T[5],T.length===6?(u=Math.sqrt(N*N+O*O),g=Math.sqrt(B*B+R*R),p=N||O?ir(O,N)*Ni:0,x=R||B?ir(R,B)*Ni+p:0,x&&(g*=Math.abs(Math.cos(x*pr))),e.svg&&(c-=b-(b*N+S*R),f-=S-(b*O+S*B))):(Nt=T[6],Pt=T[7],_=T[8],Q=T[9],ot=T[10],lt=T[11],c=T[12],f=T[13],d=T[14],C=ir(Nt,ot),m=C*Ni,C&&(P=Math.cos(-C),E=Math.sin(-C),D=W*P+_*E,U=I*P+Q*E,V=Nt*P+ot*E,_=W*-E+_*P,Q=I*-E+Q*P,ot=Nt*-E+ot*P,lt=Pt*-E+lt*P,W=D,I=U,Nt=V),C=ir(-R,ot),w=C*Ni,C&&(P=Math.cos(-C),E=Math.sin(-C),D=N*P-_*E,U=O*P-Q*E,V=R*P-ot*E,lt=B*E+lt*P,N=D,O=U,R=V),C=ir(O,N),p=C*Ni,C&&(P=Math.cos(C),E=Math.sin(C),D=N*P+O*E,U=W*P+I*E,O=O*P-N*E,I=I*P-W*E,N=D,W=U),m&&Math.abs(m)+Math.abs(p)>359.9&&(m=p=0,w=180-w),u=yt(Math.sqrt(N*N+O*O+R*R)),g=yt(Math.sqrt(I*I+Nt*Nt)),C=ir(W,I),x=Math.abs(C)>2e-4?C*Ni:0,v=lt?1/(lt<0?-lt:lt):0),e.svg&&(D=t.getAttribute("transform"),e.forceCSS=t.setAttribute("transform","")||!el(De(t,dt)),D&&t.setAttribute("transform",D))),Math.abs(x)>90&&Math.abs(x)<270&&(n?(u*=-1,x+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),i=i||e.uncache,e.x=c-((e.xPercent=c&&(!i&&e.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*e.xPercent/100:0)+o,e.y=f-((e.yPercent=f&&(!i&&e.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-f)?-50:0)))?t.offsetHeight*e.yPercent/100:0)+o,e.z=d+o,e.scaleX=yt(u),e.scaleY=yt(g),e.rotation=yt(p)+a,e.rotationX=yt(m)+a,e.rotationY=yt(w)+a,e.skewX=x+a,e.skewY=k+a,e.transformPerspective=v+o,(e.zOrigin=parseFloat(h.split(" ")[2])||!i&&e.zOrigin||0)&&(r[fe]=Wn(h)),e.xOffset=e.yOffset=0,e.force3D=Se.force3D,e.renderTransform=e.svg?$h:Qa?il:Uh,e.uncache=0,e},Wn=function(t){return(t=t.split(" "))[0]+" "+t[1]},ss=function(t,i,e){var r=Gt(i);return yt(parseFloat(i)+parseFloat(Ci(t,"x",e+"px",r)))+r},Uh=function(t,i){i.z="0px",i.rotationY=i.rotationX="0deg",i.force3D=0,il(t,i)},Ai="0deg",Or="0px",Li=") ",il=function(t,i){var e=i||this,r=e.xPercent,n=e.yPercent,o=e.x,a=e.y,l=e.z,h=e.rotation,c=e.rotationY,f=e.rotationX,d=e.skewX,u=e.skewY,g=e.scaleX,p=e.scaleY,m=e.transformPerspective,w=e.force3D,x=e.target,k=e.zOrigin,v="",b=w==="auto"&&t&&t!==1||w===!0;if(k&&(f!==Ai||c!==Ai)){var S=parseFloat(c)*pr,T=Math.sin(S),C=Math.cos(S),P;S=parseFloat(f)*pr,P=Math.cos(S),o=ss(x,o,T*P*-k),a=ss(x,a,-Math.sin(S)*-k),l=ss(x,l,C*P*-k+k)}m!==Or&&(v+="perspective("+m+Li),(r||n)&&(v+="translate("+r+"%, "+n+"%) "),(b||o!==Or||a!==Or||l!==Or)&&(v+=l!==Or||b?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Li),h!==Ai&&(v+="rotate("+h+Li),c!==Ai&&(v+="rotateY("+c+Li),f!==Ai&&(v+="rotateX("+f+Li),(d!==Ai||u!==Ai)&&(v+="skew("+d+", "+u+Li),(g!==1||p!==1)&&(v+="scale("+g+", "+p+Li),x.style[dt]=v||"translate(0, 0)"},$h=function(t,i){var e=i||this,r=e.xPercent,n=e.yPercent,o=e.x,a=e.y,l=e.rotation,h=e.skewX,c=e.skewY,f=e.scaleX,d=e.scaleY,u=e.target,g=e.xOrigin,p=e.yOrigin,m=e.xOffset,w=e.yOffset,x=e.forceCSS,k=parseFloat(o),v=parseFloat(a),b,S,T,C,P;l=parseFloat(l),h=parseFloat(h),c=parseFloat(c),c&&(c=parseFloat(c),h+=c,l+=c),l||h?(l*=pr,h*=pr,b=Math.cos(l)*f,S=Math.sin(l)*f,T=Math.sin(l-h)*-d,C=Math.cos(l-h)*d,h&&(c*=pr,P=Math.tan(h-c),P=Math.sqrt(1+P*P),T*=P,C*=P,c&&(P=Math.tan(c),P=Math.sqrt(1+P*P),b*=P,S*=P)),b=yt(b),S=yt(S),T=yt(T),C=yt(C)):(b=f,C=d,S=T=0),(k&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(k=Ci(u,"x",o,"px"),v=Ci(u,"y",a,"px")),(g||p||m||w)&&(k=yt(k+g-(g*b+p*T)+m),v=yt(v+p-(g*S+p*C)+w)),(r||n)&&(P=u.getBBox(),k=yt(k+r/100*P.width),v=yt(v+n/100*P.height)),P="matrix("+b+","+S+","+T+","+C+","+k+","+v+")",u.setAttribute("transform",P),x&&(u.style[dt]=P)},qh=function(t,i,e,r,n){var o=360,a=Lt(n),l=parseFloat(n)*(a&&~n.indexOf("rad")?Ni:1),h=l-r,c=r+h+"deg",f,d;return a&&(f=n.split("_")[1],f==="short"&&(h%=o,h!==h%(o/2)&&(h+=h<0?o:-o)),f==="cw"&&h<0?h=(h+o*ko)%o-~~(h/o)*o:f==="ccw"&&h>0&&(h=(h-o*ko)%o-~~(h/o)*o)),t._pt=d=new ue(t._pt,i,e,r,h,Mh),d.e=c,d.u="deg",t._props.push(e),d},Ro=function(t,i){for(var e in i)t[e]=i[e];return t},Gh=function(t,i,e){var r=Ro({},e._gsap),n="perspective,force3D,transformOrigin,svgOrigin",o=e.style,a,l,h,c,f,d,u,g;r.svg?(h=e.getAttribute("transform"),e.setAttribute("transform",""),o[dt]=i,a=sn(e,1),Gi(e,dt),e.setAttribute("transform",h)):(h=getComputedStyle(e)[dt],o[dt]=i,a=sn(e,1),o[dt]=h);for(l in li)h=r[l],c=a[l],h!==c&&n.indexOf(l)<0&&(u=Gt(h),g=Gt(c),f=u!==g?Ci(e,l,h,g):parseFloat(h),d=parseFloat(c),t._pt=new ue(t._pt,a,l,f,d-f,ks),t._pt.u=g||0,t._props.push(l));Ro(a,r)};ce("padding,margin,Width,Radius",function(s,t){var i="Top",e="Right",r="Bottom",n="Left",o=(t<3?[i,e,r,n]:[i+n,i+e,r+e,r+n]).map(function(a){return t<2?s+a:"border"+a+s});In[t>1?"border"+s:s]=function(a,l,h,c,f){var d,u;if(arguments.length<4)return d=o.map(function(g){return ri(a,g,h)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(c+"").split(" "),u={},o.forEach(function(g,p){return u[g]=d[p]=d[p]||d[(p-1)/2|0]}),a.init(l,u,f)}});var rl={name:"css",register:Ps,targetTest:function(t){return t.style&&t.nodeType},init:function(t,i,e,r,n){var o=this._props,a=t.style,l=e.vars.startAt,h,c,f,d,u,g,p,m,w,x,k,v,b,S,T,C;io||Ps(),this.styles=this.styles||Ka(t),C=this.styles.props,this.tween=e;for(p in i)if(p!=="autoRound"&&(c=i[p],!(ve[p]&&Ia(p,i,e,r,t,n)))){if(u=typeof c,g=In[p],u==="function"&&(c=c.call(e,r,t,n),u=typeof c),u==="string"&&~c.indexOf("random(")&&(c=tn(c)),g)g(this,t,p,c,e)&&(T=1);else if(p.substr(0,2)==="--")h=(getComputedStyle(t).getPropertyValue(p)+"").trim(),c+="",Ti.lastIndex=0,Ti.test(h)||(m=Gt(h),w=Gt(c)),w?m!==w&&(h=Ci(t,p,h,w)+w):m&&(c+=m),this.add(a,"setProperty",h,c,r,n,0,0,p),o.push(p),C.push(p,0,a[p]);else if(u!=="undefined"){if(l&&p in l?(h=typeof l[p]=="function"?l[p].call(e,r,t,n):l[p],Lt(h)&&~h.indexOf("random(")&&(h=tn(h)),Gt(h+"")||h==="auto"||(h+=Se.units[p]||Gt(ri(t,p))||""),(h+"").charAt(1)==="="&&(h=ri(t,p))):h=ri(t,p),d=parseFloat(h),x=u==="string"&&c.charAt(1)==="="&&c.substr(0,2),x&&(c=c.substr(2)),f=parseFloat(c),p in qe&&(p==="autoAlpha"&&(d===1&&ri(t,"visibility")==="hidden"&&f&&(d=0),C.push("visibility",0,a.visibility),vi(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),p!=="scale"&&p!=="transform"&&(p=qe[p],~p.indexOf(",")&&(p=p.split(",")[0]))),k=p in li,k){if(this.styles.save(p),u==="string"&&c.substring(0,6)==="var(--"&&(c=De(t,c.substring(4,c.indexOf(")"))),f=parseFloat(c)),v||(b=t._gsap,b.renderTransform&&!i.parseTransform||sn(t,i.parseTransform),S=i.smoothOrigin!==!1&&b.smooth,v=this._pt=new ue(this._pt,a,dt,0,1,b.renderTransform,b,0,-1),v.dep=1),p==="scale")this._pt=new ue(this._pt,b,"scaleY",b.scaleY,(x?fr(b.scaleY,x+f):f)-b.scaleY||0,ks),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){C.push(fe,0,a[fe]),c=Vh(c),b.svg?Es(t,c,0,S,0,this):(w=parseFloat(c.split(" ")[2])||0,w!==b.zOrigin&&vi(this,b,"zOrigin",b.zOrigin,w),vi(this,a,p,Wn(h),Wn(c)));continue}else if(p==="svgOrigin"){Es(t,c,1,S,0,this);continue}else if(p in tl){qh(this,b,p,d,x?fr(d,x+c):c);continue}else if(p==="smoothOrigin"){vi(this,b,"smooth",b.smooth,c);continue}else if(p==="force3D"){b[p]=c;continue}else if(p==="transform"){Gh(this,c,t);continue}}else p in a||(p=Tr(p)||p);if(k||(f||f===0)&&(d||d===0)&&!Oh.test(c)&&p in a)m=(h+"").substr((d+"").length),f||(f=0),w=Gt(c)||(p in Se.units?Se.units[p]:m),m!==w&&(d=Ci(t,p,h,w)),this._pt=new ue(this._pt,k?b:a,p,d,(x?fr(d,x+f):f)-d,!k&&(w==="px"||p==="zIndex")&&i.autoRound!==!1?Rh:ks),this._pt.u=w||0,m!==w&&w!=="%"&&(this._pt.b=h,this._pt.r=zh);else if(p in a)Yh.call(this,t,p,h,x?x+c:c);else if(p in t)this.add(t,p,h||t[p],x?x+c:c,r,n);else if(p!=="parseTransform"){$s(p,c);continue}k||(p in a?C.push(p,0,a[p]):typeof t[p]=="function"?C.push(p,2,t[p]()):C.push(p,1,h||t[p])),o.push(p)}}T&&Ua(this)},render:function(t,i){if(i.tween._time||!ro())for(var e=i._pt;e;)e.r(t,e.d),e=e._next;else i.styles.revert()},get:ri,aliases:qe,getSetter:function(t,i,e){var r=qe[i];return r&&r.indexOf(",")<0&&(i=r),i in li&&i!==fe&&(t._gsap.x||ri(t,"x"))?e&&So===e?i==="scale"?Nh:Lh:(So=e||{})&&(i==="scale"?Fh:Bh):t.style&&!Vs(t.style[i])?Dh:~i.indexOf("-")?Ah:to(t,i)},core:{_removeProperty:Gi,_getMatrix:so}};de.utils.checkPrefix=Tr;de.core.getStyleSaver=Ka;(function(s,t,i,e){var r=ce(s+","+t+","+i,function(n){li[n]=1});ce(t,function(n){Se.units[n]="deg",tl[n]=1}),qe[r[13]]=s+","+t,ce(e,function(n){var o=n.split(":");qe[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");ce("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){Se.units[s]="px"});de.registerPlugin(rl);var jh=de.registerPlugin(rl)||de;jh.core.Tween;var Kh="1.3.11";function nl(s,t,i){return Math.max(s,Math.min(t,i))}function Qh(s,t,i){return(1-i)*s+i*t}function Zh(s,t,i,e){return Qh(s,t,1-Math.exp(-i*e))}function Jh(s,t){return(s%t+t)%t}var tc=class{constructor(){A(this,"isRunning",!1);A(this,"value",0);A(this,"from",0);A(this,"to",0);A(this,"currentTime",0);A(this,"lerp");A(this,"duration");A(this,"easing");A(this,"onUpdate")}advance(s){var i;if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;const e=nl(0,this.currentTime/this.duration,1);t=e>=1;const r=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*r}else this.lerp?(this.value=Zh(this.value,this.to,this.lerp*60,s),Math.round(this.value)===this.to&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),(i=this.onUpdate)==null||i.call(this,this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:i,duration:e,easing:r,onStart:n,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=i,this.duration=e,this.easing=r,this.currentTime=0,this.isRunning=!0,n==null||n(),this.onUpdate=o}};function ec(s,t){let i;return function(...e){let r=this;clearTimeout(i),i=setTimeout(()=>{i=void 0,s.apply(r,e)},t)}}var ic=class{constructor(s,t,{autoResize:i=!0,debounce:e=250}={}){A(this,"width",0);A(this,"height",0);A(this,"scrollHeight",0);A(this,"scrollWidth",0);A(this,"debouncedResize");A(this,"wrapperResizeObserver");A(this,"contentResizeObserver");A(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});A(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});A(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,i&&(this.debouncedResize=ec(this.resize,e),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,t;(s=this.wrapperResizeObserver)==null||s.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},sl=class{constructor(){A(this,"events",{})}emit(s,...t){var e;let i=this.events[s]||[];for(let r=0,n=i.length;r<n;r++)(e=i[r])==null||e.call(i,...t)}on(s,t){var i;return(i=this.events[s])!=null&&i.push(t)||(this.events[s]=[t]),()=>{var e;this.events[s]=(e=this.events[s])==null?void 0:e.filter(r=>t!==r)}}off(s,t){var i;this.events[s]=(i=this.events[s])==null?void 0:i.filter(e=>t!==e)}destroy(){this.events={}}},Do=100/6,gi={passive:!1},rc=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){A(this,"touchStart",{x:0,y:0});A(this,"lastDelta",{x:0,y:0});A(this,"window",{width:0,height:0});A(this,"emitter",new sl);A(this,"onTouchStart",s=>{const{clientX:t,clientY:i}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});A(this,"onTouchMove",s=>{const{clientX:t,clientY:i}=s.targetTouches?s.targetTouches[0]:s,e=-(t-this.touchStart.x)*this.options.touchMultiplier,r=-(i-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:e,y:r},this.emitter.emit("scroll",{deltaX:e,deltaY:r,event:s})});A(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});A(this,"onWheel",s=>{let{deltaX:t,deltaY:i,deltaMode:e}=s;const r=e===1?Do:e===2?this.window.width:1,n=e===1?Do:e===2?this.window.height:1;t*=r,i*=n,t*=this.options.wheelMultiplier,i*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:s})});A(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,gi),this.element.addEventListener("touchstart",this.onTouchStart,gi),this.element.addEventListener("touchmove",this.onTouchMove,gi),this.element.addEventListener("touchend",this.onTouchEnd,gi)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,gi),this.element.removeEventListener("touchstart",this.onTouchStart,gi),this.element.removeEventListener("touchmove",this.onTouchMove,gi),this.element.removeEventListener("touchend",this.onTouchEnd,gi)}},Ao=s=>Math.min(1,1.001-Math.pow(2,-10*s)),Oc=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:i=s,smoothWheel:e=!0,syncTouch:r=!1,syncTouchLerp:n=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:h=.1,infinite:c=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:u=1,wheelMultiplier:g=1,autoResize:p=!0,prevent:m,virtualScroll:w,overscroll:x=!0,autoRaf:k=!1,anchors:v=!1,autoToggle:b=!1,allowNestedScroll:S=!1,__experimental__naiveDimensions:T=!1}={}){A(this,"_isScrolling",!1);A(this,"_isStopped",!1);A(this,"_isLocked",!1);A(this,"_preventNextNativeScrollEvent",!1);A(this,"_resetVelocityTimeout",null);A(this,"__rafID",null);A(this,"isTouching");A(this,"time",0);A(this,"userData",{});A(this,"lastVelocity",0);A(this,"velocity",0);A(this,"direction",0);A(this,"options");A(this,"targetScroll");A(this,"animatedScroll");A(this,"animate",new tc);A(this,"emitter",new sl);A(this,"dimensions");A(this,"virtualScroll");A(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});A(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});A(this,"onTransitionEnd",s=>{if(s.propertyName.includes("overflow")){const t=this.isHorizontal?"overflow-x":"overflow-y",i=getComputedStyle(this.rootElement)[t];["hidden","clip"].includes(i)?this.internalStop():this.internalStart()}});A(this,"onClick",s=>{const i=s.composedPath().find(e=>{var r,n,o;return e instanceof HTMLAnchorElement&&(((r=e.getAttribute("href"))==null?void 0:r.startsWith("#"))||((n=e.getAttribute("href"))==null?void 0:n.startsWith("/#"))||((o=e.getAttribute("href"))==null?void 0:o.startsWith("./#")))});if(i){const e=i.getAttribute("href");if(e){const r=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0;let n=`#${e.split("#")[1]}`;["#","/#","./#","#top","/#top","./#top"].includes(e)&&(n=0),this.scrollTo(n,r)}}});A(this,"onPointerDown",s=>{s.button===1&&this.reset()});A(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:t,deltaY:i,event:e}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:i,event:e}),e.ctrlKey||e.lenisStopPropagation)return;const r=e.type.includes("touch"),n=e.type.includes("wheel");this.isTouching=e.type==="touchstart"||e.type==="touchmove";const o=t===0&&i===0;if(this.options.syncTouch&&r&&e.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&i===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||l)return;let h=e.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const c=this.options.prevent;if(h.find(m=>{var w,x,k;return m instanceof HTMLElement&&(typeof c=="function"&&(c==null?void 0:c(m))||((w=m.hasAttribute)==null?void 0:w.call(m,"data-lenis-prevent"))||r&&((x=m.hasAttribute)==null?void 0:x.call(m,"data-lenis-prevent-touch"))||n&&((k=m.hasAttribute)==null?void 0:k.call(m,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:t,deltaY:i}))}))return;if(this.isStopped||this.isLocked){e.cancelable&&e.preventDefault();return}if(!(this.options.syncTouch&&r||this.options.smoothWheel&&n)){this.isScrolling="native",this.animate.stop(),e.lenisStopPropagation=!0;return}let d=i;this.options.gestureOrientation==="both"?d=Math.abs(i)>Math.abs(t)?i:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&i>0||this.animatedScroll===this.limit&&i<0))&&(e.lenisStopPropagation=!0),e.cancelable&&e.preventDefault();const u=r&&this.options.syncTouch,p=r&&e.type==="touchend";p&&(d=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:p?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});A(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});A(this,"raf",s=>{const t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))});window.lenisVersion=Kh,(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=Ao:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:i,smoothWheel:e,syncTouch:r,syncTouchLerp:n,touchInertiaExponent:o,duration:a,easing:l,lerp:h,infinite:c,gestureOrientation:d,orientation:f,touchMultiplier:u,wheelMultiplier:g,autoResize:p,prevent:m,virtualScroll:w,overscroll:x,autoRaf:k,anchors:v,autoToggle:b,allowNestedScroll:S,__experimental__naiveDimensions:T},this.dimensions=new ic(s,t,{autoResize:p}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new rc(i,{touchMultiplier:u,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:i=!1,lock:e=!1,duration:r=this.options.duration,easing:n=this.options.easing,lerp:o=this.options.lerp,onStart:a,onComplete:l,force:h=!1,programmatic:c=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!h)){if(typeof s=="string"&&["top","left","start"].includes(s))s=0;else if(typeof s=="string"&&["bottom","right","end"].includes(s))s=this.limit;else{let d;if(typeof s=="string"?d=document.querySelector(s):s instanceof HTMLElement&&(s!=null&&s.nodeType)&&(d=s),d){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();t-=this.isHorizontal?g.left:g.top}const u=d.getBoundingClientRect();s=(this.isHorizontal?u.left:u.top)+this.animatedScroll}}if(typeof s=="number"){if(s+=t,s=Math.round(s),this.options.infinite){if(c){this.targetScroll=this.animatedScroll=this.scroll;const d=s-this.animatedScroll;d>this.limit/2?s=s-this.limit:d<-this.limit/2&&(s=s+this.limit)}}else s=nl(0,s,this.limit);if(s===this.targetScroll){a==null||a(this),l==null||l(this);return}if(this.userData=f??{},i){this.animatedScroll=this.targetScroll=s,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}c||(this.targetScroll=s),typeof r=="number"&&typeof n!="function"?n=Ao:typeof n=="function"&&typeof r!="number"&&(r=1),this.animate.fromTo(this.animatedScroll,s,{duration:r,easing:n,lerp:o,onStart:()=>{e&&(this.isLocked=!0),this.isScrolling="smooth",a==null||a(this)},onUpdate:(d,u)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),c&&(this.targetScroll=d),u||this.emit(),u&&(this.reset(),this.emit(),l==null||l(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(s,{deltaX:t,deltaY:i}){const e=Date.now(),r=s._lenis??(s._lenis={});let n,o,a,l,h,c,f,d;const u=this.options.gestureOrientation;if(e-(r.time??0)>2e3){r.time=Date.now();const b=window.getComputedStyle(s);r.computedStyle=b;const S=b.overflowX,T=b.overflowY;if(n=["auto","overlay","scroll"].includes(S),o=["auto","overlay","scroll"].includes(T),r.hasOverflowX=n,r.hasOverflowY=o,!n&&!o||u==="vertical"&&!o||u==="horizontal"&&!n)return!1;h=s.scrollWidth,c=s.scrollHeight,f=s.clientWidth,d=s.clientHeight,a=h>f,l=c>d,r.isScrollableX=a,r.isScrollableY=l,r.scrollWidth=h,r.scrollHeight=c,r.clientWidth=f,r.clientHeight=d}else a=r.isScrollableX,l=r.isScrollableY,n=r.hasOverflowX,o=r.hasOverflowY,h=r.scrollWidth,c=r.scrollHeight,f=r.clientWidth,d=r.clientHeight;if(!n&&!o||!a&&!l||u==="vertical"&&(!o||!l)||u==="horizontal"&&(!n||!a))return!1;let g;if(u==="horizontal")g="x";else if(u==="vertical")g="y";else{const b=t!==0,S=i!==0;b&&n&&a&&(g="x"),S&&o&&l&&(g="y")}if(!g)return!1;let p,m,w,x,k;if(g==="x")p=s.scrollLeft,m=h-f,w=t,x=n,k=a;else if(g==="y")p=s.scrollTop,m=c-d,w=i,x=o,k=l;else return!1;return(w>0?p<m:p>0)&&x&&k}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Jh(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function nc(s,t){for(var i=0;i<t.length;i++){var e=t[i];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(s,e.key,e)}}function sc(s,t,i){return t&&nc(s.prototype,t),s}/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var It,En,we,yi,xi,gr,ol,Fi,Vr,al,si,We,ll,hl=function(){return It||typeof window<"u"&&(It=window.gsap)&&It.registerPlugin&&It},cl=1,ur=[],G=[],je=[],Xr=Date.now,Os=function(t,i){return i},oc=function(){var t=Vr.core,i=t.bridge||{},e=t._scrollers,r=t._proxies;e.push.apply(e,G),r.push.apply(r,je),G=e,je=r,Os=function(o,a){return i[o](a)}},Si=function(t,i){return~je.indexOf(t)&&je[je.indexOf(t)+1][i]},Ur=function(t){return!!~al.indexOf(t)},te=function(t,i,e,r,n){return t.addEventListener(i,e,{passive:r!==!1,capture:!!n})},Jt=function(t,i,e,r){return t.removeEventListener(i,e,!!r)},dn="scrollLeft",pn="scrollTop",Ms=function(){return si&&si.isPressed||G.cache++},Hn=function(t,i){var e=function r(n){if(n||n===0){cl&&(we.history.scrollRestoration="manual");var o=si&&si.isPressed;n=r.v=Math.round(n)||(si&&si.iOS?1:0),t(n),r.cacheID=G.cache,o&&Os("ss",n)}else(i||G.cache!==r.cacheID||Os("ref"))&&(r.cacheID=G.cache,r.v=t());return r.v+r.offset};return e.offset=0,t&&e},se={s:dn,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Hn(function(s){return arguments.length?we.scrollTo(s,Mt.sc()):we.pageXOffset||yi[dn]||xi[dn]||gr[dn]||0})},Mt={s:pn,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:se,sc:Hn(function(s){return arguments.length?we.scrollTo(se.sc(),s):we.pageYOffset||yi[pn]||xi[pn]||gr[pn]||0})},le=function(t,i){return(i&&i._ctx&&i._ctx.selector||It.utils.toArray)(t)[0]||(typeof t=="string"&&It.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},ac=function(t,i){for(var e=i.length;e--;)if(i[e]===t||i[e].contains(t))return!0;return!1},Pi=function(t,i){var e=i.s,r=i.sc;Ur(t)&&(t=yi.scrollingElement||xi);var n=G.indexOf(t),o=r===Mt.sc?1:2;!~n&&(n=G.push(t)-1),G[n+o]||te(t,"scroll",Ms);var a=G[n+o],l=a||(G[n+o]=Hn(Si(t,e),!0)||(Ur(t)?r:Hn(function(h){return arguments.length?t[e]=h:t[e]})));return l.target=t,a||(l.smooth=It.getProperty(t,"scrollBehavior")==="smooth"),l},zs=function(t,i,e){var r=t,n=t,o=Xr(),a=o,l=i||50,h=Math.max(500,l*3),c=function(g,p){var m=Xr();p||m-o>l?(n=r,r=g,a=o,o=m):e?r+=g:r=n+(g-n)/(m-a)*(o-a)},f=function(){n=r=e?0:r,a=o=0},d=function(g){var p=a,m=n,w=Xr();return(g||g===0)&&g!==r&&c(g),o===a||w-a>h?0:(r+(e?m:-m))/((e?w:o)-p)*1e3};return{update:c,reset:f,getVelocity:d}},Mr=function(t,i){return i&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Lo=function(t){var i=Math.max.apply(Math,t),e=Math.min.apply(Math,t);return Math.abs(i)>=Math.abs(e)?i:e},ul=function(){Vr=It.core.globals().ScrollTrigger,Vr&&Vr.core&&oc()},fl=function(t){return It=t||hl(),!En&&It&&typeof document<"u"&&document.body&&(we=window,yi=document,xi=yi.documentElement,gr=yi.body,al=[we,yi,xi,gr],It.utils.clamp,ll=It.core.context||function(){},Fi="onpointerenter"in gr?"pointer":"mouse",ol=xt.isTouch=we.matchMedia&&we.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in we||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,We=xt.eventTypes=("ontouchstart"in xi?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in xi?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return cl=0},500),ul(),En=1),En};se.op=Mt;G.cache=0;var xt=function(){function s(i){this.init(i)}var t=s.prototype;return t.init=function(e){En||fl(It)||console.warn("Please gsap.registerPlugin(Observer)"),Vr||ul();var r=e.tolerance,n=e.dragMinimum,o=e.type,a=e.target,l=e.lineHeight,h=e.debounce,c=e.preventDefault,f=e.onStop,d=e.onStopDelay,u=e.ignore,g=e.wheelSpeed,p=e.event,m=e.onDragStart,w=e.onDragEnd,x=e.onDrag,k=e.onPress,v=e.onRelease,b=e.onRight,S=e.onLeft,T=e.onUp,C=e.onDown,P=e.onChangeX,E=e.onChangeY,N=e.onChange,O=e.onToggleX,R=e.onToggleY,B=e.onHover,W=e.onHoverEnd,I=e.onMove,D=e.ignoreCheck,U=e.isNormalizer,V=e.onGestureStart,_=e.onGestureEnd,Q=e.onWheel,ot=e.onEnable,Pt=e.onDisable,lt=e.onClick,Nt=e.scrollSpeed,Ht=e.capture,wt=e.allowClicks,Qt=e.lockAxis,Yt=e.onLockAxis;this.target=a=le(a)||xi,this.vars=e,u&&(u=It.utils.toArray(u)),r=r||1e-9,n=n||0,g=g||1,Nt=Nt||1,o=o||"wheel,touch,pointer",h=h!==!1,l||(l=parseFloat(we.getComputedStyle(gr).lineHeight)||22);var hi,Zt,oe,tt,mt,ae,pe,y=this,ge=0,Qe=0,ci=e.passive||!c&&e.passive!==!1,pt=Pi(a,se),Ze=Pi(a,Mt),ui=pt(),Oi=Ze(),zt=~o.indexOf("touch")&&!~o.indexOf("pointer")&&We[0]==="pointerdown",fi=Ur(a),bt=a.ownerDocument||yi,Le=[0,0,0],Pe=[0,0,0],Je=0,kr=function(){return Je=Xr()},Tt=function(F,et){return(y.event=F)&&u&&ac(F.target,u)||et&&zt&&F.pointerType!=="touch"||D&&D(F,et)},hn=function(){y._vx.reset(),y._vy.reset(),Zt.pause(),f&&f(y)},ti=function(){var F=y.deltaX=Lo(Le),et=y.deltaY=Lo(Pe),M=Math.abs(F)>=r,H=Math.abs(et)>=r;N&&(M||H)&&N(y,F,et,Le,Pe),M&&(b&&y.deltaX>0&&b(y),S&&y.deltaX<0&&S(y),P&&P(y),O&&y.deltaX<0!=ge<0&&O(y),ge=y.deltaX,Le[0]=Le[1]=Le[2]=0),H&&(C&&y.deltaY>0&&C(y),T&&y.deltaY<0&&T(y),E&&E(y),R&&y.deltaY<0!=Qe<0&&R(y),Qe=y.deltaY,Pe[0]=Pe[1]=Pe[2]=0),(tt||oe)&&(I&&I(y),oe&&(m&&oe===1&&m(y),x&&x(y),oe=0),tt=!1),ae&&!(ae=!1)&&Yt&&Yt(y),mt&&(Q(y),mt=!1),hi=0},Ji=function(F,et,M){Le[M]+=F,Pe[M]+=et,y._vx.update(F),y._vy.update(et),h?hi||(hi=requestAnimationFrame(ti)):ti()},tr=function(F,et){Qt&&!pe&&(y.axis=pe=Math.abs(F)>Math.abs(et)?"x":"y",ae=!0),pe!=="y"&&(Le[2]+=F,y._vx.update(F,!0)),pe!=="x"&&(Pe[2]+=et,y._vy.update(et,!0)),h?hi||(hi=requestAnimationFrame(ti)):ti()},di=function(F){if(!Tt(F,1)){F=Mr(F,c);var et=F.clientX,M=F.clientY,H=et-y.x,L=M-y.y,Y=y.isDragging;y.x=et,y.y=M,(Y||(H||L)&&(Math.abs(y.startX-et)>=n||Math.abs(y.startY-M)>=n))&&(oe=Y?2:1,Y||(y.isDragging=!0),tr(H,L))}},Mi=y.onPress=function(X){Tt(X,1)||X&&X.button||(y.axis=pe=null,Zt.pause(),y.isPressed=!0,X=Mr(X),ge=Qe=0,y.startX=y.x=X.clientX,y.startY=y.y=X.clientY,y._vx.reset(),y._vy.reset(),te(U?a:bt,We[1],di,ci,!0),y.deltaX=y.deltaY=0,k&&k(y))},j=y.onRelease=function(X){if(!Tt(X,1)){Jt(U?a:bt,We[1],di,!0);var F=!isNaN(y.y-y.startY),et=y.isDragging,M=et&&(Math.abs(y.x-y.startX)>3||Math.abs(y.y-y.startY)>3),H=Mr(X);!M&&F&&(y._vx.reset(),y._vy.reset(),c&&wt&&It.delayedCall(.08,function(){if(Xr()-Je>300&&!X.defaultPrevented){if(X.target.click)X.target.click();else if(bt.createEvent){var L=bt.createEvent("MouseEvents");L.initMouseEvent("click",!0,!0,we,1,H.screenX,H.screenY,H.clientX,H.clientY,!1,!1,!1,!1,0,null),X.target.dispatchEvent(L)}}})),y.isDragging=y.isGesturing=y.isPressed=!1,f&&et&&!U&&Zt.restart(!0),oe&&ti(),w&&et&&w(y),v&&v(y,M)}},zi=function(F){return F.touches&&F.touches.length>1&&(y.isGesturing=!0)&&V(F,y.isDragging)},Ne=function(){return(y.isGesturing=!1)||_(y)},Fe=function(F){if(!Tt(F)){var et=pt(),M=Ze();Ji((et-ui)*Nt,(M-Oi)*Nt,1),ui=et,Oi=M,f&&Zt.restart(!0)}},Be=function(F){if(!Tt(F)){F=Mr(F,c),Q&&(mt=!0);var et=(F.deltaMode===1?l:F.deltaMode===2?we.innerHeight:1)*g;Ji(F.deltaX*et,F.deltaY*et,0),f&&!U&&Zt.restart(!0)}},Ri=function(F){if(!Tt(F)){var et=F.clientX,M=F.clientY,H=et-y.x,L=M-y.y;y.x=et,y.y=M,tt=!0,f&&Zt.restart(!0),(H||L)&&tr(H,L)}},er=function(F){y.event=F,B(y)},ei=function(F){y.event=F,W(y)},Cr=function(F){return Tt(F)||Mr(F,c)&&lt(y)};Zt=y._dc=It.delayedCall(d||.25,hn).pause(),y.deltaX=y.deltaY=0,y._vx=zs(0,50,!0),y._vy=zs(0,50,!0),y.scrollX=pt,y.scrollY=Ze,y.isDragging=y.isGesturing=y.isPressed=!1,ll(this),y.enable=function(X){return y.isEnabled||(te(fi?bt:a,"scroll",Ms),o.indexOf("scroll")>=0&&te(fi?bt:a,"scroll",Fe,ci,Ht),o.indexOf("wheel")>=0&&te(a,"wheel",Be,ci,Ht),(o.indexOf("touch")>=0&&ol||o.indexOf("pointer")>=0)&&(te(a,We[0],Mi,ci,Ht),te(bt,We[2],j),te(bt,We[3],j),wt&&te(a,"click",kr,!0,!0),lt&&te(a,"click",Cr),V&&te(bt,"gesturestart",zi),_&&te(bt,"gestureend",Ne),B&&te(a,Fi+"enter",er),W&&te(a,Fi+"leave",ei),I&&te(a,Fi+"move",Ri)),y.isEnabled=!0,y.isDragging=y.isGesturing=y.isPressed=tt=oe=!1,y._vx.reset(),y._vy.reset(),ui=pt(),Oi=Ze(),X&&X.type&&Mi(X),ot&&ot(y)),y},y.disable=function(){y.isEnabled&&(ur.filter(function(X){return X!==y&&Ur(X.target)}).length||Jt(fi?bt:a,"scroll",Ms),y.isPressed&&(y._vx.reset(),y._vy.reset(),Jt(U?a:bt,We[1],di,!0)),Jt(fi?bt:a,"scroll",Fe,Ht),Jt(a,"wheel",Be,Ht),Jt(a,We[0],Mi,Ht),Jt(bt,We[2],j),Jt(bt,We[3],j),Jt(a,"click",kr,!0),Jt(a,"click",Cr),Jt(bt,"gesturestart",zi),Jt(bt,"gestureend",Ne),Jt(a,Fi+"enter",er),Jt(a,Fi+"leave",ei),Jt(a,Fi+"move",Ri),y.isEnabled=y.isPressed=y.isDragging=!1,Pt&&Pt(y))},y.kill=y.revert=function(){y.disable();var X=ur.indexOf(y);X>=0&&ur.splice(X,1),si===y&&(si=0)},ur.push(y),U&&Ur(a)&&(si=y),y.enable(p)},sc(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s}();xt.version="3.13.0";xt.create=function(s){return new xt(s)};xt.register=fl;xt.getAll=function(){return ur.slice()};xt.getById=function(s){return ur.filter(function(t){return t.vars.id===s})[0]};hl()&&It.registerPlugin(xt);/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var z,ar,q,at,ye,it,oo,Yn,on,$r,Lr,gn,$t,Kn,Rs,ie,No,Fo,lr,dl,os,pl,ee,Ds,gl,_l,_i,As,ao,_r,lo,Vn,Ls,as,_n=1,qt=Date.now,ls=qt(),Ae=0,Nr=0,Bo=function(t,i,e){var r=be(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return e["_"+i+"Clamp"]=r,r?t.substr(6,t.length-7):t},Io=function(t,i){return i&&(!be(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},lc=function s(){return Nr&&requestAnimationFrame(s)},Wo=function(){return Kn=1},Ho=function(){return Kn=0},Ue=function(t){return t},Fr=function(t){return Math.round(t*1e5)/1e5||0},ml=function(){return typeof window<"u"},bl=function(){return z||ml()&&(z=window.gsap)&&z.registerPlugin&&z},ji=function(t){return!!~oo.indexOf(t)},vl=function(t){return(t==="Height"?lo:q["inner"+t])||ye["client"+t]||it["client"+t]},yl=function(t){return Si(t,"getBoundingClientRect")||(ji(t)?function(){return Dn.width=q.innerWidth,Dn.height=lo,Dn}:function(){return ni(t)})},hc=function(t,i,e){var r=e.d,n=e.d2,o=e.a;return(o=Si(t,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(i?vl(n):t["client"+n])||0}},cc=function(t,i){return!i||~je.indexOf(t)?yl(t):function(){return Dn}},Ge=function(t,i){var e=i.s,r=i.d2,n=i.d,o=i.a;return Math.max(0,(e="scroll"+r)&&(o=Si(t,e))?o()-yl(t)()[n]:ji(t)?(ye[e]||it[e])-vl(r):t[e]-t["offset"+r])},mn=function(t,i){for(var e=0;e<lr.length;e+=3)(!i||~i.indexOf(lr[e+1]))&&t(lr[e],lr[e+1],lr[e+2])},be=function(t){return typeof t=="string"},jt=function(t){return typeof t=="function"},Br=function(t){return typeof t=="number"},Bi=function(t){return typeof t=="object"},zr=function(t,i,e){return t&&t.progress(i?0:1)&&e&&t.pause()},hs=function(t,i){if(t.enabled){var e=t._ctx?t._ctx.add(function(){return i(t)}):i(t);e&&e.totalTime&&(t.callbackAnimation=e)}},rr=Math.abs,xl="left",wl="top",ho="right",co="bottom",Ui="width",$i="height",qr="Right",Gr="Left",jr="Top",Kr="Bottom",St="padding",Oe="margin",Sr="Width",uo="Height",Ot="px",Me=function(t){return q.getComputedStyle(t)},uc=function(t){var i=Me(t).position;t.style.position=i==="absolute"||i==="fixed"?i:"relative"},Yo=function(t,i){for(var e in i)e in t||(t[e]=i[e]);return t},ni=function(t,i){var e=i&&Me(t)[Rs]!=="matrix(1, 0, 0, 1, 0, 0)"&&z.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=t.getBoundingClientRect();return e&&e.progress(0).kill(),r},Xn=function(t,i){var e=i.d2;return t["offset"+e]||t["client"+e]||0},Tl=function(t){var i=[],e=t.labels,r=t.duration(),n;for(n in e)i.push(e[n]/r);return i},fc=function(t){return function(i){return z.utils.snap(Tl(t),i)}},fo=function(t){var i=z.utils.snap(t),e=Array.isArray(t)&&t.slice(0).sort(function(r,n){return r-n});return e?function(r,n,o){o===void 0&&(o=.001);var a;if(!n)return i(r);if(n>0){for(r-=o,a=0;a<e.length;a++)if(e[a]>=r)return e[a];return e[a-1]}else for(a=e.length,r+=o;a--;)if(e[a]<=r)return e[a];return e[0]}:function(r,n,o){o===void 0&&(o=.001);var a=i(r);return!n||Math.abs(a-r)<o||a-r<0==n<0?a:i(n<0?r-t:r+t)}},dc=function(t){return function(i,e){return fo(Tl(t))(i,e.direction)}},bn=function(t,i,e,r){return e.split(",").forEach(function(n){return t(i,n,r)})},At=function(t,i,e,r,n){return t.addEventListener(i,e,{passive:!r,capture:!!n})},Dt=function(t,i,e,r){return t.removeEventListener(i,e,!!r)},vn=function(t,i,e){e=e&&e.wheelHandler,e&&(t(i,"wheel",e),t(i,"touchmove",e))},Vo={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},yn={toggleActions:"play",anticipatePin:0},Un={top:0,left:0,center:.5,bottom:1,right:1},On=function(t,i){if(be(t)){var e=t.indexOf("="),r=~e?+(t.charAt(e-1)+1)*parseFloat(t.substr(e+1)):0;~e&&(t.indexOf("%")>e&&(r*=i/100),t=t.substr(0,e-1)),t=r+(t in Un?Un[t]*i:~t.indexOf("%")?parseFloat(t)*i/100:parseFloat(t)||0)}return t},xn=function(t,i,e,r,n,o,a,l){var h=n.startColor,c=n.endColor,f=n.fontSize,d=n.indent,u=n.fontWeight,g=at.createElement("div"),p=ji(e)||Si(e,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,w=p?it:e,x=t.indexOf("start")!==-1,k=x?h:c,v="border-color:"+k+";font-size:"+f+";color:"+k+";font-weight:"+u+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((m||l)&&p?"fixed;":"absolute;"),(m||l||!p)&&(v+=(r===Mt?ho:co)+":"+(o+parseFloat(d))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+t+(i?" marker-"+i:"")),g.style.cssText=v,g.innerText=i||i===0?t+"-"+i:t,w.children[0]?w.insertBefore(g,w.children[0]):w.appendChild(g),g._offset=g["offset"+r.op.d2],Mn(g,0,r,x),g},Mn=function(t,i,e,r){var n={display:"block"},o=e[r?"os2":"p2"],a=e[r?"p2":"os2"];t._isFlipped=r,n[e.a+"Percent"]=r?-100:0,n[e.a]=r?"1px":0,n["border"+o+Sr]=1,n["border"+a+Sr]=0,n[e.p]=i+"px",z.set(t,n)},$=[],Ns={},an,Xo=function(){return qt()-Ae>34&&(an||(an=requestAnimationFrame(oi)))},nr=function(){(!ee||!ee.isPressed||ee.startX>it.clientWidth)&&(G.cache++,ee?an||(an=requestAnimationFrame(oi)):oi(),Ae||Qi("scrollStart"),Ae=qt())},cs=function(){_l=q.innerWidth,gl=q.innerHeight},Ir=function(t){G.cache++,(t===!0||!$t&&!pl&&!at.fullscreenElement&&!at.webkitFullscreenElement&&(!Ds||_l!==q.innerWidth||Math.abs(q.innerHeight-gl)>q.innerHeight*.25))&&Yn.restart(!0)},Ki={},pc=[],Sl=function s(){return Dt(K,"scrollEnd",s)||Wi(!0)},Qi=function(t){return Ki[t]&&Ki[t].map(function(i){return i()})||pc},me=[],kl=function(t){for(var i=0;i<me.length;i+=5)(!t||me[i+4]&&me[i+4].query===t)&&(me[i].style.cssText=me[i+1],me[i].getBBox&&me[i].setAttribute("transform",me[i+2]||""),me[i+3].uncache=1)},po=function(t,i){var e;for(ie=0;ie<$.length;ie++)e=$[ie],e&&(!i||e._ctx===i)&&(t?e.kill(1):e.revert(!0,!0));Vn=!0,i&&kl(i),i||Qi("revert")},Cl=function(t,i){G.cache++,(i||!re)&&G.forEach(function(e){return jt(e)&&e.cacheID++&&(e.rec=0)}),be(t)&&(q.history.scrollRestoration=ao=t)},re,qi=0,Uo,gc=function(){if(Uo!==qi){var t=Uo=qi;requestAnimationFrame(function(){return t===qi&&Wi(!0)})}},Pl=function(){it.appendChild(_r),lo=!ee&&_r.offsetHeight||q.innerHeight,it.removeChild(_r)},$o=function(t){return on(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(i){return i.style.display=t?"none":"block"})},Wi=function(t,i){if(ye=at.documentElement,it=at.body,oo=[q,at,ye,it],Ae&&!t&&!Vn){At(K,"scrollEnd",Sl);return}Pl(),re=K.isRefreshing=!0,G.forEach(function(r){return jt(r)&&++r.cacheID&&(r.rec=r())});var e=Qi("refreshInit");dl&&K.sort(),i||po(),G.forEach(function(r){jt(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),$.slice(0).forEach(function(r){return r.refresh()}),Vn=!1,$.forEach(function(r){if(r._subPinOffset&&r.pin){var n=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[n];r.revert(!0,1),r.adjustPinSpacing(r.pin[n]-o),r.refresh()}}),Ls=1,$o(!0),$.forEach(function(r){var n=Ge(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>n,a=r._startClamp&&r.start>=n;(o||a)&&r.setPositions(a?n-1:r.start,o?Math.max(a?n:r.start+1,n):r.end,!0)}),$o(!1),Ls=0,e.forEach(function(r){return r&&r.render&&r.render(-1)}),G.forEach(function(r){jt(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),Cl(ao,1),Yn.pause(),qi++,re=2,oi(2),$.forEach(function(r){return jt(r.vars.onRefresh)&&r.vars.onRefresh(r)}),re=K.isRefreshing=!1,Qi("refresh")},Fs=0,zn=1,Qr,oi=function(t){if(t===2||!re&&!Vn){K.isUpdating=!0,Qr&&Qr.update(0);var i=$.length,e=qt(),r=e-ls>=50,n=i&&$[0].scroll();if(zn=Fs>n?-1:1,re||(Fs=n),r&&(Ae&&!Kn&&e-Ae>200&&(Ae=0,Qi("scrollEnd")),Lr=ls,ls=e),zn<0){for(ie=i;ie-- >0;)$[ie]&&$[ie].update(0,r);zn=1}else for(ie=0;ie<i;ie++)$[ie]&&$[ie].update(0,r);K.isUpdating=!1}an=0},Bs=[xl,wl,co,ho,Oe+Kr,Oe+qr,Oe+jr,Oe+Gr,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Rn=Bs.concat([Ui,$i,"boxSizing","max"+Sr,"max"+uo,"position",Oe,St,St+jr,St+qr,St+Kr,St+Gr]),_c=function(t,i,e){mr(e);var r=t._gsap;if(r.spacerIsNative)mr(r.spacerState);else if(t._gsap.swappedIn){var n=i.parentNode;n&&(n.insertBefore(t,i),n.removeChild(i))}t._gsap.swappedIn=!1},us=function(t,i,e,r){if(!t._gsap.swappedIn){for(var n=Bs.length,o=i.style,a=t.style,l;n--;)l=Bs[n],o[l]=e[l];o.position=e.position==="absolute"?"absolute":"relative",e.display==="inline"&&(o.display="inline-block"),a[co]=a[ho]="auto",o.flexBasis=e.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ui]=Xn(t,se)+Ot,o[$i]=Xn(t,Mt)+Ot,o[St]=a[Oe]=a[wl]=a[xl]="0",mr(r),a[Ui]=a["max"+Sr]=e[Ui],a[$i]=a["max"+uo]=e[$i],a[St]=e[St],t.parentNode!==i&&(t.parentNode.insertBefore(i,t),i.appendChild(t)),t._gsap.swappedIn=!0}},mc=/([A-Z])/g,mr=function(t){if(t){var i=t.t.style,e=t.length,r=0,n,o;for((t.t._gsap||z.core.getCache(t.t)).uncache=1;r<e;r+=2)o=t[r+1],n=t[r],o?i[n]=o:i[n]&&i.removeProperty(n.replace(mc,"-$1").toLowerCase())}},wn=function(t){for(var i=Rn.length,e=t.style,r=[],n=0;n<i;n++)r.push(Rn[n],e[Rn[n]]);return r.t=t,r},bc=function(t,i,e){for(var r=[],n=t.length,o=e?8:0,a;o<n;o+=2)a=t[o],r.push(a,a in i?i[a]:t[o+1]);return r.t=t.t,r},Dn={left:0,top:0},qo=function(t,i,e,r,n,o,a,l,h,c,f,d,u,g){jt(t)&&(t=t(l)),be(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?On("0"+t.substr(3),e):0));var p=u?u.time():0,m,w,x;if(u&&u.seek(0),isNaN(t)||(t=+t),Br(t))u&&(t=z.utils.mapRange(u.scrollTrigger.start,u.scrollTrigger.end,0,d,t)),a&&Mn(a,e,r,!0);else{jt(i)&&(i=i(l));var k=(t||"0").split(" "),v,b,S,T;x=le(i,l)||it,v=ni(x)||{},(!v||!v.left&&!v.top)&&Me(x).display==="none"&&(T=x.style.display,x.style.display="block",v=ni(x),T?x.style.display=T:x.style.removeProperty("display")),b=On(k[0],v[r.d]),S=On(k[1]||"0",e),t=v[r.p]-h[r.p]-c+b+n-S,a&&Mn(a,S,r,e-S<20||a._isStart&&S>20),e-=e-S}if(g&&(l[g]=t||-.001,t<0&&(t=0)),o){var C=t+e,P=o._isStart;m="scroll"+r.d2,Mn(o,C,r,P&&C>20||!P&&(f?Math.max(it[m],ye[m]):o.parentNode[m])<=C+1),f&&(h=ni(a),f&&(o.style[r.op.p]=h[r.op.p]-r.op.m-o._offset+Ot))}return u&&x&&(m=ni(x),u.seek(d),w=ni(x),u._caScrollDist=m[r.p]-w[r.p],t=t/u._caScrollDist*d),u&&u.seek(p),u?t:Math.round(t)},vc=/(webkit|moz|length|cssText|inset)/i,Go=function(t,i,e,r){if(t.parentNode!==i){var n=t.style,o,a;if(i===it){t._stOrig=n.cssText,a=Me(t);for(o in a)!+o&&!vc.test(o)&&a[o]&&typeof n[o]=="string"&&o!=="0"&&(n[o]=a[o]);n.top=e,n.left=r}else n.cssText=t._stOrig;z.core.getCache(t).uncache=1,i.appendChild(t)}},El=function(t,i,e){var r=i,n=r;return function(o){var a=Math.round(t());return a!==r&&a!==n&&Math.abs(a-r)>3&&Math.abs(a-n)>3&&(o=a,e&&e()),n=r,r=Math.round(o),r}},Tn=function(t,i,e){var r={};r[i.p]="+="+e,z.set(t,r)},jo=function(t,i){var e=Pi(t,i),r="_scroll"+i.p2,n=function o(a,l,h,c,f){var d=o.tween,u=l.onComplete,g={};h=h||e();var p=El(e,h,function(){d.kill(),o.tween=0});return f=c&&f||0,c=c||a-h,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=g,g[r]=function(){return p(h+c*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){G.cache++,o.tween&&oi()},l.onComplete=function(){o.tween=0,u&&u.call(d)},d=o.tween=z.to(t,l),d};return t[r]=e,e.wheelHandler=function(){return n.tween&&n.tween.kill()&&(n.tween=0)},At(t,"wheel",e.wheelHandler),K.isTouch&&At(t,"touchmove",e.wheelHandler),n},K=function(){function s(i,e){ar||s.register(z)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),As(this),this.init(i,e)}var t=s.prototype;return t.init=function(e,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Nr){this.update=this.refresh=this.kill=Ue;return}e=Yo(be(e)||Br(e)||e.nodeType?{trigger:e}:e,yn);var n=e,o=n.onUpdate,a=n.toggleClass,l=n.id,h=n.onToggle,c=n.onRefresh,f=n.scrub,d=n.trigger,u=n.pin,g=n.pinSpacing,p=n.invalidateOnRefresh,m=n.anticipatePin,w=n.onScrubComplete,x=n.onSnapComplete,k=n.once,v=n.snap,b=n.pinReparent,S=n.pinSpacer,T=n.containerAnimation,C=n.fastScrollEnd,P=n.preventOverlaps,E=e.horizontal||e.containerAnimation&&e.horizontal!==!1?se:Mt,N=!f&&f!==0,O=le(e.scroller||q),R=z.core.getCache(O),B=ji(O),W=("pinType"in e?e.pinType:Si(O,"pinType")||B&&"fixed")==="fixed",I=[e.onEnter,e.onLeave,e.onEnterBack,e.onLeaveBack],D=N&&e.toggleActions.split(" "),U="markers"in e?e.markers:yn.markers,V=B?0:parseFloat(Me(O)["border"+E.p2+Sr])||0,_=this,Q=e.onRefreshInit&&function(){return e.onRefreshInit(_)},ot=hc(O,B,E),Pt=cc(O,B),lt=0,Nt=0,Ht=0,wt=Pi(O,E),Qt,Yt,hi,Zt,oe,tt,mt,ae,pe,y,ge,Qe,ci,pt,Ze,ui,Oi,zt,fi,bt,Le,Pe,Je,kr,Tt,hn,ti,Ji,tr,di,Mi,j,zi,Ne,Fe,Be,Ri,er,ei;if(_._startClamp=_._endClamp=!1,_._dir=E,m*=45,_.scroller=O,_.scroll=T?T.time.bind(T):wt,Zt=wt(),_.vars=e,r=r||e.animation,"refreshPriority"in e&&(dl=1,e.refreshPriority===-9999&&(Qr=_)),R.tweenScroll=R.tweenScroll||{top:jo(O,Mt),left:jo(O,se)},_.tweenTo=Qt=R.tweenScroll[E.p],_.scrubDuration=function(M){zi=Br(M)&&M,zi?j?j.duration(M):j=z.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:zi,paused:!0,onComplete:function(){return w&&w(_)}}):(j&&j.progress(1).kill(),j=0)},r&&(r.vars.lazy=!1,r._initted&&!_.isReverted||r.vars.immediateRender!==!1&&e.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),_.animation=r.pause(),r.scrollTrigger=_,_.scrubDuration(f),di=0,l||(l=r.vars.id)),v&&((!Bi(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in it.style&&z.set(B?[it,ye]:O,{scrollBehavior:"auto"}),G.forEach(function(M){return jt(M)&&M.target===(B?at.scrollingElement||ye:O)&&(M.smooth=!1)}),hi=jt(v.snapTo)?v.snapTo:v.snapTo==="labels"?fc(r):v.snapTo==="labelsDirectional"?dc(r):v.directional!==!1?function(M,H){return fo(v.snapTo)(M,qt()-Nt<500?0:H.direction)}:z.utils.snap(v.snapTo),Ne=v.duration||{min:.1,max:2},Ne=Bi(Ne)?$r(Ne.min,Ne.max):$r(Ne,Ne),Fe=z.delayedCall(v.delay||zi/2||.1,function(){var M=wt(),H=qt()-Nt<500,L=Qt.tween;if((H||Math.abs(_.getVelocity())<10)&&!L&&!Kn&&lt!==M){var Y=(M-tt)/pt,Rt=r&&!N?r.totalProgress():Y,Z=H?0:(Rt-Mi)/(qt()-Lr)*1e3||0,vt=z.utils.clamp(-Y,1-Y,rr(Z/2)*Z/.185),Vt=Y+(v.inertia===!1?0:vt),gt,ht,rt=v,Ie=rt.onStart,ut=rt.onInterrupt,_e=rt.onComplete;if(gt=hi(Vt,_),Br(gt)||(gt=Vt),ht=Math.max(0,Math.round(tt+gt*pt)),M<=mt&&M>=tt&&ht!==M){if(L&&!L._initted&&L.data<=rr(ht-M))return;v.inertia===!1&&(vt=gt-Y),Qt(ht,{duration:Ne(rr(Math.max(rr(Vt-Rt),rr(gt-Rt))*.185/Z/.05||0)),ease:v.ease||"power3",data:rr(ht-M),onInterrupt:function(){return Fe.restart(!0)&&ut&&ut(_)},onComplete:function(){_.update(),lt=wt(),r&&!N&&(j?j.resetTo("totalProgress",gt,r._tTime/r._tDur):r.progress(gt)),di=Mi=r&&!N?r.totalProgress():_.progress,x&&x(_),_e&&_e(_)}},M,vt*pt,ht-M-vt*pt),Ie&&Ie(_,Qt.tween)}}else _.isActive&&lt!==M&&Fe.restart(!0)}).pause()),l&&(Ns[l]=_),d=_.trigger=le(d||u!==!0&&u),ei=d&&d._gsap&&d._gsap.stRevert,ei&&(ei=ei(_)),u=u===!0?d:le(u),be(a)&&(a={targets:d,className:a}),u&&(g===!1||g===Oe||(g=!g&&u.parentNode&&u.parentNode.style&&Me(u.parentNode).display==="flex"?!1:St),_.pin=u,Yt=z.core.getCache(u),Yt.spacer?Ze=Yt.pinState:(S&&(S=le(S),S&&!S.nodeType&&(S=S.current||S.nativeElement),Yt.spacerIsNative=!!S,S&&(Yt.spacerState=wn(S))),Yt.spacer=zt=S||at.createElement("div"),zt.classList.add("pin-spacer"),l&&zt.classList.add("pin-spacer-"+l),Yt.pinState=Ze=wn(u)),e.force3D!==!1&&z.set(u,{force3D:!0}),_.spacer=zt=Yt.spacer,tr=Me(u),kr=tr[g+E.os2],bt=z.getProperty(u),Le=z.quickSetter(u,E.a,Ot),us(u,zt,tr),Oi=wn(u)),U){Qe=Bi(U)?Yo(U,Vo):Vo,y=xn("scroller-start",l,O,E,Qe,0),ge=xn("scroller-end",l,O,E,Qe,0,y),fi=y["offset"+E.op.d2];var Cr=le(Si(O,"content")||O);ae=this.markerStart=xn("start",l,Cr,E,Qe,fi,0,T),pe=this.markerEnd=xn("end",l,Cr,E,Qe,fi,0,T),T&&(er=z.quickSetter([ae,pe],E.a,Ot)),!W&&!(je.length&&Si(O,"fixedMarkers")===!0)&&(uc(B?it:O),z.set([y,ge],{force3D:!0}),hn=z.quickSetter(y,E.a,Ot),Ji=z.quickSetter(ge,E.a,Ot))}if(T){var X=T.vars.onUpdate,F=T.vars.onUpdateParams;T.eventCallback("onUpdate",function(){_.update(0,0,1),X&&X.apply(T,F||[])})}if(_.previous=function(){return $[$.indexOf(_)-1]},_.next=function(){return $[$.indexOf(_)+1]},_.revert=function(M,H){if(!H)return _.kill(!0);var L=M!==!1||!_.enabled,Y=$t;L!==_.isReverted&&(L&&(Be=Math.max(wt(),_.scroll.rec||0),Ht=_.progress,Ri=r&&r.progress()),ae&&[ae,pe,y,ge].forEach(function(Rt){return Rt.style.display=L?"none":"block"}),L&&($t=_,_.update(L)),u&&(!b||!_.isActive)&&(L?_c(u,zt,Ze):us(u,zt,Me(u),Tt)),L||_.update(L),$t=Y,_.isReverted=L)},_.refresh=function(M,H,L,Y){if(!(($t||!_.enabled)&&!H)){if(u&&M&&Ae){At(s,"scrollEnd",Sl);return}!re&&Q&&Q(_),$t=_,Qt.tween&&!L&&(Qt.tween.kill(),Qt.tween=0),j&&j.pause(),p&&r&&(r.revert({kill:!1}).invalidate(),r.getChildren&&r.getChildren(!0,!0,!1).forEach(function(pi){return pi.vars.immediateRender&&pi.render(0,!0,!0)})),_.isReverted||_.revert(!0,!0),_._subPinOffset=!1;var Rt=ot(),Z=Pt(),vt=T?T.duration():Ge(O,E),Vt=pt<=.01||!pt,gt=0,ht=Y||0,rt=Bi(L)?L.end:e.end,Ie=e.endTrigger||d,ut=Bi(L)?L.start:e.start||(e.start===0||!d?0:u?"0 0":"0 100%"),_e=_.pinnedContainer=e.pinnedContainer&&le(e.pinnedContainer,_),He=d&&Math.max(0,$.indexOf(_))||0,Ft=He,Bt,Xt,Di,cn,Ut,Et,Ye,Qn,go,Pr,Ve,Er,un;for(U&&Bi(L)&&(Er=z.getProperty(y,E.p),un=z.getProperty(ge,E.p));Ft-- >0;)Et=$[Ft],Et.end||Et.refresh(0,1)||($t=_),Ye=Et.pin,Ye&&(Ye===d||Ye===u||Ye===_e)&&!Et.isReverted&&(Pr||(Pr=[]),Pr.unshift(Et),Et.revert(!0,!0)),Et!==$[Ft]&&(He--,Ft--);for(jt(ut)&&(ut=ut(_)),ut=Bo(ut,"start",_),tt=qo(ut,d,Rt,E,wt(),ae,y,_,Z,V,W,vt,T,_._startClamp&&"_startClamp")||(u?-.001:0),jt(rt)&&(rt=rt(_)),be(rt)&&!rt.indexOf("+=")&&(~rt.indexOf(" ")?rt=(be(ut)?ut.split(" ")[0]:"")+rt:(gt=On(rt.substr(2),Rt),rt=be(ut)?ut:(T?z.utils.mapRange(0,T.duration(),T.scrollTrigger.start,T.scrollTrigger.end,tt):tt)+gt,Ie=d)),rt=Bo(rt,"end",_),mt=Math.max(tt,qo(rt||(Ie?"100% 0":vt),Ie,Rt,E,wt()+gt,pe,ge,_,Z,V,W,vt,T,_._endClamp&&"_endClamp"))||-.001,gt=0,Ft=He;Ft--;)Et=$[Ft],Ye=Et.pin,Ye&&Et.start-Et._pinPush<=tt&&!T&&Et.end>0&&(Bt=Et.end-(_._startClamp?Math.max(0,Et.start):Et.start),(Ye===d&&Et.start-Et._pinPush<tt||Ye===_e)&&isNaN(ut)&&(gt+=Bt*(1-Et.progress)),Ye===u&&(ht+=Bt));if(tt+=gt,mt+=gt,_._startClamp&&(_._startClamp+=gt),_._endClamp&&!re&&(_._endClamp=mt||-.001,mt=Math.min(mt,Ge(O,E))),pt=mt-tt||(tt-=.01)&&.001,Vt&&(Ht=z.utils.clamp(0,1,z.utils.normalize(tt,mt,Be))),_._pinPush=ht,ae&&gt&&(Bt={},Bt[E.a]="+="+gt,_e&&(Bt[E.p]="-="+wt()),z.set([ae,pe],Bt)),u&&!(Ls&&_.end>=Ge(O,E)))Bt=Me(u),cn=E===Mt,Di=wt(),Pe=parseFloat(bt(E.a))+ht,!vt&&mt>1&&(Ve=(B?at.scrollingElement||ye:O).style,Ve={style:Ve,value:Ve["overflow"+E.a.toUpperCase()]},B&&Me(it)["overflow"+E.a.toUpperCase()]!=="scroll"&&(Ve.style["overflow"+E.a.toUpperCase()]="scroll")),us(u,zt,Bt),Oi=wn(u),Xt=ni(u,!0),Qn=W&&Pi(O,cn?se:Mt)(),g?(Tt=[g+E.os2,pt+ht+Ot],Tt.t=zt,Ft=g===St?Xn(u,E)+pt+ht:0,Ft&&(Tt.push(E.d,Ft+Ot),zt.style.flexBasis!=="auto"&&(zt.style.flexBasis=Ft+Ot)),mr(Tt),_e&&$.forEach(function(pi){pi.pin===_e&&pi.vars.pinSpacing!==!1&&(pi._subPinOffset=!0)}),W&&wt(Be)):(Ft=Xn(u,E),Ft&&zt.style.flexBasis!=="auto"&&(zt.style.flexBasis=Ft+Ot)),W&&(Ut={top:Xt.top+(cn?Di-tt:Qn)+Ot,left:Xt.left+(cn?Qn:Di-tt)+Ot,boxSizing:"border-box",position:"fixed"},Ut[Ui]=Ut["max"+Sr]=Math.ceil(Xt.width)+Ot,Ut[$i]=Ut["max"+uo]=Math.ceil(Xt.height)+Ot,Ut[Oe]=Ut[Oe+jr]=Ut[Oe+qr]=Ut[Oe+Kr]=Ut[Oe+Gr]="0",Ut[St]=Bt[St],Ut[St+jr]=Bt[St+jr],Ut[St+qr]=Bt[St+qr],Ut[St+Kr]=Bt[St+Kr],Ut[St+Gr]=Bt[St+Gr],ui=bc(Ze,Ut,b),re&&wt(0)),r?(go=r._initted,os(1),r.render(r.duration(),!0,!0),Je=bt(E.a)-Pe+pt+ht,ti=Math.abs(pt-Je)>1,W&&ti&&ui.splice(ui.length-2,2),r.render(0,!0,!0),go||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),os(0)):Je=pt,Ve&&(Ve.value?Ve.style["overflow"+E.a.toUpperCase()]=Ve.value:Ve.style.removeProperty("overflow-"+E.a));else if(d&&wt()&&!T)for(Xt=d.parentNode;Xt&&Xt!==it;)Xt._pinOffset&&(tt-=Xt._pinOffset,mt-=Xt._pinOffset),Xt=Xt.parentNode;Pr&&Pr.forEach(function(pi){return pi.revert(!1,!0)}),_.start=tt,_.end=mt,Zt=oe=re?Be:wt(),!T&&!re&&(Zt<Be&&wt(Be),_.scroll.rec=0),_.revert(!1,!0),Nt=qt(),Fe&&(lt=-1,Fe.restart(!0)),$t=0,r&&N&&(r._initted||Ri)&&r.progress()!==Ri&&r.progress(Ri||0,!0).render(r.time(),!0,!0),(Vt||Ht!==_.progress||T||p||r&&!r._initted)&&(r&&!N&&(r._initted||Ht||r.vars.immediateRender!==!1)&&r.totalProgress(T&&tt<-.001&&!Ht?z.utils.normalize(tt,mt,0):Ht,!0),_.progress=Vt||(Zt-tt)/pt===Ht?0:Ht),u&&g&&(zt._pinOffset=Math.round(_.progress*Je)),j&&j.invalidate(),isNaN(Er)||(Er-=z.getProperty(y,E.p),un-=z.getProperty(ge,E.p),Tn(y,E,Er),Tn(ae,E,Er-(Y||0)),Tn(ge,E,un),Tn(pe,E,un-(Y||0))),Vt&&!re&&_.update(),c&&!re&&!ci&&(ci=!0,c(_),ci=!1)}},_.getVelocity=function(){return(wt()-oe)/(qt()-Lr)*1e3||0},_.endAnimation=function(){zr(_.callbackAnimation),r&&(j?j.progress(1):r.paused()?N||zr(r,_.direction<0,1):zr(r,r.reversed()))},_.labelToScroll=function(M){return r&&r.labels&&(tt||_.refresh()||tt)+r.labels[M]/r.duration()*pt||0},_.getTrailing=function(M){var H=$.indexOf(_),L=_.direction>0?$.slice(0,H).reverse():$.slice(H+1);return(be(M)?L.filter(function(Y){return Y.vars.preventOverlaps===M}):L).filter(function(Y){return _.direction>0?Y.end<=tt:Y.start>=mt})},_.update=function(M,H,L){if(!(T&&!L&&!M)){var Y=re===!0?Be:_.scroll(),Rt=M?0:(Y-tt)/pt,Z=Rt<0?0:Rt>1?1:Rt||0,vt=_.progress,Vt,gt,ht,rt,Ie,ut,_e,He;if(H&&(oe=Zt,Zt=T?wt():Y,v&&(Mi=di,di=r&&!N?r.totalProgress():Z)),m&&u&&!$t&&!_n&&Ae&&(!Z&&tt<Y+(Y-oe)/(qt()-Lr)*m?Z=1e-4:Z===1&&mt>Y+(Y-oe)/(qt()-Lr)*m&&(Z=.9999)),Z!==vt&&_.enabled){if(Vt=_.isActive=!!Z&&Z<1,gt=!!vt&&vt<1,ut=Vt!==gt,Ie=ut||!!Z!=!!vt,_.direction=Z>vt?1:-1,_.progress=Z,Ie&&!$t&&(ht=Z&&!vt?0:Z===1?1:vt===1?2:3,N&&(rt=!ut&&D[ht+1]!=="none"&&D[ht+1]||D[ht],He=r&&(rt==="complete"||rt==="reset"||rt in r))),P&&(ut||He)&&(He||f||!r)&&(jt(P)?P(_):_.getTrailing(P).forEach(function(Di){return Di.endAnimation()})),N||(j&&!$t&&!_n?(j._dp._time-j._start!==j._time&&j.render(j._dp._time-j._start),j.resetTo?j.resetTo("totalProgress",Z,r._tTime/r._tDur):(j.vars.totalProgress=Z,j.invalidate().restart())):r&&r.totalProgress(Z,!!($t&&(Nt||M)))),u){if(M&&g&&(zt.style[g+E.os2]=kr),!W)Le(Fr(Pe+Je*Z));else if(Ie){if(_e=!M&&Z>vt&&mt+1>Y&&Y+1>=Ge(O,E),b)if(!M&&(Vt||_e)){var Ft=ni(u,!0),Bt=Y-tt;Go(u,it,Ft.top+(E===Mt?Bt:0)+Ot,Ft.left+(E===Mt?0:Bt)+Ot)}else Go(u,zt);mr(Vt||_e?ui:Oi),ti&&Z<1&&Vt||Le(Pe+(Z===1&&!_e?Je:0))}}v&&!Qt.tween&&!$t&&!_n&&Fe.restart(!0),a&&(ut||k&&Z&&(Z<1||!as))&&on(a.targets).forEach(function(Di){return Di.classList[Vt||k?"add":"remove"](a.className)}),o&&!N&&!M&&o(_),Ie&&!$t?(N&&(He&&(rt==="complete"?r.pause().totalProgress(1):rt==="reset"?r.restart(!0).pause():rt==="restart"?r.restart(!0):r[rt]()),o&&o(_)),(ut||!as)&&(h&&ut&&hs(_,h),I[ht]&&hs(_,I[ht]),k&&(Z===1?_.kill(!1,1):I[ht]=0),ut||(ht=Z===1?1:3,I[ht]&&hs(_,I[ht]))),C&&!Vt&&Math.abs(_.getVelocity())>(Br(C)?C:2500)&&(zr(_.callbackAnimation),j?j.progress(1):zr(r,rt==="reverse"?1:!Z,1))):N&&o&&!$t&&o(_)}if(Ji){var Xt=T?Y/T.duration()*(T._caScrollDist||0):Y;hn(Xt+(y._isFlipped?1:0)),Ji(Xt)}er&&er(-Y/T.duration()*(T._caScrollDist||0))}},_.enable=function(M,H){_.enabled||(_.enabled=!0,At(O,"resize",Ir),B||At(O,"scroll",nr),Q&&At(s,"refreshInit",Q),M!==!1&&(_.progress=Ht=0,Zt=oe=lt=wt()),H!==!1&&_.refresh())},_.getTween=function(M){return M&&Qt?Qt.tween:j},_.setPositions=function(M,H,L,Y){if(T){var Rt=T.scrollTrigger,Z=T.duration(),vt=Rt.end-Rt.start;M=Rt.start+vt*M/Z,H=Rt.start+vt*H/Z}_.refresh(!1,!1,{start:Io(M,L&&!!_._startClamp),end:Io(H,L&&!!_._endClamp)},Y),_.update()},_.adjustPinSpacing=function(M){if(Tt&&M){var H=Tt.indexOf(E.d)+1;Tt[H]=parseFloat(Tt[H])+M+Ot,Tt[1]=parseFloat(Tt[1])+M+Ot,mr(Tt)}},_.disable=function(M,H){if(_.enabled&&(M!==!1&&_.revert(!0,!0),_.enabled=_.isActive=!1,H||j&&j.pause(),Be=0,Yt&&(Yt.uncache=1),Q&&Dt(s,"refreshInit",Q),Fe&&(Fe.pause(),Qt.tween&&Qt.tween.kill()&&(Qt.tween=0)),!B)){for(var L=$.length;L--;)if($[L].scroller===O&&$[L]!==_)return;Dt(O,"resize",Ir),B||Dt(O,"scroll",nr)}},_.kill=function(M,H){_.disable(M,H),j&&!H&&j.kill(),l&&delete Ns[l];var L=$.indexOf(_);L>=0&&$.splice(L,1),L===ie&&zn>0&&ie--,L=0,$.forEach(function(Y){return Y.scroller===_.scroller&&(L=1)}),L||re||(_.scroll.rec=0),r&&(r.scrollTrigger=null,M&&r.revert({kill:!1}),H||r.kill()),ae&&[ae,pe,y,ge].forEach(function(Y){return Y.parentNode&&Y.parentNode.removeChild(Y)}),Qr===_&&(Qr=0),u&&(Yt&&(Yt.uncache=1),L=0,$.forEach(function(Y){return Y.pin===u&&L++}),L||(Yt.spacer=0)),e.onKill&&e.onKill(_)},$.push(_),_.enable(!1,!1),ei&&ei(_),r&&r.add&&!pt){var et=_.update;_.update=function(){_.update=et,G.cache++,tt||mt||_.refresh()},z.delayedCall(.01,_.update),pt=.01,tt=mt=0}else _.refresh();u&&gc()},s.register=function(e){return ar||(z=e||bl(),ml()&&window.document&&s.enable(),ar=Nr),ar},s.defaults=function(e){if(e)for(var r in e)yn[r]=e[r];return yn},s.disable=function(e,r){Nr=0,$.forEach(function(o){return o[r?"kill":"disable"](e)}),Dt(q,"wheel",nr),Dt(at,"scroll",nr),clearInterval(gn),Dt(at,"touchcancel",Ue),Dt(it,"touchstart",Ue),bn(Dt,at,"pointerdown,touchstart,mousedown",Wo),bn(Dt,at,"pointerup,touchend,mouseup",Ho),Yn.kill(),mn(Dt);for(var n=0;n<G.length;n+=3)vn(Dt,G[n],G[n+1]),vn(Dt,G[n],G[n+2])},s.enable=function(){if(q=window,at=document,ye=at.documentElement,it=at.body,z&&(on=z.utils.toArray,$r=z.utils.clamp,As=z.core.context||Ue,os=z.core.suppressOverwrites||Ue,ao=q.history.scrollRestoration||"auto",Fs=q.pageYOffset||0,z.core.globals("ScrollTrigger",s),it)){Nr=1,_r=document.createElement("div"),_r.style.height="100vh",_r.style.position="absolute",Pl(),lc(),xt.register(z),s.isTouch=xt.isTouch,_i=xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ds=xt.isTouch===1,At(q,"wheel",nr),oo=[q,at,ye,it],z.matchMedia?(s.matchMedia=function(h){var c=z.matchMedia(),f;for(f in h)c.add(f,h[f]);return c},z.addEventListener("matchMediaInit",function(){return po()}),z.addEventListener("matchMediaRevert",function(){return kl()}),z.addEventListener("matchMedia",function(){Wi(0,1),Qi("matchMedia")}),z.matchMedia().add("(orientation: portrait)",function(){return cs(),cs})):console.warn("Requires GSAP 3.11.0 or later"),cs(),At(at,"scroll",nr);var e=it.hasAttribute("style"),r=it.style,n=r.borderTopStyle,o=z.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),r.borderTopStyle="solid",a=ni(it),Mt.m=Math.round(a.top+Mt.sc())||0,se.m=Math.round(a.left+se.sc())||0,n?r.borderTopStyle=n:r.removeProperty("border-top-style"),e||(it.setAttribute("style",""),it.removeAttribute("style")),gn=setInterval(Xo,250),z.delayedCall(.5,function(){return _n=0}),At(at,"touchcancel",Ue),At(it,"touchstart",Ue),bn(At,at,"pointerdown,touchstart,mousedown",Wo),bn(At,at,"pointerup,touchend,mouseup",Ho),Rs=z.utils.checkPrefix("transform"),Rn.push(Rs),ar=qt(),Yn=z.delayedCall(.2,Wi).pause(),lr=[at,"visibilitychange",function(){var h=q.innerWidth,c=q.innerHeight;at.hidden?(No=h,Fo=c):(No!==h||Fo!==c)&&Ir()},at,"DOMContentLoaded",Wi,q,"load",Wi,q,"resize",Ir],mn(At),$.forEach(function(h){return h.enable(0,1)}),l=0;l<G.length;l+=3)vn(Dt,G[l],G[l+1]),vn(Dt,G[l],G[l+2])}},s.config=function(e){"limitCallbacks"in e&&(as=!!e.limitCallbacks);var r=e.syncInterval;r&&clearInterval(gn)||(gn=r)&&setInterval(Xo,r),"ignoreMobileResize"in e&&(Ds=s.isTouch===1&&e.ignoreMobileResize),"autoRefreshEvents"in e&&(mn(Dt)||mn(At,e.autoRefreshEvents||"none"),pl=(e.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(e,r){var n=le(e),o=G.indexOf(n),a=ji(n);~o&&G.splice(o,a?6:2),r&&(a?je.unshift(q,r,it,r,ye,r):je.unshift(n,r))},s.clearMatchMedia=function(e){$.forEach(function(r){return r._ctx&&r._ctx.query===e&&r._ctx.kill(!0,!0)})},s.isInViewport=function(e,r,n){var o=(be(e)?le(e):e).getBoundingClientRect(),a=o[n?Ui:$i]*r||0;return n?o.right-a>0&&o.left+a<q.innerWidth:o.bottom-a>0&&o.top+a<q.innerHeight},s.positionInViewport=function(e,r,n){be(e)&&(e=le(e));var o=e.getBoundingClientRect(),a=o[n?Ui:$i],l=r==null?a/2:r in Un?Un[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return n?(o.left+l)/q.innerWidth:(o.top+l)/q.innerHeight},s.killAll=function(e){if($.slice(0).forEach(function(n){return n.vars.id!=="ScrollSmoother"&&n.kill()}),e!==!0){var r=Ki.killAll||[];Ki={},r.forEach(function(n){return n()})}},s}();K.version="3.13.0";K.saveStyles=function(s){return s?on(s).forEach(function(t){if(t&&t.style){var i=me.indexOf(t);i>=0&&me.splice(i,5),me.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),z.core.getCache(t),As())}}):me};K.revert=function(s,t){return po(!s,t)};K.create=function(s,t){return new K(s,t)};K.refresh=function(s){return s?Ir(!0):(ar||K.register())&&Wi(!0)};K.update=function(s){return++G.cache&&oi(s===!0?2:0)};K.clearScrollMemory=Cl;K.maxScroll=function(s,t){return Ge(s,t?se:Mt)};K.getScrollFunc=function(s,t){return Pi(le(s),t?se:Mt)};K.getById=function(s){return Ns[s]};K.getAll=function(){return $.filter(function(s){return s.vars.id!=="ScrollSmoother"})};K.isScrolling=function(){return!!Ae};K.snapDirectional=fo;K.addEventListener=function(s,t){var i=Ki[s]||(Ki[s]=[]);~i.indexOf(t)||i.push(t)};K.removeEventListener=function(s,t){var i=Ki[s],e=i&&i.indexOf(t);e>=0&&i.splice(e,1)};K.batch=function(s,t){var i=[],e={},r=t.interval||.016,n=t.batchMax||1e9,o=function(h,c){var f=[],d=[],u=z.delayedCall(r,function(){c(f,d),f=[],d=[]}).pause();return function(g){f.length||u.restart(!0),f.push(g.trigger),d.push(g),n<=f.length&&u.progress(1)}},a;for(a in t)e[a]=a.substr(0,2)==="on"&&jt(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return jt(n)&&(n=n(),At(K,"refresh",function(){return n=t.batchMax()})),on(s).forEach(function(l){var h={};for(a in e)h[a]=e[a];h.trigger=l,i.push(K.create(h))}),i};var Ko=function(t,i,e,r){return i>r?t(r):i<0&&t(0),e>r?(r-i)/(e-i):e<0?i/(i-e):1},fs=function s(t,i){i===!0?t.style.removeProperty("touch-action"):t.style.touchAction=i===!0?"auto":i?"pan-"+i+(xt.isTouch?" pinch-zoom":""):"none",t===ye&&s(it,i)},Sn={auto:1,scroll:1},yc=function(t){var i=t.event,e=t.target,r=t.axis,n=(i.changedTouches?i.changedTouches[0]:i).target,o=n._gsap||z.core.getCache(n),a=qt(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;n&&n!==it&&(n.scrollHeight<=n.clientHeight&&n.scrollWidth<=n.clientWidth||!(Sn[(l=Me(n)).overflowY]||Sn[l.overflowX]));)n=n.parentNode;o._isScroll=n&&n!==e&&!ji(n)&&(Sn[(l=Me(n)).overflowY]||Sn[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(i.stopPropagation(),i._gsapAllow=!0)},Ol=function(t,i,e,r){return xt.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:i,onWheel:r=r&&yc,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return e&&At(at,xt.eventTypes[0],Zo,!1,!0)},onDisable:function(){return Dt(at,xt.eventTypes[0],Zo,!0)}})},xc=/(input|label|select|textarea)/i,Qo,Zo=function(t){var i=xc.test(t.target.tagName);(i||Qo)&&(t._gsapAllow=!0,Qo=i)},wc=function(t){Bi(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var i=t,e=i.normalizeScrollX,r=i.momentum,n=i.allowNestedScroll,o=i.onRelease,a,l,h=le(t.target)||ye,c=z.core.globals().ScrollSmoother,f=c&&c.get(),d=_i&&(t.content&&le(t.content)||f&&t.content!==!1&&!f.smooth()&&f.content()),u=Pi(h,Mt),g=Pi(h,se),p=1,m=(xt.isTouch&&q.visualViewport?q.visualViewport.scale*q.visualViewport.width:q.outerWidth)/q.innerWidth,w=0,x=jt(r)?function(){return r(a)}:function(){return r||2.8},k,v,b=Ol(h,t.type,!0,n),S=function(){return v=!1},T=Ue,C=Ue,P=function(){l=Ge(h,Mt),C=$r(_i?1:0,l),e&&(T=$r(0,Ge(h,se))),k=qi},E=function(){d._gsap.y=Fr(parseFloat(d._gsap.y)+u.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",u.offset=u.cacheID=0},N=function(){if(v){requestAnimationFrame(S);var U=Fr(a.deltaY/2),V=C(u.v-U);if(d&&V!==u.v+u.offset){u.offset=V-u.v;var _=Fr((parseFloat(d&&d._gsap.y)||0)-u.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+_+", 0, 1)",d._gsap.y=_+"px",u.cacheID=G.cache,oi()}return!0}u.offset&&E(),v=!0},O,R,B,W,I=function(){P(),O.isActive()&&O.vars.scrollY>l&&(u()>l?O.progress(1)&&u(l):O.resetTo("scrollY",l))};return d&&z.set(d,{y:"+=0"}),t.ignoreCheck=function(D){return _i&&D.type==="touchmove"&&N()||p>1.05&&D.type!=="touchstart"||a.isGesturing||D.touches&&D.touches.length>1},t.onPress=function(){v=!1;var D=p;p=Fr((q.visualViewport&&q.visualViewport.scale||1)/m),O.pause(),D!==p&&fs(h,p>1.01?!0:e?!1:"x"),R=g(),B=u(),P(),k=qi},t.onRelease=t.onGestureStart=function(D,U){if(u.offset&&E(),!U)W.restart(!0);else{G.cache++;var V=x(),_,Q;e&&(_=g(),Q=_+V*.05*-D.velocityX/.227,V*=Ko(g,_,Q,Ge(h,se)),O.vars.scrollX=T(Q)),_=u(),Q=_+V*.05*-D.velocityY/.227,V*=Ko(u,_,Q,Ge(h,Mt)),O.vars.scrollY=C(Q),O.invalidate().duration(V).play(.01),(_i&&O.vars.scrollY>=l||_>=l-1)&&z.to({},{onUpdate:I,duration:V})}o&&o(D)},t.onWheel=function(){O._ts&&O.pause(),qt()-w>1e3&&(k=0,w=qt())},t.onChange=function(D,U,V,_,Q){if(qi!==k&&P(),U&&e&&g(T(_[2]===U?R+(D.startX-D.x):g()+U-_[1])),V){u.offset&&E();var ot=Q[2]===V,Pt=ot?B+D.startY-D.y:u()+V-Q[1],lt=C(Pt);ot&&Pt!==lt&&(B+=lt-Pt),u(lt)}(V||U)&&oi()},t.onEnable=function(){fs(h,e?!1:"x"),K.addEventListener("refresh",I),At(q,"resize",I),u.smooth&&(u.target.style.scrollBehavior="auto",u.smooth=g.smooth=!1),b.enable()},t.onDisable=function(){fs(h,!0),Dt(q,"resize",I),K.removeEventListener("refresh",I),b.kill()},t.lockAxis=t.lockAxis!==!1,a=new xt(t),a.iOS=_i,_i&&!u()&&u(1),_i&&z.ticker.add(Ue),W=a._dc,O=z.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:e?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:El(u,u(),function(){return O.pause()})},onUpdate:oi,onComplete:W.vars.onComplete}),a};K.sort=function(s){if(jt(s))return $.sort(s);var t=q.pageYOffset||0;return K.getAll().forEach(function(i){return i._sortY=i.trigger?t+i.trigger.getBoundingClientRect().top:i.start+q.innerHeight}),$.sort(s||function(i,e){return(i.vars.refreshPriority||0)*-1e6+(i.vars.containerAnimation?1e6:i._sortY)-((e.vars.containerAnimation?1e6:e._sortY)+(e.vars.refreshPriority||0)*-1e6)})};K.observe=function(s){return new xt(s)};K.normalizeScroll=function(s){if(typeof s>"u")return ee;if(s===!0&&ee)return ee.enable();if(s===!1){ee&&ee.kill(),ee=s;return}var t=s instanceof xt?s:wc(s);return ee&&ee.target===t.target&&ee.kill(),ji(t.target)&&(ee=t),t};K.core={_getVelocityProp:zs,_inputObserver:Ol,_scrollers:G,_proxies:je,bridge:{ss:function(){Ae||Qi("scrollStart"),Ae=qt()},ref:function(){return $t}}};bl()&&z.registerPlugin(K);/*!
 * SplitText 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2025, GreenSock. All rights reserved. Subject to the terms at https://gsap.com/standard-license.
 * @author: Jack Doyle
 */let Rr,sr,Is,Tc=()=>Is||Cc.register(window.gsap),Jo=typeof Intl<"u"?new Intl.Segmenter:0,$n=s=>typeof s=="string"?$n(document.querySelectorAll(s)):"length"in s?Array.from(s):[s],ta=s=>$n(s).filter(t=>t instanceof HTMLElement),Ws=[],ds=function(){},Sc=/\s+/g,ea=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),ia={left:0,top:0,width:0,height:0},ra=(s,t)=>{if(t){let i=new Set(s.join("").match(t)||Ws),e=s.length,r,n,o,a;if(i.size)for(;--e>-1;){n=s[e];for(o of i)if(o.startsWith(n)&&o.length>n.length){for(r=0,a=n;o.startsWith(a+=s[e+ ++r])&&a.length<o.length;);if(r&&a.length===o.length){s[e]=o,s.splice(e+1,r);break}}}}return s},na=s=>window.getComputedStyle(s).display==="inline"&&(s.style.display="inline-block"),or=(s,t,i)=>t.insertBefore(typeof s=="string"?document.createTextNode(s):s,i),Hs=(s,t,i)=>{let e=t[s+"sClass"]||"",{tag:r="div",aria:n="auto",propIndex:o=!1}=t,a=s==="line"?"block":"inline-block",l=e.indexOf("++")>-1,h=c=>{let f=document.createElement(r),d=i.length+1;return e&&(f.className=e+(l?" "+e+d:"")),o&&f.style.setProperty("--"+s,d+""),n!=="none"&&f.setAttribute("aria-hidden","true"),r!=="span"&&(f.style.position="relative",f.style.display=a),f.textContent=c,i.push(f),f};return l&&(e=e.replace("++","")),h.collection=i,h},kc=(s,t,i,e)=>{let r=Hs("line",i,e),n=window.getComputedStyle(s).textAlign||"left";return(o,a)=>{let l=r("");for(l.style.textAlign=n,s.insertBefore(l,t[o]);o<a;o++)l.appendChild(t[o]);l.normalize()}},Ml=(s,t,i,e,r,n,o,a,l,h)=>{var c;let f=Array.from(s.childNodes),d=0,{wordDelimiter:u,reduceWhiteSpace:g=!0,prepareText:p}=t,m=s.getBoundingClientRect(),w=m,x=!g&&window.getComputedStyle(s).whiteSpace.substring(0,3)==="pre",k=0,v=i.collection,b,S,T,C,P,E,N,O,R,B,W,I,D,U,V,_,Q,ot;for(typeof u=="object"?(T=u.delimiter||u,S=u.replaceWith||""):S=u===""?"":u||" ",b=S!==" ";d<f.length;d++)if(C=f[d],C.nodeType===3){for(V=C.textContent||"",g?V=V.replace(Sc," "):x&&(V=V.replace(/\n/g,S+`
`)),p&&(V=p(V,s)),C.textContent=V,P=S||T?V.split(T||S):V.match(a)||Ws,Q=P[P.length-1],O=b?Q.slice(-1)===" ":!Q,Q||P.pop(),w=m,N=b?P[0].charAt(0)===" ":!P[0],N&&or(" ",s,C),P[0]||P.shift(),ra(P,l),n&&h||(C.textContent=""),R=1;R<=P.length;R++)if(_=P[R-1],!g&&x&&_.charAt(0)===`
`&&((c=C.previousSibling)==null||c.remove(),or(document.createElement("br"),s,C),_=_.slice(1)),!g&&_==="")or(S,s,C);else if(_===" ")s.insertBefore(document.createTextNode(" "),C);else{if(b&&_.charAt(0)===" "&&or(" ",s,C),k&&R===1&&!N&&v.indexOf(k.parentNode)>-1?(E=v[v.length-1],E.appendChild(document.createTextNode(e?"":_))):(E=i(e?"":_),or(E,s,C),k&&R===1&&!N&&E.insertBefore(k,E.firstChild)),e)for(W=Jo?ra([...Jo.segment(_)].map(Pt=>Pt.segment),l):_.match(a)||Ws,ot=0;ot<W.length;ot++)E.appendChild(W[ot]===" "?document.createTextNode(" "):e(W[ot]));if(n&&h){if(V=C.textContent=V.substring(_.length+1,V.length),B=E.getBoundingClientRect(),B.top>w.top&&B.left<=w.left){for(I=s.cloneNode(),D=s.childNodes[0];D&&D!==E;)U=D,D=D.nextSibling,I.appendChild(U);s.parentNode.insertBefore(I,s),r&&na(I)}w=B}(R<P.length||O)&&or(R>=P.length?" ":b&&_.slice(-1)===" "?" "+S:S,s,C)}s.removeChild(C),k=0}else C.nodeType===1&&(o&&o.indexOf(C)>-1?(v.indexOf(C.previousSibling)>-1&&v[v.length-1].appendChild(C),k=C):(Ml(C,t,i,e,r,n,o,a,l,!0),k=0),r&&na(C))};const zl=class Rl{constructor(t,i){this.isSplit=!1,Tc(),this.elements=ta(t),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=i,this._split=()=>this.isSplit&&this.split(this.vars);let e=[],r,n=()=>{let o=e.length,a;for(;o--;){a=e[o];let l=a.element.offsetWidth;if(l!==a.width){a.width=l,this._split();return}}};this._data={orig:e,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(r),r=setTimeout(n,200)})},ds(this),this.split(i)}split(t){this.isSplit&&this.revert(),this.vars=t=t||this.vars||{};let{type:i="chars,words,lines",aria:e="auto",deepSlice:r=!0,smartWrap:n,onSplit:o,autoSplit:a=!1,specialChars:l,mask:h}=this.vars,c=i.indexOf("lines")>-1,f=i.indexOf("chars")>-1,d=i.indexOf("words")>-1,u=f&&!d&&!c,g=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),p=g?new RegExp(g.source+"|"+ea.source,"gu"):ea,m=!!t.ignore&&ta(t.ignore),{orig:w,animTime:x,obs:k}=this._data,v;return(f||d||c)&&(this.elements.forEach((b,S)=>{w[S]={element:b,html:b.innerHTML,ariaL:b.getAttribute("aria-label"),ariaH:b.getAttribute("aria-hidden")},e==="auto"?b.setAttribute("aria-label",(b.textContent||"").trim()):e==="hidden"&&b.setAttribute("aria-hidden","true");let T=[],C=[],P=[],E=f?Hs("char",t,T):null,N=Hs("word",t,C),O,R,B,W;if(Ml(b,t,N,E,u,r&&(c||u),m,p,g,!1),c){let I=$n(b.childNodes),D=kc(b,I,t,P),U,V=[],_=0,Q=I.map(Pt=>Pt.nodeType===1?Pt.getBoundingClientRect():ia),ot=ia;for(O=0;O<I.length;O++)U=I[O],U.nodeType===1&&(U.nodeName==="BR"?(V.push(U),D(_,O+1),_=O+1,ot=Q[_]):(O&&Q[O].top>ot.top&&Q[O].left<=ot.left&&(D(_,O),_=O),ot=Q[O]));_<O&&D(_,O),V.forEach(Pt=>{var lt;return(lt=Pt.parentNode)==null?void 0:lt.removeChild(Pt)})}if(!d){for(O=0;O<C.length;O++)if(R=C[O],f||!R.nextSibling||R.nextSibling.nodeType!==3)if(n&&!c){for(B=document.createElement("span"),B.style.whiteSpace="nowrap";R.firstChild;)B.appendChild(R.firstChild);R.replaceWith(B)}else R.replaceWith(...R.childNodes);else W=R.nextSibling,W&&W.nodeType===3&&(W.textContent=(R.textContent||"")+(W.textContent||""),R.remove());C.length=0,b.normalize()}this.lines.push(...P),this.words.push(...C),this.chars.push(...T)}),h&&this[h]&&this.masks.push(...this[h].map(b=>{let S=b.cloneNode();return b.replaceWith(S),S.appendChild(b),b.className&&(S.className=b.className.replace(/(\b\w+\b)/g,"$1-mask")),S.style.overflow="clip",S}))),this.isSplit=!0,sr&&(a?sr.addEventListener("loadingdone",this._split):sr.status==="loading"&&console.warn("SplitText called before fonts loaded")),(v=o&&o(this))&&v.totalTime&&(this._data.anim=x?v.totalTime(x):v),c&&a&&this.elements.forEach((b,S)=>{w[S].width=b.offsetWidth,k&&k.observe(b)}),this}revert(){var t,i;let{orig:e,anim:r,obs:n}=this._data;return n&&n.disconnect(),e.forEach(({element:o,html:a,ariaL:l,ariaH:h})=>{o.innerHTML=a,l?o.setAttribute("aria-label",l):o.removeAttribute("aria-label"),h?o.setAttribute("aria-hidden",h):o.removeAttribute("aria-hidden")}),this.chars.length=this.words.length=this.lines.length=e.length=this.masks.length=0,this.isSplit=!1,sr==null||sr.removeEventListener("loadingdone",this._split),r&&(this._data.animTime=r.totalTime(),r.revert()),(i=(t=this.vars).onRevert)==null||i.call(t,this),this}static create(t,i){return new Rl(t,i)}static register(t){Rr=Rr||t||window.gsap,Rr&&($n=Rr.utils.toArray,ds=Rr.core.context||ds),!Is&&window.innerWidth>0&&(sr=document.fonts,Is=!0)}};zl.version="3.13.0";let Cc=zl;export{Oc as L,K as S,Cc as a,jh as g,Ec as p};
