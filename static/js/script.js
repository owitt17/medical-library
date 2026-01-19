const meds = [
    {
        name: "Amoxicillin",
        class: "Penicillin antibiotic",
        use: "ENT/respiratory infections",
        route: "Oral",
        onset: "Hours",
        duration: "6-12h",
        caution: "Rash, allergy risk",
        image: "../static/images/amoxicillin.jpg"
    },
    {
        name: "Azithromycin",
        class: "Macrolide antibiotic",
        use: "Atypical pneumonia",
        route: "Oral",
        onset: "Hours",
        duration: "Long",
        caution: "QT prolongation",
        image: "../static/images/azithromycin.webp"
    },
    {
        name: "Cephalexin",
        class: "Cephalosporin",
        use: "Skin/UTI",
        route: "Oral",
        onset: "Hours",
        duration: "6-8h",
        caution: "GI upset",
        image: "../static/images/cephalexin.webp"
    },
    {
        name: "Ibuprofen",
        class: "NSAID",
        use: "Pain, fever",
        route: "Oral",
        onset: "30-60m",
        duration: "6-8h",
        caution: "GI/renal risk",
        image: "../static/images/ibuprofen.jpeg"
    },
    {
        name: "Acetaminophen",
        class: "Analgesic",
        use: "Pain, fever",
        route: "Oral",
        onset: "30-60m",
        duration: "4-6h",
        caution: "Liver toxicity",
        image: "../static/images/acetaminophen.jpg"
    },
    {
        name: "Naproxen",
        class: "NSAID",
        use: "Pain, inflammation",
        route: "Oral",
        onset: "1-2h",
        duration: "12h",
        caution: "GI/renal risk",
        image: "../static/images/naproxen.png"
    },
    {
        name: "Lisinopril",
        class: "ACE inhibitor",
        use: "HTN, heart failure",
        route: "Oral",
        onset: "Hours",
        duration: "24h",
        caution: "Cough, hyperK",
        image: "../static/images/lisinopril.jpeg"
    },
    {
        name: "Losartan",
        class: "ARB",
        use: "HTN, kidney protection",
        route: "Oral",
        onset: "Hours",
        duration: "24h",
        caution: "HyperK",
        image: "../static/images/losartan.jpg"
    },
    {
        name: "Metformin",
        class: "Biguanide",
        use: "Type 2 diabetes",
        route: "Oral",
        onset: "Days",
        duration: "8-12h",
        caution: "GI upset",
        image: "../static/images/metformin.jpeg"
    },
    {
        name: "Insulin glargine",
        class: "Basal insulin",
        use: "Diabetes control",
        route: "SubQ",
        onset: "Hours",
        duration: "24h",
        caution: "Hypoglycemia",
        image: "../static/images/insulin-glargine.webp"
    },
    {
        name: "Atorvastatin",
        class: "Statin",
        use: "Lower LDL",
        route: "Oral",
        onset: "Days",
        duration: "24h",
        caution: "Myopathy risk",
        image: "../static/images/atorvastatin.jpg"
    },
    {
        name: "Omeprazole",
        class: "PPI",
        use: "GERD, ulcer",
        route: "Oral",
        onset: "Hours",
        duration: "24h",
        caution: "Low Mg/B12",
        image: "../static/images/omeprazole.jpeg"
    },
    {
        name: "Albuterol",
        class: "Beta-2 agonist",
        use: "Bronchospasm",
        route: "Inhaled",
        onset: "Minutes",
        duration: "4-6h",
        caution: "Tremor, tachy",
        image: "../static/images/albuterol.jpg"
    },
    {
        name: "Cetirizine",
        class: "Antihistamine",
        use: "Allergic rhinitis",
        route: "Oral",
        onset: "1h",
        duration: "24h",
        caution: "Drowsiness",
        image: "../static/images/cetirizine.jpg"
    },
    {
        name: "Diphenhydramine",
        class: "Antihistamine",
        use: "Allergy, sleep",
        route: "Oral",
        onset: "30-60m",
        duration: "4-6h",
        caution: "Anticholinergic",
        image: "../static/images/diphenhydramine.jpg"
    },
    {
        name: "Sertraline",
        class: "SSRI",
        use: "Depression, anxiety",
        route: "Oral",
        onset: "Weeks",
        duration: "24h",
        caution: "GI, sleep changes",
        image: "../static/images/sertraline.jpg"
    },
    {
        name: "Fluoxetine",
        class: "SSRI",
        use: "Depression",
        route: "Oral",
        onset: "Weeks",
        duration: "Long",
        caution: "Activation, GI",
        image: "../static/images/fluoxetine.png"
    },
    {
        name: "Warfarin",
        class: "Anticoagulant",
        use: "Thromboembolism",
        route: "Oral",
        onset: "Days",
        duration: "2-5d",
        caution: "Bleeding risk",
        image: "../static/images/warfarin.jpeg"
    },
    {
        name: "Aspirin",
        class: "Antiplatelet",
        use: "MI/stroke prevention",
        route: "Oral",
        onset: "Minutes",
        duration: "Days",
        caution: "Bleeding, GI",
        image: "../static/images/aspirin.jpeg"
    },
    {
        name: "Clopidogrel",
        class: "Antiplatelet",
        use: "Stent protection",
        route: "Oral",
        onset: "Hours",
        duration: "Days",
        caution: "Bleeding risk",
        image: "../static/images/clopidogrel.jpg"
    }
];

const grid = document.getElementById("med-grid");
const searchInput = document.getElementById("search");

const renderMeds = (items) => {
    grid.innerHTML = items
        .map((med) => {
            return `
            <article class="med-card">
                <div class="med-header">
                    <h2 class="med-name">${med.name}</h2>
                    <span class="med-class">${med.class}</span>
                </div>
                <div class="med-image">
                    <img src="${med.image}" alt="${med.name}">
                </div>
                <div class="chips">
                    <span class="chip">Use: ${med.use}</span>
                    <span class="chip">Duration: ${med.duration}</span>
                </div>
                <p class="note">Key note: ${med.caution}.</p>
            </article>
        `;
        })
        .join("");
};

const handleSearch = () => {
    const query = searchInput.value.trim().toLowerCase();
    const filtered = meds.filter((med) => {
        const blob = `${med.name} ${med.class} ${med.use} ${med.route}`.toLowerCase();
        return blob.includes(query);
    });
    renderMeds(filtered);
};

renderMeds(meds);
searchInput.addEventListener("input", handleSearch);
