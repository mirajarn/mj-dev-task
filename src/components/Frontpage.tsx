import '../css/styles.css';
import Heading from './Heading';
import { FRONT_PAGE_HEADINGS, LABELS } from '../variables/variables';

/* Summary: The Frontpage component displays an overview of the project, including  technologies used, project structure, achievements, and next steps. It organizes the content into sections with unordered lists, each with relevant information about the project’s tools, goals, and future plans. */

const Frontpage = () => {

  return (
    <>
      <Heading className='heading frontpage-heading' title={LABELS.FRONT_PAGE}></Heading>
      <div className="info-grid">
        <div className="info-grid-item">
          <Heading className="heading frontpage-subheading" title={FRONT_PAGE_HEADINGS.TOOLS_LANGUAGES} />
          <ul className="none-list-type">
            <li>🛠️ <b>TypeScript</b> Ensured type safety and maintainability</li>
            <li>🏗️ <b>HTML</b> Structured the web pages</li>
            <li>🎨 <b>CSS</b> Styled and laid out the web pages</li>
            <li>⚡ <b>Vite</b> Set up the development environment</li>
            <li>🌍 <b>GitHub Pages</b> Hosted the project</li>
            <li>⚛️ <b>React</b> Built the user interface</li>
            <li>🔗 <b>React Router</b> Routed between different views</li>
            <li>📡 <b>Axios</b> Made API requests</li>
            <li>⚙️ <b>Bootstrap</b> Designed and customized the layout</li>
            <li>🧩 <b>Ant Design (antd)</b> Used for its rich set of high-quality components and design resources</li>
          </ul>
        </div>

        <div className="info-grid-item">
          <Heading className='heading frontpage-subheading' title={FRONT_PAGE_HEADINGS.PROJECT_STRUCTURE}></Heading>
          <ul className='none-list-type'>
            <li>🎯 <b>Goal of this project</b> Introduce an informative and visually appealing React application that displays user data</li>
            <li>📥 <b>Fetch User Data</b> The application fetches user data from JSONPlaceholder's `/users` endpoint</li>
            <li>🔄 <b>Sort User Data</b> The user data is rendered in ascending alphabetical order by first name</li>
            <li>🔍 <b>Filter by Company</b> An optional feature that allows users to filter the displayed data by their company name</li>
          </ul>
        </div>

        <div className="info-grid-item">
          <Heading className='heading frontpage-subheading' title={FRONT_PAGE_HEADINGS.WHAT_NEXT}></Heading>
          <ul className='none-list-type'>
            <li>✅ <b>Project Achievements:</b> The project successfully met its objectives. A visually appealing design was achieved through a light color scheme, ample white space, and an intuitive layout that enhances accessibility. Key information, such as users' full names and their companies, is prominently displayed, ensuring clarity without clutter.</li>

            <li>🔄 <b>Next Steps:</b> The next phase involves gathering user feedback to assess usability and effectiveness. Based on this input, potential future enhancements can be discussed to better align with project needs.</li>

            <li>📱 <b>Future Improvements:</b> Enhancing mobile responsiveness will be a key focus, ensuring a seamless experience across various devices. Additionally, accessibility features such as screen reader support and voice narration could be implemented to improve usability for a wider audience.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Frontpage;