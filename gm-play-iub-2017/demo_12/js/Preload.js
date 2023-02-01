/*load game assets(images, spritesheets, audio, textures, etc) and 
    setup loading screen ->bar from 0 to 4 as files are being loaded*/

var DinoEggs = DinoEggs || {}; 


DinoEggs.Preload = function(){
    "use strict";
    Phaser.State.call(this);
    
    this.preloadBar = null;
};
DinoEggs.Preload.prototype = Object.create(Phaser.State.prototype);
DinoEggs.Preload.prototype.constructor = DinoEggs.Preload;

DinoEggs.Preload.prototype = {
    preload:function(){
        //TO DO: show logo in loading screen
              
        //  Load the Google WebFont Loader script
    this.game.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

        //setting up preload bar
        this.background = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'gamepreloadbkgd');
        
        //create a progress display text  
       this.loadingText = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 100, 'Loading... 0%', { fill: '#000000', font: '60px kalam' });
       this.loadingText.anchor.setTo(0.5, 0.5);
        
        var progressDisplay = 0;
        var timerEvt = this.game.time.events.loop(100, function (){
            if(progressDisplay < 100){
                if(progressDisplay < this.game.load.progress){
                    this.loadingText.text = 'Loading... '+(this.game.load.progress)+'%';
                    progressDisplay++;
                }

            }else{

                this.loadingText.text = 'Ready, Go!';
                this.game.time.events.remove(timerEvt);
            }
        }, this);
        
        this.preloardGreyBar = this.add.sprite(this.game.world.centerX,this.game.world.centerY,'preloadGreyBar');
        this.preloardGreyBar.anchor.setTo(0.5,0.5);
        
        
        this.preloadBar = this.add.sprite(this.game.world.centerX - 238,this.game.world.centerY,'preloadBar');
        this.preloadBar.anchor.setTo(0,0.5);
        this.time.advancedTiming = true; // better way of handling game time: Needs review   
        
        //make a sprite into a loading bar.
        this.load.setPreloadSprite(this.preloadBar);
        
        this.game.load.spritesheet('levelIcons', 'assets/levelIcons/level_icons.png', 73.83, 82);	
        this.game.load.image('options', 'assets/options.png');
        this.game.load.image('exit', 'assets/buttons/exit.png');
        
        //load all game assets
        this.load.image('logo','assets/name.png');
        this.load.image('rock', 'assets/rock.png');
        this.load.image('ground', 'assets/transparentplatform.png');
        this.load.atlasJSONHash('egg', 'assets/eggs/eggSheet.png','assets/eggs/egg.json');
        this.load.atlasJSONHash('egg2', 'assets/eggs/eggSheet2.png','assets/eggs/egg.json');
        this.load.atlasJSONHash('egg3', 'assets/eggs/eggSheet3.png','assets/eggs/egg.json');
        this.load.atlasJSONHash('egg4', 'assets/eggs/eggSheet4.png','assets/eggs/egg.json');
        this.load.atlasJSONHash('egg5', 'assets/eggs/eggSheet5.png','assets/eggs/egg.json');
        this.load.atlasJSONHash('hatchling', 'assets/hatchling/baby.png','assets/hatchling/baby.json');
//        this.load.spritesheet('hatchling', 'assets/hatchling/hatchlingSheet.png', 91, 89.5);
//        this.load.spritesheet('h_eyes', 'assets/hatchling/eyes.png', 28, 22);
//        this.load.spritesheet('h_tail', 'assets/hatchling/tail.png', 20, 17);
        this.load.atlasJSONHash('hatchling_sad', 'assets/hatchling/crazybaby.png','assets/hatchling/baby.json');
        this.load.spritesheet('triplets', 'assets/hatchling/tripletSheet.png', 80, 87.5);
        this.load.atlasJSONHash('hatchling_intro_anim', 'assets/hatchling/hatchlingAtlas.png', 'assets/hatchling/hatchlingAtlas.json');
        this.load.image('star', 'assets/star.png');
        this.load.atlasJSONHash('dino', 'assets/dinoMom/mom.png','assets/dinoMom/mom.json');
//        this.load.atlasJSONHash('dino', 'assets/dinoMom/mom_talk.png','assets/dinoMom/mom_talk.json');
//        this.load.spritesheet('m_eyes', 'assets/dinoMom/eyes.png', 63, 15);
//        this.load.spritesheet('m_tail', 'assets/dinoMom/tail.png', 29, 41);

        this.load.image('sky', 'assets/happysky.jpg');
        this.load.spritesheet('startButton', 'assets/buttons/play_button.png', 354, 85);
        this.load.spritesheet('startGuestButton', 'assets/buttons/playGuest_button.png', 354, 85);
        this.load.spritesheet('scoreboardButton', 'assets/buttons/scoreboard.png', 354, 159/2);

        //background music
        this.load.audio('bg_music',['assets/bg_music.mp3']);
        this.load.image('restart', 'assets/buttons/restart.png');
        this.load.image('menu', 'assets/buttons/main_menu.png');
        this.load.image('board', 'assets/board.png');

        this.load.image('prev', 'assets/arrows/prev.png');

        this.load.image('nextlevel', 'assets/buttons/nextlevel.png');
        this.load.image('gradeSetlevel', 'assets/buttons/return_to_grade_set.png');
        //celebration particles
        this.load.image('jewel_red', 'assets/particles/celebration/jewel_red.png');
        this.load.image('jewel_purple', 'assets/particles/celebration/jewel_purple.png');
        this.load.image('jewel_white', 'assets/particles/celebration/jewel_white.png');
        this.load.image('jewel_green', 'assets/particles/celebration/jewel_green.png');
        this.load.image('jewel_yellow', 'assets/particles/celebration/jewel_yellow.png');
       
        this.load.image('awesome', 'assets/awesome.png');
        this.load.image('congratulations', 'assets/congratulations.png');
        this.load.image('endText1', 'assets/endText1.png');
        this.load.image('endText2', 'assets/endText2.png');
        this.load.image('rockwave', 'assets/rockwaveTxt.png');
        
        //images for hit rock feature
        this.load.image('lightning', 'assets/lightning.png');
        this.load.image('pterodactyl', 'assets/pterodactyl.png');
        
        //game controls
        this.load.image('musicOn', 'assets/buttons/musicOn.png');
        this.load.image('musicOff', 'assets/buttons/musicOff.png');
        this.load.image('pauseButton', 'assets/buttons/pauseButton.png');
        this.load.image('buttonsMenu', 'assets/buttons/buttons_menu.png', 325, 233);
        this.load.image('questionButton', 'assets/buttons/help.png');
        this.load.image('replayButton', 'assets/buttons/resume.png');
        
        //powerup text
        this.load.image('destroyRocks', 'assets/powerupText/destroyRocks.png');
        this.load.image('freezeRocks', 'assets/powerupText/freezeRocks.png');
        this.load.image('goldenEgg', 'assets/powerupText/goldenEgg.png');
        this.load.image('hatchEgg', 'assets/powerupText/hatchEgg.png');

        this.load.image('clock', 'assets/clock.png');
        this.load.image('halo', 'assets/selected.png');

        this.load.image('rockMeter', 'assets/rockMeter.png');

        
        this.load.spritesheet('kaboom', 'assets/explode.png', 128, 128);
        this.load.image('highScore', 'assets/highScore.png');

    },
    create:function(){    
        this.state.start('MainMenu');
        //Game Music in Local Storage
        localStorage.setItem("g_isMusicPlaying", JSON.stringify(true)); 
        //window.gm_logged_in = false;
    }
}

