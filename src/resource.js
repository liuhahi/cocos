var res = {
    HelloWorld_png : "res/HelloWorld.png",
    CloseNormal_png : "res/CloseNormal.png",
    CloseSelected_png : "res/CloseSelected.png",
    Jump_Sound : "res/jump.wav",
    Background_Music: "res/AboveTheTreetops.ogg",
    AtlasFont_png : "res/atlas.png",
    LabelBMFont_png :"res/bitmapFontTest2.fnt",
    CheckBoxActive_png : "res/check_box_active.png",
    CheckBoxActiveClicked_png : "res/check_box_active_press.png",
    CheckBoxActiveDisabled_png : "res/check_box_active_disable.png",
    CheckBoxNormal_png : "res/check_box_normal.png",
    CheckBoxNormalClicked_png : "res/check_box_normal_press.png",
    CheckBoxNormalDisabled_png : "res/check_box_normal_disable.png",
    LabelAtlas_png: "res/labelatlas.png",
    LoadingBar_png: "res/sliderProgress.png"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
