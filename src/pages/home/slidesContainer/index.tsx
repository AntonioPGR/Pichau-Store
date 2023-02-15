// DATA
import slidesJson from 'data/slides.json';

// STYLE
import styles from './slides.module.scss';

// EXTERNAL
import { BsArrowRightCircleFill as RightArrow, BsArrowLeftCircleFill as LeftArrow  } from 'react-icons/bs';
import { useState } from 'react';
import classNames from 'classnames';

export function SlidesContainer(){

  // index do slide atual
  const [currentIndex, setIndex] = useState(0);

  const nextSlide = () => {
    let newSlide = currentIndex + 1;
    if( newSlide >= slidesJson.length){
      newSlide = 0;
    }
    setIndex(newSlide);
  };

  const previousSlide = () => {
    let newSlide = currentIndex - 1;
    if(newSlide < 0){
      newSlide = slidesJson.length - 1;
    }
    setIndex(newSlide);
  };

  const isBeforeSlide = (index:number) => {
    if(
      index + 1 === currentIndex ||
      index === (slidesJson.length - 1) && currentIndex === 0
    ){
      return true;
    }
    return false;
  };

  const isAfterSlide = (index:number) => {
    if(
      index - 1 === currentIndex ||
      currentIndex === (slidesJson.length - 1) && index === 0
    ){
      return true;
    }
    return false;
  };

  if(!Array.isArray(slidesJson) || slidesJson.length == 0){
    return null;
  }

  return(
    <div className={styles.slideShow}>
      <div className={styles.slidesContainer}>
        {
          slidesJson.map((value, index)=>{
            return (
              <div 
                className={
                  classNames({
                    [styles.slide]:true,
                    [styles.active]: currentIndex === index,
                    [styles.slideBefore]: isBeforeSlide(index),
                    [styles.slideAfter]: isAfterSlide(index) 
                  })
                }
                key={index}
              >
                {
                  index === currentIndex && (<img className={styles.image} alt={value.alt} src={value.src} />)
                }
              </div>
            );
          })
        }
      </div>
      <div className={styles.arrowsContainer}>
        <span className={styles.leftArrow}>
          <LeftArrow onClick={previousSlide} />
        </span>
        <span className={styles.rightArrow}>
          <RightArrow onClick={nextSlide}/>
        </span>
      </div>
    </div>
  );
}