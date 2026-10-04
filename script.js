const projects = [
  {
    title: 'The Flock',
    description: 'A mini comic featuring superheroes with powers and designs based off of real life birds',
    coverImage: 'Works/The Flock/FlockCoverImage.png',
    images: ['Works/project-01-1.svg', 'Works/project-01-2.svg'],
    embedUrl: 'https://heyzine.com/flip-book/f02a5749c5.html',
    embedSize: 'large'
  },
  {
    title: 'Den of Dinos',
    description: "A children's picture book featuring an array of dinosaur facts",
    images: ['Works/Den Of Dinos/DenOfDinosCoverImg.png'],
    embedUrl: 'https://heyzine.com/flip-book/f153658858.html',
    embedSize: 'large'
  },
  {
    title: 'Ponder The Past',
    description: 'A 6-page zine offering facts from the Mesozoic Era',
    subtext: 'A quick colored mockup lets us visualize looking from the ground up to the sky as we go through the time of the Mesozoic Era',
    images: ['Works/PonderThePast/PonderThePast-CoverImg.png'],
    embedUrl: 'https://heyzine.com/flip-book/6558da01ba.html',
    secondEmbedUrl: 'https://heyzine.com/flip-book/af195fbb3a.html'
  },
  {
    title: 'Wacky Wizards',
    description: 'Package design for a fictional Blind Box minifigure brand. Each box includes one of four Wacky Wizards encased in a gold-colored plastic bag, as well as a sticker to the corresponding character they unbox!',
    images: [
      'Works/WackyWizards/Box-ModelHIgh.png',
      'Works/WackyWizards/Box-ModelFinal-Current View.png'
    ]
  },
  {
    title: 'Revamp',
    description: 'Fictional ad campaign for a sustainable clothing company. The campaign includes posters featuring pop-up shop times and locations, mockups of hats, t-shirts, sweatshirts, and multiple Instagram posts.',
    teamCredit: 'Designed by a team consisting of myself, Luna Garcia, and Kevin Lorenc.',
    coverImage: 'Works/Revamp/RevampCoverimg.png',
    images: ['Works/Revamp/RevampCoverimg.png'],
    imageSize: 'compact',
    imageSections: [
      {
        title: 'Posters',
        images: [
          { src: 'Works/Revamp/Revamp_Plains-01-web.jpg', alt: 'Revamp Plains pop-up shop poster' },
          { src: 'Works/Revamp/Revamp_Desert_Poster_BG-01-web.jpg', alt: 'Revamp Desert pop-up shop poster' },
          { src: 'Works/Revamp/Revamp_Ocean_Poster_BG-01-web.jpg', alt: 'Revamp Ocean pop-up shop poster' }
        ]
      },
      {
        title: 'Hats',
        images: [
          { src: 'Works/Revamp/Cactus-HatNoShadow.png', alt: 'Revamp Cactus hat mockup' },
          { src: 'Works/Revamp/Sunflower-HatNoShadow.png', alt: 'Revamp Sunflower hat mockup' },
          { src: 'Works/Revamp/Waves-Hat-NoShadow.png', alt: 'Revamp Waves hat mockup' }
        ]
      },
      {
        title: 'Shirts',
        images: [
          { src: 'Works/Revamp/Cactus-Shirt-Green-NoBG.png', alt: 'Revamp Cactus green shirt mockup' },
          { src: 'Works/Revamp/Sunflower-Shirt-Brown-NoBG.png', alt: 'Revamp Sunflower brown shirt mockup' },
          { src: 'Works/Revamp/Waves-Shirt-Blue-NoBG.png', alt: 'Revamp Waves blue shirt mockup' }
        ]
      },
      {
        title: 'Sweatshirts',
        images: [
          { src: 'Works/Revamp/Cactus-Sweater-Mouckup-web.png', alt: 'Revamp Cactus sweatshirt mockup' },
          { src: 'Works/Revamp/Sunflower-Sweater-Mouckup-web.png', alt: 'Revamp Sunflower sweatshirt mockup' },
          { src: 'Works/Revamp/Waaves-Sweater-Mouckup-web.png', alt: 'Revamp Waves sweatshirt mockup' }
        ]
      },
      {
        title: 'Instagram Posts',
        carousel: true,
        carouselLabel: 'Cactus Instagram Posts',
        images: [
          { src: 'Works/Revamp/InstaPostCactus/Cactus Slides-2.png', alt: 'Revamp cactus Instagram post 2' },
          { src: 'Works/Revamp/InstaPostCactus/Cactus Slides-3.png', alt: 'Revamp cactus Instagram post 3' },
          { src: 'Works/Revamp/InstaPostCactus/Cactus Slides-4.png', alt: 'Revamp cactus Instagram post 4' },
          { src: 'Works/Revamp/InstaPostCactus/Cactus Slides-1.png', alt: 'Revamp cactus Instagram post 1' }
        ]
      },
      {
        title: 'Instagram Posts',
        carousel: true,
        carouselLabel: 'Sunflower Instagram Posts',
        images: [
          { src: 'Works/Revamp/InstaPostSunflower/Sunflower Slides-2.png', alt: 'Revamp sunflower Instagram post 2' },
          { src: 'Works/Revamp/InstaPostSunflower/Sunflower Slides-3.png', alt: 'Revamp sunflower Instagram post 3' },
          { src: 'Works/Revamp/InstaPostSunflower/Sunflower Slides-4.png', alt: 'Revamp sunflower Instagram post 4' },
          { src: 'Works/Revamp/InstaPostSunflower/Sunflower Slides-1.png', alt: 'Revamp sunflower Instagram post 1' }
        ]
      },
      {
        title: 'Instagram Posts',
        carousel: true,
        carouselLabel: 'Waves Instagram Posts',
        images: [
          { src: 'Works/Revamp/InstaPostWaves/Untitled-2.png', alt: 'Revamp waves Instagram post 2' },
          { src: 'Works/Revamp/InstaPostWaves/Untitled-3.png', alt: 'Revamp waves Instagram post 3' },
          { src: 'Works/Revamp/InstaPostWaves/Untitled-4.png', alt: 'Revamp waves Instagram post 4' },
          { src: 'Works/Revamp/InstaPostWaves/Untitled-1.png', alt: 'Revamp waves Instagram post 1' }
        ]
      }
    ]
  },
  {
    title: 'TCNJ Outdoors Club Merch Design',
    description: '',
    pageSubtext: "Illustrated and designed t-shirt and sweatshirt mockups for The College of New Jersey's Outdoors Club. They were then sold as fundraising for the club.",
    coverImage: 'Works/OutdoorsClub/tcnjoutdoors_green.png',
    images: [
      'Works/OutdoorsClub/IMG_6043.png',
      'Works/OutdoorsClub/IMG_6044.png'
    ]
  },
  {
    title: 'Illustrations',
    description: '',
    coverImage: 'Works/Illustrations/BowserJunior_Wallpeper.png',
    imageLayout: 'two-column',
    images: [
      'Works/Illustrations/BowserJunior_Wallpeper.png',
      'Works/Illustrations/DragoniteWallpaper.png',
      'Works/Illustrations/day_12.png',
      'Works/Illustrations/MountainWizard.png'
    ]
  }
];

const navToggle = document.getElementById('navToggle');
const siteNav = document.getElementById('siteNav');
const workSlots = Array.from(document.querySelectorAll('.work-slot[data-project]'));
const heroLinks = Array.from(document.querySelectorAll('.nav-labels a'));
const isAboutPage = window.location.pathname.toLowerCase().endsWith('/about.html') || window.location.pathname.toLowerCase().endsWith('about.html');

function setupNav() {
  if (!navToggle || !siteNav) return;

  navToggle.addEventListener('click', () => {
    siteNav.classList.toggle('active');
  });

  const navLinks = siteNav.querySelectorAll('a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('active');
    });
  });
}

function openProject(projectIndex) {
  window.location.href = `project.html?project=${projectIndex}`;
}

if (workSlots.length) {
  workSlots.forEach((slot) => {
    slot.addEventListener('click', () => {
      openProject(Number(slot.dataset.project));
    });
  });
}

if (heroLinks.length) {
  heroLinks.forEach((link) => {
    const isWorksLink = link.classList.contains('works-label');
    const isAboutLink = link.classList.contains('about-label');

    if (isAboutPage && isAboutLink) {
      link.classList.add('is-active');
    } else if (!isAboutPage && isWorksLink) {
      link.classList.add('is-active');
    }

    link.addEventListener('click', () => {
      heroLinks.forEach((item) => item.classList.remove('is-active'));
      link.classList.add('is-active');
    });
  });
}

setupNav();

const projectPage = document.querySelector('.project-page');
if (projectPage) {
  const params = new URLSearchParams(window.location.search);
  const projectIndex = Number(params.get('project')) || 0;
  const project = projects[projectIndex] || projects[0];
  const projectImageList = document.getElementById('projectImageList');
  const projectTitle = document.getElementById('projectTitle');
  const projectDescription = document.getElementById('projectDescription');
  const projectSubtext = document.getElementById('projectSubtext');
  const projectTeamCredit = document.getElementById('projectTeamCredit');
  const projectRecommendations = document.getElementById('projectRecommendations');
  const recommendationGrid = document.getElementById('recommendationGrid');
  const projectLightbox = document.getElementById('projectLightbox');
  const projectLightboxImage = document.getElementById('projectLightboxImage');
  const projectLightboxClose = document.getElementById('projectLightboxClose');
  const currentProjectIndex = projects.indexOf(project);

  if (projectTitle) {
    projectTitle.textContent = project.title;
  }

  if (projectDescription) {
    projectDescription.textContent = project.description;
  }

  if (projectSubtext && project.pageSubtext) {
    projectSubtext.textContent = project.pageSubtext;
    projectSubtext.hidden = false;
  }

  if (projectTeamCredit && project.teamCredit) {
    projectTeamCredit.textContent = project.teamCredit;
    projectTeamCredit.hidden = false;
  }

  function openProjectImage(image) {
    if (!projectLightbox || !projectLightboxImage) return;

    projectLightboxImage.src = image.currentSrc || image.src;
    projectLightboxImage.alt = image.alt;
    projectLightbox.showModal();
  }

  projectImageList?.addEventListener('click', (event) => {
    const image = event.target.closest('.project-image-card img');
    if (image) openProjectImage(image);
  });

  projectImageList?.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;

    const image = event.target.closest('.project-image-card img');
    if (!image) return;

    event.preventDefault();
    openProjectImage(image);
  });

  projectLightboxClose?.addEventListener('click', () => projectLightbox.close());
  projectLightbox?.addEventListener('click', (event) => {
    if (event.target === projectLightbox) projectLightbox.close();
  });
  projectLightbox?.addEventListener('close', () => {
    projectLightboxImage?.removeAttribute('src');
  });

  function renderRecommendations() {
    if (!projectRecommendations || !recommendationGrid) return;

    const otherProjects = projects
      .map((item, index) => ({ item, index }))
      .filter(({ index }) => index !== currentProjectIndex);

    recommendationGrid.replaceChildren();
    projectRecommendations.hidden = otherProjects.length === 0;

    otherProjects.forEach(({ item, index }) => {
      const card = document.createElement('article');
      card.className = 'recommendation-card';

      const link = document.createElement('a');
      link.className = 'recommendation-link';
      link.href = `project.html?project=${index}`;
      link.setAttribute('aria-label', `View ${item.title} project`);

      const preview = document.createElement('div');
      preview.className = 'recommendation-preview';

      const coverImage = item.coverImage || item.images[0];
      if (coverImage) {
        const image = document.createElement('img');
        image.src = coverImage;
        image.alt = `${item.title} cover`;
        image.loading = 'lazy';
        preview.appendChild(image);
      } else {
        preview.classList.add('recommendation-preview-placeholder');
        preview.textContent = item.title;
      }

      const title = document.createElement('h3');
      title.textContent = item.title;

      link.append(preview, title);
      card.appendChild(link);
      recommendationGrid.appendChild(card);
    });
  }

  function renderProjectImages() {
    if (!projectImageList) return;

    projectImageList.innerHTML = '';
    projectImageList.classList.toggle('project-image-list-two-column', project.imageLayout === 'two-column');

    if (project.embedUrl) {
      const embedFigure = document.createElement('figure');
      embedFigure.className = 'project-image-card project-embed-card';
      if (project.embedSize === 'large') {
        embedFigure.classList.add('project-embed-large');
      }

      const embed = document.createElement('iframe');
      embed.allowFullscreen = true;
      embed.allow = 'autoplay; fullscreen; clipboard-write';
      embed.scrolling = 'no';
      embed.style.width = '100%';
      if (project.embedSize !== 'large') {
        embed.style.height = '500px';
      }
      embed.style.border = '1px solid lightgray';
      embed.src = project.embedUrl;

      embedFigure.appendChild(embed);
      projectImageList.appendChild(embedFigure);

      if (project.subtext) {
        const subtext = document.createElement('p');
        subtext.className = 'project-subtext';
        subtext.textContent = project.subtext;
        projectImageList.appendChild(subtext);
      }

      if (project.secondEmbedUrl) {
        const secondEmbedFigure = document.createElement('figure');
        secondEmbedFigure.className = 'project-image-card project-embed-card';

        const secondEmbed = document.createElement('iframe');
        secondEmbed.allowFullscreen = true;
        secondEmbed.allow = 'autoplay; fullscreen; clipboard-write';
        secondEmbed.scrolling = 'no';
        secondEmbed.style.width = '100%';
        secondEmbed.style.height = '500px';
        secondEmbed.style.border = '1px solid lightgray';
        secondEmbed.src = project.secondEmbedUrl;

        secondEmbedFigure.appendChild(secondEmbed);
        projectImageList.appendChild(secondEmbedFigure);
      }

      return;
    }

    project.images.forEach((image, index) => {
      const imageFigure = document.createElement('figure');
      imageFigure.className = 'project-image-card';
      if (project.imageSize === 'compact') {
        imageFigure.classList.add('project-image-card-compact');
      }

      const imageElement = document.createElement('img');
      imageElement.src = image;
      imageElement.alt = `${project.title} preview ${index + 1}`;
      imageElement.tabIndex = 0;
      imageElement.setAttribute('role', 'button');
      imageElement.setAttribute('aria-label', `Enlarge ${imageElement.alt}`);

      imageFigure.appendChild(imageElement);
      projectImageList.appendChild(imageFigure);
    });

    let previousSectionTitle = null;
    let sectionElement;

    project.imageSections?.forEach((section) => {
      const isNewSection = section.title !== previousSectionTitle;

      if (isNewSection) {
        sectionElement = document.createElement('section');
        sectionElement.className = 'project-image-section';
        if (section.title === 'Hats') {
          sectionElement.classList.add('project-image-section-hats');
        }

        const heading = document.createElement('h2');
        heading.textContent = section.title;
        sectionElement.appendChild(heading);
      }

      const isAlwaysCarousel = section.carousel === true;
      sectionElement.classList.toggle('project-image-section-always-carousel', isAlwaysCarousel);

      const carousel = document.createElement('div');
      carousel.className = 'poster-carousel';
      carousel.setAttribute('role', 'group');
      carousel.setAttribute('aria-roledescription', 'carousel');
      carousel.setAttribute('aria-label', section.carouselLabel || section.title);

      const carouselColumn = document.createElement('div');
      carouselColumn.className = 'instagram-carousel-column';

      const grid = document.createElement('div');
      grid.className = 'project-poster-grid';
      const slides = [];

      section.images.forEach(({ src, alt }) => {
        const figure = document.createElement('figure');
        figure.className = 'project-image-card project-poster-card poster-carousel-slide';

        const image = document.createElement('img');
        image.src = src;
        image.alt = alt;
        image.loading = 'lazy';
        image.decoding = 'async';
        image.tabIndex = 0;
        image.setAttribute('role', 'button');
        image.setAttribute('aria-label', `Enlarge ${alt}`);

        figure.appendChild(image);
        grid.appendChild(figure);
        slides.push(figure);
      });

      carousel.appendChild(grid);
      carouselColumn.appendChild(carousel);

      if (slides.length > 1) {
        const controls = document.createElement('div');
        controls.className = 'poster-carousel-controls';

        const previousButton = document.createElement('button');
        previousButton.className = 'poster-carousel-arrow';
        previousButton.type = 'button';
        previousButton.setAttribute('aria-label', isAlwaysCarousel ? 'Previous Instagram post' : 'Previous poster');
        previousButton.textContent = '\u2190';

        const status = document.createElement('span');
        status.className = 'poster-carousel-status';
        status.setAttribute('aria-live', 'polite');

        const nextButton = document.createElement('button');
        nextButton.className = 'poster-carousel-arrow';
        nextButton.type = 'button';
        nextButton.setAttribute('aria-label', isAlwaysCarousel ? 'Next Instagram post' : 'Next poster');
        nextButton.textContent = '\u2192';

        let activeSlide = 0;
        let touchStartX = null;
        let isTransitioning = false;

        function updateCarouselStatus() {
          const isCarouselViewport = isAlwaysCarousel || window.matchMedia('(max-width: 720px)').matches;
          status.textContent = `${activeSlide + 1} / ${slides.length}`;
          slides.forEach((slide, index) => {
            slide.classList.toggle('is-active', index === activeSlide);
            const isHidden = isCarouselViewport && index !== activeSlide;
            slide.setAttribute('aria-hidden', String(isHidden));
            slide.querySelector('img').tabIndex = isHidden ? -1 : 0;
          });
        }

        function moveCarousel(direction) {
          if ((!isAlwaysCarousel && !window.matchMedia('(max-width: 720px)').matches) || isTransitioning) return;

          const outgoingSlide = slides[activeSlide];
          const nextIndex = (activeSlide + direction + slides.length) % slides.length;
          const incomingSlide = slides[nextIndex];
          activeSlide = nextIndex;
          updateCarouselStatus();

          if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

          const movementClass = direction > 0 ? 'move-next' : 'move-previous';
          isTransitioning = true;
          outgoingSlide.classList.add('is-leaving', movementClass);
          incomingSlide.classList.add('is-entering', movementClass);
          incomingSlide.style.position = 'absolute';
          incomingSlide.style.inset = '0';
          incomingSlide.style.width = '100%';
          incomingSlide.style.height = '100%';

          incomingSlide.addEventListener('animationend', () => {
            outgoingSlide.classList.remove('is-leaving', movementClass);
            incomingSlide.classList.remove('is-entering', movementClass);
            incomingSlide.style.removeProperty('position');
            incomingSlide.style.removeProperty('inset');
            incomingSlide.style.removeProperty('width');
            incomingSlide.style.removeProperty('height');
            isTransitioning = false;
          }, { once: true });
        }

        previousButton.addEventListener('click', () => moveCarousel(-1));
        nextButton.addEventListener('click', () => moveCarousel(1));
        carousel.addEventListener('touchstart', (event) => {
          touchStartX = event.changedTouches[0].clientX;
        }, { passive: true });
        carousel.addEventListener('touchend', (event) => {
          if (touchStartX === null) return;

          const swipeDistance = event.changedTouches[0].clientX - touchStartX;
          touchStartX = null;
          if (Math.abs(swipeDistance) >= 40) {
            moveCarousel(swipeDistance < 0 ? 1 : -1);
          }
        }, { passive: true });
        window.addEventListener('resize', updateCarouselStatus);

        controls.append(previousButton, status, nextButton);
        carouselColumn.appendChild(controls);
        updateCarouselStatus();
      }

      sectionElement.appendChild(carouselColumn);
      if (isNewSection) {
        projectImageList.appendChild(sectionElement);
      }
      previousSectionTitle = section.title;
    });
  }

  renderProjectImages();
  renderRecommendations();
}

