/* Pronto Pizza — sistema multilingua (IT · EN · DE · FR) */

(function () {
    'use strict';

    /* ================================================================
       TRADUZIONI
       ================================================================ */
    var T = {

        /* ---- ITALIANO ---- */
        it: {
            /* Navigazione */
            'nav.about':    'Chi siamo',
            'nav.menu':     'Menu',
            'nav.fullmenu': 'Listino completo',
            'nav.gallery':  'Galleria',
            'nav.contact':  'Contatti',
            'nav.call':     'Chiama',

            /* Hero */
            'hero.eyebrow':   'Porlezza · Lago di Lugano',
            'hero.title':     'La pizza di casa,<br><em>come una volta.</em>',
            'hero.claim':     'Cucina italiana autentica, pasta fresca, pizze cotte al momento.<br>Un tavolo, un bicchiere di vino e la sensazione di essere a casa.',
            'hero.cta_call':  'Chiama ora',
            'hero.cta_menu':  'Scopri il menu',

            /* Chi siamo */
            'about.eyebrow': 'La nostra storia',
            'about.title':   'Una pizzeria di paese,<br>nel cuore di Porlezza',
            'about.lead':    'Da anni Pronto Pizza — da Fabio — è un punto di ritrovo per chi vive a Porlezza e per chi è di passaggio sul lago. Entri, senti il profumo del forno, vedi la cucina a vista e ti siedi ai tavoli vicini come in una casa di famiglia.',
            'about.text':    'La nostra è cucina italiana schietta: pizze con impasto lavorato ogni giorno, pasta fresca, carne alla griglia, pesce del mercato. Niente effetti speciali, solo ingredienti buoni, ricette di sempre e l\'accoglienza di chi ti conosce.',
            'about.quote':   '"Buona pizza, buon vino,<br>e la serata è salva."',
            'about.badge':   'Dal 1988 · Fabio & famiglia',

            /* Specialità */
            'feat.1.title': 'Forno elettrico',
            'feat.1.text':  'Pizze cotte al momento, impasto maturato a lungo.',
            'feat.2.title': 'Pasta fresca',
            'feat.2.text':  'Primi piatti della tradizione italiana, ogni giorno.',
            'feat.3.title': 'Carne & pesce',
            'feat.3.text':  'Secondi di terra e di mare, semplici e genuini.',
            'feat.4.title': 'Aria di casa',
            'feat.4.text':  'Accoglienza familiare, come una volta.',

            /* Anteprima menu */
            'preview.eyebrow':  'Il nostro menu',
            'preview.title':    'Un assaggio del listino',
            'preview.sub':      'Dalla pizza tradizionale alle specialità della casa. Ecco una selezione — il listino completo ti aspetta al tavolo.',
            'preview.full_btn': 'Vedi il listino completo',
            'preview.call_btn': 'Chiama per prenotare',

            /* Categorie home */
            'cat.family':     'Offerta Pizza Famiglia',
            'cat.family_tag': 'per 4 persone',
            'cat.primi':      'Primi piatti',
            'cat.carne':      'Carne & Pesce',

            /* Galleria */
            'gallery.eyebrow': 'Galleria',
            'gallery.title':   'Dentro il locale',
            'gallery.sub':     'Tavoli ravvicinati, lavagne scritte a mano, cucina a vista. Entra e respira l\'aria di casa.',

            /* Contatti */
            'contact.eyebrow': 'Contatti & orari',
            'contact.title':   'Vieni a trovarci',
            'contact.lead':    'Nel centro storico di Porlezza, a due passi dal lago. Per prenotare o ordinare una pizza d\'asporto, basta una telefonata.',
            'contact.addr':    'Indirizzo',
            'contact.phone':   'Telefono',
            'contact.hours':   'Orari di apertura',
            'contact.italy':   'Italia',

            /* Giorni */
            'day.mon': 'Lunedì',   'day.tue': 'Martedì',  'day.wed': 'Mercoledì',
            'day.thu': 'Giovedì',  'day.fri': 'Venerdì',  'day.sat': 'Sabato',
            'day.sun': 'Domenica', 'day.closed': 'Chiuso',

            /* Footer */
            'footer.addr':    'Ristorante · Pizzeria · Bar<br>da Fabio — Via Garibaldi 31, Porlezza (CO)',
            'footer.contact': 'Contatti',
            'footer.social':  'Social',
            'footer.rights':  'Tutti i diritti riservati.',

            /* Stato apertura */
            'status.open_today': 'Aperto oggi 12:00–14:00 · 18:00–22:00',

            /* Pagina listino */
            'page.eyebrow': 'Il nostro listino',
            'page.title':   'Menu & Prezzi',
            'page.sub':     'Piatti della tradizione italiana, pizze cotte al momento e qualche specialità che facciamo da sempre.',
            'menu.back':    '← Torna alla home',

            'menu.cat.family':       '🍕 Offerta Pizza Famiglia',
            'menu.cat.family_note':  'per 4 persone, ideale da condividere',
            'menu.cat.primi':        '🍝 Primi piatti',
            'menu.cat.primi_note':   'pasta fresca e risotti della casa',
            'menu.cat.carne':        '🥩 Specialità di carne',
            'menu.cat.carne_note':   'cotture alla griglia e classici italiani',
            'menu.cat.pesce':        '🐟 Pesce',
            'menu.cat.pesce_note':   'dal mercato, preparato alla griglia o in padella',
            'menu.cat.affettati':    '🧀 Affettati e antipasti',
            'menu.cat.affettati_note': 'salumi, formaggi e specialità locali',
            'menu.cat.contorni':     '🥗 Contorni',
            'menu.cat.focacce':      '🥖 Focacce & piatti veloci',
            'menu.cat.focacce_note': 'perfetti per una pausa pranzo',
            'menu.cat.pizze':        '🍕 Le nostre pizze',
            'menu.cat.pizze_note':   'impasto lavorato ogni giorno, cotte al momento',
            'menu.pizzabase':        'Base di ogni pizza: pomodoro e mozzarella. Coperto 2,00 € · Consegna a domicilio: +1,50 € per articolo · Doppia pasta: +1,50 €',
            'menu.cta.call':         '📞 Chiama per ordinare',
            'menu.cta.map':          'Come raggiungerci',

            /* Nomi dei piatti */
            'dish.spaghettimore':     'Spaghetti al mare',
            'dish.spaghettiaglio':    'Spaghetti aglio, olio e peperoncino',
            'dish.spaghetticarbo':    'Spaghetti alla carbonara',
            'dish.spaghettipizz':     'Spaghetti alla pizzaiola',
            'dish.spaghettiinero':    'Spaghetti al nero di seppia',
            'dish.fusibili':          'Fusilli biancorosa',
            'dish.tagliatelle':       'Tagliatelle alla matriciana',
            'dish.penne':             'Penne all\'arrabbiata',
            'dish.gnocchiformaggi':   'Gnocchi ai 4 formaggi',
            'dish.gnocchiverdi':      'Gnocchi verdi',
            'dish.gnocchigialli':     'Gnocchi gialli',
            'dish.risottivari':       'Risotti vari',
            'dish.tagliata':          'Tagliata di manzo con rucola e grana',
            'dish.filetto':           'Filetto di manzo ai ferri',
            'dish.costata':           'Costata alla griglia',
            'dish.scaloppinelimone':  'Scaloppine al limone',
            'dish.scaloppinefunghi':  'Scaloppine ai funghi',
            'dish.cotoletta':         'Cotoletta alla milanese',
            'dish.salsiccia':         'Salsiccia e patate',
            'dish.frittura':          'Frittura mista di pesce',
            'dish.branzino':          'Branzino al forno',
            'dish.orata':             'Orata ai ferri',
            'dish.calamari':          'Calamari alla griglia',
            'dish.tagliereaff':       'Tagliere di affettati misti',
            'dish.tagliereforn':      'Tagliere di formaggi',
            'dish.prosciuttomelone':  'Prosciutto crudo e melone',
            'dish.bresaolarucola':    'Bresaola, rucola e grana',
            'dish.caprese':           'Caprese con mozzarella di bufala',
            'dish.insalatamista':     'Insalata mista',
            'dish.patatefritte':      'Patate fritte',
            'dish.verduregliate':     'Verdure grigliate',
            'dish.spinaci':           'Spinaci al burro',
            'dish.focacciasemplice':  'Focaccia semplice con olio e sale',
            'dish.focacciafarcita':   'Focaccia farcita prosciutto e mozzarella',
            'dish.piadina':           'Piadina classica',
            'dish.bruschette':        'Bruschette miste',

            /* Ingredienti pizze */
            'pizza.desc.marinara':   ' – pomodoro, capperi, aglio',
            'pizza.desc.generoso':   ' – salame',
            'pizza.desc.napoli':     ' – acciughe, olive',
            'pizza.desc.regina':     ' – funghi, prosciutto',
            'pizza.desc.bregagno':   ' – prosciutto, uovo, taleggio, gorgonzola',
            'pizza.desc.pizzaiola':  ' – origano, mozzarella fresca, olive, capperi',
            'pizza.desc.stagioni4':  ' – prosciutto, funghi, carciofi, peperoni',
            'pizza.desc.capricciosa':' – salame, carciofi, peperoni, olive, cipolle',
            'pizza.desc.pescatore':  ' – frutti di mare, aglio, capperi',
            'pizza.desc.duna':       ' – salame, cipolla, funghi, piccante',
            'pizza.desc.stafan':     ' – pomodoro, mozzarella, funghi, spinaci',
            'pizza.desc.tonno':      ' – tonno, cipolle',
            'pizza.desc.parmense':   ' – cotto, melanzane, parmigiano',
            'pizza.desc.cima':       ' – tonno, gamberetti, mozzarella fresca, insalata verde, salsa rosa',
            'pizza.desc.paperina':   ' – rucola',
            'pizza.desc.lucky':      ' – gorgonzola e noci',
            'pizza.desc.messicana':  ' – salame piccante',
            'pizza.desc.formaggi4':  ' – grana, taleggio, gorgonzola, mozzarella',
            'pizza.desc.vegana':     ' – verdure miste al forno',
            'pizza.desc.gianna':     ' – gamberetti e rucola',
            'pizza.desc.piattoit':   ' – cotoletta al forno, cotta su pane, insalata mista',
            'pizza.desc.azzurra':    ' – mozzarella fresca, pomodoro fresco, parmigiano, salsa verde',
            'pizza.desc.crudoparma': ' – prosciutto crudo di Parma',
            'pizza.desc.tedesca':    ' – würstel',
            'pizza.desc.giacomo':    ' – prosciutto crudo, gorgonzola',
            'pizza.desc.pugliese':   ' – pomodoro, mozzarella, cipolle',
            'pizza.desc.daniele':    ' – pomodoro, mozzarella, taleggio, prosciutto cotto',
            'pizza.desc.maxi':       ' – speck, gorgonzola',
            'pizza.desc.people':     ' – taleggio, zucchine, prosciutto cotto',
            'pizza.desc.carletto':   ' – patatine fritte',
            'pizza.desc.calzone':    ' – funghi, cotto, carciofi, peperoni',
            'pizza.desc.bresaolona': ' – mozzarella fresca, rucola, pomodoro fresco, bresaola',
            'pizza.desc.ceresio':    ' – mozzarella fresca, melanzane, parmigiano, crudo, pomodoro fresco, rucola',
            'pizza.desc.mami':       ' – patate al forno, speck, taleggio',
            'pizza.desc.paesana':    ' – crudo, mozzarella, parmigiano',
            'pizza.desc.valtellina': ' – bresaola, funghi, rucola, grana',
            'pizza.desc.gio':        ' – funghi, gamberetti',
            'pizza.desc.lina':       ' – mozzarella fresca, prosciutto cotto, rucola',
            'pizza.desc.orientale':  ' – gamberetti, prosciutto cotto, curry',
            'pizza.desc.fattore':    ' – prosciutto cotto, parmigiano',
            'pizza.desc.delmozzo':   ' – salame piccante, gorgonzola',
            'pizza.desc.cico':       ' – cotoletta, pomodoro, mozzarella, taleggio',
            'pizza.desc.manu':       ' – mozzarella, gorgonzola, grana, funghi',
            'pizza.desc.latina':     ' – uova, parmigiano, verdure miste',
            'pizza.desc.porlezza':   ' – pomodoro e mozzarella freschi, crudo di Parma, rucola',
        },

        /* ---- ENGLISH ---- */
        en: {
            'nav.about':    'About us',
            'nav.menu':     'Menu',
            'nav.fullmenu': 'Full menu',
            'nav.gallery':  'Gallery',
            'nav.contact':  'Contact',
            'nav.call':     'Call',

            'hero.eyebrow':  'Porlezza · Lake Lugano',
            'hero.title':    'Home-style pizza,<br><em>the old way.</em>',
            'hero.claim':    'Authentic Italian cuisine, fresh pasta, stone-baked pizzas.<br>A table, a glass of wine and the feeling of being at home.',
            'hero.cta_call': 'Call now',
            'hero.cta_menu': 'See the menu',

            'about.eyebrow': 'Our story',
            'about.title':   'A neighbourhood pizzeria,<br>in the heart of Porlezza',
            'about.lead':    'For years Pronto Pizza — da Fabio — has been a meeting place for locals and lake visitors. Step in, smell the oven, see the open kitchen and sit at tables as close as family.',
            'about.text':    'Ours is straightforward Italian cooking: daily-made pizza dough, fresh pasta, grilled meat and market fish. No gimmicks — just good ingredients, time-honoured recipes and a warm welcome.',
            'about.quote':   '"Good pizza, good wine,<br>the evening is saved."',
            'about.badge':   'Since 1988 · Fabio & family',

            'feat.1.title': 'Electric oven',
            'feat.1.text':  'Freshly baked pizzas, long-matured dough.',
            'feat.2.title': 'Fresh pasta',
            'feat.2.text':  'Traditional Italian first courses, every day.',
            'feat.3.title': 'Meat & fish',
            'feat.3.text':  'Simple, genuine land and sea mains.',
            'feat.4.title': 'Home atmosphere',
            'feat.4.text':  'Family welcome, the old-fashioned way.',

            'preview.eyebrow':  'Our menu',
            'preview.title':    'A taste of the menu',
            'preview.sub':      'From traditional pizza to house specialities. Here is a selection — the full menu awaits at your table.',
            'preview.full_btn': 'Full price list',
            'preview.call_btn': 'Call to book',

            'cat.family':     'Family Pizza Offer',
            'cat.family_tag': 'for 4 people',
            'cat.primi':      'First courses',
            'cat.carne':      'Meat & Fish',

            'gallery.eyebrow': 'Gallery',
            'gallery.title':   'Inside the restaurant',
            'gallery.sub':     'Close-set tables, hand-written chalkboards, open kitchen. Come in and breathe the home atmosphere.',

            'contact.eyebrow': 'Contacts & hours',
            'contact.title':   'Come and visit us',
            'contact.lead':    'In the historic centre of Porlezza, a stone\'s throw from the lake. To book or order takeaway pizza, just give us a call.',
            'contact.addr':    'Address',
            'contact.phone':   'Phone',
            'contact.hours':   'Opening hours',
            'contact.italy':   'Italy',

            'day.mon': 'Monday',    'day.tue': 'Tuesday',   'day.wed': 'Wednesday',
            'day.thu': 'Thursday',  'day.fri': 'Friday',    'day.sat': 'Saturday',
            'day.sun': 'Sunday',    'day.closed': 'Closed',

            'footer.addr':    'Restaurant · Pizzeria · Bar<br>da Fabio — Via Garibaldi 31, Porlezza (CO)',
            'footer.contact': 'Contact',
            'footer.social':  'Social',
            'footer.rights':  'All rights reserved.',

            'status.open_today': 'Open today 12:00–14:00 · 18:00–22:00',

            'page.eyebrow': 'Our price list',
            'page.title':   'Menu & Prices',
            'page.sub':     'Traditional Italian dishes, freshly baked pizzas and a few specialities we\'ve always made.',
            'menu.back':    '← Back to home',

            'menu.cat.family':       '🍕 Family Pizza Offer',
            'menu.cat.family_note':  'for 4 people, ideal for sharing',
            'menu.cat.primi':        '🍝 First courses',
            'menu.cat.primi_note':   'fresh pasta and house risottos',
            'menu.cat.carne':        '🥩 Meat specialities',
            'menu.cat.carne_note':   'grilled and classic Italian dishes',
            'menu.cat.pesce':        '🐟 Fish',
            'menu.cat.pesce_note':   'from the market, grilled or pan-fried',
            'menu.cat.affettati':    '🧀 Charcuterie & starters',
            'menu.cat.affettati_note': 'cold cuts, cheeses and local specialities',
            'menu.cat.contorni':     '🥗 Side dishes',
            'menu.cat.focacce':      '🥖 Focaccia & quick bites',
            'menu.cat.focacce_note': 'perfect for a lunch break',
            'menu.cat.pizze':        '🍕 Our pizzas',
            'menu.cat.pizze_note':   'dough made daily, baked fresh',
            'menu.pizzabase':        'Every pizza: tomato and mozzarella base. Cover €2.00 · Home delivery: +€1.50 per item · Double dough: +€1.50',
            'menu.cta.call':         '📞 Call to order',
            'menu.cta.map':          'How to find us',

            /* Dish names */
            'dish.spaghettimore':     'Spaghetti with seafood',
            'dish.spaghettiaglio':    'Spaghetti with garlic, olive oil and chilli',
            'dish.spaghetticarbo':    'Spaghetti alla carbonara',
            'dish.spaghettipizz':     'Spaghetti in tomato and oregano sauce',
            'dish.spaghettiinero':    'Spaghetti with squid ink',
            'dish.fusibili':          'Fusilli in cream and tomato sauce',
            'dish.tagliatelle':       'Tagliatelle all\'amatriciana',
            'dish.penne':             'Penne all\'arrabbiata',
            'dish.gnocchiformaggi':   'Gnocchi with 4 cheeses',
            'dish.gnocchiverdi':      'Green gnocchi',
            'dish.gnocchigialli':     'Yellow gnocchi',
            'dish.risottivari':       'Various risottos',
            'dish.tagliata':          'Sliced beef with rocket and grana',
            'dish.filetto':           'Grilled beef fillet',
            'dish.costata':           'Grilled rib steak',
            'dish.scaloppinelimone':  'Veal escalope with lemon',
            'dish.scaloppinefunghi':  'Veal escalope with mushrooms',
            'dish.cotoletta':         'Milanese breaded cutlet',
            'dish.salsiccia':         'Sausage and potatoes',
            'dish.frittura':          'Mixed fried fish',
            'dish.branzino':          'Baked sea bass',
            'dish.orata':             'Grilled sea bream',
            'dish.calamari':          'Grilled squid',
            'dish.tagliereaff':       'Mixed charcuterie board',
            'dish.tagliereforn':      'Cheese board',
            'dish.prosciuttomelone':  'Cured ham and melon',
            'dish.bresaolarucola':    'Bresaola, rocket and grana',
            'dish.caprese':           'Caprese with buffalo mozzarella',
            'dish.insalatamista':     'Mixed salad',
            'dish.patatefritte':      'Chips',
            'dish.verduregliate':     'Grilled vegetables',
            'dish.spinaci':           'Buttered spinach',
            'dish.focacciasemplice':  'Plain focaccia with oil and salt',
            'dish.focacciafarcita':   'Focaccia with ham and mozzarella',
            'dish.piadina':           'Classic piadina',
            'dish.bruschette':        'Mixed bruschette',

            /* Pizza ingredients */
            'pizza.desc.marinara':   ' – tomato, capers, garlic',
            'pizza.desc.generoso':   ' – salami',
            'pizza.desc.napoli':     ' – anchovies, olives',
            'pizza.desc.regina':     ' – mushrooms, ham',
            'pizza.desc.bregagno':   ' – ham, egg, taleggio, gorgonzola',
            'pizza.desc.pizzaiola':  ' – oregano, fresh mozzarella, olives, capers',
            'pizza.desc.stagioni4':  ' – ham, mushrooms, artichokes, bell peppers',
            'pizza.desc.capricciosa':' – salami, artichokes, bell peppers, olives, onions',
            'pizza.desc.pescatore':  ' – seafood, garlic, capers',
            'pizza.desc.duna':       ' – salami, onion, mushrooms, spicy',
            'pizza.desc.stafan':     ' – tomato, mozzarella, mushrooms, spinach',
            'pizza.desc.tonno':      ' – tuna, onions',
            'pizza.desc.parmense':   ' – cooked ham, aubergine, Parmesan',
            'pizza.desc.cima':       ' – tuna, prawns, fresh mozzarella, green salad, pink sauce',
            'pizza.desc.paperina':   ' – rocket',
            'pizza.desc.lucky':      ' – gorgonzola and walnuts',
            'pizza.desc.messicana':  ' – spicy salami',
            'pizza.desc.formaggi4':  ' – grana, taleggio, gorgonzola, mozzarella',
            'pizza.desc.vegana':     ' – mixed roasted vegetables',
            'pizza.desc.gianna':     ' – prawns and rocket',
            'pizza.desc.piattoit':   ' – baked breaded cutlet, served on bread, mixed salad',
            'pizza.desc.azzurra':    ' – fresh mozzarella, fresh tomato, Parmesan, green sauce',
            'pizza.desc.crudoparma': ' – Parma cured ham',
            'pizza.desc.tedesca':    ' – frankfurter',
            'pizza.desc.giacomo':    ' – cured ham, gorgonzola',
            'pizza.desc.pugliese':   ' – tomato, mozzarella, onions',
            'pizza.desc.daniele':    ' – tomato, mozzarella, taleggio, cooked ham',
            'pizza.desc.maxi':       ' – speck, gorgonzola',
            'pizza.desc.people':     ' – taleggio, courgettes, cooked ham',
            'pizza.desc.carletto':   ' – chips',
            'pizza.desc.calzone':    ' – mushrooms, cooked ham, artichokes, bell peppers',
            'pizza.desc.bresaolona': ' – fresh mozzarella, rocket, fresh tomato, bresaola',
            'pizza.desc.ceresio':    ' – fresh mozzarella, aubergine, Parmesan, cured ham, fresh tomato, rocket',
            'pizza.desc.mami':       ' – baked potatoes, speck, taleggio',
            'pizza.desc.paesana':    ' – cured ham, mozzarella, Parmesan',
            'pizza.desc.valtellina': ' – bresaola, mushrooms, rocket, grana',
            'pizza.desc.gio':        ' – mushrooms, prawns',
            'pizza.desc.lina':       ' – fresh mozzarella, cooked ham, rocket',
            'pizza.desc.orientale':  ' – prawns, cooked ham, curry',
            'pizza.desc.fattore':    ' – cooked ham, Parmesan',
            'pizza.desc.delmozzo':   ' – spicy salami, gorgonzola',
            'pizza.desc.cico':       ' – breaded cutlet, tomato, mozzarella, taleggio',
            'pizza.desc.manu':       ' – mozzarella, gorgonzola, grana, mushrooms',
            'pizza.desc.latina':     ' – eggs, Parmesan, mixed vegetables',
            'pizza.desc.porlezza':   ' – fresh tomato and mozzarella, Parma cured ham, rocket',
        },

        /* ---- DEUTSCH ---- */
        de: {
            'nav.about':    'Über uns',
            'nav.menu':     'Speisekarte',
            'nav.fullmenu': 'Vollständige Karte',
            'nav.gallery':  'Galerie',
            'nav.contact':  'Kontakt',
            'nav.call':     'Anrufen',

            'hero.eyebrow':  'Porlezza · Luganersee',
            'hero.title':    'Pizza wie zu Hause,<br><em>wie früher.</em>',
            'hero.claim':    'Authentische italienische Küche, frische Pasta, frisch gebackene Pizzen.<br>Ein Tisch, ein Glas Wein und das Gefühl, zu Hause zu sein.',
            'hero.cta_call': 'Jetzt anrufen',
            'hero.cta_menu': 'Speisekarte ansehen',

            'about.eyebrow': 'Unsere Geschichte',
            'about.title':   'Eine Dorfpizzeria<br>im Herzen von Porlezza',
            'about.lead':    'Seit Jahren ist Pronto Pizza — da Fabio — ein Treffpunkt für Einheimische und Seegäste. Man tritt ein, riecht den Ofen, sieht die offene Küche und setzt sich an eng gestellte Tische wie in einem Familienheim.',
            'about.text':    'Unsere Küche ist schlichte italienische Hausmannskost: täglich frisch zubereiteter Pizzateig, hausgemachte Pasta, gegrilltes Fleisch und Frischfisch vom Markt. Keine Tricks — nur gute Zutaten und bewährte Rezepte.',
            'about.quote':   '"Gute Pizza, guter Wein,<br>der Abend ist gerettet."',
            'about.badge':   'Seit 1988 · Fabio & Familie',

            'feat.1.title': 'Elektroofen',
            'feat.1.text':  'Frisch gebackene Pizzen, lang gereifter Teig.',
            'feat.2.title': 'Frische Pasta',
            'feat.2.text':  'Traditionelle italienische Ersten Gänge, jeden Tag.',
            'feat.3.title': 'Fleisch & Fisch',
            'feat.3.text':  'Einfache, echte Land- und Meeresgerichte.',
            'feat.4.title': 'Heimatgefühl',
            'feat.4.text':  'Familiäre Atmosphäre, wie früher.',

            'preview.eyebrow':  'Unsere Speisekarte',
            'preview.title':    'Ein Vorgeschmack',
            'preview.sub':      'Von der traditionellen Pizza bis zu Hausrezepten. Eine Auswahl — die vollständige Karte wartet am Tisch.',
            'preview.full_btn': 'Vollständige Speisekarte',
            'preview.call_btn': 'Reservieren',

            'cat.family':     'Familienpizza-Angebot',
            'cat.family_tag': 'für 4 Personen',
            'cat.primi':      'Erste Gänge',
            'cat.carne':      'Fleisch & Fisch',

            'gallery.eyebrow': 'Galerie',
            'gallery.title':   'Im Lokal',
            'gallery.sub':     'Eng gestellte Tische, handgeschriebene Tafeln, offene Küche. Kommen Sie rein und genießen Sie die familiäre Atmosphäre.',

            'contact.eyebrow': 'Kontakt & Öffnungszeiten',
            'contact.title':   'Besuchen Sie uns',
            'contact.lead':    'Im historischen Zentrum von Porlezza, einen Steinwurf vom See. Für Reservierungen oder Take-away einfach anrufen.',
            'contact.addr':    'Adresse',
            'contact.phone':   'Telefon',
            'contact.hours':   'Öffnungszeiten',
            'contact.italy':   'Italien',

            'day.mon': 'Montag',     'day.tue': 'Dienstag',  'day.wed': 'Mittwoch',
            'day.thu': 'Donnerstag', 'day.fri': 'Freitag',   'day.sat': 'Samstag',
            'day.sun': 'Sonntag',    'day.closed': 'Geschlossen',

            'footer.addr':    'Restaurant · Pizzeria · Bar<br>da Fabio — Via Garibaldi 31, Porlezza (CO)',
            'footer.contact': 'Kontakt',
            'footer.social':  'Social',
            'footer.rights':  'Alle Rechte vorbehalten.',

            'status.open_today': 'Heute geöffnet 12:00–14:00 · 18:00–22:00',

            'page.eyebrow': 'Unsere Speisekarte',
            'page.title':   'Speisekarte & Preise',
            'page.sub':     'Traditionelle italienische Gerichte, frisch gebackene Pizzen und einige Spezialitäten, die wir schon immer gemacht haben.',
            'menu.back':    '← Zurück zur Startseite',

            'menu.cat.family':       '🍕 Familienpizza-Angebot',
            'menu.cat.family_note':  'für 4 Personen, ideal zum Teilen',
            'menu.cat.primi':        '🍝 Erste Gänge',
            'menu.cat.primi_note':   'frische Pasta und Hausrisottos',
            'menu.cat.carne':        '🥩 Fleischspezialitäten',
            'menu.cat.carne_note':   'Grill- und klassische italienische Gerichte',
            'menu.cat.pesce':        '🐟 Fisch',
            'menu.cat.pesce_note':   'vom Markt, gegrillt oder in der Pfanne',
            'menu.cat.affettati':    '🧀 Aufschnitt & Vorspeisen',
            'menu.cat.affettati_note': 'Wurst, Käse und lokale Spezialitäten',
            'menu.cat.contorni':     '🥗 Beilagen',
            'menu.cat.focacce':      '🥖 Focaccia & Snacks',
            'menu.cat.focacce_note': 'ideal für eine Mittagspause',
            'menu.cat.pizze':        '🍕 Unsere Pizzen',
            'menu.cat.pizze_note':   'täglich frischer Teig, frisch gebacken',
            'menu.pizzabase':        'Jede Pizza: Tomaten und Mozzarella. Gedeck 2,00 € · Lieferung: +1,50 € pro Artikel · Doppelter Teig: +1,50 €',
            'menu.cta.call':         '📞 Anrufen und bestellen',
            'menu.cta.map':          'So finden Sie uns',

            /* Gerichtenamen */
            'dish.spaghettimore':     'Spaghetti mit Meeresfrüchten',
            'dish.spaghettiaglio':    'Spaghetti mit Knoblauch, Olivenöl und Peperoncino',
            'dish.spaghetticarbo':    'Spaghetti alla carbonara',
            'dish.spaghettipizz':     'Spaghetti mit Tomaten-Oregano-Sauce',
            'dish.spaghettiinero':    'Spaghetti mit Tintenfischtinte',
            'dish.fusibili':          'Fusilli biancorosa',
            'dish.tagliatelle':       'Tagliatelle all\'amatriciana',
            'dish.penne':             'Penne all\'arrabbiata',
            'dish.gnocchiformaggi':   'Gnocchi mit 4 Käsesorten',
            'dish.gnocchiverdi':      'Grüne Gnocchi',
            'dish.gnocchigialli':     'Gelbe Gnocchi',
            'dish.risottivari':       'Verschiedene Risottos',
            'dish.tagliata':          'Rindfleisch-Tagliata mit Rucola und Grana',
            'dish.filetto':           'Gegrilltes Rinderfilet',
            'dish.costata':           'Gegrilltes Rippensteak',
            'dish.scaloppinelimone':  'Kalbsschnitzel mit Zitrone',
            'dish.scaloppinefunghi':  'Kalbsschnitzel mit Pilzen',
            'dish.cotoletta':         'Mailänder Schnitzel',
            'dish.salsiccia':         'Wurst und Kartoffeln',
            'dish.frittura':          'Fritto misto di pesce',
            'dish.branzino':          'Wolfsbarsch aus dem Ofen',
            'dish.orata':             'Gegrillte Goldbrasse',
            'dish.calamari':          'Gegrillte Tintenfische',
            'dish.tagliereaff':       'Gemischte Aufschnittplatte',
            'dish.tagliereforn':      'Käseplatte',
            'dish.prosciuttomelone':  'Rohschinken und Melone',
            'dish.bresaolarucola':    'Bresaola, Rucola und Grana',
            'dish.caprese':           'Caprese mit Büffelmozzarella',
            'dish.insalatamista':     'Gemischter Salat',
            'dish.patatefritte':      'Pommes frites',
            'dish.verduregliate':     'Gegrilltes Gemüse',
            'dish.spinaci':           'Spinat mit Butter',
            'dish.focacciasemplice':  'Focaccia mit Öl und Salz',
            'dish.focacciafarcita':   'Focaccia mit Schinken und Mozzarella',
            'dish.piadina':           'Klassische Piadina',
            'dish.bruschette':        'Gemischte Bruschette',

            /* Pizzazutaten */
            'pizza.desc.marinara':   ' – Tomate, Kapern, Knoblauch',
            'pizza.desc.generoso':   ' – Salami',
            'pizza.desc.napoli':     ' – Sardellen, Oliven',
            'pizza.desc.regina':     ' – Pilze, Schinken',
            'pizza.desc.bregagno':   ' – Schinken, Ei, Taleggio, Gorgonzola',
            'pizza.desc.pizzaiola':  ' – Oregano, frische Mozzarella, Oliven, Kapern',
            'pizza.desc.stagioni4':  ' – Schinken, Pilze, Artischocken, Paprika',
            'pizza.desc.capricciosa':' – Salami, Artischocken, Paprika, Oliven, Zwiebeln',
            'pizza.desc.pescatore':  ' – Meeresfrüchte, Knoblauch, Kapern',
            'pizza.desc.duna':       ' – Salami, Zwiebel, Pilze, scharf',
            'pizza.desc.stafan':     ' – Tomate, Mozzarella, Pilze, Spinat',
            'pizza.desc.tonno':      ' – Thunfisch, Zwiebeln',
            'pizza.desc.parmense':   ' – Kochschinken, Auberginen, Parmesan',
            'pizza.desc.cima':       ' – Thunfisch, Garnelen, frische Mozzarella, grüner Salat, rosa Sauce',
            'pizza.desc.paperina':   ' – Rucola',
            'pizza.desc.lucky':      ' – Gorgonzola und Walnüsse',
            'pizza.desc.messicana':  ' – scharfe Salami',
            'pizza.desc.formaggi4':  ' – Grana, Taleggio, Gorgonzola, Mozzarella',
            'pizza.desc.vegana':     ' – gemischtes Ofengemüse',
            'pizza.desc.gianna':     ' – Garnelen und Rucola',
            'pizza.desc.piattoit':   ' – Schnitzel aus dem Ofen, auf Brot, gemischter Salat',
            'pizza.desc.azzurra':    ' – frische Mozzarella, frische Tomate, Parmesan, grüne Sauce',
            'pizza.desc.crudoparma': ' – Parmaschinken',
            'pizza.desc.tedesca':    ' – Würstchen',
            'pizza.desc.giacomo':    ' – Rohschinken, Gorgonzola',
            'pizza.desc.pugliese':   ' – Tomate, Mozzarella, Zwiebeln',
            'pizza.desc.daniele':    ' – Tomate, Mozzarella, Taleggio, Kochschinken',
            'pizza.desc.maxi':       ' – Speck, Gorgonzola',
            'pizza.desc.people':     ' – Taleggio, Zucchini, Kochschinken',
            'pizza.desc.carletto':   ' – Pommes frites',
            'pizza.desc.calzone':    ' – Pilze, Kochschinken, Artischocken, Paprika',
            'pizza.desc.bresaolona': ' – frische Mozzarella, Rucola, frische Tomate, Bresaola',
            'pizza.desc.ceresio':    ' – frische Mozzarella, Auberginen, Parmesan, Rohschinken, frische Tomate, Rucola',
            'pizza.desc.mami':       ' – Ofenkartoffeln, Speck, Taleggio',
            'pizza.desc.paesana':    ' – Rohschinken, Mozzarella, Parmesan',
            'pizza.desc.valtellina': ' – Bresaola, Pilze, Rucola, Grana',
            'pizza.desc.gio':        ' – Pilze, Garnelen',
            'pizza.desc.lina':       ' – frische Mozzarella, Kochschinken, Rucola',
            'pizza.desc.orientale':  ' – Garnelen, Kochschinken, Curry',
            'pizza.desc.fattore':    ' – Kochschinken, Parmesan',
            'pizza.desc.delmozzo':   ' – scharfe Salami, Gorgonzola',
            'pizza.desc.cico':       ' – Schnitzel, Tomate, Mozzarella, Taleggio',
            'pizza.desc.manu':       ' – Mozzarella, Gorgonzola, Grana, Pilze',
            'pizza.desc.latina':     ' – Eier, Parmesan, gemischtes Gemüse',
            'pizza.desc.porlezza':   ' – frische Tomate und Mozzarella, Parmaschinken, Rucola',
        },

        /* ---- FRANÇAIS ---- */
        fr: {
            'nav.about':    'Qui sommes-nous',
            'nav.menu':     'Menu',
            'nav.fullmenu': 'Menu complet',
            'nav.gallery':  'Galerie',
            'nav.contact':  'Contact',
            'nav.call':     'Appeler',

            'hero.eyebrow':  'Porlezza · Lac de Lugano',
            'hero.title':    'La pizza de la maison,<br><em>comme autrefois.</em>',
            'hero.claim':    'Cuisine italienne authentique, pâtes fraîches, pizzas cuites au moment.<br>Une table, un verre de vin et la sensation d\'être chez soi.',
            'hero.cta_call': 'Appeler maintenant',
            'hero.cta_menu': 'Voir le menu',

            'about.eyebrow': 'Notre histoire',
            'about.title':   'Une pizzeria de village,<br>au cœur de Porlezza',
            'about.lead':    'Depuis des années, Pronto Pizza — da Fabio — est un lieu de rendez-vous pour les habitants de Porlezza et les visiteurs du lac. On entre, on sent le parfum du four, on voit la cuisine ouverte et on s\'assoit à des tables serrées comme dans une maison de famille.',
            'about.text':    'Notre cuisine est une cuisine italienne franche : pizzas avec pâte travaillée chaque jour, pâtes fraîches, viandes grillées, poissons du marché. Pas d\'effets spéciaux, juste de bons ingrédients et un accueil chaleureux.',
            'about.quote':   '"Bonne pizza, bon vin,<br>la soirée est sauvée."',
            'about.badge':   'Depuis 1988 · Fabio & famille',

            'feat.1.title': 'Four électrique',
            'feat.1.text':  'Pizzas cuites au moment, pâte longuement maturée.',
            'feat.2.title': 'Pâtes fraîches',
            'feat.2.text':  'Premiers plats de la tradition italienne, chaque jour.',
            'feat.3.title': 'Viande & poisson',
            'feat.3.text':  'Plats simples et authentiques, terre et mer.',
            'feat.4.title': 'Ambiance familiale',
            'feat.4.text':  'Accueil chaleureux, à l\'ancienne.',

            'preview.eyebrow':  'Notre menu',
            'preview.title':    'Un aperçu de la carte',
            'preview.sub':      'De la pizza traditionnelle aux spécialités de la maison. Une sélection — la carte complète vous attend à table.',
            'preview.full_btn': 'Voir la carte complète',
            'preview.call_btn': 'Appeler pour réserver',

            'cat.family':     'Offre Pizza Famille',
            'cat.family_tag': 'pour 4 personnes',
            'cat.primi':      'Premiers plats',
            'cat.carne':      'Viande & Poisson',

            'gallery.eyebrow': 'Galerie',
            'gallery.title':   'À l\'intérieur',
            'gallery.sub':     'Tables serrées, ardoises écrites à la main, cuisine ouverte. Entrez et respirez l\'air de la maison.',

            'contact.eyebrow': 'Contacts & horaires',
            'contact.title':   'Venez nous rendre visite',
            'contact.lead':    'Dans le centre historique de Porlezza, à deux pas du lac. Pour réserver ou commander une pizza à emporter, un coup de téléphone suffit.',
            'contact.addr':    'Adresse',
            'contact.phone':   'Téléphone',
            'contact.hours':   'Heures d\'ouverture',
            'contact.italy':   'Italie',

            'day.mon': 'Lundi',    'day.tue': 'Mardi',    'day.wed': 'Mercredi',
            'day.thu': 'Jeudi',    'day.fri': 'Vendredi', 'day.sat': 'Samedi',
            'day.sun': 'Dimanche', 'day.closed': 'Fermé',

            'footer.addr':    'Restaurant · Pizzeria · Bar<br>da Fabio — Via Garibaldi 31, Porlezza (CO)',
            'footer.contact': 'Contact',
            'footer.social':  'Social',
            'footer.rights':  'Tous droits réservés.',

            'status.open_today': 'Ouvert aujourd\'hui 12h–14h · 18h–22h',

            'page.eyebrow': 'Notre carte',
            'page.title':   'Menu & Prix',
            'page.sub':     'Plats de la tradition italienne, pizzas cuites au moment et quelques spécialités que nous préparons depuis toujours.',
            'menu.back':    '← Retour à l\'accueil',

            'menu.cat.family':       '🍕 Offre Pizza Famille',
            'menu.cat.family_note':  'pour 4 personnes, idéal à partager',
            'menu.cat.primi':        '🍝 Premiers plats',
            'menu.cat.primi_note':   'pâtes fraîches et risottos de la maison',
            'menu.cat.carne':        '🥩 Spécialités de viande',
            'menu.cat.carne_note':   'grillades et classiques italiens',
            'menu.cat.pesce':        '🐟 Poisson',
            'menu.cat.pesce_note':   'du marché, grillé ou à la poêle',
            'menu.cat.affettati':    '🧀 Charcuterie & entrées',
            'menu.cat.affettati_note': 'charcuteries, fromages et spécialités locales',
            'menu.cat.contorni':     '🥗 Accompagnements',
            'menu.cat.focacce':      '🥖 Focaccias & snacks',
            'menu.cat.focacce_note': 'parfaits pour une pause déjeuner',
            'menu.cat.pizze':        '🍕 Nos pizzas',
            'menu.cat.pizze_note':   'pâte travaillée chaque jour, cuites au moment',
            'menu.pizzabase':        'Base de chaque pizza : tomate et mozzarella. Couvert 2,00 € · Livraison : +1,50 € par article · Double pâte : +1,50 €',
            'menu.cta.call':         '📞 Appeler pour commander',
            'menu.cta.map':          'Comment nous trouver',

            /* Noms des plats */
            'dish.spaghettimore':     'Spaghetti aux fruits de mer',
            'dish.spaghettiaglio':    'Spaghetti ail, huile et piment',
            'dish.spaghetticarbo':    'Spaghetti alla carbonara',
            'dish.spaghettipizz':     'Spaghetti sauce tomate et origan',
            'dish.spaghettiinero':    'Spaghetti à l\'encre de seiche',
            'dish.fusibili':          'Fusilli biancorosa',
            'dish.tagliatelle':       'Tagliatelle all\'amatriciana',
            'dish.penne':             'Penne all\'arrabbiata',
            'dish.gnocchiformaggi':   'Gnocchi aux 4 fromages',
            'dish.gnocchiverdi':      'Gnocchi verts',
            'dish.gnocchigialli':     'Gnocchi jaunes',
            'dish.risottivari':       'Risottos variés',
            'dish.tagliata':          'Tagliata de bœuf, roquette et grana',
            'dish.filetto':           'Filet de bœuf grillé',
            'dish.costata':           'Côte de bœuf grillée',
            'dish.scaloppinelimone':  'Escalopes au citron',
            'dish.scaloppinefunghi':  'Escalopes aux champignons',
            'dish.cotoletta':         'Côtelette à la milanaise',
            'dish.salsiccia':         'Saucisse et pommes de terre',
            'dish.frittura':          'Friture mixte de poisson',
            'dish.branzino':          'Bar au four',
            'dish.orata':             'Daurade grillée',
            'dish.calamari':          'Calmars grillés',
            'dish.tagliereaff':       'Planche de charcuterie mixte',
            'dish.tagliereforn':      'Planche de fromages',
            'dish.prosciuttomelone':  'Jambon cru et melon',
            'dish.bresaolarucola':    'Bresaola, roquette et grana',
            'dish.caprese':           'Caprese à la mozzarella de bufflonne',
            'dish.insalatamista':     'Salade mixte',
            'dish.patatefritte':      'Frites',
            'dish.verduregliate':     'Légumes grillés',
            'dish.spinaci':           'Épinards au beurre',
            'dish.focacciasemplice':  'Focaccia huile et sel',
            'dish.focacciafarcita':   'Focaccia farcie jambon et mozzarella',
            'dish.piadina':           'Piadina classique',
            'dish.bruschette':        'Bruschette mixtes',

            /* Ingrédients des pizzas */
            'pizza.desc.marinara':   ' – tomate, câpres, ail',
            'pizza.desc.generoso':   ' – salami',
            'pizza.desc.napoli':     ' – anchois, olives',
            'pizza.desc.regina':     ' – champignons, jambon',
            'pizza.desc.bregagno':   ' – jambon, œuf, taleggio, gorgonzola',
            'pizza.desc.pizzaiola':  ' – origan, mozzarella fraîche, olives, câpres',
            'pizza.desc.stagioni4':  ' – jambon, champignons, artichauts, poivrons',
            'pizza.desc.capricciosa':' – salami, artichauts, poivrons, olives, oignons',
            'pizza.desc.pescatore':  ' – fruits de mer, ail, câpres',
            'pizza.desc.duna':       ' – salami, oignon, champignons, épicé',
            'pizza.desc.stafan':     ' – tomate, mozzarella, champignons, épinards',
            'pizza.desc.tonno':      ' – thon, oignons',
            'pizza.desc.parmense':   ' – jambon cuit, aubergines, parmesan',
            'pizza.desc.cima':       ' – thon, crevettes, mozzarella fraîche, salade verte, sauce rose',
            'pizza.desc.paperina':   ' – roquette',
            'pizza.desc.lucky':      ' – gorgonzola et noix',
            'pizza.desc.messicana':  ' – salami épicé',
            'pizza.desc.formaggi4':  ' – grana, taleggio, gorgonzola, mozzarella',
            'pizza.desc.vegana':     ' – légumes variés au four',
            'pizza.desc.gianna':     ' – crevettes et roquette',
            'pizza.desc.piattoit':   ' – escalope panée au four, servie sur pain, salade mixte',
            'pizza.desc.azzurra':    ' – mozzarella fraîche, tomate fraîche, parmesan, sauce verte',
            'pizza.desc.crudoparma': ' – jambon cru de Parme',
            'pizza.desc.tedesca':    ' – saucisse',
            'pizza.desc.giacomo':    ' – jambon cru, gorgonzola',
            'pizza.desc.pugliese':   ' – tomate, mozzarella, oignons',
            'pizza.desc.daniele':    ' – tomate, mozzarella, taleggio, jambon cuit',
            'pizza.desc.maxi':       ' – speck, gorgonzola',
            'pizza.desc.people':     ' – taleggio, courgettes, jambon cuit',
            'pizza.desc.carletto':   ' – frites',
            'pizza.desc.calzone':    ' – champignons, jambon cuit, artichauts, poivrons',
            'pizza.desc.bresaolona': ' – mozzarella fraîche, roquette, tomate fraîche, bresaola',
            'pizza.desc.ceresio':    ' – mozzarella fraîche, aubergines, parmesan, jambon cru, tomate fraîche, roquette',
            'pizza.desc.mami':       ' – pommes de terre au four, speck, taleggio',
            'pizza.desc.paesana':    ' – jambon cru, mozzarella, parmesan',
            'pizza.desc.valtellina': ' – bresaola, champignons, roquette, grana',
            'pizza.desc.gio':        ' – champignons, crevettes',
            'pizza.desc.lina':       ' – mozzarella fraîche, jambon cuit, roquette',
            'pizza.desc.orientale':  ' – crevettes, jambon cuit, curry',
            'pizza.desc.fattore':    ' – jambon cuit, parmesan',
            'pizza.desc.delmozzo':   ' – salami épicé, gorgonzola',
            'pizza.desc.cico':       ' – escalope panée, tomate, mozzarella, taleggio',
            'pizza.desc.manu':       ' – mozzarella, gorgonzola, grana, champignons',
            'pizza.desc.latina':     ' – œufs, parmesan, légumes variés',
            'pizza.desc.porlezza':   ' – tomate et mozzarella fraîches, jambon cru de Parme, roquette',
        }
    };

    var FLAGS = { it: '🇮🇹', en: '🇬🇧', de: '🇩🇪', fr: '🇫🇷' };
    var CODES  = { it: 'IT',  en: 'EN',  de: 'DE',  fr: 'FR'  };

    /* ================================================================
       APPLICAZIONE LINGUA
       ================================================================ */
    function applyLang(lang) {
        var t = T[lang] || T.it;

        /* attributo lang sull'html */
        document.documentElement.lang = lang;

        /* data-i18n → textContent */
        document.querySelectorAll('[data-i18n]').forEach(function (el) {
            var key = el.getAttribute('data-i18n');
            if (t[key] !== undefined) el.textContent = t[key];
        });

        /* data-i18n-html → innerHTML */
        document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
            var key = el.getAttribute('data-i18n-html');
            if (t[key] !== undefined) el.innerHTML = t[key];
        });

        /* aggiorna bandiera/codice nel bottone */
        document.querySelectorAll('.lang-flag').forEach(function (el) {
            el.textContent = FLAGS[lang] || '🇮🇹';
        });
        document.querySelectorAll('.lang-code').forEach(function (el) {
            el.textContent = CODES[lang] || 'IT';
        });

        /* marca voce attiva nel dropdown */
        document.querySelectorAll('[data-lang]').forEach(function (btn) {
            if (btn.getAttribute('data-lang') === lang) {
                btn.setAttribute('data-active', '');
            } else {
                btn.removeAttribute('data-active');
            }
        });
    }

    function setLang(lang) {
        try { localStorage.setItem('pp-lang', lang); } catch (e) {}
        applyLang(lang);
        /* chiudi tutti i dropdown */
        document.querySelectorAll('[data-lang-switcher].open').forEach(function (sw) {
            sw.classList.remove('open');
            var btn = sw.querySelector('.lang-btn');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        });
    }

    /* ================================================================
       DROPDOWN TOGGLE
       ================================================================ */
    document.querySelectorAll('[data-lang-switcher]').forEach(function (switcher) {
        var btn = switcher.querySelector('.lang-btn');

        if (btn) {
            btn.addEventListener('click', function (e) {
                e.stopPropagation();
                var isOpen = switcher.classList.toggle('open');
                btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
            });
        }

        switcher.querySelectorAll('[data-lang]').forEach(function (langBtn) {
            langBtn.addEventListener('click', function () {
                setLang(langBtn.getAttribute('data-lang'));
            });
        });
    });

    /* chiudi cliccando fuori */
    document.addEventListener('click', function () {
        document.querySelectorAll('[data-lang-switcher].open').forEach(function (sw) {
            sw.classList.remove('open');
            var b = sw.querySelector('.lang-btn');
            if (b) b.setAttribute('aria-expanded', 'false');
        });
    });

    /* ================================================================
       INIZIALIZZAZIONE
       ================================================================ */
    var supported = ['it', 'en', 'de', 'fr'];
    var saved, browser, initial;

    try { saved = localStorage.getItem('pp-lang'); } catch (e) {}
    browser = (navigator.language || '').split('-')[0].toLowerCase();

    if (supported.indexOf(saved) !== -1) {
        initial = saved;
    } else if (supported.indexOf(browser) !== -1) {
        initial = browser;
    } else {
        initial = 'it';
    }

    applyLang(initial);

})();
