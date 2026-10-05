// 프로젝트 데이터 — scripts/build-projects.mjs 가 content/*.txt 로부터 생성한 파일입니다.
// (직접 수정해도 되지만, 다시 build 하면 덮어써집니다. 수정은 txt 를 고친 뒤 재실행하는 것을 권장)
// id 는 URL(/project/:id) 에 쓰이므로 영문 소문자/숫자/하이픈으로.
// 이미지는 public/projects/<id>/ 에 두고 '/projects/<id>/파일명' 으로 참조.
// 순서 = 목록 순서 = 상세 하단 이전/다음 순서

export const PROJECTS = [
  {
    "id": "t01-01",
    "division": "01",
    "subtitle": "웨어러블 IMU와 컴퓨터 비전 기반 실시간 거북목 교정 서비스",
    "name": "Turtlely",
    "team": "목이굽어슬프조",
    "thumbnail": "/projects/t01-01/1.webp",
    "keywords": [
      "Posture Monitoring",
      "Wearable Device",
      "Computer Vision",
      "Mobile Healthcare"
    ],
    "images": [
      "/projects/t01-01/1.webp",
      "/projects/t01-01/2.webp",
      "/projects/t01-01/3.webp",
      "/projects/t01-01/4.webp",
      "/projects/t01-01/5.webp",
      "/projects/t01-01/6.webp"
    ],
    "intent": "거북목으로 고통받고 계신가요? 그러한 당신에게 우리의 Turtlely를 추천합니다!\n\n스마트폰과 PC 사용이 일상화되면서 거북목은 현대인의 새로운 만성 질환으로 자리 잡았습니다. 하지만 거북목은 특정 시점의 진단만으로는 평소 자세를 지속적으로 관리하기 어렵고, 의식적으로 바른 자세를 취할 때와 평상시에 무의식적으로 취하는 자세에는 차이가 존재합니다. 따라서 Turtlely는 실생활에서의 자세 변화를 지속적으로 확인하고 즉각적으로 인지할 수 있는 관리 방식을 제고하는 데 목적을 두고자 합니다.\n\n이러한 목적을 기반으로 컴퓨터 비전을 사용한 자세 측정과 웨어러블 기기를 활용한 실시간 모니터링을 결합하여, 사용자가 자신의 현재 상태뿐만 아니라 일상에서 반복되는 자세 습관까지 확인할 수 있도록 기획하였습니다. 측정 결과와 누적된 자세 데이터를 일·월간 리포트로 제공하고, 잘못된 자세에는 실시간 피드백을 제공함으로써 일회성 측정이 아닌, 사용자가 스스로 자세를 인지하고 지속적인 관리 습관을 형성할 수 있도록 돕는 것을 목표로 합니다.",
    "stack": {
      "skill": [
        "Dart",
        "Java",
        "Python",
        "C++"
      ],
      "tool": [
        "Flutter",
        "Spring Boot",
        "FastAPI",
        "Google ML Kit",
        "OpenAI API",
        "YouTube Data API v3",
        "MySQL",
        "Arduino IDE"
      ],
      "device": [
        "Seeed Studio XIAO nRF52840 Sense",
        "LSM6DS3 IMU",
        "DRV2605L Haptic Driver",
        "LRA Vibration Motor"
      ]
    },
    "members": [
      {
        "name": "김승연",
        "role": "Backend 개발, Computer Vision",
        "comment": "안녕은 영원한 헤어짐은 아니겠지요",
        "song": "더보이즈 - Escape"
      },
      {
        "name": "박세은",
        "role": "기획·디자인, Frontend 개발, Computer Vision",
        "comment": "다시 만나기 위한 약속일 거야",
        "song": "유아 - 숲의 아이"
      },
      {
        "name": "주성아",
        "role": "팀장, Backend 개발, 데이터 분석, Hardware",
        "comment": "얘들아 4년 동안 수고했고 나중에 웃으면서 보자",
        "song": "Wham! - Last Christmas"
      },
      {
        "name": "최민영",
        "role": "Frontend 개발, Hardware",
        "comment": "서로 가야 할 길 찾아서 떠나야 해요",
        "song": "하츠웨이브 - Dream"
      }
    ],
    "questions": [
      {
        "q": "성별 무관하게 팀원과 얼굴합이 잘 맞을 것 같은 연예인은 누구인가요?",
        "a": "김승연 ♡ 예예(TikToker)\n박세은 ♡ 이은지(삐에로 출신)\n주성아 ♡ 민호(불꽃 카리스마)\n최민영 ♡ 가비(Queen)"
      }
    ],
    "thanksTo": "안녕하세요, 목이굽어슬프조입니다. 1년 간의 졸업 프로젝트가 마무리되었습니다. 창의적인 피드백을 주신 이재호 지도교수님, 든든한 식사와 알찬 멘토링으로 저희를 이끌어주신 김태은 멘토님 감사합니다. 하드웨어의 한 줄기 빛이 되어주신 민영이 아버지와 이형규 교수님께도 감사의 인사 드립니다.\n\n늘 응원해 준 가족들과 귀한 시간 내어 찾아와 주신 방문객 분들께도 깊이 감사드립니다. 마지막으로 함께 연구를 진행한 승연, 세은, 성아, 민영 돼지빵들아! 지치고 힘든 순간마다 의지할 수 있었어. 졸업하고 다같이 여행 가자~~ 사랑한다♡"
  },
  {
    "id": "t01-02",
    "division": "01",
    "subtitle": "똑똑한 부동산 플랫폼 홈즈",
    "name": "Homes 홈즈",
    "team": "홈즈",
    "thumbnail": "/projects/t01-02/1.webp",
    "keywords": [
      "Web Platform",
      "AI Price Prediction",
      "Reverse Auction",
      "Real Estate",
      "Geospatial Analysis"
    ],
    "images": [
      "/projects/t01-02/1.webp",
      "/projects/t01-02/2.webp",
      "/projects/t01-02/3.webp",
      "/projects/t01-02/4.webp",
      "/projects/t01-02/5.webp",
      "/projects/t01-02/6.webp"
    ],
    "intent": "홈즈는 부동산을 탐색하는 과정에서 사용자가 여러 플랫폼을 오가며 매물, 실거래가, 중개 수수료 등의 정보를 직접 비교해야 하고, 해당 매물의 가격이 합리적인지 판단할 근거도 부족하다는 문제에서 출발했습니다. 특히 기존 서비스가 매물 탐색이나 시세 정보 제공에 집중되어 있어, 중개 수수료를 비교·협상하거나 매물의 가치를 객관적으로 판단하기 어렵다는 점에 주목했습니다.\n\n이를 해결하기 위해 홈즈는 매물 탐색부터 거래 의사결정까지 하나의 플랫폼에서 지원하고자 합니다. 중개사들이 수수료를 제안하는 역경매 시스템을 통해 사용자의 중개 수수료 부담을 낮추고, 실거래가와 주변 인프라·입지 정보를 활용한 AI 집값 예측 및 다면 평가를 통해 가격의 합리적인 근거를 제공합니다. 궁극적으로 사용자가 더 적은 정보 탐색 비용으로, 보다 투명하고 합리적인 부동산 거래 결정을 내릴 수 있도록 하는 것이 프로젝트의 기획 의도입니다.",
    "stack": {
      "skill": [
        "TypeScript",
        "Java 21"
      ],
      "tool": [
        "VScode",
        "IntelliJ",
        "Swagger",
        "Figma",
        "Docker",
        "Gradle",
        "공공데이터 포털 API",
        "Geospatia",
        "Spring Boot 3.5.14",
        "PostgreSQL",
        "Redis",
        "JWT",
        "QueryDSL",
        "AWS S3",
        "카카오 로컬 API",
        "포트원",
        "Google OAuth2",
        "WebSocket/STOMP",
        "Gmail SMTP",
        "metadata-extractor",
        "Google Cloud Vision API",
        "PostGIS",
        "JTS"
      ],
      "device": []
    },
    "members": [
      {
        "name": "김나연",
        "role": "팀장 , 프론트엔드 & AI",
        "comment": "이 정도로 빌드했으면 이제 제 집도 하나 빌드해주셔야…",
        "song": "세븐틴 - home"
      },
      {
        "name": "김도은",
        "role": "백엔드",
        "comment": "첫 장기 프로젝트였는데 너무 즐겁고 뜻깊은 시간이었습니다!",
        "song": "Super Simple Songs - My Happy Song"
      },
      {
        "name": "고유빈",
        "role": "백엔드",
        "comment": "왜 내가 어느새 4학년…?",
        "song": "Lil Nas - INDUSTRY BABY"
      },
      {
        "name": "김미리",
        "role": "디자인, 프론트엔트",
        "comment": "재미있게 관람해주세요 !",
        "song": "Joji - COME THRU"
      }
    ],
    "questions": [
      {
        "q": "먼작귀 세계관에 빠진다면 팀원은 어떤 캐릭터가 될 것 같나요? (ex. 치이카와, 하치와레, 우사기, 쿠리만쥬, 모몽가, 랏코 등)",
        "a": "나연 : 하치와레\n미리 : 쿠리만쥬\n도은 : 우사기\n유빈 : 랏코\n"
      }
    ],
    "thanksTo": ""
  },
  {
    "id": "t01-03",
    "division": "01",
    "subtitle": "저채널 전두엽 EEG로부터 중심-두정부 채널을 복원하여 고채널 측정 효과를 재현하는 스펙트럴 보정 기반 신경망",
    "name": "Frontal-to-Central EEG Signal Reconstruction for Motor Imagery BCI",
    "team": "EEG",
    "thumbnail": "/projects/t01-03/1.webp",
    "keywords": [
      "EEG",
      "Brain-Computer Interface (BCI)",
      "Signal Reconstruction",
      "Motor Imagery",
      "Temporal Convolutional Network (TCN)"
    ],
    "images": [
      "/projects/t01-03/1.webp",
      "/projects/t01-03/2.webp",
      "/projects/t01-03/3.webp",
      "/projects/t01-03/4.webp"
    ],
    "intent": "웨어러블 EEG 기기의 대중화로 일상 속 뇌파 측정이 가능해졌지만, 착용 편의성을 위해 채널 수를 줄인 저가형 기기는 대부분 전두엽 부근에만 전극을 배치한다. 문제는 운동 상상(Motor Imagery) 기반 BCI에서 가장 중요한 신경 신호(ERD/ERS)가 전두엽이 아닌 중심-두정부(Cz, C3, C4 등)에서 가장 강하게 나타난다는 점이다. 즉 사용하기 쉬운 기기일수록 정작 필요한 정보를 측정하지 못하는 구조적 한계가 있다.\n\n본 프로젝트는 이 간극을 소프트웨어적으로 메우고자, 전두엽 4채널(AF3, AF7, AF4, AF8)만으로 중심-두정부 채널을 복원하는 딥러닝 모델을 설계했다. 시간축 재구성 손실에 더해 Mu/Beta 대역을 직접 감독하는 스펙트럴 손실을 결합하고, 추론 시점에는 잔존하는 주파수 의존적 편향을 보정하는 후처리(Spectral Compensation)를 추가로 적용했다. 이를 통해 저채널 기기로도 고채널 측정에 준하는 신호 충실도를 확보하고, 나아가 실제 다운스트림 분류 과제에서도 유효한 정보로 활용될 수 있음을 검증하고자 한다.",
    "stack": {
      "skill": [
        "Python",
        "PyTorch",
        "TensorFlow/Keras"
      ],
      "tool": [
        "MNE-Python",
        "scikit-learn",
        "NumPy",
        "SciPy",
        "Matplotlib",
        "PhysioNet EEGMMIDB Dataset",
        "EEGNet",
        "Conda"
      ],
      "device": [
        "GPU: NVIDIA L40S (46GB), NVIDIA L40 (49GB), NVIDIA RTX A6000 (49GB) — 총 3장",
        "CPU: Intel Xeon Silver 4510 × 2 (소켓 2개, 소켓당 12코어/24스레드, 총 48논리코어)",
        "RAM: 251GB",
        "OS: Ubuntu 22.04.2 LTS",
        "CUDA: 12.6 (nvcc 기준) / Driver 565.77",
        "cuDNN: 9.2.0",
        "EEG Device: IronBCI"
      ]
    },
    "members": [
      {
        "name": "이현지",
        "role": "모델 개발",
        "comment": "서툴렀지만 누구보다 뜨거웠던 우리의 시간을 기억하며,",
        "song": "쏜애플 - 시퍼런 봄"
      },
      {
        "name": "신여진",
        "role": "데이터 수집",
        "comment": "우리가 묵묵히 걸어갈 모든 길을 진심으로 응원하겠습니다. 멋진 어른으로 성장해 사회에서 다시 만날 수 있길!",
        "song": "아이유 - 아이와 나의 바다"
      },
      {
        "name": "김채원",
        "role": "데이터 수집",
        "comment": "쉼 없이 달려온 길 위에서 때로는 멈추고 싶은 순간도 있었지만, 끝내 포기하지 않고 여기까지 함께해 온 우리 모두의 앞날을 진심으로 응원합니다.",
        "song": "윤하 – 오르트구름"
      },
      {
        "name": "홍수아",
        "role": "하드웨어 연동",
        "comment": "완벽하지 않았기에 더 많이 고민했고, 서툴렀기에 더 많이 배울 수 있었던 시간이었습니다. 함께 만들어 온 이 순간을 오래 기억하며, 앞으로 마주할 새로운 순간들도 우리답게 채워가기를!",
        "song": "나상현씨밴드-찬란"
      }
    ],
    "questions": [
      {
        "q": "게임 속에 빠진다면 팀원은 탱커, 딜러, 힐러, 서포터 중 어떤 역할일까요?",
        "a": "현지: 탱커-현지, 딜러-여진, 힐러-채원 , 서포터-수아\n여진: 탱커 - 수아, 딜러-현지, 서포터-여진, 힐러-채원\n채원: 탱커 - 여진, 딜러- 현지, 서포터- 수아, 힐러- 채원\n수아: 탱커 - 현지, 딜러 - 수아, 서포터 - 여진, 힐러 - 채원"
      }
    ],
    "thanksTo": "부족한 부분이 많았던 연구 방향을 매번 함께 고민해주시고, 실험 설계부터 결과 해석, 연구의 방향을 구체화하는 과정까지 세심하게 지도해주신 이재호 교수님께 진심으로 감사드립니다. 연구를 진행하며 막막하고 어려운 순간마다 문제를 바라보는 관점과 나아갈 방향을 제시해주신 덕분에 한 단계씩 성장하며 연구를 완성할 수 있었습니다. 교수님의 조언과 가르침을 통해 연구자로서 갖추어야 할 태도와 끈기 또한 배울 수 있었습니다. 앞으로도 배운 것들을 바탕으로 꾸준히 고민하고 성장하는 연구자가 되겠습니다."
  },
  {
    "id": "t01-04",
    "division": "01",
    "subtitle": "운전자의 상태를 살피고 함께하는 AI 조수석 친구",
    "name": "안전운전을 돕는 AI 친구, 초롱",
    "team": "Lov3",
    "thumbnail": "/projects/t01-04/1.webp",
    "keywords": [
      "Multimodal AI",
      "Driver Monitoring",
      "Drowsiness & Anger Detection",
      "iOS Application",
      "Personalized AI"
    ],
    "images": [
      "/projects/t01-04/1.webp",
      "/projects/t01-04/2.webp",
      "/projects/t01-04/3.webp",
      "/projects/t01-04/4.webp",
      "/projects/t01-04/5.webp",
      "/projects/t01-04/6.webp"
    ],
    "intent": "졸음과 분노는 운전 중 사고 위험을 높이는 주요 요인이지만, 기존 운전자 모니터링 시스템은 주로 눈 감김을 감지해 경고음을 제공하는 방식에 머물러 있습니다.\n\n초롱은 이러한 한계를 넘어 운전자의 상태를 ‘감시’하는 것이 아니라 ‘이해하고 함께 대응하는’ AI를 만들고자 시작되었습니다. 스마트폰의 카메라·마이크·GPS를 활용해 눈 감김과 하품, 표정, 목소리, 주행 상황을 실시간으로 분석하고 이를 하나의 위험도로 통합합니다.\n\n위험도가 높으면 즉각적인 휴식과 휴게소를 안내하고, 중간 단계에서는 끝말잇기나 대화, 음악으로 개입하며, 평상시에는 운전자의 취향과 말투를 반영한 대화를 제공합니다. 별도의 차량용 장비 없이 스마트폰만으로 사용할 수 있으며, 단순한 경고를 넘어 운전자의 상황에 공감하고 안전한 행동을 자연스럽게 제안하는 ‘조수석 친구’가 되는 것이 초롱의 목표입니다.",
    "stack": {
      "skill": [
        "Swift",
        "Python"
      ],
      "tool": [
        "SwiftUI",
        "Xcode",
        "FastAPI",
        "Uvicorn",
        "OpenCV",
        "dlib",
        "TensorFlow/Keras",
        "PyTorch (+ transformers, librosa)",
        "ONNX",
        "Whisper",
        "Ollama(Qwen)",
        "OpenAI API",
        "TTS",
        "TestFlight",
        "Firebase",
        "Railway",
        "Docker",
        "Git/GitHub",
        "Figma"
      ],
      "device": [
        "iPhone (Front Camera · Microphone · GPS)"
      ]
    },
    "members": [
      {
        "name": "박재희",
        "role": "팀장 | 아키텍처 설계 · 풀스택 개발 · 배포",
        "comment": "우리 모두의 운전이 조금 더 안전해지고 즐거워지길 바랍니다. (초롱 초롱)",
        "song": "The Sound Providers - For Old Time's Sake (feat. Asheru)"
      },
      {
        "name": "김지우",
        "role": "이미지 파트 | 얼굴 이미지 분석 및 운전자 졸음·감정 인식 모델 개발",
        "comment": "운전자의 작은 표정과 감정 변화도 놓치지 않기 위해 열심히 밤새워 개발했습니다. 운전자의 든든한 조수석 친구, 초롱 많이 이용해 주세요!",
        "song": "백예린-0310"
      },
      {
        "name": "황유림",
        "role": "음성 파트 | 운전자 발화 분석·분노/스트레스 인식 모델 개발",
        "comment": "운전자의 말투와 감정을 놓치지 않으려고 서버부터 학습까지 꽉 붙잡았습니다. 조수석에서 같이 가는 초롱, 많은 관심 부탁드리겠습니다.",
        "song": "KC-L0v3"
      },
      {
        "name": "정희정",
        "role": "교통 파트 | 운전자에게 휴게소 정보 제공",
        "comment": "운전자의 안전을 위해 휴식공간을 제공하였습니다. 우리 만능 초롱이 많이 좋아 해 주세요!",
        "song": "비투비-너 없인 안 된다"
      }
    ],
    "questions": [
      {
        "q": "먼작귀 세계관에 빠진다면 팀원은 어떤 캐릭터가 될 것 같나요? (ex. 치이카와, 하치와레, 우사기, 쿠리만쥬, 모몽가, 랏코 등)",
        "a": "박재희 A. 다정다감함이 사람으로 태어나면 희정 언니… 💗 항상 사랑 가득 이모티콘까지 야무지게 보내주는 따수운 언니는 생각하면 치이카와가 생각나요. 그리구 유림 언니는 모이고 헤어질 때면 항상 우렁차고 씩씩하게 인사를 하는데요 ❤️‍🔥 말도 재치 있구 그래서 우사기가 생각납니다,,, 그러나 귀여운 모습을 보일 때면 랏코,,, 같기두 하구,,, 우리팀의 막내 지우는 세상 말랑말랑 ☁️ 합니다,, 으쌰으쌰 기운을 복 돋우고 함께 있으면 힐링되는 지우는 카니 💝\n김지우 A.\n재희 언니는 랏코! 🦦 팀장으로서 뭔가 척척 해결하고 팀원들을 이끌어주는 모습이 든든한 랏코랑 닮았어요. 근데 은근 장난스럽고 귀여운 모습이 있는 것도 비슷한 것 같아요ㅎㅎ\n희정 언니는 카니! 🦀 차분하고 다정하게 주변 사람들을 챙겨주는 느낌이 카니랑 잘 어울리는 것 같아요. 같이 있으면 편안해지는 느낌!\n유림 언니는 하치와레! 🐱 밝고 리액션도 좋고 같이 있으면 자연스럽게 분위기가 밝아지는 느낌이라 하치와레가 생각나요. 항상 먼저 반갑게 인사해주는 것도 잘 어울려요ㅎㅎ\n정희정 A.\n재희는 랏코 ♥ 이번 저희 팀장으로서 엄청난 역할을 해 주고, 이번 프로젝트에서 리더쉽 있게 너무 잘 이끌어 줬던 것 같습니다 ㅎㅎ 그리고 같이 기숙사 갈 때 마다 이야기를 나눴는데 열심히 살고 정말 착한 동생이라고 느꼈습니다 !\n지우는 카니 ♥ 처음에 정말 조용한 동생인 줄 알았는데 완전 반전 매력을 가지고 있었고, 같이 지낼 수록 안정적인 성격을 가진 우리 지우의 모습이 카니와 너무 잘 어울려요 ㅎㅎ ( 이런 성격을 너무나도 닮고 싶었답니다 ! )\n유림이는 하치와레 ♥ 시원 시원한 성격을 가지면서 너무 재밌는 유림이 ㅎㅎ 유림이랑 대화를 해 보면서 정말 재밌고 행복했어요 ! 시원 시원한 성격이 정말 반전 이었고 팀에서 긍정적인 파워도 많이 얻었답니다 !\n황유림 A.\n재희는 랏코~~🤘🏽\n팀장으로서 앞에서 척척 해내고 팀을 이끌어주는 모습이 든든한 랏코랑 닮았답니다~ 그러면서도 누구보다 귀여운 모습이 튀어나올 때가 있어서 그 튀어나오는 반전매력까지 랏코 그 자체.\n지우는 카니~~🆙\n지우는 볼수록 바위처럼 단단하고 야무진 매력이 있어요!! 부끄부끄 모습처럼 보여도 자기 몫은 착실하게 모든지 해내고, 함께 있으면 내 감정도 편안해지는 분위기가 카니랑 잘 어울린답니다.\n희정이는 치이카와~~🫶🏻\n희정이는 사람들 이야기할 때 항상 잘 들어주고 다정하게 반응해주는 게 너무너무/ 치이카와 같아요 ㅎㅎ 성격도 둥글둥글해서 같이 얘기하다 보면 괜히 마음이 편해지고 몽글몽글….<3"
      }
    ],
    "thanksTo": "프로젝트의 방향을 함께 고민하고 개발 과정에서 아낌없는 조언을 보내주신 이재호 지도교수님과 한이음 김미숙 멘토님께 감사드립니다. 또한 프로젝트를 테스트하고 다양한 의견을 전해주신 모든 분께 감사의 말씀을 전합니다."
  },
  {
    "id": "t01-05",
    "division": "01",
    "subtitle": "의미·영상 구조 기반 VVC 분할 후보 탐색 최적화",
    "name": "심플의 미학 in VVC Encoding",
    "team": "MJ",
    "thumbnail": "/projects/t01-05/1.webp",
    "keywords": [
      "VVC",
      "Complexity Reduction",
      "Encoding Complexity",
      "Split Mode"
    ],
    "images": [
      "/projects/t01-05/1.webp",
      "/projects/t01-05/2.webp",
      "/projects/t01-05/3.webp",
      "/projects/t01-05/4.webp"
    ],
    "intent": "최근 게임, 넷플릭스, 유튜브처럼 고해상도 영상의 수요가 증가하면서 영상을 더 적은 용량으로 전송하기 위한 압축 기술이 중요해졌습니다. 그중 VVC는 화질을 보존하며 높은 압축률을 제공하지만, 영상을 여러 블록으로 나누어 가장 효율적인 조합을 찾는 과정에서 많은 계산이 필요합니다.\n\n본 연구는 이러한 탐색 과정을 줄이기 위해 영상의 밝기 구조와 객체의 의미 정보를 함께 활용합니다. 사람, 사물, 배경처럼 화면 속 장면의 의미를 파악하고, 실제 영상의 밝기 변화와 경계 구조를 함께 분석해 각 분할 후보의 탐색 여부를 판단합니다. 실험을 통해 적합한 Pruning Algorithms을 설정하고, 이를 실제 VTM 코드에 반영하여 탐색 과정 축소 및 인코더 복잡도 감소를 달성하였습니다. 결과적으로 화질과 압축 효율은 최대한 유지하면서 인코딩 시간을 줄이고, 더 빠르고 효율적인 차세대 영상 압축의 가능성을 확인하고자 하였습니다.",
    "stack": {
      "skill": [
        "C++",
        "Python"
      ],
      "tool": [
        "VTM-24.0",
        "YOLOv8m-seg",
        "PyTorch",
        "Ultralytics",
        "CUDA",
        "GCC",
        "CMake",
        "Git",
        "Ubuntu",
        "H.266/VVC",
        "JVET CTC",
        "Semantic Segmentation",
        "Luma Structural Analysis",
        "Model-Free Candidate Scoring",
        "Risk-Calibrated Adaptive QTMT Pruning"
      ],
      "device": [
        "NVIDIA GeForce RTX 3090",
        "Linux Encoding Server"
      ]
    },
    "members": [
      {
        "name": "김민정",
        "role": "모든 것…",
        "comment": "지금 잘 살고 있는지 확신이 없지만 그래도 지금 필요한 건 새로운 가능성을 더 찾는게 아니라, 이미 보이는 가능성 중 하나를 골라 깊이 만드는 것이란 걸 알아요. 그리고 이게 제가 고른 가능성입니다.",
        "song": "뉴진스 - 우리의 밤은 당신의 낮보다 아름답다"
      }
    ],
    "questions": [
      {
        "q": "게임 속에 빠진다면 나는 탱커, 딜러, 힐러, 서포터 중 어떤 역할일까?",
        "a": "딜러. 너무 앞에 나서는 건 무섭고, 그렇다고 너무 뒤에 빠지는 건 답답해서 중간에서 팀을 지휘할 것 같다. 마치 미식축구의 쿼터백처럼."
      }
    ],
    "thanksTo": "필요한 게 있으면 언제든 말하라던 든든한 이재호 교수님, 어느날 갑자기 들어온 나를 살뜰히 챙겨준 IPSL 연구실 사람들, 내가 뭘 하고 다니는지 잘은 몰라도 존재 만으로 든든한 부모님, 나의 정서 불안을 잠재워주는 민서와 항상 잼얘를 물어와 누나의 도파민을 챙겨주는 민겸이."
  },
  {
    "id": "t01-06",
    "division": "01",
    "subtitle": "기록 기반 독서 습관 형성 AI 플랫폼",
    "name": "BOOKSTAY",
    "team": "OG",
    "thumbnail": "/projects/t01-06/1.webp",
    "keywords": [
      "App",
      "AI",
      "시선 추적"
    ],
    "images": [
      "/projects/t01-06/1.webp",
      "/projects/t01-06/2.webp",
      "/projects/t01-06/3.webp",
      "/projects/t01-06/4.webp",
      "/projects/t01-06/5.webp",
      "/projects/t01-06/6.webp"
    ],
    "intent": "독서 습관이 형성되지 않은 사람도 꾸준히 책을 읽을 수 있도록  목표 설정부터 독서 기록, 습관 유지까지의 독서의 전 과정을 단계적으로 도와줄 수 있는 앱을 목표로 기획하게 되었습니다.",
    "stack": {
      "skill": [
        "React Native",
        "NestJS",
        "PostgreSQL"
      ],
      "tool": [
        "vs code",
        "expo app",
        "gogamza/kobart-summarization"
      ],
      "device": [
        "phone",
        "notebook"
      ]
    },
    "members": [
      {
        "name": "정윤선",
        "role": "팀장/AI 모델 & 프론트엔드",
        "comment": "졸업 프로젝트 하면서 많은 것을 경험했습니다.",
        "song": "세븐틴 - 청춘찬가"
      },
      {
        "name": "양현지",
        "role": "팀원/ AI 모델 & 프론트엔드&형상관리",
        "comment": "수고하셨습니다.",
        "song": "RESCENE - Deja Vu"
      },
      {
        "name": "이솔희",
        "role": "팀원/프론트엔드 & 백엔드",
        "comment": "모두 고생 하셨습니다 ~",
        "song": "Justin Bieber - DAISES"
      },
      {
        "name": "이하영",
        "role": "팀원/프론트엔드 & 백엔드",
        "comment": "많이 배우고 갑니다.",
        "song": "방탄소년단 - So What"
      },
      {
        "name": "윤주영",
        "role": "팀원/프론트엔드 & 백엔드",
        "comment": "정말 고생 많았습니다.",
        "song": "체리필터-Happy Day"
      }
    ],
    "questions": [
      {
        "q": "사이보그가 될 수 있는 기회가 생긴다면 가장 먼저 지원할 것 같은 팀원은 누구인가요?",
        "a": "정윤선: 이솔희 팀원이 지원할 것 같습니다. 왜냐하면 도전하는 것을 좋아하는 팀원이기 때문입니다.\n이솔희:  정윤선 팀원이 가장 먼저 지원할 것 같습니다.\n이하영: 제가 지원할 것 같습니다! 밤새 개발할 수 있는 체력 짱짱맨이 되고 싶습니다.\n윤주영: 저입니다. 로봇이 더 튼튼할 것 같기 때문입니다.\n양현지: 정윤선 팀원입니다. SF 장르를 좋아한다고 해서  제일 먼저 지원할 것 같습니다."
      }
    ],
    "thanksTo": "프로젝트에 관련해서 고민이 많았었는데 아이디어 를 많이 주시고 방향을 제시해주신 이재호 교수님께 감사의 인사를 올립니다."
  },
  {
    "id": "t02-01",
    "division": "02",
    "subtitle": "기술 범죄의 위험성을 파헤치는 2인 협동 공포 미스터리 게임",
    "name": "DEFRAG",
    "team": "바빠도 게임은 해야지",
    "thumbnail": "/projects/t02-01/1.webp",
    "keywords": [
      "Co-op Horror",
      "Two-Player Multiplayer",
      "Deepfake",
      "Digital Identity",
      "Stealth"
    ],
    "images": [
      "/projects/t02-01/1.webp",
      "/projects/t02-01/2.webp",
      "/projects/t02-01/3.webp",
      "/projects/t02-01/4.webp",
      "/projects/t02-01/5.webp",
      "/projects/t02-01/6.webp"
    ],
    "intent": "소리를 내면 들키고, 조용히 있어도 누군가 다가온다.\n\n『DeFrag』는 딥페이크 범죄와 디지털 정체성 문제를 소재로 한 2인 협동 공포 게임이다. 우리는 자신의 얼굴과 목소리가 타인의 도구가 될 수 있다는 불안을, 정체를 알 수 없는 존재들이 도사리는 시설 속 공포로 옮기고자 했다. 기술의 위험을 설명하기에 앞서, 플레이어가 불안과 긴장을 직접 겪는 경험을 만들고자 했다.\n\n두 플레이어는 카메라와 해킹패드를 나누어 들고 시설을 탐색한다. 한 명이 장치에 집중하는 동안 다른 한 명은 주변을 살펴야 한다. 화면을 매개로 마주하는 TV 몬스터, 소음을 경계하게 만드는 입 모양 몬스터, 가까이 숨어들어 진행을 방해하는 유령은 서로 다른 방식으로 행동을 압박한다. 동료에게 상황을 전하고 싶어도, 소리를 내는 일이 두려워진다. 눈앞의 작업과 보이지 않는 위협 사이에서 주의는 계속 흔들린다.\n\n이 공포의 바탕에는 ‘보고 들은 것을 어디까지 믿을 수 있는가’라는 질문이 있다. 『DeFrag』는 생존을 위한 관찰과 협력을 통해 정보의 신뢰성을 돌아보게 한다. 시설을 벗어난 뒤에도, 화면 너머의 얼굴과 목소리를 대하는 감각에 작은 의문이 남기를 바란다.",
    "stack": {
      "skill": [
        "C#"
      ],
      "tool": [
        "Blender",
        "Unity HDRP",
        "Figma",
        "Notion",
        "GitHub Desktop",
        "Git LFS",
        "Codex",
        "Tripo 3D",
        "Meshy AI",
        "Kling 3.0",
        "Claude Code",
        "Artlist"
      ],
      "device": [
        "PC"
      ]
    },
    "members": [
      {
        "name": "주은서",
        "role": "모델링, 미니게임 기믹 제작, 힌트 및 퀘스트 설계",
        "comment": "수많은 게임이 넘쳐나는 지금 시대에 저희가 만든 게임이 여러분에게 재미를 줄 수 있었으면 좋겠습니다.",
        "song": "ZARD- 負けないで"
      },
      {
        "name": "최서연",
        "role": "게임 네트워크, 세부 기능 제작",
        "comment": "바쁘신 여러분의 일상에 저희 게임이 소소한 즐거움으로 하루쯤 자리할 수 있기를…",
        "song": "Ayase - シネマ"
      },
      {
        "name": "김영주",
        "role": "프로그래머, UI 작업, 몬스터 구현",
        "comment": "게임만큼 종합예술적인 매체는 없다고 생각합니다.",
        "song": "MAKOTCH, YURI, & TOMICA - Receive You"
      },
      {
        "name": "김연진",
        "role": "모델링, 영상/애니메이션 제작, 디자인",
        "comment": "복잡한 일상 속, 게임으로 잠시 마음의 쉼표를 얻어보세요",
        "song": "wave to earth - annie."
      },
      {
        "name": "이혜준",
        "role": "모델링",
        "comment": "전시회에 걸린 작품으로서 여러분께 기억에 남는 게임이 되었으면 좋겠습니다.",
        "song": "Colde(콜드)-와르르"
      }
    ],
    "questions": [
      {
        "q": "먼작귀 세계관에 빠진다면 팀원은 어떤 캐릭터가 될 것 같나요?",
        "a": "최서연-시사, 이혜준-랏코, 주은서-모몽가, 김영주-쿠리만쥬, 김연진-우사기"
      }
    ],
    "thanksTo": "작품의 재미와 가능성을 믿고 지도해 주신 박태정 교수님, 몬스터 사운드 제작에 도움을 주신 최예린 님, 프로젝트 마일스톤 설계를 도와주신 맹정하 님께 감사드립니다."
  },
  {
    "id": "t02-02",
    "division": "02",
    "subtitle": "스마트 수거 디바이스와 AI 객체 탐지 기반 플로깅 환경 데이터 축적 플랫폼",
    "name": "PLOGRiD",
    "team": "줍줍단",
    "thumbnail": "/projects/t02-02/1.webp",
    "keywords": [
      "Environment",
      "AI",
      "IoT",
      "Backend",
      "Frontend"
    ],
    "images": [
      "/projects/t02-02/1.webp",
      "/projects/t02-02/2.webp",
      "/projects/t02-02/3.webp",
      "/projects/t02-02/4.webp",
      "/projects/t02-02/5.webp",
      "/projects/t02-02/6.webp"
    ],
    "intent": "기존 쓰레기 데이터는 행정구역과 처리시설을 중심으로 집계되어 실제 생활 공간에서 쓰레기가 어디에 집중되고 반복적으로 발생하는지 파악하기 어렵고, 민원에 의존한 사후 대응이 이루어지고 있습니다. 이러한 문제를 해결하기 위해 시민의 플로깅 활동에서 쓰레기 정보를 자동으로 수집하고 분석하여 생활 공간의 환경 데이터를 확보할 필요가 있다고 생각하였습니다.\n\n이에 IoT 스마트 수거 디바이스와 AI 쓰레기 분류 기술을 활용하여 플로깅 중 수거한 쓰레기의 종류와 위치, 시간을 자동으로 기록하고 쓰레기 발생 데이터를 수집하는 플랫폼을 개발하고자 하였습니다. 또한 플로깅 트래킹 시스템과 올바른 분리배출 방법 안내 방법 제공을 통해 시민의 지속적인 환경 정화 활동을 장려하고자 하였습니다.\n\n축적된 데이터를 기반으로 쓰레기 취약 지역과 반복 발생 패턴을 파악하고, 지역별 환경 문제에 대한 선제 대응과 지속적인 환경 관리가 가능하게 하는 것을 목표로 합니다.",
    "stack": {
      "skill": [
        "Java",
        "Spring Boot",
        "FastReact",
        "TypeScript",
        "Python",
        "LangChain",
        "C++",
        "PyTorch"
      ],
      "tool": [
        "VS Code",
        "IntelliJ IDEA",
        "PyCharm",
        "YOLOv11m",
        "AWS"
      ],
      "device": [
        "Raspberry Pi 4 Model B",
        "SparkFun AS7265x Triad Spectroscopy Sensor",
        "Raspberry Pi Camera Module 3",
        "u-blox NEO-M8N GPS Module",
        "LR7843 MOSFET Module",
        "MG90S Micro Servo",
        "HC-SR04 Ultrasonic Sensor",
        "5V White LED Strip"
      ]
    },
    "members": [
      {
        "name": "이소정",
        "role": "팀장, Backend, Frontend, Chatbot, Design",
        "comment": "나보고 이제 학교에서 썩 나가라고?",
        "song": "TUIDE - GRLS"
      },
      {
        "name": "권유진",
        "role": "AI, Frontend",
        "comment": "친구들이 졸업하면 저는 이제 어떠카져?",
        "song": "봄여름가을겨울 - Bravo My Life"
      },
      {
        "name": "김도연",
        "role": "AI",
        "comment": "인생 튜토리얼 끝, 이제 진짜 생존 게임. 가보자고.",
        "song": "윤하 - 26"
      },
      {
        "name": "고현아",
        "role": "Hardware",
        "comment": "내가 해냄.",
        "song": "B1A4 - D-DAY"
      }
    ],
    "questions": [
      {
        "q": "팀원에게 텔레파시를 보내 한 장소에서 모인다면 어디에서 만날 것 같나요?",
        "a": "도연 - 졸프실인 320-1\n소정 - 22\n현아 - 33\n유진 - 44"
      }
    ],
    "thanksTo": "박태정 교수님, 프로젝트의 방향을 잡아주시고 끝까지 지도해주셔서 감사드립니다. 교수님께 배운 시선과 질문하는 태도를 바탕으로 계속 성장하는 개발자가 되겠습니다.\n\n김명수 멘토님, 현업의 관점에서 조언해주신 덕분에 스마트 플로깅 시스템을 완성할 수 있었습니다. 프로젝트를 함께 고민하며 배운 점들을 앞으로의 개발에 잘 활용하겠습니다.\n\n두 분께 진심으로 감사드립니다."
  },
  {
    "id": "t02-03",
    "division": "02",
    "subtitle": "시선추적 기반 수학 풀이 습관 진단 및 메타인지 강화 시스템",
    "name": "FHTC (Facial & Habitual Tracking Core)",
    "team": "FHTC",
    "thumbnail": "/projects/t02-03/1.webp",
    "keywords": [
      "Reasoning LLM",
      "LLM-as-a-Judge",
      "Chain-of-Thought",
      "Multimodal",
      "Eye Tracking"
    ],
    "images": [
      "/projects/t02-03/1.webp",
      "/projects/t02-03/2.webp",
      "/projects/t02-03/3.webp",
      "/projects/t02-03/4.webp",
      "/projects/t02-03/5.webp",
      "/projects/t02-03/6.webp"
    ],
    "intent": "초등학생이 수학 문제를 틀렸을 때 채점표에는 '틀렸다'는 사실만 남습니다. 문제를 끝까지 읽지 않았는지, '남은'·'이상' 같은 조건어를 놓쳤는지, 고민 없이 찍었는지는 알 수 없습니다. 원인이 다르면 교정 방법도 달라야 하지만, 지금의 학습 도구는 대부분 정답 여부에 머물러 있습니다.\n\nFHTC는 그 원인을 학생의 시선에서 찾습니다. 별도 장비 없이 웹캠만으로 초당 30회 시선을 받아 문장을 어떤 순서로 읽었는지 낱말 단위로 복원하고, 문제 미독·찍기·관계어 누락 등 6가지 풀이 습관을 진단합니다. 추론 과정을 그대로 드러내는 QwQ-32B가 미리 풀어 둔 모범 풀이 경로와 학생의 시선을 단계별로 맞대어, 생각이 처음 갈라진 지점을 짚어줍니다.\n\n진단은 무엇보다 믿을 수 있어야 합니다. AI-Hub 원본 3,992문항에서 120문항을 재구축하고 개념·추론 원문·타 모델 교차의 3중 검증을 통과한 109문항만 출제하도록 하였습니다. 규칙 판정과 LLM 판정은 서로 덮어쓰지 않고 일치도로 비교합니다. 점수가 아닌 풀이 과정을 보여주어, 아이 스스로 자신의 풀이 습관을 돌아보는 메타인지를 기르는 것이 저희 프로젝트의 목표입니다.",
    "stack": {
      "skill": [
        "Python",
        "JavaScript",
        "HTML/CSS",
        "SVG"
      ],
      "tool": [
        "QwQ-32B(모범 풀이 기준선 생성 · 패턴 판정 · 오답 진단)",
        "DeepSeek-R1 70B(교차 검증)",
        "SeeSo Eye-tracking SDK(웹캠 기반)",
        "React 18",
        "Vite"
      ],
      "device": [
        "웹캠(노트북 · PC 내장)",
        "GPU 연구 서버"
      ]
    },
    "members": [
      {
        "name": "신윤서",
        "role": "AI · 백엔드 개발 — 규칙/LLM 판정 파이프라인 구축, FastAPI 서버 설계 및 모델 연동",
        "comment": "맡은 파트를 책임감 있게 끝까지 완수하려 노력했습니다. 그 과정을 함께해준 윤지언니 덕분에 잘 마무리할 수 있었던 것 같아 고맙습니다.",
        "song": "nct wish - boy meets girl"
      },
      {
        "name": "이윤지",
        "role": "AI · 데이터 공동 개발 — 추론 모델 선정 및 프롬프트 설계 · QwQ-32B 기준선 구축 및 3중 교차 검증 · AI-Hub 데이터 파이프라인 · 시선 데이터 처리 및 오답 패턴 탐지 · 규칙/LLM 판정 구조 설계",
        "comment": "막힐 때마다 원인을 끝까지 파고들고, 맡은 부분은 믿고 맡길 수 있게 해내려 했습니다. 서로의 아이디어를 더해 가며 FHTC를 완성할 수 있어 뿌듯하고, 함께해 준 윤서에게 고맙습니다.",
        "song": "[Demxntia & marc indigo - Date Night]"
      }
    ],
    "questions": [
      {
        "q": "팀원에게 텔레파시를 보내 한 장소에서 모인다면 어디에서 만날 것 같나요?",
        "a": "이윤지 : 계속 함께 있던 장소라, 연구실에서 만날 것 같습니다! ㅎㅎ\n신윤서 : 연구실 세미나 끝나고 자주 가던 에끼에서 모일 것 같습니다~"
      }
    ],
    "thanksTo": "To. 박교수님과 마이클님\n프로젝트를 진행하는 내내 막막할 때마다 방향을 잡아주시고, 늘 세심하게 신경 써주신 지도교수님 박태정 교수님께 깊이 감사드립니다. 교수님의 조언 덕분에 흔들리지 않고 끝까지 나아갈 수 있었습니다.\n그리고 프로젝트 곳곳에서 아낌없이 도움을 주신 마이클님께도 진심으로 감사드립니다. 마이클님의 도움 덕분에 부족했던 부분들을 채우며 한 걸음 더 성장할 수 있었습니다.\n\n두 분 덕분에 이 프로젝트를 무사히 마무리할 수 있었습니다. 진심으로 감사드립니다."
  },
  {
    "id": "t02-04",
    "division": "02",
    "subtitle": "스마트홈 IoT 기기 보안 위험도 분석 및 맞춤형 보안 가이드 시스템",
    "name": "HomeMungchi",
    "team": "HP",
    "thumbnail": "/projects/t02-04/1.webp",
    "keywords": [
      "IoT",
      "Vulnerability Analysis",
      "Risk Assessment",
      "Security",
      "Smart Home"
    ],
    "images": [
      "/projects/t02-04/1.webp",
      "/projects/t02-04/2.webp",
      "/projects/t02-04/3.webp",
      "/projects/t02-04/4.webp",
      "/projects/t02-04/5.webp",
      "/projects/t02-04/6.webp"
    ],
    "intent": "스마트홈 환경이 확산되면서 공유기, IP 카메라, 스마트 플러그 등 다양한 IoT 기기가 일상에서 사용되고 있지만, 일반 사용자가 각 기기의 보안 상태를 직접 확인하고 적절한 조치를 취하기는 어렵다. 특히 불필요하게 개방된 포트, 기본 계정 사용, 알려진 취약점과 같은 위험 요소는 사용자가 인지하지 못한 채 방치될 수 있다.\n\nHomeMungchi는 동일 네트워크에 연결된 IoT 기기를 탐색하고, 수집된 정보를 기반으로 보안 위험 요소를 분석하여 기기별 위험도를 제공하는 스마트홈 보안 관리 시스템이다. 분석 결과는 단순한 수치에 그치지 않고 사용자가 이해할 수 있는 형태의 보안 가이드로 변환하여 제공한다. 이를 통해 전문적인 보안 지식이 없는 사용자도 스마트홈 환경의 위험 요소를 쉽게 확인하고 직접 개선할 수 있도록 하는 것을 목표로 한다.",
    "stack": {
      "skill": [
        "Python",
        "TypeScript",
        "JavaScript",
        "HTML/CSS"
      ],
      "tool": [
        "FastAPI",
        "React",
        "Tailwind CSS",
        "Nmap",
        "GitHub",
        "OpenAI API",
        "CVSS 기반 취약점 위험도 분석",
        "AI 기반 보안 가이드 생성"
      ],
      "device": [
        "Raspberry Pi 4"
      ]
    },
    "members": [
      {
        "name": "권태연",
        "role": "기획 및 전체 시스템 개발",
        "comment": "사회를 향해 뚜벅뚜벅 나아갑니다",
        "song": "Meghan Trainor- Woman Up"
      },
      {
        "name": "신현서",
        "role": "기획 및 전체 시스템 개발",
        "comment": "태연이랑 졸프를 하게 되어서 대학생활 마지막까지 즐거웠어! 이제 취업 가보자고🔥",
        "song": "윤하 - 오르트 구름"
      }
    ],
    "questions": [
      {
        "q": "게임 속에 빠진다면 팀원은 탱커, 딜러, 힐러, 서포터 중 어떤 역할일까요?",
        "a": "현서: 태연이는 서포터. 탱커하기에는 멘탈적으로 힘들어 할 것 같고 딜러하기에는 마음이 여려요. 남은 힐러랑 서포터 둘 다 어울려서 고민되었는데, 항상 묵묵히 맡은 일을 해내고, 눈에 잘 띄지 않는 부분까지 든든하게 채워주는 모습이 서포터와 가장 잘 어울려요. 딜러는 제가 할게요.\n태연 : 제가 게임을 잘 몰라서 탱커와 딜러가 어떤 역할인지 찾아봤는데요, 현서님은 공격수인 딜러가 잘 어울리는 것 같습니다. 딜러는 상황을 빠르게 판단하고 대처하는 게 중요하다고 하더라고요. 프로젝트를 하면서 느낀 건데,  현서님이 상황을 빠르게 판단하고, 문제 상황을 잘 해결해나가요. 그래서 딜러라는 역할이 딱 떠올랐네요! 게임 안에서도 믿고 의지할 수 있는 딜러일 것 같습니다 ㅎㅎ."
      }
    ],
    "thanksTo": "홈뭉치가 전시장에 서기까지, 결코 혼자의 힘만으로는 완성할 수 없었습니다. 긴 여정 동안 서로를 믿고 함께해 온 서로에게 가장 먼저 고마움을 전합니다. 따뜻한 조언과 격려를 아끼지 않으신 박태정 교수님께도 진심으로 감사드립니다. 사이버보안전공이라는 이름은 이제 추억으로 남았지만, 4년간 즐거운 학교생활을 함께한 동기들에게도 감사한 마음입니다.\n\n이번 전시를 위해 애써 주신 모든 분께 감사드리며, 이 시간이 모두에게 오래도록 뜻깊고 좋은 기억으로 남기를 바랍니다."
  },
  {
    "id": "t02-05",
    "division": "02",
    "subtitle": "Peng & Kuo Octree 코덱의 확률 추정 휴리스틱을 신경망으로 대체한 무손실 3D Mesh 압축",
    "name": "Mesh Compression Based On DL",
    "team": "PenQueens",
    "thumbnail": "/projects/t02-05/1.webp",
    "keywords": [
      "3D Mesh Compression",
      "Deep Learning",
      "Transformer",
      "Octree Decomposition",
      "Lossless Compression"
    ],
    "images": [
      "/projects/t02-05/1.webp",
      "/projects/t02-05/2.webp",
      "/projects/t02-05/3.webp",
      "/projects/t02-05/4.webp",
      "/projects/t02-05/5.webp",
      "/projects/t02-05/6.webp"
    ],
    "intent": "3D mesh를 무손실로 압축하는 기존 알고리즘(Peng & Kuo, SIGGRAPH 2005)은 옥트리 구조로 mesh를 분할하며 매 단계 이 형태·연결이 나올 확률을 추정해 arithmetic coding으로 압축한다. 이 확률 추정은 삼각형 정규성 등 사람이 손으로 설계한 휴리스틱 공식에 의존하는데, 실제 데이터 분포와 잘 맞지 않아 압축 효율에 한계가 있다. 본 프로젝트는 이 휴리스틱을 실제 대량의 3D mesh 데이터로 학습한 Transformer 신경망으로 대체해, 압축 알고리즘의 무손실성과 구조는 그대로 유지하면서 확률 추정의 정확도를 높여 압축률(bits per vertex)을 개선하는 것을 목표로 한다. mesh 분할 시 공간 점유 여부를 예측하는 geometry-coder와, 정점 분리 시 주변 이웃과의 연결 관계를 예측하는 connectivity-coder 두 개의 신경망을 각각 학습하고, 이후 기존 C++ 코덱과 end-to-end로 연결해 실제 압축 성능(bpv, PSNR-D1, BD-rate 등)을 기존 방식과 정량 비교한다.",
    "stack": {
      "skill": [
        "Python",
        "C++20",
        "Bash",
        "YAML"
      ],
      "tool": [
        "PyTorch",
        "PyTorch Lightning",
        "자체 구현 Spatial Transformer (geometry-coder / connectivity-coder)",
        "TensorBoard",
        "Docker",
        "CMake",
        "Eigen(C++ 선형대수 라이브러리)",
        "nlohmann/json",
        "Git / GitHub",
        "Conda"
      ],
      "device": [
        "NVIDIA RTX 2080 Ti × 8 (DDP 멀티 GPU 분산학습)",
        "리눅스 서버(다중 GPU 노드)"
      ]
    },
    "members": [
      {
        "name": "김지은",
        "role": "Geometry-coder / Connectivity-coder 모델 설계, 학습 및 성능 개선, 데이터 파이프라인 구축 및 학습 인프라(GPU 서버, 분산학습 환경) 운영, 모델 평가",
        "comment": "4년간의 학업의 마무리가 년 간의 프로젝트로 이렇게 마무리 할 수 있어서 기쁩니다 :) 4년에 가까운 시간 동안 나의 운명 공동체였던 지워나 고생 많았고, 사랑해!!",
        "song": "EXO-3.6.5"
      },
      {
        "name": "이지원",
        "role": "Geometry-coder / Connectivity-coder 모델 설계, 학습 및 성능 개선, 데이터 파이프라인 구축 및 학습 인프라(GPU 서버, 분산학습 환경) 운영, 모델 평가",
        "comment": "1년간의 긴 여정을 이렇게 마치게 되니 감회가 새롭습니다. 그 누구보다 제 팀원 지은아 너무 고맙고 사랑해. 이제 여행가자~~!!!",
        "song": "권진아-Raise Up The Flag"
      }
    ],
    "questions": [
      {
        "q": "팀 내에서 가장 좋아하는 조합은 무엇인가요?",
        "a": "원조부안집 덕성여대점에서 개발한 클라우드 소맥 (맥주 : 소주 == 2 : 1)\n아옛날이여고래사냥 막걸리와 부추전"
      }
    ],
    "thanksTo": "To. 박태정 교수님, 감형렬 박사님.\n\n1년간 저희 프로젝트를 세심하게 지도해주신 교수님과 박사님께 진심으로 감사드립니다. 막막하고 방향을 못 잡을 때마다 해주신 조언이 큰 도움이 되었고, 저희가 보지 못한 점들을 짚어주실 때마다 프로젝트가 한 단계씩 더 성장할 수 있었습니다. 교수님, 박사님 덕분에 끝까지 포기하지 않고 여기까지 올 수 있었습니다. 진심으로 감사합니다. 효도할게요 ㅎㅎㅎ"
  },
  {
    "id": "t02-06",
    "division": "02",
    "subtitle": "3D Gaussian Splatting을 이용한 단일 Depth 카메라 기반 다중 시점 얼굴 복원",
    "name": "Look There",
    "team": "Surface",
    "thumbnail": "/projects/t02-06/1.webp",
    "keywords": [
      "3D Gaussian Splatting (3DGS)",
      "Eye-Tracking",
      "RGB-D Reconstruction"
    ],
    "images": [
      "/projects/t02-06/1.webp",
      "/projects/t02-06/2.webp",
      "/projects/t02-06/3.webp",
      "/projects/t02-06/4.webp",
      "/projects/t02-06/5.webp"
    ],
    "intent": "AI 스마트홈(IoT) 및 자율주행(모빌리티) 등 시선 추적 기술의 수요는 증가하고 있으나, 정확한 추적을 위해 다중 카메라를 설치하는 것은 비용과 공간 측면에서 큰 제약이 따릅니다. 저희 팀은 Azure Kinect 한 대로 촬영한 RGB-D 데이터만으로 3D Gaussian Splatting 기반 얼굴 복원을 수행해, 여러 대의 카메라로 찍은 것과 같은 다양한 시점의 영상을 합성하는 것을 목표로 합니다.\n\n이를 통해 두 활용 방향을 탐색합니다. 첫째, 복원된 3D 얼굴 모델과 프레임별 시선 좌표를 이용해 사용자의 시선 목표 지점에 가상 카메라를 두고 렌더링함으로써, 실제 거울을 보는 듯한 '스마트 미러' 자기 시점 영상을 만듭니다. 둘째, 차량 실내처럼 카메라를 늘리기 어려운 환경에서 한 대의 Depth 카메라만으로 다중 시점 효과를 얻어 시선 추적 성능을 높일 가능성을 실험합니다.\n\n이 과정에서 각막 반사로 인한 Depth 왜곡을 보정하는 파이프라인을 구현하고, PCGS 등 최신 3DGS 렌더링 기법을 적용해 복원 품질을 개선하고 있습니다.",
    "stack": {
      "skill": [
        "Python",
        "C++",
        "CUDA",
        "JavaScript",
        "Shell Script"
      ],
      "tool": [
        "3D Gaussian Splatting",
        "PyTorch",
        "OpenCV",
        "Open3D",
        "Three.js",
        "Docker",
        "Git"
      ],
      "device": [
        "Azure Kinect (RGB-D 카메라)",
        "NVIDIA RTX 2080 Ti"
      ]
    },
    "members": [
      {
        "name": "김성희",
        "role": "Computer Vision Researcher",
        "comment": "지나고 나면 오래 기억될, 우리의 푸른 시간",
        "song": "엔플라잉-Blue Moon"
      },
      {
        "name": "한연주",
        "role": "Computer Vision Researcher",
        "comment": "우리가 진짜 졸업을 하게될 줄 몰랐어",
        "song": "LUCY-아지랑이"
      }
    ],
    "questions": [
      {
        "q": "팀원에게 텔레파시를 보내 한 장소에서 모인다면 어디에서 만날 것 같나요?",
        "a": "A 김성희: 차관 429 연구실\nA 한연주: 학연생 연구실…?"
      }
    ],
    "thanksTo": "To. 박태정 교수님\n\n졸업 프로젝트를 무사히 마무리할 수 있었던 것은 모두 교수님의 따뜻한 지도 덕분입니다. 프로젝트 과정에서 저희가 막히거나 어려움을 겪을 때마다 묵묵히 방향을 잡아주시고 따뜻하게 이끌어주신 덕에 큰 힘이 되었습니다. 프로젝트 내내 저희 둘 다 정말 많이 배우고 성장할 수 있었습니다. 늘 감사드리고, 앞으로도 기대에 부응하는 제자들이 되겠습니다. 진심으로 감사드립니다 :)"
  },
  {
    "id": "t03-01",
    "division": "03",
    "subtitle": "AI 음성 분석 기반 능동형 언어 습관 교정 시스템",
    "name": "TiNT",
    "team": "로로",
    "thumbnail": "/projects/t03-01/1.webp",
    "keywords": [
      "Edge AI",
      "IoT",
      "음성 데이터 분석"
    ],
    "images": [
      "/projects/t03-01/1.webp",
      "/projects/t03-01/2.webp",
      "/projects/t03-01/3.webp",
      "/projects/t03-01/4.webp",
      "/projects/t03-01/5.webp"
    ],
    "intent": "온라인 게임, 가정, 일상 대화에서 무심코 반복되는 공격적 언어와 비속어는 개인의 언어 습관뿐 아니라 주변 사람과의 관계에도 부정적인 영향을 줄 수 있습니다. TiNT는 단순히 특정 비속어를 탐지하는 것을 넘어 사용자의 실제 발화를 실시간으로 수집하고 텍스트의 문맥과 음성의 톤을 함께 분석하여 발화의 위험도를 판단하는 능동형 언어 습관 교정 시스템입니다.\n\n라즈베리파이에서 동작하는 로컬 AI를 통해 일상적인 발화를 우선 분류하고 추가적인 판단이 필요한 발화는 클라우드 AI가 문맥과 음성의 음량·피치 등의 특징을 종합하여 심층 분석합니다. 위험도가 높은 발화에는 조명 점등 스피치 재머 작동 등 물리적 개입을 통해 사용자가 자신의 발화를 즉각 인지하고 조절할 수 있도록 설계했습니다.\n\n또한 분석 결과를 대시보드에 기록하고 시각화하여 자신의 언어 습관과 변화 과정을 지속적으로 확인할 수 있도록 했습니다. 이를 통해 TiNT는 단순한 일회성 경고를 넘어 사용자가 자신의 언어 습관을 인식하고 긍정적인 방향으로 개선해 나갈 수 있도록 돕는 것을 목표로 합니다.",
    "stack": {
      "skill": [
        "Python",
        "JavaScript (JSX)",
        "CSS"
      ],
      "tool": [
        "React",
        "Firebase Firestore",
        "KcBERT",
        "Gemini 2.5 Flash",
        "librosa",
        "SpeechRecognition",
        "Transformers"
      ],
      "device": [
        "Raspberry Pi",
        "USB Microphone",
        "AUX Speaker",
        "Arduino Nano"
      ]
    },
    "members": [
      {
        "name": "김서현",
        "role": "하드웨어, AI 분석, 백엔드, 프론트엔드",
        "comment": "끝나고 엄청나게 맛있는 거 먹어줄 테다",
        "song": "NCT 127 - 無限的我 (무한적아;Limitless)"
      },
      {
        "name": "김여진",
        "role": "프론트엔드",
        "comment": "(배우고)갑니다",
        "song": "ASAHI x HARUTO - THANK YOU"
      },
      {
        "name": "한수현",
        "role": "프론트엔드",
        "comment": "화이팅!!!!!!!",
        "song": "Coldplay - feelslikeimfallinginlove"
      }
    ],
    "questions": [
      {
        "q": "먼작귀 세계관에 빠진다면 팀원은 어떤 캐릭터가 될 것 같나요?",
        "a": "달다구리 중독 랏코를 닮은 서현\n조용하지만 사고뭉치인 모몽가를 닮은 여진\n살짝 울보지만 상냥한 성격인 치이카와를 닮은 수현"
      }
    ],
    "thanksTo": "강지헌 교수님께\n\n졸업프로젝트를 진행하는 동안 많은 조언과 도움 주셔서 감사합니다. 특히 프로젝트 아이디어를 선정하는 과정에서 여러 방향을 함께 고민해 주시고 아이디어를 구체화할 수 있도록 조언해 주신 덕분에 프로젝트의 방향을 잘 잡을 수 있었습니다.\n\n또한 처음 준비하는 졸업 전시라 미처 생각하지 못했던 부분들이 많았는데 세심하게 짚어주셔서 큰 도움이 되었습니다. 프로젝트의 시작부터 전시 준비까지 함께 고민해 주시고 지도해 주셔서 진심으로 감사드립니다."
  },
  {
    "id": "t03-02",
    "division": "03",
    "subtitle": "음식을 먹는 것을 넘어, 데이터와 사람을 \"모아\" 연결하는 스마트 식생활 플랫폼",
    "name": "모아밥 (MoA-BoB)",
    "team": "삼시세끼",
    "thumbnail": "/projects/t03-02/1.webp",
    "keywords": [
      "Computer Vision (YOLOv8n / EfficientNet-B0 / OCR)",
      "Android APP",
      "Database",
      "Webcam Pipeline",
      "Accessibility(barrier-free)"
    ],
    "images": [
      "/projects/t03-02/1.webp",
      "/projects/t03-02/2.webp",
      "/projects/t03-02/3.webp",
      "/projects/t03-02/4.webp",
      "/projects/t03-02/5.webp",
      "/projects/t03-02/6.webp"
    ],
    "intent": "‘모아밥(MoA-BoB)’은 AI 기술을 활용하여 식재료의 입고부터 보관, 활용까지 전 과정을 지원하는 배리어프리 식재료 관리 모바일 애플리케이션이다. 기존의 식재료 관리 방식은 종류와 유통기한을 직접 입력·확인해야 하는 불편함이 있으며, 시각 정보에 의존한 서비스는 저시력자와 정보 소외 계층에게 접근성의 한계가 있다.\n\n이를 해결하기 위해 YOLO 기반 이미지 인식과 OCR을 활용해 식재료와 유통기한을 자동 등록하고, DB를 기반으로 유통기한·신선도·부패도 정보와 알레르기 유발 식품 정보를 통합 관리한다. 또한 구성원 초대를 통해 가족·동거인과 식재료를 함께 관리할 수 있다.\n\nTTS 음성 안내·명령과 진동 알림으로 시각적 정보 접근의 어려움을 보완하며, 간소화 홈 화면·고대비·큰 글씨·글꼴 크기 조절·색상 접근성 모드 등 다양한 배리어프리 기능으로 모든 이용자의 편의성을 높인다. 보유 식재료 기반 레시피와 보관·소분 정보를 추천해 효율적인 소비와 폐기 감소를 지원하며, 향후 쇼핑몰 연계를 통해 구매·관리·소비를 아우르는 통합 식생활 관리 서비스로 확장하고자 한다.",
    "stack": {
      "skill": [
        "Kotlin",
        "Python",
        "HTML/CSS"
      ],
      "tool": [
        "YOLOv8n",
        "EfficientNet-B0",
        "Android Studio",
        "Firebase Database",
        "PyTorch",
        "EasyOCR",
        "pyzbar",
        "Coil3",
        "Jetpack Compose",
        "OpenAPI",
        "GitHub"
      ],
      "device": [
        "WepCam",
        "Android"
      ]
    },
    "members": [
      {
        "name": "김예담",
        "role": "팀장 / Computer Vision·AI 모델 설계·학습 / AI 파이프라인 설계 / Android 개발 / 서비스·접근성 구현",
        "comment": "세계 평화",
        "song": "DAY6 - Best Part"
      },
      {
        "name": "이예진",
        "role": "Android 개발 / 레시피 추천 기능 개발 / UI·UX 구현 / 서비스 구현",
        "comment": "굿 바이",
        "song": "Hey Phone - Peterparker69 & 노다 요지로"
      },
      {
        "name": "길민재",
        "role": "Computer Vision·AI 모델 설계·학습 / 데이터셋 구축·관리 / DB 관리",
        "comment": "길다면 길고 짧다면 짧은 시간이었지만, 함께해줘서 너무너무 고마웠어!",
        "song": "ONEWE - 검은별"
      }
    ],
    "questions": [
      {
        "q": "먼작귀 세계관에 빠진다면 팀원은 어떤 캐릭터가 될 것 같나요?",
        "a": "발표 전에 러비더비로 목푸는 치이카와 이예진\n서버비용 날린 거 한달 째 얘기하는 거지 하치와레 김예담\n코드는 우라로 짜고 디버깅은 야하로 해결하는 우사기 길민재"
      }
    ],
    "thanksTo": "매주 바쁘신 와중에도 저희를 만나 프로젝트를 하나하나 함께 봐주시고, 좋은 아이디어와 조언을 아낌없이 주신 강지헌 교수님께 정말 감사드립니다.\n\n프로젝트를 진행하며 막히는 부분이 있을 때마다 놓친 부분을 짚어주시고 새로운 방향을 함께 고민해 주셨습니다. 특히 일상에서 발견하신 것들을 “이런 건 어떨까?” 하고 저희 프로젝트에 맞춰 이야기해 주실 때마다 새로운 아이디어를 얻을 수 있었습니다. 덕분에 막막했던 프로젝트를 조금씩 저희만의 서비스 ‘모아밥’으로 만들어 갈 수 있었습니다. 감사합니다, 교수님!"
  },
  {
    "id": "t03-03",
    "division": "03",
    "subtitle": "먹고 마신 기록부터 운동 습관까지, 서로 자극받으며 함께하는 AI 건강 메이트",
    "name": "Plan B",
    "team": "취중감량",
    "thumbnail": "/projects/t03-03/1.webp",
    "keywords": [
      "iOS APP",
      "식단 기록",
      "운동 자세 교정",
      "소셜 동기부여"
    ],
    "images": [
      "/projects/t03-03/1.webp",
      "/projects/t03-03/2.webp",
      "/projects/t03-03/3.webp",
      "/projects/t03-03/4.webp",
      "/projects/t03-03/5.webp"
    ],
    "intent": "기존의 다이어트 서비스들은 철저한 식단과 강도 높은 운동만을 강조하며, 가벼운 음주조차 일방적으로 제한해 현실적인 관리를 어렵게 만듭니다. Plan B(일단 어플 이름)은 완벽한 절제보다 지속 가능한 건강 습관을 만드는 것에 집중한 AI 다이어트 앱입니다.\n핵심 기능으로 사진 한 장으로 식재료의 무게와 칼로리를 정밀하게 추정해 식단 기록의 번거로움을 해결했습니다. 특히 차별점으로 주류 기록을 지원하며  혼술을 즐길 때도 과식하지 않도록 잔여 칼로리에 맞춘 최적의 안주를 추천해 절제된 식습관을 돕습니다.\n운동의 경우 실시간 AI 자세 분석으로 런지, 플랭크 등의 자세를 교정해 주어, 단순한 체중 감량보다는 바른 홈트레이닝 습관을 형성하는 데 목적을 둡니다. 나아가 매일의 기록을 다른 유저에게 랜덤으로 전송하고 리액션을 주고받는 SNS 기능을 더해, 서로 긍정적인 자극을 얻으며 포기 없이 다이어트를 이어가도록 설계했습니다.",
    "stack": {
      "skill": [
        "Swift",
        "SwiftUI",
        "Java",
        "Python"
      ],
      "tool": [
        "Xcode",
        "IntelliJ",
        "Spring Boot",
        "FastAPI",
        "MongoDB",
        "YOLOE-seg",
        "DINOv2",
        "YOLOv8",
        "YOLOv8 POSE",
        "Spoonacular API",
        "USDA FoodData Central API"
      ],
      "device": [
        "iPhone"
      ]
    },
    "members": [
      {
        "name": "김민진",
        "role": "UX/UI 디자인 및 프론트엔드 개발",
        "comment": "드디어 끝! 나의 4년도 안녕…",
        "song": "이찬혁-장례희망"
      },
      {
        "name": "김주영",
        "role": "식단·주류 AI 및 백엔드 개발",
        "comment": "우리 마지막까지 힘내보자 빠이팅",
        "song": "SZA, Travis Scott - Open Arms(feat. Travis Scott)"
      },
      {
        "name": "이다현",
        "role": "UX/UI 디자인 및 프론트엔드 개발",
        "comment": "대학 생활의 마지막을 좋은 팀원들과 함께할 수 있어서 좋았다.",
        "song": "BIG Naughty - nostalgia"
      },
      {
        "name": "이유나",
        "role": "운동 분석 ai 및 백엔드 개발",
        "comment": "다들 수고 많았고 끝까지 힘내자 !!",
        "song": "One direction - what makes you beautiful"
      }
    ],
    "questions": [
      {
        "q": "팀 내에서 가장 좋아하는 조합은 무엇인가요?",
        "a": "마라로제엽떡 + 명랑핫도그\n클로드 + 제미나이"
      }
    ],
    "thanksTo": ""
  },
  {
    "id": "t03-04",
    "division": "03",
    "subtitle": "계약서 분석부터 증거 수집, 피해자 연대까지 지원하는 법률 안전망 앱",
    "name": "Themis",
    "team": "함께해조",
    "thumbnail": "/projects/t03-04/1.webp",
    "keywords": [
      "Android / iOS APP",
      "LegalTech",
      "AI 계약서 분석",
      "증거 기록",
      "피해자 연대"
    ],
    "images": [
      "/projects/t03-04/1.webp",
      "/projects/t03-04/2.webp",
      "/projects/t03-04/3.webp",
      "/projects/t03-04/4.webp",
      "/projects/t03-04/5.webp",
      "/projects/t03-04/6.webp"
    ],
    "intent": "법률 피해를 당했을 때 가장 큰 문제는 \"미리 알았더라면, 미리 기록해 뒀더라면\"이라는 후회입니다. 피해자 대부분은 증거를 어떻게 수집해야 하는지 몰라 신고를 포기하거나, 대응 방법을 몰라 피해를 키우는 경우가 많습니다.\n\nThemis는 사건 발생 전부터 후까지 전 과정을 함께하는 법률 안전망 앱입니다. 계약·거래 전에는 AI 사전 상담으로 위험 여부를 미리 확인할 수 있고, 계약서 사진을 찍으면 AI가 위험 조항을 분석해 신호등으로 시각화하고 협상 문구를 제안합니다. 사건이 발생하면 현장 사진·음성·영상을 올릴 때 GPS 위치와 기록 시각이 자동으로 남고, 위변조 방지 워터마크가 함께 찍히며 타임스탬프로 조작 여부를 확인할 수 있습니다. 수집된 증거는 시간순 타임라인으로 정리돼 보고서로 자동 생성되고, 사건 유형별 대응 퀘스트와 AI 질문 창이 법적 대응을 단계별로 안내합니다. 나아가 유사 피해자끼리 연대하고 전문가와 연결되는 커뮤니티까지 제공합니다. 이처럼 Themis는 일상에서 마주하는 법률문제를 예방하고, 누구나 혼자서도 안전하게 대응할 수 있도록 돕고자 합니다.",
    "stack": {
      "skill": [
        "JavaScript (React Native, Expo)"
      ],
      "tool": [
        "Firebase(Firestore, Realtime Database, Storage, Auth)",
        "Google Gemini API",
        "네이버 클로바 음성인식(CSR)",
        "법제처 국가법령정보 Open API",
        "국토교통부 실거래가 Open API",
        "ESLint"
      ],
      "device": [
        "스마트폰 GPS",
        "카메라",
        "마이크(증거 수집용 센서)"
      ]
    },
    "members": [
      {
        "name": "이지연",
        "role": "팀장 / 기획 / 프론트엔드 개발",
        "comment": "힘들었지만 든든한 팀원들과 함께라 마무리까지 잘했습니다. 열심히 준비한 Themis 잘 부탁드립니다!",
        "song": "아이유 - 이 지금"
      },
      {
        "name": "배희겸",
        "role": "프론트엔드 개발 / 백엔드 개발",
        "comment": "가장 어두운 밤에야 별은 비로소 보인다고 합니다. 그 밤을 함께 건너준 이들 덕분에, 우리는 여기 서 있습니다.",
        "song": "NCTwish-Hello Mellow"
      },
      {
        "name": "김소희",
        "role": "디자인 / 프론트엔드 개발",
        "comment": "팀원들과 함께 배우며 성장할 수 있는 기회였습니다. 감사합니다!",
        "song": "트와이스 - this is for"
      }
    ],
    "questions": [
      {
        "q": "먼작귀 세계관에 빠진다면 팀원은 어떤 캐릭터가 될 것 같나요?",
        "a": "[지연]\n소희님: 우사기(동글동글 순하고 귀여운 인상이 치이카와나 우사기 느낌!)\n희겸님: 모몽가(밝고 활발한 텐션에 할 말은 시원하게 짚고 넘어가는 똑 부러짐이 뭔가 모몽가 느낌!)\n[희겸]\n지연님: 카니(막 가볍게 행동하지 않고 진중한데, 옆에 있으면 마음이 편안해지고 은근히 똑부러져서 생각났습니다)\n소희님: 우사기(평소엔 엉뚱하고 해맑은데, 막상 자기 일할 때나 필요한 순간엔 제 몫을 해내시는 모습에 생각이 났습니다!)\n[소희]\n지연님: 치이카와 (팀장으로서 꼼꼼하게 계획을 잘 세우고 중심을 잡아주시며, 둥글둥글 다정하게 팀을 잘 이끌어주시는 든든한 모습이 치이카와와 닮았습니다!)\n희겸님: 우사기 (베이비페이스에 똑똑하게 자기 할 일을 척척 해내는 야무진 모습이 딱 우사기입니다!)"
      }
    ],
    "thanksTo": "프로젝트의 든든한 이정표가 되어주신 강지헌 지도교수님과 아낌없는 조언과 자문을 나눠주신 모든 분께 진심으로 감사드립니다. 늘 묵묵히 곁을 지키며 가장 큰 버팀목이 되어준 부모님과 가족, 지칠 때마다 응원이 되어준 친구들이 있었기에 끝까지 완주할 수 있었습니다. 그리고 밤낮없이 치열하게 고민하며 서로를 이끌어준 소중한 팀원들에게 깊은 고마움을 전합니다. 함께였기에 가능했던 뜻깊은 여정이었습니다."
  },
  {
    "id": "t04-01",
    "division": "04",
    "subtitle": "LLM 기반 BOLA 자동 탐지 프록시 오픈소스",
    "name": "BLADE",
    "team": "방과후 Securi티타임",
    "thumbnail": "/projects/t04-01/1.webp",
    "keywords": [
      "Network Security",
      "API Security",
      "BOLA Detection",
      "Reverse Proxy",
      "LLM"
    ],
    "images": [
      "/projects/t04-01/1.webp",
      "/projects/t04-01/2.webp",
      "/projects/t04-01/3.webp",
      "/projects/t04-01/4.webp",
      "/projects/t04-01/5.webp",
      "/projects/t04-01/6.webp"
    ],
    "intent": "API는 현대 서비스의 핵심 통로이자 가장 취약한 지점입니다. 그중 BOLA(객체 수준 인가 취약점)는 OWASP API Security Top 10의 1위 위협이지만, 요청 자체가 문법적으로 정상이기 때문에 기존 WAF나 시그니처 기반 보안 장비로는 걸러지지 않습니다. 인가 로직은 서비스마다 제각각이고, 이를 사람이 일일이 점검하는 방식은 API가 늘어나는 속도를 따라가지 못합니다.\n\nBLADE는 이 공백을 메우기 위해 설계되었습니다. OpenAPI 명세와 실제 호출 흐름을 LLM으로 분석해 리소스별 인가 패턴을 자동으로 학습하고 정책으로 만들며, 리버스 프록시가 모든 요청을 실시간으로 검증해 비정상적인 객체 접근을 백엔드에 도달하기 전에 차단합니다. 무거운 분석은 오프라인에서, 차단 판정은 런타임에서 수행하는 구조로 성능 부담을 최소화했습니다.\n\n애플리케이션 코드를 수정하지 않고 앞단에 붙이는 것만으로 적용 가능한 오픈소스 프록시로 구현하여, 보안 전담 인력이 없는 조직도 곧바로 도입할 수 있게 하는 것이 저희 프로젝트의 목표입니다.",
    "stack": {
      "skill": [
        "Python (프록시·정책 생성기·파서·백엔드 전반)",
        "JavaScript / TypeScript (React 대시보드)",
        "YAML / JSON (정책 스키마, Policy.json, OpenAPI 명세)",
        "SQL (DB Schema 추출·분석)",
        "Prompt Engineering (sLLM 분류용 RuleBook Prompt 설계)"
      ],
      "tool": [
        "프레임워크: FastAPI, aiohttp (Reverse Proxy), React",
        "인증·저장소: JWT, Redis (Token Store)",
        "입력 파서: Swagger/OpenAPI Parser, DB Schema Extractor, AST 정적 분석",
        "RAG: ChromaDB (Vector Store), Embedding Model, Data Crawler (CVE/OWASP 적재)",
        "학습: HuggingFace Transformers, PEFT (LoRA 기반 Fine-Tuning)",
        "사용 모델: Llama 계열 sLLM (Base Model → BOLA 패턴 분류용 파인튜닝), 검증 단계 비교군으로 GPT-4o-mini / Claude Sonnet 계열 API",
        "데이터셋: BLADE Dataset (BOLA 인가 패턴 라벨링 약 7,500건, 자체 구축)",
        "인프라·배포: Docker, Git",
        "알림 연동: Slack, Discord, SMS (Alert Manager)"
      ],
      "device": [
        "개발 환경: Windows PC (로컬 uvicorn 기반 실행·검증)",
        "학습 환경: GPU 서버 (sLLM Fine-Tuning 및 추론)",
        "별도 전용 하드웨어 장치 없음 — 소프트웨어 단독 구성"
      ]
    },
    "members": [
      {
        "name": "고윤수",
        "role": "팀장 / 리버스 프록시 계층 개발",
        "comment": "There’s not a star in heaven that we can’t reach!",
        "song": "NCT127-흑백영화"
      },
      {
        "name": "장해윤",
        "role": "팀원 / LLM 파인튜닝 및 RAG 적용, 정책 생성 파이프라인 구현",
        "comment": "평범한 인간에겐 관심 없습니다. 이중에 우주인, 미래인, 이세계인, 초능력자가 있으면 제게 오십시오. 이상.",
        "song": "放課後ティータイム(방과후티타임)-天使にふれたよ!(천사를 만났어!)"
      },
      {
        "name": "이혜인",
        "role": "팀원 / 대시보드, 인프라 개발",
        "comment": "그대가 내 졸업인가?",
        "song": "Jyukai(쥬카이) - 당신이 있던 숲 (Fate/stay night ED)"
      }
    ],
    "questions": [
      {
        "q": "먼작귀 세계관에 빠진다면 팀원은 어떤 캐릭터가 될 것 같나요? (ex. 치이카와, 하치와레, 우사기, 쿠리만쥬, 모몽가, 랏코 등)",
        "a": "윤수: 해윤이는 ‘하치와레’, 혜인이는 ‘시사’\n해윤: 윤수 언니는 ‘치이카와’ 혜인 언니는 ‘랏코’\n혜인: 윤수언니는 ‘카니’, 해윤이는 ‘하치와레’"
      }
    ],
    "thanksTo": ""
  },
  {
    "id": "t04-02",
    "division": "04",
    "subtitle": "AI 시스템(LLM) 위협 및 대응 교육도구 개발",
    "name": "SeRO",
    "team": "예의주시",
    "thumbnail": "/projects/t04-02/1.webp",
    "keywords": [
      "AI Security",
      "Prompt Engineering",
      "LLM",
      "GenAI"
    ],
    "images": [
      "/projects/t04-02/1.webp",
      "/projects/t04-02/2.webp",
      "/projects/t04-02/3.webp",
      "/projects/t04-02/4.webp"
    ],
    "intent": "생성형 AI와 LLM의 활용이 빠르게 확대되면서 프롬프트 인젝션, 민감정보 유출, 부적절한 출력 등 새로운 보안 위협도 함께 증가하고 있다. 하지만 기존 AI 보안 교육은 위협의 정의나 개별 사례를 설명하는 데 집중되어 있어, 공격이 어떤 취약점에서 발생하고 이를 어떤 방식으로 대응해야 하는지 전체 흐름을 연결해 이해하기 어렵다는 한계가 있다.\n\n이에 본 프로젝트는 사용자가 직접 공격을 수행하고 방어 방법을 적용한 뒤 동일한 공격을 다시 시도해 결과를 비교하는 과정을 통해 보안 위협의 발생 원인과 대응 원리를 체감할 수 있는 실습형 교육 환경을 제공하고자 한다.\n\nOWASP Top 10 for LLMs(2025)를 기반으로 실제 활용 상황을 반영한 시나리오를 구성하고, 각 위협에 대해 공격 과정, 취약점 확인, 방어 적용, 결과 비교가 순차적으로 이어지도록 설계하였다. 이를 통해 위협–공격–취약점–방어의 관계를 하나의 학습 흐름으로 연결하고, 단순한 개념 이해를 넘어 실제 상황에서 보안 위협을 식별하고 대응 방안을 적용할 수 있는 LLM 보안 교육 도구 개발을 목표로 한다.",
    "stack": {
      "skill": [
        "Python",
        "HTML",
        "CSS",
        "JavaScript"
      ],
      "tool": [
        "Flask",
        "Ollama",
        "Llama 3.3 8B Instruct",
        "VS Code",
        "Git/GitHub"
      ],
      "device": []
    },
    "members": [
      {
        "name": "정예나",
        "role": "팀장 (프론트, 백엔드, LLM·보안 기능 개발)",
        "comment": "이제는 더이상 물러날 곳이 없다",
        "song": "유재하-지난날"
      },
      {
        "name": "유예서",
        "role": "팀원 (프론트, 백엔드, LLM·보안 기능 개발)",
        "comment": "404: 어쩌다 보니 졸업반이 되어버림",
        "song": "아이유 - 바이썸머"
      }
    ],
    "questions": [
      {
        "q": "팀 내에서 가장 좋아하는 조합은 무엇인가요?",
        "a": "저희 둘이요….(하트)"
      }
    ],
    "thanksTo": "졸업프로젝트를 비롯해 늘 사려 깊게 지도해주신 백남균 교수님께 진심으로 감사드립니다. 교수님의 조언과 도움 덕분에 다양한 경험과 시각을 넓히며, 한층 성장할 수 있었습니다. 작품의 완성까지 함께 고민하고 아낌없이 조언해준 김서연 언니에게도 고마움을 전합니다. 언니와 함께 웃고 고민할 수 있어 정말 행복했어. 우리 꼭 여행 가자. 마지막으로, 언제나 따뜻한 사랑과 응원으로 곁을 지켜주신 부모님께 깊이 감사드립니다. 저희가 한층 성장한 모습으로 사회에 첫걸음을 내딛을 수 있도록 함께해주신 모든 분들께 진심으로 감사드립니다."
  },
  {
    "id": "t04-03",
    "division": "04",
    "subtitle": "위험도별 클라우드 포렌식 준비도 개발",
    "name": "R-CFR",
    "team": "이수경",
    "thumbnail": "/projects/t04-03/1.webp",
    "keywords": [
      "Risk-based (위험도별)",
      "Cloud (클라우드)",
      "Forensic Readiness (포렌식 준비도)"
    ],
    "images": [
      "/projects/t04-03/1.webp",
      "/projects/t04-03/2.webp",
      "/projects/t04-03/3.webp"
    ],
    "intent": "클라우드 환경에서는 다양한 시스템과 데이터가 동시에 운영되기 때문에 모든 자산에 동일한 수준의 포렌식 준비도를 적용하기 어렵다. 특히 사고 발생 이후 필요한 로그와 증거를 충분히 확보하기 위해서는 사전에 어떤 자산과 데이터를 우선적으로 관리해야 하는지 판단할 수 있는 기준이 필요하다.\n\n본 프로젝트는 이러한 문제를 해결하기 위해 클라우드 인스턴스와 데이터의 중요도를 각각 평가하고, 그 결과를 결합하여 위험도 수준에 따라 포렌식 준비도를 차등 적용하는 모델을 제안한다. 위험도가 높은 자산에는 상세한 로그 수집·보존과 증거 관리 기준을 적용하고, 상대적으로 낮은 자산에는 필요한 수준의 준비도를 적용하여 관리 부담을 줄이고 증거 확보 가능성을 높이고자 한다.\n\n또한 위험도에 따라 준비 수준을 구분함으로써 모든 자산을 동일하게 관리하는 방식의 비효율성을 줄이고, 조직의 한정된 인력과 저장 자원을 중요한 자산에 우선 배분할 수 있도록 한다. 이를 통해 사고 발생 시 필요한 증거를 보다 체계적으로 확보하고 신속한 디지털 포렌식 조사를 수행할 수 있는 실무적 기준을 마련한다.",
    "stack": {
      "skill": [],
      "tool": [
        "Windows Server 2022 Event Viewer",
        "Windows/Ubuntu Logs"
      ],
      "device": []
    },
    "members": [
      {
        "name": "이수경",
        "role": "팀장(연구 설계, 위험도별 평가 모델 구성, 논문 작성/투고)",
        "comment": "졸업, 해치웠나?",
        "song": "연준-Talk to you"
      }
    ],
    "questions": [
      {
        "q": "나에게 텔레파시를 보내 한 장소에서 모인다면 어디에서 만날 것 같나요?",
        "a": "바다. 아 휴가 받고 바다 가고 싶다."
      }
    ],
    "thanksTo": "꿈에 한 걸음 더 빠르게 다가갈 수 있도록 도와주신 모든 디지털소프트웨어공학부 교수님들께 감사의 마음을 전합니다.\n\n특히 무사히 논문 작성 및 졸업을 마칠 수 있도록 아낌없는 지도와 도움을 주신 백남균 교수님께 진심으로 감사드립니다."
  },
  {
    "id": "t04-04",
    "division": "04",
    "subtitle": "LLM 포렌식 자동화 분석 도구",
    "name": "ELFO",
    "team": "LogFlow",
    "thumbnail": "/projects/t04-04/1.webp",
    "keywords": [
      "Security for AI",
      "Digital Forensics",
      "Log Analysis",
      "Incident Response"
    ],
    "images": [
      "/projects/t04-04/1.webp",
      "/projects/t04-04/2.webp",
      "/projects/t04-04/3.webp",
      "/projects/t04-04/4.webp",
      "/projects/t04-04/5.webp",
      "/projects/t04-04/6.webp"
    ],
    "intent": "AI 기술이 일상과 업무 전반으로 확산됨에 따라 AI 시스템에 저장되는 개인정보 및 민감정보의 양도 증가하고 있습니다. 이에 따라 LLM 침해사고 발생 시 시스템 내 정보가 유출될 위험과 그 피해의 범위 또한 확대되고 있습니다.\n그러나 기존의 보안 로그만으로는 LLM 환경에서 발생한 침해사고를 분석하는 데 한계가 있으며, 포렌식 분석을 위해 어떠한 로그를 수집하고 활용해야 하는지에 대한 명확한 기준이 부족한 실정이었습니다.\n본 프로젝트는 이러한 문제를 해결하기 위해 LLM에서 발생할 수 있는 침해사고 유형을 기반으로 포렌식 분석에 필요한 로그를 정의하고, 이를 활용한 로그 기반 포렌식 분석 도구를 구현하였습니다. 분석 대상 로그를 업로드하면 침해사고와 관련된 이벤트와 공격 유형, 발생 과정 및 주요 증거를 분석하고, 그 결과를 바탕으로 포렌식 분석 보고서를 자동으로 생성합니다.\n이를 통해 보안 담당자가 복잡한 분석 과정 없이도 신속하고 일관된 포렌식 분석을 수행할 수 있는 환경을 제공하는 것을 목표로 합니다.",
    "stack": {
      "skill": [
        "Python"
      ],
      "tool": [
        "Ollama",
        "Qwen 2.5-7B",
        "FastAPI",
        "Uvicorn",
        "Streamlit",
        "VScode",
        "Pandas",
        "Plotly",
        "Matplotlib",
        "Git"
      ],
      "device": []
    },
    "members": [
      {
        "name": "박현정",
        "role": "팀장, 프로젝트 설계, 자료 조사, 발표 자료 제작, 기능 구현",
        "comment": "덕성에서 보낸 4년 후련하고 행복했습니다! 그리고 다빈아 잘 있어 먼저 갈게ㅎㅎ",
        "song": "Mark Lee - My Friend"
      },
      {
        "name": "조다빈",
        "role": "팀원, 프로젝트 설계, 자료 조사, 기능 구현",
        "comment": "예상치 못하게 시작한 프로젝트였는데 이렇게 잘 마무리가 되었네요. 앞으로도 다들 우연히 잘 흘러갔으면 좋겠습니다. 언니 못 가 나 두고 가지 마!!",
        "song": "에픽하이-OK GOOD"
      }
    ],
    "questions": [
      {
        "q": "팀원에게 텔레파시를 보내 한 장소에서 모인다면 어디에서 만날 것 같나요?",
        "a": "차 141."
      }
    ],
    "thanksTo": "먼저 이 프로젝트의 방향을 잡아주시고, 많은 조언과 지원을 아끼지 않으신 백남균 교수님 감사드립니다. 덕분에 보안이라는 꿈에 한 발짝 더 가까워질 수 있었습니다. 더하여 졸업 프로젝트를 무사히 마치기까지 도움을 준 많은 분들과 늘 애써준 팀원에게 감사합니다."
  },
  {
    "id": "t04-05",
    "division": "04",
    "subtitle": "AI 에이전트를 위한 원칙의 재구현",
    "name": "MayAI",
    "team": "SCP",
    "thumbnail": "/projects/t04-05/1.webp",
    "keywords": [
      "Security for AI",
      "Zero Trust Architecture",
      "Intrusion Detection System",
      "사용자 정의 정책"
    ],
    "images": [
      "/projects/t04-05/1.webp",
      "/projects/t04-05/2.webp",
      "/projects/t04-05/3.webp",
      "/projects/t04-05/4.webp",
      "/projects/t04-05/5.webp"
    ],
    "intent": "**최근의 AI는 단순히 질문에 답변하는 수준을 넘어, 외부 시스템의 기능을 직접 호출하고 여러 작업을 연속적으로 수행하는 AI 에이전트 형태로 확장되고 있습니다.\n특히 MCP는 AI 애플리케이션이 외부 데이터와 도구를 일정한 형식으로 연결할 수 있도록 지원하며, AI 에이전트는 MCP 서버를 통해 검색, 데이터 조회, 파일 처리와 같은 다양한 기능을 사용할 수 있습니다.**\n\n**MCP는 JSON-RPC 기반 메시지 내부의 도구 이름, 인자와 같은 응용 계층 정보를 함께 확인합니다. 따라서 AI 에이전트가 외부 MCP 서버의 도구를 호출하는 환경에서는 IP 주소, 포트, 연결 상태와 같은 네트워크 정보만으로는 실제 에이전트의 행위를 충분히 파악하기 어렵습니다.**\n\n**에이전트형 AI 보안 분야에서의 전략은 다양하나, 저희는 LLM 모델 그 자체를 강화하는 대신, 인프라 수준의 관점을 채택했습니다. 본 프로젝트는 조직 내부의 AI 에이전트를 관리하고, 에이전트와 외부 MCP 서버 간 통신을 확인하고 통제할 수 있는 보안 솔루션을 개발하는 것을 목표로 합니다.**",
    "stack": {
      "skill": [
        "Python",
        "HTML/CSS/JavaScript",
        "FastAPI",
        "SSE",
        "Uvicorn",
        "SQLite"
      ],
      "tool": [
        "mitmproxy"
      ],
      "device": []
    },
    "members": [
      {
        "name": "안세영",
        "role": "팀장, 프로젝트 계획 설계, 프로젝트 방향성 점검, 테스트 검증",
        "comment": "어떻게든 끝은 났고, 그동안 많은 걸 배웠습니다. 이제 진짜 졸업 시점이 다가오니 시원 섭섭한 기분입니다.",
        "song": "윤하 - 포인트 니모"
      },
      {
        "name": "박청은",
        "role": "팀원, 프로젝트 계획 설계, 프로토타입 코드 작성, 발표 자료 제작",
        "comment": "어찌 저찌 완주 했습니다. 이제는 마음 편하게 “끝!”이라고 말하고 다른 “시작!”을 기다리겠습니다. 그동안 감사했습니다.",
        "song": "데프원-힙합 유치원"
      }
    ],
    "questions": [
      {
        "q": "게임 속에 빠진다면 팀원은 탱커, 딜러, 힐러, 서포터 중 어떤 역할일까요?",
        "a": "청은-탱커, 세영-딜러\n사유: 딜러(세영) - 평소엔 조용한데 마감이 가까워지면 갑자기 딜량 1위를 찍음.\n탱커(청은) - 갑작스러운 변화나 어려움이 생겨도 앞에서 든든하게 끝까지 받쳐줌"
      }
    ],
    "thanksTo": "프로젝트가 완성되기까지 아낌없는 조언과 깊은 통찰로 더 넓은 관점에서 사고할 수 있도록 지도해 주신 백남균 교수님께 진심으로 감사드립니다. 또한, 언제나 묵묵히 믿고 응원해 주시며 든든한 버팀목이 되어주시는 부모님들께 깊은 감사를 드립니다. 마지막으로, 긴 시간 함께 고민하고 웃으며 끝까지 곁을 지켜준 언니,청은이에게도 고마움을 전합니다. 언니, 함께해서 정말 좋았어. 앞으로도 날 버리지 말아줘."
  },
  {
    "id": "t04-06",
    "division": "04",
    "subtitle": "실시간 얼굴 인식을 통한 노트북 모니터 보호 프로그램",
    "name": "ViVi : Vigilant Visage",
    "team": "ViVi",
    "thumbnail": "/projects/t04-06/1.webp",
    "keywords": [
      "Security",
      "Face Detection",
      "Face Recognition",
      "Window Laptop App",
      "Monitor Lock"
    ],
    "images": [
      "/projects/t04-06/1.webp",
      "/projects/t04-06/2.webp",
      "/projects/t04-06/3.webp",
      "/projects/t04-06/4.webp",
      "/projects/t04-06/5.webp",
      "/projects/t04-06/6.webp"
    ],
    "intent": "코로나19 이후 개인의 공간과 정보에 대한 관심이 높아지면서 보안의 중요성 또한 더욱 강조되고 있습니다. 특히 카페, 도서관, 공유 오피스 등 개방된 공간에서 노트북을 이용해 업무나 학업, 취미 활동을 하는 사람들이 많아지면서 타인에게 화면이 노출되는 문제 역시 일상적인 보안 위협이 될 수 있다는 생각을 하였습니다. 이러한 문제를 해결하고 실생활에서 보다 편리하게 사용할 수 있는 모니터 보안 시스템을 만들고자 본 프로그램을 기획하였습니다.\n\nFace ID 등의 도입으로 익숙해진 얼굴 인식 기술을 활용하여 사용자의 얼굴을 실시간으로 인식하고, 사용자가 자리를 비운 상황을 판단해 모니터 화면을 자동으로 보호하도록 구현하였습니다. 이를 통해 사용자의 별도 조작 없이도 개인 정보와 작업 화면의 노출을 방지하고, 일상생활 속에서 자연스럽게 보안을 강화할 수 있는 실용적인 프로그램을 제작하는 것을 목표로 하였습니다.",
    "stack": {
      "skill": [
        "Python"
      ],
      "tool": [
        "SQLite",
        "SQLite-vec",
        "PySide6",
        "OpenCV",
        "PyTorch",
        "Resnet-18"
      ],
      "device": []
    },
    "members": [
      {
        "name": "김다현",
        "role": "ViVi 팀장, 기획 및 개발 보조",
        "comment": "개발 팀 프로젝트가 처음이라 많이 미숙했고, 얼 타던 부분도 많았는데 함께 노력하고 달려 뜻깊은 경험이 되었습니다. 보안에도 관심을 기울일 수 있는 방향을 잡게 되어 뿌듯하고, VIVI가 더 크게 발전할 수 있었음 좋겠습니다. 디소공 졸업 화이팅!",
        "song": "Lady Gaga, Bruno Mars - Die With A Smile"
      },
      {
        "name": "전유정",
        "role": "ViVi 팀원, GUI 개발, 유저 DB 구성, 모델 미세 조정",
        "comment": "2인 3각과 같이 함께 의지하여 하나의 프로젝트를 크게 넘어지지 않고 완주할 수 있게 되어 좋습니다. 디지털소프트웨어공학부 졸업 전시 화이팅!",
        "song": "민호 - Stay for a night"
      }
    ],
    "questions": [
      {
        "q": "먼작귀 세계관에 빠진다면 팀원은 어떤 캐릭터가 될 것 같나요? (ex. 치이카와, 하치와레, 우사기, 쿠리만쥬, 모몽가, 랏코 등)",
        "a": "(김다현) A. 치이카와 아닐까요… 항상 조목조목 말씀하시는 게 웃겨서 졸업 프로젝트 내내 너무 행복했습니다…\n(전유정) A. 하치와레 같습니다..! 말씀도 정말 잘 해주시고 항상 여러 부분 잘 챙겨주셔서 졸업 프로젝트 진행하며 많이 의지도 하고 행복했습니다!!!"
      }
    ],
    "thanksTo": "보안 프로그램 개발이 처음이라 많이 서투르고 부족한 부분이 있었지만, 아이디어를 구체화하고 보완하는 과정에서 많은 도움과 조언을 주신 백남균 교수님께 진심으로 감사드립니다. 인생의 선배로서 해주신 소중한 조언 또한 항상 마음에 새기며 앞으로의 길에 좋은 밑거름으로 삼겠습니다. 졸업을 앞두고 뜻깊은 경험과 배움의 기회를 함께해 주셔서 다시 한번 감사드립니다."
  },
  {
    "id": "t05-01",
    "division": "05",
    "subtitle": "Agent AI 스마트 현관 보안 시스템",
    "name": "OmniGuardy",
    "team": "가디언즈",
    "thumbnail": "/projects/t05-01/1.webp",
    "keywords": [
      "Smart Home Security",
      "Multimodal AI",
      "AI Agent",
      "IoT"
    ],
    "images": [
      "/projects/t05-01/1.webp",
      "/projects/t05-01/2.webp",
      "/projects/t05-01/3.webp",
      "/projects/t05-01/4.webp",
      "/projects/t05-01/5.webp"
    ],
    "intent": "최근 1인 가구와 맞벌이 가구가 증가하면서 현관 앞 택배 분실, 배회, 강제 침입 등 생활 밀착형 보안 문제에 대한 관심이 높아지고 있습니다. 특히 원룸, 오피스텔 등에서는 상시 관리 인력이 부족해 절도, 침입, 파손과 같은 이상 상황 발생 시 즉각적인 대응이 어려워 피해가 확대될 가능성이 높습니다.\n\nOmniGuardy는 이러한 문제를 해결하기 위한 AIoT 기반 스마트 현관 보안 시스템입니다. 현관 주변의 이상음이 감지되면 카메라 촬영을 시작하고, Audio AI와 Vision AI의 분석 결과를 통합해 AI Agent가 상황의 위험도를 판단합니다. 이후 위험도에 따라 사용자 알림, 현장 TTS 경고, 이벤트 저장 등 필요한 대응을 선택적으로 수행합니다.\n\n또한 사용자가 자연어로 시간대별 감지 민감도나 위험도별 대응 방식을 설정할 수 있도록 하여 생활 패턴에 맞춘 보안 환경을 제공합니다. 이를 통해 불필요한 알림은 줄이고 실제 위험 상황에는 빠르게 대응하는 지능형 홈 보안 서비스를 구현하는 것이 목표입니다.",
    "stack": {
      "skill": [
        "Java",
        "Python",
        "TypeScript",
        "SQL"
      ],
      "tool": [
        "Spring Boot",
        "FastAPI",
        "React Native",
        "MySQL",
        "Docker",
        "Mosquitto MQTT",
        "LangChain/LangGraph",
        "Google Cloud TTS",
        "Firebase FCM",
        "Git/GitHub",
        "AWS"
      ],
      "device": [
        "Raspberry Pi",
        "Webcam",
        "Speaker",
        "Keypad",
        "Solenoid Door Lock"
      ]
    },
    "members": [
      {
        "name": "우서윤",
        "role": "AI(Audio), Backend",
        "comment": "파이프라인에 대해서 팀원들과 고민을 많이 했는데, 사용자 입장에서 저희가 의도한 흐름이 잘 전달되었으면 좋겠습니다",
        "song": "Steve Lacy-the feeling"
      },
      {
        "name": "양현빈",
        "role": "IoT, Backend",
        "comment": "수고하셨습니당",
        "song": "빈지노 - Always Awake"
      },
      {
        "name": "선비",
        "role": "Vision AI, Frontend",
        "comment": "1년 동안 다들 너무 고생했고 졸전도 무사히 잘 마무리되었으면 좋겠습니다!",
        "song": "도경수-Guitarist"
      }
    ],
    "questions": [
      {
        "q": "팀 내에서 가장 좋아하는 조합은 무엇인가요?",
        "a": "codex, claude"
      }
    ],
    "thanksTo": ""
  },
  {
    "id": "t05-02",
    "division": "05",
    "subtitle": "3D 추억 다락방",
    "name": "추억 다락방",
    "team": "따라큐",
    "thumbnail": "/projects/t05-02/1.webp",
    "keywords": [
      "Photo Mood Analysis",
      "Personalized 3D Gallery",
      "Memory sharing"
    ],
    "images": [
      "/projects/t05-02/1.webp",
      "/projects/t05-02/2.webp",
      "/projects/t05-02/3.webp",
      "/projects/t05-02/4.webp"
    ],
    "intent": "우리는 수많은 사진을 찍지만 대부분은 스마트폰이나 클라우드 속에 쌓인 채 다시 꺼내 보지 않게 됩니다. 추억 다락방은 그렇게 잊혀 가는 사진을 다시 머물고 꺼내 볼 수 있는 하나의 공간으로 만들고자 기획한 3D 사진 전시 서비스입니다. 사용자가 여러 장의 사진을 업로드하면 AI가 사진의 전체적인 분위기를 분석하고 그 결과에 어울리는 3D 다락방을 자동으로 구성합니다. 사진은 다락방 공간 곳곳에 배치되며 사용자는 직접 다락방을 돌아다니며 숨겨진 사진을 발견하고 각 사진을 감상할 수 있습니다. 완성된 다락방은 다른 사람과 공유할 수 있어 개인의 추억이 혼자 보는 사진첩을 넘어 함께 감상하고 이야기할 수 있는 전시가 됩니다. 익숙한 사진을 새로운 방식으로 다시 마주하며 지나간 순간을 공간 속에서 천천히 되돌아보는 경험을 제공하는 것이 추억 다락방의 목표입니다.",
    "stack": {
      "skill": [
        "JavaScript",
        "Python",
        "HTML5",
        "CSS3",
        "SQL"
      ],
      "tool": [
        "React",
        "Vite",
        "Three.js",
        "React Three Fiber (R3F)",
        "FastAPI",
        "Uvicorn",
        "PostgreSQL",
        "PyTorch",
        "MobileNetV3-Small",
        "OpenCV",
        "Blender",
        "Cloudinary",
        "Vercel",
        "Railway",
        "Blender"
      ],
      "device": [
        "VR Headset"
      ]
    },
    "members": [
      {
        "name": "김지민",
        "role": "백엔드",
        "comment": "다들 정말 수고 많으셨습니다…….",
        "song": "하성운 - Love Sound (feat. Rauas)"
      },
      {
        "name": "방수진",
        "role": "프론트엔드",
        "comment": "1년동안 다들 고생많았습니다!",
        "song": "엑스디너리히어로즈-George the Lobster"
      },
      {
        "name": "김소민",
        "role": "3D 모델러",
        "comment": "좋은 팀원들과 만나 즐겁게 작업했습니다! 감사합니다!",
        "song": "쏜애플 - 멸종"
      }
    ],
    "questions": [
      {
        "q": "게임 속에 빠진다면 팀원은 탱커, 딜러, 힐러, 서포터 중 어떤 역할일까요?",
        "a": "수진: 지민 - 서포터, 소민 - 딜러\n소민: 수진 - 딜러, 지민 - 서포터\n지민: 수진 - 탱커, 소민 - 힐러"
      }
    ],
    "thanksTo": "좀 더 깊은 사고를 하고 꼼꼼하게 점검할 수 있도록 도와주신 이형규 교수님 감사합니다."
  },
  {
    "id": "t05-03",
    "division": "05",
    "subtitle": "YOLO와 LLM을 활용한 라즈베리파이 기반 인터랙티브 동화 서비스",
    "name": "StoryDream",
    "team": "StoryLab",
    "thumbnail": "/projects/t05-03/1.webp",
    "keywords": [
      "Generative AI",
      "Interactive Reading",
      "Focus Detection",
      "Edge Device"
    ],
    "images": [
      "/projects/t05-03/1.webp",
      "/projects/t05-03/2.webp",
      "/projects/t05-03/3.webp",
      "/projects/t05-03/4.webp"
    ],
    "intent": "StoryDream은 아이가 책을 단순히 읽는 데서 그치지 않고, 이야기 속에 직접 참여하며 독서의 즐거움을 느낄 수 있도록 기획한 LLM 기반 디지털 동화 서비스입니다. 5~7세 아동은 관심사와 읽기 수준이 서로 다르고, 긴 시간 한 가지 활동에 집중하기 어렵다는 점에 주목했습니다. 이에 아이의 관심사를 반영해 동화를 추천하고, 읽기 수준에 맞춰 이야기의 난이도를 조절하여 자신에게 맞는 독서 경험을 제공하고자 했습니다.\n\n또한 독서 중 집중이 흐트러지면 캐릭터가 등장해 현재 읽고 있는 내용과 관련된 질문을 건네고, 아이의 답변에 따라 음성과 표정으로 반응하도록 구성했습니다. 읽기가 끝난 뒤에는 활동 내용을 기반으로 AI 독서 리포트를 제공해 보호자도 아이의 독서 과정을 확인할 수 있습니다. StoryDream은 기술이 독서를 대신하는 것이 아니라, 아이가 스스로 책을 읽고 이야기와 상호작용하며 자연스럽게 몰입할 수 있도록 돕는 새로운 독서 경험을 제안합니다.",
    "stack": {
      "skill": [
        "Java",
        "Python",
        "TypeScript",
        "CSS",
        "SQL"
      ],
      "tool": [
        "React",
        "Vite",
        "Spring Boot",
        "FastAPI",
        "Node.js",
        "Docker",
        "PostgreSQL",
        "AWS EC2/S3",
        "Qwen2.5-7B-Instruct",
        "Stable Diffusion XL",
        "OpenAI API",
        "OpenAI Realtime API",
        "YOLO"
      ],
      "device": [
        "Raspberry Pi",
        "10.1-inch Touch Display",
        "Camera",
        "LED"
      ]
    },
    "members": [
      {
        "name": "남아린",
        "role": "풀스택 및 클라우드",
        "comment": "화이팅",
        "song": "웬디-sunkiss"
      },
      {
        "name": "김은경",
        "role": "PM, 생성형 모델 파인튜닝 및 추론, Yolo 기반 집중도 탐지 구현, Backend, Hardware",
        "comment": "모두들 화이팅",
        "song": "Taylor Swift - Love Story"
      },
      {
        "name": "유현선",
        "role": "Frontend , 추천시스템 구현, 상호작용 구현",
        "comment": "다들 수고 많았어 !!",
        "song": "검정치마-LingLing"
      }
    ],
    "questions": [
      {
        "q": "성별 무관하게 팀원과 얼굴합이 잘 맞을 것 같은 연예인은 누구인가요?",
        "a": "아린 - 현선: 정승환\nA: 현선- 아린:이무진, 은경: 양세종\nA: 은경 - 아린:이무진, 현선:정승환"
      }
    ],
    "thanksTo": "프로젝트의 방향을 함께 고민하며 매주 아낌없는 피드백을 주신 이형규 교수님께 감사드립니다. 덕분에 기능 구현뿐 아니라 시스템의 기반과 구조를 탄탄히 설계하는 과정의 중요성을 배울 수 있었습니다. 또한 기획 단계부터 따뜻하게 조언해주시고, 어려움이 생길 때마다 기꺼이 도움을 주신 한이음 박수현 멘토님께도 감사드립니다. 두 분의 가르침 덕분에 한층 더 성장할 수 있었습니다."
  },
  {
    "id": "t05-04",
    "division": "05",
    "subtitle": "Wi-Fi CSI 기반 비접촉 돌봄 모니터링",
    "name": "CareWave",
    "team": "SWAG",
    "thumbnail": "/projects/t05-04/1.webp",
    "keywords": [
      "WiFi Sensing",
      "CSI(Channel State Information)",
      "AI",
      "Dual-Stream Fusion"
    ],
    "images": [
      "/projects/t05-04/1.webp",
      "/projects/t05-04/2.webp",
      "/projects/t05-04/3.webp",
      "/projects/t05-04/4.webp",
      "/projects/t05-04/5.webp",
      "/projects/t05-04/6.webp"
    ],
    "intent": "2025년 기준 국내 65세 이상 인구 비율은 20%를 넘어섰지만, 요양 현장의 인력은 이를 충분히 따라가지 못하고 있습니다. 특히 낙상은 요양시설에서 빈번하고 위험한 사고로, 야간처럼 돌봄 인력이 줄어드는 시간대에는 발견이 늦어질수록 위험이 커집니다. 그러나 CCTV는 침실이나 화장실 같은 사적 공간에서 사생활 침해 문제가 있고, 웨어러블 기기는 치매나 거동이 불편한 어르신에게 지속적인 착용을 기대하기 어렵습니다. CareWave는 “카메라도 웨어러블도 없이 안전을 지킬 수 있을까?”라는 질문에서 출발했습니다. 사람이 움직이거나 호흡할 때 발생하는 미세한 WiFi 신호 변화를 CSI로 수집하고 AI로 분석해 재실 여부와 서기, 앉기, 눕기, 낙상 등의 행동을 구분합니다. 또한 CSI 신호와 관절 움직임 특징을 함께 학습하는 Dual-Stream Fusion 모델을 통해 낙상과 눕기를 정교하게 구분하고, 이상 상황 발생 시 요양보호사에게 빠르게 알림을 전달해 야간 돌봄의 발견 공백을 줄이는 것을 목표로 합니다.",
    "stack": {
      "skill": [
        "Python",
        "TypeScript",
        "Java",
        "C++(ESP32 펌웨어)"
      ],
      "tool": [
        "PyTorch",
        "scikit-learn(Random Forest)",
        "FastAPI",
        "Spring Boot",
        "Spring AI",
        "React(Vite)",
        "MySQL",
        "MediaPipe",
        "Google Gemini API",
        "Docker",
        "AWS EC2",
        "GitHub Actions"
      ],
      "device": [
        "ESP32-S3(LOLIN S3) ×4(TX 1·RX 3)"
      ]
    },
    "members": [
      {
        "name": "박호연",
        "role": "AI Engineer + Backend",
        "comment": "끝까지 최선을 다하자!",
        "song": "Em Beihold - Lottery"
      },
      {
        "name": "이수진",
        "role": "AI Engineer + Backend",
        "comment": "우리 모두 파이팅!",
        "song": "Toploader - Dancing in the moonlight"
      },
      {
        "name": "김예나",
        "role": "CSI 수집 펌웨어, 행동 분류 AI 모델, 프론트엔드 개발",
        "comment": "너무너무 고생했습니다!",
        "song": "Ariana Grande - we can’t be friends"
      }
    ],
    "questions": [
      {
        "q": "팀 내에서 가장 좋아하는 조합은 무엇인가요?",
        "a": "엽기떡볶이와 교촌치킨"
      }
    ],
    "thanksTo": "막막했던 순간마다 방향을 제시해주시고, 저희가 놓친 부분을 끝까지 짚어주신 이형규 교수님께 진심으로 감사드립니다. 교수님의 조언 덕분에 더 단단한 프로젝트가 될 수 있었습니다."
  },
  {
    "id": "t05-05",
    "division": "05",
    "subtitle": "고령학습자를 위한 AI 검정고시 학습 도우미",
    "name": "검고심(心)",
    "team": "Triple B",
    "thumbnail": "/projects/t05-05/1.webp",
    "keywords": [
      "PWA",
      "RAG",
      "Multimodal AI",
      "LoRA Fine-tuning",
      "Senior-friendly UX"
    ],
    "images": [
      "/projects/t05-05/1.webp",
      "/projects/t05-05/2.webp",
      "/projects/t05-05/3.webp"
    ],
    "intent": "검정고시를 준비하는 고령학습자는 스마트폰 사용에 익숙하지 않아 기존 학습 앱의 복잡한 화면 구성과 텍스트 위주의 인터페이스 앞에서 쉽게 포기하게 된다. 실제로 야학에서 어르신들께 수학을 가르치며, 문제집을 어떻게 검색하고 질문해야 할지 몰라 답답해하시는 모습을 여러 번 지켜보았고, 이러한 경험은 이 프로젝트를 시작하게 된 결정적인 계기가 되었다.\n\n이 문제의식에서 출발해, 검고심은 사용자가 풀리지 않는 문제를 사진으로 찍고 궁금한 점을 음성으로 질문하면, 방대한 기출문제 데이터베이스에서 유사한 문제를 검색하고 음성과 화면 설명으로 함께 풀어주는 AI 학습 도우미를 목표로 한다.\n\n이를 위해 이미지 인식과 음성 인식, 검색증강생성 기술을 결합하여 사진과 음성만으로 학습이 이어지도록 설계하였다. 복잡한 조작 없이 촬영과 말하기만으로 학습을 이어갈 수 있도록 함으로써, 디지털 기기 사용이 익숙하지 않은 어르신들도 스스로 검정고시를 준비할 수 있는 학습 환경을 만들고, 나아가 고령학습자를 위한 디지털 교육 접근성을 높이는 데 기여하고자 한다.",
    "stack": {
      "skill": [
        "HTML5",
        "CSS3",
        "JavaScript (Vanilla JS)",
        "Python"
      ],
      "tool": [
        "VS Code",
        "Anaconda",
        "GitHub",
        "FastAPI",
        "OpenCV",
        "Matplotlib",
        "openpyxl",
        "Docker",
        "Google Cloud Run",
        "Gemini API (Gemini Flash)",
        "Whisper (LoRA Fine-tuning)",
        "Naver Clova OCR",
        "Google Cloud TTS",
        "Pinecone",
        "Claude API",
        "OpenAI API (GPT-4o-mini)",
        "PWA (Web App Manifest, Service Worker)",
        "getUserMedia (인앱 카메라)"
      ],
      "device": [
        "스마트폰",
        "태블릿"
      ]
    },
    "members": [
      {
        "name": "박세연",
        "role": "Frontend, Backend, Database 구축",
        "comment": "졸프로 얻은 결과물: 앱 그리고 파산 및 건강악화",
        "song": "Sing Street - Drive it Like You Stole It"
      },
      {
        "name": "정은하",
        "role": "Frontend, AI(STT/TTS), Database 구축",
        "comment": "졸전 준비하느라 다들 1년 동안 고생 많았습니다. 살면서 이렇게 카페에서 노트북 많이 한 적은 처음입니다.",
        "song": "Richard Sanderson - Reality"
      },
      {
        "name": "유혜빈",
        "role": "Backend, AI(OCR·해설생성), Infra",
        "comment": "서로 기대면서 나아가면 돼. 웃으면서 어깨동무하고 내일이라는 미래의 이야기를 하자.",
        "song": "水瀬いのり - wishing(Re:ゼロから始める異世界生活OST)"
      }
    ],
    "questions": [
      {
        "q": "팀원에게 텔레파시를 보내 한 장소에서 모인다면 어디에서 만날 것 같나요?",
        "a": "세연 - 도서관 이형규 교수님 연구실 앞\n은하 - 인대 주차장 흰색 모닝 앞\n혜빈 - 인문사회관 라운지 충전되는 곳"
      }
    ],
    "thanksTo": "세연 - 우선 제 정신적 지주이신 장민기씨께 감사드립니다. 그리고 아낌없는 경제적 지원을 해주신 부모님께 제일 감사드립니다. 마지막으로 함께 개고생한 우리 팀원들! 감사합니다.\n\n은하 - 아무것도 몰랐던 저를 이끌어주신 세연님, 혜빈님 감사합니다. 저희 팀에게 매번 현명한 조언을 주신 이형규 교수님께도 감사드립니다. 사람은 아니지만 세연님의 흰색 모닝과 학식당 마라샹궈 #절대안잊어… 아빠 용돈 줘서 고마워 덕분에 안 굶음.\n\n혜빈 - 함께 고생한 우리 팀원들, 나, 세연님 차, claude, 주제에 대해 귀 기울여주신 모두에게 감사드립니다."
  },
  {
    "id": "t06-01",
    "division": "06",
    "subtitle": "낯선 저택에 갇힌 플레이어가 단서 탐색 및 NPC와의 LLM 기반 대화를 통해 탈출의 진실을 밝혀가는 1인칭 스토리형 3D 추리·탈출 게임.",
    "name": "CHAT: The Only Way Out",
    "team": "23이삼",
    "thumbnail": "/projects/t06-01/1.webp",
    "keywords": [
      "Unity",
      "LLM",
      "RAG",
      "Prompt Engineering"
    ],
    "images": [
      "/projects/t06-01/1.webp",
      "/projects/t06-01/2.webp",
      "/projects/t06-01/3.webp",
      "/projects/t06-01/4.webp",
      "/projects/t06-01/5.webp",
      "/projects/t06-01/6.webp"
    ],
    "intent": "기존의 추리 게임은 정해진 선택지와 대사 중심으로 이야기가 진행되어 플레이어의 자유도가 낮다는 단점이 있습니다. 본 프로젝트는 생성형 AI를 게임의 핵심 요소로 활용하여 플레이어의 질문과 대화 자체가 추리 과정이 되는 게임을 구현하고자 합니다. 플레이어는 1인칭 시점으로 저택을 탐색하며 단서를 수집하고, 각기 다른 성격과 관계를 가진 NPC와 자유롭게 대화하며 사건의 진실을 밝혀냅니다. NPC는 AI 언어모델과 RAG 기술을 기반으로 캐릭터의 성격과 기억, 사건 정보를 바탕으로 플레이어의 질문에 대응합니다. 이를 통해 단순히 정답을 선택하는 방식에서 벗어나, 무엇을 질문하고 어떤 단서를 연결하느냐에 따라 달라지는 자유도 높은 플레이 경험을 제공하는 것을 목표로 합니다.",
    "stack": {
      "skill": [
        "C#",
        "Python",
        "ShaderLab",
        "HLSL"
      ],
      "tool": [
        "Unity 6",
        "LM Studio",
        "Git",
        "GitHub",
        "Figma",
        "Meshy AI",
        "Qwen3-4B",
        "KURE-v1"
      ],
      "device": []
    },
    "members": [
      {
        "name": "송혜준",
        "role": "백엔드, LLM 개발",
        "comment": "모두 맡은 바를 자발적으로 열심히 해주어서 넘 감사했어요 23이삼 짱!",
        "song": "Madge & VALORANT- 2WORLDS"
      },
      {
        "name": "사벨레바 아나스타시아",
        "role": "클라이언트 담당(Unity), UI/UX",
        "comment": "2학기 동안 열심히 함께해 주셔서 감사합니다! 앞으로도 좋은 일만 생기길 바랍니다",
        "song": "잔나비 - 꿈과 책과 힘과 벽"
      },
      {
        "name": "유지수",
        "role": "Unity 클라이언트 개발",
        "comment": "처음으로 큰 규모의 게임을 개발하면서 어려움도 많았지만, 함께 재미있게 작업했습니다.",
        "song": "위아더나잇 - SF"
      },
      {
        "name": "장유진",
        "role": "콘텐츠 기획, Unity 클라이언트 개발",
        "comment": "힘들었지만 보람찼습니다!! 무조건적인 칭찬만 부탁드립니다 ^__^",
        "song": "V8-coloring"
      }
    ],
    "questions": [
      {
        "q": "게임 속에 빠진다면 본인은 탱커, 딜러, 힐러, 서포터 중 어떤 역할일까요?",
        "a": "송혜준: 서포터\n사벨레바 아나스타시아: 힐러\n유지수: 딜러\n장유진: 힐러"
      }
    ],
    "thanksTo": "많이 도와주시고 방향을 잘 잡아주신 이준원 지도교수님께 감사드립니다. 항상 전폭적인 응원과 지지를 보내주셔서 힘내서 프로젝트 마무리 할 수 있었습니다. 졸준위, 디소공 조교님들께도 진심으로 감사드립니다!"
  },
  {
    "id": "t06-02",
    "division": "06",
    "subtitle": "Live English, Everywhere!",
    "name": "LIVENG(라이빙)",
    "team": "네박자",
    "thumbnail": "/projects/t06-02/1.webp",
    "keywords": [
      "에듀테크",
      "영어회화",
      "AI 튜터",
      "실시간 맥락 반영",
      "모바일 어플리케이션"
    ],
    "images": [
      "/projects/t06-02/1.webp",
      "/projects/t06-02/2.webp",
      "/projects/t06-02/3.webp",
      "/projects/t06-02/4.webp",
      "/projects/t06-02/5.webp",
      "/projects/t06-02/6.webp"
    ],
    "intent": "LIVENG의 목적은 우리의 일상 공간을 영어로 바꿔나가는 것입니다. 큰 틀에서는 카페 주문처럼 해당 공간에서 자주 쓰이는 상황별 대화 카테고리를 익히고, 세부적으로는 공간 속 사물들의 영단어까지 단계별로 마스터합니다. 이렇게 매일 마주하는 생활 속 장소들을 하나씩 학습하여, 훗날 해외 어느 장소에 가더라도 자신감 있게 말할 수 있는 실전 회화를 완성하는 것이 목표입니다.\n\n기존 영어 회화 앱은 정해진 스크립트와 한정된 카테고리를 수동적으로 따라가는 한계가 있었습니다. 반면 LIVENG은 사용자가 배우고 싶은 상황을 직접 결정하고, 눈앞의 공간과 사물을 카메라로 비추며 주도적으로 학습을 시작합니다. 내가 실제로 마주한 시각적 장면이 곧바로 대화의 소재가 되어, AI와 실시간 맥락을 반영한 생생한 자유 대화를 나눕니다.\n\nLIVENG은 비전 기술과 언어모델을 결합해 시야에 닿는 모든 일상을 능동적인 영어 회화 무대로 바꿉니다. 기술이 일상에 실질적인 도움을 주는 가장 현실적이면서도 혁신적인 에듀테크를 선보이겠습니다.",
    "stack": {
      "skill": [
        "TypeScript, Python, STT, LLM, TTS"
      ],
      "tool": [
        "Framework & Server: React Native, Expo, FastAPI, Uvicorn, ngrok",
        "Database: SQLite, SQLAlchemy",
        "AI / Vision / Audio: YOLOv8, OpenCLIP, PyTorch, Whisper, Qwen2.5, Kokoro, OpenCV",
        "Environment: VS Code"
      ],
      "device": []
    },
    "members": [
      {
        "name": "김유나",
        "role": "AI 파트",
        "comment": "같이 영어 배워요^^",
        "song": "레드벨벳 - surfin’boy"
      },
      {
        "name": "남유정",
        "role": "프론트엔드",
        "comment": " 돈은 없는데요 어학연수는 가고 싶었습니다. 그래서 한국에서 영어를 배울 수 있는 앱을 만들어봤습니다.",
        "song": "효리수 - skibidi"
      },
      {
        "name": "이이솔",
        "role": "백엔드",
        "comment": "보이지 않는 곳에서 앱과 AI를 연결했습니다. 졸업은 끝이 아닌, 새로운 시작이라고 생각합니다.",
        "song": "Vanilla Mood - Second Run"
      },
      {
        "name": "조수연",
        "role": "AI 파트",
        "comment": "LIVENG과 함께라면 영어 회화 마스터 가능합니다 !",
        "song": "Taylor Swift - Cruel Summer"
      }
    ],
    "questions": [
      {
        "q": "해리포터 세계관에 들어간다면 어느 기숙사일까요? (그리핀도르, 슬리데린, 후플푸프, 래번클로 )",
        "a": "수연님은 래번클로 - 더 좋은 아이디어 있으면 편하게 이야기 나눠볼까요? 라는 말을 자주하심 창의적으로 생각하는 걸 좋아하고 새로운 것을 배우는 걸 좋아하는 걸 보니 래번클로가 분명하시다!!!!!!\n유나님은 후플푸프 - 원래 슬리데린 하고 싶어 했는데 이솔님이 자기랑 똑같다고 후플푸프로 데려가버리심;;; 이솔 PICK\n이솔님은 후플푸프 - 완전 후플푸프상임. 동물이랑 잘 어울리심. 성격 둥글둥글 오소리이심!!\n유정님은 그린핀도르 - 불의를 보면 지나치지 않을 분이심. like 라이온! !"
      }
    ],
    "thanksTo": "Thanks to 이준원 교수님\n\n우리 교수님의 MBTI를 추측해본다면… 아마도 F가 아닐까 싶습니다.\n프로젝트 이야기뿐만 아니라 취업 준비는 잘하고 있는지, 개발하면서 힘든 점은 없는지 늘 세심하게 챙겨주시고 따뜻하게 응원해주셨기 때문입니다.\n\n졸업작품을 진행하면서 생각처럼 잘 풀리지 않아 지치거나 고민이 많았던 순간도 있었지만, 그럴 때마다 교수님께서 이야기를 잘 들어주시고 편하게 조언해주셔서 큰 힘이 되었습니다. 덕분에 막막했던 순간에도 다시 마음을 다잡고 프로젝트를 끝까지 이어갈 수 있었습니다.\n\n프로젝트의 결과뿐만 아니라 그 과정까지 함께 고민해주시고, 항상 학생들의 입장에서 따뜻하게 지도해주셔서 감사했습니다. 교수님 덕분에 든든한 마음으로 졸업작품을 잘 마무리할 수 있었고, 이번 경험도 오래 기억에 남을 것 같습니다. 그동안 진심으로 감사했습니다!\n꼭 원하는 곳에 취업해서 좋은 소식으로 다시 인사드리겠습니다!"
  },
  {
    "id": "t06-03",
    "division": "06",
    "subtitle": "정확하게 알고, 똑똑하게 먹자",
    "name": "알고먹자 (AlgoMeokja)",
    "team": "심플텍",
    "thumbnail": "/projects/t06-03/1.webp",
    "keywords": [
      "Android App",
      "HTML",
      "Open AI",
      "스마트 푸드 플랫폼",
      "게이미피케이션"
    ],
    "images": [
      "/projects/t06-03/1.webp",
      "/projects/t06-03/2.webp",
      "/projects/t06-03/3.webp",
      "/projects/t06-03/4.webp",
      "/projects/t06-03/5.webp",
      "/projects/t06-03/6.webp"
    ],
    "intent": "많은 사람들이 식재료를 구매한 뒤 냉장고 안에 무엇이 있는지 잊어버리거나 유통기한을 놓쳐 그대로 버리는 경험을 합니다. 이런 사소한 습관이 쌓이면 개인에게는 불필요한 지출로, 사회적으로는 음식물 쓰레기 문제로 이어집니다. 알고먹자는 이 문제를 냉장고 관리와 레시피 추천을 하나로 묶어 해결하고자 기획한 프로젝트입니다.\n\n사용자는 사진 한 장이나 영수증 촬영만으로 식재료를 손쉽게 등록할 수 있고, 유통기한이 임박한 재료는 자동으로 알림을 받습니다. 무엇보다 단순히 버리지 말라고 경고하는 데 그치지 않고, 지금 냉장고에 있는 재료로 만들 수 있는 레시피를 즉시 추천해 실질적인 행동 변화로 이어지도록 설계했습니다. 또한 포인트와 업적 시스템을 더해 식재료를 아껴 쓰는 과정 자체가 소소한 성취감으로 느껴지도록 게이미피케이션 요소를 접목했습니다. 알고먹자는 결국 무엇을 먹을지 고민하는 시간과 음식을 낭비하는 습관 두 가지를 동시에 줄여, 사용자의 일상 속에서 작은 변화를 꾸준히 만들어가는 것을 목표로 합니다.",
    "stack": {
      "skill": [
        "Kotlin",
        "Python",
        "HTML / CSS / JavaScript"
      ],
      "tool": [
        "Android Studio",
        "Firebase",
        "OpenAI API(GPT-4o-mini)",
        "YouTube Data API v3",
        "Room",
        "WorkManager",
        "Flask",
        "VS Code"
      ],
      "device": [
        "Android 스마트폰",
        "PC"
      ]
    },
    "members": [
      {
        "name": "누르마토바 딜노자",
        "role": "Android 앱 개발 (앱 기능 및 데이터 처리)",
        "comment": "나 됐어요. 대졸자 됐어요!",
        "song": ""
      },
      {
        "name": "신예리",
        "role": "Android 앱 개발 (앱 기능 및 데이터 처리), 로고, 앱 UI, 디자인 시스템",
        "comment": "드디어 졸업을 하는구나!",
        "song": "高橋あず美, Lotus Juice-Color Your Night"
      },
      {
        "name": "하사노바 우글러이",
        "role": "웹사이트 개발 (프론트엔드•백엔드 및 기능 구현)",
        "comment": "끝까지 나답게..!",
        "song": "이무진, Coming of Age Story"
      }
    ],
    "questions": [
      {
        "q": "팀원에게 텔레파시를 보내 한 장소에서 모인다면 어디에서 만날 것 같나요?",
        "a": "차미리사관 339실 / 저희가 늘 함께 작업하던 소중한 공간이기 때문입니다!"
      }
    ],
    "thanksTo": "**이준원 교수님**\n\n프로젝트를 진행하는 과정에서 저희가 올바른 방향으로 나아갈 수 있도록 따뜻하게 이끌어주시고, 많은 조언과 격려를 보내주셔서 진심으로 감사드립니다.\n\n프로젝트를 진행하며 어려움을 겪거나 방향을 잡기 힘든 순간마다 교수님의 세심한 지도와 조언 덕분에 부족한 부분을 보완하고 한 단계씩 성장할 수 있었습니다.\n\n저희의 아이디어와 노력을 존중해주시고 끝까지 믿고 응원해주신 덕분에 프로젝트를 무사히 완성할 수 있었습니다.\n\n그동안 보내주신 관심과 가르침에 다시 한번 깊이 감사드리며, 이번 프로젝트를 통해 배운 경험과 가르침을 앞으로도 소중히 간직하겠습니다."
  },
  {
    "id": "t06-04",
    "division": "06",
    "subtitle": "일정과 목표를 힌곳에서 관리하고 실패 원인을 분석하는 습관 관리 앱",
    "name": "Goal Tracker",
    "team": "PIEating",
    "thumbnail": "/projects/t06-04/1.webp",
    "keywords": [
      "일정 및 습관 관리",
      "실패 원인 분석",
      "PWA 기반 크로스 플랫폼"
    ],
    "images": [
      "/projects/t06-04/1.webp",
      "/projects/t06-04/2.webp",
      "/projects/t06-04/3.webp",
      "/projects/t06-04/4.webp"
    ],
    "intent": "많은 사람들이 공부, 운동, 자기계발처럼 다양한 목표를 세우지만, 계획이 작심삼일로 끝나는 경험을 반복합니다. 할 일과 반복 일정, 장기 목표가 각기 다른 곳에 흩어져 있으면 오늘의 실천이 목표에 얼마나 다가가고 있는지 체감하기 어렵고, 이는 곧 동기 저하로 이어집니다.\n\nGoalTracker는 이러한 문제에서 출발했습니다. 할 일·루틴·목표를 하나의 앱에서 연결해 관리함으로써, 매일의 작은 실천이 목표 달성으로 쌓여가는 과정을 사용자가 직접 확인할 수 있도록 했습니다. 날짜별 달성도와 기간별 통계를 통해 자신의 실천 흐름을 돌아보고, 꾸준한 습관 형성을 위한 동기를 얻을 수 있습니다.\n\n특히 GoalTracker는 성공만큼 실패에도 주목합니다. 대부분의 습관 관리 서비스가 달성 여부만 기록하는 것과 달리, 목표를 이루지 못했을 때 그 원인을 시간 부족, 동기 부족 등으로 기록하고 유형별 비율로 분석합니다. 실패를 좌절이 아닌 다음 계획의 근거로 삼아, 사용자가 스스로 세운 목표를 끝까지 지켜낼 수 있도록 돕는 것이 이 프로젝트의 궁극적인 목표입니다.",
    "stack": {
      "skill": [
        "Java",
        "TypeScript",
        "SQL"
      ],
      "tool": [
        "Spring Boot",
        "Spring Data JPA",
        "JWT",
        "Swagger",
        "Gradle",
        "Lombok",
        "MySQL",
        "React",
        "Vite",
        "PWA",
        "AWS EC2",
        "Git",
        "GitHub",
        "VS Code",
        "Thunder Client"
      ],
      "device": []
    },
    "members": [
      {
        "name": "이다은",
        "role": "백엔드",
        "comment": "이걸 졸업하네 ㅋㅋ",
        "song": "양홍원, unofficialboy, GAMMA - 빛나"
      },
      {
        "name": "조유진",
        "role": "인프라 • 배포",
        "comment": "수고하셨습니다.",
        "song": ""
      },
      {
        "name": "전시윤",
        "role": "프론트엔드",
        "comment": "수고하셨습니다. 하고자 하는 일 모두 잘 되길 바라요!",
        "song": ""
      }
    ],
    "questions": [
      {
        "q": "팀 내에서 가장 좋아하는 조합은 무엇인가요?",
        "a": "종강 + 방학"
      }
    ],
    "thanksTo": "늘 학생들에게 조금이라도 더 도움주고자 노력해주신 이준원 교수님 감사드립니다. 처음 도전해보는 프로젝트라 두렵고 부담스럽기도 했지만, 교수님께서 보내주신 응원과 “조금 더 해볼 수 있다”는 믿음 덕분에 포기하지 않고 끝까지 완주할 수 있었습니다. 다시 한번 깊이 감사드립니다.\n\n그리고 부족한 친구를 위해 귀한 시간 쪼개 도와준 우리 프로젝트의 숨은 귀인 재윤아, 정말 고맙고 사랑한다!"
  }
];
