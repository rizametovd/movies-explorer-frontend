import NavTab from '../NavTab/NavTab';
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__container'>
        <h1 className='promo__section-title'>Учебный проект студента факультета Веб-разработки.</h1>
        <div className='promo__navtab-container'>
          <NavTab />
        </div>
      </div>
    </section>
  );
}

export default Promo;
