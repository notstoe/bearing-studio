const contentDiv = document.querySelector('.containerContent');

const NavBarHomeButton = document.querySelector('#home');
NavBarHomeButton.addEventListener('click', createHomeContent);

const NavBarProjectsButton = document.querySelector('#projects');
NavBarProjectsButton.addEventListener('click', createProjectsContent);

const NavBarContactButton = document.querySelector('#contact');
NavBarContactButton.addEventListener('click', createContactContent);

const NavBarAboutButton = document.querySelector('#about');
NavBarAboutButton.addEventListener('click', createAboutContent);

function createHomeContent() {

    NavBarProjectsButton.removeAttribute('style');
    NavBarContactButton.removeAttribute('style');
    NavBarAboutButton.removeAttribute('style');

    NavBarHomeButton.style.backgroundColor = "rgb(38, 40, 44)";

    if (contentDiv.firstChild) {   contentDiv.removeChild(contentDiv.firstChild);  }    //removes previous content
    
    const homeContent = document.createElement('div');
    homeContent.textContent = 'HOME';
    homeContent.classList.add('containerContent');
    homeContent.setAttribute('id', 'homeContentAdded');
    contentDiv.appendChild(homeContent);
}

function createProjectsContent() {

    NavBarHomeButton.removeAttribute('style');
    NavBarContactButton.removeAttribute('style');
    NavBarAboutButton.removeAttribute('style');

    NavBarProjectsButton.style.backgroundColor = "rgb(38, 40, 44)";

    if (contentDiv.firstChild) {   contentDiv.removeChild(contentDiv.firstChild);  } 

    const projectsContent = document.createElement('div');
    projectsContent.textContent = 'PROJECTS';
    projectsContent.classList.add('containerContent');
    projectsContent.setAttribute('id', 'projectsContentAdded');
    contentDiv.appendChild(projectsContent);
}

function createContactContent() {

    NavBarProjectsButton.removeAttribute('style');
    NavBarHomeButton.removeAttribute('style');
    NavBarAboutButton.removeAttribute('style');

    NavBarContactButton.style.backgroundColor = "rgb(38, 40, 44)";

    if (contentDiv.firstChild) {   contentDiv.removeChild(contentDiv.firstChild);  }    //removes previous content
    
    const contactContent = document.createElement('div');
    contactContent.textContent = 'CONTACT';
    contactContent.classList.add('containerContent');
    contactContent.setAttribute('id', 'contactContentAdded');
    contentDiv.appendChild(contactContent);
}

function createAboutContent() {

    NavBarProjectsButton.removeAttribute('style');
    NavBarHomeButton.removeAttribute('style');
    NavBarContactButton.removeAttribute('style');

    NavBarAboutButton.style.backgroundColor = "rgb(38, 40, 44)";

    if (contentDiv.firstChild) {   contentDiv.removeChild(contentDiv.firstChild);  }    //removes previous content
    
    const aboutContent = document.createElement('div');
    aboutContent.textContent = 'ABOUT';
    aboutContent.classList.add('containerContent');
    aboutContent.setAttribute('id', 'aboutContentAdded');
    contentDiv.appendChild(aboutContent);
}