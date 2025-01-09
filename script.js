document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".badge");
    const searchInput = document.getElementById("lib-search-input");
    const searchResults = document.getElementById("lib-search-results");

    const categories = {
        "Main Building": [
            { name: "AA Block", link: "https://example.com/dean" },
            { name: "R Block", link: "https://example.com/lecturehallA" },
            { name: "Admin Block", link: "https://example.com/conference" },
            { name: "J Block", link: "https://www.google.com/maps/place/J+Block/@26.4510891,80.191887,404m/data=!3m2!1e3!4b1!4m6!3m5!1s0x399c49f96b7a05b3:0xd96a3a400bfc883b!8m2!3d26.4510891!4d80.191887!16s%2Fg%2F11g9gp0h8y?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D" },
            { name: "G Block (Pharmacy)", link: "https://www.google.com/maps/place/PSIT-Pranveer+Singh+Institute+of+Technology+-+Pharmacy/data=!4m7!3m6!1s0x399c4974db6954d7:0x84c002a6e8d27972!8m2!3d26.4503684!4d80.1909626!16s%2Fg%2F11t85_5v04!19sChIJ11Rp23RJnDkRcnnS6KYCwIQ?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D" },
            { name: "F Block", link: "https://example.https://www.google.com/maps/place/F-Block+(Mechanical+Engg.)/data=!4m7!3m6!1s0x399c493b4ae2697d:0xb5394e9738b016b2!8m2!3d26.4501596!4d80.1914181!16s%2Fg%2F11qqksvc96!19sChIJfWniSjtJnDkRshawOJdOObU?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D/conference" },
            { name: "E Block", link: "https://example.com/https://www.google.com/maps/place/26%C2%B027'00.4%22N+80%C2%B011'28.3%22E/@26.45012,80.191196,807m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d26.45012!4d80.191196?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D" },
            { name: "D Block", link: "https://example.https://www.google.com/maps/search/26.449947,+80.191663?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D/conference" },
            { name: "C Block", link: "https://https://www.google.com/maps/place/C-Block(Computer+Science+and+Engg.)/data=!4m7!3m6!1s0x399c49f9a133c863:0x20a9465abb12ee86!8m2!3d26.449809!4d80.1915039!16s%2Fg%2F11gbxgtjvw!19sChIJY8gzoflJnDkRhu4Su1pGqSA?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D.com/conference" },
            { name: "A Block", link: "https://example.https://www.google.com/maps/search/26.449562,+80.191668?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D/conference" },
            { name: "B Block", link: "https://https://www.google.com/maps/place/B+Block/@26.4498858,80.1909852,333m/data=!3m1!1e3!4m6!3m5!1s0x399c4930f61e06dd:0x558345a3cb5eb47f!8m2!3d26.4497075!4d80.1920156!16s%2Fg%2F11kq5lnrfn?entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D.com/conference" },
            { name: "PSIT Auditoriam", link: "https://exhttps://www.google.com/maps/place/PSIT+Auditorium/@26.4504929,80.1922377,202m/data=!3m1!1e3!4m6!3m5!1s0x399c49f90da0047d:0xb7c616aa61ef3f49!8m2!3d26.4506357!4d80.1915147!16s%2Fg%2F11c6_zq7q6?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3Dample.com/conference" },
            { name: "Q Block", link: "https://examhttps://www.google.com/maps/search/26.450206,+80.192643?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoJLDEwMjExMjM0SAFQAw%3D%3Dple.com/conference" },
            { name: "P Block", link: "https://https://www.google.com/maps/place/26%C2%B027'01.5%22N+80%C2%B011'34.1%22E/@26.450428,80.192798,807m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d26.450428!4d80.192798?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D.com/conference" },
            { name: "M Block", link: "https://www.google.com/maps/search/26.450763,+80.192123?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoJLDEwMjExMjM0SAFQAw%3D%3Dnference" },
            { name: "L Block", link: "https://www.google.com/maps/search/26.450763,+80.192123?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoJLDEwMjExMjM0SAFQAw%3D%3D" },
            { name: "K Block", link: "https://www.google.com/maps/search/26.450949,+80.192300?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoJLDEwMjExMjM0SAFQAw%3D%3D" },
            { name: "N Block", link: "https://www.google.com/maps/search/26.450487,+80.192399?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoJLDEwMjExMjM0SAFQAw%3D%3D" },
            { name: "other", link: "https://example.com/conference" }
        ],
        "Cafe": [
            { name: "Caffe 2004", link: "https://www.google.com/maps/place/26%C2%B027'04.0%22N+80%C2%B011'27.9%22E/@26.451105,80.19109,17z/data=!3m1!4b1!4m4!3m3!8m2!3d26.451105!4d80.19109?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D" },
            { name: "CHE Canteen", link: "https://www.google.com/maps/place/F53V%2B4MC,+Bhautipratappur,+Uttar+Pradesh+209301/@26.4525586,80.1904892,807m/data=!3m1!1e3!4m6!3m5!1s0x399c49fbf6a88811:0xa5bc5f769e03a194!8m2!3d26.4527918!4d80.1941429!16s%2Fg%2F11nnpxnf3r?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D" },
            { name: "Nescafe", link: "https://www.google.com/maps/place/26%C2%B027'03.5%22N+80%C2%B011'27.0%22E/@26.45096,80.19084,17z/data=!3m1!4b1!4m4!3m3!8m2!3d26.45096!4d80.19084?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D" },
            { name: "Samocha", link: "https://www.google.com/maps/search/26.450727,+80.190624?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D" },
            { name: "Brew", link: "https://www.google.com/maps/search/26.450810,+80.190730?entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D" },
        ],
        "Grounds": [
            { name: "Central Ground", link: "https://www.google.com/maps/search/26.450116,+80.192126?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D" },
            { name: "Girls Open Gym", link: "https://www.google.com/maps/search/26.450634,+80.193221?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D" },
            { name: "Boys Basketball Court", link: "https://www.google.com/maps/place/Badminton+Court/@26.4507767,80.1893057,631m/data=!3m1!1e3!4m6!3m5!1s0x399c490566f78791:0x4576f6dbfca498ad!8m2!3d26.4502773!4d80.1891138!16s%2Fg%2F11m0qgc2mh?entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoJLDEwMjExMjM0SAFQAw%3D%3D" },
            { name: "Girls Basketball Court", link: "https://www.google.com/maps/search/26.451622,+80.192298?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D" },
            { name: "Other", link: "https://example.com/theater" }
        ],
        "Hostels": [
            { name: "Faculty Hostel", link: "https://www.google.com/maps/search/26.451719,+80.191740?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D" },
            { name: "Hostel A", link: "https://www.google.com/maps/search/26.451031,+80.190480?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D" },
            { name: "Hostel B", link: "https://www.google.com/maps/search/26.450620,+80.189872?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D" },
            { name: "Hostel C", link: "https://mhttps://www.google.com/maps/search/26.450263,+80.189362?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3Daps.https://www.google.com/maps/search/26.449831,+80.188814?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D.goo.gl/XYbfWdgc3T4NCgcv5" },
            { name: "Hostel C", link: "https://mhttps://www.google.com/maps/search/26.450263,+80.189362?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3Daps.https://www.google.com/maps/search/26.449831,+80.188814?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D.goo.gl/XYbfWdgc3T4NCgcv5" },
            { name: "Girls Hostel", link: "https://www.google.com/maps/search/26.451622,+80.192298?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D" }
        ],
    };

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const category = button.previousElementSibling.textContent.trim();

            let nameContainer = button.nextElementSibling;
            if (!nameContainer || !nameContainer.classList.contains("name-container")) {
                nameContainer = document.createElement("div");
                nameContainer.classList.add("name-container");
                button.parentNode.appendChild(nameContainer);
            }

            // Clear existing content
            nameContainer.innerHTML = "";

            // Populate content dynamically
            const names = categories[category] || [];
            names.forEach(({ name, link }) => {
                const nameItem = document.createElement("a");
                nameItem.textContent = name;
                nameItem.href = link;
                nameItem.target = "_blank";
                nameContainer.appendChild(nameItem);
            });

            // Toggle visibility and scroll behavior
            if (nameContainer.style.display === "none" || nameContainer.style.display === "") {
                nameContainer.style.display = "block";
                nameContainer.scrollIntoView({ behavior: "smooth", block: "center" });
            } else {
                nameContainer.style.display = "none";
            }
        });
    });

    // Search functionality
    searchInput.addEventListener("input", () => {
        const query = searchInput.value.trim().toLowerCase();
        searchResults.innerHTML = "";

        if (query === "") {
            searchResults.style.display = "none";
            return;
        }

        let matches = [];
        for (const [category, locations] of Object.entries(categories)) {
            locations.forEach(({ name, link }) => {
                if (name.toLowerCase().includes(query)) {
                    matches.push({ name, link, category });
                }
            });
        }

        if (matches.length > 0) {
            matches.forEach(({ name, link, category }) => {
                const resultItem = document.createElement("a");
                resultItem.textContent = `${name} (${category})`;
                resultItem.href = link;
                resultItem.target = "_blank";
                searchResults.appendChild(resultItem);
            });
            searchResults.style.display = "block";
        } else {
            searchResults.style.display = "none";
        }
    });
});
