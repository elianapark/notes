const messages = {
    A: "Welcome to our game, Love is a Battlefield! In just a moment, you'll be sent on an adventure to find your one true love, but be careful! There are many twists and turns, and you never know which one will lead you down a dead end! Especially if you type something incorrectly because we're not that advanced. In the immortal words of RuPaul, good luck and don't fuck it up!",
    A1: "After a long and lonely time in your life, you have decided it's time to finally put yourself out there and meet someone. If you make the right choices, today is the day that's gonna change your life! Are you ready to begin? Click OK for Yes.",
    B1: "Are you a man, a woman, or nonbinary?",
    B2: "It looks like you'll die alone then. Too bad :/",
    C: "Do you date women, men, or both?",
    C1: "We're in the process of officially recognizing that gender. Please try again soon!",
    E: "Tell me what you're looking for. Put A for love, B for something casual, C for friendship or D for no strings attached.",
    E1: "You're supposed to be looking for love, not frienship! Keep your eye on the ball, fool.",
    E2: "In the words of Reese Witherspoon, you only gain love by giving love.",
    E3: "If you've ever watched a romantic comedy, you'll know something that starts casual never stays that way",
    E4: "Honestly it'd be easier to just go to a brothel but ok.",
    E5: "That's not one of the options I gave. If you can't follow simple instructions like that, you're not cut out for a relationship.",
    F: "Where would you want to meet your true love, online or offline?",
    F1: "Which is the better app for you, Tinder or Christian Mingle?",
    F2: "Are you more comfortable chatting someone up at a Starbucks or a bar?",
  }
  
  let gameOver = false
  let messageResult
  
  beginDating()
  function beginDating() {
    alert(messages.A)
    const response = confirm(messages.A1);
    if (response) {
      prompt(messages.B1);
    }
    else {
      alert(messages.B2)
      gameOver = true
    }
  }
  
  let orientation = {}
  questionB()
  function questionB() {
    if (gameOver == false) {
      const response = prompt(messages.C)
      if (response === 'men') {
        orientation = {pronoun: "he", pronounCaps: "He", gender: "man", possessive: "his", object: "him", verb: "is", verb2: "says"}
      } 
      else if (response === 'women') {
        orientation = {pronoun: "she", pronounCaps: "She", gender: "woman", possessive: "her", object: "her", verb: "is", verb2: "says"}
      }
      else if (response === 'both') {
        orientation = {pronoun: "they", pronounCaps: "They", gender: "person", possessive: "their", object: "them", verb: "are", verb2: "say"}
      }
    else {
      alert(messages.C1)
      gameOver = true
    }
  }
  }
  
  questionE()
  function questionE() {
    if (gameOver == false) {
      const response = prompt(messages.E)
      if (response === "C" || response === "c") {
        alert(messages.E1)
        gameOver = true
      }
      else if (response === "A" || response === "a") {
        alert(messages.E2)
      }
      else if (response === "B"|| response === "b") {
        alert(messages.E3)
      }
      else if (response === "D" || response === "d") {
        alert(messages.E4)
      }
      else {
        alert(messages.E5)
        gameOver = true
      }
    }
  }
  
  let date = {}
  questionF()
  function questionF () {
    if (gameOver == false) {
      const response = prompt(messages.F)
      if (response === "online" || response === "Online") {
        const responseF1 = prompt(messages.F1)
        if (responseF1 === "Tinder" || responseF1 === "tinder") {
        date = {location: "Tinder", type: "online", descrip: "wild child", language: "hell"}
        }
        else if (responseF1 === "Christian Mingle" || responseF1 === "christian mingle") {
        date = {location: "Christian Mingle", type: "online", descrip: "good Christian", language: "heck"}
        }
        else {
          alert ("Whatever you typed was not one of the two options. This is Javascript for Beginners, we can't program spellcheck yet. Smh.")
          return gameOver = true
        }
      }
      else if (response === "offline" || response === "Offline") {
        const responseF2 = prompt(messages.F2)
        if (responseF2 === "Starbucks") {
        date = {location: "Starbucks", type: "offline", descrip: "kind-looking hipster typing on a laptop",}
        }
        else if (responseF2 === "bar" || responseF2 === "a bar" || responseF2 === "Bar") {
        date = {location: "a bar", type: "offline", descrip: "a haughty-looking hottie",}
        }}
      else {
        alert ("Whatever you typed was not one of the two options. This is Javascript for Beginners, we can't program spellcheck yet. Smh.")
        return gameOver = true
        }
    }
  }
  
  onlineDate ()
  function onlineDate () {
    if (gameOver === false) { 
      if (date.location === "Tinder") {
        const hi1 = confirm("You just matched with a " + date.descrip + " named Alex. Do you want to say hi? Click OK for yes and click cancel for no.",)
        if (hi1) {
        const yes1 = confirm('Alex messages you and says "Nice to meet you! Do you want to come over tonight?" Click OK for ' + date.language + ' yeah and click cancel for ' + date.language + ' no.')
        if (yes1) {
          alert("Alex sends you " + orientation.possessive + " address.")
          messageResult = "yes"
        }
      else {
        alert("Instead of going to Alex's house, you stay home and finish off an entire bottle of wine. As you're showering before bed, you're too drunk to notice the soap slide off the shelf and onto the bottom of the tub. You slip and crack your head open. Your fate is in the hands of God and he is not forgiving.")
        gameOver = true
      }}
    else {
      alert("Alex unmatches you and you die alone.")
      gameOver = true
    }}
    else if (date.location == "Christian Mingle") {
      const hi2 = confirm("You just matched with a " + date.descrip + " " + orientation.gender + " named Alex. Do you want to say hi? Click OK for yes and click cancel for no.",)
      if (hi2) {
      const yes2 = confirm(`Alex messages you and says, "Nice to meet you! I'm a practicing Baptist. Are you one as well? Click OK for Yes and click cancel for no.`)
      if (yes2) {
      const invite = confirm(`Alex messages you back and says, "That's great! Would you be free to meet up for brunch on Sunday after service?`)
        if (invite) {
          alert("You meet up with Alex on Sunday and have a lovely time. You exchange numbers and agree to have dinner soon. God willing, you'll officially be in a relationship soon!")
          gameOver = true} 
        else {
          alert(`Alex messages you, "Well, bye." Every Sunday you continue to go to church alone, wondering what could have been as the choir sings their hymns.`)}}
      else {
        alert("Sorry, Alex only wants to meet someone who's also a Baptist. You can pray to God you match you with your special person soon.")
        gameOver = true}}
      else {
      alert("Alex unmatches you and you die alone.")
      gameOver = true
      }
    } 
  }}
  
  let food
  let house
  tinderDate()
  function tinderDate() {
   if (gameOver == false) {
     if (messageResult === "yes") {
      const yes = confirm("Would you like to bring something to Alex's house?")
      if (yes) {
        const response = prompt("You drive to Trader Joe's and take a look around. You're torn between the wine or some chips. Which one should you get?")
          if (response === "wine" || response === "Wine") {
            food = "wine"
          }
          else if (response === "chips" || response === "Chips") {
            food = "chips"
          }
          else {
            alert("You're playing the game wrong. Don't be like that.")
            return gameOver = true
          } 
        }
      house = true
      } 
    }  
   }
  
  arrive ()
  function arrive () {
    if (gameOver === false) {
      if (house === true) {
        const arrive = alert("You arrive at Alex's house."+ orientation.pronounCaps + " opens the door and looks at you expectantly.")
      if (food === "wine") {
        alert("You show Alex the wine and "+ orientation.pronoun + " offers to let you sleep over so you don't drink and drive. You two have a lovely time and agree to see each other soon. Romance (or at least casual sex) looks to be in your future!")
        return gameOver = true
      }
      else if (food === "chips") {
        alert("You show Alex the chips. Alex suggests watching a movie. As soon as it's done, Alex says " + orientation.pronoun + " " + orientation.verb + " tired and you leave. You send a text that you had a good time, but don't get a response. Looks like you just got ghosted :/")
        return gameOver = true
      }
      else {
        alert("Alex takes one look at your empty hands and slams the door in your face. It's common courtesy to bring something when you're invited over, remember that next time, fool.")
      }
    }
  }}
  
  offlineDate ()
  function offlineDate () {
    if (gameOver === false) {
      if (date.type === "offline") {
      const meet = confirm("You decided to put yourself out there and meet someone. You arrive at " + date.location + " and a " + date.descrip + " catches your eye. Do you approach " + orientation.object + "?")
      if (meet) {
        if (date.location === "Starbucks") {
          const coffee = prompt("You approach " + orientation.object + "and they introduce themselves as Riley. You offer to buy them a cup of coffee and they happily accept. As you're waiting in line, you're having trouble deciding between the cold brew and the pumpkin spice latte. Which do you get?")
          if (coffee === "pumpkin spice latte") {
            alert("You buy a pumpkin spice latte for yourself and Riley and sit down to talk. The drink is sweet and so " + orientation.verb + " " + orientation.pronoun + ". You exchange numbers and agree to meet up gain soon. Success!")
            return gameOver = true} 
          else if (coffee === "cold brew") {
            alert ("You buy a cold brew for yourself and Riley and sit down to talk. The drink is chilly and so is the conversation. You don't have much in common and " + orientation.prounoun + "quickly excuse themselves to go back to work. You may have struck out, but keep putting yourself out there!")
            return gameOver = true}
          else {
            alert ("Whatever you typed was not one of the two options. This is Javascript for Beginners, we can't program spellcheck yet. Smh.")
            return gameOver = true}
        }
        if (date.location === "a bar") {
          const help = confirm ('As you approach, you notice the ' + orientation.gender + ' is being creeped on by some loser in a mullet. Should you help ' + orientation.object + " out?")
            if (help) {
              const drink = confirm ('You smoothly slide in between the creeper and the hottie and the creeper leaves in a huff. "Why thank you,"' + orientation.pronoun + " " + orientation.verb2 + '. My name is Quinn. Care to buy me a drink?"')
                if (drink) {
                const choice = prompt ("You glance at the menu. The bar's two specialty cocktails are a jalapeno margarita and a salty dog. Quinn is looking at you expectantly. Which do you buy for " + orientation.pronoun + "?")
                  if (choice === "jalapeno margarita") {
                    alert("Quinn seems pleased with your choice. You two start flirting and the conversation turns as spicy as the drinks. You soon leave the bar together and disappear, never to be head from again.")
                  return gameOver = true}
                  else if (choice === "salty dog") {
                    alert("Quinn scoffs at the drink but still accepts it. You try to flirt but Quinn "+ date.verb + " salty over your choice and throws the drink in your face before stomping away. Dejected, you take a car home and rethink everything about your life.")
                    return gameOver = true}
          else {
           alert ("Whatever you typed was not one of the two options. This is Javascript for Beginners, we can't program spellcheck yet. Smh.")
            return gameOver = true}}
        else {
              alert ("Quinn huffs and turns away from you. Honestly, it doesn't really seem like you're missing out on much. You go home to reflect on why you're only attracted to rude people.")
              return gameOver = true}}
              else {
                alert ("Wow, you won't even go up and help out an attractive person in distress? No wonder you're alone.")}
               }}else {
          alert ("Wow, you can't even go up and talk to someone? No wonder. you're alone.")
          return gameOver = true}}}}