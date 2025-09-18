export class PlayerPicker {
  constructor(containerElement, onPlayerSelect) {
    this.container = containerElement;
    this.onPlayerSelect = onPlayerSelect;
    this.isVisible = false;
    
    // Image-based sticker categories (files should exist under public/images/*)
    this.players =  [
        { src: 'public/images/players/100px-Isabelle_aF.png', code: '西施惠' },
        { src: 'public/images/players/100px-Tom_Nook_NL.png', code: '狸克' }
      ];

    this.init();
  }
  
  init() {
    this.createHTML();
    this.bindEvents();
  }
  
  createHTML() {
    this.container.innerHTML = `
      <div class="sticker-picker">
        <div class="sticker-picker-body">
          <div class="player-grid" id="playerGrid">
            ${this.renderPlayers()}
          </div>
        </div>
      </div>
    `;
  }
  
  renderPlayers() {
    const stickers = this.players;
    return stickers
      .map(sticker => {
        const title = sticker.code ? `${sticker.code}` : '';
        return `
          <button class="player-btn" data-sticker-src="${sticker.src}" data-sticker-code="${sticker.code || ''}" title="${title}">
            <img src="${sticker.src}" alt="${sticker.code || ''}" style="max-width: 80px; max-height: 100px;"/>
          </button>
        `;
      })
      .join('');
  }
  
  bindEvents() {
    // Category buttons
    this.container.addEventListener('click', (e) => {
      if (e.target.classList.contains('player-btn') || e.target.closest('.player-btn')) {
        const btn = e.target.classList.contains('player-btn') ? e.target : e.target.closest('.player-btn');
        this.selectPlayer({ src: btn.dataset.stickerSrc, code: btn.dataset.stickerCode });
      }
    });
    
    // Close picker when clicking outside
    this.outsideClickHandler = (e) => {
      if (!this.container.contains(e.target) && this.isVisible) {
        this.hide();
      }
    };
    
  }
  
  selectPlayer(player) {
    if (this.onPlayerSelect) {
      const codeSuffix = player.code ? `${player.code}: ` : '';
      this.onPlayerSelect(codeSuffix);
    }
    this.hide();
  }
  
  show() {
    if (this.container && !this.isVisible) {
      if (this.players) {
        const stickerGrid = this.container.querySelector('#playerGrid');
        if (stickerGrid) {
          stickerGrid.innerHTML = this.renderPlayers();
        } else {
          this.createHTML();
        }
      }
      this.container.style.display = 'block';
      this.isVisible = true;
      document.addEventListener('click', this.outsideClickHandler);
    } else {
      console.log('Container not found');
    }
  }
  
  hide() {
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