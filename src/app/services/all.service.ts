import {Injectable} from '@angular/core';
import {LoggingService} from './logging.service';
import {Cards, Founders, Courses, Images, Review} from '../classes';
import {Router} from '@angular/router';

@Injectable()
export class AllService {

  constructor(private loggingService: LoggingService, private router: Router) {
  }
  first = true;
  isLoggedIn = false;
  firstname: string;
  lastname: string;
  school: string;
  email: string;
  get login(): boolean {
    return this.isLoggedIn;
  }

  set login(value){
    this.isLoggedIn = value;
  }
  getFounders() {
    let foundList: Founders[];
    foundList = [
      new Founders('Апышева Лейла', '../../assets/images/Leyla.jpeg'),
      new Founders('Санжар Елшібеков', '../../assets/images/Sanzhar.jpeg')
    ];

    return foundList;
  }

  getCards() {
    let cardsList: Cards[];
    cardsList = [
      new Cards('../../assets/images/productive.png', 'https://www.instagram.com/p/CD3I-gunT4w/'),
      new Cards('../../assets/images/timeman.jpg', 'https://www.instagram.com/p/CERRROZnrqD/'),
      new Cards('../../assets/images/competitive.jpg', 'https://www.instagram.com/p/CEJ3cgInLEW/'),
      new Cards('../../assets/images/social.jpg', 'https://www.instagram.com/p/CFKFR4lHtmQ/')
    ];

    return cardsList;
  }

  getImages() {
    let images: Cards[];
    images = [
      new Cards('../../assets/images/car1.png', 'https://www.instagram.com/p/CDtJ9hYlXDw/'),
      new Cards('../../assets/images/car2.png', 'https://www.instagram.com/p/CDtYW8IlobN/'),
      new Cards('../../assets/images/car3.png', 'https://www.instagram.com/p/CDtei0aFzda/'),
      new Cards('../../assets/images/car4.png', 'https://www.instagram.com/p/CDt6qSrnIke/'),
      new Cards('../../assets/images/car5.png', 'https://www.instagram.com/p/CDteSpJlZpN/')
    ];

    return images;
  }

  getCourses() {
    let courses: Courses[];
    courses = [
      new Courses('Английский', 'assets/images/english.jpg', 'Курсы по английскому языку', 'Давно думаете изучить английский язык? Безусловно, вы сделали правильный выбор, ведь английский язык - главный язык международного общения. Скорее всего, вы уже столкнулись с главной проблемой при изучении английского языка - огромное количество представленных на рынке учебников, курсов, большинство из которых - пустая трата времени и денег. А если к этому добавить еще самостоятельное обучение и полное отсутствие начальных знаний языка, то это всё ставит человека в тупик, и у него пропадает желание изучать английский язык. А желание - главный ключ к успешному изучению любого иностранного языка. Мы вам поможем в этом!', '#EDD3BB'),
      new Courses('Биология', 'assets/images/biology.png', 'Курсы по биологии', 'Биология — это наука о жизни, о живых организмах. Она изучает различные формы жизни, их строение и разнообразие, а также законы природы. Выделяют несколько разделов биологии: Зоология — наука о животных; Ботаника — наука о растениях; Микробиология — наука о микроорганизмах; Экология — наука о взаимодействии организмов и среды; Эволюция — наука об изменении живых существ в течение длительного периода времени; Генетика — наука о наследственности и изменчивости. Существуют и другие разделы биологии. Биология тесно связана с физикой, химией, медициной, сельским хозяйством, лесоводством и другими отраслями науки, объединяя которые, получают такие отрасли науки, как биофизика, биохимия, биогеография, биоинженерия и даже космическая биология.', '#ff9f10'),
      new Courses('История Казахстана', 'assets/images/historykz.png', 'Курсы по истории Казахстана', 'Курс «История Казахстана» предназначен для тех, - кто хочет сдать экзамен «ЕНТ,КТА,НИШ» - кто хочет больше знать об истории Казахстана. Программа ориентирована на дополнение и углубление знаний учеников об исторических личностях, оставивших как положительный, так и негативный след в истории Казахстана, понимания роли личности в истории, а также для подготовки учеников к сдаче Единого Национального тестирования. При изучении материала об исторических лидерах учащимся будет полезно разобраться, чем объясняется выдвижение того или иного человека в качестве общественного, политического, духовного или иного лидера, на чем основаны его власть, влияние на судьбы других людей.', '#a07c80'),
      new Courses('Казахский язык', 'assets/images/kz.png', 'Курсы по казахскому языку', 'Вы задумались о том, что пора учить казахский язык? Хорошее желание! Перевод делопроизводства на государственный язык, оформление документов - мало ли где сегодня вам может понадобиться знание казахского. Опережайте время: пока другие только собираются учить язык, вы уже знаете!', '#d9c392'),
      new Courses('Математика', 'assets/images/math.png', 'Курсы по математике', 'Математика один из самых интересных и увлекательных школьных предметов. Наши преподаватели подробно объяснят Вашим детям все непонятные для них вопросы, что необходимо им для успешного обучения в школе. Креативный подход в обучении даст возможность ученику работать головой. На наших уроках мы создаем развивающую математическую среду, в которой ученик сможет раскрыть свои естественные способности. Наши занятия станут большим подспорьем для родителей в деле интеллектуального развития своих детей.',  '#EBDFDF'),
      new Courses('Ораторское мастерство', 'assets/images/oratorskoe.png', 'Курсы по ораторскому мастерству', 'Ораторское иску́сство — искусство публичного выступления с целью убеждения. Ораторское искусство — это гармоничное сочетание риторики, приёмов актёрского мастерства (подача) и психологических техник. Цель ораторского искусства — изложение оратором его позиции перед оппонентом или аудиторией, защита собственной точки зрения. Этой цели он достигает, используя подготовленную речь и технику ораторского мастерства.', '#41BDAB'),
      new Courses('Подготовка к НИШ, РФМШ', 'assets/images/nisrsphm.png', 'Курсы по подготовке к НИШ / РФМШ', 'Мы работаем в сфере предоставления дополнительного образования и подготовки подростков в школы для одаренных детей. Подготовка проходит индивидуально по различным предметам: математика, логика, физика и языки. Чаще всего клиенты обращаются к нам за помощью в подготовке к НИШ и РФМШ.', '#7A84BE'),
      new Courses('Программирование', 'assets/images/programming.png', 'Курсы по программированию', 'Вы сможете попробовать себя в качестве веб-разработчика и обучиться азам профессии. Полученный опыт программирования позволит оценить реальные возможности, силу мотивации, и решить, нужно ли идти дальше. Мы против задач ради задач и теории без практики. Наши ученики используют полученные знания в собственных проектах — от идеи до воплощения.', '#F26D53'),
      new Courses('Русский язык', 'assets/images/rus.png', 'Курсы по русскому языку', 'Русский язык входит в число крупнейших мировых языков и является инструментом международного общения: это один из 6 официальных языков ООН. По уровню распространения русский язык занимает 5-е место в мире после китайского, английского языка, хинди и испанского: 180 миллионов человек говорят на русском; 30 миллионов человек в более чем 90 странах мира изучают русский язык как иностранный.', '#BF9E96'),
      new Courses('Физика', 'assets/images/fizika.png', 'Курсы по физике', 'Если физика тяжело дается в школе, и в ней много непонятных вопросов, то школьнику нужны дополнительные занятия. Курсы по физике помогут ему разобраться во всех темах школьной программы, и ученик научится самостоятельно решать задачи. Наши преподаватели учат ребят корректировать свои математические навыки, разбираться в очень запутанных формулах и закономерностях, а так же объясняют о новых методах решения задач. Ученики быстро усваивают теорию и закрепляют ее на разных задачах всё возрастающей сложности. Знание физики обязательно нужно для поступления в технические ВУЗы и факультеты. Также физика необходима для понимания окружающего мира и саморазвития.', '#C6C6C6')
    ];

    return courses;
  }

  getTeachers() {
    let teachers: Images[];
    teachers = [
      new Images('assets/images/angl1.PNG'),
      new Images('assets/images/angl2.PNG'),
      new Images('assets/images/angl3.PNG'),
      new Images('assets/images/angl4.PNG'),
      new Images('assets/images/angl5.PNG'),
      new Images('assets/images/anglMat.PNG'),
      new Images('assets/images/anglrus.PNG'),
      new Images('assets/images/biolig.jpg'),
      new Images('assets/images/biolNIS.PNG'),
      new Images('assets/images/fizMatAngl.PNG'),
      new Images('assets/images/fizmatbiol.PNG'),
      new Images('assets/images/Mat.PNG'),
      new Images('assets/images/matAnglBio.PNG'),
      new Images('assets/images/matfiz.PNG'),
      new Images('assets/images/matfizz.PNG'),
      new Images('assets/images/math2.PNG'),
      new Images('assets/images/math4.PNG'),
      new Images('assets/images/mathAngl.PNG'),
      new Images('assets/images/mathAnglRus.PNG'),
      new Images('assets/images/mathfiz9.PNG'),
      new Images('assets/images/mathfizistkaz.PNG'),
      new Images('assets/images/mathfizz.PNG'),
      new Images('assets/images/mathh.PNG'),
      new Images('assets/images/matRus.PNG'),
      new Images('assets/images/mattz.PNG'),
      new Images('assets/images/ormastkazbio.PNG'),
      new Images('assets/images/program.PNG')
    ];

    return teachers;
  }
}
