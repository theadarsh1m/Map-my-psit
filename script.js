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
            { name: "emp", link: "https://example.com/conference" }
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
            { name: "Open Air Theater", link: "https://example.com/theater" }
        ],
        "Hostels": [
            { name: "Faculty Hostel", link: "https://www.google.com/maps/search/26.451719,+80.191740?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D" },
            { name: "Hostel B", link: "https://example.com/hostelb" },
            { name: "Hostel C", link: "https://example.com/hostelc" },
            { name: "Hostel D", link: "https://example.com/hosteld" },
            { name: "Hostel E", link: "https://example.com/hostele" },
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
