/* PERSONAL WEBSITE
================================================================== */

console.log('Welcome to my site :)')


// Dark Mode --------------------------------------------------------------------------------------------------------------


  // check for saved 'darkMode' in localStorage
let darkMode = localStorage.getItem('darkMode'); 

const darkModeToggle = document.querySelector('#dark-mode-toggle');

const enableDarkMode = () => {
  // 1. Add the class to the body
  document.body.classList.add('darkmode');
  // 2. Update darkMode in localStorage
  localStorage.setItem('darkMode', 'enabled');
}

const disableDarkMode = () => {
  // 1. Remove the class from the body
  document.body.classList.remove('darkmode');
  // 2. Update darkMode in localStorage 
  localStorage.setItem('darkMode', null);
}
 
// If the user already visited and enabled darkMode
// start things off with it on
if (darkMode === 'enabled') {
  enableDarkMode();
}

// When someone clicks the button
darkModeToggle.addEventListener('click', () => {
  // get their darkMode setting
  darkMode = localStorage.getItem('darkMode'); 
  
  // if it not current enabled, enable it
  if (darkMode !== 'enabled') {
    enableDarkMode();
  // if it has been enabled, turn it off  
  } else {  
    disableDarkMode(); 
  }
});


// Business Card Flip ----------------------------------------------------------------------------------------------------------

if (document.querySelector('#businessCardRotate')) {

  let businessCardRotate = localStorage.getItem('businessCardRotate'); 


  const businessCardRotateBtn = document.querySelector('#businessCardRotate');
  const businessCardRotater = document.querySelector('.card-rotate')


  const businessCardRotated = () => {
    businessCardRotater.classList.toggle('rotate-active')
  }

  businessCardRotateBtn.addEventListener('click', () =>{
    businessCardRotated()
  })

}





// Polaroids ----------------------------------------------------------------------------------------------------------

function clickToChange(triggerClass, targetElement, targetClass, Class) {
  let trigger = document.querySelector(triggerClass)
  let target = document.querySelector(targetElement)

  trigger.addEventListener('click', () =>{
    targetClass = targetClass.replace('.', '')
    if (target.classList.contains(targetClass)) {
      target.classList.remove(targetClass)
      target.classList.add(Class)
    } else {
      target.classList = ''
      target.classList.add(targetClass)
    }
  })
}                                                                                                                                                                                                                                                                                                      

// Project 1 show
// clickToChange('.project-1', '#portfolio-menu', '.vert-menu', 'grid-container')
clickToChange('.P1_SN1_inactive', '#p1s1','.P1_SN1_active','P1_SN1_inactive')
clickToChange('.P1_SN2_inactive', '#p1s2','.P1_SN2_active','P1_SN2_inactive')
clickToChange('.p1s3inactive', '#p1s3','.p1s3active','p1s3inactive')
// clickToChange('.project-1', '#project1', '.project-active-1', 'project-inactive-1')


// Project 2 show
// clickToChange('.project-2', '#portfolio-menu', '.vert-menu', 'grid-container')
// clickToChange('.project-2', '#project2', '.project-active-2', 'project-inactive-2')
clickToChange('.p2s1inactive', '#p2s1','.p2s1active','p2s1inactive')
clickToChange('.p2s2inactive', '#p2s2','.p2s2active','p2s2inactive')
clickToChange('.p2s3inactive', '#p2s3','.p2s3active','p2s3inactive')
clickToChange('.p2s4inactive', '#p2s4','.p2s4active','p2s4inactive')
clickToChange('.p2s5inactive', '#p2s5','.p2s5active','p2s5inactive')


// Project 3 show
// clickToChange('.project-3', '#portfolio-menu', '.vert-menu', 'grid-container')
// clickToChange('.project-3', '#project3', '.project-active-3', 'project-inactive-3')
clickToChange('.p3s1inactive', '#p3s1','.p3s1active','p3s1inactive')
clickToChange('.p3s2inactive', '#p3s2','.p3s2active','p3s2inactive')
clickToChange('.p3s3inactive', '#p3s3','.p3s3active','p3s3inactive')
clickToChange('.p3s4inactive', '#p3s4','.p3s4active','p3s4inactive')
clickToChange('.p3s5inactive', '#p3s5','.p3s5active','p3s5inactive')


// Project 4 show
// clickToChange('.project-4', '#portfolio-menu', '.vert-menu', 'grid-container')
// clickToChange('.project-4', '#project4', '.project-active-4', 'project-inactive-4')





// SHOWCASE

;(function() {

  if (document.querySelector('#portfolio-menu')) {
    let projects = document.querySelectorAll('#portfolio-menu > div')
    let allProjects = document.querySelector('.portfoliopaper')
    let showcases = document.querySelectorAll('.showcase > div')


    allProjects.addEventListener('click', function() {
      let grid = document.querySelector('#portfolio-menu')
      if (grid.classList.contains('vert-menu')) {
        grid.classList.remove('vert-menu')
        grid.classList.add('grid-container')
        for (let i = 0; i < showcases.length; i++) {
          if (showcases[i].className.includes('-active')) {
          showcases[i].className = showcases[i].className.replace('-active', '-inactive')
          }
        }
      }
    })

    for (let i = 0; i < projects.length; i++) {
      
      projects[i].addEventListener('click', function() {
        let parent = this.parentElement
        if (parent.classList.contains('grid-container')) {
          parent.classList.remove('grid-container')
          parent.classList.add('vert-menu')
        }
        let showcase = showcases[i]
        let showcaseClass = showcase.className
        if (showcaseClass.includes('-inactive')) {
          showcase.className = showcaseClass.replace('-inactive', '-active')
        }

        for (let j = 0; j < showcases.length; j++) {
          if (j !== i) {
            if (showcases[j].className.includes('-active')) {
            showcases[j].className = showcases[j].className.replace('-active', '-inactive')
            }
          }
        }
        
      })
    }

  }

})();