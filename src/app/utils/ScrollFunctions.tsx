import { scroller, animateScroll } from "react-scroll";

export const scrollToSkills = () => {
    scroller.scrollTo('Skills', {
        duration: 1000,
        delay: 100,
        smooth: true, 
        offset: -200 
      });
      
}

export const scrollToProjects = () => {
    scroller.scrollTo('Projects', {
        duration: 1000,
        delay: 100,
        smooth: true, 
        offset: -200 
      });
}

export const scrollToContactMe = () => {
    scroller.scrollTo('ContacMe', {
        duration: 1000,
        delay: 100,
        smooth: true, 
      });
      
}


const options = {
    duration: 1000,
    smooth: true,
  };

export const ScrollToTopFunction = () => {
    animateScroll.scrollToTop(options);
}
