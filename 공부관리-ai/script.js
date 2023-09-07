const user = {
  username: "홍길동",
  password: 1234,
  avgStudy: 7,
  score: 80,
  goal: "9급 공무원 합격",
  sdate: "2023.01.18",
  total: 1268,
  course: "공무원 9급(1년)",
};

const passUser = {
  username: "user",
  password: 1234,
  avgStudy: 6,
  score: 70,
  goal: "9급 공무원",
  sdate: "2023.01.18",
};

function setStorage() {
  var storedUsername = localStorage.getItem("username");
  localStorage.setItem("username", user.username);
  localStorage.setItem("password", user.password);
}

function login() {
  var storedUsername = localStorage.getItem("username");
  var storedPassword = localStorage.getItem("password");
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (username === storedUsername && password === storedPassword) {
    // 로그인 성공 시 메인 화면으로 이동

    window.location.href = "index.html";
  } else {
    // 로그인 실패 시 로그인 실패 화면으로 이동
    alert("로그인 실패");
    window.location.reload();
  }
}

function setData() {
  document.getElementById("username").innerHTML = user.username;
  document.getElementById("avgStudy").innerHTML = user.avgStudy;
  document.getElementById("avgStudy2").innerHTML = user.avgStudy;
  document.getElementById("score").innerHTML = user.score;
  document.getElementById("score2").innerHTML = user.score;
  document.getElementById("goal").innerHTML = user.goal;
  document.getElementById("sdate").innerHTML = user.sdate;
  document.getElementById("total").innerHTML = user.total;
  document.getElementById("course").innerHTML = user.course;
  let myCanvas = document.getElementById("myChart");
  let ctx = myCanvas.getContext("2d");

  let myPieData = [
    { label: "Me", value: (user.avgStudy * 100) / 24, color: "green" },
    { label: "etc", value: 100 - (user.avgStudy * 100) / 24, color: "white" },
  ];

  let pieChartRadius = Math.min(myCanvas.width, myCanvas.height) / 3;
  let pieChartCenterX = myCanvas.width / 2;
  let pieChartCenterY = myCanvas.height / 2;

  let startAngle = -Math.PI / 6;
  for (let i = 0; i < myPieData.length; i++) {
    let sliceAngle = (myPieData[i].value / 100) * 2 * Math.PI;

    ctx.beginPath();
    ctx.fillStyle = myPieData[i].color;
    ctx.moveTo(pieChartCenterX, pieChartCenterY);
    ctx.arc(
      pieChartCenterX,
      pieChartCenterY,
      pieChartRadius,
      startAngle,
      startAngle + sliceAngle
    );
    ctx.closePath();
    ctx.fill();
    startAngle += sliceAngle;
  }

  //   chart2
  myCanvas = document.getElementById("myChart2");
  ctx = myCanvas.getContext("2d");

  myPieData = [
    { label: "Me", value: (passUser.avgStudy * 100) / 24, color: "green" },
    {
      label: "etc",
      value: 100 - (passUser.avgStudy * 100) / 24,
      color: "white",
    },
  ];

  pieChartRadius = Math.min(myCanvas.width, myCanvas.height) / 3;
  pieChartCenterX = myCanvas.width / 2;
  pieChartCenterY = myCanvas.height / 2;

  startAngle = -Math.PI / 6;
  for (let i = 0; i < myPieData.length; i++) {
    let sliceAngle = (myPieData[i].value / 100) * 2 * Math.PI;

    ctx.beginPath();
    ctx.fillStyle = myPieData[i].color;
    ctx.moveTo(pieChartCenterX, pieChartCenterY);
    ctx.arc(
      pieChartCenterX,
      pieChartCenterY,
      pieChartRadius,
      startAngle,
      startAngle + sliceAngle
    );
    ctx.closePath();
    ctx.fill();
    startAngle += sliceAngle;
  }
}
function setData2() {
  document.getElementById("username").value = user.username;
  document.getElementById("goal").value = user.goal;
  document.getElementById("sdate").value = user.sdate;
  document.getElementById("avgStudy").value = user.avgStudy;
  document.getElementById("score").value = user.score;
  document.getElementById("total").value = user.total;
  document.getElementById("course").value = user.course;
}

function updateUser() {
  user.username = document.getElementById("username").value;
  user.goal = document.getElementById("goal").value;
  user.sdate = document.getElementById("sdate").value;
  user.avgStudy = document.getElementById("avgStudy").value;
  user.score = document.getElementById("score").value;
  user.total = document.getElementById("total").value;
  user.course = document.getElementById("course").value;
  setData2();
  alert("수정이 완료되었습니다.");
}

function passCheck() {
  if (user.avgStudy >= passUser.avgStudy && user.score >= passUser.score) {
    document.getElementById("check").innerHTML =
      "평균 일 공부시간과 모의고사 점수로 책정한 결과 합격 예상됩니다.";
  } else {
    document.getElementById("check").innerHTML =
      "평균 일 공부시간과 모의고사 점수로 책정한 결과 불합격 예상됩니다.";
  }
  document.getElementById("check-why").innerHTML = `나의 평균 일 공부시간:
    ${user.avgStudy}시간,
     모의고사 점수: 
    ${user.score}점`;
  document.getElementById("check-why2").innerHTML = `합격자 평균 일 공부시간:
    ${passUser.avgStudy}시간,
     모의고사 점수: 
    ${passUser.score}점`;
}
