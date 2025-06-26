 const quizData = [
  {
    question: "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    image: "../img/Questions/Q1.jpg",
    options: ["40", "50", "60", "70"],
    correct: 2
  },
  {
    question: "다음 설명에 해당하는 RAID 관련 기술로 알맞은 것은?",
    image: "../img/Questions/Q2.jpg",
    options: ["스트라이핑(Striping)", "미러링(Mirroring)", "패리티(Parity)", "ECC(Error Check &Correction)"],
    correct: 0
  },
  {
    question: "다음 중 LVM 구성할 때 가장 먼저 생성되는 것은?",
    options: ["VG(Volume Group)", "LV(Logical Volume)", "PV(Physical Volume)", "PE(Physical Extend)"],
    correct: 2
  },
  {
    question: "다음 중 프린터 큐의 작업 정보를 확인하는 명령어로 알맞은 것은?",
    options: ["lp", "lpr", "lprm", "lpstat"],
    correct: 3
  },
  {
    question: "다음 설명에 해당하는 명칭으로 알맞은 것은?",
    image: "../img/Questions/Q5.jpg",
    options: ["ALSA", "CUPS", "SANE", "OSS"],
    correct: 3
  },
  {
    question: "다음 중 스캐너 사용과 관련된 프로그램으로 알맞은 것은?",
    options: ["ALSA", "CUPS", "SANE", "LPRng"],
    correct: 2
  },
  {
    question: "다음 중 데비안 계열 리눅스에서 환경 설정 파일도 포함해서 vsftpd 패키지를 제거하는 명령으로 알맞은 것은?",
    options: [
      "apt-get purge vsftpd",
      "apt-get remove vsftpd",
      "apt-get erase vsftpd",
      "apt-get delete vsftpd"
    ],
    correct: 0
  },
  {
    question: "다음 중 rpm 명령으로 의존성이 있는 패키지를 제거하는 명령으로 알맞은 것은?",
    options: [
      "rpm -d nmap --nodeps",
      "rpm -e nmap --nodeps",
      "rpm erase nmap --nodeps",
      "rpm delete nmap -nodeps"
    ],
    correct: 1
  },
  {
    question: "다음은 확장 패키지 관련 저장소를 설치하는 과정이다. (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    image: "../img/Questions/Q9.jpg",
    options: ["epel", "epel-repository", "epel-release", "epel-download"],
    correct: 2
  },
  {
    question: "다음은 다운로드 받은 소스 파일의 내용만을 확인하는 과정이다. (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    image: "../img/Questions/Q10.jpg",
    options: ["jxvf", "Jxvf", "jtvf", "Jtvf"],
    correct: 2
  },
  {
    question: "다음 설명에 해당하는 명령으로 알맞은 것은?",
    image: "../img/Questions/Q11.jpg",
    options: ["make init", "make zero", "make clean", "make neat"],
    correct: 2
  },
  {
    question: "다음 중 프로그램을 소스 파일로 설치하는 과정으로 알맞은 것은?",
    options: [
      "configure → make → make install",
      "make → configure → make install",
      "make → make install → configure",
      "make install → configure → make"
    ],
    correct: 0
  },
  {
    question: "다음 설명에 해당하는 명령으로 알맞은 것은?",
    image: "../img/Questions/Q11.jpg",
    options: ["make init", "make zero", "make clean", "make neat"],
    correct: 2
  },
  {
    question: "다음 중 프로그램을 소스 파일로 설치하는 과정으로 알맞은 것은?",
    options: [
      "configure → make → make install",
      "make → configure → make install",
      "make → make install → configure",
      "make install → configure → make"
    ],
    correct: 0
  },
  
  {
    question: "다음 설명에 해당하는 명령으로 알맞은 것은?",
    image: "../img/Questions/Q11.jpg",
    options: ["make init", "make zero", "make clean", "make neat"],
    correct: 2
  },
  {
    question: "다음 중 프로그램을 소스 파일로 설치하는 과정으로 알맞은 것은?",
    options: [
      "configure → make → make install",
      "make → configure → make install",
      "make → make install → configure",
      "make install → configure → make"
    ],
    correct: 0
  },
  {
    question: "다음 중 리눅스에서 사용되는 온라인 패키지 관리 도구로 거리가 먼 것은?",
    options: ["dnf", "rpm", "zypper", "apt-get"],
    correct: 1
  },
  {
    question: "다음 중 레드햇 계열 리눅스에서 사용되는 패키지 관리 도구로 거리가 먼 것은?",
    options: ["dnf", "rpm", "zypper", "yum"],
    correct: 2
  },
  {
    question: "다음중 vi 편집기의 ex 명령모드에 대한 설명으로 틀린 것은?",
    options: [
      "w → 작업중인 내용을 저장한다.",
      "w 파일명 → 지정한 '파일명'으로 저장한다.",
      "wg → 변경된 내용을 저장하고 종료한다.",
      "q → 수정된 사항이 있어도 무조건 종료한다."
    ],
    correct: 3
  },
  {
    question: "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    image: "../img/Questions/Q16.jpg",
    options: ["㉠ /, ㉡ n", "㉠ ?, ㉡ n", "㉠ /, ㉡ N", "㉠ ?, ㉡ N"],
    correct: 0
  },
  {
    question: "다음 중 vi 편집기에서 linux로 끝나는 줄의 마지막에 마침표(.)을 덧붙이도록 치환하는 명령으로 알맞은 것은?",
    options: [
      ":% s/linux./linux$/",
      ":% s/linux$/linux./",
      ":% s/linux/linux./",
      ":% s/linux/linux$/"
    ],
    correct: 1
  },
  {
    question: "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    image: "../img/Questions/Q1.jpg",
    options: ["40", "50", "60", "70"],
    correct: 2
  },
  {
    question: "다음 설명에 해당하는 RAID 관련 기술로 알맞은 것은?",
    image: "../img/Questions/Q2.jpg",
    options: ["스트라이핑(Striping)", "미러링(Mirroring)", "패리티(Parity)", "ECC(Error Check &Correction)"],
    correct: 0
  },
  {
    question: "다음 중 LVM 구성할 때 가장 먼저 생성되는 것은?",
    options: ["VG(Volume Group)", "LV(Logical Volume)", "PV(Physical Volume)", "PE(Physical Extend)"],
    correct: 2
  },
  {
    question: "다음 중 프린터 큐의 작업 정보를 확인하는 명령어로 알맞은 것은?",
    options: ["lp", "lpr", "lprm", "lpstat"],
    correct: 3
  },
  {
    question: "다음 설명에 해당하는 명칭으로 알맞은 것은?",
    image: "../img/Questions/Q5.jpg",
    options: ["ALSA", "CUPS", "SANE", "OSS"],
    correct: 3
  },
  {
    question: "다음 중 스캐너 사용과 관련된 프로그램으로 알맞은 것은?",
    options: ["ALSA", "CUPS", "SANE", "LPRng"],
    correct: 2
  },
  {
    question: "다음 중 데비안 계열 리눅스에서 환경 설정 파일도 포함해서 vsftpd 패키지를 제거하는 명령으로 알맞은 것은?",
    options: [
      "apt-get purge vsftpd",
      "apt-get remove vsftpd",
      "apt-get erase vsftpd",
      "apt-get delete vsftpd"
    ],
    correct: 0
  },
  
  {
    question: "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    image: "../img/Questions/Q1.jpg",
    options: ["40", "50", "60", "70"],
    correct: 2
  },
  {
    question: "다음 설명에 해당하는 RAID 관련 기술로 알맞은 것은?",
    image: "../img/Questions/Q2.jpg",
    options: ["스트라이핑(Striping)", "미러링(Mirroring)", "패리티(Parity)", "ECC(Error Check &Correction)"],
    correct: 0
  },
  {
    question: "다음 중 LVM 구성할 때 가장 먼저 생성되는 것은?",
    options: ["VG(Volume Group)", "LV(Logical Volume)", "PV(Physical Volume)", "PE(Physical Extend)"],
    correct: 2
  },
  {
    question: "다음 중 프린터 큐의 작업 정보를 확인하는 명령어로 알맞은 것은?",
    options: ["lp", "lpr", "lprm", "lpstat"],
    correct: 3
  },
  {
    question: "다음 설명에 해당하는 명칭으로 알맞은 것은?",
    image: "../img/Questions/Q5.jpg",
    options: ["ALSA", "CUPS", "SANE", "OSS"],
    correct: 3
  },
  {
    question: "다음 중 스캐너 사용과 관련된 프로그램으로 알맞은 것은?",
    options: ["ALSA", "CUPS", "SANE", "LPRng"],
    correct: 2
  },
  {
    question: "다음 중 데비안 계열 리눅스에서 환경 설정 파일도 포함해서 vsftpd 패키지를 제거하는 명령으로 알맞은 것은?",
    options: [
      "apt-get purge vsftpd",
      "apt-get remove vsftpd",
      "apt-get erase vsftpd",
      "apt-get delete vsftpd"
    ],
    correct: 0
  },
  
  {
    question: "다음 중 emacs 편집기를 개발한 인물로 알맞은 것은?",
    options: ["빌 조이", "리처드 스톨만", "브람 브레나르", "귀도 반 로섬"],
    correct: 1
  },
  {
    question: "다음 중 nano 편집기에서 현재 커서가 위치한 줄의 처음으로 이동할 때 사용하는 키 조합으로 알맞은 것은?",
    options: ["[Ctrl]+[a]", "[Ctrl]+[e]", "[Ctrl]+[o]", "[Ctrl]+[i]"],
    correct: 0
  },
  {
    question: "다음 중 X 윈도 환경에서만 사용 가능한 편집기로 알맞은 것은?",
    options: ["nano", "pico", "kwrite", "vim"],
    correct: 2
  },
  {
    question: "다음 중 작업번호가 2번인 백그라운드 프로세스를 종료시키는 명령으로 알맞은 것은?",
    options: ["kill 2", "kill %2", "kill -j 2", "kill -b 2"],
    correct: 1
  },
  {
    question: "ps 명령의 상태(STAT) 코드 중에 작업은 종료되었으나 부모프로세스에 의해 회수되지 않아 메모리를 차지하고 상태를 나타내는 값으로 알맞은 것은?",
    options: ["R", "S", "T", "Z"],
    correct: 3
  },
  {
    question: "다음 중 프로세스 관련 명령어로 설정 가능한 NI 값의 범위로 알맞은 것은?",
    options: ["-19 ~ 19", "-19 ~ 20", "-20 ~ 19", "-20 ~ 20"],
    correct: 2
  }, { question: "다음 설명에 해당하는 명칭으로 알맞은 것은?",
    image: "../img/Questions/Q5.jpg",
    options: ["ALSA", "CUPS", "SANE", "OSS"],
    correct: 3
  }
  ,
  {
    question: "cron을 이용해서 해당 스크립트를 매주 1회씩 주기적으로 실행하려고 한다. (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    image: "../img/Questions/Q24.jpg",
    options: ["1 1 1 * *", "1 1 * 1 *", "1 1 * * 1", "* 1 1 1 *"],
    correct: 2
  } ,
  {
    question: "다음 (괄호) 안에 들어갈 내용으로 알맞은 것은?",
    image: "../img/Questions/Q1.jpg",
    options: ["40", "50", "60", "70"],
    correct: 2
  },
  {
    question: "다음 설명에 해당하는 RAID 관련 기술로 알맞은 것은?",
    image: "../img/Questions/Q2.jpg",
    options: ["스트라이핑(Striping)", "미러링(Mirroring)", "패리티(Parity)", "ECC(Error Check &Correction)"],
    correct: 0
  },
  {
    question: "다음 중 LVM 구성할 때 가장 먼저 생성되는 것은?",
    options: ["VG(Volume Group)", "LV(Logical Volume)", "PV(Physical Volume)", "PE(Physical Extend)"],
    correct: 2
  },
  {
    question: "다음 중 프린터 큐의 작업 정보를 확인하는 명령어로 알맞은 것은?",
    options: ["lp", "lpr", "lprm", "lpstat"],
    correct: 3
  },
  {
    question: "다음 설명에 해당하는 명칭으로 알맞은 것은?",
    image: "../img/Questions/Q5.jpg",
    options: ["ALSA", "CUPS", "SANE", "OSS"],
    correct: 3
  },
  {
    question: "다음 중 스캐너 사용과 관련된 프로그램으로 알맞은 것은?",
    options: ["ALSA", "CUPS", "SANE", "LPRng"],
    correct: 2
  },
  {
    question: "다음 중 데비안 계열 리눅스에서 환경 설정 파일도 포함해서 vsftpd 패키지를 제거하는 명령으로 알맞은 것은?",
    options: [
      "apt-get purge vsftpd",
      "apt-get remove vsftpd",
      "apt-get erase vsftpd",
      "apt-get delete vsftpd"
    ],
    correct: 0
  },
  
];

const quizContainer = document.getElementById("quiz-container");

const wrapperDiv = document.createElement("div");
wrapperDiv.classList.add("table-wrapper");

quizData.forEach((q, i) => {
  const table = document.createElement("table");
  table.classList.add("multi-table");

  const row = document.createElement("tr");

  // 번호
  const numberCell = document.createElement("td");
  numberCell.classList.add("question-number");
  numberCell.textContent = `${i + 1}.`;

  // 문제 및 보기들
  const contentCell = document.createElement("td");

  const titleDiv = `<div class="question-title">${q.question}</div>`;
  const imageDiv = q.image
    ? `<div class="question-image"><img src="${q.image}" alt="문제 이미지"></div>`
    : "";

  // 보기 테이블
  let choicesTable = '<table class="choices">';
  for (let j = 0; j < q.options.length; j += 2) {
    choicesTable += "<tr>";
    for (let k = 0; k < 2; k++) {
      const index = j + k;
      if (q.options[index]) {
        const isCorrect = index === q.correct;
        choicesTable += `<td>
  <label class="choice-button ${isCorrect ? "correct" : ""}" data-index="${index}" data-question="${i}">
    <input type="radio" name="q${i}" value="${index}" hidden checked>
    <span class="choice-symbol">${['①', '②', '③', '④'][index]}</span>
    <span class="choice-content">${q.options[index]}</span>
    ${isCorrect ? "correct" : ''}
  </label>
</td>`;
      }
    }
    choicesTable += "</tr>";
  }
  choicesTable += "</table>";

  contentCell.innerHTML = titleDiv + imageDiv + choicesTable;
  row.appendChild(numberCell);
  row.appendChild(contentCell);
  table.appendChild(row);
  wrapperDiv.appendChild(table);
});

// quiz-container에 추가
quizContainer.appendChild(wrapperDiv);