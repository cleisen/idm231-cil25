const submitButton = document.querySelector(".js-submit-button");
const seasonDisplay = document.querySelector("[season-content-area");
const dateDisplay = document.querySelector("[date-content-area]");

submitButton.addEventListener('click',function(event){

    event.preventDefault();

    const dateInput = document.querySelector(".js-date-input");

    const d = dateInput.value;
    const parsedYear = d.slice(0,4);

    const properDateString = (d.slice(5) + '-' + parsedYear).replace(/-/g, '/');
    let birthDate = new Date(dateInput.value);

    let month = birthDate.getMonth() + 1;
    let day = birthDate.getDate() + 1;
    let year = birthDate.getFullYear();
    
    getSeason(month, day, year)
});

function getSeason(month, day, year) {
    const seasons = ['winter', 'spring', 'summer', 'fall'];
    let userSeason;
    let x = 0; //default 0 = winter

    //SPRING: 3/22 - 6/21
    if (month >= 3 && month <= 6) {
        x = 1;

        //check for season cutoffs
        if (month == 3 && day < 22) {
            x--;
        }
        else if (month == 6 && day > 21) {
            x++;
        }
    }

    //SUMMER: 6/22 - 9/21
    else if (month >= 6 && month <= 9) {
        x = 2;

        //check for season cutoffs
        if (month == 6 && day < 22) {
            x--;
        }
        else if (month == 9 & day > 21) {
            x++;
        }
    }

    //FALL: 9/22 - 12/21
    else if (month >= 9 && month <= 12) {
        x = 3;

        if (month == 9 && day < 22) {
            x--;
        }
        else if (month == 12 && day > 21) {
            x = 0;
        }
    }


    userSeason = seasons[x];

    dateDisplay.innerHTML = `Birthday: ${month}/${day}/${year}`;
    seasonDisplay.innerHTML = `Season: ${userSeason}`;
}