function getCivilizationEmblemSVG(civId, sizeClass = "w-8 h-8") {
    const inner = (() => {
        switch (civId) {
            case "civ_humans": // UFP Starfield Circle with Olive Laurel Wreath
                return `
                <circle cx="32" cy="32" r="18" fill="#0b2866" stroke="#60a5fa" stroke-width="2"/>
                <circle cx="26" cy="27" r="1.5" fill="#fff"/><circle cx="36" cy="24" r="1.2" fill="#fff"/><circle cx="32" cy="34" r="2" fill="#fff"/>
                <path d="M12 44 C7 34, 9 20, 18 14 M52 44 C57 34, 55 20, 46 14" stroke="#e2e8f0" stroke-width="3" stroke-linecap="round" fill="none"/>
                <path d="M18 49 L46 49" stroke="#93c5fd" stroke-width="2"/>`;
            case "civ_vulcans": // Golden IDIC Circle & Triangle Spire
                return `
                <circle cx="32" cy="34" r="19" fill="none" stroke="#eab308" stroke-width="4"/>
                <polygon points="32,8 26,48 38,48" fill="#facc15" stroke="#ca8a04" stroke-width="1.5"/>
                <rect x="27" y="34" width="10" height="16" fill="#091326" stroke="#eab308" stroke-width="2"/>`;
            case "civ_klingons": // Red/Silver Klingon Imperial Trefoil
                return `
                <circle cx="32" cy="35" r="14" fill="none" stroke="#94a3b8" stroke-width="2"/>
                <polygon points="32,6 24,35 32,41 40,35" fill="#ef4444" stroke="#cbd5e1" stroke-width="1.5"/>
                <polygon points="10,49 25,36 31,43" fill="#dc2626" stroke="#cbd5e1" stroke-width="1.5"/>
                <polygon points="54,49 39,36 33,43" fill="#dc2626" stroke="#cbd5e1" stroke-width="1.5"/>`;
            case "civ_romulans": // Emerald Romulan Raptor Wings
                return `
                <polygon points="32,16 26,28 32,54 38,28" fill="#10b981" stroke="#6ee7b7" stroke-width="1.5"/>
                <polygon points="6,18 26,25 22,38 12,32" fill="#059669" stroke="#34d399" stroke-width="1.5"/>
                <polygon points="58,18 38,25 42,38 52,32" fill="#059669" stroke="#34d399" stroke-width="1.5"/>`;
            case "civ_cardassians": // Golden-Bronze Galor Crest with Red Core
                return `
                <polygon points="32,6 48,24 38,40 32,58 26,40 16,24" fill="#b45309" stroke="#fcd34d" stroke-width="2"/>
                <polygon points="32,16 37,28 32,44 27,28" fill="#dc2626" stroke="#fca5a5" stroke-width="1"/>`;
            case "civ_ferengi": // Golden Lobes Symbol
                return `
                <path d="M32 24 C20 10, 8 22, 14 36 C18 46, 26 48, 32 48 C38 48, 46 46, 50 36 C56 22, 44 10, 32 24 Z" fill="none" stroke="#eab308" stroke-width="5"/>
                <circle cx="32" cy="46" r="6" fill="#facc15" stroke="#854d0e" stroke-width="2"/>`;
            case "civ_andorians": // Ice-Blue Antennae Crest
                return `
                <path d="M18 14 L25 34 M46 14 L39 34" stroke="#7dd3fc" stroke-width="3.5" stroke-linecap="round"/>
                <circle cx="18" cy="12" r="3.5" fill="#bae6fd"/><circle cx="46" cy="12" r="3.5" fill="#bae6fd"/>
                <path d="M16 32 Q32 24 48 32 L34 54 L30 54 Z" fill="#0284c7" stroke="#7dd3fc" stroke-width="2"/>`;
            case "civ_tellarites": // Industrial Silver Gear & Fist
                return `
                <circle cx="32" cy="32" r="20" fill="none" stroke="#94a3b8" stroke-width="5" stroke-dasharray="6 4"/>
                <circle cx="32" cy="32" r="14" fill="#1e293b" stroke="#cbd5e1" stroke-width="2"/>
                <rect x="25" y="25" width="14" height="14" rx="3" fill="#94a3b8"/>`;
            case "civ_bajorans": // Golden Orb Flame Symbol
                return `
                <path d="M32 8 C20 20, 16 36, 24 52 L28 42 C24 32, 27 24, 32 16 C37 24, 40 32, 36 42 L40 52 C48 36, 44 20, 32 8 Z" fill="#d97706" stroke="#fde047" stroke-width="1.8"/>
                <line x1="32" y1="16" x2="32" y2="54" stroke="#fef08a" stroke-width="3"/>`;
            case "civ_trills": // Cyan Symbiont S-Spiral with Dual Nodes
                return `
                <path d="M44 18 C32 8, 16 16, 24 28 C32 40, 48 34, 40 48 C34 56, 20 52, 20 44" fill="none" stroke="#38bdf8" stroke-width="4.5" stroke-linecap="round"/>
                <circle cx="33" cy="21" r="3.5" fill="#bae6fd"/><circle cx="31" cy="43" r="3.5" fill="#bae6fd"/>`;
            case "civ_betazoids": // Lilac Psi Symbol
                return `
                <path d="M14 18 C14 36, 50 36, 50 18 M32 14 L32 54" fill="none" stroke="#c084fc" stroke-width="5" stroke-linecap="round"/>`;
            case "civ_borg": // Green Cybernetic Hex Matrix
                return `
                <polygon points="32,8 52,20 52,44 32,56 12,44 12,20" fill="#052e16" stroke="#22c55e" stroke-width="3"/>
                <circle cx="32" cy="32" r="8" fill="none" stroke="#4ade80" stroke-width="3"/>
                <path d="M32 8 L32 24 M32 40 L32 56 M12 20 L25 28 M39 36 L52 44 M52 20 L39 28 M25 36 L12 44" stroke="#22c55e" stroke-width="2"/>`;
            case "civ_founders": // Amorphous Purple/Silver Three-Lobed Changeling Drop
                return `
                <path d="M32 10 C38 10, 38 24, 46 28 C56 32, 52 46, 42 44 C34 42, 30 42, 22 44 C12 46, 8 32, 18 28 C26 24, 26 10, 32 10 Z" fill="#a855f7" stroke="#e9d5ff" stroke-width="2.5"/>
                <circle cx="32" cy="31" r="5" fill="#f3e8ff" opacity="0.6"/>`;
            case "civ_vorta": // Gold-rimmed Violet 4-Point Dominion Star
                return `
                <polygon points="32,6 40,24 58,32 40,40 32,58 24,40 6,32 24,24" fill="#6b21a8" stroke="#facc15" stroke-width="2.5"/>
                <polygon points="32,16 36,28 48,32 36,36 32,48 28,36 16,32 28,28" fill="#c084fc"/>`;
            case "civ_jemhadar": // Sharp Angular Violet/Silver Crest
                return `
                <polygon points="32,10 40,26 54,18 44,42 32,56 20,42 10,18 24,26" fill="#7e22ce" stroke="#d8b4fe" stroke-width="2"/>
                <polygon points="32,24 37,35 32,46 27,35" fill="#3b0764" stroke="#e9d5ff" stroke-width="1.5"/>`;
            case "civ_kazon": // Crimson Spiked Kazon Arc
                return `
                <path d="M12 48 C14 28, 50 28, 52 48 C44 36, 20 36, 12 48 Z" fill="#b91c1c" stroke="#f87171" stroke-width="2"/>
                <polygon points="32,8 27,36 37,36" fill="#dc2626" stroke="#fca5a5" stroke-width="1.5"/>
                <polygon points="18,18 21,38 27,36" fill="#b91c1c"/><polygon points="46,18 43,38 37,36" fill="#b91c1c"/>`;
            case "civ_ocampa": // Golden Circle & Spire Key
                return `
                <path d="M18 48 C10 32, 16 12, 32 12 C48 12, 54 32, 46 48" fill="none" stroke="#eab308" stroke-width="4.5" stroke-linecap="round"/>
                <circle cx="32" cy="26" r="6" fill="#facc15"/>
                <line x1="32" y1="34" x2="32" y2="54" stroke="#facc15" stroke-width="4" stroke-linecap="round"/>`;
            case "civ_species8472": // Bio-Spiral Vortex
                return `
                <path d="M32 32 m-18 0 a 18 18 0 1 0 36 0 a 18 18 0 1 0 -36 0" fill="none" stroke="#a855f7" stroke-width="2" stroke-dasharray="8 6"/>
                <path d="M32 12 C46 14, 52 28, 42 38 C32 48, 16 40, 22 26 C26 18, 38 22, 34 32" fill="none" stroke="#c084fc" stroke-width="4" stroke-linecap="round"/>
                <circle cx="32" cy="32" r="4" fill="#e9d5ff"/>`;
            default:
                return `<circle cx="32" cy="32" r="16" stroke="#38bdf8" stroke-width="2" fill="none"/>`;
        }
    })();

    return `<svg viewBox="0 0 64 64" class="${sizeClass} shrink-0 drop-shadow">${inner}</svg>`;
}

// B. 18 Distinct Civilization Starships (Strictly modeled after Image 1)
function getCivilizationShipSVG(civId) {
    switch (civId) {
        case "civ_humans": // Constitution Class U.S.S. Enterprise NCC-1701
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <!-- Warp Nacelles -->
                <rect x="18" y="68" width="95" height="9" rx="4" fill="#64748b" stroke="#94a3b8" stroke-width="1.5"/>
                <circle cx="20" cy="72.5" r="4.5" fill="#f97316"/>
                <rect x="35" y="88" width="90" height="10" rx="4" fill="#475569" stroke="#cbd5e1" stroke-width="1.5"/>
                <circle cx="37" cy="93" r="5" fill="#ef4444"/>
                <!-- Pylons & Secondary Hull -->
                <path d="M85 75 L105 92 M95 96 L115 92" stroke="#94a3b8" stroke-width="4"/>
                <ellipse cx="122" cy="90" rx="34" ry="9" fill="#64748b" stroke="#cbd5e1" stroke-width="1.5"/>
                <circle cx="155" cy="90" r="5" fill="#f97316"/>
                <!-- Neck -->
                <polygon points="125,84 142,84 152,54 138,54" fill="#94a3b8"/>
                <!-- Saucer Section -->
                <ellipse cx="145" cy="46" rx="62" ry="16" fill="#94a3b8" stroke="#e2e8f0" stroke-width="2"/>
                <ellipse cx="145" cy="44" rx="44" ry="10" fill="#64748b" stroke="#38bdf8" stroke-width="1"/>
                <ellipse cx="145" cy="41" rx="16" ry="5" fill="#e2e8f0"/>
            </svg>`;

        case "civ_vulcans": // Vulcan Ring-Ship Cruiser
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <!-- Warp Ring -->
                <ellipse cx="95" cy="65" rx="22" ry="44" fill="none" stroke="#d97706" stroke-width="7"/>
                <ellipse cx="95" cy="65" rx="22" ry="44" fill="none" stroke="#fde047" stroke-width="1.5"/>
                <!-- Sleek Copper Hull -->
                <polygon points="20,72 195,52 155,78 20,72" fill="#92400e" stroke="#fbbf24" stroke-width="2"/>
                <polygon points="55,66 195,52 140,60" fill="#b45309" stroke="#fde68a" stroke-width="1"/>
                <circle cx="165" cy="57" r="3" fill="#38bdf8"/>
            </svg>`;

        case "civ_klingons": // Klingon D7 / Bird-of-Prey Cruiser
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <!-- Swept Green Armored Wings -->
                <polygon points="110,35 40,65 25,98 85,78 140,78 195,98 180,65" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
                <!-- Main Engineering Hull -->
                <rect x="85" y="42" width="60" height="24" rx="6" fill="#166534" stroke="#86efac" stroke-width="1.5"/>
                <!-- Glowing Red Ports -->
                <circle cx="115" cy="56" r="3" fill="#ef4444"/><circle cx="125" cy="56" r="3" fill="#ef4444"/><circle cx="135" cy="56" r="3" fill="#ef4444"/>
                <!-- Long Stalk & Bulbous Command Head -->
                <path d="M90 54 L35 76 L45 86 L100 62 Z" fill="#15803d" stroke="#4ade80" stroke-width="1.5"/>
                <polygon points="20,82 42,70 50,86 28,92" fill="#166534" stroke="#86efac" stroke-width="2"/>
                <circle cx="26" cy="86" r="3.5" fill="#ef4444" class="animate-pulse"/>
            </svg>`;

        case "civ_romulans": // Romulan D'deridex Warbird
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <!-- Double Crescent Emerald Hull -->
                <path d="M25,85 C55,32 135,24 195,48 C175,85 130,98 95,98 C125,78 145,62 155,50 C110,48 65,62 25,85 Z" fill="#065f46" stroke="#34d399" stroke-width="2.2"/>
                <path d="M25,85 C65,65 120,65 170,78 C140,95 95,102 65,96 Z" fill="#064e3b" stroke="#10b981" stroke-width="1.5"/>
                <!-- Bird Beak Forward Section -->
                <polygon points="15,88 45,70 48,86" fill="#047857" stroke="#6ee7b7" stroke-width="2"/>
                <circle cx="115" cy="64" r="5" fill="#a7f3d0" class="animate-pulse"/>
            </svg>`;

        case "civ_cardassians": // Cardassian Galor Class
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <polygon points="25,95 85,48 145,34 195,55 155,75 95,82 65,108" fill="#78350f" stroke="#f59e0b" stroke-width="2"/>
                <polygon points="45,88 105,46 165,48 125,72" fill="#92400e" stroke="#fcd34d" stroke-width="1.5"/>
                <!-- Ridged Armor Lines -->
                <path d="M65 76 L135 48 M80 82 L145 55" stroke="#fde047" stroke-width="1.5" opacity="0.6"/>
                <circle cx="32" cy="92" r="4" fill="#facc15" class="animate-pulse"/>
            </svg>`;

        case "civ_ferengi": // Ferengi D'Kora Marauder
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <path d="M25,78 C45,42 135,35 190,68 C195,88 175,98 155,86 C125,75 75,85 25,92 Z" fill="#9a3412" stroke="#fb923c" stroke-width="2.2"/>
                <ellipse cx="95" cy="68" rx="45" ry="16" fill="#c2410c" stroke="#fdba74" stroke-width="1.5"/>
                <circle cx="45" cy="82" r="4" fill="#fde047"/><circle cx="65" cy="82" r="4" fill="#fde047"/>
            </svg>`;

        case "civ_andorians": // Andorian Kumari Battlecruiser
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <!-- Forward Twin Antenna Sensors -->
                <line x1="45" y1="72" x2="62" y2="38" stroke="#7dd3fc" stroke-width="2.5"/>
                <polygon points="25,82 115,48 195,55 165,78 85,92" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
                <ellipse cx="145" cy="76" rx="38" ry="7" fill="#0284c7" stroke="#bae6fd" stroke-width="1.5"/>
                <circle cx="110" cy="78" r="4" fill="#f97316"/>
                <circle cx="52" cy="74" r="4.5" fill="#e0f2fe"/>
            </svg>`;

        case "civ_tellarites": // Tellarite Heavy Armored Cruiser
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <rect x="35" y="48" width="145" height="42" rx="10" fill="#334155" stroke="#94a3b8" stroke-width="2.2"/>
                <rect x="55" y="38" width="95" height="22" rx="6" fill="#475569" stroke="#cbd5e1" stroke-width="1.5"/>
                <!-- Glowing Orange Industrial Furnace Bays -->
                <rect x="85" y="64" width="45" height="14" rx="2" fill="#ea580c" stroke="#fdba74" stroke-width="1"/>
                <circle cx="42" cy="70" r="6" fill="#64748b" stroke="#e2e8f0" stroke-width="1.5"/>
            </svg>`;

        case "civ_bajorans": // Bajoran Orbital Station / Curves
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <!-- Outer Docking Ring -->
                <ellipse cx="110" cy="74" rx="78" ry="18" fill="none" stroke="#d97706" stroke-width="6"/>
                <ellipse cx="110" cy="74" rx="52" ry="11" fill="#78350f" stroke="#fbbf24" stroke-width="1.5"/>
                <!-- Three Upper & Lower Curved Pylons -->
                <path d="M55 74 C55 32, 85 22, 95 22 M165 74 C165 32, 135 22, 125 22 M110 18 L110 98" fill="none" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round"/>
                <circle cx="110" cy="68" r="7" fill="#fef08a"/>
            </svg>`;

        case "civ_trills": // Trill Sleek Blue Cruiser
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <path d="M22,80 C70,42 145,38 195,56 C165,78 135,92 95,90 C75,88 45,86 22,80 Z" fill="#1e3a8a" stroke="#38bdf8" stroke-width="2.2"/>
                <path d="M55,68 C95,52 140,52 175,60" fill="none" stroke="#7dd3fc" stroke-width="3"/>
                <circle cx="85" cy="72" r="3.5" fill="#bae6fd"/><circle cx="115" cy="70" r="3.5" fill="#bae6fd"/>
            </svg>`;

        case "civ_betazoids": // Betazoid Violet Sculpted Ship
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <path d="M25,78 C65,45 140,42 192,66 C165,86 135,96 115,82 C85,78 55,82 25,78 Z" fill="#581c87" stroke="#c084fc" stroke-width="2.2"/>
                <ellipse cx="95" cy="60" rx="26" ry="8" fill="#3b0764" stroke="#e9d5ff" stroke-width="1.5"/>
            </svg>`;

        case "civ_borg": // Borg Tactical Cube
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <polygon points="110,12 170,35 170,96 110,120 50,96 50,35" fill="#0f172a" stroke="#22c55e" stroke-width="2.2"/>
                <polygon points="110,12 170,35 110,58 50,35" fill="#1e293b" stroke="#4ade80" stroke-width="1.5"/>
                <polygon points="50,35 110,58 110,120 50,96" fill="#090d16" stroke="#16a34a" stroke-width="1.5"/>
                <polygon points="170,35 110,58 110,120 170,96" fill="#111827" stroke="#22c55e" stroke-width="1.5"/>
                <!-- Neon Green Regeneration Grid -->
                <path d="M68 48 L98 62 M152 48 L122 62 M68 78 L98 92 M152 78 L122 92 M110 28 L110 52" stroke="#4ade80" stroke-width="2.5"/>
                <circle cx="110" cy="68" r="5" fill="#22c55e" class="animate-pulse"/>
            </svg>`;

        case "civ_founders": // Founders Curved Command Cruiser
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <path d="M22,88 C65,42 135,34 192,62 C175,92 125,102 85,94 C115,82 125,68 95,68 C65,68 42,78 22,88 Z" fill="#4c1d95" stroke="#c084fc" stroke-width="2.2"/>
                <circle cx="95" cy="72" r="5" fill="#e879f9" class="animate-pulse"/>
            </svg>`;

        case "civ_vorta": // Vorta Twin-Fin Scout Cruiser
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <polygon points="115,55 135,18 145,58" fill="#581c87" stroke="#c084fc" stroke-width="1.8"/>
                <polygon points="135,58 155,24 162,62" fill="#4c1d95" stroke="#a855f7" stroke-width="1.8"/>
                <path d="M25,82 L125,52 L192,68 L155,92 L95,82 Z" fill="#3b0764" stroke="#d8b4fe" stroke-width="2"/>
                <circle cx="88" cy="72" r="4" fill="#e879f9"/>
            </svg>`;

        case "civ_jemhadar": // Jem'Hadar Beetle Attack Ship
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <polygon points="28,82 95,38 175,48 192,74 125,92 45,96" fill="#4c1d95" stroke="#a855f7" stroke-width="2.2"/>
                <polygon points="35,76 75,62 85,84 42,92" fill="#2e1065" stroke="#c084fc" stroke-width="1.5"/>
                <circle cx="105" cy="65" r="4" fill="#d946ef" class="animate-pulse"/>
                <circle cx="122" cy="68" r="3" fill="#d946ef"/>
            </svg>`;

        case "civ_kazon": // Kazon Raider Fin-Ship
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <polygon points="25,84 115,34 188,48 155,96 125,78 75,98" fill="#7c2d12" stroke="#f97316" stroke-width="2"/>
                <polygon points="55,74 135,44 165,56 115,78" fill="#9a3412" stroke="#fdba74" stroke-width="1.5"/>
                <circle cx="48" cy="80" r="4" fill="#38bdf8"/>
            </svg>`;

        case "civ_ocampa": // Ocampa White/Gold Sleek Ship
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <path d="M25,80 C75,44 135,42 192,58 C165,78 145,95 105,88 C75,84 45,84 25,80 Z" fill="#cbd5e1" stroke="#fbbf24" stroke-width="2.2"/>
                <ellipse cx="85" cy="62" rx="22" ry="7" fill="#0284c7" stroke="#bae6fd" stroke-width="1.5"/>
                <circle cx="62" cy="74" r="3.5" fill="#38bdf8"/>
            </svg>`;

        case "civ_species8472": // Species 8472 Organic Tendril Bioship
            return `
            <svg viewBox="0 0 220 130" class="w-full h-full">
                <path d="M25,82 C65,45 115,42 155,58 M85,55 C115,25 155,22 185,32 M95,68 C135,52 175,58 195,74 M75,74 C105,88 135,98 165,96 M55,78 C65,98 85,108 105,112" fill="none" stroke="#9333ea" stroke-width="6" stroke-linecap="round"/>
                <ellipse cx="75" cy="68" rx="38" ry="12" transform="rotate(-15 75 68)" fill="#581c87" stroke="#d8b4fe" stroke-width="2"/>
                <circle cx="58" cy="70" r="4" fill="#f0abfc" class="animate-pulse"/>
                <circle cx="78" cy="64" r="3" fill="#38bdf8"/>
            </svg>`;

        default:
            return `<svg viewBox="0 0 220 130" class="w-full h-full"><ellipse cx="110" cy="65" rx="60" ry="20" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/></svg>`;
    }
}

// C. 10 TOS Character Portraits (Modeled after Reference 3)
function getTOSPortraitSVG(charObj, sizeClass = "w-full h-28") {
    const p = charObj.portrait;
    const earElements = p.vulcan
        ? `<polygon points="18,46 9,28 22,38" fill="${p.skin}" stroke="#1e293b" stroke-width="1"/><polygon points="82,46 91,28 78,38" fill="${p.skin}" stroke="#1e293b" stroke-width="1"/>`
        : `<ellipse cx="19" cy="48" rx="4" ry="7" fill="${p.skin}"/><ellipse cx="81" cy="48" rx="4" ry="7" fill="${p.skin}"/>`;

    let hairSVG = "";
    if (p.hairStyle === "spock") {
        hairSVG = `<path d="M18 38 C16 14, 84 14, 82 38 L78 30 L22 30 Z" fill="${p.hair}"/>`;
    } else if (p.hairStyle === "uhura") {
        hairSVG = `<path d="M14 52 C8 12, 92 12, 86 52 C82 30, 68 24, 50 24 C32 24, 18 30, 14 52 Z" fill="${p.hair}"/>`;
    } else if (p.hairStyle === "chapel") {
        hairSVG = `<path d="M15 48 C10 14, 90 14, 85 48 C88 56, 76 62, 74 52 C70 26, 30 26, 26 52 C24 62, 12 56, 15 48 Z" fill="${p.hair}"/>`;
    } else if (p.hairStyle === "khan") {
        hairSVG = `<path d="M16 44 C12 12, 88 12, 84 44 C88 62, 80 72, 74 66 L74 32 L26 32 L26 66 C20 72, 12 62, 16 44 Z" fill="${p.hair}"/>`;
    } else if (p.hairStyle === "kirk") {
        hairSVG = `<path d="M19 40 C15 14, 85 14, 81 40 C75 24, 38 20, 19 40 Z" fill="${p.hair}"/>`;
    } else {
        hairSVG = `<path d="M18 42 C14 14, 86 14, 82 42 C74 26, 26 26, 18 42 Z" fill="${p.hair}"/>`;
    }

    const earringsSVG = p.earrings
        ? `<circle cx="18" cy="57" r="5" fill="none" stroke="#facc15" stroke-width="2.2"/><circle cx="82" cy="57" r="5" fill="none" stroke="#facc15" stroke-width="2.2"/>`
        : ``;

    const beardSVG = p.beard
        ? `<path d="M36 60 Q50 56 64 60 L60 72 Q50 76 40 72 Z" fill="none" stroke="#1c1917" stroke-width="3"/>`
        : ``;

    const eyeColor = p.silverEyes ? "#e2e8f0" : "#0f172a";
    const browPath = p.vulcan
        ? `<path d="M27 39 L43 42 M73 39 L57 42" stroke="#090d16" stroke-width="2.8" stroke-linecap="round"/>`
        : `<path d="M28 41 L43 41 M57 41 L72 41" stroke="#1e293b" stroke-width="2.4" stroke-linecap="round"/>`;

    return `
    <svg viewBox="0 0 100 100" class="${sizeClass} block mx-auto">
        <defs>
            <radialGradient id="bg_${charObj.id}" cx="50%" cy="40%" r="60%">
                <stop offset="0%" stop-color="#1e3a8a" stop-opacity="0.7"/>
                <stop offset="100%" stop-color="#060b19" stop-opacity="1"/>
            </radialGradient>
        </defs>
        <rect width="100" height="100" fill="url(#bg_${charObj.id})"/>
        <!-- Shoulders & TOS Tunic -->
        <path d="M8 100 C12 74, 88 74, 92 100 Z" fill="${p.shirt}" stroke="#0f172a" stroke-width="1.5"/>
        <!-- Black TOS Collar -->
        <polygon points="33,76 50,90 67,76 60,72 40,72" fill="#090d16"/>
        <!-- Neck & Face -->
        <rect x="41" y="64" width="18" height="16" fill="${p.skin}"/>
        ${earElements}
        ${earringsSVG}
        <path d="M22 40 C22 20, 78 20, 78 40 C78 62, 64 74, 50 74 C36 74, 22 62, 22 40 Z" fill="${p.skin}" stroke="#7c2d12" stroke-width="0.8"/>
        ${hairSVG}
        ${browPath}
        <!-- Eyes -->
        <circle cx="36" cy="46" r="3" fill="${eyeColor}"/>
        <circle cx="64" cy="46" r="3" fill="${eyeColor}"/>
        <circle cx="37" cy="45" r="1" fill="#ffffff"/>
        <circle cx="65" cy="45" r="1" fill="#ffffff"/>
        <!-- Nose & Mouth -->
        <path d="M50 45 L48 55 L53 56" fill="none" stroke="#7c2d12" stroke-width="1.8" stroke-linecap="round"/>
        <path d="M40 63 Q50 66 60 63" fill="none" stroke="#5c2810" stroke-width="2.2" stroke-linecap="round"/>
        ${beardSVG}
    </svg>`;
}

// D. Organization / Starfleet Delta Insignia Badge for Character Cards
function getOrgBadgeSVG(orgType) {
    if (orgType === "augment") {
        return `
        <svg viewBox="0 0 32 32" class="w-6 h-6 drop-shadow">
            <polygon points="16,2 29,16 16,30 3,16" fill="#334155" stroke="#94a3b8" stroke-width="2"/>
            <circle cx="16" cy="16" r="5" fill="#f59e0b"/>
        </svg>`;
    }
    return `
    <svg viewBox="0 0 32 36" class="w-6 h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
        <path d="M16 2 L4 33 L16 25 L28 33 Z" fill="#facc15" stroke="#78350f" stroke-width="2"/>
        <polygon points="16,10 17.5,15 22,15.5 18,18 19.5,23 16,19.5 12.5,23 14,18 10,15.5 14.5,15" fill="#0f172a"/>
    </svg>`;
}

/**
 * ============================================================================
 * SOUND SYNTHESIZER (Web Audio API Sci-Fi Sound Effects)
 * ============================================================================
 */
class LcarsAudio {
    constructor() {
        this.ctx = null;
        this.enabled = true;
    }

    init() {
        if (!this.ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) this.ctx = new AudioCtx();
        }
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    playBeep(freq = 880, dur = 0.06) {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.25, this.ctx.currentTime + dur);
        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + dur);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + dur);
    }

    playPhaser(isCrit = false) {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = isCrit ? 'sawtooth' : 'triangle';
        osc.frequency.setValueAtTime(isCrit ? 1200 : 950, now);
        osc.frequency.exponentialRampToValueAtTime(220, now + 0.11);
        gain.gain.setValueAtTime(0.09, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.11);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + 0.11);
    }

    playExplosion(isBoss = false) {
        if (!this.enabled) return;
        this.init();
        if (!this.ctx) return;
        const now = this.ctx.currentTime;
        const dur = isBoss ? 0.45 : 0.22;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(160, now);
        osc.frequency.exponentialRampToValueAtTime(28, now + dur);
        gain.gain.setValueAtTime(0.16, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + dur);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(now + dur);
    }
}

const sfx = new LcarsAudio();

/**
 * ============================================================================
 * GAME STATE & SAVE MIGRATION (Preserving v1 Saves -> v2 Schema)
 * ============================================================================
 */
const SAVE_KEY = 'startrek_infinite_frontier_v1';

let state = getDefaultState();
let buyMultiplier = 1; // 1, 10, 25, or 'MAX'

let currentEnemy = {
    name: "",
    civId: "civ_klingons",
    maxHp: 10,
    hp: 10,
    reward: 1,
    isBoss: false,
    timer: 30,
    maxTimer: 30
};

function getDefaultState() {
    const characters = {};
    TOS_CHARACTERS.forEach(c => {
        characters[c.id] = {
            unlocked: false,
            level: 0,
            rank: 1,
            duplicates: 0
        };
    });

    const modules = {};
    SHIP_MODULES_DATA.forEach(m => modules[m.id] = 0);

    const research = {};
    RESEARCH_DATA.forEach(r => research[r.id] = false);

    return {
        version: 2,
        credits: ECON.INITIAL_CREDITS,
        shards: 0, // Биоданные от дубликатов и боссов
        researchData: 0,
        recruitsCount: 0,
        level: 1,
        maxLevelReached: 1,
        waveKills: 0,
        autoAdvance: true,
        activeShipId: "ship_enterprise_tos",
        characters,
        modules,
        research,
        stats: {
            totalKills: 0,
            bossKills: 0,
            totalClicks: 0
        },
        soundEnabled: true
    };
}

function loadAndMigrateState() {
    try {
        const raw = localStorage.getItem(SAVE_KEY);
        if (!raw) return;
        const parsed = JSON.parse(raw);
        const def = getDefaultState();

        // Merge core fields
        state = {
            ...def,
            ...parsed,
            characters: { ...def.characters, ...(parsed.characters || {}) },
            modules: { ...def.modules, ...(parsed.modules || {}) },
            research: { ...def.research, ...(parsed.research || {}) },
            stats: { ...def.stats, ...(parsed.stats || {}) }
        };

        // Ensure deep character fields exist
        TOS_CHARACTERS.forEach(c => {
            if (!state.characters[c.id]) {
                state.characters[c.id] = { unlocked: false, level: 0, rank: 1, duplicates: 0 };
            }
        });

        // MIGRATION FROM V1 (`officers` object -> `characters` TOS collection)
        if (parsed.officers) {
            const legacyMap = {
                kirk: "tos_kirk",
                spock: "tos_spock",
                mccoy: "tos_mccoy",
                scotty: "tos_scott",
                picard: "tos_uhura",
                data: "tos_sulu",
                worf: "tos_chekov"
            };
            Object.keys(legacyMap).forEach(oldId => {
                const oldLvl = parsed.officers[oldId] || 0;
                const newId = legacyMap[oldId];
                if (oldLvl > 0 && state.characters[newId] && state.characters[newId].level === 0) {
                    state.characters[newId].unlocked = true;
                    state.characters[newId].level = oldLvl;
                }
            });
            delete state.officers;
        }

        state.version = 2;
        sfx.enabled = state.soundEnabled !== false;
    } catch (e) {
        console.warn("Ошибка миграции сохранения LocalStorage:", e);
    }
}

function saveState() {
    try {
        state.soundEnabled = sfx.enabled;
        localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    } catch (e) {
        console.warn("Не удалось сохранить в LocalStorage:", e);
    }
}

/**
 * ============================================================================
 * NUMBER FORMATTING & COMBAT / COLLECTION SYNERGY CALCULATIONS
 * ============================================================================
 */
const SUFFIXES = ["", "K", "M", "B", "T", "Qa", "Qi", "Sx", "Sp", "Oc"];

function formatNum(n) {
    if (n === null || n === undefined || isNaN(n)) return "0";
    if (n < 1000) {
        return Number.isInteger(n) ? n.toString() : n.toFixed(1).replace(/\.0$/, '');
    }
    const tier = Math.floor(Math.log10(Math.abs(n)) / 3);
    if (tier === 0) return Math.floor(n).toString();
    const suffix = SUFFIXES[tier] || `e${tier * 3}`;
    const scale = Math.pow(10, tier * 3);
    const scaled = n / scale;
    return scaled.toFixed(scaled < 10 ? 2 : 1) + suffix;
}

function getActiveStarship() {
    return STARSHIPS_DB.find(s => s.id === state.activeShipId) || STARSHIPS_DB[0];
}

// Compute aggregated specialization bonuses from all unlocked TOS characters
function getCrewBonuses() {
    const bonuses = {
        all_damage: 0,
        crew_dps: 0,
        click_damage: 0,
        ship_systems: 0,
        crit_chance: 0,
        crit_damage: 0,
        credits_gain: 0,
        boss_time: 0
    };

    TOS_CHARACTERS.forEach(c => {
        const st = state.characters[c.id];
        if (st && st.unlocked && st.level > 0) {
            const rarityMult = RARITY_TIERS[c.rarity].mult;
            const rankMult = 1 + (st.rank - 1) * 0.25;
            // Specialization scales with character level and rank
            bonuses[c.bonusType] += c.bonusPerLvl * st.level * (0.6 + 0.2 * rarityMult) * rankMult;
        }
    });

    return bonuses;
}

function getOfficerMilestoneMult(lvl) {
    if (lvl < 25) return 1;
    return Math.pow(2, Math.floor(lvl / 25));
}

function getGlobalMultiplier() {
    const b = getCrewBonuses();
    let mult = 1;
    // Prestige Data Cores (+25% per core)
    mult *= (1 + state.researchData * 0.25);
    // Reactor module (+20% per level)
    mult *= (1 + (state.modules.reactor || 0) * 0.20);
    // TOS Crew All-Damage Synergy (Kirk + Khan)
    mult *= (1 + b.all_damage);
    // Omega Directive research
    if (state.research.omega_directive) mult *= 3;
    return mult;
}

function getCharacterSingleDps(charData) {
    const st = state.characters[charData.id];
    if (!st || !st.unlocked || st.level <= 0) return 0;

    const rarityMult = RARITY_TIERS[charData.rarity].mult;
    const rankMult = 1 + (st.rank - 1) * 0.35;
    const b = getCrewBonuses();
    const ship = getActiveStarship();

    let dps = charData.baseDps * st.level * rarityMult * rankMult * getOfficerMilestoneMult(st.level);
    dps *= getGlobalMultiplier();
    dps *= (1 + b.crew_dps);
    dps *= ship.bonusDps;
    if (state.research.subspace_comms) dps *= 1.5;
    return dps;
}

function getTotalDps() {
    let total = 0;
    TOS_CHARACTERS.forEach(c => {
        total += getCharacterSingleDps(c);
    });
    return total;
}

function getClickDamage() {
    const b = getCrewBonuses();
    const ship = getActiveStarship();
    const phaserLvl = state.modules.phasers || 0;
    const phaserMilestone = Math.pow(1.25, Math.floor(phaserLvl / 10));

    let base = (ECON.BASE_CLICK_DMG + phaserLvl * 2 * (1 + b.ship_systems)) * phaserMilestone;

    const torpLvl = state.modules.torpedoes || 0;
    if (torpLvl > 0) {
        base += getTotalDps() * (torpLvl * 0.02);
    }

    base *= getGlobalMultiplier();
    base *= (1 + b.click_damage);
    base *= ship.bonusClick;
    if (state.research.mod_freq) base *= 2;
    if (state.research.quantum_torp) base *= 2;

    return Math.max(1, base);
}

function getCritChance() {
    const b = getCrewBonuses();
    const compLvl = state.modules.computer || 0;
    return Math.min(80, Math.round(5 + compLvl * 2 + b.crit_chance));
}

function getCritMultiplier() {
    const b = getCrewBonuses();
    const compLvl = state.modules.computer || 0;
    let mult = 2.0 + compLvl * 0.25 + b.crit_damage;
    if (state.research.quantum_torp) mult *= 2;
    return mult;
}

function getWavesPerLevel() {
    return state.research.transwarp_conduits ? 4 : 5;
}

function calcBulkUpgrade(baseCost, costMult, currentLvl, multMode) {
    const r = costMult;
    const firstCost = baseCost * Math.pow(r, currentLvl);

    if (multMode === 1) {
        return { count: 1, cost: Math.ceil(firstCost) };
    }

    if (multMode === 'MAX') {
        if (state.credits < firstCost) {
            return { count: 1, cost: Math.ceil(firstCost) };
        }
        const n = Math.floor(Math.log((state.credits * (r - 1)) / firstCost + 1) / Math.log(r));
        const count = Math.max(1, Math.min(n, 200));
        const totalCost = firstCost * (Math.pow(r, count) - 1) / (r - 1);
        return { count, cost: Math.ceil(totalCost) };
    }

    const count = Number(multMode);
    const totalCost = firstCost * (Math.pow(r, count) - 1) / (r - 1);
    return { count, cost: Math.ceil(totalCost) };
}

/**
 * ============================================================================
 * ENEMY & COMBAT LOGIC (Linked to 18 Civilizations & Ships)
 * ============================================================================
 */
function spawnEnemy(lvl) {
    const isBoss = (lvl % 10 === 0);
    const b = getCrewBonuses();

    let maxHp = Math.round(ECON.FIRST_ENEMY_HP * Math.pow(ECON.HP_MULT, lvl - 1));
    let reward = Math.max(1, Math.round(ECON.BASE_REWARD * Math.pow(ECON.REWARD_MULT, lvl - 1)));

    const shieldGoldMult = 1 + (state.modules.shields || 0) * 0.10;
    const prestigeGoldMult = 1 + state.researchData * 0.15;
    const uhuraGoldMult = 1 + b.credits_gain;
    const researchGoldMult = state.research.replicator_econ ? 1.5 : 1.0;
    reward = Math.round(reward * shieldGoldMult * prestigeGoldMult * uhuraGoldMult * researchGoldMult);

    const sectorObj = SECTORS_DB[Math.floor((lvl - 1) / 10) % SECTORS_DB.length];
    let civId;
    if (isBoss) {
        maxHp = Math.round(maxHp * ECON.BOSS_HP_MULT);
        reward = Math.round(reward * ECON.BOSS_REWARD_MULT);
        civId = sectorObj.bossCiv;
    } else {
        civId = sectorObj.civIds[(lvl - 1) % sectorObj.civIds.length];
    }

    const civObj = CIVILIZATIONS_DB.find(c => c.id === civId) || CIVILIZATIONS_DB[2];
    const extraBossTime = (state.modules.shields || 0) * 2 + Math.round(b.boss_time);
    const bossMaxTime = ECON.BOSS_TIME_LIMIT + extraBossTime;

    currentEnemy = {
        name: isBoss ? `ФЛАГМАН: ${civObj.shipName.toUpperCase()}` : civObj.shipName,
        civId: civObj.id,
        civName: civObj.name,
        maxHp,
        hp: maxHp,
        reward,
        isBoss,
        timer: bossMaxTime,
        maxTimer: bossMaxTime
    };

    // Inject Enemy Ship SVG & Emblem
    document.getElementById('enemy-svg-holder').innerHTML = getCivilizationShipSVG(civObj.id);
    document.getElementById('enemy-emblem-holder').innerHTML = getCivilizationEmblemSVG(civObj.id, "w-5 h-5");

    const combatZone = document.getElementById('combat-zone');
    const rankBadge = document.getElementById('enemy-rank-badge');
    const bossTimerWrap = document.getElementById('boss-timer-wrap');

    if (isBoss) {
        combatZone.classList.add('boss-alert-zone');
        rankBadge.textContent = `БОСС • ${civObj.name.toUpperCase()}`;
        rankBadge.className = "px-1.5 py-0.5 text-[9px] font-orbitron font-bold rounded bg-red-500/30 text-red-300 border border-red-400 shrink-0";
        bossTimerWrap.classList.remove('hidden');
    } else {
        combatZone.classList.remove('boss-alert-zone');
        rankBadge.textContent = civObj.name.toUpperCase();
        rankBadge.className = "px-1.5 py-0.5 text-[9px] font-orbitron font-bold rounded bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shrink-0";
        bossTimerWrap.classList.add('hidden');
    }

    updateCombatHUD();
}

function dealDamage(amount, isClick = false, tapX = null, tapY = null) {
    if (amount <= 0 || currentEnemy.hp <= 0) return;

    let finalDmg = amount;
    let isCrit = false;

    if (isClick) {
        if (Math.random() * 100 < getCritChance()) {
            isCrit = true;
            finalDmg *= getCritMultiplier();
        }
        state.stats.totalClicks++;
        document.getElementById('tap-hint').classList.add('hidden');
    }

    currentEnemy.hp = Math.max(0, currentEnemy.hp - finalDmg);

    if (isClick) {
        sfx.playPhaser(isCrit);
        triggerShipHitAnim();
        spawnDamageNumber(finalDmg, isCrit, tapX, tapY);
        fireBeamEffect(tapX, tapY, isCrit);
    }

    if (currentEnemy.hp <= 0) {
        onEnemyDestroyed();
    } else {
        updateCombatHUD();
    }
}

function onEnemyDestroyed() {
    const wasBoss = currentEnemy.isBoss;
    state.credits += currentEnemy.reward;
    state.stats.totalKills++;

    sfx.playExplosion(wasBoss);
    spawnExplosionParticles(wasBoss ? 40 : 20, "#38bdf8");

    if (wasBoss) {
        state.stats.bossKills++;
        state.researchData += 1;
        state.shards += 5;
        showToast(`БОСС ПОВЕРЖЕН! +${formatNum(currentEnemy.reward)} КР, +1 Ядро, +5 Биоданных!`);
        state.waveKills = 0;
        if (state.autoAdvance) state.level++;
    } else {
        state.waveKills++;
        if (state.waveKills >= getWavesPerLevel()) {
            state.waveKills = 0;
            if (state.autoAdvance) state.level++;
        }
    }

    if (state.level > state.maxLevelReached) {
        state.maxLevelReached = state.level;
    }

    spawnEnemy(state.level);
    updateAllUI();
    saveState();
}

function triggerShipHitAnim() {
    const wrapper = document.getElementById('enemy-ship-wrapper');
    const shield = document.getElementById('shield-aura');
    wrapper.classList.remove('ship-hit');
    void wrapper.offsetWidth;
    wrapper.classList.add('ship-hit');

    shield.style.borderColor = 'rgba(0, 229, 255, 0.75)';
    shield.style.boxShadow = '0 0 25px rgba(0, 229, 255, 0.5), inset 0 0 20px rgba(0, 229, 255, 0.4)';
    setTimeout(() => {
        shield.style.borderColor = 'rgba(0, 229, 255, 0)';
        shield.style.boxShadow = 'none';
    }, 120);
}

function spawnDamageNumber(dmg, isCrit, x, y) {
    const container = document.getElementById('dmg-container');
    const rect = container.getBoundingClientRect();
    const posX = x !== null ? x - rect.left : rect.width / 2 + (Math.random() * 60 - 30);
    const posY = y !== null ? y - rect.top : rect.height / 2 + (Math.random() * 40 - 20);

    const el = document.createElement('div');
    el.className = `dmg-popup ${isCrit ? 'text-amber-300 text-base sm:text-lg' : 'text-cyan-200 text-xs sm:text-sm'}`;
    el.style.left = `${posX}px`;
    el.style.top = `${posY}px`;
    el.textContent = (isCrit ? 'КРИТ! -' : '-') + formatNum(dmg);

    container.appendChild(el);
    setTimeout(() => el.remove(), 750);
}

/**
 * ============================================================================
 * CANVAS VISUAL FX (Starfield, Phaser Beams & Explosions)
 * ============================================================================
 */
const spaceCanvas = document.getElementById('space-canvas');
const spaceCtx = spaceCanvas.getContext('2d');
const fxCanvas = document.getElementById('fx-canvas');
const fxCtx = fxCanvas.getContext('2d');

let stars = [];
let beams = [];
let particles = [];

function resizeCanvases() {
    const vp = document.getElementById('game-viewport');
    spaceCanvas.width = vp.clientWidth;
    spaceCanvas.height = vp.clientHeight;

    const cz = document.getElementById('combat-zone');
    fxCanvas.width = cz.clientWidth;
    fxCanvas.height = cz.clientHeight;

    if (stars.length === 0) {
        for (let i = 0; i < 85; i++) {
            stars.push({
                x: Math.random() * spaceCanvas.width,
                y: Math.random() * spaceCanvas.height,
                size: Math.random() * 1.8 + 0.4,
                speed: Math.random() * 1.3 + 0.25,
                color: Math.random() > 0.7 ? '#38bdf8' : (Math.random() > 0.85 ? '#fbbf24' : '#ffffff')
            });
        }
    }
}

function fireBeamEffect(clientX, clientY, isCrit, isAuto = false) {
    const rect = fxCanvas.getBoundingClientRect();
    const startX = fxCanvas.width / 2 + (isAuto ? (Math.random() * 34 - 17) : 0);
    const startY = fxCanvas.height - 24;

    const targetX = clientX !== null ? clientX - rect.left : fxCanvas.width / 2 + (Math.random() * 50 - 25);
    const targetY = clientY !== null ? clientY - rect.top : fxCanvas.height * 0.44 + (Math.random() * 34 - 17);

    beams.push({
        x1: startX,
        y1: startY,
        x2: targetX,
        y2: targetY,
        alpha: 1.0,
        color: isCrit ? '#ff3344' : (isAuto ? '#38bdf8' : '#ff9900'),
        width: isCrit ? 4.2 : (isAuto ? 1.8 : 2.8)
    });

    const sparkCount = isCrit ? 8 : (isAuto ? 2 : 5);
    for (let i = 0; i < sparkCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 3.5 + 1;
        particles.push({
            x: targetX,
            y: targetY,
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            radius: Math.random() * 2.2 + 1,
            alpha: 1,
            color: isCrit ? '#fbbf24' : '#00e5ff'
        });
    }
}

function spawnExplosionParticles(count, baseColor) {
    const cx = fxCanvas.width / 2;
    const cy = fxCanvas.height * 0.44;
    const colors = [baseColor, '#ff9900', '#ff3344', '#00e5ff', '#ffffff'];

    for (let i = 0; i < count; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 5.2 + 1.2;
        particles.push({
            x: cx + (Math.random() * 22 - 11),
            y: cy + (Math.random() * 22 - 11),
            vx: Math.cos(angle) * speed,
            vy: Math.sin(angle) * speed,
            radius: Math.random() * 3.8 + 1.2,
            alpha: 1,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }
}

function renderVisualLoop() {
    spaceCtx.clearRect(0, 0, spaceCanvas.width, spaceCanvas.height);
    for (let s of stars) {
        s.y += s.speed;
        if (s.y > spaceCanvas.height) {
            s.y = 0;
            s.x = Math.random() * spaceCanvas.width;
        }
        spaceCtx.fillStyle = s.color;
        spaceCtx.beginPath();
        spaceCtx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        spaceCtx.fill();
    }

    fxCtx.clearRect(0, 0, fxCanvas.width, fxCanvas.height);
    for (let i = beams.length - 1; i >= 0; i--) {
        const b = beams[i];
        fxCtx.save();
        fxCtx.globalAlpha = b.alpha;
        fxCtx.strokeStyle = b.color;
        fxCtx.lineWidth = b.width;
        fxCtx.shadowColor = b.color;
        fxCtx.shadowBlur = 10;
        fxCtx.beginPath();
        fxCtx.moveTo(b.x1, b.y1);
        fxCtx.lineTo(b.x2, b.y2);
        fxCtx.stroke();
        fxCtx.restore();

        b.alpha -= 0.12;
        if (b.alpha <= 0) beams.splice(i, 1);
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.04;

        fxCtx.save();
        fxCtx.globalAlpha = Math.max(0, p.alpha);
        fxCtx.fillStyle = p.color;
        fxCtx.shadowColor = p.color;
        fxCtx.shadowBlur = 6;
        fxCtx.beginPath();
        fxCtx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        fxCtx.fill();
        fxCtx.restore();

        if (p.alpha <= 0) particles.splice(i, 1);
    }

    requestAnimationFrame(renderVisualLoop);
}

/**
 * ============================================================================
 * UI RENDERING: TOS COLLECTION, CIVILIZATIONS, COMBAT & SHIP
 * ============================================================================
 */
function buildStaticSectionsDOM() {
    // 1. Populate Starship Selector
    const shipSelect = document.getElementById('select-active-ship');
    shipSelect.innerHTML = STARSHIPS_DB.map(s => `<option value="${s.id}">${s.name}</option>`).join('');
    shipSelect.value = state.activeShipId;

    // 2. Build Ship Modules Cards
    const shipContainer = document.getElementById('ship-modules-list');
    shipContainer.innerHTML = SHIP_MODULES_DATA.map(m => `
        <div class="lcars-card p-2.5 flex items-center justify-between gap-2.5 border-l-cyan-400">
            <div class="flex items-center gap-2.5 min-w-0">
                <div class="w-10 h-10 rounded-lg bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center shrink-0">
                    ${m.svgIcon}
                </div>
                <div class="min-w-0">
                    <div class="flex items-center gap-1.5">
                        <h4 class="font-orbitron text-xs font-bold text-white truncate">${m.name}</h4>
                        <span id="mod-lvl-${m.id}" class="px-1.5 py-0.2 rounded text-[10px] font-orbitron font-bold bg-slate-800 text-cyan-300">Ур. 0</span>
                    </div>
                    <p class="text-[11px] text-slate-300 leading-tight mt-0.5">${m.desc}</p>
                </div>
            </div>
            <button id="btn-buy-mod-${m.id}" onclick="buyShipModule('${m.id}')" class="lcars-btn shrink-0 w-24 py-2 px-2 rounded-xl bg-gradient-to-b from-cyan-400 to-blue-500 text-slate-950 font-orbitron font-bold text-center shadow">
                <div id="mod-btn-label-${m.id}" class="text-[9px] uppercase tracking-tighter opacity-90">Улучш. x1</div>
                <div id="mod-cost-${m.id}" class="text-xs font-black">12 КР</div>
            </button>
        </div>
    `).join('');

    // 3. Build Research List
    const resContainer = document.getElementById('research-list');
    resContainer.innerHTML = RESEARCH_DATA.map(r => `
        <div class="lcars-card p-2.5 flex items-center justify-between gap-2.5 border-l-purple-400">
            <div class="min-w-0">
                <h4 class="font-orbitron text-xs font-bold text-purple-200">${r.name}</h4>
                <p class="text-[11px] text-slate-300 mt-0.5">${r.desc}</p>
            </div>
            <button id="btn-buy-res-${r.id}" onclick="buyResearch('${r.id}')" class="lcars-btn shrink-0 w-28 py-2 px-2 rounded-xl font-orbitron font-bold text-xs text-center">
                Изучить
            </button>
        </div>
    `).join('');
}

// Render Combat Bridge Quick Crew List
function renderCombatCrewList() {
    const container = document.getElementById('combat-crew-list');
    container.innerHTML = TOS_CHARACTERS.map(c => {
        const st = state.characters[c.id];
        const tier = RARITY_TIERS[c.rarity];
        const dps = getCharacterSingleDps(c);
        const bulk = st.unlocked
            ? calcBulkUpgrade(c.baseCost, c.costMult, st.level, buyMultiplier)
            : { count: 1, cost: c.baseCost };

        const canAfford = state.credits >= bulk.cost;

        return `
        <div class="lcars-card p-2 flex items-center justify-between gap-2" style="border-left-color: ${tier.color}">
            <div class="flex items-center gap-2 min-w-0 cursor-pointer" onclick="openCharacterModal('${c.id}')">
                <div class="w-11 h-11 rounded-lg overflow-hidden border shrink-0 ${st.unlocked ? '' : 'grayscale opacity-60'}" style="border-color: ${tier.color}">
                    ${getTOSPortraitSVG(c, "w-11 h-11")}
                </div>
                <div class="min-w-0">
                    <div class="flex items-center gap-1">
                        <h4 class="font-orbitron text-[11px] font-bold text-white truncate">${c.name}</h4>
                        <span class="px-1 py-0.2 rounded text-[9px] font-orbitron font-bold bg-slate-800 text-amber-300">
                            ${st.unlocked ? `Ур.${st.level}` : 'Закрыт'}
                        </span>
                    </div>
                    <div class="text-[10px] text-slate-400 truncate">${c.title} • <span class="text-cyan-300">${c.specialization}</span></div>
                    <div class="text-[10px] font-orbitron text-amber-300">DPS: ${formatNum(dps)}</div>
                </div>
            </div>
            <button onclick="hireOrUpgradeCharacter('${c.id}')" ${!canAfford ? 'disabled' : ''} class="lcars-btn shrink-0 w-24 py-1.5 px-2 rounded-xl bg-gradient-to-b from-amber-400 to-amber-500 text-slate-950 font-orbitron font-bold text-center shadow">
                <div class="text-[8px] uppercase tracking-tighter opacity-90">${st.unlocked ? `Улучш. +${bulk.count}` : 'Нанять'}</div>
                <div class="text-[11px] font-black">${formatNum(bulk.cost)} КР</div>
            </button>
        </div>`;
    }).join('');
}

// Render TOS Character Cards Grid (Styled directly after Reference 3)
function renderTOSCollectionGrid() {
    const rarityFilter = document.getElementById('filter-rarity').value;
    const specFilter = document.getElementById('filter-spec').value;
    const sortBy = document.getElementById('sort-chars').value;

    let unlockedTotal = 0;
    TOS_CHARACTERS.forEach(c => {
        if (state.characters[c.id]?.unlocked) unlockedTotal++;
    });
    document.getElementById('tos-unlocked-count').textContent = `${unlockedTotal} / ${TOS_CHARACTERS.length}`;

    const packCost = getRecruitPackCost();
    const packBtn = document.getElementById('btn-recruit-pack');
    document.getElementById('recruit-pack-cost').textContent = `${formatNum(packCost)} КР`;
    packBtn.disabled = state.credits < packCost;

    let list = TOS_CHARACTERS.filter(c => {
        if (rarityFilter !== 'ALL' && c.rarity !== rarityFilter) return false;
        if (specFilter !== 'ALL' && c.specialization !== specFilter) return false;
        return true;
    });

    if (sortBy === 'power') {
        list.sort((a, b) => getCharacterSingleDps(b) - getCharacterSingleDps(a));
    } else if (sortBy === 'level') {
        list.sort((a, b) => (state.characters[b.id]?.level || 0) - (state.characters[a.id]?.level || 0));
    } else if (sortBy === 'rarity') {
        list.sort((a, b) => RARITY_TIERS[b.rarity].order - RARITY_TIERS[a.rarity].order);
    }

    const grid = document.getElementById('tos-cards-grid');
    grid.innerHTML = list.map(c => {
        const st = state.characters[c.id];
        const tier = RARITY_TIERS[c.rarity];
        const dps = getCharacterSingleDps(c);
        const cost = st.unlocked
            ? Math.ceil(c.baseCost * Math.pow(c.costMult, st.level))
            : c.baseCost;
        const canAfford = state.credits >= cost;

        return `
        <div class="tos-char-card ${tier.borderClass}">
            <!-- Top Rarity & Level Strip -->
            <div class="flex items-center justify-between px-2 py-1 bg-slate-950/85 border-b border-slate-800 text-[9px] font-orbitron">
                <span class="font-bold uppercase" style="color: ${tier.color}">${tier.name}</span>
                <span class="text-amber-300 font-bold">${st.unlocked ? `УР. ${st.level} ★${st.rank}` : 'НЕ НАНЯТ'}</span>
            </div>

            <!-- Portrait Box with Organization Badge (Reference 3 Layout) -->
            <div class="relative cursor-pointer group" onclick="openCharacterModal('${c.id}')">
                <div class="${st.unlocked ? '' : 'grayscale contrast-125 opacity-65'} transition-all">
                    ${getTOSPortraitSVG(c, "w-full h-28")}
                </div>
                <!-- Bottom-Right Starfleet / Organization Insignia -->
                <div class="absolute bottom-1.5 right-2">
                    ${getOrgBadgeSVG(c.org)}
                </div>
                <!-- Specialization Pill -->
                <span class="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded bg-slate-950/85 border border-slate-700 text-[8px] font-orbitron text-cyan-300">
                    ${c.specialization}
                </span>
            </div>

            <!-- Name & Title Footer (Reference 3 Dark Plaque) -->
            <div class="p-2 bg-[#070c18] border-t border-slate-800 flex-1 flex flex-col justify-between text-center">
                <div class="cursor-pointer" onclick="openCharacterModal('${c.id}')">
                    <div class="font-orbitron text-xs font-bold text-white leading-tight truncate">${c.name}</div>
                    <div class="text-[11px] text-slate-300 leading-tight mt-0.5">${c.title}</div>
                    <div class="text-[10px] font-orbitron text-cyan-300 mt-1">Мощь: ${formatNum(dps)} DPS</div>
                </div>

                <div class="mt-2 pt-1.5 border-t border-slate-800/80 flex gap-1">
                    <button onclick="hireOrUpgradeCharacter('${c.id}')" ${!canAfford ? 'disabled' : ''} class="lcars-btn flex-1 py-1.5 px-2 rounded bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-orbitron font-black text-[10px]">
                        ${st.unlocked ? 'УЛУЧШ.' : 'НАНЯТЬ'} (${formatNum(cost)})
                    </button>
                    <button onclick="openCharacterModal('${c.id}')" class="lcars-btn px-2 py-1.5 rounded bg-slate-800 border border-slate-600 text-cyan-300 font-orbitron font-bold text-[10px]" title="Досье и биоданные">
                        ℹ
                    </button>
                </div>
            </div>
        </div>`;
    }).join('');
}

// Render 18 Civilizations Grid (Styled directly after References 1 & 2)
function renderCivilizationsGrid() {
    const quadFilter = document.getElementById('filter-quadrant').value;
    const list = CIVILIZATIONS_DB.filter(civ => quadFilter === 'ALL' || civ.quadrant === quadFilter);

    const grid = document.getElementById('civs-cards-grid');
    grid.innerHTML = list.map(civ => `
        <div onclick="openCivilizationModal('${civ.id}')" class="civ-card p-2.5 flex flex-col justify-between cursor-pointer relative overflow-hidden">
            <!-- Top Left Unique Emblem -->
            <div class="flex items-start justify-between">
                ${getCivilizationEmblemSVG(civ.id, "w-8 h-8")}
                <span class="text-[8px] font-orbitron px-1.5 py-0.5 rounded bg-slate-900/90 border border-cyan-500/30 text-cyan-300">
                    ${civ.quadrant.replace('-квадрант', '')}
                </span>
            </div>

            <!-- Center Recognizable Starship Silhouette -->
            <div class="h-20 my-1 flex items-center justify-center drop-shadow-[0_4px_10px_rgba(0,229,255,0.2)]">
                ${getCivilizationShipSVG(civ.id)}
            </div>

            <!-- Bottom Civilization Name & Status -->
            <div class="text-center border-t border-slate-800/80 pt-1.5">
                <div class="font-orbitron text-xs font-bold text-white leading-tight">${civ.name}</div>
                <div class="text-[9px] ${civ.relationColor} truncate mt-0.5">${civ.relation}</div>
            </div>
        </div>
    `).join('');
}

// Render Galaxy Sectors Tab
function renderGalaxySectors() {
    const container = document.getElementById('galaxy-sectors-list');
    container.innerHTML = SECTORS_DB.map((sec, idx) => {
        const minLvl = idx * 10 + 1;
        const isUnlocked = state.maxLevelReached >= minLvl;
        const isCurrent = Math.floor((state.level - 1) / 10) % SECTORS_DB.length === idx;

        const civBadges = sec.civIds.map(cid => {
            const cObj = CIVILIZATIONS_DB.find(x => x.id === cid);
            return cObj ? `<span class="inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-slate-950 border border-slate-700 text-[10px] text-slate-200">${cObj.name}</span>` : '';
        }).join(' ');

        return `
        <div class="lcars-card p-2.5 flex items-center justify-between gap-2 ${isCurrent ? 'border-l-amber-400' : 'border-l-cyan-500'}">
            <div class="min-w-0 space-y-1">
                <div class="flex items-center gap-1.5">
                    <span class="px-1.5 py-0.5 rounded text-[9px] font-orbitron font-bold bg-cyan-500/20 text-cyan-300">УР. ${minLvl}+</span>
                    <h4 class="font-orbitron text-xs font-bold text-white truncate">${sec.name}</h4>
                </div>
                <div class="flex flex-wrap gap-1">${civBadges}</div>
            </div>
            <button onclick="jumpToSectorLevel(${minLvl})" ${!isUnlocked ? 'disabled' : ''} class="lcars-btn shrink-0 px-2.5 py-2 rounded-lg font-orbitron font-bold text-[10px] ${isCurrent ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-cyan-300 border border-cyan-500/40'}">
                ${isCurrent ? 'АКТИВЕН' : (isUnlocked ? 'ПЕРЕЙТИ' : 'ЗАКРЫТ')}
            </button>
        </div>`;
    }).join('');
}

function updateCombatHUD() {
    document.getElementById('ui-level').textContent = state.level;
    const sectorObj = SECTORS_DB[Math.floor((state.level - 1) / 10) % SECTORS_DB.length];
    document.getElementById('sector-name').textContent = sectorObj.name;

    document.getElementById('enemy-name').textContent = currentEnemy.name;
    document.getElementById('enemy-lvl-badge').textContent = `УР. ${state.level}`;

    const hpPct = Math.max(0, Math.min(100, (currentEnemy.hp / currentEnemy.maxHp) * 100));
    document.getElementById('enemy-hp-bar').style.width = `${hpPct}%`;
    document.getElementById('enemy-hp-text').textContent = `${formatNum(Math.ceil(currentEnemy.hp))} / ${formatNum(currentEnemy.maxHp)} HP`;
    document.getElementById('enemy-reward-text').textContent = `+${formatNum(currentEnemy.reward)} КР`;

    const reqWaves = getWavesPerLevel();
    document.getElementById('wave-counter').textContent = currentEnemy.isBoss ? "БОСС" : `${state.waveKills} / ${reqWaves}`;

    const autoBtn = document.getElementById('btn-auto-advance');
    if (state.autoAdvance) {
        autoBtn.textContent = "АВТО: ВКЛ";
        autoBtn.className = "ml-1 px-1.5 py-0.5 rounded text-[8px] font-orbitron font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/40";
    } else {
        autoBtn.textContent = "ФАРМ";
        autoBtn.className = "ml-1 px-1.5 py-0.5 rounded text-[8px] font-orbitron font-bold bg-amber-500/20 text-amber-300 border border-amber-400/40";
    }

    document.getElementById('btn-prev-lvl').disabled = state.level <= 1;
    document.getElementById('btn-next-lvl').disabled = state.level >= state.maxLevelReached;
}

function updateAllUI() {
    updateCombatHUD();

    const totalDps = getTotalDps();
    const clickDmg = getClickDamage();
    const b = getCrewBonuses();
    const activeShip = getActiveStarship();

    document.getElementById('ui-credits').textContent = formatNum(Math.floor(state.credits));
    document.getElementById('ui-shards').textContent = formatNum(state.shards);
    document.getElementById('ui-click-dmg').textContent = formatNum(clickDmg);
    document.getElementById('ui-dps').textContent = formatNum(totalDps);
    document.getElementById('ui-research-data').textContent = formatNum(state.researchData);
    document.getElementById('research-tab-cores').textContent = formatNum(state.researchData);

    // Update Active Player Starship Visuals in Combat & Hangar
    document.getElementById('player-combat-ship-svg').innerHTML = getCivilizationShipSVG(activeShip.civId);
    document.getElementById('player-combat-ship-name').textContent = activeShip.name.toUpperCase();

    document.getElementById('ship-card-name').textContent = activeShip.name;
    document.getElementById('ship-card-class').textContent = `${activeShip.shipClass} • ${activeShip.affiliation}`;
    document.getElementById('ship-hangar-svg').innerHTML = getCivilizationShipSVG(activeShip.civId);
    document.getElementById('ship-special-badge').textContent = activeShip.specialAbility;
    document.getElementById('ship-stat-hull').textContent = `${activeShip.maxHull} / ${activeShip.baseShields + (state.modules.shields || 0) * 150}`;
    document.getElementById('ship-stat-crew').textContent = `${activeShip.attackSpeed} с • ${activeShip.crewCapacity} мест`;
    document.getElementById('ship-stat-crit').textContent = `${getCritChance()}% / x${getCritMultiplier().toFixed(2)}`;

    // Crew Synergy Summary Banner
    document.getElementById('crew-synergy-summary').textContent =
        `Общий урон +${Math.round(b.all_damage * 100)}% • Экипаж +${Math.round(b.crew_dps * 100)}% • Крит +${b.crit_chance.toFixed(1)}%`;

    renderCombatCrewList();
    renderTOSCollectionGrid();
    renderGalaxySectors();

    // Update Ship Modules
    SHIP_MODULES_DATA.forEach(m => {
        const lvl = state.modules[m.id] || 0;
        const bulk = calcBulkUpgrade(m.baseCost, m.costMult, lvl, buyMultiplier);

        document.getElementById(`mod-lvl-${m.id}`).textContent = `Ур. ${lvl}`;
        document.getElementById(`mod-btn-label-${m.id}`).textContent = `Улучш. +${bulk.count}`;
        document.getElementById(`mod-cost-${m.id}`).textContent = `${formatNum(bulk.cost)} КР`;
        document.getElementById(`btn-buy-mod-${m.id}`).disabled = state.credits < bulk.cost;
    });

    // Update Research List
    RESEARCH_DATA.forEach(r => {
        const owned = state.research[r.id];
        const btn = document.getElementById(`btn-buy-res-${r.id}`);
        if (owned) {
            btn.textContent = "ИЗУЧЕНО ✓";
            btn.disabled = true;
            btn.className = "shrink-0 w-28 py-2 px-2 rounded-xl font-orbitron font-bold text-[10px] bg-emerald-950 text-emerald-400 border border-emerald-500/40";
        } else {
            const canAfford = r.currency === 'credits' ? state.credits >= r.cost : state.researchData >= r.cost;
            const unit = r.currency === 'credits' ? 'КР' : 'ЯДЕР';
            btn.textContent = `${formatNum(r.cost)} ${unit}`;
            btn.disabled = !canAfford;
            btn.className = "lcars-btn shrink-0 w-28 py-2 px-2 rounded-xl font-orbitron font-bold text-xs bg-gradient-to-b from-purple-400 to-purple-600 text-slate-950 shadow";
        }
    });

    // Update Command / Prestige Tab
    const pendingCores = getPendingPrestigeCores();
    document.getElementById('cmd-total-power').textContent = formatNum(totalDps + clickDmg);
    document.getElementById('prestige-max-lvl').textContent = state.maxLevelReached;
    document.getElementById('prestige-curr-bonus').textContent = `+${state.researchData * 25}% урона`;
    document.getElementById('prestige-claim-amount').textContent = `+${pendingCores} Дата-ядер`;
    document.getElementById('btn-do-prestige').disabled = pendingCores <= 0;

    // Update Settings Telemetry
    document.getElementById('stat-total-kills').textContent = formatNum(state.stats.totalKills);
    document.getElementById('stat-boss-kills').textContent = formatNum(state.stats.bossKills);
    document.getElementById('stat-total-clicks').textContent = formatNum(state.stats.totalClicks);
}

/**
 * ============================================================================
 * CHARACTER RECRUITMENT, DUPLICATE PROMOTION & DETAIL MODALS
 * ============================================================================
 */
window.hireOrUpgradeCharacter = function(charId) {
    const c = TOS_CHARACTERS.find(x => x.id === charId);
    if (!c) return;
    const st = state.characters[charId];

    if (!st.unlocked) {
        if (state.credits >= c.baseCost) {
            state.credits -= c.baseCost;
            st.unlocked = true;
            st.level = 1;
            sfx.playBeep(1040, 0.09);
            showToast(`Персонаж получен в коллекцию: ${c.name}!`);
            updateAllUI();
            saveState();
        }
        return;
    }

    const bulk = calcBulkUpgrade(c.baseCost, c.costMult, st.level, buyMultiplier);
    if (state.credits >= bulk.cost) {
        state.credits -= bulk.cost;
        st.level += bulk.count;
        sfx.playBeep(920, 0.06);
        updateAllUI();
        saveState();
    }
};

function getRecruitPackCost() {
    return Math.round(150 * Math.pow(1.35, state.recruitsCount || 0));
}

window.recruitRandomPack = function() {
    const cost = getRecruitPackCost();
    if (state.credits < cost) return;

    state.credits -= cost;
    state.recruitsCount = (state.recruitsCount || 0) + 1;

    // Weighted pull across TOS characters
    const chosen = TOS_CHARACTERS[Math.floor(Math.random() * TOS_CHARACTERS.length)];
    const st = state.characters[chosen.id];

    sfx.playBeep(1280, 0.12);
    if (!st.unlocked) {
        st.unlocked = true;
        st.level = 1;
        showToast(`НОВЫЙ ОФИЦЕР TOS: ${chosen.name} (${RARITY_TIERS[chosen.rarity].name})!`);
    } else {
        st.duplicates = (st.duplicates || 0) + 1;
        state.shards += 15;
        showToast(`Дубликат ${chosen.name}: конвертировано в +15 Биоданных!`);
    }

    updateAllUI();
    saveState();
};

window.promoteCharacterRank = function(charId) {
    const st = state.characters[charId];
    const c = TOS_CHARACTERS.find(x => x.id === charId);
    if (!st || !st.unlocked) return;

    const shardCost = st.rank * 20;
    if (state.shards >= shardCost) {
        state.shards -= shardCost;
        st.rank += 1;
        sfx.playBeep(1420, 0.12);
        showToast(`Ранг ${c.name} повышен до ★${st.rank}! (+35% DPS)`);
        openCharacterModal(charId);
        updateAllUI();
        saveState();
    }
};

window.openCharacterModal = function(charId) {
    const c = TOS_CHARACTERS.find(x => x.id === charId);
    if (!c) return;
    const st = state.characters[charId];
    const tier = RARITY_TIERS[c.rarity];
    const dps = getCharacterSingleDps(c);
    const shardCost = st.rank * 20;

    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');

    body.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
            <div>
                <span class="text-[9px] font-orbitron uppercase px-1.5 py-0.5 rounded border ${tier.badgeBg}">${tier.name}</span>
                <h3 class="font-orbitron text-sm font-black text-white mt-1">${c.name}</h3>
                <div class="text-xs text-amber-300">${c.title} • Специализация: ${c.specialization}</div>
            </div>
            <button onclick="closeDetailModal()" class="w-7 h-7 rounded-full bg-slate-800 text-slate-300 font-bold hover:text-white">✕</button>
        </div>

        <div class="flex gap-3 items-center bg-slate-950/90 p-2.5 rounded-xl border border-slate-800">
            <div class="w-24 h-24 rounded-lg overflow-hidden shrink-0 ${tier.borderClass}">
                ${getTOSPortraitSVG(c, "w-24 h-24")}
            </div>
            <div class="text-xs space-y-1">
                <div class="text-slate-400 text-[10px]">${c.series}</div>
                <div>Статус: <strong class="font-orbitron text-white">${st.unlocked ? `Уровень ${st.level} (Ранг ★${st.rank})` : 'Не получен'}</strong></div>
                <div>Боевой DPS: <strong class="font-orbitron text-cyan-300">${formatNum(dps)}</strong></div>
                <div>Множитель редкости: <strong class="font-orbitron" style="color:${tier.color}">x${tier.mult}</strong></div>
            </div>
        </div>

        <div class="p-2.5 rounded-lg bg-slate-900/90 border border-cyan-500/30 text-xs space-y-1">
            <div class="text-[10px] font-orbitron text-cyan-400 uppercase">Специализация роли (${c.specialization})</div>
            <p class="text-slate-200">${c.bonusDesc}</p>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed">${c.lore}</p>

        <div class="p-2.5 rounded-lg bg-sky-950/30 border border-sky-500/30 flex items-center justify-between gap-2">
            <div class="text-[11px] text-sky-200">
                <strong>Повышение ранга (Биоданные):</strong><br>
                Каждый ранг ★ навсегда увеличивает DPS и бонус роли персонажа. (У вас: ${state.shards} биоданных)
            </div>
            <button onclick="promoteCharacterRank('${c.id}')" ${(!st.unlocked || state.shards < shardCost) ? 'disabled' : ''} class="lcars-btn shrink-0 px-3 py-2 rounded-lg bg-sky-400 text-slate-950 font-orbitron font-bold text-[10px]">
                РАНГ ★${st.rank + 1}<br>(${shardCost} БИО)
            </button>
        </div>
    `;

    modal.classList.remove('hidden');
};

window.openCivilizationModal = function(civId) {
    const civ = CIVILIZATIONS_DB.find(x => x.id === civId);
    if (!civ) return;

    const modal = document.getElementById('detail-modal');
    const body = document.getElementById('detail-modal-body');

    body.innerHTML = `
        <div class="flex items-center justify-between border-b border-slate-800 pb-2">
            <div class="flex items-center gap-2.5">
                ${getCivilizationEmblemSVG(civ.id, "w-10 h-10")}
                <div>
                    <span class="text-[9px] font-orbitron text-cyan-400 uppercase">${civ.category}</span>
                    <h3 class="font-orbitron text-base font-black text-white">${civ.name}</h3>
                </div>
            </div>
            <button onclick="closeDetailModal()" class="w-7 h-7 rounded-full bg-slate-800 text-slate-300 font-bold hover:text-white">✕</button>
        </div>

        <div class="p-3 rounded-xl bg-slate-950 border border-cyan-500/40 flex flex-col items-center">
            <div class="w-56 h-28 flex items-center justify-center">
                ${getCivilizationShipSVG(civ.id)}
            </div>
            <div class="text-[11px] font-orbitron text-amber-300 mt-1 text-center">${civ.shipName}</div>
        </div>

        <div class="grid grid-cols-2 gap-2 text-xs">
            <div class="bg-slate-900/90 p-2 rounded border border-slate-800">
                <span class="text-[10px] text-slate-400 block">Регион / Квадрант</span>
                <strong class="font-orbitron text-cyan-300">${civ.quadrant}</strong>
            </div>
            <div class="bg-slate-900/90 p-2 rounded border border-slate-800">
                <span class="text-[10px] text-slate-400 block">Дипломатический статус</span>
                <strong class="font-orbitron ${civ.relationColor}">${civ.relation}</strong>
            </div>
        </div>

        <div class="p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs space-y-1">
            <div class="text-[10px] font-orbitron text-amber-400 uppercase">Особенности цивилизации</div>
            <p class="text-slate-200">${civ.traits}</p>
        </div>

        <p class="text-xs text-slate-300 leading-relaxed">${civ.desc}</p>
    `;

    modal.classList.remove('hidden');
};

window.closeDetailModal = function() {
    document.getElementById('detail-modal').classList.add('hidden');
};

/**
 * ============================================================================
 * SHIP, RESEARCH, NAVIGATION & PRESTIGE ACTIONS
 * ============================================================================
 */
window.selectPlayerStarship = function(shipId) {
    if (STARSHIPS_DB.some(s => s.id === shipId)) {
        state.activeShipId = shipId;
        sfx.playBeep(1020, 0.07);
        updateAllUI();
        saveState();
    }
};

window.buyShipModule = function(id) {
    const m = SHIP_MODULES_DATA.find(item => item.id === id);
    if (!m) return;
    const lvl = state.modules[id] || 0;
    const bulk = calcBulkUpgrade(m.baseCost, m.costMult, lvl, buyMultiplier);

    if (state.credits >= bulk.cost) {
        state.credits -= bulk.cost;
        state.modules[id] = lvl + bulk.count;
        sfx.playBeep(1120, 0.07);
        updateAllUI();
        saveState();
    }
};

window.buyResearch = function(id) {
    const r = RESEARCH_DATA.find(item => item.id === id);
    if (!r || state.research[id]) return;

    if (r.currency === 'credits' && state.credits >= r.cost) {
        state.credits -= r.cost;
        state.research[id] = true;
    } else if (r.currency === 'cores' && state.researchData >= r.cost) {
        state.researchData -= r.cost;
        state.research[id] = true;
    } else {
        return;
    }

    sfx.playBeep(1350, 0.12);
    showToast(`Исследование завершено: ${r.name}`);
    updateAllUI();
    saveState();
};

window.jumpToSectorLevel = function(targetLvl) {
    if (targetLvl <= state.maxLevelReached) {
        state.level = targetLvl;
        state.waveKills = 0;
        sfx.playBeep(960, 0.08);
        spawnEnemy(state.level);
        switchTab('combat');
        updateAllUI();
    }
};

function getPendingPrestigeCores() {
    if (state.maxLevelReached < 10) return 0;
    return Math.max(1, Math.floor(Math.pow(state.maxLevelReached - 5, 1.35) / 4));
}

function executePrestige() {
    const cores = getPendingPrestigeCores();
    if (cores <= 0) return;

    state.researchData += cores;
    state.credits = 0;
    state.level = 1;
    state.maxLevelReached = 1;
    state.waveKills = 0;

    // Reset character levels to 1 for unlocked characters, keeping unlock state & ranks!
    TOS_CHARACTERS.forEach(c => {
        if (state.characters[c.id].unlocked) {
            state.characters[c.id].level = 1;
        }
    });
    SHIP_MODULES_DATA.forEach(m => state.modules[m.id] = 0);

    sfx.playExplosion(true);
    showToast(`ВАРП-ПРЫЖОК ЗАВЕРШЁН! +${cores} Дата-ядер! Коллекция TOS сохранена.`);
    spawnEnemy(1);
    updateAllUI();
    saveState();
}

function showToast(msg) {
    const banner = document.getElementById('toast-banner');
    banner.textContent = msg;
    banner.style.opacity = '1';
    clearTimeout(banner._timer);
    banner._timer = setTimeout(() => {
        banner.style.opacity = '0';
    }, 2700);
}

/**
 * ============================================================================
 * TAB NAVIGATION & EVENT LISTENERS
 * ============================================================================
 */
const TAB_TITLES = {
    combat: "БОЕВОЙ МОСТИК (TOS)",
    collection: "АРХИВ: КОЛЛЕКЦИЯ И РАСЫ",
    ship: "КОРАБЛЬ И МОДЕРНИЗАЦИЯ",
    galaxy: "КАРТА СЕКТОРОВ ГАЛАКТИКИ",
    research: "ЛАБОРАТОРИЯ НАУКИ",
    command: "ШТАБ КОМАНДОВАНИЯ"
};

window.switchTab = function(target) {
    sfx.playBeep(980, 0.05);
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.add('hidden'));
    const tabEl = document.getElementById(`tab-${target}`);
    if (tabEl) tabEl.classList.remove('hidden');

    document.getElementById('active-tab-title').textContent = TAB_TITLES[target] || "LCARS";

    // Adjust Combat Zone visibility so Collection/Encyclopedia have comfortable reading room while keeping combat active
    const combatZone = document.getElementById('combat-zone');
    if (target === 'collection' || target === 'galaxy') {
        combatZone.className = "relative z-10 h-[28%] min-h-[185px] max-h-[230px] w-full flex flex-col justify-between p-2 tactical-grid border-b-2 border-amber-500/40 overflow-hidden shrink-0 select-none transition-all duration-200";
    } else {
        combatZone.className = "relative z-10 h-[38%] min-h-[235px] max-h-[340px] w-full flex flex-col justify-between p-2.5 tactical-grid border-b-2 border-amber-500/40 overflow-hidden shrink-0 select-none transition-all duration-200";
    }
    setTimeout(resizeCanvases, 50);

    const multGroup = document.getElementById('buy-mult-group');
    multGroup.style.visibility = (target === 'combat' || target === 'ship') ? 'visible' : 'hidden';

    document.querySelectorAll('.nav-tab-btn').forEach(b => {
        if (b.getAttribute('data-tab') === target) {
            b.className = "nav-tab-btn lcars-btn flex flex-col items-center justify-center py-1.5 px-0.5 rounded-lg bg-amber-500 text-slate-950 font-orbitron font-bold shadow-[0_0_10px_rgba(255,153,0,0.4)]";
        } else {
            b.className = "nav-tab-btn lcars-btn flex flex-col items-center justify-center py-1.5 px-0.5 rounded-lg bg-slate-800/90 text-slate-300 border border-slate-700 font-orbitron font-bold";
        }
    });
};

window.switchCollectionSubtab = function(sub) {
    sfx.playBeep(1080, 0.05);
    const charsView = document.getElementById('coll-view-chars');
    const civsView = document.getElementById('coll-view-civs');
    const btnChars = document.getElementById('subtab-btn-chars');
    const btnCivs = document.getElementById('subtab-btn-civs');

    if (sub === 'chars') {
        charsView.classList.remove('hidden');
        civsView.classList.add('hidden');
        btnChars.className = "lcars-btn py-1.5 rounded-lg font-orbitron font-bold text-[10px] bg-amber-500 text-slate-950 shadow";
        btnCivs.className = "lcars-btn py-1.5 rounded-lg font-orbitron font-bold text-[10px] bg-slate-900 text-cyan-300";
        renderTOSCollectionGrid();
    } else {
        charsView.classList.add('hidden');
        civsView.classList.remove('hidden');
        btnCivs.className = "lcars-btn py-1.5 rounded-lg font-orbitron font-bold text-[10px] bg-cyan-400 text-slate-950 shadow";
        btnChars.className = "lcars-btn py-1.5 rounded-lg font-orbitron font-bold text-[10px] bg-slate-900 text-amber-300";
        renderCivilizationsGrid();
    }
};

function setupEventListeners() {
    // 1. Tap / Click on Enemy Ship
    const hitbox = document.getElementById('enemy-hitbox');
    hitbox.addEventListener('pointerdown', (e) => {
        e.preventDefault();
        dealDamage(getClickDamage(), true, e.clientX, e.clientY);
        updateAllUI();
    });

    // 2. Level Navigation & Auto-Advance Toggle
    document.getElementById('btn-prev-lvl').addEventListener('click', () => {
        if (state.level > 1) {
            state.level--;
            state.waveKills = 0;
            state.autoAdvance = false;
            sfx.playBeep(640, 0.05);
            spawnEnemy(state.level);
            updateAllUI();
        }
    });

    document.getElementById('btn-next-lvl').addEventListener('click', () => {
        if (state.level < state.maxLevelReached) {
            state.level++;
            state.waveKills = 0;
            sfx.playBeep(840, 0.05);
            spawnEnemy(state.level);
            updateAllUI();
        }
    });

    document.getElementById('btn-auto-advance').addEventListener('click', () => {
        state.autoAdvance = !state.autoAdvance;
        sfx.playBeep(760, 0.05);
        updateCombatHUD();
    });

    // 3. Bottom Navigation Tabs
    document.querySelectorAll('.nav-tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchTab(btn.getAttribute('data-tab'));
        });
    });

    // 4. Buy Multiplier Buttons (x1 / x10 / x25 / MAX)
    document.querySelectorAll('.mult-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const val = btn.getAttribute('data-mult');
            buyMultiplier = val === 'MAX' ? 'MAX' : Number(val);
            sfx.playBeep(1050, 0.04);

            document.querySelectorAll('.mult-btn').forEach(b => {
                b.className = "mult-btn px-1.5 py-0.5 rounded text-[9px] font-orbitron font-bold text-slate-400 hover:text-white";
            });
            btn.className = "mult-btn px-1.5 py-0.5 rounded text-[9px] font-orbitron font-bold bg-amber-500 text-slate-950";
            updateAllUI();
        });
    });

    // 5. Prestige Button
    document.getElementById('btn-do-prestige').addEventListener('click', executePrestige);

    // 6. Settings Modal Controls
    const modal = document.getElementById('settings-modal');
    document.getElementById('btn-settings').addEventListener('click', () => {
        sfx.playBeep(800, 0.05);
        updateAllUI();
        modal.classList.remove('hidden');
    });
    document.getElementById('btn-close-settings').addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    const soundBtn = document.getElementById('btn-toggle-sound');
    const syncSoundBtn = () => {
        soundBtn.textContent = sfx.enabled ? "ВКЛ" : "ВЫКЛ";
        soundBtn.className = sfx.enabled
            ? "px-3 py-1 rounded font-orbitron font-bold bg-emerald-500 text-slate-950"
            : "px-3 py-1 rounded font-orbitron font-bold bg-slate-700 text-slate-300";
    };
    syncSoundBtn();

    soundBtn.addEventListener('click', () => {
        sfx.enabled = !sfx.enabled;
        syncSoundBtn();
        saveState();
    });

    document.getElementById('btn-manual-save').addEventListener('click', () => {
        saveState();
        sfx.playBeep(1200, 0.08);
        showToast("Состояние сохранено в Бортовой Компьютер!");
        modal.classList.add('hidden');
    });

    document.getElementById('btn-reset-game').addEventListener('click', () => {
        localStorage.removeItem(SAVE_KEY);
        state = getDefaultState();
        spawnEnemy(1);
        updateAllUI();
        modal.classList.add('hidden');
        showToast("Прогресс сброшен до начального уровня");
    });

    // Prototype Testing Buttons
    document.getElementById('btn-cheat-credits').addEventListener('click', () => {
        state.credits += 5000 * Math.pow(1.15, state.level - 1);
        sfx.playBeep(1400, 0.06);
        updateAllUI();
        showToast("Кредиты Федерации зачислены!");
    });

    document.getElementById('btn-cheat-shards').addEventListener('click', () => {
        state.shards += 50;
        sfx.playBeep(1450, 0.06);
        updateAllUI();
        showToast("+50 Биоданных зачислено!");
    });

    document.getElementById('btn-cheat-skip').addEventListener('click', () => {
        state.level += 5;
        if (state.level > state.maxLevelReached) state.maxLevelReached = state.level;
        state.waveKills = 0;
        spawnEnemy(state.level);
        updateAllUI();
        showToast(`Прыжок на Уровень ${state.level}!`);
    });

    window.addEventListener('resize', resizeCanvases);
}

// Automatic DPS & Boss Countdown Tick
let autoFireVisualCounter = 0;
function startGameLoop() {
    let lastTime = performance.now();

    setInterval(() => {
        const now = performance.now();
        const dt = Math.min(0.5, (now - lastTime) / 1000);
        lastTime = now;

        const dps = getTotalDps();
        if (dps > 0 && currentEnemy.hp > 0) {
            dealDamage(dps * dt, false);

            autoFireVisualCounter += dt;
            if (autoFireVisualCounter >= 0.45) {
                autoFireVisualCounter = 0;
                fireBeamEffect(null, null, false, true);
            }
        }

        if (currentEnemy.isBoss && currentEnemy.hp > 0) {
            currentEnemy.timer -= dt;
            const pct = Math.max(0, (currentEnemy.timer / currentEnemy.maxTimer) * 100);
            document.getElementById('boss-timer-bar').style.width = `${pct}%`;
            document.getElementById('boss-timer-text').textContent = `${Math.max(0, currentEnemy.timer).toFixed(1)} с`;

            if (currentEnemy.timer <= 0) {
                state.autoAdvance = false;
                if (state.level > 1) state.level--;
                showToast("Время вышло! Отступление для перегруппировки (Фарм)");
                spawnEnemy(state.level);
                updateAllUI();
            }
        }
    }, 100);

    setInterval(saveState, 5000);
}

// Initialize Game on Window Load
window.onload = function() {
    loadAndMigrateState();
    buildStaticSectionsDOM();
    renderCivilizationsGrid();
    resizeCanvases();
    spawnEnemy(state.level);
    setupEventListeners();
    updateAllUI();
    renderVisualLoop();
    startGameLoop();
};