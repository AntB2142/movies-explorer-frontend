import './AboutProject.css';


function AboutProject() {
    return (
    <div className='about-project' id='about'>
       <div className='about__title-block'>
        <h2 className='about__title'>О проекте</h2>
      </div>
        <div className='project'>
            <div className='project-card'>
                <h3 className='project-card__title'>Дипломный проект включал 5 этапов</h3>
                <p className='project-card__description'>Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
            </div>
            <div className='project-card'>
                <h3 className='project-card__title'>На выполнение диплома ушло 5 недель</h3>
                <p className='project-card__description'>У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
            </div>
        </div>
        <div className='project-duration'>
            <div className='project-duration__container_backend'>
                <p className='project-duration__weeks'>1 неделя</p>
                <p className='project-duration__title'>Back-end</p>
            </div>
            <div className='project-duration__container_frontend'>
                <p className='project-duration__weeks project-duration__weeks_grey'>4 недели</p>
                <p className='project-duration__title'>Front-end</p>
            </div>
        </div>
    </div>
  );
}

export default AboutProject;