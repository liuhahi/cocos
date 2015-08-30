var INITIALIZED = false;
var AnimationLayer = cc.Layer.extend({
    spriteSheet:null,
    runningAction:null,
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();
        this.init();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;
        //height -
        //width -
        // add a "close" icon to exit the progress. it's an autorelease object
        // var sprite = new cc.Sprite.create(res.RedHair_png,cc.rect(467, 79, 65, 78));
        // sprite.setAnchorPoint(cc.p(0.5,0.5));
        // sprite.setPosition(cc.p(size.width/2-100,size.height/2));
        //
        // this.addChild(sprite,0);

        if(cc.sys.capabilities.hasOwnProperty('keyboard'))
        {

          cc.eventManager.addListener({
            event:cc.EventListener.KEYBOARD,

            onKeyPressed: function(key, event)
            {
              cc.log("event is :"+event.toString());
              cc.log("Key Pressed: "+ key.toString());
              //right
              if(key.toString()==39)
              {
                // create sprite sheet
                var target = event.getCurrentTarget();
                target.sprite.scaleX = -1;
                var spriteAction = new cc.MoveBy(1,cc.p(50,0));
                target.walking(spriteAction);

              }
              //left
              if(key.toString()==37)
              {
                var target = event.getCurrentTarget();
                target.sprite.scaleX = 1;
                var spriteAction = new cc.MoveBy(1,cc.p(-50,0));
                target.walking(spriteAction);
              }
              //top
              if(key.toString()==38)
              {
                // var spriteAction = new cc.MoveBy(1,cc.p(0,50));
                // sprite.runAction(spriteAction);
              }
              //down
              if(key.toString()==40)
              {
                var target = event.getCurrentTarget();
                target.leanOver();
              }
              if(key.toString()==32)
              {
                var target = event.getCurrentTarget();

                target.jump();
              }

            },
            onKeyReleased:function(key, event)
            {
              // this.sprite.setTextureRect(cc.rect(467, 79, 65, 78));
              var target = event.getCurrentTarget();
              target.stop();
              cc.log("Key Released: "+ key.toString());
            }
          },this);
        }

        // this.scheduleOnce(this.remove, 2);

        // var menuItem1 = new cc.MenuItemFont("Push",play);
        // var menu = new cc.Menu(menuItem1);
        // menu.alignItemsVertically();
        // this.addChild(menu);
        //
        // // var spriteAction = new cc.MoveBy(2,cc.p(500,0));
        // // var spriteAction = new cc.EaseBounceOut(new cc.MoveBy(2,cc.p(500,0)));
        // var spriteAction = new cc.EaseExponentialOut(new cc.MoveBy(2,cc.p(500,0)));
        // sprite.runAction(spriteAction);

        // this.scheduleUpdate();
        // this.scheduleOnce(this.functionCallback);
        // this.schedule(this.functionCallback,3);

        // var label = new cc.LabelTTF("Batman","Arial");
        // label.setFontSize(80);
        // label.setPosition(cc.p(size.width/2,size.height/2));
        // label.setColor(cc.color(255,0,0));
        // this.addChild(label,0);

        // var atlasLabel = new cc.LabelAtlas("12345!",res.AtlasFont_png,48,64);
        // atlasLabel.x = size.width/2;
        // atlasLabel.y = size.height/2;
        // this.addChild(atlasLabel);

        // var label = new cc.LabelBMFont("Hello world",res.LabelBMFont_png);
        // label.setPosition(cc.p(size.width/2,size.height/2));
        // this.addChild(label);

        // var button = new ccui.Button();
        // button.loadTextures(res.CloseNormal_png,res.CloseSelected_png);
        // button.x = size.width/2;
        // button.y = size.height/2;
        // button.addTouchEventListener(this.touchEvent,this);
        // this.addChild(button);

        // var checkBox = new ccui.CheckBox();
        // checkBox.loadTextures(res.CheckBoxNormal_png,res.CheckBoxNormalClicked_png,res.CheckBoxActive_png);
        // checkBox.x = size.width/2;
        // checkBox.y = size.height/2;
        // checkBox.addEventListener(this.selectedStateEvent,this);
        // this.addChild(checkBox);

        // var imageView = new ccui.ImageView();
        // imageView.loadTexture(res.HelloWorld_png);
        // imageView.x = size.width/2;
        // imageView.y = size.height/2;
        // this.addChild(imageView);

        // var textAtlas = new ccui.TextAtlas();
        // textAtlas.setProperty("745",res.LabelAtlas_png,17,22,"0");
        // textAtlas.x = size.width/2;
        // textAtlas.y = size.height/2;
        // this.addChild(textAtlas);

        // var labelBMFont = new ccui.TextBMFont();
        // labelBMFont.setFntFile(res.LabelBMFont_png);
        // labelBMFont.setString("BMFont");
        // labelBMFont.x = size.width/2;
        // labelBMFont.y = size.height/2;
        // this.addChild(labelBMFont);

        // var text = new ccui.Text();
        // text.attr({
        //   textAlign: cc.TEXT_ALIGNMENT_CENTER,
        //   string: "Label TTF",
        //   font: "Arial",
        //   x: size.width/2,
        //   y: size.height/2
        // });
        // this.addChild(text);

        // var listView = new ccui.ListView();
        // listView.setDirection(ccui.ScrollView.DIR_VERTICAL);
        // listView.setTouchEnabled(true);
        // listView.setBounceEnabled(true);
        // listView.setBackGroundImage(res.HelloWorld_png);
        // listView.setContentSize(cc.size(1280, 400));
        // listView.setAnchorPoint(cc.p(0.5, 0.5));
        // listView.setPosition(cc.p(size.width / 2, size.height / 2));
        // this.addChild(listView);
        //
        // for ( var i = 0; i < 50; i++ )
        // {
        //     var button = new ccui.Button();
        //     button.setName("TextButton");
        //     button.setTouchEnabled(true);
        //     button.loadTextures(res.CloseNormal_png, res.CloseSelected_png, "");
        //     listView.pushBackCustomItem(button);
        // }

        // this.loadingBar = new ccui.LoadingBar();
        // this.loadingBar.setName("LoadingBar");
        // this.loadingBar.loadTexture(res.LoadingBar_png);
        // this.loadingBar.setPercent(0);
        // this.loadingBar.x = size.width/2;
        // this.loadingBar.y = size.height/2;
        // this.addChild(this.loadingBar);
        //
        // this.scheduleUpdate();

        // var richText = new ccui.RichText();
        // richText.ignoreContentAdaptWithSize(false);
        // richText.width = 120;
        // richText.height = 100;
        //
        // var re1 = new ccui.RichElementText(1, cc.color.WHITE, 255, "This color is white","Helvetica",10);
        // var re2 = new ccui.RichElementText(2, cc.color.YELLOW, 255, "This color is yellow","Helvetica",10);
        // var re3 = new ccui.RichElementText(3, cc.color.BLUE, 255, "This color is blue","Helvetica",10);
        // var re4 = new ccui.RichElementText(4, cc.color.GREEN, 255, "This color is green","Helvetica",25);
        // var re5 = new ccui.RichElementText(5, cc.color.RED, 255, "This color is red","Helvetica",10);
        // var re6 = new ccui.RichElementText(6, cc.color.ORANGE, 255, "This color is orange","Helvetica",10);
        //
        // richText.pushBackElement(re1);
        // richText.pushBackElement(re2);
        // richText.pushBackElement(re3);
        // richText.pushBackElement(re4);
        // richText.pushBackElement(re5);
        // richText.pushBackElement(re6);
        //
        // richText.x = size.width/2;
        // richText.y = size.height/2;
        //
        // this.addChild(richText);

        // var scrollView = new ccui.ScrollView();
        // scrollView.setDirection(ccui.ScrollView.DIR_VERTICAL);
        // scrollView.setTouchEnabled(true);
        // scrollView.setBounceEnabled(true);
        // scrollView.setBackGroundImage(res.HelloWorld_png);
        // scrollView.setContentSize(cc.size(300,200));
        // scrollView.setInnerContainerSize(cc.size(1280,2500));
        // scrollView.setAnchorPoint(cc.p(0.5,0.5));
        // scrollView.setPosition(cc.p(size.width/2,size.height/2));
        // this.addChild(scrollView);
        // for(var i = 0;i<50;i++)
        // {
        //   var button = new ccui.Button();
        //   button.setTouchEnabled();
        //   button.setPosition(cc.p(scrollView.width/2,i*50));
        //   button.loadTextures(res.CloseNormal_png,res.CloseSelected_png);
        //   scrollView.addChild(button);
        // }

        // var slider = new ccui.Slider();
        // slider.setTouchEnabled(true);
        // slider.loadBarTexture(res.SliderTrack_png);
        // slider.loadSlidBallTextures(res.SliderThumb_png,res.SliderThumb_png,"");
        // slider.loadProgressBarTexture(res.SliderProgress_png);
        // slider.x = size.width/2;
        // slider.y = size.height/2;
        // slider.addEventListener(this.sliderEvent,this);
        // this.addChild(slider);

        // textField = new ccui.TextField();
        // textField.setTouchEnabled(true);
        // textField.fontName = "Marker Felt";
        // textField.placeHolder = "Input text here";
        // textField.fontSize = 30;
        // textField.x = size.width/2;
        // textField.y = size.height/2;
        // textField.addEventListener(this.textFieldEvent,this);
        //
        // textField.setMaxLengthEnabled(true);
        // textField.setMaxLength(12);
        //
        // textField.setPasswordEnabled(true);
        // textField.setPasswordStyleText("*");
        //
        // this.addChild(textField);

        // var layout = new ccui.Layout();
        // layout.setLayoutType(ccui.Layout.LINEAR_HORIZONTAL);
        // layout.sizeType = ccui.Widget.SIZE_PERCENT;
        // layout.setSizePercent(cc.p(0.5,0.5));
        // layout.setPositionPercent(cc.p(0.25,0.25));
        // layout.setBackGroundColorType(ccui.Layout.BG_COLOR_SOLID);
        // layout.setBackGroundColor(cc.color.GRAY);
        //
        // var text = new ccui.Text();
        // text.attr({
        //   textAlign: cc.TEXT_ALIGNMENT_CENTER,
        //   string: "Label TTF",
        //   font: "Arial"
        // })
        //
        // var button = new ccui.Button();
        // button.loadTextures(res.CloseNormal_png,res.CloseSelected_png);
        //
        // layout.addChild(text);
        // layout.addChild(button);
        //
        // this.addChild(layout);

        // var pageView = new ccui.PageView();
        // pageView.setTouchEnabled(true);
        // pageView.setContentSize(cc.size(240,900));
        // pageView.setAnchorPoint(cc.p(0.5,0.5));
        // pageView.x = size.width/2;
        // pageView.y = size.height/2;
        //
        // for(var i=0; i<5 ;i++)
        // {
        //   var layout = new ccui.Layout();
        //
        //   var imageView = new ccui.ImageView();
        //   imageView.loadTexture(res.CloseNormal_png);
        //   imageView.x = pageView.width/2;
        //   imageView.y = pageView.height/2;
        //   layout.addChild(imageView);
        //
        //   var text = new ccui.Text();
        //   text.string = "Page" + (i+1);
        //   text.font = "30px 'Marker Felt'";
        //   text.color = cc.color(192,192,192);
        //   text.x = pageView.width/2;
        //   text.y = pageView.height/2 + 100;
        //   layout.addChild(text);
        //
        //   pageView.addPage(layout);
        // }
        //
        // pageView.addEventListener(this.pageViewEvent,this);
        // this.addChild(pageView);

        return true;
    },
    init:function ()
    {
      this._super();
      var size = cc.winSize;


      this.sprite = cc.Sprite.create(res.stand1_png);
      this.sprite.setPosition(cc.p(size.width/2, 102));

      this.addChild(this.sprite);
    }
    ,
    walking:function(w_action)
    {
      cc.spriteFrameCache.addSpriteFrames(res.redFrame_plist);


      // init runningAction
      var animFrames = [];
      for (var i = 1; i < 3; i++) {
          var str = "p_walk" + i + ".png";
          var frame = cc.spriteFrameCache.getSpriteFrame(str);
          animFrames.push(frame);
      }
      var animation = cc.Animation.create(animFrames, 0.2);

      // var spriteAction = new cc.MoveBy(1,cc.p(50,0));
      this.sprite.runAction(w_action);
      var runningAction = new cc.Repeat(cc.Animate.create(animation),0.5);
      this.sprite.runAction(runningAction);
      this.stop();
    },
    jump:function()
    {
      cc.spriteFrameCache.addSpriteFrames(res.redFrame_plist);


      // init runningAction
      var animFrames = [];

      animFrames.push(cc.spriteFrameCache.getSpriteFrame("p_walk2.png"));

      var animation = cc.Animation.create(animFrames, 1);
      var runningAction = new cc.Repeat(cc.Animate.create(animation),1);
      this.sprite.runAction(runningAction);
      // var jumpUpAction = new cc.MoveBy(1,cc.p(0,50));
      // jumpUpAction.easing(cc.easeOut(50));
      // this.sprite.runAction(jumpUpAction);
      // var jumpDownAction = new cc.MoveBy(1,cc.p(0,-50));
      // jumpDownAction.easing(cc.easeIn(50));
      // this.sprite.runAction(jumpDownAction);
      var actionBy = new cc.JumpBy(0.5, cc.p(0, 0), 50, 1);
      this.sprite.runAction(actionBy);
      // var jumpUp = new cc.EaseOut.create(cc.Animate.create(animation),1.5);
      // this.sprite.runAction(jumpUp);
      // var jumpDown = new cc.MoveBy(1,cc.p(25,-50));
      // this.sprite.runAction(jumpDown);

    },
    leanOver:function()
    {
      // init runningAction
      var animFrames = [];
      animFrames.push(cc.spriteFrameCache.getSpriteFrame("leanOver.png"));
      var animation = cc.Animation.create(animFrames, 0.1);

      // var spriteAction = new cc.MoveBy(1,cc.p(50,0));
      var runningAction = new cc.Repeat(cc.Animate.create(animation),1);
      this.sprite.runAction(runningAction);
    }
    ,
    stop:function()
    {
      cc.spriteFrameCache.addSpriteFrames(res.redFrame_plist);


      // init runningAction
      var animFrames = [];
      for (var i = 1; i > 0; i--) {
          var str = "stand" + i + ".png";
          var frame = cc.spriteFrameCache.getSpriteFrame(str);
          animFrames.push(frame);
      }
      var animation = cc.Animation.create(animFrames, 1);

      // var spriteAction = new cc.MoveBy(1,cc.p(50,0));
      var runningAction = new cc.Repeat(cc.Animate.create(animation),2);
      this.sprite.runAction(runningAction);
    }
    ,
    remove:function()
    {
      //this.removeAllChildren(true);
      //this.removeChildByTag(1,ture);
    }
    ,
    pageViewEvent:function(sender,type)
    {
      switch (type) {
        case ccui.PageView.EVENT_TURNING:
          cc.log("Page: " + sender.getCurPageIndex());

          break;
        default:

      }
    }
    ,
    sliderEvent:function(sender,type)
    {
      switch (type) {
        case ccui.Slider.EVENT_PERCENT_CHANGED:
            cc.log("Percent" + sender.getPercent().toFixed(0));

          break;
        default:

      }
    },
    selectedStateEvent:function(sender , type)
    {
      switch (type) {
        case ccui.CheckBox.EVENT_UNSELECTED:
          cc.log("Not selected");

          break;
        case ccui.CheckBox.EVENT_SELECTED:
          cc.log("Selected");
          break;
        default:

      }
    },
    touchEvent:function(sender,type)
    {
      switch (type) {
        case ccui.Widget.TOUCH_BEGAN:
          cc.log("Touch Down");
          break;
        case ccui.Widget.TOUCH_MOVED:
          cc.log("Touch Moved");
          break;
        case ccui.Widget.TOUCH_ENDED:
          cc.log("Touch Ended");
          break;
        case ccui.Widget.TOUCH_CANCELLED:
          cc.log("Touch Cancelled");
          break;
        default:

      }
    },
    update:function(dt)
    {
      // cc.log("Update function has been called: "+dt);
      this.count++;
      if(this.count>100)
      {
        this.count = 0;
      }

      this.loadingBar.setPercent(this.count);
    },

    functionCallback:function(dt)
    {
      cc.log("custom function call");
    }
});

var play = function()
{
  var scene = new HelloWorldScene2();
  // cc.director.runScene(new cc.TransitionZoomFlipY(3,scene));
  cc.director.runScene(new cc.TransitionFade(3,scene));
}
// var HelloWorldScene = cc.Scene.extend({
//     onEnter:function () {
//         this._super();
//
//         if(INITIALIZED == false)
//         {
//           INITIALIZED = true;
//
//           var layer = new HelloWorldLayer();
//           this.addChild(layer);
//         }
//     }
// });
