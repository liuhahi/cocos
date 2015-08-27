var INITIALIZED = false;
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    count:0,
    loadingBar:null,
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
      // sprite.setPosition(cc.p(size.width/2-100,size.height/2));
      // this.addChild(sprite,0);

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

        var scrollView = new ccui.ScrollView();
        scrollView.setDirection(ccui)

        return true;
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
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();

        if(INITIALIZED == false)
        {
          INITIALIZED = true;

          var layer = new HelloWorldLayer();
          this.addChild(layer);
        }
    }
});
