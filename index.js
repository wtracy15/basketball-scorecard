let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")

function subtractOneHome(){
    if (homeScore != 0){
        homeScore -= 1
        homeScoreEl.textContent = homeScore
    }
}

function addOneHome(){
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function addTwoHome(){
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function addThreeHome(){
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function subtractOneGuest(){
    if (guestScore != 0){
        guestScore -= 1
        guestScoreEl.textContent = guestScore
    }
}

function addOneGuest(){
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function addTwoGuest(){
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function addThreeGuest(){
    guestScore += 3
    guestScoreEl.textContent = guestScore
}