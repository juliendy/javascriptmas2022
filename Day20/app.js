import podcasts from "./data.js";

const main = document.body.querySelector("main");

function getFreePodcasts(data) {
    return data
        .filter((podcast) => !podcast.paid || podcast.paid)
        .map(({ title, rating, paid }) => ({ title, rating, paid }));
}

const podcastsList = getFreePodcasts(podcasts);

for (const podcast of podcastsList) {
    const podcastElement = document.createElement("div");
    podcastElement.classList.add("podcast");
    podcastElement.innerHTML = `
    <h2>${podcast.title}</h2>
    <p>Duration: ${podcast.duration}</p>
    <p>Tags: ${podcast.tags}</p>
    <p>Hosts: ${podcast.hosts}</p>
    <p>Rating: ${podcast.rating}</p>
    <p>Genre: ${podcast.genre}</p>
    <p>Paid: ${podcast.paid ? "Yes" : "No"}</p>`;

    document.querySelector(".podcasts-container").appendChild(podcastElement);
}

console.log(getFreePodcasts(podcasts));
