console.log('Lets write JavaScript');
let currentSong = new Audio();
let songs;
let currFolder;

function secondsToMinutesSeconds(seconds) {
    if (isNaN(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(remainingSeconds).padStart(2, '0');

    return `${formattedMinutes}:${formattedSeconds}`;
}

async function getSongs(folder) {
    currFolder = folder;
    let a = await fetch(`/${folder}/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let as = div.getElementsByTagName("a")
    songs = []
    for (let index = 0; index < as.length; index++) {
        const element = as[index];
        if (element.href.endsWith(".mp3")) {
            songs.push(element.href.split(`/${folder}/`)[1])
        }
    }
 


    // Show all the songs in the playlist
    let songUL = document.querySelector(".songList").getElementsByTagName("ul")[0]
    songUL.innerHTML = ""
    for (const song of songs) {
        songUL.innerHTML = songUL.innerHTML + `<li><img class="invert" width="34" src="img/music.svg" alt="">
                            <div class="info">
                                <div> ${song.replaceAll("%20", " ")}</div>
                                <div>Muaaz</div>
                            </div>
                            <div class="playnow">
                                <span>Play Now</span>
                                <img class="invert" src="img/play.svg" alt="">
                            </div> </li>`;
    }

    // Attach an event listener to each song
    Array.from(document.querySelector(".songList").getElementsByTagName("li")).forEach(e => {
        e.addEventListener("click", element => {
            playMusic(e.querySelector(".info").firstElementChild.innerHTML.trim())

        })
    })

    return songs
}

const playMusic = (track, pause = false) => {
    currentSong.src = `/${currFolder}/` + track
    if (!pause) {
        currentSong.play()
        play.src = "img/pause.svg"
    }
    document.querySelector(".songinfo").innerHTML = decodeURI(track)
    document.querySelector(".songtime").innerHTML = "00:00 / 00:00"


}

async function displayAlbums() {
    console.log("displaying albums")
    let a = await fetch(`/songs/`)
    let response = await a.text();
    let div = document.createElement("div")
    div.innerHTML = response;
    let anchors = div.getElementsByTagName("a")
    let cardContainer = document.querySelector(".cardContainer")
    let array = Array.from(anchors)
    for (let index = 0; index < array.length; index) {
        const e = array[index]; 
        if (e.href.includes("/songs") && !e.href.includes(".htaccess")) {
    //         let folder = e.href.split("/").slice(-2)[0]
    //         // Get the metadata of the folder
    //         let a = await fetch(`/songs/Angry_(mood)/info.json`)
    //         let response = await a.json(); 
    //         cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="Angry_(mood)" class="card">
    //         <div class="play">
    //             <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
    //                 xmlns="http://www.w3.org/2000/svg">
    //                 <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
    //                     stroke-linejoin="round" />
    //             </svg>
    //         </div>

    //         <img src="/songs/Angry_(mood)/cover.jpg" alt="">
    //         <h2>${response.title}</h2>
    //         <p>${response.description}</p>
    //     </div>`
    //     }
    // }
   
            let a1 = await fetch(`/songs/Bright_(mood)/info.json`)
            let response1 = await a1.json(); 
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="Bright_(mood)" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/Bright_(mood)/cover.jpg" alt="">
            <h2>${response1.title}</h2>
            <p>${response1.description}</p>
        </div>`

            let a11 = await fetch(`/songs/Angry_(mood)/info.json`)
            let response11 = await a11.json(); 
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="Angry_(mood)" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/Angry_(mood)/cover.jpeg" alt="">
            <h2>${response11.title}</h2>
            <p>${response11.description}</p>
        </div>`
  
            let a2 = await fetch(`/songs/Chill_(mood)/info.json`)
            let response2 = await a2.json(); 
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="Chill_(mood)" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/Chill_(mood)/cover.jpg" alt="">
            <h2>${response2.title}</h2>
            <p>${response2.description}</p>
        </div>`
  
            let a3 = await fetch(`/songs/cs/info.json`)
            let response3 = await a3.json(); 
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="cs" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/cs/cover.jpeg" alt="">
            <h2>${response3.title}</h2>
            <p>${response3.description}</p>
        </div>`
  
            let a4 = await fetch(`/songs/Dark_(mood)/info.json`)
            let response4 = await a4.json(); 
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="Dark_(mood)" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/Dark_(mood)/cover.jpg" alt="">
            <h2>${response4.title}</h2>
            <p>${response4.description}</p>
        </div>`

            let a5 = await fetch(`/songs/Diljit/info.json`)
            let response5 = await a5.json(); 
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="Diljit" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/Diljit/cover.jpeg" alt="">
            <h2>${response5.title}</h2>
            <p>${response5.description}</p>
        </div>`

            let a6 = await fetch(`/songs/Funky_(mood)/info.json`)
            let response6 = await a6.json(); 
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="Funky_(mood)" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/Funky_(mood)/cover.jpg" alt="">
            <h2>${response6.title}</h2>
            <p>${response6.description}</p>
        </div>`

            let a7 = await fetch(`/songs/karanaujla/info.json`)
            let response7 = await a7.json(); 
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="karanaujla" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/karanaujla/cover.jpeg" alt="">
            <h2>${response7.title}</h2>
            <p>${response7.description}</p>
        </div>`
            let a9 = await fetch(`/songs/Uplifting_(mood)/info.json`)
            let response9 = await a9.json(); 
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="Uplifting_(mood)" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/Uplifting_(mood)/cover.jpg" alt="">
            <h2>${response9.title}</h2>
            <p>${response9.description}</p>
        </div>`
            let a8 = await fetch(`/songs/Love_(mood)/info.json`)
            let response8 = await a8.json(); 
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="Love_(mood)" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/Love_(mood)/cover.jpeg" alt="">
            <h2>${response8.title}</h2>
            <p>${response8.description}</p>
        </div>`
            let a10 = await fetch(`/songs/ncs/info.json`)
            let response10 = await a10.json(); 
            cardContainer.innerHTML = cardContainer.innerHTML + ` <div data-folder="ncs" class="card">
            <div class="play">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 20V4L19 12L5 20Z" stroke="#141B34" fill="#000" stroke-width="1.5"
                        stroke-linejoin="round" />
                </svg>
            </div>

            <img src="/songs/ncs/cover.jpeg" alt="">
            <h2>${response10.title}</h2>
            <p>${response10.description}</p>
        </div>`
        }
    }
  

    // Load the playlist whenever card is clicked
    Array.from(document.getElementsByClassName("card")).forEach(e => { 
        e.addEventListener("click", async item => {
            console.log("Fetching Songs")
            songs = await getSongs(`songs/${item.currentTarget.dataset.folder}`)  
            playMusic(songs[0])

        })
    })
}

async function main() {
    // Get the list of all the songs
    await getSongs("songs/ncs")
    playMusic(songs[0], true)

    // Display all the albums on the page
    await displayAlbums()


    // Attach an event listener to play, next and previous
    play.addEventListener("click", () => {
        if (currentSong.paused) {
            currentSong.play()
            play.src = "img/pause.svg"
        }
        else {
            currentSong.pause()
            play.src = "img/play.svg"
        }
    })

    // Listen for timeupdate event
    currentSong.addEventListener("timeupdate", () => {
        document.querySelector(".songtime").innerHTML = `${secondsToMinutesSeconds(currentSong.currentTime)} / ${secondsToMinutesSeconds(currentSong.duration)}`
        document.querySelector(".circle").style.left = (currentSong.currentTime / currentSong.duration) * 100 + "%";
    })

    // Add an event listener to seekbar
    document.querySelector(".seekbar").addEventListener("click", e => {
        let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
        document.querySelector(".circle").style.left = percent + "%";
        currentSong.currentTime = ((currentSong.duration) * percent) / 100
    })

    // Add an event listener for hamburger
    document.querySelector(".hamburger").addEventListener("click", () => {
        document.querySelector(".left").style.left = "0"
    })

    // Add an event listener for close button
    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".left").style.left = "-120%"
    })

    // Add an event listener to previous
    previous.addEventListener("click", () => {
        currentSong.pause()
        console.log("Previous clicked")
        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index - 1) >= 0) {
            playMusic(songs[index - 1])
        }
    })

    // Add an event listener to next
    next.addEventListener("click", () => {
        currentSong.pause()
        console.log("Next clicked")

        let index = songs.indexOf(currentSong.src.split("/").slice(-1)[0])
        if ((index + 1) < songs.length) {
            playMusic(songs[index + 1])
        }
    })

    // Add an event to volume
    document.querySelector(".range").getElementsByTagName("input")[0].addEventListener("change", (e) => {
        console.log("Setting volume to", e.target.value, "/ 100")
        currentSong.volume = parseInt(e.target.value) / 100
        if (currentSong.volume >0){
            document.querySelector(".volume>img").src = document.querySelector(".volume>img").src.replace("mute.svg", "volume.svg")
        }
    })

    // Add event listener to mute the track
    document.querySelector(".volume>img").addEventListener("click", e=>{ 
        if(e.target.src.includes("volume.svg")){
            e.target.src = e.target.src.replace("volume.svg", "mute.svg")
            currentSong.volume = 0;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
        }
        else{
            e.target.src = e.target.src.replace("mute.svg", "volume.svg")
            currentSong.volume = .10;
            document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
        }

    })





}

main() 