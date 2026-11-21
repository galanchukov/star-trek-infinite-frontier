// 1. ECONOMY CONSTANTS
const ECON = {
    FIRST_ENEMY_HP: 10,
    BASE_CLICK_DMG: 1,
    INITIAL_CREDITS: 0,
    BASE_REWARD: 1,
    HP_MULT: 1.18,
    REWARD_MULT: 1.15,
    BOSS_HP_MULT: 8.0,
    BOSS_REWARD_MULT: 6.0,
    BOSS_TIME_LIMIT: 30.0
};

// 2. RARITY SYSTEM (5 Tiers matching Reference 3)
const RARITY_TIERS = {
    common: {
        id: "common",
        name: "Обычная",
        color: "#94a3b8",
        borderClass: "rarity-common",
        badgeBg: "bg-slate-600/40 text-slate-200 border-slate-400",
        mult: 1.0,
        order: 1
    },
    uncommon: {
        id: "uncommon",
        name: "Необычная",
        color: "#38bdf8",
        borderClass: "rarity-uncommon",
        badgeBg: "bg-sky-500/30 text-sky-200 border-sky-400",
        mult: 1.35,
        order: 2
    },
    rare: {
        id: "rare",
        name: "Редкая",
        color: "#a855f7",
        borderClass: "rarity-rare",
        badgeBg: "bg-purple-500/30 text-purple-200 border-purple-400",
        mult: 1.85,
        order: 3
    },
    epic: {
        id: "epic",
        name: "Эпическая",
        color: "#fbbf24",
        borderClass: "rarity-epic",
        badgeBg: "bg-amber-500/30 text-amber-200 border-amber-400",
        mult: 2.6,
        order: 4
    },
    legendary: {
        id: "legendary",
        name: "Легендарная",
        color: "#ef4444",
        borderClass: "rarity-legendary",
        badgeBg: "bg-red-500/30 text-red-200 border-red-400",
        mult: 3.8,
        order: 5
    }
};

// 3. STAR TREK: THE ORIGINAL SERIES (1966-1969) COLLECTION (10 Characters matching Reference 3)
const TOS_CHARACTERS = [
    {
        id: "tos_kirk",
        name: "Джеймс Т. Кирк",
        title: "Капитан",
        specialization: "Командование",
        rarity: "epic",
        org: "starfleet",
        series: "Star Trek: The Original Series (1966–1969)",
        baseCost: 10,
        baseDps: 2,
        costMult: 1.15,
        bonusType: "all_damage",
        bonusPerLvl: 0.03,
        bonusDesc: "+3% к общей боевой эффективности экипажа и кликов за ур.",
        lore: "Капитан звездолёта U.S.S. Enterprise NCC-1701 во время исторической пятилетней исследовательской миссии.",
        portrait: { shirt: "#eab308", hair: "#92400e", skin: "#f5c69c", hairStyle: "kirk" }
    },
    {
        id: "tos_spock",
        name: "Спок",
        title: "Первый офицер",
        specialization: "Наука",
        rarity: "legendary",
        org: "starfleet",
        series: "Star Trek: The Original Series (1966–1969)",
        baseCost: 60,
        baseDps: 9,
        costMult: 1.15,
        bonusType: "crit_chance",
        bonusPerLvl: 0.5,
        bonusDesc: "+0.5% к шансу точного критического удара и анализу уязвимостей за ур.",
        lore: "Первый офицер и научный руководитель U.S.S. Enterprise. Наполовину вулканец, наполовину человек, опирающийся на строгую логику.",
        portrait: { shirt: "#2563eb", hair: "#090d16", skin: "#e5b887", hairStyle: "spock", vulcan: true }
    },
    {
        id: "tos_mccoy",
        name: "Леонард Маккой",
        title: "Главный врач",
        specialization: "Медицина",
        rarity: "rare",
        org: "starfleet",
        series: "Star Trek: The Original Series (1966–1969)",
        baseCost: 220,
        baseDps: 26,
        costMult: 1.15,
        bonusType: "crew_dps",
        bonusPerLvl: 0.04,
        bonusDesc: "+4% к выживаемости и боевой отдаче всего экипажа за ур.",
        lore: "Главный бортовой врач U.S.S. Enterprise («Боунз»). Преданный гуманист и блестящий хирург и ксеномедик.",
        portrait: { shirt: "#2563eb", hair: "#3b2314", skin: "#f2bfa0", hairStyle: "parted" }
    },
    {
        id: "tos_scott",
        name: "Монтгомери Скотт",
        title: "Главный инженер",
        specialization: "Инженерия",
        rarity: "uncommon",
        org: "starfleet",
        series: "Star Trek: The Original Series (1966–1969)",
        baseCost: 850,
        baseDps: 95,
        costMult: 1.15,
        bonusType: "ship_systems",
        bonusPerLvl: 0.05,
        bonusDesc: "+5% к мощности корабельных систем и фазерных батарей за ур.",
        lore: "Главный инженер («Скотти»), способный выжать максимум из варп-двигателей и щитов в критической ситуации.",
        portrait: { shirt: "#dc2626", hair: "#1e293b", skin: "#f5c69c", hairStyle: "parted" }
    },
    {
        id: "tos_uhura",
        name: "Нийота Ухура",
        title: "Офицер связи",
        specialization: "Связь",
        rarity: "uncommon",
        org: "starfleet",
        series: "Star Trek: The Original Series (1966–1969)",
        baseCost: 2400,
        baseDps: 260,
        costMult: 1.15,
        bonusType: "credits_gain",
        bonusPerLvl: 0.04,
        bonusDesc: "+4% к перехвату данных и получаемым кредитам Федерации за ур.",
        lore: "Старший офицер связи на мостике U.S.S. Enterprise, специалист по подпространственным частотам и криптографии.",
        portrait: { shirt: "#dc2626", hair: "#090d16", skin: "#a1623b", hairStyle: "uhura", earrings: true }
    },
    {
        id: "tos_sulu",
        name: "Хикару Сулу",
        title: "Рулевой",
        specialization: "Навигация",
        rarity: "uncommon",
        org: "starfleet",
        series: "Star Trek: The Original Series (1966–1969)",
        baseCost: 6500,
        baseDps: 720,
        costMult: 1.15,
        bonusType: "crit_damage",
        bonusPerLvl: 0.08,
        bonusDesc: "+0.08x к критическому множителю за счёт манёвренности за ур.",
        lore: "Старший рулевой U.S.S. Enterprise, мастер пилотирования и тактического маневрирования в бою.",
        portrait: { shirt: "#eab308", hair: "#0f172a", skin: "#eab676", hairStyle: "sulu" }
    },
    {
        id: "tos_chekov",
        name: "Павел Чехов",
        title: "Навигатор",
        specialization: "Навигация",
        rarity: "uncommon",
        org: "starfleet",
        series: "Star Trek: The Original Series (1966–1969)",
        baseCost: 16000,
        baseDps: 1850,
        costMult: 1.15,
        bonusType: "boss_time",
        bonusPerLvl: 0.5,
        bonusDesc: "+0.5 сек к окну удержания цели в боях с Боссами за ур.",
        lore: "Молодой и талантливый энсин-навигатор U.S.S. Enterprise, отвечающий за прокладку курса и наведение торпед.",
        portrait: { shirt: "#eab308", hair: "#5c3a21", skin: "#f5cba7", hairStyle: "chekov" }
    },
    {
        id: "tos_chapel",
        name: "Кристин Чапел",
        title: "Медсестра",
        specialization: "Медицина",
        rarity: "rare",
        org: "starfleet",
        series: "Star Trek: The Original Series (1966–1969)",
        baseCost: 42000,
        baseDps: 4800,
        costMult: 1.15,
        bonusType: "crew_dps",
        bonusPerLvl: 0.05,
        bonusDesc: "+5% к биометрической поддержке и скорости работы офицеров за ур.",
        lore: "Старшая медсестра и исследователь биотехнологий в лазарете доктора Маккоя на борту U.S.S. Enterprise.",
        portrait: { shirt: "#2563eb", hair: "#eab308", skin: "#fde2c4", hairStyle: "chapel" }
    },
    {
        id: "tos_mitchell",
        name: "Гэри Митчелл",
        title: "Офицер",
        specialization: "Тактика",
        rarity: "common",
        org: "starfleet",
        series: "Star Trek: The Original Series («Куда не ступала нога человека»)",
        baseCost: 95000,
        baseDps: 11500,
        costMult: 1.15,
        bonusType: "click_damage",
        bonusPerLvl: 0.07,
        bonusDesc: "Псионический импульс: +7% к прямому урону залпов игрока за ур.",
        lore: "Рулевой и друг Джеймса Кирка, получивший аномальные псионические способности при пересечении Галактического барьера.",
        portrait: { shirt: "#eab308", hair: "#334155", skin: "#e5b887", hairStyle: "parted", silverEyes: true }
    },
    {
        id: "tos_khan",
        name: "Хан Нуньен Сингх",
        title: "Особый персонаж",
        specialization: "Тактика",
        rarity: "common",
        org: "augment",
        series: "Star Trek: The Original Series («Космическое семя»)",
        baseCost: 240000,
        baseDps: 32000,
        costMult: 1.15,
        bonusType: "all_damage",
        bonusPerLvl: 0.06,
        bonusDesc: "Генетическое превосходство: +6% ко всему боевому урону за ур.",
        lore: "Генетически усовершенствованный лидер с корабля «Ботани Бэй», обнаруженного экипажем «Энтерпрайза» в анабиозе.",
        portrait: { shirt: "#475569", hair: "#1c1917", skin: "#d99b66", hairStyle: "khan", beard: true }
    }
];

// 4. RACES & CIVILIZATIONS DATABASE (18 Entries matching References 1 & 2)
// Categories strictly separated: 'Раса / Вид', 'Коллективный разум', 'Политическая каста / Вид', etc.
const CIVILIZATIONS_DB = [
    {
        id: "civ_humans",
        name: "Люди",
        category: "Космическая раса • Основатели Федерации",
        quadrant: "Альфа-квадрант",
        shipName: "Тяжёлый крейсер класса «Конституция»",
        relation: "Союзник (Федерация)",
        relationColor: "text-emerald-400",
        traits: "Исследовательский дух, дипломатия, адаптивность",
        desc: "Уроженцы Земли (Сектор 001), ставшие ключевыми инициаторами создания Объединённой Федерации Планет и Звёздного Флота."
    },
    {
        id: "civ_vulcans",
        name: "Вулканцы",
        category: "Космическая раса • Член Федерации",
        quadrant: "Альфа-квадрант",
        shipName: "Научный крейсер с кольцевым варп-приводом",
        relation: "Союзник (Федерация)",
        relationColor: "text-emerald-400",
        traits: "Абсолютная логика, подавление эмоций, телепатия, философия ИДИК",
        desc: "Древняя высокоразвитая цивилизация с планеты Вулкан, первой вступившая в официальный контакт с человечеством."
    },
    {
        id: "civ_klingons",
        name: "Клингонцы",
        category: "Воинская раса • Клингонская Империя",
        quadrant: "Бета-квадрант",
        shipName: "Линейный крейсер D7 / «Хищная Птица»",
        relation: "Соперничество / Перемирие",
        relationColor: "text-amber-400",
        traits: "Кодекс чести воина, маскировочные устройства, дисрапторное вооружение",
        desc: "Гордая воинственная цивилизация с планеты Кронос (Qo'noS), ценящая доблесть в бою превыше всего."
    },
    {
        id: "civ_romulans",
        name: "Ромуланцы",
        category: "Космическая раса • Ромуланская Звёздная Империя",
        quadrant: "Бета-квадрант",
        shipName: "Боевой крейсер «Птица Войны»",
        relation: "Холодная война (Нейтральная зона)",
        relationColor: "text-red-400",
        traits: "Скрытность, квантовая сингулярность, плазменные торпеды, Тал Шиар",
        desc: "Родственная вулканцам ветвь, отвергшая учение Суррака и построившая могущественную военизированную империю."
    },
    {
        id: "civ_cardassians",
        name: "Кардассианцы",
        category: "Космическая раса • Кардассианский Союз",
        quadrant: "Альфа-квадрант",
        shipName: "Крейсер класса «Галор»",
        relation: "Напряжённый нейтралитет",
        relationColor: "text-amber-400",
        traits: "Военная иерархия, спирально-волновые пушки, Обсидиановый орден",
        desc: "Рептилоидная милитаристская цивилизация с Кардассии Прайм, стремящаяся к строгому государственному порядку и экспансии."
    },
    {
        id: "civ_ferengi",
        name: "Ференги",
        category: "Космическая раса • Альянс Ференги",
        quadrant: "Альфа-квадрант",
        shipName: "Торгово-боевой мародёр класса «Д'Кора»",
        relation: "Торговые партнёры",
        relationColor: "text-amber-300",
        traits: "Правила Приобретения, свободная коммерция, защита лаatinum-капитала",
        desc: "Цивилизация с планеты Ференгинар, построившая культуру вокруг купли-продажи, контрактов и поиска прибыли."
    },
    {
        id: "civ_andorians",
        name: "Андорианцы",
        category: "Космическая раса • Основатели Федерации",
        quadrant: "Альфа-квадрант",
        shipName: "Боевой крейсер Имперской Гвардии «Кумари»",
        relation: "Союзник (Федерация)",
        relationColor: "text-emerald-400",
        traits: "Антенны пространственного восприятия, воинская доблесть, страстный темперамент",
        desc: "Синекожая раса с ледяного спутника Андория, стоявшая у самых истоков создания Федерации вместе с людьми и вулканцами."
    },
    {
        id: "civ_tellarites",
        name: "Теллариты",
        category: "Космическая раса • Основатели Федерации",
        quadrant: "Альфа-квадрант",
        shipName: "Тяжёлый инженерный транспорт Теллара",
        relation: "Союзник (Федерация)",
        relationColor: "text-emerald-400",
        traits: "Искусство политических споров, кораблестроение, стойкость",
        desc: "Коренастая гуманоидная раса с планеты Теллар Прайм, славящаяся выдающимися инженерами и любовью к жарким дебатам."
    },
    {
        id: "civ_bajorans",
        name: "Байоранцы",
        category: "Космическая раса • Протекторат Федерации",
        quadrant: "Альфа-квадрант",
        shipName: "Орбитальный комплекс / Солнечный парусник",
        relation: "Дружественный народ",
        relationColor: "text-cyan-300",
        traits: "Духовная связь с Пророками, стойкость в борьбе за независимость",
        desc: "Древний народ планеты Байор с богатой духовной культурой, охраняющий вход в стабильную червоточину в Гамма-квадрант."
    },
    {
        id: "civ_trills",
        name: "Триллы",
        category: "Симбиотический вид • Член Федерации",
        quadrant: "Альфа-квадрант",
        shipName: "Высокоскоростной научный шаттл Трилла",
        relation: "Союзник (Федерация)",
        relationColor: "text-emerald-400",
        traits: "Союз гуманоида-носителя и долгоживущего симбионта, многовековой опыт",
        desc: "Уникальная цивилизация, в которой избранные носители объединяются с разумными симбионтами, сохраняя память многих жизней."
    },
    {
        id: "civ_betazoids",
        name: "Бетазоиды",
        category: "Телепатическая раса • Член Федерации",
        quadrant: "Альфа-квадрант",
        shipName: "Дипломатический крейсер Бетазеда",
        relation: "Союзник (Федерация)",
        relationColor: "text-emerald-400",
        traits: "Природная телепатия и эмпатия, дипломатическое посредничество",
        desc: "Миролюбивая гуманоидная раса с планеты Бетазед, чьи способности к чтению эмоций и мыслей незаменимы в дипломатии Звёздного Флота."
    },
    {
        id: "civ_borg",
        name: "Борг",
        category: "Кибернетический коллективный разум",
        quadrant: "Дельта-квадрант",
        shipName: "Тактический Куб Борг",
        relation: "Экзистенциальная угроза",
        relationColor: "text-red-500",
        traits: "Ассимиляция с помощью нанозондов, мгновенная адаптация щитов, коллективное сознание",
        desc: "Кибернетический Коллектив (не государство), стремящийся к достижению совершенства путём принудительной ассимиляции биологических и технологических особенностей иных видов."
    },
    {
        id: "civ_founders",
        name: "Основатели (Чейнджлинги)",
        category: "Метаморфный вид • Правители Доминиона",
        quadrant: "Гамма-квадрант",
        shipName: "Флагманский командный крейсер Доминиона",
        relation: "Враждебная сверхдержава",
        relationColor: "text-red-400",
        traits: "Изменение физической формы, Великая Связь, абсолютный контроль над Доминионом",
        desc: "Раса жидких метаморфов, некогда преследуемая «твёрдыми» гуманоидами и создавшая империю Доминион для установления тотального порядка."
    },
    {
        id: "civ_vorta",
        name: "Ворта",
        category: "Генетически созданная каста • Дипломаты Доминиона",
        quadrant: "Гамма-квадрант",
        shipName: "Разведывательно-командный корабль Доминиона",
        relation: "Политический противник",
        relationColor: "text-amber-400",
        traits: "Клонирование, иммунитет к большинству ядов, управление легионами Джем'Хадар",
        desc: "Генетически сконструированные Основателями администраторы, учёные и дипломаты, почитающие Чейнджлингов как богов."
    },
    {
        id: "civ_jemhadar",
        name: "Джем'Хадар",
        category: "Генетически созданная военная каста • Армия Доминиона",
        quadrant: "Гамма-квадрант",
        shipName: "Ударный штурмовик Джем'Хадар",
        relation: "Враждебный флот",
        relationColor: "text-red-400",
        traits: "Личная маскировка, зависимость от Кетрацел-уайт, фазовые поляронные орудия",
        desc: "Выведенные исключительно для войны элитные солдаты Доминиона, чей девиз — «Победа — это жизнь»."
    },
    {
        id: "civ_kazon",
        name: "Казоны",
        category: "Кочевая раса • Секты Казонов",
        quadrant: "Дельта-квадрант",
        shipName: "Тяжёлый рейдер-носитель Казонов",
        relation: "Агрессивные налётчики",
        relationColor: "text-red-400",
        traits: "Разделение на враждующие секты, захваченные у Трабенов корабли",
        desc: "Воинственная раса Дельта-квадранта, разделённая на соперничающие группировки (Оглала, Нистрим и др.), ведущие борьбу за ресурсы и технологии."
    },
    {
        id: "civ_ocampa",
        name: "Окампа",
        category: "Гуманоидная раса • Жители Дельта-квадранта",
        quadrant: "Дельта-квадрант",
        shipName: "Высокотехнологичный исследовательский крейсер Окампа",
        relation: "Дружественный вид",
        relationColor: "text-emerald-400",
        traits: "Короткий жизненный цикл (9 лет), фотографическая память, скрытый телекинез и телепатия",
        desc: "Миролюбивый вид из Дельта-квадранта, обладающий огромным ментальным потенциалом и быстрой обучаемостью."
    },
    {
        id: "civ_species8472",
        name: "Вид 8472",
        category: "Трёхполый биологический вид из Жидкого пространства",
        quadrant: "Жидкое пространство",
        shipName: "Органический био-корабль Вида 8472",
        relation: "Крайне опасный ксеновид",
        relationColor: "text-red-500",
        traits: "Чистая биотехнология, иммунитет к ассимиляции Борг, колоссальная биоэнергетическая мощь",
        desc: "Иномирный высокоразвитый биологический вид из Жидкого пространства, чьи живые органические корабли способны уничтожать кубы Борг."
    }
];

// 5. STARSHIPS ARCHITECTURE (Player Fleet Database ready for expansion)
const STARSHIPS_DB = [
    {
        id: "ship_enterprise_tos",
        name: "U.S.S. Enterprise NCC-1701",
        shipClass: "Тяжёлый крейсер класса «Конституция»",
        affiliation: "Объединённая Федерация Планет",
        civId: "civ_humans",
        maxHull: 1500,
        baseShields: 900,
        weapons: "Сдвоенные фазеры и фотонные торпеды",
        attackSpeed: 1.0,
        crewCapacity: 10,
        specialAbility: "Сбалансированный флагман: +10% к урону кликов и экипажа",
        bonusClick: 1.10,
        bonusDps: 1.10
    },
    {
        id: "ship_kumari_andor",
        name: "I.G.S. Kumari",
        shipClass: "Боевой крейсер Имперской Гвардии",
        affiliation: "Андория • Федерация",
        civId: "civ_andorians",
        maxHull: 1350,
        baseShields: 800,
        weapons: "Спаренные частицевые пушки",
        attackSpeed: 1.15,
        crewCapacity: 10,
        specialAbility: "Натиск Гвардии: +25% к урону залпов при нажатии",
        bonusClick: 1.25,
        bonusDps: 1.0
    },
    {
        id: "ship_surak_vulcan",
        name: "V.S.S. T'Plana-Hath",
        shipClass: "Научный крейсер с кольцевым варп-приводом",
        affiliation: "Верховное Командование Вулкана",
        civId: "civ_vulcans",
        maxHull: 1400,
        baseShields: 1200,
        weapons: "Высокоточные фазовые излучатели",
        attackSpeed: 0.95,
        crewCapacity: 10,
        specialAbility: "Вулканская аналитика: +25% к автоматическому DPS экипажа",
        bonusClick: 1.0,
        bonusDps: 1.25
    }
];

// 6. SECTORS MAPPING (Linked to Civilizations for Enemy Spawns)
const SECTORS_DB = [
    { id: 1, name: "СЕКТОР 001: РУБЕЖ ФЕДЕРАЦИИ", civIds: ["civ_klingons", "civ_romulans", "civ_ferengi"], bossCiv: "civ_klingons" },
    { id: 2, name: "КЛИНГОНСКАЯ НЕЙТРАЛЬНАЯ ЗОНА", civIds: ["civ_klingons", "civ_cardassians", "civ_andorians"], bossCiv: "civ_klingons" },
    { id: 3, name: "РОМУЛАНСКАЯ ЗВЁЗДНАЯ ИМПЕРИЯ", civIds: ["civ_romulans", "civ_vulcans", "civ_tellarites"], bossCiv: "civ_romulans" },
    { id: 4, name: "КАРДАССИАНСКАЯ ДЕМ. ЗОНА", civIds: ["civ_cardassians", "civ_bajorans", "civ_trills", "civ_ferengi"], bossCiv: "civ_cardassians" },
    { id: 5, name: "ГАММА-КВАДРАНТ: РУБЕЖ ДОМИНИОНА", civIds: ["civ_jemhadar", "civ_vorta", "civ_founders"], bossCiv: "civ_founders" },
    { id: 6, name: "ДЕЛЬТА-КВАДРАНТ: ПРОСТРАНСТВО КАЗОНОВ", civIds: ["civ_kazon", "civ_ocampa", "civ_borg"], bossCiv: "civ_borg" },
    { id: 7, name: "АНОМАЛИЯ ЖИДКОГО ПРОСТРАНСТВА", civIds: ["civ_borg", "civ_species8472", "civ_jemhadar"], bossCiv: "civ_species8472" }
];

// 7. SHIP SYSTEMS UPGRADES
const SHIP_MODULES_DATA = [
    {
        id: "phasers",
        name: "Фазерные батареи Тип-XII",
        desc: "Увеличивает базовый урон каждого залпа (+2 за ур., +25% каждые 10 ур.)",
        baseCost: 12,
        costMult: 1.32,
        svgIcon: `<svg class="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>`
    },
    {
        id: "torpedoes",
        name: "Фотонные торпеды",
        desc: "Добавляет +2% от общего Авто-DPS экипажа к урону каждого вашего нажатия",
        baseCost: 75,
        costMult: 1.45,
        svgIcon: `<svg class="w-6 h-6 text-red-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M19.1 4.9l-2.8 2.8M7.7 16.3l-2.8 2.8"/></svg>`
    },
    {
        id: "shields",
        name: "Дефлекторные щиты",
        desc: "+2 сек к таймеру боя с Боссом и +10% к добыче кредитов за уровень",
        baseCost: 180,
        costMult: 1.5,
        svgIcon: `<svg class="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`
    },
    {
        id: "reactor",
        name: "Варп-реактор (Материя/Антиматерия)",
        desc: "Повышает боевую эффективность и DPS всех персонажей на +20% за уровень",
        baseCost: 350,
        costMult: 1.55,
        svgIcon: `<svg class="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-30 12 12)"/></svg>`
    },
    {
        id: "computer",
        name: "Тактический компьютер M-5",
        desc: "Повышает шанс критического попадания (+2% за ур.) и крит. множитель (+0.25x)",
        baseCost: 220,
        costMult: 1.5,
        svgIcon: `<svg class="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M7 20h10M12 16v4"/></svg>`
    }
];

// 8. RESEARCH TREE DATA
const RESEARCH_DATA = [
    {
        id: "mod_freq",
        name: "Фазовая модуляция частоты",
        desc: "Урон от ручных залпов (кликов) увеличивается в 2 раза.",
        cost: 150,
        currency: "credits"
    },
    {
        id: "subspace_comms",
        name: "Подпространственная тактическая сеть",
        desc: "Автоматический DPS всего экипажа TOS увеличивается на +50%.",
        cost: 800,
        currency: "credits"
    },
    {
        id: "replicator_econ",
        name: "Промышленные синтезаторы Федерации",
        desc: "Награда в кредитах за уничтожение кораблей +50%.",
        cost: 3000,
        currency: "credits"
    },
    {
        id: "quantum_torp",
        name: "Усовершенствованные фотонные боеголовки",
        desc: "Урон кликов и критический множитель удваиваются.",
        cost: 15000,
        currency: "credits"
    },
    {
        id: "transwarp_conduits",
        name: "Трансварповое сканирование",
        desc: "Требуется на 1 корабль меньше для зачистки обычного уровня (4 вместо 5).",
        cost: 2,
        currency: "cores"
    },
    {
        id: "omega_directive",
        name: "Директива «Омега»",
        desc: "Глобальный урон (клики и авто-DPS) навсегда увеличен в 3 раза!",
        cost: 5,
        currency: "cores"
    }
];

/**
 * ============================================================================
 * DEDICATED SVG ARTWORK GENERATORS (18 EMBLEMS, 18 SHIPS, 10 TOS PORTRAITS)
 * ============================================================================
 */

// A. 18 Distinct Civilization Emblems (Strictly modeled after Image 2)