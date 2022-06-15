import "../style/information.css";
import { MyProjects } from "./my_projects";

export const Information = () => {
  return (
    <div className="information_block">
      <div>
        <div id="about_me" className="title">
          ABOUT ME
        </div>
        <div className="about_me">
          <div className="message">
            Привіт. Мене звати Олександр, я закінчив навчання в університеті та
            тепер в пошуках стабільної роботи. Вивченням React та Redux займяюся
            вже більше року.
          </div>
          <div className="contacts">
            <ul style={{ listStyleType: "none" }}>
              <li>
                <span className="name_data">Дата народження:</span>{" "}
                <span className="contacts_date"> 15 жовтня 1998р.</span>
              </li>
              <li>
                <span className="name_data">Досвід роботи:</span>{" "}
                <span className="contacts_date">Наявний</span>
              </li>
              <li>
                <span className="name_data">Адреса: </span>{" "}
                <span className="contacts_date">м. Хмельницький, Україна</span>
              </li>
              <li>
                <span className="name_data">Контактні дані: </span>
                <span className="contacts_date">+380686463275</span>
              </li>
              <li>
                <span className="name_data">Email: </span>
                <span className="contacts_date">loborchukolex@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div id="study" className="title">
        STUDY
      </div>
      <div className="information">
        <li>
          вересень 2016 р. вступив в Кам’янець-Подільський національний
          університет імені Івана Огієнка, на фізико- математичний факультет, за
          спеціальністю “Комп’ютерні науки та інформаційні технології”, (денна
          форма навчання).
        </li>
        <li>
          червень 2020 р. закінчив бакалаврат в Кам’янець- Подільському
          національному університет імені Івана Огієнка.
        </li>
        <li>
          вересень 2020 р. розпочав навчання на магістратурі в
          Кам’янець-Подільський національний університет імені Івана Огієнка, на
          фізико-математичний факультет, за спеціальністю “Комп’ютерні науки та
          інформаційні технології”.
        </li>
        <li>
          грудень 2021 р. захистив ступінь магістра та закінчив університет.
        </li>
      </div>
      <div id="professionals_skills" className="title">
        PROFESSIONAL SKILLS
      </div>
      <div className="information">
        <ul>
          <li>знання HTML/CSS/ JAVASCRIPT</li>
          <li>знання REACT/REDUX</li>
          <li>навички роботи з GITHUB</li>
          <li>знання MySQL, phpMyAdmin</li>
          <li>
            знання мов: українська - рідна, російська - вільне володіння,
            англійська - рівень Intermediate.
          </li>
          <li>досвід роботи з REACT-NATIVE</li>
        </ul>
      </div>
      <div id="proffessionals_qualities" className="title">
        PROFESSIONAL QUALITIES
      </div>
      <div className="information">
        <ul>
          <li>Відповідальність</li>
          <li>Уважність</li>
          <li>Стресостійкість</li>
          <li>Комунікабельність</li>
          <li>Старанність</li>
          <li>Дисциплінованість</li>
          <li>Орієнтований на результат</li>
        </ul>
      </div>
      <div id="additional_information" className="title">
        ADDITIONAL INFORMATION
      </div>
      <div className="information">
        <ul>
          <li>Сімейний стан: неодружений.</li>
          <li>Водійське посвідчення: так.</li>
          <li>Шкідливі звички: відсутні</li>
        </ul>
      </div>
      <MyProjects />
    </div>
  );
};
