function myHelp() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}

// Array of buttons - [button1, button2, button3]
const soundButtons = document.querySelectorAll(".font__buttons");
const audioPlayer = document.querySelector("#speakers");

// Loop through all buttons
soundButtons.forEach(function (individualButtonElement) {
  // Get the value of the "data-audio-file" attribute on this button
  const audioTrackSource = individualButtonElement.getAttribute("data-audio-file");
  // Add click event listener to each button
  individualButtonElement.addEventListener('click', function () {
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
    audioPlayer.src = `./sounds/${audioTrackSource}`
    audioPlayer.play();
  });
  individualButtonElement.addEventListener('userSubmit', function () {
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
    audioPlayer.src = `./sounds/${audioTrackSource}`
    audioPlayer.play();
  });
});

// Button Declares

const originalBtn =        document.querySelector(".capricorn");
const bakedBtn =        document.querySelector(".aquarius");
const kettlecookedBtn = document.querySelector(".pisces");
const sandpBtn =     document.querySelector(".aries");
const lsaltedBtn =      document.querySelector(".taurus");
const sandvBtn =        document.querySelector(".gemini");
const bbqBtn =          document.querySelector(".cancer");
const scandoBtn =       document.querySelector(".leo");
const dillpickleBtn =   document.querySelector(".virgo");
const candscBtn =       document.querySelector(".libra");
const flaminhotBtn =    document.querySelector(".scorpio");
const chilelimonBtn =   document.querySelector(".sagittarius");


// // Sound Declares

// const originalObj =     document.getElementById('dj');
// const lsaltedObj =      document.getElementById('shooting-stars');
// const sandvObj =        document.getElementById('correct');
// const bbqObj =          document.getElementById('crickets');
// const scandoObj =       document.getElementById('ding');
// const dillpickleObj =   document.getElementById('elevator');
// const candscObj =       document.getElementById('knocking');
// const flaminhotObj =    document.getElementById('pink-panther');
// const chilelimonObj =   document.getElementById('sombrero');
// const sandpObj =        document.getElementById('spongebob-fail');
// const bakedObj =        document.getElementById('teleport');
// const kettlecookedObj = document.getElementById('lil-song');

// Button Functionality

originalBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Cap";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
lsaltedBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Lib";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
sandvBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Gem";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
bbqBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Leo";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
scandoBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Pis";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
dillpickleBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Can";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
candscBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Sco";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
flaminhotBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Ari";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
chilelimonBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Vir";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
sandpBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Aqu";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
bakedBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Sag";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
kettlecookedBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Tau";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});

// Sound Control

// const speakers = document.getElementById('speakers');

// function stopAllAudio() {
//   originalObj.pause();
//   originalObj.currentTime = 0;
// }

// Calendar Input Code

const userSubmitObj = document.getElementById('userSubmit');

userSubmitObj.addEventListener('click', function () {
  console.log('User submit button clicked');

  // Get the user's date and extract the month of year and day of month
  const userBday = new Date(document.getElementById('birthday').value);

  // Figure out the zodiac sign based on month of year and day of month
  let whichMonth = userBday.getUTCMonth();
  whichMonth++;
  console.log('whichMonth is: ' + whichMonth);
  const whichDayOfMonth = userBday.getUTCDate();
  console.log('whichDayOfMonth is: ' + whichDayOfMonth);

  // Display custom image based on zodiac sign
  let AstroSign = "";

  if ((whichMonth == 12 && whichDayOfMonth >= 22) || (whichMonth == 1 && whichDayOfMonth <= 19)) {
    AstroSign = "Cap";
  } else if ((whichMonth == 11 && whichDayOfMonth >= 22) || (whichMonth == 12 && whichDayOfMonth <= 21)) {
    AstroSign = "Sag";
  } else if ((whichMonth == 10 && whichDayOfMonth >= 24) || (whichMonth == 11 && whichDayOfMonth <= 21)) {
    AstroSign = "Sco";
  } else if ((whichMonth == 9 && whichDayOfMonth >= 23) || (whichMonth == 10 && whichDayOfMonth <= 23)) {
    AstroSign = "Lib";
  } else if ((whichMonth == 8 && whichDayOfMonth >= 23) || (whichMonth == 9 && whichDayOfMonth <= 22)) {
    AstroSign = "Vir";
  } else if ((whichMonth == 7 && whichDayOfMonth >= 23) || (whichMonth == 8 && whichDayOfMonth <= 22)) {
    AstroSign = "Leo";
  } else if ((whichMonth == 6 && whichDayOfMonth >= 22) || (whichMonth == 7 && whichDayOfMonth <= 22)) {
    AstroSign = "Can";
  } else if ((whichMonth == 5 && whichDayOfMonth >= 21) || (whichMonth == 6 && whichDayOfMonth <= 21)) {
    AstroSign = "Gem";
  } else if ((whichMonth == 4 && whichDayOfMonth >= 20) || (whichMonth == 5 && whichDayOfMonth <= 20)) {
    AstroSign = "Tau";
  } else if ((whichMonth == 3 && whichDayOfMonth >= 21) || (whichMonth == 4 && whichDayOfMonth <= 19)) {
    AstroSign = "Ari";
  } else if ((whichMonth == 2 && whichDayOfMonth >= 19) || (whichMonth == 3 && whichDayOfMonth <= 20)) {
    AstroSign = "Pis";
  } else if ((whichMonth == 1 && whichDayOfMonth >= 20) || (whichMonth == 2 && whichDayOfMonth <= 18)) {
    AstroSign = "Aqu";
  }

  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});

// userPicked function

function userPicked(whichOne) {
  console.log('userPicked called: ' + whichOne);
  switch (whichOne) {
    case 'Cap':
      zTitleObj.innerHTML = 'Times New Roman';
      zDateRangeObj.innerHTML = 'December 22nd to Januard 19th';
      zMoreInfoObj.innerHTML = '<p>Just like this classic font, you do not want to be admired, but you do want to be respected. You are an achievement junkie that always ends up taking the lead.</p>'
      modal.hidden = !modal.hidden;
      break;
      case 'Lib':
        zTitleObj.innerHTML = 'Relation Bold';
        zDateRangeObj.innerHTML = 'September 23rd to October 22nd';
        zMoreInfoObj.innerHTML = '<p>Do you tend to hate being alone? Well so does this font, as you can tell by its very clingy and close together letters. This font is also similar to your traits in the way that you seem to be simultaneously extroverted and introverted.</p>'
        modal.hidden = !modal.hidden;
        break;
      case 'Gem':
        zTitleObj.innerHTML = 'Satisfy';
        zDateRangeObj.innerHTML = 'May 21st to June 20th';
        zMoreInfoObj.innerHTML = '<p>Sometimes a little sour&comma; sometimes a little salty&comma; but beloved by all. You&apos;re an international favorite who&apos;s kinda crazy and seems to show up at every party. You smell really bad on hot days though.</p>'
        modal.hidden = !modal.hidden;
        break;
      case 'Leo':
        zTitleObj.innerHTML = 'Bely Display';
        zDateRangeObj.innerHTML = 'July 23rd to August 22nd';
        zMoreInfoObj.innerHTML = '<p>You&apos;re the dad friend. Slappin&apos; those meats down on the grill with an ice cold brew in your hand&comma; talking about 80s surfer rock or telling innaproriately timed jokes... I&apos;m playing real hard into the &apos;dad&apos; thing with this one&comma; huh&quest;</p>'
        modal.hidden = !modal.hidden;
        break;
      case 'Pis':
        zTitleObj.innerHTML = 'Halyard Display';
        zDateRangeObj.innerHTML = 'February 19th to March 20th';
        zMoreInfoObj.innerHTML = '<p>You&apos;re the best of both worlds. Would you eat sour cream by itself&quest; No. Onions by themselves&quest; I hope not. But mix them together and some strange alchemical reaction happens that makes them delicious. Uh&comma; you&apos;re like the personality version of that.</p>'
        modal.hidden = !modal.hidden;
        break;
      case 'Can':
        zTitleObj.innerHTML = 'P22 Brass Script Pro';
        zDateRangeObj.innerHTML = 'June 21st to July 22nd';
        zMoreInfoObj.innerHTML = '<p>Alright&comma; look&comma; calm down. Dill Pickle isn&apos;t THAT bad. I mean&comma; I wouldn&apos;t eat them&comma; but I know people who do&excl; And that&apos;s an honor in and of itself&comma; you know&comma; since people love to be the thing no one knows about. You&apos;re like a hipster potato&comma; which sounds like someone&apos;s Instagram username from 2010&comma; but trust me it&apos;s good. You&apos;re ahead of the curve&excl;</p>'
        modal.hidden = !modal.hidden;
        break;
      case 'Sco':
        zTitleObj.innerHTML = 'Manofa Bold';
        zDateRangeObj.innerHTML = 'October 23rd to November 21st';
        zMoreInfoObj.innerHTML = '<p>You might be a little <i>cheesy</i> sometimes&comma; but your company never gets <i>sour</i>.<br>And&comma; uh&comma; that&apos;s it. That&apos;s the description.</p>'
        modal.hidden = !modal.hidden;
        break;
      case 'Ari':
        zTitleObj.innerHTML = 'Marco Bold';
        zDateRangeObj.innerHTML = 'March 21st to April 19th';
        zMoreInfoObj.innerHTML = '<p>The spicy member of any friend group; you&apos;ve got the heat&comma; you never back down from a challenge&comma; and you make my sensitive Irish stomach go into conniptions.</p>'
        modal.hidden = !modal.hidden;
        break;
      case 'Vir':
        zTitleObj.innerHTML = 'Novecento Sans';
        zDateRangeObj.innerHTML = 'August 23rd to September 22nd';
        zMoreInfoObj.innerHTML = '<p>Sour and spicy&comma; the ultimate combo. You&apos;ve got a zing to your smile and the spice of life in your eyes. You also have 160 calories per 1 oz &lpar;28g&sol;About 15 chips&rpar;. I am on the nutrition facts page.</p>'
        modal.hidden = !modal.hidden;
        break;
      case 'Aqu':
        zTitleObj.innerHTML = 'Eckmannpsych';
        zDateRangeObj.innerHTML = 'January 20th to February 18th';
        zMoreInfoObj.innerHTML = '<p>My personal favorite. You can&apos;t go wrong with a good old bag of gas station salt and pepper potato chips. Reminds me of summer days heading to the park to do God knows what on a playground for five hours. I guess I&apos;d say you&apos;re a nostalgic kind of person&comma; and no I won&apos;t expand further on that.</p>'
        modal.hidden = !modal.hidden;
        break;
      case 'Sag':
        zTitleObj.innerHTML = 'Bree Oblique';
        zDateRangeObj.innerHTML = 'November 22nd to December 21st';
        zMoreInfoObj.innerHTML = '<p>The healthiest of all the flavors&comma; you&apos;re the type of person to go on a keto diet but not be obnoxious about it. To make strange dips with weird vegetables that always seem to taste good. You&apos;ve got style and taste&comma; but you could also use some salt.</p>'
        modal.hidden = !modal.hidden;
        break;
      case 'Tau':
        zTitleObj.innerHTML = 'Fino';
        zDateRangeObj.innerHTML = 'April 20th to May 20th';
        zMoreInfoObj.innerHTML = '<p>You&apos;ve got that signature crunch to your personality. What does that mean&comma; you ask&quest; I do not know.</p>'
        modal.hidden = !modal.hidden;
        break;
  }
}

// Modal Controls

const modal = document.getElementById('modal');
const closeModalObj = document.getElementById('btn-modal-close');

closeModalObj.addEventListener('click', function(){
  modal.hidden = !modal.hidden;
  // stopAllAudio();
});


// Link modal element/objects from DOM tree to JS

const zTitleObj = document.getElementById('zTitle');
const zDateRangeObj = document.getElementById('zDateRange');
const zMoreInfoObj = document.getElementById('zMoreInfo');
