function subcategoryList(elem, category) {
    var activeelement = document.getElementsByClassName("active");
    for (var i = 0; i < activeelement.length; ++i) {
        activeelement[i].className = "item item-avatar";
    }
    var hypertext;
    if (category === "clothes") {
        if (elem.id === "tees") {
            hypertext = '<div class="list"><div id="roundneck" onclick="types(this)"><div class="item item-divider">ROUNDNECK</div><div class="item item-image"><img src="/pictures/clothes/men/roundneck.png"/></div></div><div id="vneck" onclick="types(this)"><div class="item item-divider">VNECK</div><div class="item item-image"><img src="/pictures/clothes/men/vneck.png"/></div></div><div id="tanktop" onclick="types(this)"><div class="item item-divider">TANKTOP</div><div class="item item-image"><img src="/pictures/clothes/men/tanktop.png"/></div></div><div id="graphic" onclick="types(this)"><div class="item item-divider">GRAPHIC</div><div class="item item-image"><img src="/pictures/clothes/men/graphic.png"/></div></div><div id="longsleeve" onclick="types(this)"><div class="item item-divider">LONGSLEEVE</div><div class="item item-image"><img src="/pictures/clothes/men/longsleeve.png"/></div></div></div>';
        } else if (elem.id === "shorts") {
            hypertext = '<div class="list"><div id="athletic" onclick="types(this)"><div class="item item-divider">ATHLETIC</div><div class="item item-image"><img src="/pictures/clothes/men/athletic.png"/></div></div><div id="flatfronts" onclick="types(this)"><div class="item item-divider">FLATFRONTS</div><div class="item item-image"><img src="/pictures/clothes/men/flatfronts.png"/></div></div><div id="cargo" onclick="types(this)"><div class="item item-divider">CARGO</div><div class="item item-image"><img src="/pictures/clothes/men/cargo.png"/></div></div><div id="board" onclick="types(this)"><div class="item item-divider">BOARD</div><div class="item item-image"><img src="/pictures/clothes/men/board.png"/></div></div></div>';
        } else if (elem.id === "shirts") {
            hypertext = '<div class="list"><div id="polo" onclick="types(this)"><div class="item item-divider">POLO</div><div class="item item-image"><img src="/pictures/clothes/men/polo.png"/></div></div><div id="dress" onclick="types(this)"><div class="item item-divider">DRESS</div><div class="item item-image"><img src="/pictures/clothes/men/dress.png"/></div></div><div id="henley" onclick="types(this)"><div class="item item-divider">HENLEY</div><div class="item item-image"><img src="/pictures/clothes/men/henley.png"/></div></div><div id="sweatshirt" onclick="types(this)"><div class="item item-divider">SWEATSHIRT</div><div class="item item-image"><img src="/pictures/clothes/men/sweatshirt.png"/></div></div><div id="casual" onclick="types(this)"><div class="item item-divider">CASUAL</div><div class="item item-image"><img src="/pictures/clothes/men/casual.png"/></div></div></div>';
        } else if (elem.id === "pants") {
            hypertext = '<div class="list"><div id="jeans" onclick="types(this)"><div class="item item-divider">JEANS</div><div class="item item-image"><img src="/pictures/clothes/men/jeans.png"/></div></div><div id="flatfront" onclick="types(this)"><div class="item item-divider">FLATFRONT</div><div class="item item-image"><img src="/pictures/clothes/men/flatfront.png"/></div></div><div id="khaki" onclick="types(this)"><div class="item item-divider">KHAKI</div><div class="item item-image"><img src="/pictures/clothes/men/khaki.png"/></div></div><div id="corduroys" onclick="types(this)"><div class="item item-divider">CORDUROYS</div><div class="item item-image"><img src="/pictures/clothes/men/corduroys.png"/></div></div><div id="chinos" onclick="types(this)"><div class="item item-divider">CHINOS</div><div class="item item-image"><img src="/pictures/clothes/men/chinos.png"/></div></div><div id="cargopant" onclick="types(this)"><div class="item item-divider">CARGOPANT</div><div class="item item-image"><img src="/pictures/clothes/men/cargopant.png"/></div></div></div>';
        } else if (elem.id === "shoes") {
            hypertext = '<div class="list"><div id="athletics" onclick="types(this)"><div class="item item-divider">ATHELETICS</div><div class="item item-image"><img src="/pictures/clothes/men/athletics.png"/></div></div><div id="formalshoes" onclick="types(this)"><div class="item item-divider">FORMALSHOES</div><div class="item item-image"><img src="/pictures/clothes/men/formalshoes.png"/></div></div><div id="boots" onclick="types(this)"><div class="item item-divider">BOOTS</div><div class="item item-image"><img src="/pictures/clothes/men/boots.png"/></div></div><div id="sneakers" onclick="types(this)"><div class="item item-divider">SNEAKERS</div><div class="item item-image"><img src="/pictures/clothes/men/sneakers.png"/></div></div><div id="loafers" onclick="types(this)"><div class="item item-divider">LOAFERS</div><div class="item item-image"><img src="/pictures/clothes/men/loafers.png"/></div></div><div id="boat" onclick="types(this)"><div class="item item-divider">BOAT</div><div class="item item-image"><img src="/pictures/clothes/men/boat.png"/></div></div><div id="flipflops" onclick="types(this)"><div class="item item-divider">FLIPFLOPS</div><div class="item item-image"><img src="/pictures/clothes/men/flipflops.png"/></div></div></div>';
        } else if (elem.id === "socks") {
            hypertext = '<div class="list"><div id="crew" onclick="types(this)"><div class="item item-divider">CREW</div><div class="item item-image"><img src="/pictures/clothes/men/crew.png"/></div></div><div id="ankle" onclick="types(this)"><div class="item item-divider">ANKLE</div><div class="item item-image"><img src="/pictures/clothes/men/ankle.png"/></div></div><div id="lowcut" onclick="types(this)"><div class="item item-divider">LOWCUT</div><div class="item item-image"><img src="/pictures/clothes/men/lowcut.png"/></div></div><div id="noshow" onclick="types(this)"><div class="item item-divider">NOSHOW</div><div class="item item-image"><img src="/pictures/clothes/men/noshow.png"/></div></div><div id="formalsocks" onclick="types(this)"><div class="item item-divider">FORMALSOCKS</div><div class="item item-image"><img src="/pictures/clothes/men/formalsocks.png"/></div></div></div>';
        } else if (elem.id === "hats") {
            hypertext = '<div class="list"><div id="beanies" onclick="types(this)"><div class="item item-divider">BEANIES</div><div class="item item-image"><img src="/pictures/clothes/men/beanies.png"/></div></div><div id="caps" onclick="types(this)"><div class="item item-divider">CAPS</div><div class="item item-image"><img src="/pictures/clothes/men/caps.png"/></div></div><div id="cowboy" onclick="types(this)"><div class="item item-divider">COWBOY</div><div class="item item-image"><img src="/pictures/clothes/men/cowboy.png"/></div></div><div id="cadet" onclick="types(this)"><div class="item item-divider">CADET</div><div class="item item-image"><img src="/pictures/clothes/men/cadet.png"/></div></div></div>';
        } else if (elem.id === "outerwear") {
            hypertext = '<div class="list"><div id="formalsuits" onclick="types(this)"><div class="item item-divider">FORMALSUITS</div><div class="item item-image"><img src="/pictures/clothes/men/formalsuits.png"/></div></div><div id="sweaters" onclick="types(this)"><div class="item item-divider">SWEATERS</div><div class="item item-image"><img src="/pictures/clothes/men/sweaters.png"/></div></div><div id="jackets" onclick="types(this)"><div class="item item-divider">JACKETS</div><div class="item item-image"><img src="/pictures/clothes/men/jackets.png"/></div></div><div id="cardigans" onclick="types(this)"><div class="item item-divider">CARDIGANS</div><div class="item item-image"><img src="/pictures/clothes/men/cardigans.png"/></div></div></div>';
        } else if (elem.id === "ties") {
            hypertext = '<div class="list"><div id="bow" onclick="types(this)"><div class="item item-divider">BOW</div><div class="item item-image"><img src="/pictures/clothes/men/bow.png"/></div></div><div id="neck" onclick="types(this)"><div class="item item-divider">NECK</div><div class="item item-image"><img src="/pictures/clothes/men/neck.png"/></div></div><div id="scarf" onclick="types(this)"><div class="item item-divider">SCARF</div><div class="item item-image"><img src="/pictures/clothes/men/scarf.png"/></div></div></div>';
        }
    } else if (category === "alcohol") {
        if (elem.id === "whiskey") {
            hypertext = '<div class="list"><div id="scotch" onclick="types(this)"><div class="item item-divider">SCOTCH</div><div class="item item-image"><img src="/pictures/alcohol/scotch.png"/></div></div><div id="bourbon" onclick="types(this)"><div class="item item-divider">BOURBON</div><div class="item item-image"><img src="/pictures/alcohol/bourbon.png"/></div></div><div id="tennessee" onclick="types(this)"><div class="item item-divider">TENNESSEE</div><div class="item item-image"><img src="/pictures/alcohol/tennessee.png"/></div></div><div id="rye" onclick="types(this)"><div class="item item-divider">RYE</div><div class="item item-image"><img src="/pictures/alcohol/rye.png"/></div></div><div id="irish" onclick="types(this)"><div class="item item-divider">IRISH</div><div class="item item-image"><img src="/pictures/alcohol/irish.png"/></div></div></div>';
        } else if (elem.id === "tequila") {
            hypertext = '<div class="list"><div id="silver" onclick="types(this)"><div class="item item-divider">SILVER</div><div class="item item-image"><img src="/pictures/alcohol/silver.png"/></div></div><div id="gold" onclick="types(this)"><div class="item item-divider">GOLD</div><div class="item item-image"><img src="/pictures/alcohol/gold.png"/></div></div><div id="resposado" onclick="types(this)"><div class="item item-divider">RESPOSADO</div><div class="item item-image"><img src="/pictures/alcohol/resposado.png"/></div></div><div id="anejo" onclick="types(this)"><div class="item item-divider">ANEJO</div><div class="item item-image"><img src="/pictures/alcohol/anejo.png"/></div></div></div>';
        } else if (elem.id === "rum") {
            hypertext = '<div class="list"><div id="whiterum" onclick="types(this)"><div class="item item-divider">WHITERUM</div><div class="item item-image"><img src="/pictures/alcohol/whiterum.png"/></div></div><div id="goldrum" onclick="types(this)"><div class="item item-divider">GOLDRUM</div><div class="item item-image"><img src="/pictures/alcohol/goldrum.png"/></div></div><div id="darkrum" onclick="types(this)"><div class="item item-divider">DARKRUM</div><div class="item item-image"><img src="/pictures/alcohol/darkrum.png"/></div></div><div id="blackrum" onclick="types(this)"><div class="item item-divider">BLACKRUM</div><div class="item item-image"><img src="/pictures/alcohol/blackrum.png"/></div></div><div id="navyrum" onclick="types(this)"><div class="item item-divider">NAVYRUM</div><div class="item item-image"><img src="/pictures/alcohol/navyrum.png"/></div></div><div id="agedrum" onclick="types(this)"><div class="item item-divider">AGEDRUM</div><div class="item item-image"><img src="/pictures/alcohol/agedrum.png"/></div></div><div id="overproof" onclick="types(this)"><div class="item item-divider">OVERPROOF</div><div class="item item-image"><img src="/pictures/alcohol/overproof.png"/></div></div><div id="cachaca" onclick="types(this)"><div class="item item-divider">CACHACA</div><div class="item item-image"><img src="/pictures/alcohol/cachaca.png"/></div></div><div id="aguardiente" onclick="types(this)"><div class="item item-divider">AGUARDIENTE</div><div class="item item-image"><img src="/pictures/alcohol/aguardiente.png"/></div></div><div id="spiced" onclick="types(this)"><div class="item item-divider">SPICED</div><div class="item item-image"><img src="/pictures/alcohol/spiced.png"/></div></div></div>';
        } else if (elem.id === "vodka") {
            hypertext = '<div class="list"><div id="flavored" onclick="types(this)"><div class="item item-divider">FLAVORED</div><div class="item item-image"><img src="/pictures/alcohol/flavored.png"/></div></div><div id="nonflavored" onclick="types(this)"><div class="item item-divider">NONFLAVORED</div><div class="item item-image"><img src="/pictures/alcohol/nonflavored.png"/></div></div></div>';
        } else if (elem.id === "gin") {
            hypertext = '<div class="list"><div id="dry" onclick="types(this)"><div class="item item-divider">DRY</div><div class="item item-image"><img src="/pictures/alcohol/dry.png"/></div></div><div id="plymouth" onclick="types(this)"><div class="item item-divider">PLYMOUTH</div><div class="item item-image"><img src="/pictures/alcohol/plymouth.png"/></div></div><div id="dutch" onclick="types(this)"><div class="item item-divider">DUTCH</div><div class="item item-image"><img src="/pictures/alcohol/dutch.png"/></div></div><div id="oldtom" onclick="types(this)"><div class="item item-divider">OLDTOM</div><div class="item item-image"><img src="/pictures/alcohol/oldtom.png"/></div></div></div>';
        } else if (elem.id === "wine") {
            hypertext = '<div class="list"><div id="chardonnay" onclick="types(this)"><div class="item item-divider">CHARDONNAY</div><div class="item item-image"><img src="/pictures/alcohol/chardonnay.png"/></div></div><div id="rieslings" onclick="types(this)"><div class="item item-divider">RIESLINGS</div><div class="item item-image"><img src="/pictures/alcohol/rieslings.png"/></div></div><div id="pinotnoir" onclick="types(this)"><div class="item item-divider">PINOTNOIR</div><div class="item item-image"><img src="/pictures/alcohol/pinotnoir.png"/></div></div><div id="cabernet" onclick="types(this)"><div class="item item-divider">CABERNET</div><div class="item item-image"><img src="/pictures/alcohol/cabernet.png"/></div></div><div id="merlot" onclick="types(this)"><div class="item item-divider">MERLOT</div><div class="item item-image"><img src="/pictures/alcohol/merlot.png"/></div></div><div id="syrah" onclick="types(this)"><div class="item item-divider">SYRAH</div><div class="item item-image"><img src="/pictures/alcohol/syrah.png"/></div></div></div>';
        } else if (elem.id === "beer") {
            hypertext = '<div class="list"><div id="lambic" onclick="types(this)"><div class="item item-divider">LAMBIC</div><div class="item item-image"><img src="/pictures/alcohol/lambic.png"/></div></div><div id="ale" onclick="types(this)"><div class="item item-divider">ALE</div><div class="item item-image"><img src="/pictures/alcohol/ale.png"/></div></div><div id="lager" onclick="types(this)"><div class="item item-divider">LAGER</div><div class="item item-image"><img src="/pictures/alcohol/lager.png"/></div></div></div>';
        } else if (elem.id === "brandy") {
            hypertext = '<div class="list"><div id="cognac" onclick="types(this)"><div class="item item-divider">COGNAC</div><div class="item item-image"><img src="/pictures/alcohol/cognac.png"/></div></div><div id="fruit" onclick="types(this)"><div class="item item-divider">FRUIT</div><div class="item item-image"><img src="/pictures/alcohol/fruit.png"/></div></div><div id="pomace" onclick="types(this)"><div class="item item-divider">POMACE</div><div class="item item-image"><img src="/pictures/alcohol/pomace.png"/></div></div></div>';
        }
    } else if (category === "electronics") {
        if (elem.id === "speakers") {
            hypertext = '<div class="list"><div id="soundbars" onclick="types(this)"><div class="item item-divider">SOUNDBARS</div><div class="item item-image"><img src="/pictures/electronics/soundbars.png"/></div></div><div id="bluetooth" onclick="types(this)"><div class="item item-divider">BLUETOOTH</div><div class="item item-image"><img src="/pictures/electronics/bluetooth.png"/></div></div><div id="home" onclick="types(this)"><div class="item item-divider">HOME</div><div class="item item-image"><img src="/pictures/electronics/home.png"/></div></div><div id="desktop" onclick="types(this)"><div class="item item-divider">DESKTOP</div><div class="item item-image"><img src="/pictures/electronics/desktop.png"/></div></div></div>';
        } else if (elem.id === "monitors") {
            hypertext = '<div class="list"><div id="17to20inch" onclick="types(this)"><div class="item item-divider">17TO20INCH</div><div class="item item-image"><img src="/pictures/electronics/17to20inch.png"/></div></div><div id="21to23inch" onclick="types(this)"><div class="item item-divider">21TO23INCH</div><div class="item item-image"><img src="/pictures/electronics/21to23inch.png"/></div></div><div id="24inch" onclick="types(this)"><div class="item item-divider">24INCH</div><div class="item item-image"><img src="/pictures/electronics/24inch.png"/></div></div><div id="27to30inch" onclick="types(this)"><div class="item item-divider">27TO30INCH</div><div class="item item-image"><img src="/pictures/electronics/27to30inch.png"/></div></div></div>';
        } else if (elem.id === "televisions") {
            hypertext = '<div class="list"><div id="crt" onclick="types(this)"><div class="item item-divider">CRT</div><div class="item item-image"><img src="/pictures/electronics/crt.png"/></div></div><div id="lcd" onclick="types(this)"><div class="item item-divider">LCD</div><div class="item item-image"><img src="/pictures/electronics/lcd.png"/></div></div><div id="led" onclick="types(this)"><div class="item item-divider">LED</div><div class="item item-image"><img src="/pictures/electronics/led.png"/></div></div><div id="smart" onclick="types(this)"><div class="item item-divider">SMART</div><div class="item item-image"><img src="/pictures/electronics/smart.png"/></div></div></div>';
        } else if (elem.id === "phones") {
            hypertext = '<div class="list"><div id="iphone" onclick="types(this)"><div class="item item-divider">IPHONE</div><div class="item item-image"><img src="/pictures/electronics/iphone.png"/></div></div><div id="android" onclick="types(this)"><div class="item item-divider">ANDROID</div><div class="item item-image"><img src="/pictures/electronics/android.png"/></div></div><div id="windows" onclick="types(this)"><div class="item item-divider">WINDOWS</div><div class="item item-image"><img src="/pictures/electronics/windows.png"/></div></div></div>';
        } else if (elem.id === "clocks") {
            hypertext = '<div class="list"><div id="smartwatch" onclick="types(this)"><div class="item item-divider">SMARTWATCH</div><div class="item item-image"><img src="/pictures/electronics/smartwatch.png"/></div></div><div id="digital" onclick="types(this)"><div class="item item-divider">DIGITAL</div><div class="item item-image"><img src="/pictures/electronics/digital.png"/></div></div><div id="antique" onclick="types(this)"><div class="item item-divider">ANTIQUE</div><div class="item item-image"><img src="/pictures/electronics/antique.png"/></div></div></div>';
        } else if (elem.id === "toys") {
            hypertext = '<div class="list"><div id="drones" onclick="types(this)"><div class="item item-divider">DRONES</div><div class="item item-image"><img src="/pictures/electronics/drones.png"/></div></div><div id="planes" onclick="types(this)"><div class="item item-divider">PLANES</div><div class="item item-image"><img src="/pictures/electronics/planes.png"/></div></div><div id="diyprojs" onclick="types(this)"><div class="item item-divider">DIYPROJS</div><div class="item item-image"><img src="/pictures/electronics/diyprojs.png"/></div></div><div id="robots" onclick="types(this)"><div class="item item-divider">ROBOTS</div><div class="item item-image"><img src="/pictures/electronics/robots.png"/></div></div></div>';
        } else if (elem.id === "lamps") {
            hypertext = '<div class="list"><div id="floor" onclick="types(this)"><div class="item item-divider">FLOOR</div><div class="item item-image"><img src="/pictures/electronics/floor.png"/></div></div><div id="desk" onclick="types(this)"><div class="item item-divider">DESK</div><div class="item item-image"><img src="/pictures/electronics/desk.png"/></div></div><div id="table" onclick="types(this)"><div class="item item-divider">TABLE</div><div class="item item-image"><img src="/pictures/electronics/table.png"/></div></div></div>';
        } else if (elem.id === "laptops") {
            hypertext = '<div class="list"><div id="apple" onclick="types(this)"><div class="item item-divider">APPLE</div><div class="item item-image"><img src="/pictures/electronics/apple.png"/></div></div><div id="hp" onclick="types(this)"><div class="item item-divider">HP</div><div class="item item-image"><img src="/pictures/electronics/hp.png"/></div></div><div id="dell" onclick="types(this)"><div class="item item-divider">DELL</div><div class="item item-image"><img src="/pictures/electronics/dell.png"/></div></div><div id="pc" onclick="types(this)"><div class="item item-divider">PC</div><div class="item item-image"><img src="/pictures/electronics/pc.png"/></div></div></div>';
        }
    } else if (category === "flowers") {
        if (elem.id === "speakers") {
            hypertext = '<div class="list"><div id="soundbars" onclick="types(this)"><div class="item item-divider">SOUNDBARS</div><div class="item item-image"><img src="/pictures/electronics/soundbars.png"/></div></div><div id="bluetooth" onclick="types(this)"><div class="item item-divider">BLUETOOTH</div><div class="item item-image"><img src="/pictures/electronics/bluetooth.png"/></div></div><div id="home" onclick="types(this)"><div class="item item-divider">HOME</div><div class="item item-image"><img src="/pictures/electronics/home.png"/></div></div><div id="desktop" onclick="types(this)"><div class="item item-divider">DESKTOP</div><div class="item item-image"><img src="/pictures/electronics/desktop.png"/></div></div></div>';
        } else if (elem.id === "monitors") {
            hypertext = '<div class="list"><div id="17to20inch" onclick="types(this)"><div class="item item-divider">17TO20INCH</div><div class="item item-image"><img src="/pictures/electronics/17to20inch.png"/></div></div><div id="21to23inch" onclick="types(this)"><div class="item item-divider">21TO23INCH</div><div class="item item-image"><img src="/pictures/electronics/21to23inch.png"/></div></div><div id="24inch" onclick="types(this)"><div class="item item-divider">24INCH</div><div class="item item-image"><img src="/pictures/electronics/24inch.png"/></div></div><div id="27to30inch" onclick="types(this)"><div class="item item-divider">27TO30INCH</div><div class="item item-image"><img src="/pictures/electronics/27to30inch.png"/></div></div></div>';
        } else if (elem.id === "televisions") {
            hypertext = '<div class="list"><div id="crt" onclick="types(this)"><div class="item item-divider">CRT</div><div class="item item-image"><img src="/pictures/electronics/crt.png"/></div></div><div id="lcd" onclick="types(this)"><div class="item item-divider">LCD</div><div class="item item-image"><img src="/pictures/electronics/lcd.png"/></div></div><div id="led" onclick="types(this)"><div class="item item-divider">LED</div><div class="item item-image"><img src="/pictures/electronics/led.png"/></div></div><div id="smart" onclick="types(this)"><div class="item item-divider">SMART</div><div class="item item-image"><img src="/pictures/electronics/smart.png"/></div></div></div>';
        } else if (elem.id === "phones") {
            hypertext = '<div class="list"><div id="iphone" onclick="types(this)"><div class="item item-divider">IPHONE</div><div class="item item-image"><img src="/pictures/electronics/iphone.png"/></div></div><div id="android" onclick="types(this)"><div class="item item-divider">ANDROID</div><div class="item item-image"><img src="/pictures/electronics/android.png"/></div></div><div id="windows" onclick="types(this)"><div class="item item-divider">WINDOWS</div><div class="item item-image"><img src="/pictures/electronics/windows.png"/></div></div></div>';
        } else if (elem.id === "clocks") {
            hypertext = '<div class="list"><div id="smartwatch" onclick="types(this)"><div class="item item-divider">SMARTWATCH</div><div class="item item-image"><img src="/pictures/electronics/smartwatch.png"/></div></div><div id="digital" onclick="types(this)"><div class="item item-divider">DIGITAL</div><div class="item item-image"><img src="/pictures/electronics/digital.png"/></div></div><div id="antique" onclick="types(this)"><div class="item item-divider">ANTIQUE</div><div class="item item-image"><img src="/pictures/electronics/antique.png"/></div></div></div>';
        } else if (elem.id === "toys") {
            hypertext = '<div class="list"><div id="drones" onclick="types(this)"><div class="item item-divider">DRONES</div><div class="item item-image"><img src="/pictures/electronics/drones.png"/></div></div><div id="planes" onclick="types(this)"><div class="item item-divider">PLANES</div><div class="item item-image"><img src="/pictures/electronics/planes.png"/></div></div><div id="diyprojs" onclick="types(this)"><div class="item item-divider">DIYPROJS</div><div class="item item-image"><img src="/pictures/electronics/diyprojs.png"/></div></div><div id="robots" onclick="types(this)"><div class="item item-divider">ROBOTS</div><div class="item item-image"><img src="/pictures/electronics/robots.png"/></div></div></div>';
        } else if (elem.id === "lamps") {
            hypertext = '<div class="list"><div id="floor" onclick="types(this)"><div class="item item-divider">FLOOR</div><div class="item item-image"><img src="/pictures/electronics/floor.png"/></div></div><div id="desk" onclick="types(this)"><div class="item item-divider">DESK</div><div class="item item-image"><img src="/pictures/electronics/desk.png"/></div></div><div id="table" onclick="types(this)"><div class="item item-divider">TABLE</div><div class="item item-image"><img src="/pictures/electronics/table.png"/></div></div></div>';
        } else if (elem.id === "laptops") {
            hypertext = '<div class="list"><div id="apple" onclick="types(this)"><div class="item item-divider">APPLE</div><div class="item item-image"><img src="/pictures/electronics/apple.png"/></div></div><div id="hp" onclick="types(this)"><div class="item item-divider">HP</div><div class="item item-image"><img src="/pictures/electronics/hp.png"/></div></div><div id="dell" onclick="types(this)"><div class="item item-divider">DELL</div><div class="item item-image"><img src="/pictures/electronics/dell.png"/></div></div><div id="pc" onclick="types(this)"><div class="item item-divider">PC</div><div class="item item-image"><img src="/pictures/electronics/pc.png"/></div></div></div>';
        }
    } else if (category === "gaming") {
        if (elem.id === "speakers") {
            hypertext = '<div class="list"><div id="soundbars" onclick="types(this)"><div class="item item-divider">SOUNDBARS</div><div class="item item-image"><img src="/pictures/electronics/soundbars.png"/></div></div><div id="bluetooth" onclick="types(this)"><div class="item item-divider">BLUETOOTH</div><div class="item item-image"><img src="/pictures/electronics/bluetooth.png"/></div></div><div id="home" onclick="types(this)"><div class="item item-divider">HOME</div><div class="item item-image"><img src="/pictures/electronics/home.png"/></div></div><div id="desktop" onclick="types(this)"><div class="item item-divider">DESKTOP</div><div class="item item-image"><img src="/pictures/electronics/desktop.png"/></div></div></div>';
        } else if (elem.id === "monitors") {
            hypertext = '<div class="list"><div id="17to20inch" onclick="types(this)"><div class="item item-divider">17TO20INCH</div><div class="item item-image"><img src="/pictures/electronics/17to20inch.png"/></div></div><div id="21to23inch" onclick="types(this)"><div class="item item-divider">21TO23INCH</div><div class="item item-image"><img src="/pictures/electronics/21to23inch.png"/></div></div><div id="24inch" onclick="types(this)"><div class="item item-divider">24INCH</div><div class="item item-image"><img src="/pictures/electronics/24inch.png"/></div></div><div id="27to30inch" onclick="types(this)"><div class="item item-divider">27TO30INCH</div><div class="item item-image"><img src="/pictures/electronics/27to30inch.png"/></div></div></div>';
        } else if (elem.id === "televisions") {
            hypertext = '<div class="list"><div id="crt" onclick="types(this)"><div class="item item-divider">CRT</div><div class="item item-image"><img src="/pictures/electronics/crt.png"/></div></div><div id="lcd" onclick="types(this)"><div class="item item-divider">LCD</div><div class="item item-image"><img src="/pictures/electronics/lcd.png"/></div></div><div id="led" onclick="types(this)"><div class="item item-divider">LED</div><div class="item item-image"><img src="/pictures/electronics/led.png"/></div></div><div id="smart" onclick="types(this)"><div class="item item-divider">SMART</div><div class="item item-image"><img src="/pictures/electronics/smart.png"/></div></div></div>';
        } else if (elem.id === "phones") {
            hypertext = '<div class="list"><div id="iphone" onclick="types(this)"><div class="item item-divider">IPHONE</div><div class="item item-image"><img src="/pictures/electronics/iphone.png"/></div></div><div id="android" onclick="types(this)"><div class="item item-divider">ANDROID</div><div class="item item-image"><img src="/pictures/electronics/android.png"/></div></div><div id="windows" onclick="types(this)"><div class="item item-divider">WINDOWS</div><div class="item item-image"><img src="/pictures/electronics/windows.png"/></div></div></div>';
        } else if (elem.id === "clocks") {
            hypertext = '<div class="list"><div id="smartwatch" onclick="types(this)"><div class="item item-divider">SMARTWATCH</div><div class="item item-image"><img src="/pictures/electronics/smartwatch.png"/></div></div><div id="digital" onclick="types(this)"><div class="item item-divider">DIGITAL</div><div class="item item-image"><img src="/pictures/electronics/digital.png"/></div></div><div id="antique" onclick="types(this)"><div class="item item-divider">ANTIQUE</div><div class="item item-image"><img src="/pictures/electronics/antique.png"/></div></div></div>';
        } else if (elem.id === "toys") {
            hypertext = '<div class="list"><div id="drones" onclick="types(this)"><div class="item item-divider">DRONES</div><div class="item item-image"><img src="/pictures/electronics/drones.png"/></div></div><div id="planes" onclick="types(this)"><div class="item item-divider">PLANES</div><div class="item item-image"><img src="/pictures/electronics/planes.png"/></div></div><div id="diyprojs" onclick="types(this)"><div class="item item-divider">DIYPROJS</div><div class="item item-image"><img src="/pictures/electronics/diyprojs.png"/></div></div><div id="robots" onclick="types(this)"><div class="item item-divider">ROBOTS</div><div class="item item-image"><img src="/pictures/electronics/robots.png"/></div></div></div>';
        } else if (elem.id === "lamps") {
            hypertext = '<div class="list"><div id="floor" onclick="types(this)"><div class="item item-divider">FLOOR</div><div class="item item-image"><img src="/pictures/electronics/floor.png"/></div></div><div id="desk" onclick="types(this)"><div class="item item-divider">DESK</div><div class="item item-image"><img src="/pictures/electronics/desk.png"/></div></div><div id="table" onclick="types(this)"><div class="item item-divider">TABLE</div><div class="item item-image"><img src="/pictures/electronics/table.png"/></div></div></div>';
        } else if (elem.id === "laptops") {
            hypertext = '<div class="list"><div id="apple" onclick="types(this)"><div class="item item-divider">APPLE</div><div class="item item-image"><img src="/pictures/electronics/apple.png"/></div></div><div id="hp" onclick="types(this)"><div class="item item-divider">HP</div><div class="item item-image"><img src="/pictures/electronics/hp.png"/></div></div><div id="dell" onclick="types(this)"><div class="item item-divider">DELL</div><div class="item item-image"><img src="/pictures/electronics/dell.png"/></div></div><div id="pc" onclick="types(this)"><div class="item item-divider">PC</div><div class="item item-image"><img src="/pictures/electronics/pc.png"/></div></div></div>';
        }
    }
    elem.className = "item item-thumbnail-left active";
    document.getElementById("rightsub").innerHTML = hypertext;
};