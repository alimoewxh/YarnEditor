export class StickerPicker {
  constructor(containerElement, onStickerSelect) {
    this.container = containerElement;
    this.onStickerSelect = onStickerSelect;
    this.isVisible = false;
    
    // Image-based sticker categories (files should exist under public/images/*)
    this.stickerCategories = {
      expression: [
        { src: 'public/images/emoji/actnatural.png', code: 'Actnatural', desc:"优雅姿势" },
        { src: 'public/images/emoji/aggravation.png', code: 'Aggravation', desc:"生气" },
        { src: 'public/images/emoji/agreement.png', code: 'Agreement', desc:"点头" },
        { src: 'public/images/emoji/airplane.png', code: 'Airplane', desc:"飞机翼舞动" },
        { src: 'public/images/emoji/amazed.png', code: 'Amazed', desc:"惊!" },
        { src: 'public/images/emoji/apologetic.png', code: 'Apologetic', desc:"鞠躬" },
        { src: 'public/images/emoji/arm-swingdance.png', code: 'Arm-swingdance', desc:"转动手臂" },
        { src: 'public/images/emoji/armcircles.png', code: 'Armcircles' , desc:"摆手舞动" },
        { src: 'public/images/emoji/bashfulness.png', code: 'bashfulness' , desc:"害羞" },
        { src: 'public/images/emoji/behold.png', code: 'behold' , desc:"在这里" },
        { src: 'public/images/emoji/bewilderment.png', code: 'bewilderment' , desc:"嗯?" },
        { src: 'public/images/emoji/bodytwists.png', code: 'bodytwists' , desc:"转动身体" },
        { src: 'public/images/emoji/coldchill.png', code: 'coldchill' , desc:"咻~" },
        { src: 'public/images/emoji/confetti.png', code: 'confetti' , desc:"撒纸片" },
        { src: 'public/images/emoji/confident.png', code: 'confident' , desc:"交给我" },
        { src: 'public/images/emoji/curiosity.png', code: 'curiosity' , desc:"什么?" },
        { src: 'public/images/emoji/daydreaming.png', code: 'daydreaming' , desc:"想象中" },
        { src: 'public/images/emoji/delight.png', code: 'delight' , desc:"拍手" },
        { src: 'public/images/emoji/disagreement.png', code: 'disagreement' , desc:"不行不行" },
        { src: 'public/images/emoji/distress.png', code: 'distress' , desc:"紧张" },
        { src: 'public/images/emoji/doublewave.png', code: 'doublewave' , desc:"挥手再见" },
        { src: 'public/images/emoji/dozing.png', code: 'dozing' , desc:"睡着了" },
        { src: 'public/images/emoji/eager.png', code: 'eager' , desc:"我会加油的" },
        { src: 'public/images/emoji/encouraging.png', code: 'encouraging' , desc:"加油~!" },
        { src: 'public/images/emoji/excited.png', code: 'excited' , desc:"期待" },
        { src: 'public/images/emoji/fearful.png', code: 'fearful' , desc:"瑟瑟发抖" },
        { src: 'public/images/emoji/feelinit.png', code: 'feelinit' , desc:"跟着节奏" },
        { src: 'public/images/emoji/flex.png', code: 'flex' , desc:"健美姿势" },
        { src: 'public/images/emoji/flourish.png', code: 'flourish' , desc:"舞动" },
        { src: 'public/images/emoji/glee.png', code: 'glee' , desc:"兴高采烈" },
        { src: 'public/images/emoji/greetings.png', code: 'greetings' , desc:"你好!" },
        { src: 'public/images/emoji/grooveleft.png', code: 'grooveleft' , desc:"向左舞动" },
        { src: 'public/images/emoji/grooveright.png', code: 'grooveright' , desc:"向右舞动" },
        { src: 'public/images/emoji/groovinghop.png', code: 'groovinghop' , desc:"上下跳动" },
        { src: 'public/images/emoji/happiness.png', code: 'happiness' , desc:"笑眯眯" },
        { src: 'public/images/emoji/haunt.png', code: 'haunt' , desc:"惊吓" },
        { src: 'public/images/emoji/heartbreak.png', code: 'heartbreak' , desc:"心碎" },
        { src: 'public/images/emoji/hereyougo.png', code: 'hereyougo' , desc:"请" },
        { src: 'public/images/emoji/hula.png', code: 'hula' , desc:"草裙舞" },
        { src: 'public/images/emoji/inspiration.png', code: 'inspiration' , desc:"灵光一闪" },
        { src: 'public/images/emoji/intense.png', code: 'intense' , desc:"瞪" },
        { src: 'public/images/emoji/islandstomp.png', code: 'islandstomp' , desc:"踏脚舞动" },
        { src: 'public/images/emoji/jammin.png', code: 'jammin' , desc:"听音乐摇摆" },
        { src: 'public/images/emoji/joy.png', code: 'joy' , desc:"开心" },
        { src: 'public/images/emoji/jump.png', code: 'jump' , desc:"双脚跳" },
        { src: 'public/images/emoji/laughter.png', code: 'laughter' , desc:"笑哈哈" },
        { src: 'public/images/emoji/letsgo.png', code: 'letsgo' , desc:"炒热气氛" },
        { src: 'public/images/emoji/listeningears.png', code: 'listeningears' , desc:"聆听" },
        { src: 'public/images/emoji/love.png', code: 'love' , desc:"喜欢" },
        { src: 'public/images/emoji/mischief.png', code: 'mischief' , desc:"奸笑" },
        { src: 'public/images/emoji/mistaken.png', code: 'mistaken' , desc:"糟糕!" },
        { src: 'public/images/emoji/pleased.png', code: 'pleased' , desc:"对吧!" },
        { src: 'public/images/emoji/posturewarm-up.png', code: 'posturewarm-up' , desc:"伸展背部" },
        { src: 'public/images/emoji/pride.png', code: 'pride' , desc:"得意" },
        { src: 'public/images/emoji/resignation.png', code: 'resignation' , desc:"算了算了" },
        { src: 'public/images/emoji/sadness.png', code: 'sadness' , desc:"失落" },
        { src: 'public/images/emoji/saycheese.png', code: 'saycheese' , desc:"笑一个" },
        { src: 'public/images/emoji/scare.png', code: 'scare' , desc:"吓唬" },
        { src: 'public/images/emoji/sheepishness.png', code: 'sheepishness' , desc:"苦笑" },
        { src: 'public/images/emoji/shimmy.png', code: 'shimmy' , desc:"左右舞动" },
        { src: 'public/images/emoji/shocked.png', code: 'shocked' , desc:"吓一跳" },
        { src: 'public/images/emoji/showmanship.png', code: 'showmanship' , desc:"看我的" },
        { src: 'public/images/emoji/shyness.png', code: 'shyness' , desc:"不好意思" },
        { src: 'public/images/emoji/side-to-side.png', code: 'side-to-side' , desc:"体侧伸展" },
        { src: 'public/images/emoji/sidebends.png', code: 'sidebends' , desc:"左右踏步舞动" },
        { src: 'public/images/emoji/sighing.png', code: 'sighing' , desc:"叹气" },
        { src: 'public/images/emoji/sitdown.png', code: 'sitdown' , desc:"坐" },
        { src: 'public/images/emoji/sleepy.png', code: 'sleepy' , desc:"打哈欠" },
        { src: 'public/images/emoji/smirking.png', code: 'smirking' , desc:"微笑" },
        { src: 'public/images/emoji/sneezing.png', code: 'sneezing' , desc:"阿嚏" },
        { src: 'public/images/emoji/sniffsniff.png', code: 'sniffsniff' , desc:"闻闻" },
        { src: 'public/images/emoji/soakitin.png', code: 'soakitin' , desc:"享受" },
        { src: 'public/images/emoji/sorrow.png', code: 'sorrow' , desc:"大哭" },
        { src: 'public/images/emoji/stretch.png', code: 'Stretch' , desc:"伸懒腰" },
        { src: 'public/images/emoji/surprise.png', code: 'surprise' , desc:"啊!" },
        { src: 'public/images/emoji/ta-da.png', code: 'ta-da' , desc:"夸奖" },
        { src: 'public/images/emoji/takeapicture.png', code: 'takeapicture' , desc:"拍照" },
        { src: 'public/images/emoji/thought.png', code: 'thought' , desc:"思考" },
        { src: 'public/images/emoji/turnippatch.png', code: 'turnippatch' , desc:"伸手臂舞动" },
        { src: 'public/images/emoji/twistydance.png', code: 'twistydance' , desc:"扭扭舞" },
        { src: 'public/images/emoji/upper-body-circles.png', code: 'upper-body-circles' , desc:"转动上半身" },
        { src: 'public/images/emoji/viva.png', code: 'viva' , desc:"欢乐!" },
        { src: 'public/images/emoji/wavegoodbye.png', code: 'wavegoodbye' , desc:"再见" },
        { src: 'public/images/emoji/widearmstretch.png', code: 'widearmstretch' , desc:"扩胸" },
        { src: 'public/images/emoji/workit.png', code: 'workit' , desc:"酷感姿势" },
        { src: 'public/images/emoji/workout.png', code: 'workout' , desc:"体操" },
        { src: 'public/images/emoji/worry.png', code: 'worry' , desc:"烦恼" },
        { src: 'public/images/emoji/yoga.png', code: 'yoga' , desc:"瑜伽姿势" }

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
        const title = sticker.desc ? `${sticker.desc}` : '';
        return `
          <button class="sticker-btn" data-sticker-src="${sticker.src}" data-sticker-code="${sticker.code || ''}" title="${title}">
            <img src="${sticker.src}" alt="${sticker.desc || ''}" style="max-width: 44px; max-height: 44px;"/>
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
  
  show() {
    if (this.container && !this.isVisible) {
      if (this.stickerCategories[this.currentCategory]) {
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