function time() {
  let time = new Date()
  let hours = document.getElementById("hours")
  let hrs = time.getHours()
  let minutes = document.getElementById("minutes")
  minutes.innerHTML = time.getMinutes() + "<br>mins"
  let sec = document.getElementById("sec")
  sec.innerHTML = time.getSeconds() + "<br>Secs"
  if (hrs == 0) {
    hrs = 12
  }
  if (hrs > 12) {
    let amPm = document.getElementById("time5")
    amPm.innerHTML = "PM"
    hrs = hrs - 12
  }
  hours.innerHTML = hrs + "<br>Hours"
}
setInterval(time)


//copyPasted code
function setAlarm() {
  let wake = document.getElementById("wakeUpTime").value
  let lunch = document.getElementById("lunchTime").value
  let nap = document.getElementById("napTime").value
  let night = document.getElementById("nightTime").value

  let time = new Date()
  if (time.getHours() == lunch) {
    document.getElementById("text").innerText = "Good Afternoon !! Take Some Sleep "
    document.getElementById("imgM").src = "lunchimage.jpg"
    document.getElementById("imgM").style.borderRadius = "2vw"
    document.getElementById("grab").innerText = "Let's Have Some Lunch !! "
  }
  if (time.getHours() == nap) {
    document.getElementById("text").innerText = "Good Evening !! "
    document.getElementById("grab").innerText = "Stop Yawning, Get Some Tea.. It's Just Evening  !! "
    document.getElementById("imgM").src = "tea.png"
  }
  if (time.getHours() == night) {
    document.getElementById("text").innerText = "Good Night !! "
    document.getElementById("imgM").src = "gn.svg"
    document.getElementById("grab").innerText = "Close Your Eyes and Go to Sleep !! "
  }

  function wP() {
    let afterW = parseInt(wake) + 1
    if (wake < 12) {
      if (wake < 11) return wake + "AM - " + afterW + "AM"
      else return wake + "AM - " + afterW + "PM"
    } else {
      afterW = afterW - 12
      wake = wake - 12
      if (wake < 11) return wake + "PM - " + afterW + "PM"
      else return wake + "PM - " + afterW + "AM"
    }
  }

  function lP() {
    let afterL = parseInt(lunch) + 1
    if (lunch < 12) {
      if (lunch < 11) return lunch + "AM - " + afterL + "AM"
      else return lunch + "AM - " + afterL + "PM"
    } else {
      afterL = afterL - 12
      lunch = lunch - 12
      if (lunch < 11) return lunch + "PM - " + afterL + "PM"
      else return lunch + "PM - " + afterL + "AM"
    }
  }

  function nP() {
    let afterN = parseInt(nap) + 1
    if (nap < 12) {
      if (nap < 11) return nap + "AM - " + afterN + "AM"
      else return nap + "AM - " + afterN + "PM"
    } else {
      afterN = afterN - 12
      nap = nap - 12
      if (nap < 11) return nap + "PM - " + afterN + "PM"
      else return nap + "PM - " + afterN + "AM"
    }
  }

  function ntP() {
    let afternT = parseInt(night) + 1
    if (night < 12) {
      if (night < 11) return night + "AM - " + afternT + "AM"
      else return night + "AM - " + afternT + "PM"
    } else {
      afternT = afternT - 12
      night = night - 12
      if (night < 11) return night + "PM - " + afternT + "PM"
      else return night + "PM - " + afternT + "AM"
    }
  }
  document.getElementById("wakeT").innerText = wP()
  document.getElementById("lunchT").innerText = lP()
  document.getElementById("napT").innerText = nP()
  document.getElementById("nightT").innerText = ntP()
}
