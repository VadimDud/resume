 // Create a function to change the hash value of the page and reload it
 function changeLanguage(lang) {
  location.hash = lang;
  location.reload();
}

// Define the language reload anchors
const eng = {

  nContent:"Vadim Dudkin",
  sContent:"Summary",
  summary:   
  "● Hands-on experience and formal training in testing web and mobile software applications \n" +
  "● Knowledge of software testing methodologies, tools and processes \n" +
  "● Automation engineer for 14 years, system testing \n" +
  "● Develop solid test documentation including test cases, test suites, test matrices, etc. \n" +
  "● Experience in writing clear, concise, easy-to-reproduce bug reports \n" +
  "● Enjoy working as a member of a result-driven team \n" +
  "● Strong analytical, problem-solving \n" +
  "● Multilingual: Russian (native), English (intermediate) \n",
  technic:
  "Programming: HTML, CSS, Python, SQL \n" +
  "Automation: fundamentals of Selenium Webdriver with Python \n" +
  "Bug Tracking: Qase, Jira, TestRail \n" +
  "Design Tools: Figma, Invision, Photoshop \n" +
  "OS/Platforms: Windows, MAC, iOS, Android, Linux \n" +
  "Browsers: Chrome, Safari, FireFox, Opera, Tor Browser, Edge \n" +
  "Database: PostgreSQL, MS SQL Server, MS Access \n" +
  "Tools: Slack, Github, ADB, Postman",
  techslills:"Technical Skills",
  expernote:" ● Project: Web/Mobile/Windows cross-platform application for business communication/project management tool \n ● Studied business and technical requirements to understand the product features \n ● Developed and maintained test documentation such as test cases, test suites, contributed to the test plan \n ● Executed test procedures against new builds \n ● Took part in regression, build acceptance, integration and system level testing \n ● Tested user interface along the guidelines published by the US Department of Health and Human Services \n ● Reported software anomalies and defects using Jira, verified bugs fixed \n ● Communicated with other cross-functional team members to identify resolve issues \n ● Participated in Agile Scrum meeting and other Agile rituals \n ● Utilized Postman for testing web services (REST API testing)",
  showcalendar: "Show calendar",

  
}
const ru = {

  nContent:"Вадим Дудкин",
  sContent:"Резюме",
  summary:
  "● Практический опыт и профессиональное обучение в области тестирования веб- и мобильных приложений\n"+
  "● Знание методологий, инструментов и процессов тестирования ПО\n"+
  "● Опыт инженера по автоматизации в течение 14 лет, в том числе тестирования системы\n"+
  "● Разработка прочной документации по тестированию, включая тестовые примеры, тестовые наборы, тестовые матрицы и т.д.\n"+
  "● Опыт написания понятных, лаконичных и легко воспроизводимых сообщений об ошибках\n"+
  "● Умение работать в команде, ориентированной на результат\n"+
  "● Сильные аналитические навыки и умение решать проблемы\n"+
  "● Многоязычность: русский (родной), английский (Intermediate)\n",
  
  technic:
  "Программирование: HTML, CSS, Python, SQL \n" + 
  "Автоматизация: основы Selenium Webdriver с Python \n" +
  "Отслеживание ошибок: Qase, Jira, TestRail \n" +
  "Инструменты проектирования: Figma, Invision, Photoshop \n" +
  "ОС/платформы: Windows, MAC, iOS, Android, linux \n" +
  "Браузеры: Chrome, Safari, FireFox, Opera, Tor Browser, Edge \n" +
  "База данных: PostgreSQL, MS SQL Server, MS Access \n" +
  "Инструменты: Slack, Github, ADB, Postman, JMeter\n",
  techslills:"Технические Навыки",
  exper: "Опыт тестирования программного обеспечения",
  expernote:"01.22/по настоящее время - 'SyncToSkill', стартап, IT платформа \n Москва \n Информационные технологии, системная интеграция, интернет\n Системная интеграция, автоматизации технологических и бизнес-процессов предприятия, ИТ-консалтинг\n Тестировщик ПО\n ● Применяли гибкую методологию разработки Agile (Scram)\n ● Артефакты тестирования были в Qase, Jira, TestRail\n ● Исследовал бизнес-документацию и требования для понимания работы модулей в приложениях\n ● Проверял соответствует ли Web приложение макету в Figma\n ● Тестировал API через Postman\n ● Проверял UI / UX\n ● Применял различные расширения и DevTools в браузере\n ● Работал с PostgreSQL, проверял базу данных\n ● Писал в командной строке Линукс Bash скрипты для работы с папками и файлами, поисками (grep) в логах записанных ошибок\n ● Перехватывал трафик с Charles Proxy\n ● Работал с Docker\n ● Пользовался репозиторием на GitHub\n Участвовал в запуске четырех проектов, где была возможность: \n ● Начать самостоятельно писать скрипты на Python (Selenium WebDriver) для автоматизации UI и API, парсинга сайтов в приложении VS code, PyСharm\n ● Результат прохождения тестов выводить через Allure \n ● Проводить тестирование безопасности (OWASP ZAP) \n ● Делать нагрузочное тестирование через JMeter\n ● Проект: кросс-платформенное веб-/мобильное/Windows-приложение для делового общения/инструмент управления проектами \n ● Изучил бизнес-требования и технические требования для понимания функций продукта\n ● Разработал и поддерживал тестовую документацию, такую ​​как наборы тестов, наборы тестов, вносил вклад в план тестирования\n ● Выполнение тестовых процедур для новых сборок\n ● Принимал участие в регрессионном тестировании, приемке сборок, интеграции и тестировании на уровне системы\n ● Тестирование пользовательского интерфейса в соответствии с рекомендациями, опубликованными Министерством здравоохранения и социальных служб США\n ● Сообщал об аномалиях и дефектах программного обеспечения с помощью Jira,исправлены проверенные ошибки\n ● Общался с другими членами кросс-функциональной команды для выявления и решения проблем\n ● Участвовал в собраниях Agile Scrum и других Agile-ритуалах\n ● Использовал Postman для тестирования веб-сервисов (тестирование REST API)",
    other: "Другой опыт",
    othexp: "11.19/01.22 - Инженер по автоматизации и КИПиА, ООО «ФЕНИКС ГРУПП», Москва 08.11/11.19 - Инженер по автоматизации и КИПиА, ООО «Термопилот», Москва \n ● Помогал с установкой и обслуживанием нескольких продуктов для клиентов \n ● Понимание, кто наш клиент \n ● Тестирование системы: установка , тестирование, настройка границ поведения автоматики безопасности и корректной работы оборудования и т.д. \n ● Работал со всеми заинтересованными сторонами над выработкой рекомендаций для дорожных карт проекта \n ● Разрабатывал техническую документацию по многочисленным проектам - требования, спецификации и т.д. \n ● Выполнял обширные исследования и анализ для выявления новых возможностей для бизнеса",
    spec: "Тестировщик/QA",
    showcalendar: "Покажи календарь"
  };
  
  // Check if a hash value exists in the URL
  // if (window.location.hash) {
  
  // // Set the content of the webpage
  // // depending on the hash value
// Check if a hash value exists in the URL
if (window.location.hash === "#ru") {
  // Set the content of the webpage depending on the hash value
  for (let key in ru) {
    let elem = document.getElementById(key);
    if (elem) {
      elem.textContent = ru[key];
    }
  }
} else {
  // Set the default language content
  for (let key in eng) {
    let elem = document.getElementById(key);
    if (elem) {
      elem.textContent = eng[key];
    }
  }
}
