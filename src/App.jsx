import { useState, useEffect, useRef } from "react";

const TRADITIONS = [
  {
    id: "baybayin",
    title: "Baybayin",
    subtitle: "Writing on Bamboo",
    era: "c. 14th–16th century",
    icon: "ᜊ",
    color: "#C4956A",
    category: "knowledge",
    content: {
      overview: "Centuries before Spain arrived, Filipinos inscribed thoughts, poetry, and messages onto bamboo slats and palm leaves using Baybayin — an alphasyllabary where each character represents a consonant-vowel pair. Writers carved with sharp knives or iron styluses, rubbing ash into the grooves to make characters visible.",
      details: [
        "Spanish Jesuit Pedro Chirino (c. 1600) noted that most Tagalogs could read and write — literacy was widespread, even among commoners and women.",
        "Used for personal letters, poetry, legal notes, ritual chants, and love letters. Not used for lengthy narratives — oral tradition carried the epics.",
        "Regional variants existed: Kur-itan (Ilocano), Badlit (Visayan), Basahan (Bikolano), Kulitan (Kapampangan). All share the same Brahmic-derived structure.",
        "Surviving texts are rare because bamboo and palm leaves decay in tropical climates. Most pre-colonial written knowledge was lost to time and Spanish burning of indigenous texts."
      ],
      quote: "They have their letters and characters... They write upon bamboo or palm leaves, using the point of a knife.",
      quoteSource: "— Fray Pedro Chirino, S.J., Relación de las Islas Filipinas (1604)"
    }
  },
  {
    id: "lci",
    title: "Laguna Copperplate",
    subtitle: "The Oldest Document",
    era: "April 21, 900 AD",
    icon: "⊞",
    color: "#B87333",
    category: "knowledge",
    content: {
      overview: "The Laguna Copperplate Inscription (LCI) is the earliest known calendar-dated document found in the Philippines — a legal certificate of debt forgiveness inscribed in Kawi script on April 21, 900 AD. It proves that formal legal systems, literacy, and international diplomacy existed 600 years before Spain arrived.",
      details: [
        "Found in 1987 by a laborer dredging sand near the Lumbang River in Laguna. It was sold to an antique dealer, then acquired by the National Museum. Dutch anthropologist Antoon Postma deciphered it in 1991.",
        "Written in Old Malay with Sanskrit technical terms, Old Javanese honorifics, and Old Tagalog elements — essentially ancient code-switching, reflecting a multilingual, cosmopolitan society.",
        "The document releases the heirs of a nobleman named Namwaran from a debt of 865 grams of gold, authorized by the Chief of Tondo and witnessed by officials from Pila, Pulilan, and a reference to Medang (Java).",
        "It uses the Hindu Shaka calendar (year 822) and references the deity title 'Dewata' — proving cultural and trade links with Java, the Srivijaya Empire, and the broader Indic world."
      ],
      quote: "The living descendants of the Honourable Namwaran are forgiven, indeed, of any and all debts.",
      quoteSource: "— Laguna Copperplate Inscription, 900 AD (trans. Postma)"
    }
  },
  {
    id: "paganito",
    title: "Pag-anito",
    subtitle: "Spirit Communion",
    era: "Pre-colonial animism",
    icon: "◉",
    color: "#7B6B8D",
    category: "spirit",
    content: {
      overview: "The babaylan — predominantly women, occasionally feminized men called asog — served as shamans, healers, and spiritual leaders. Through pag-anito séances, they communicated with anito (ancestor spirits) and diwata (nature spirits), acting as mediators between the visible and invisible worlds.",
      details: [
        "Offerings included harvests, cooked food, wine, gold ornaments, betel nut, and animal blood (chicken, pig, or carabao). Salt and spices were avoided — spirits found them distasteful.",
        "Babaylan held enormous social authority — equal to the noble class, they could serve as interim community leaders in the datu's absence.",
        "Specific rituals governed every activity: Tamblan (Cebuano land-clearing), Kibang (Tagalog boat divination), Lapiraw (bamboo windmill for summoning wind), Magbinukid (river offerings on bamboo stalks).",
        "Taotao — carved wooden or ivory spirit figures — were kept in every household, no matter how poor. The Spanish systematically burned these upon arrival."
      ],
      quote: "They believed in the existence of a parallel spirit world, invisible yet influencing the visible world.",
      quoteSource: "— T. Valentino Sitoy, on pre-Spanish religious worldview"
    }
  },
  {
    id: "cosmology",
    title: "Three Realms",
    subtitle: "The Shape of the Universe",
    era: "Pre-colonial cosmology",
    icon: "☰",
    color: "#5C6B8A",
    category: "spirit",
    content: {
      overview: "Pre-colonial Filipinos understood the universe as three layered realms: an upper skyworld of gods and light, the middle world of humans and spirits, and a lower world of the dead. This wasn't a simple heaven-and-hell binary — the underworld was not a place of punishment but another realm of existence, and spirits moved freely between all three layers.",
      details: [
        "The Tagalog cosmos: Kaluwalhatian (skyworld, Bathala's domain), Kapatagan (the mortal realm), and Kasanaan (the underworld, guarded by Sitan). Souls of the virtuous and brave warriors ascended to Kaluwalhatian; others descended to Kasanaan, which had its own sub-regions.",
        "Supreme deities varied by ethnic group: Bathala (Tagalog, from Sanskrit 'Bhattara'), Kaptan (Visayan sky god), Kabunian (Ifugao, dwelling in the fifth heaven), Magbabaya (Bukidnon), Kadaw La Sambad and Bulon La Mogoas (T'boli supreme couple). There was no single unified 'Filipino religion' — each group had its own pantheon.",
        "Bathala had specialized agents called anito, each with a specific office — some for fields, some for sea journeys, some for war, some for disease. A personal twin spirit called badhala katutubo ('fellow native') was born with each person as a lifelong protector.",
        "The T'boli skyworld had seven layers. The Tagbanwa believed the underworld was an inverted mirror — night there was day on earth, rivers flowed backward, and rice was always eaten cold. Souls who died by the sword, were eaten by crocodiles, or struck by lightning could ascend directly to the skyworld via the rainbow."
      ],
      quote: "Filipinos believed there were spirits everywhere — in trees, rocks, creeks, the sky — ranging from the high creator gods to minor spirits.",
      quoteSource: "— T. Valentino Sitoy, on pre-Spanish cosmology"
    }
  },
  {
    id: "creatures",
    title: "Creatures & Spirits",
    subtitle: "The Inhabited World",
    era: "Ancient to present",
    icon: "◎",
    color: "#6B4C5E",
    category: "spirit",
    content: {
      overview: "The pre-colonial world teemed with beings that were neither fully human nor fully divine. Diwata were nature spirits inhabiting trees, rivers, and mountains. Engkanto were enchanted human-like beings of extraordinary beauty. And the aswang — an umbrella term for shape-shifting nocturnal creatures — was the most feared entity across the entire archipelago, so dreaded that even 16th-century Spanish colonists noted its power over the people.",
      details: [
        "Diwata (from Sanskrit 'devata') — nature spirits and guardian deities, gender-neutral, who could be benevolent or dangerous if disrespected. Specific diwata governed fertility, harvest, healing, and particular places. Maria Makiling is the most famous surviving diwata figure.",
        "Engkanto — enchanted humanoid beings, often strikingly beautiful, identifiable by their lack of a philtrum (the groove between nose and upper lip). They lured humans into hidden realms where time moved differently. If you tasted their food, you could never return. The Spanish syncretized these with European fairy traditions, giving them pale features — the original diwata had no European characteristics.",
        "Aswang — a bracket term covering multiple creature types: the manananggal (a woman who splits at the torso and flies at night hunting pregnant women), the blood-sucking vampire, the man-eating weredog, the evil-eye witch, and the carrion-eating ghoul. Each region had its own variant and local name.",
        "The tikbalang (horse-headed humanoid haunting mountain passes), kapre (tree-dwelling giant who smokes tobacco), nuno sa punso (old man of the anthill demanding 'tabi-tabi po'), tiyanak (goblin disguised as a crying baby), and the duwende (small earth-dwelling beings) remain deeply embedded in Filipino consciousness today."
      ],
      quote: "You can tell where a person is from based on the stories that they tell — if they talk about the wuwug, you know they are from Eastern Visayas.",
      quoteSource: "— Karl Gaverza, Philippine Spirits"
    }
  },
  {
    id: "soul",
    title: "The Soul & Omens",
    subtitle: "Navigating the Unseen",
    era: "Pre-colonial belief system",
    icon: "◌",
    color: "#7A8B6F",
    category: "spirit",
    content: {
      overview: "Pre-colonial Filipinos believed each person had multiple spiritual components — not a single soul, but a body, a life force (ginhawa), and a soul (kaluluwa). The Visayan concept of dungan described an 'astral double' that could wander during sleep or be captured by hostile spirits, causing illness. The babaylan's job was to negotiate its return.",
      details: [
        "The dungan (Visayan) or kaluluwa (Tagalog) was properly nurtured and strengthened by the babaylan. If hostile spirits captured it — often because a person unknowingly trespassed on sacred ground — the babaylan negotiated its return through offerings and ritual.",
        "Omens governed daily life. The Tigmamanukan was a blue-and-black bird (likely the Philippine Fairy Bluebird) serving as Bathala's messenger. If it flew right, the journey was safe; if it flew left, the traveler would be lost forever. Pointing at a rainbow was blasphemy — it was Bathala's bridge or loincloth (bahaghari).",
        "Divination took many forms: the rocking motion of boats (Kibang), the behavior of sacred birds, the patterns of flames, and the reading of animal entrails. Catalonan priestesses (Tagalog babaylan) specialized in interpreting these signs.",
        "Sorcery existed alongside healing: Juan de Plasencia documented four agents of Sitan (the underworld guardian) — Mangagaway (witches who could kill with wax images), Manisilat (who destroyed marriages), Mankukulam (who could kill through proximity), and Hukluban (who could change form and kill by fire."
      ],
      quote: "Early Filipinos believe that each person has a dungan — the astral double giving vitality. If captured by spirits, the babaylan could negotiate its return.",
      quoteSource: "— On the Visayan concept of the soul"
    }
  },
  {
    id: "pintados",
    title: "Pintados",
    subtitle: "The Tattooed Ones",
    era: "Ancient warrior tradition",
    icon: "⟁",
    color: "#2E5A88",
    category: "body",
    content: {
      overview: "The Spanish called the Visayans 'Los Pintados' — The Painted Ones — because their bodies were covered in elaborate tattoos called batok or patik. These weren't decorative: they were a warrior's permanent record of valor, earned through feats in battle. Facial tattoos were reserved for the most elite fighters.",
      details: [
        "Tattoos on the legs and arms could be acquired by any adult. Upper body tattoos required notable feats in battle or love. Chest and throat coverage came next. Face tattoos — the highest honor — were restricted to the bravest warriors, known as lipong.",
        "The Boxer Codex (c. 1590) provides the earliest illustrations of Pintados warriors, showing bold linear designs on legs and backs, and floral patterns on chests — some copied from Chinese porcelain trade designs.",
        "Both sexes had tattoos. Asog (feminized male shamans) were socially acceptable to be unmarked (mapuraw). Women had fine tattoos on their hands resembling embroidery.",
        "The tradition survives today only among the Kalinga people of the Cordilleras, most famously through Apo Whang-Od, the centenarian mambabatok who graced the cover of Vogue Philippines in 2023. She uses traditional thorn-and-soot hand-tapping methods."
      ],
      quote: "The tattoos of the Pintados project an aura of intimidation and fear towards their enemies, part of their psychological strategy during tribal war.",
      quoteSource: "— William Henry Scott, Barangay (1994)"
    }
  },
  {
    id: "gold",
    title: "Bulawan",
    subtitle: "The Golden Age",
    era: "10th–13th century peak",
    icon: "◈",
    color: "#D4A017",
    category: "craft",
    content: {
      overview: "Pre-colonial Filipinos were extraordinary goldsmiths. The Surigao Treasure — over 100 artifacts including masks, belts, bowls, and a gold kinnari vessel — represents one of the richest pre-colonial gold hoards in Southeast Asia. Gold wasn't rare or elite-only: Spanish colonizers were astonished to find it in common everyday use.",
      details: [
        "The Surigao Treasure (found 1981) includes artifacts dating to the 10th–13th century, exhibiting advanced techniques like repoussé and filigree. A 4.5-meter kamagi chain of 12 connected necklaces weighs nearly 1.5 kg.",
        "The Golden Tara of Agusan (found 1917) is a 2 kg, 21-karat gold statuette depicting a female figure in lotus position, dated to 850–950 CE — evidence of Hindu-Buddhist cultural influence in Mindanao. It now resides at the Field Museum in Chicago.",
        "Decorative dentistry was widespread: gold pegging (bansil), gold capping (halop), and gold plating of filed teeth. The Bolinao Skull from Pangasinan shows gold fish-scale dental work. Scott devotes pages to the craft of the mananusad (dental goldsmith).",
        "Gold death masks from Oton (Iloilo) and Butuan covered the faces of elite dead. Gold balance scales found in Surigao prove sophisticated trade networks predating European contact."
      ],
      quote: "The colonizers wanted to emphasize that we were nothing until they came, so we forgot what we had before we were colonized.",
      quoteSource: "— Florina Capistrano-Baker, curator, Ayala Museum"
    }
  },
  {
    id: "basi",
    title: "Basi",
    subtitle: "Sugarcane Wine",
    era: "Ancient Ilocano tradition",
    icon: "⏚",
    color: "#8B4513",
    category: "social",
    content: {
      overview: "Basi is a traditional Ilocano fermented wine (10–16% ABV) made from sugarcane juice (bennál), fermented in burnáy earthen jars with a natural starter called gamú and flavored with samak bark. Far more than a drink — it was sacred, woven into rituals of birth, marriage, and death since before recorded history.",
      details: [
        "Basi makers classified their wine as basing lalaki (dry, strong, potent) or basing babae (sweet, milder). Each family had its own recipe — no two were identical.",
        "Burnáy jars from Vigan were sometimes aged for ten years, buried underground and sealed with hard clay. The mellow taste came from this patient aging.",
        "The Spanish wine monopoly (1786) regulated production and forced makers to sell at absurdly low prices — sparking the Basi Revolt of 1807 led by Pedro Mateo of Piddig.",
        "Esteban Villanueva's 14 oil paintings of the revolt (1821) are now National Cultural Treasures at the NMP Ilocos Regional Museum (Old Carcel) in Vigan. They are the earliest Philippine artworks depicting a secular historical event."
      ],
      quote: "If there is a singular drink that the Ilocanos cannot do without in their long history as a people, it is basi.",
      quoteSource: "— Philstar, 'For the love of basi'"
    }
  },
  {
    id: "mama",
    title: "Mama / Buyo",
    subtitle: "Betel Nut Chewing",
    era: "Since at least 3000 BC",
    icon: "❦",
    color: "#9B2335",
    category: "social",
    content: {
      overview: "Betel quid — areca nut (bonga), betel leaf (buyo), and slaked lime (apog) from ground shells — was the most important social act in pre-colonial Filipino life. Historian William Henry Scott called it the single most important social ritual among the Visayans. It stained the teeth and lips a vivid crimson red.",
      details: [
        "Known as mama or maman in Ilocano, buyo or hitso in Tagalog, nga-nga (to chew) across many languages. Pigafetta described Samar natives chewing areca in 1521.",
        "Offering betel was the essence of hospitality — failing to offer it to a visitor was a serious breach. The importance of the visitor determined who prepared it.",
        "Courtship was intertwined: offering a partially chewed betel was an act of flirtation; returning one signaled acceptance of romantic advances.",
        "Betel juice was believed to ward off the aswang. Bukidnon folktales describe it strengthening warriors, healing the sick, reviving the dead, and serving as a portal to the spirit world."
      ],
      quote: "The preparation, exchange and serving of betel nut was the most important social act among the Visayans.",
      quoteSource: "— William Henry Scott, Barangay (1994)"
    }
  },
  {
    id: "burial",
    title: "Burial Jars",
    subtitle: "Journey to the Afterlife",
    era: "890–710 BC (Manunggul)",
    icon: "⏏",
    color: "#6B705C",
    category: "spirit",
    content: {
      overview: "Pre-colonial Filipinos practiced secondary burial — after the flesh decomposed, bones were placed in elaborately decorated pottery jars. The most famous is the Manunggul Jar (890–710 BC) from the Tabon Caves in Palawan, whose lid depicts two figures in a boat: a soul and its boatman, journeying to the afterlife.",
      details: [
        "Robert Fox's 1964 excavation of Manunggul Cave's Chamber A uncovered 78 jars and earthenwares. Human bones were found covered in red paint, alongside bracelets.",
        "The boat motif reflects the deep Austronesian belief that souls travel by water to the next world. This appears in epics across the archipelago.",
        "The Manunggul Jar's curvilinear scroll designs, painted with hematite, represent ocean waves. Its three faces (soul, boatman, boat) correspond to the three parts of a person: body, ginhawa (life force), and kaluluwa (soul).",
        "Other traditions: Kankanaey of Sagada carved their own coffins while alive. Datus were buried in boats with slaves, food, and belongings for the afterlife."
      ],
      quote: "The Manunggul Jar shows that the Filipinos' maritime culture is so paramount that it reflected in their religious beliefs.",
      quoteSource: "— National Museum of the Philippines"
    }
  },
  {
    id: "balangay",
    title: "Balangay",
    subtitle: "Boats & Maritime Culture",
    era: "320 AD (earliest find)",
    icon: "⛵",
    color: "#1B6B93",
    category: "craft",
    content: {
      overview: "The word 'barangay' — the basic unit of Filipino society — derives from balangay, the plank-built outrigger boats that carried Austronesian peoples across the Pacific. Nine ancient balangay were excavated in Butuan, Agusan del Norte, with the oldest radiocarbon-dated to 320 AD — among the oldest watercraft found in Southeast Asia.",
      details: [
        "These were not crude rafts: balangay were sophisticated edge-pegged plank boats, 15+ meters long, capable of open-ocean voyaging. They carried 60–90 people with cargo.",
        "Boat-building had its own elaborate rituals. Tagalog tribes conducted the Kibang ritual — reading the rocking motion of a boat as spirit-delivered messages about whether a sea raid or fishing trip would succeed.",
        "The Visayan Morotal was a woman's mourning ritual performed on a boat with three chosen warriors, involving songs of bravery and jars of wine, culminating in a feast at the destination.",
        "Boats were deeply tied to the afterlife — the Manunggul Jar's soul travels by boat, datus were buried in boats, and Philippine epics consistently describe the dead crossing water to reach the spirit realm."
      ],
      quote: "The meaning of boats went beyond fishing and transportation — they were linked to the travel of the soul to the afterlife.",
      quoteSource: "— The Aswang Project"
    }
  },
  {
    id: "epics",
    title: "Epic Traditions",
    subtitle: "Living Oral Literature",
    era: "Ancient, ongoing",
    icon: "𝄞",
    color: "#8E6F3E",
    category: "knowledge",
    content: {
      overview: "Before baybayin, before copperplates — the Philippines' deepest knowledge was carried in epic oral poems of staggering length and complexity. The Hinilawod of the Sulod people runs to 28,000+ verses. These aren't museum pieces: some are still performed by living chanters today.",
      details: [
        "Biag ni Lam-ang (Ilocano) — the oldest surviving Philippine literary work, about a hero born speaking, who avenges his father, courts a woman, dies, and is resurrected by his rooster and companions. Deeply Ilocano in setting and values.",
        "Hudhud (Ifugao) — chanted during rice sowing and harvest, and at funerals. Performed exclusively by women. Recognized by UNESCO as a Masterpiece of Intangible Heritage in 2001.",
        "Darangen (Maranao) — a Maranao epic of the Lake Lanao region, pre-Islamic in origin but now woven with Islamic elements. Also UNESCO-recognized (2005). Runs to 72,000 lines.",
        "Hinilawod (Sulod, Panay) — chronicles the quests of demigods across enchanted realms, confronting dragons and enchantresses. Performed by bagit (male bards) with gong accompaniment."
      ],
      quote: "The very thing that gave rise to ancient rituals is still present in us once we get over the idea of alphabetizing or explaining them.",
      quoteSource: "— Leny Mendoza Strobel, Babaylan (2010)"
    }
  },
  {
    id: "weaving",
    title: "Weaving",
    subtitle: "Cloth of the Spirits",
    era: "Ancient to present",
    icon: "⊠",
    color: "#6A4C93",
    category: "craft",
    content: {
      overview: "Pre-colonial Filipino weaving was not merely textile production — it was a spiritual practice. The T'boli people of South Cotabato believe that the patterns of their T'nalak cloth are revealed in dreams by the spirit Fu Dalu. Weavers who receive these dream-patterns are called dreamweavers, and their cloth cannot be copied without spiritual permission.",
      details: [
        "Abel Iloko — the woven cotton fabric of Ilocos, produced on traditional looms. It was traded as far as China and Southeast Asia. Abel blankets, runners, and clothing remain staples of Ilocano identity today.",
        "T'nalak (T'boli) — woven from abaca fibers, dyed with natural pigments, the patterns come only through dreams. It takes months to complete a single cloth. Designated a National Living Treasure tradition.",
        "Cordilleran backstrap loom weaving produced distinctive textiles: the Kalinga's binakol (optical illusion patterns), the Ifugao's tapis, and the Bontoc's distinctive striped fabrics — each with specific patterns marking social status.",
        "Weaving was primarily women's work and carried deep social meaning. Specific patterns were restricted to certain classes. A woman's skill at the loom was a measure of her value and marriageability."
      ],
      quote: "The sacred order of things remains in balance as long as they maintained their rituals of reciprocity.",
      quoteSource: "— Martin Prechtel, on indigenous creative traditions"
    }
  },
  {
    id: "teeth",
    title: "Body Adornment",
    subtitle: "Teeth, Skulls & Skin",
    era: "Pre-colonial practice",
    icon: "✧",
    color: "#A0522D",
    category: "body",
    content: {
      overview: "Pre-colonial Filipinos practiced elaborate body modification that shocked and fascinated Spanish observers. Teeth were filed to perfect symmetry, then stained black with anipay root or studded with gold pegs and caps. The effect — crimson betel-stained lips framing gold-and-ebony teeth — was the standard of beauty.",
      details: [
        "Tooth filing (sangka) was done by an expert with a slender stone file, sometimes removing half the tooth. The goal was perfect symmetry and the elimination of fang-like canines — seen as bestial.",
        "Gold dental work included bansil (pegs inserted into drilled holes), halop (caps extending beyond the gum line), and pusad (the general term for all gold dentistry). The mananusad was the paid dental craftsman.",
        "Skull molding was practiced among some groups — binding the heads of infants to achieve a desired elongated shape. Ear piercing with heavy ornaments that stretched the lobes was widespread.",
        "Pigafetta documented the tugbuk (penis pin) — a transverse bolt through the male organ, fitted with spurs or wheels at either end, which he described in considerable detail. This was confirmed by multiple Spanish observers across different ethnic groups."
      ],
      quote: "Human beings were thought to be distinguished by cosmetic refinements like filed and stained teeth.",
      quoteSource: "— William Henry Scott, Barangay (1994)"
    }
  },
  {
    id: "sabong",
    title: "Sabong",
    subtitle: "Cockfighting",
    era: "Pre-colonial, recorded 1521",
    icon: "⚔",
    color: "#B8860B",
    category: "social",
    content: {
      overview: "Cockfighting was already flourishing when Pigafetta documented Philippine life in 1521. Originally entertainment for the indigenous nobility, sabong evolved into a communal spectacle that crossed all social boundaries — a test of luck, honor, courage, and communal bonding that persists to this day.",
      details: [
        "The rooster symbolized masculinity, bravery, and martial valor. Cockfighting was tied to community gatherings, fiestas, harvest celebrations, and spiritual occasions.",
        "The Spanish did not introduce sabong — they legalized and taxed it, designating Sundays, holidays, and eventually Thursdays (Manila only, from 1861) as official cockfighting days.",
        "Presidential Decree No. 449 (1974) explicitly recognized sabong as 'a popular, traditional, and customary form of recreation' and 'a vehicle for the preservation of native Filipino heritage.'",
        "Betel nut vendors were a fixture at cockpits — Rizal's Noli Me Tangere describes peddlers of betel nut, cigars, and sweetmeats in the arena."
      ],
      quote: "Cockfighting has been and still is a popular, traditional and customary form of recreation among Filipinos.",
      quoteSource: "— Presidential Decree No. 449, Cockfighting Law of 1974"
    }
  },
  {
    id: "feast",
    title: "Salu-salo",
    subtitle: "Feasts & Celebrations",
    era: "Ancient communal tradition",
    icon: "⚱",
    color: "#C75B39",
    category: "social",
    content: {
      overview: "Pre-colonial feasts weren't casual dinners — they were multi-day, community-wide events where the line between celebration and sacred ritual barely existed. Maganito religious feasts for marriages and harvests could last 20 to 30 days, with chiefs drinking until carried to bed by slaves, waking up, and returning to resume the cycle of eating, drinking, and dancing.",
      details: [
        "Every major life event triggered a feast: birth, marriage, death, house-building (three separate feasts — one for cutting posts, one for raising them, one for the roof), harvest, departure for a sea raid, return from battle, and peace-making between barangays.",
        "Pigafetta describes the 1521 feast with Rajah Humabon in Cebu: two large porcelain dishes — one of rice, one of pork with gravy — then roast fish with ginger. The king's dishes were of gold. 'At every mouthful, we drank a cup of wine.' The use of Chinese porcelain signaled the host's wealth and trade connections.",
        "Everyone ate kamayan — with their hands. Rice was formed into a small mound with the fingertips, pressed together with a piece of meat or fish, compressed into a pyramid, and pushed into the mouth with the thumb. Food was served low to the ground on banana leaves or large communal platters.",
        "Drinking had formal ritual etiquette — the origin of the modern tagay. Pigafetta recorded: 'Before the king took the cup to drink, he raised his clasped hands toward the sky, and then toward me; and when he was about to drink, he extended the fist of his left hand toward me.' The Visayans had five kinds of wine: tuba (coconut sap), bahal (stronger sour version), lambanog (distilled), pangasi (rice wine), and intus (sugarcane wine).",
        "Feasts were never secular-only. A pig or chicken was ritually sacrificed, blood poured before the taotao spirit figures, and the meat became the feast itself. The babaylan presided over spiritual elements while the datu hosted the social ones. Women played the agung (gong) — Pigafetta said they played 'so harmoniously that it appeared they had great knowledge of music.' Youth played subin (windpipes).",
        "Mourning feasts had their own form: the Morotal involved women boarding a barangay boat with three warriors who sang of their bravery while rowing a boat filled with jars of wine. Upon reaching their destination, a great feast was held, and mourning ended with the woman eating rice again and wearing gold ornaments."
      ],
      quote: "At every mouthful, we drank a cup of wine. Before the king took the cup to drink, he raised his clasped hands toward the sky.",
      quoteSource: "— Antonio Pigafetta, First Voyage Around the World (1525)"
    }
  },
  {
    id: "everyday",
    title: "Everyday Life",
    subtitle: "The Barangay World",
    era: "Pre-colonial society",
    icon: "⌂",
    color: "#4E7C5B",
    category: "social",
    content: {
      overview: "Pre-colonial Filipino life was organized around the barangay — a kinship-based community of 30 to 100 families led by a datu. Society was hierarchical but relatively egalitarian compared to European feudalism, with a bilateral kinship system that gave women significant power and autonomy.",
      details: [
        "Social classes: maharlika (warrior nobility), timawa (freemen), and alipin (dependent class, often mistranslated as 'slaves' — closer to debt-bondage with rights and paths to freedom).",
        "Women could own property, engage in trade, divorce their husbands, and inherit leadership. The babaylan's spiritual authority was a distinctly feminine domain in most groups.",
        "Trade networks stretched to China, Japan, Borneo, Siam, and the Malay world. Porcelain, gold, iron, wax, and textiles moved through maritime routes.",
        "Communal drinking (tagayan) was central to social bonding. Feasts for marriages and harvests could last 20–30 days, with chiefs drinking until carried to bed, then waking to resume."
      ],
      quote: "The very thing that gave rise to ancient rituals is still present in us once we get over the idea of alphabetizing or explaining them.",
      quoteSource: "— Leny Mendoza Strobel, Babaylan (2010)"
    }
  }
];

const CATEGORIES = [
  { id: "all", label: "All", color: "#C4956A" },
  { id: "knowledge", label: "Writing & Knowledge", color: "#C4956A" },
  { id: "spirit", label: "Spirit World", color: "#7B6B8D" },
  { id: "body", label: "Body & Adornment", color: "#2E5A88" },
  { id: "craft", label: "Craft & Trade", color: "#D4A017" },
  { id: "social", label: "Social Life", color: "#4E7C5B" },
];

const TIMELINE = [
  { year: "~50,000 BP", event: "Earliest human remains in the Philippines (Tabon Man, Palawan)" },
  { year: "~3000 BC", event: "Austronesian migrations bring farming, pottery, and betel chewing" },
  { year: "~890 BC", event: "Manunggul Jar burial — secondary burial tradition flourishes in Palawan" },
  { year: "320 AD", event: "Oldest Butuan balangay boat — sophisticated plank-built ocean vessel" },
  { year: "900 AD", event: "Laguna Copperplate Inscription — debt forgiveness in Kawi script" },
  { year: "~950 AD", event: "Golden Tara of Agusan — Hindu-Buddhist gold statuette, Mindanao" },
  { year: "~1000 AD", event: "Surigao gold trade peaks — Butuan sends tribute to Song Dynasty China" },
  { year: "1169", event: "Chinese annals describe tattooed Visayan warriors raiding a coastal town" },
  { year: "1380", event: "Islam reaches Sulu — new cultural layer alongside animism" },
  { year: "1521", event: "Magellan arrives — Pigafetta documents sabong, betel, gold, tattoos, and tagayan" },
  { year: "1565", event: "Legazpi names the Visayas 'Las Islas de los Pintados' — Spanish colonization begins" },
  { year: "1807", event: "Basi Revolt — Ilocanos rise against Spanish wine monopoly" },
  { year: "2001", event: "UNESCO recognizes Hudhud chants of the Ifugao as Intangible Heritage" },
  { year: "2023", event: "Apo Whang-Od, last mambabatok, appears on the cover of Vogue Philippines" },
];

function DetailCard({ item }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div
      style={{
        background: "rgba(30, 27, 24, 0.7)",
        backdropFilter: "blur(12px)",
        borderRadius: 16,
        border: `1px solid ${item.color}33`,
        padding: "24px 28px",
        cursor: "pointer",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        position: "relative",
        overflow: "hidden",
      }}
      onClick={() => setExpanded(!expanded)}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = item.color + "88";
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = `0 8px 32px ${item.color}22`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = item.color + "33";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 3,
        background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
        opacity: 0.5,
      }} />
      <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
        <div style={{
          fontSize: 38, lineHeight: 1, color: item.color,
          fontFamily: "serif", flexShrink: 0, marginTop: 2,
          textShadow: `0 0 20px ${item.color}44`,
        }}>
          {item.icon}
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: 10, flexWrap: "wrap" }}>
            <h3 style={{
              margin: 0, fontSize: 24,
              fontFamily: "'Playfair Display', Georgia, serif",
              color: "#F5E6D3", fontWeight: 700, letterSpacing: "0.02em",
            }}>
              {item.title}
            </h3>
            <span style={{
              fontSize: 16, color: item.color, fontStyle: "italic",
              fontFamily: "'Cormorant Garamond', Georgia, serif",
            }}>
              {item.subtitle}
            </span>
          </div>
          <div style={{
            fontSize: 13, color: "rgba(245,230,211,0.35)", marginTop: 4,
            fontFamily: "monospace", letterSpacing: "0.08em", textTransform: "uppercase",
          }}>
            {item.era}
          </div>
          <p style={{
            margin: "12px 0 0", fontSize: 18, lineHeight: 1.7,
            color: "rgba(245,230,211,0.7)",
            fontFamily: "'Cormorant Garamond', Georgia, serif",
          }}>
            {item.content.overview}
          </p>

          {expanded && (
            <div style={{ marginTop: 18, animation: "fadeSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}>
              <div style={{ display: "grid", gap: 10 }}>
                {item.content.details.map((detail, i) => (
                  <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <div style={{
                      width: 5, height: 5, borderRadius: "50%",
                      background: item.color, flexShrink: 0, marginTop: 8, opacity: 0.6,
                    }} />
                    <p style={{
                      margin: 0, fontSize: 17, lineHeight: 1.7,
                      color: "rgba(245,230,211,0.6)",
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                    }}>
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
              <blockquote style={{
                margin: "20px 0 0", padding: "16px 20px",
                borderLeft: `3px solid ${item.color}55`,
                background: `${item.color}08`, borderRadius: "0 10px 10px 0",
              }}>
                <p style={{
                  margin: 0, fontSize: 17, lineHeight: 1.7,
                  color: "rgba(245,230,211,0.75)", fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                }}>
                  "{item.content.quote}"
                </p>
                <cite style={{
                  display: "block", marginTop: 6, fontSize: 13,
                  color: "rgba(245,230,211,0.35)", fontStyle: "normal", fontFamily: "monospace",
                }}>
                  {item.content.quoteSource}
                </cite>
              </blockquote>
            </div>
          )}
          <div style={{
            marginTop: 12, fontSize: 14, color: item.color,
            fontFamily: "monospace", opacity: 0.6,
          }}>
            {expanded ? "▲ collapse" : "▼ tap to explore"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PreColonialPhilippines() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showTimeline, setShowTimeline] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef(null);

  const filtered = activeCategory === "all"
    ? TRADITIONS
    : TRADITIONS.filter(t => t.category === activeCategory);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const h = () => setScrollY(el.scrollTop);
    el.addEventListener("scroll", h, { passive: true });
    return () => el.removeEventListener("scroll", h);
  }, []);

  const heroOpacity = Math.max(0, 1 - scrollY / 500);
  const heroScale = Math.max(0.92, 1 - scrollY / 3000);

  return (
    <div ref={containerRef} style={{
      minHeight: "100vh", background: "#12100E", color: "#F5E6D3",
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      overflowY: "auto", overflowX: "hidden", position: "relative",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&display=swap');
        * { box-sizing: border-box; }
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes breathe {
          0%, 100% { opacity: 0.3; } 50% { opacity: 0.6; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(2deg); }
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(24px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes revealLine { from { width: 0; } to { width: 100px; } }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(196,149,106,0.25); border-radius: 3px; }
      `}</style>

      {/* Ambient */}
      <div style={{ position: "fixed", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", top: "8%", right: "-8%", width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(196,149,106,0.03) 0%, transparent 70%)",
          animation: "breathe 8s ease-in-out infinite",
        }} />
        <div style={{
          position: "absolute", bottom: "15%", left: "-5%", width: 350, height: 350, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(123,107,141,0.03) 0%, transparent 70%)",
          animation: "breathe 10s ease-in-out infinite 2s",
        }} />
        {["ᜊ","ᜌ","ᜃ","ᜎ","ᜐ","ᜈ","ᜑ"].map((c, i) => (
          <div key={i} style={{
            position: "absolute",
            left: `${[8,85,15,78,50,92,35][i]}%`,
            top: `${[15,25,55,65,85,45,75][i]}%`,
            fontSize: [56,44,40,50,36,42,38][i],
            color: "rgba(196,149,106,0.06)", fontFamily: "serif",
            animation: `float ${8 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.7}s`, pointerEvents: "none",
          }}>{c}</div>
        ))}
      </div>

      {/* HERO */}
      <div style={{
        minHeight: "100vh", display: "flex", flexDirection: "column",
        alignItems: "center", justifyContent: "center",
        position: "relative", padding: "40px 24px", textAlign: "center",
        transform: `scale(${heroScale})`, opacity: heroOpacity,
      }}>
        <div style={{
          fontSize: 12, letterSpacing: "0.3em", textTransform: "uppercase",
          color: "rgba(196,149,106,0.5)", fontFamily: "monospace", marginBottom: 20,
          animation: "heroIn 1s 0.2s cubic-bezier(0.16, 1, 0.3, 1) both",
        }}>
          Before the Cross and the Crown
        </div>
        <h1 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(34px, 7vw, 68px)", fontWeight: 900, lineHeight: 1.05,
          margin: 0, letterSpacing: "-0.02em",
          background: "linear-gradient(135deg, #F5E6D3, #C4956A, #F5E6D3)",
          WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
          animation: "heroIn 1s 0.4s cubic-bezier(0.16, 1, 0.3, 1) both",
        }}>
          Sinaunang<br />Pilipinas
        </h1>
        <div style={{
          width: 100, height: 2, margin: "24px auto",
          background: "linear-gradient(90deg, transparent, #C4956A, transparent)",
          animation: "revealLine 1.2s 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        }} />
        <p style={{
          fontSize: "clamp(15px, 2.2vw, 20px)", fontWeight: 300, lineHeight: 1.6,
          maxWidth: 520, color: "rgba(245,230,211,0.55)", margin: 0, fontStyle: "italic",
          animation: "heroIn 1s 0.6s cubic-bezier(0.16, 1, 0.3, 1) both",
        }}>
          Rituals, traditions, and everyday life across the Philippine islands before colonial contact — in 18 traditions
        </p>
        <div style={{
          marginTop: 48, fontSize: 11, color: "rgba(196,149,106,0.35)",
          fontFamily: "monospace", letterSpacing: "0.12em",
          animation: "breathe 3s ease-in-out infinite",
        }}>
          ▼ SCROLL TO EXPLORE
        </div>
      </div>

      {/* MAIN */}
      <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 20px 80px", position: "relative" }}>

        {/* Intro */}
        <div style={{ textAlign: "center", marginBottom: 48, padding: "0 16px" }}>
          <p style={{
            fontSize: 17, lineHeight: 1.8, color: "rgba(245,230,211,0.55)",
            fontWeight: 300, maxWidth: 580, margin: "0 auto",
          }}>
            For thousands of years before 1521, the people of these islands built
            a civilization rich with writing, law, trade, spiritual practice, goldwork, and art.
            They were not scattered tribes waiting to be "discovered" — they were
            a literate, seafaring, interconnected world.
          </p>
        </div>

        {/* Category filter */}
        <div style={{
          position: "sticky", top: 0, zIndex: 100,
          background: "linear-gradient(to bottom, #12100E 60%, transparent)",
          padding: "16px 0 20px",
          display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8,
        }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: activeCategory === cat.id ? cat.color + "22" : "rgba(245,230,211,0.04)",
                border: `1px solid ${activeCategory === cat.id ? cat.color + "66" : "rgba(245,230,211,0.1)"}`,
                color: activeCategory === cat.id ? cat.color : "rgba(245,230,211,0.4)",
                padding: "6px 14px", borderRadius: 20,
                fontSize: 11, fontFamily: "monospace", letterSpacing: "0.06em",
                cursor: "pointer", transition: "all 0.3s",
                textTransform: "uppercase",
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Count */}
        <div style={{
          textAlign: "center", fontSize: 11, color: "rgba(245,230,211,0.25)",
          fontFamily: "monospace", marginBottom: 24, letterSpacing: "0.1em",
        }}>
          {filtered.length} tradition{filtered.length !== 1 ? "s" : ""}
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gap: 20 }}>
          {filtered.map((item) => (
            <div key={item.id} id={item.id} style={{
              animation: "fadeSlideIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both",
            }}>
              <DetailCard item={item} />
            </div>
          ))}
        </div>

        {/* Timeline toggle */}
        <div style={{ textAlign: "center", margin: "60px 0 20px" }}>
          <button
            onClick={() => setShowTimeline(!showTimeline)}
            style={{
              background: "rgba(196,149,106,0.08)",
              border: "1px solid rgba(196,149,106,0.2)",
              color: "#C4956A", padding: "12px 28px", borderRadius: 24,
              fontSize: 16, fontFamily: "'Playfair Display', Georgia, serif",
              cursor: "pointer", transition: "all 0.3s", letterSpacing: "0.04em",
            }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(196,149,106,0.15)"}
            onMouseLeave={e => e.currentTarget.style.background = "rgba(196,149,106,0.08)"}
          >
            {showTimeline ? "Hide Timeline" : "View Timeline — 50,000 BP to Present"}
          </button>
        </div>

        {/* Timeline */}
        {showTimeline && (
          <div style={{ padding: "20px 0 60px", animation: "fadeSlideIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) both" }}>
            <div style={{ position: "relative", maxWidth: 660, margin: "0 auto" }}>
              <div style={{
                position: "absolute", left: 18, top: 0, bottom: 0, width: 2,
                background: "linear-gradient(to bottom, transparent, rgba(196,149,106,0.3), transparent)",
              }} />
              {TIMELINE.map((t, i) => (
                <div key={i} style={{
                  display: "flex", gap: 20, alignItems: "flex-start", marginBottom: 22, paddingLeft: 0,
                }}>
                  <div style={{ width: 38, flexShrink: 0, textAlign: "center", position: "relative" }}>
                    <div style={{
                      width: 10, height: 10, borderRadius: "50%",
                      background: "#C4956A", margin: "4px auto",
                      boxShadow: "0 0 10px rgba(196,149,106,0.25)",
                    }} />
                  </div>
                  <div>
                    <div style={{
                      fontFamily: "monospace", fontSize: 14, color: "#C4956A",
                      letterSpacing: "0.05em", marginBottom: 3,
                    }}>
                      {t.year}
                    </div>
                    <p style={{
                      margin: 0, fontSize: 17, lineHeight: 1.6,
                      color: "rgba(245,230,211,0.6)",
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                    }}>
                      {t.event}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Synthesis */}
        <div style={{
          margin: "20px 0 50px", padding: "28px",
          background: "rgba(196,149,106,0.05)",
          borderRadius: 16, border: "1px solid rgba(196,149,106,0.12)",
        }}>
          <h3 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 23, margin: "0 0 14px", color: "#C4956A", fontWeight: 700,
          }}>
            Everything Was Connected
          </h3>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.8, color: "rgba(245,230,211,0.6)" }}>
            A single community gathering might begin with betel being prepared and shared,
            basi or tuba poured in ritualized tagay rounds — hands raised to the sky before
            each drink — while a babaylan conducted a pag-anito with animal sacrifice.
            The roasted meat became the communal feast, served on banana leaves or Chinese
            porcelain, eaten by hand. Warriors displayed their batok tattoos. Gold adorned
            the teeth of the living and the masks of the dead. Gongs and windpipes played
            as people danced for days. The same boats that carried trade goods carried souls
            to the afterlife. The epics chanted at harvest time encoded the same cosmology
            carved into burial jars.
          </p>
          <p style={{ margin: "14px 0 0", fontSize: 18, lineHeight: 1.8, color: "rgba(245,230,211,0.5)" }}>
            Every person walked through a world alive with invisible presence — diwata
            in the balete trees, a personal twin spirit born alongside them, the
            Tigmamanukan bird reading their fate in the direction of its flight.
            The Spanish understood this interconnection, which is why they systematically
            targeted each practice: burning the anito, monopolizing the basi, suppressing the
            babaylan, replacing baybayin, and shaming the Pintados into covering their tattoos.
            Three hundred and thirty-three years of Spanish colonization actively suppressed
            animistic practices, labeling them as pagan, and replaced them with a belief system
            that viewed nature as resources to be utilized rather than spirits to be revered.
            Yet the deep structure persisted — in folk Catholicism, in the whispered
            'tabi-tabi po' before passing an anthill, in fiesta culture, in the
            stubborn survival of oral traditions in the Cordilleras and Mindanao, in
            Apo Whang-Od's thorn still tapping ink into skin, and in the ongoing
            revival of baybayin today.
          </p>
        </div>

        {/* Sources */}
        <div style={{
          fontSize: 11, color: "rgba(245,230,211,0.2)", fontFamily: "monospace",
          textAlign: "center", lineHeight: 1.9, padding: "0 16px",
        }}>
          <p style={{ margin: "0 0 6px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(245,230,211,0.3)" }}>
            Sources & Further Reading
          </p>
          William Henry Scott, <em>Barangay</em> (1994) · National Museum of the Philippines ·
          The Aswang Project · Antoon Postma (LCI translation) ·
          Pedro Chirino, S.J. · Juan de Plasencia, <em>Costumbres de los Indios</em> (1589) ·
          Antonio Pigafetta · Miguel de Loarca, <em>Relación</em> (1582) ·
          Florina Capistrano-Baker, <em>Philippine Ancestral Gold</em> ·
          Felice Prudente Sta. Maria, <em>Pigafetta's Philippine Picnic</em> ·
          Karl Gaverza, <em>Philippine Spirits</em> · Maximo Ramos ·
          Boxer Codex (c. 1590) · CCP Encyclopedia of Philippine Art ·
          UNESCO (Hudhud, Darangen) · PD 449 (1974) ·
          Zeus Salazar · Leny Mendoza Strobel
        </div>

        {/* Footer */}
        <div style={{
          textAlign: "center", marginTop: 50, paddingTop: 36,
          borderTop: "1px solid rgba(196,149,106,0.08)",
        }}>
          <div style={{ fontSize: 28, color: "rgba(196,149,106,0.25)", fontFamily: "serif", marginBottom: 8 }}>
            ᜊᜌ᜔ᜊᜌᜒᜈ᜔
          </div>
          <p style={{ fontSize: 12, color: "rgba(245,230,211,0.2)", fontFamily: "monospace", margin: 0, letterSpacing: "0.08em" }}>
            baybayin · sinaunang pilipinas
          </p>
        </div>
      </div>
    </div>
  );
}
