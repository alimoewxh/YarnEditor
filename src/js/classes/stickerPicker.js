export class StickerPicker {
  constructor(containerElement, onStickerSelect) {
    this.container = containerElement;
    this.onStickerSelect = onStickerSelect;
    this.isVisible = false;
    
    // Image-based sticker categories (files should exist under public/images/*)
    this.stickerCategories = {
      expression: [
        { src: 'public/images/emoji/actnatural.png', code: 'Actnatural' },
        { src: 'public/images/emoji/aggravation.png', code: 'Aggravation' },
        { src: 'public/images/emoji/agreement.png', code: 'Agreement' },
        { src: 'public/images/emoji/airplane.png', code: 'Airplane' },
        { src: 'public/images/emoji/amazed.png', code: 'Amazed' },
        { src: 'public/images/emoji/apologetic.png', code: 'Apologetic' },
        { src: 'public/images/emoji/arm-swingdance.png', code: 'Arm-swingdance' },
        { src: 'public/images/emoji/armcircles.png', code: 'Armcircles' },
        { src: 'public/images/emoji/bashfulness.png', code: 'bashfulness' },
        { src: 'public/images/emoji/behold.png', code: 'behold' },
        { src: 'public/images/emoji/bewilderment.png', code: 'bewilderment' },
        { src: 'public/images/emoji/bodytwists.png', code: 'bodytwists' },
        { src: 'public/images/emoji/coldchill.png', code: 'coldchill' },
        { src: 'public/images/emoji/confetti.png', code: 'confetti' },
        { src: 'public/images/emoji/confident.png', code: 'confident' },
        { src: 'public/images/emoji/curiosity.png', code: 'curiosity' },
        { src: 'public/images/emoji/daydreaming.png', code: 'daydreaming' },
        { src: 'public/images/emoji/delight.png', code: 'delight' },
        { src: 'public/images/emoji/disagreement.png', code: 'disagreement' },
        { src: 'public/images/emoji/distress.png', code: 'distress' },
        { src: 'public/images/emoji/doublewave.png', code: 'doublewave' },
        { src: 'public/images/emoji/dozing.png', code: 'dozing' },
        { src: 'public/images/emoji/eager.png', code: 'eager' },
        { src: 'public/images/emoji/encouraging.png', code: 'encouraging' },
        { src: 'public/images/emoji/excited.png', code: 'excited' },
        { src: 'public/images/emoji/fearful.png', code: 'fearful' },
        { src: 'public/images/emoji/feelinit.png', code: 'feelinit' },
        { src: 'public/images/emoji/flex.png', code: 'flex' },
        { src: 'public/images/emoji/flourish.png', code: 'flourish' },
        { src: 'public/images/emoji/glee.png', code: 'glee' },
        { src: 'public/images/emoji/greetings.png', code: 'greetings' },
        { src: 'public/images/emoji/grooveleft.png', code: 'grooveleft' },
        { src: 'public/images/emoji/grooveright.png', code: 'grooveright' },
        { src: 'public/images/emoji/groovinghop.png', code: 'groovinghop' },
        { src: 'public/images/emoji/happiness.png', code: 'happiness' },
        { src: 'public/images/emoji/haunt.png', code: 'haunt' },
        { src: 'public/images/emoji/heartbreak.png', code: 'heartbreak' },
        { src: 'public/images/emoji/hereyougo.png', code: 'hereyougo' },
        { src: 'public/images/emoji/hula.png', code: 'hula' },
        { src: 'public/images/emoji/inspiration.png', code: 'inspiration' },
        { src: 'public/images/emoji/intense.png', code: 'intense' },
        { src: 'public/images/emoji/islandstomp.png', code: 'islandstomp' },
        { src: 'public/images/emoji/jammin.png', code: 'jammin' },
        { src: 'public/images/emoji/joy.png', code: 'joy' },
        { src: 'public/images/emoji/jump.png', code: 'jump' },
        { src: 'public/images/emoji/laughter.png', code: 'laughter' },
        { src: 'public/images/emoji/letsgo.png', code: 'letsgo' },
        { src: 'public/images/emoji/listeningears.png', code: 'listeningears' },
        { src: 'public/images/emoji/love.png', code: 'love' },
        { src: 'public/images/emoji/mischief.png', code: 'mischief' },
        { src: 'public/images/emoji/mistaken.png', code: 'mistaken' },
        { src: 'public/images/emoji/pleased.png', code: 'pleased' },
        { src: 'public/images/emoji/posturewarm-up.png', code: 'posturewarm-up' },
        { src: 'public/images/emoji/pride.png', code: 'pride' },
        { src: 'public/images/emoji/resignation.png', code: 'resignation' },
        { src: 'public/images/emoji/sadness.png', code: 'sadness' },
        { src: 'public/images/emoji/saycheese.png', code: 'saycheese' },
        { src: 'public/images/emoji/scare.png', code: 'scare' },
        { src: 'public/images/emoji/sheepishness.png', code: 'sheepishness' },
        { src: 'public/images/emoji/shimmy.png', code: 'shimmy' },
        { src: 'public/images/emoji/shocked.png', code: 'shocked' },
        { src: 'public/images/emoji/showmanship.png', code: 'showmanship' },
        { src: 'public/images/emoji/shyness.png', code: 'shyness' },
        { src: 'public/images/emoji/side-to-side.png', code: 'side-to-side' },
        { src: 'public/images/emoji/sidebends.png', code: 'sidebends' },
        { src: 'public/images/emoji/sighing.png', code: 'sighing' },
        { src: 'public/images/emoji/sitdown.png', code: 'sitdown' },
        { src: 'public/images/emoji/sleepy.png', code: 'sleepy' },
        { src: 'public/images/emoji/smirking.png', code: 'smirking' },
        { src: 'public/images/emoji/sneezing.png', code: 'sneezing' },
        { src: 'public/images/emoji/sniffsniff.png', code: 'sniffsniff' },
        { src: 'public/images/emoji/soakitin.png', code: 'soakitin' },
        { src: 'public/images/emoji/sorrow.png', code: 'sorrow' },
        { src: 'public/images/emoji/surprise.png', code: 'surprise' },
        { src: 'public/images/emoji/ta-da.png', code: 'ta-da' },
        { src: 'public/images/emoji/takeapicture.png', code: 'takeapicture' },
        { src: 'public/images/emoji/thought.png', code: 'thought' },
        { src: 'public/images/emoji/turnippatch.png', code: 'turnippatch' },
        { src: 'public/images/emoji/twistydance.png', code: 'twistydance' },
        { src: 'public/images/emoji/upper-body-circles.png', code: 'upper-body-circles' },
        { src: 'public/images/emoji/viva.png', code: 'viva' },
        { src: 'public/images/emoji/wavegoodbye.png', code: 'wavegoodbye' },
        { src: 'public/images/emoji/widearmstretch.png', code: 'widearmstretch' },
        { src: 'public/images/emoji/workit.png', code: 'workit' },
        { src: 'public/images/emoji/workout.png', code: 'workout' },
        { src: 'public/images/emoji/worry.png', code: 'worry' },
        { src: 'public/images/emoji/yoga.png', code: 'yoga' }

      ]
    };

    this.currentCategory = 'expression';
    this.init();
  }
  
  init() {
    this.createHTML();
    this.bindEvents();
  }
  
  createHTML() {
    this.container.innerHTML = `
      <div class="sticker-picker">
        <div class="sticker-picker-header">
          <div class="sticker-categories">
            ${Object.keys(this.stickerCategories).map(category => 
              `<button class="sticker-category-btn ${category === this.currentCategory ? 'active' : ''}" 
                       data-category="${category}">${category}</button>`
            ).join('')}
          </div>
        </div>
        <div class="sticker-picker-body">
          <div class="sticker-grid" id="stickerGrid">
            ${this.renderStickers()}
          </div>
        </div>
      </div>
    `;
  }
  
  renderStickers() {
    const stickers = this.stickerCategories[this.currentCategory] || [];
    return stickers
      .map(sticker => {
        const title = sticker.code ? `${sticker.code}` : '';
        return `
          <button class="sticker-btn" data-sticker-src="${sticker.src}" data-sticker-code="${sticker.code || ''}" title="${title}">
            <img src="${sticker.src}" alt="${sticker.code || ''}" style="max-width: 44px; max-height: 44px;"/>
          </button>
        `;
      })
      .join('');
  }
  
  bindEvents() {
    // Category buttons
    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('sticker-category-btn')) {
        this.switchCategory(e.target.dataset.category);
      } else if (e.target.classList.contains('sticker-btn') || e.target.closest('.sticker-btn')) {
        const btn = e.target.classList.contains('sticker-btn') ? e.target : e.target.closest('.sticker-btn');
        this.selectSticker({ src: btn.dataset.stickerSrc, code: btn.dataset.stickerCode });
      }
    });
    
    // Close picker when clicking outside
    this.outsideClickHandler = (e) => {
      if (!this.container.contains(e.target) && this.isVisible) {
        this.hide();
      }
    };
    
  }
  
  switchCategory(category) {
    this.currentCategory = category;
    
    // Update active category button
    this.container.querySelectorAll('.sticker-category-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === category);
    });
    
    // Update sticker grid
    const stickerGrid = this.container.querySelector('#stickerGrid');
    stickerGrid.innerHTML = this.renderStickers();
  }
  
  selectSticker(sticker) {
    if (this.onStickerSelect) {
      const codeSuffix = sticker.code ? `${sticker.code}` : '';
      this.onStickerSelect(`<expression=${codeSuffix}>`);
    }
    this.hide();
  }
  
  show(category) {
    if (this.container && !this.isVisible) {
      console.log('Showing sticker picker');
      console.log('Container element:', this.container);
      console.log('Container display before:', this.container.style.display);
      if (category && this.stickerCategories[category]) {
        this.currentCategory = category;
        const stickerGrid = this.container.querySelector('#stickerGrid');
        if (stickerGrid) {
          stickerGrid.innerHTML = this.renderStickers();
          // Update active button state
          this.container.querySelectorAll('.sticker-category-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === this.currentCategory);
          });
        } else {
          this.createHTML();
        }
      }

      this.container.style.display = 'block';
      this.isVisible = true;
      
      console.log('Container display after:', this.container.style.display);
      console.log('Container computed display:', window.getComputedStyle(this.container).display);
      
      // Check if the sticker-picker element exists
      const stickerElement = this.container.querySelector('.sticker-picker');
      console.log('Sticker element found:', !!stickerElement);
      if (stickerElement) {
        console.log('Sticker element display:', window.getComputedStyle(stickerElement).display);
      }
      document.addEventListener('click', this.outsideClickHandler);
    } else {
      console.log('Container not found');
    }
  }
  
  hide() {
    console.log('Hiden sticker picker');
    if (this.container && this.isVisible) {
      this.container.style.display = 'none';
      this.isVisible = false;
      document.removeEventListener('click', this.outsideClickHandler);
    }
  }
  
  toggle() {
    if (this.isVisible) {
      this.hide();
    } else {
      this.show();
    }
  }
}