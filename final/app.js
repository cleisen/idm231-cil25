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
});
 
// Button Declares

const timesBtn =        document.querySelector(".capricorn");
const eckBtn =        document.querySelector(".aquarius");
const halyBtn = document.querySelector(".pisces");
const marcoBtn =     document.querySelector(".aries");
const finoBtn =      document.querySelector(".taurus");
const satisfyBtn =        document.querySelector(".gemini");
const brassBtn =          document.querySelector(".cancer");
const belyBtn =       document.querySelector(".leo");
const noveBtn =   document.querySelector(".virgo");
const relationBtn =       document.querySelector(".libra");
const manofaBtn =    document.querySelector(".scorpio");
const breeBtn =   document.querySelector(".sagittarius");


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

timesBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Cap";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
eckBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Aqu";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
halyBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Pis";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
marcoBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Ari";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
finoBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Tau";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
satisfyBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Gem";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
brassBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Can";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
belyBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Leo";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
noveBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Vir";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
relationBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Lib";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
manofaBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Sco";
  console.log('AstroSign is: ' + AstroSign);
  userPicked(AstroSign);
});
//
breeBtn.addEventListener('click', function () {
  console.log('User submit button clicked');
  let AstroSign = "Sag";
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
      zMoreInfoObj.innerHTML = '<p>You got Times New Roman! Just like this classic font, you do not want to be admired, but you do want to be respected. You are an achievement junkie that always ends up taking the lead.</p>'
      modal.hidden = !modal.hidden;
      break;
      case 'Aqu':
        zTitleObj.innerHTML = 'Eckmannpsych';
        zDateRangeObj.innerHTML = 'January 20th to February 18th';
        zMoreInfoObj.innerHTML = '<p>She so quirkyyyy. In a good a way, I think. I&apos;m not even going to try to pronounce this for you, but that&apos;s how you know it&apos; special. This font is so eclectic, so you. You may feel like an outcast at times, but use it to your advantage! Being different makes you interesting and a fun person to be around.</p>'
        modal.hidden = !modal.hidden;
        break;
        case 'Pis':
          zTitleObj.innerHTML = 'Halyard Display';
          zDateRangeObj.innerHTML = 'February 19th to March 20th';
          zMoreInfoObj.innerHTML = '<p>Ahhh, you are Halyard Display. It is basically Helvetica, but you are not mainstream like that. I can tell that you are a mature person but can never ignore your inner child, because this font is so timeless.</p>'
          modal.hidden = !modal.hidden;
          break;
          case 'Ari':
            zTitleObj.innerHTML = 'Marco Bold';
            zDateRangeObj.innerHTML = 'March 21st to April 19th';
            zMoreInfoObj.innerHTML = '<p>Marco? Bold! Marco? Bold! (haha see what I did there?) This font is very bold and powerful, which is what you are. You are always determined and very ambitious in accomplishing what you want. Although life may not always go your way, I commend you for standing your ground with those thick serifs.</p>'
            modal.hidden = !modal.hidden;
            break;
            case 'Tau':
              zTitleObj.innerHTML = 'Fino';
              zDateRangeObj.innerHTML = 'April 20th to May 20th';
              zMoreInfoObj.innerHTML = '<p>You got Fino! Fino is very fancy, yet practical and versitile. You love a good night out, but also really enjoy being cozy. The serifs on this font show that while you like to have fun, you tend to stay grounded and when you get in the groove of something, you stay in the grove. That is an admirable quality!</p>'
              modal.hidden = !modal.hidden;
              break;
              case 'Gem':
                zTitleObj.innerHTML = 'Satisfy';
                zDateRangeObj.innerHTML = 'May 21st to June 20th';
                zMoreInfoObj.innerHTML = '<p>How satisfying, you got Satisfy! Some may say you tend to be a bit too faced, but I think you are wonderfully spontaneous. Your vibe is spunky, but perfect at the right times.</p>'
                modal.hidden = !modal.hidden;
                break;
                case 'Can':
                  zTitleObj.innerHTML = 'P22 Brass Script Pro';
                  zDateRangeObj.innerHTML = 'June 21st to July 22nd';
                  zMoreInfoObj.innerHTML = '<p>This font visually portrays you so well. The wonderful curves and strokes show how your emotional side is your strength. The way it leans forward a bit symbolizes how you are the type of person who will move on and forgive, but you always hold on just a little bit.</p>'
                  modal.hidden = !modal.hidden;
                  break;
                  case 'Leo':
                    zTitleObj.innerHTML = 'Bely Display';
                    zDateRangeObj.innerHTML = 'July 23rd to August 22nd';
                    zMoreInfoObj.innerHTML = '<p>Bely Display! I love this font. It&apos;s vibes are so natural and effortless, just like you! The strong serifs really portray how grounded and confident you are.</p>'
                    modal.hidden = !modal.hidden;
                    break;
                    case 'Vir':
                      zTitleObj.innerHTML = 'Novecento Sans';
                      zDateRangeObj.innerHTML = 'August 23rd to September 22nd';
                      zMoreInfoObj.innerHTML = '<p>Vibe check: Novecento Sans. I like this one, it is nice. No really! This font is clean and simple, which tells me that you are a very organized person at heart. However, you only emotionally invest in other people, and it is time to start thinking about yourself. See how thin the font is? That is your emotional health.</p>'
                      modal.hidden = !modal.hidden;
                      break;
                      case 'Lib':
                        zTitleObj.innerHTML = 'Relation Bold';
                        zDateRangeObj.innerHTML = 'September 23rd to October 22nd';
                        zMoreInfoObj.innerHTML = '<p>Relation Bold is the font for you. Do you tend to hate being alone? Well so does this font, as you can tell by its very clingy letters that cannot seem to ever let go. This font is also similar to your traits in the way that you seem to be simultaneously extroverted and introverted.</p>'
                        modal.hidden = !modal.hidden;
                        break;
                        case 'Sco':
                          zTitleObj.innerHTML = 'Manofa Bold';
                          zDateRangeObj.innerHTML = 'October 23rd to November 21st';
                          zMoreInfoObj.innerHTML = '<p>Oh she bold... She Manofa Bold. Just like this font, you are really cool! When people see you, they are intrigued by your vibe. However, you do have eyes that seem to stare into people&apos;s souls. While you are fun and funky, you have that bit of strong edge that is always hiding behind the curtain.</p>'
                          modal.hidden = !modal.hidden;
                          break;
                          case 'Sag':
                            zTitleObj.innerHTML = 'Bree Oblique';
                            zDateRangeObj.innerHTML = 'November 22nd to December 21st';
                            zMoreInfoObj.innerHTML = '<p>Bree Oblique! Yo honestly, you have the best vibe. You are kind, understanding, and have a true fun side, which I feel that this font pretty accurately shows. This font would definitely be used for some outdoorsy company&apos;s branding, because you know that the world is your playground.</p>'
                            modal.hidden = !modal.hidden;
                            break;
  }
}

// //sound?


// const audioTrackSource = individualButtonElement.getAttribute("data-audio-file");
//   // Add click event listener to each button
//   individualButtonElement.addEventListener('userSubmitObj', function () {
//   // https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API
//   audioPlayer.src = `./sounds/${audioTrackSource}`
//   audioPlayer.play();
//   });



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

