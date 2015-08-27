
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        // add a "close" icon to exit the progress. it's an autorelease object
        // var sprite = new cc.Sprite.create(res.CloseNormal_png);
        // sprite.setAnchorPoint(cc.p(0.5,0.5));
        // sprite.setPosition(cc.p(size.width/2,size.height/2));
        // this.addChild(sprite,0);

        cc.audioEngine.playMusic(res.Background_Music,false);
        cc.audioEngine.setMusicVolume(0.5);
        //var bezier = [cc.p(0,size.height/2),cc.p(100,-size.height/4),cc.p(100,100)];
        if(cc.sys.capabilities.hasOwnProperty('mouse'))
        {
          cc.eventManager.addListener(
          {
              event: cc.EventListener.MOUSE,

              onMouseDown:function(event)
              {
                if(event.getButton()==cc.EventMouse.BUTTON_LEFT)
                {
                  cc.log("left mouse button pressed at "+event.getLocationX());
                }
              },

              onMouseUp:function(event)
              {
                if(event.getButton()==cc.EventMouse.BUTTON_LEFT)
                {
                  cc.log("left mouse button released at "+event.getLocationX());
                }
              },
              onMouseMove:function(event)
              {
                  // cc.log("Mouse moved: "+event.getLocationX())
              }

                // return true;
              //
              // onTouchMoved:function(touch, event)
              // {
              //   cc.log("Touch moved:"+ touch.getLocationX());
              // }
          },this);
        }
        if(cc.sys.capabilities.hasOwnProperty('keyboard'))
        {
          cc.eventManager.addListener({
            event:cc.EventListener.KEYBOARD,

            onKeyPressed: function(key, event)
            {
              cc.log("Key Pressed: "+ key.toString());
            },
            onKeyReleased:function(key, event)
            {
              cc.log("Key Released: "+ key.toString());
            }
          },this);
        }
        // if(cc.sys.capabilities.hasOwnProperty('accelerometer'))
        // {
        //   cc.inputManager.setAccelerometerInterval(1/10);
        //   cc.inputManager.setAccelerometerEnabled(true);
        //
        //   cc.eventManager.addListener(
        //     {
        //       event:cc.EventListener.ACCELERATION,
        //
        //       callback:function(accelEvent, event)
        //       {
        //         cc.log('Accel x: '+accelEvent.x + 'Y: '+accelEvent.y + 'Z: '+accelEvent.z);
        //       }
        //     },this
        //   );
        // }
        //var sprite_action = cc.BezierBy.create(3,bezier);
        // var sprite_action = cc.Place.create(cc.p(200,150));
        // var sprite_action = cc.RepeatForever.create(cc.MoveBy.create(0.1,cc.p(5,0)));
        // var sprite_action = cc.ScaleBy.create(2,3,4);
        // var repeat_action = cc.Repeat.create(sprite_action,3);
        // var sprite_action = cc.TintBy.create(2,-127,-255,-127);
        // sprite.setOpacity(0);
        // var sprite_action = cc.FadeOut.create(2);
        // var sprite_action = cc.SkewTo.create(2,30,45);
        // var sprite_action = cc.RotateBy.create(2,45);
        //can set sound volume
        // var sprite_action = cc.MoveBy.create(2.0,cc.p(50,100));
        // var sprite_action2 = cc.FadeTo.create(2.0,0);
        // sprite.runAction(sprite_action);
        // sprite.runAction(sprite_action2);

        // cc.audioEngine.playEffect(res.Jump_Sound,true);
        // this.scheduleOnce(StopMusic,3);
        var menuItem1 = new cc.MenuItemFont("Play",play);
        var menuItem2 = new cc.MenuItemFont("Highscores",highscores);
        var menuItem3 = new cc.MenuItemFont("Settings",settings);
        var menuItem4 = new cc.MenuItemImage(res.CloseNormal_png,res.CloseSelected_png,imageFunc);

        menuItem1.setPosition(cc.p(size.width/2,(size.height/5)*4));
        menuItem2.setPosition(cc.p(size.width/2,(size.height/5)*3));
        menuItem3.setPosition(cc.p(size.width/2,(size.height/5)*2));
        menuItem4.setPosition(cc.p(size.width/2,(size.height/5)*1));


        var menu = new cc.Menu(menuItem1,menuItem2,menuItem3,menuItem4);
        // menu.setPosition(cc.p(0,0));
        menu.alignItemsVertically();
        this.addChild(menu);

        return true;
    }
});

var play = function()
{
  cc.log("Play Game");
}

var highscores = function()
{
  cc.log("highscores");
}

var settings = function()
{
  cc.log("go to settings");
}

var imageFunc = function()
{
  cc.log("Image item has been pressed");
}

var StopMusic = function(){
  cc.audioEngine.stopMusic();
};
var StopSound = function () {
  // body...
  cc.audioEngine.stopAllEffects();
}

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
