let movieWatchlist = [];

function Movies(Name, Year, Seen) {
    this.Name = Name;
    this.Year = Year;
    this.Seen = Seen;
}


function pushToWatchlist (Name, Year, Seen) {
    const movies = new Movies(Name, Year, Seen);
    movieWatchlist.push(movies);
    display()
}



function display() {
    const movieDiv = document.querySelector('.movies');

    let index = 0;
    const removeDivs = document.querySelectorAll('.card');
    for (let i=0; i<removeDivs.length; i++) {
        removeDivs[i].remove();
    }
   

    

    movieWatchlist.forEach(e => {
        
        const card = document.createElement('div');
        card.classList.add('card');
        movieDiv.appendChild(card);
        const removeBtn = document.createElement('button');
        removeBtn.classList.add('removebutton');
        removeBtn.textContent=('Remove')
        
        removeBtn.dataset.linkedArray = index;
        card.appendChild(removeBtn);
        removeBtn.addEventListener('click', ()=> {
            let movieToRemove = removeBtn.dataset.linkedArray;
            movieWatchlist.splice(parseInt(movieToRemove), 1);
            card.remove();
            display();
        })

        const seenBtn = document.createElement('button');
        seenBtn.classList.add('seenbutton');
        seenBtn.textContent=('Change Seen Status');
        seenBtn.dataset.linkedArray = index;
        card.appendChild(seenBtn);



        Movies.prototype = Object.create(Movies.prototype);
        const toggleColor = new Movies();
 if ((movieWatchlist[parseInt(index)].Seen) == "Yes")   {
            card.style.backgroundColor='rgba(87, 255, 185, 0.788)';
               
            } else if ((movieWatchlist[parseInt(index)].Seen) == "No")  {
                card.style.backgroundColor='rgba(197, 19, 28, 0.788)';
                card.style.border='.5rem solid red';
        }

        seenBtn.addEventListener('click', () => {
            let moviesStatusToToggle = seenBtn.dataset.linkedArray;
            Movies.prototype = Object.create(Movies.prototype);
            const toggleMovie = new Movies();

            if ((movieWatchlist[parseInt(moviesStatusToToggle)].Seen) == "Yes")   {
                toggleMovie.Seen = "No";
                movieWatchlist[parseInt(moviesStatusToToggle)].Seen = toggleMovie.Seen;
            } else if ((movieWatchlist[parseInt(moviesStatusToToggle)].Seen) == "No")  {
                toggleMovie.Seen = "Yes";
                movieWatchlist[parseInt(moviesStatusToToggle)].Seen = toggleMovie.Seen;
            }
            display();
        })


        index++;
       

        for (let key in e) {
            console.log(`${key}: ${e[key]}`);
            const paragraph = document.createElement('p');
            paragraph.textContent=(`${key}: ${e[key]}`);
            card.appendChild(paragraph);
        }

    })
}


const submitBtn = document.querySelector('.submitbutton')

submitBtn.addEventListener('click', ()=> {
    const Name = document.querySelector('#Name').value;
    const Year = document.querySelector('#Year').value;
    const Seen = document.querySelector('#Seen').value;

    if (Name=='' || Year == '' | Seen == ''){
        alert("Please fill in the form");
        return;
       
    }

    pushToWatchlist (Name, Year, Seen);
    document.querySelector('.forminput').reset();
})







// display();

// pushToWatchlist('Titanic', '1997', 'No');
// pushToWatchlist('Avatar', '1997', 'No');
// pushToWatchlist('Avatar', '1997', 'No');
// pushToWatchlist('sdd', '1997', 'No');
// pushToWatchlist('Avatar', '1997', 'No');
// pushToWatchlist('sdd', '1997', 'No');
// pushToWatchlist('Avatar', '1997', 'No');
// pushToWatchlist('Avatar', '1997', 'No');
// pushToWatchlist('sdd', '1997', 'No');
// pushToWatchlist('Avatar', '1997', 'No');
// pushToWatchlist('sdd', '1997', 'No');
// // console.log(movieWatchlist);

// // console.log(movieWatchlist[0]['Name']);
