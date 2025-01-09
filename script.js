document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".badge");

    const categories = {
        "Main Building": [
            { name: "AA Block", link: "https://example.com/dean" },
            { name: "R Block", link: "https://example.com/lecturehallA" },
            { name: "Admin Block", link: "https://example.com/conference" },
            { name: "emp", link: "https://example.com/conference" },
        ],
        "Cafe": [
            { name: "Caffe 2004", link: "https://www.google.com/maps/place/26%C2%B027'04.0%22N+80%C2%B011'27.9%22E/@26.451105,80.19109,17z/data=!3m1!4b1!4m4!3m3!8m2!3d26.451105!4d80.19109?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D" },
            { name: "CHE Canteen", link: "https://example.com/checanteen" },
            { name: "Nescafe", link: "https://www.google.com/maps/place/26%C2%B027'03.5%22N+80%C2%B011'27.0%22E/@26.45096,80.19084,17z/data=!3m1!4b1!4m4!3m3!8m2!3d26.45096!4d80.19084?entry=ttu&g_ep=EgoyMDI1MDEwNi4xIKXMDSoASAFQAw%3D%3D" },
            { name: "Samocha", link: "https://www.google.com/maps/search/26.450727,+80.190624?coh=219680&entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D" },
            { name: "Brew", link: "https://www.google.com/maps/search/26.450810,+80.190730?entry=tts&g_ep=EgoyMDI1MDEwNi4xIPu8ASoASAFQAw%3D%3D" },
        ],
        "Grounds": [
            { name: "Cricket Ground", link: "https://example.com/cricketground" },
            { name: "Football Field", link: "https://example.com/footballfield" },
            { name: "Basketball Court", link: "https://example.com/basketballcourt" },
            { name: "Tennis Court", link: "https://example.com/tennis" },
            { name: "Open Air Theater", link: "https://example.com/theater" },
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
});
