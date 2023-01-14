var localScore = JSON.parse(localStorage.getItem('scores'))
var displayScore = document.querySelector('.card')

if (localScore === null) {
    displayScore.textContent = "No highscores"
} else {
    displayScore.textContent = ''
    
    for (var i = 0; i < localScore.length; i++) {
        var n = document.createElement('p')
        n.textContent = 'Name: ' + localScore[i].name

        var s = document.createElement('p')
        s.textContent = 'score: ' + localScore[i].score

        displayScore.append(n, s)
    }
}

