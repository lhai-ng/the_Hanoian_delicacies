const posts = [
    {
        id: 1,
        name: "Bún ốc nguội",
        html: `
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
        `,
        css: `
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
        `,
        background: "var(--secondary)"
    },
    {
        id: 2,
        name: "Phở cuốn",
        html: `
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
        `,
        css: `
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
        `,
        background: "var(--primary)"
    },
    {
        id: 3,
        name: "Tào phớ thạch găng",
        html: `
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
        `,
        css: `
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
        `,
        background: "var(--white)"
    },
    {
        id: 4,
        name: "Bánh tôm hồ Tây",
        html: `
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
        `,
        css: `
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

        `,
        background: "var(--tertiary)"
    },
    {
        id: 5,
        name: "Sứa đỏ",
        html: `
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
        `,
        css: `
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
        `,
        background: "var(--accent)"
    },
    {
        id: 6,
        name: "Bún chả",
        html: `
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
        `,
        css: `
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
        `,
        background: "var(--accent)"
    },
    {
        id: 7,
        name: "Bún thang",
        html: `
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
        `,
        css: `
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
        `,
        background: "var(--secondary)"
    },
    {
        id: 8,
        name: "Phở",
        html: `
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
        `,
        css: `
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
        `,
        background: "#2c2d2d"
    },
    {
        id: 9,
        name: "Chả cá Lã Vọng",
        html: `
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
        `,
        css: `
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
        `,
        background: "var(--tertiary)"
    },
    {
        id: 10,
        name: "Kem Tràng Tiền",
        html: `
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
        `,
        css: `
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

        `,
        background: "var(--white)"
    },
    {
        id: 11,
        name: "Bún đậu mắm tôm",
        html: `
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
        `,
        css: `
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
        `,
        background: "var(--primary)"
    },
    {
        id: 12,
        name: "Bánh gối",
        html: `
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
        `,
        css: `
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
        `,
        background: "var(--tertiary)"
    },
    {
        id: 13,
        name: "Xôi cốm",
        html: `
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
        `,
        css: `
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
        `,
        background: "var(--black)"
    },
    {
        id: 14,
        name: "Bánh cuốn Thanh Trì",
        html: `
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
        `,
        css: `
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
        `,
        background: "var(--white)"
    },
    {
        id: 15,
        name: "Bún bò Nam Bộ",
        html: `
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
        `,
        css: `
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

        `,
        background: "#2c2d2d"
    },
]

export { posts };
