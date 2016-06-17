if (!window.console){console={log:function(){}}};

var container;
var bg_exit;
var logo;
var legal_panel;
var legal_button;
var cta_learn_img;
var cta_find_img;
var vehicle_name;
var hero_image;
var hero_bg_img;
var vidplayer;
var vidpEl;
var vid_play_button;
var vid_play_button_img;
var check_complete = false;

var lease_content;
var lease_header;
var lease_price;
var lease_details;
var lease_details_text;
var endframe_image;
var lease_endframe;

var award_content;
var award_info;
var award_info_text;

var apr_cash_content;
var apr_cash_apr_header;
var apr_cash_apr_detail;
var apr_cash_cash_header;
var apr_cash_cash_detail;
var apr_cash_divider;
var apr_cash_divider_img
var apr_endframe;
var copy_bg_img;

var cash_back_content;
var cash_back_header;
var cash_back_details;
var cash_back_header_text;
var cash_back_details_text;
var cash_back_endframe;

var overlay_img = "";


var unitwidth = '160';
var unitheight = '600';

var vidwidth = '160';
var vidheight = '319';
var vidID_mp4;
var vidID_webm;
var ad_state;

var bg_exit_path = "";
var cta_learn_path = "";
var cta_find_path = "";

var show_learnmore_cta = "";

		
//Function confirm if the creative is visible	
enablerInitHandler = function(e) {
	if(Enabler.isVisible()) {
		startAd();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, startAd);
	} 
};

function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

//Start the creative
startAd = function(e) {
	// Simulate AJAX CALL, suceess calls the following method: getFeedData()
	dynInvocation();
    Enabler.addEventListener(studio.events.StudioEvent.EXIT, onExit);
    //initDealerLocator();
};

function onExit(){
    videoEl.pause();
    videoEl.currentTime = 0;
    Enabler.stopTimer("Video Timer");
}

function dynInvocation(){

// Dynamic Content variables and sample values
    Enabler.setProfileId(1050836);
    var devDynamicContent = {};

    devDynamicContent.Hyundai_Tier1_Feed_Example_Parent_Filter= [{}];
    devDynamicContent.Hyundai_Tier1_Feed_Example_Parent_Filter[0]._id = 0;
    devDynamicContent.Hyundai_Tier1_Feed_Example_Parent_Filter[0].ID = 1;
    devDynamicContent.Hyundai_Tier1_Feed_Example_Parent_Filter[0].Placement_Name = "Placement 1";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Parent_Filter[0].Model = "SON";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Parent_Filter[0].Tactic = "SampleTactic1";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Parent_Filter[0].Strategy = "Sample Strategy1";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Parent_Filter[0].Creative = "APR";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Parent_Filter[0].Active = true;
    devDynamicContent.Hyundai_Tier1_Feed_Example_Parent_Filter[0].Weight = 33;

    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award= [{}];
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0]._id = 0;
    //devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].ID = 201;
    //devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].Reporting_Label = "sampleReportingLabelAward1";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].model_name = "Santa Fe Sport";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].dealer_locator_model = "Hyundai-SantaFeSport";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_1_URL = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_1_URL.Url = "https://www.hyundaiusa.com/sonata/comparison.aspx";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_2_URL = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_2_URL.Url = "https://www.hyundaiusa.com/financial-tools/special-offers.aspx?vehicle=sonata";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].background_URL = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].background_URL.Url = "https://www.hyundaiusa.com/sonata/comparison.aspx";
    
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease= [{}];
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0]._id = 0;
    //devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].ID = 301;
    //devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].Reporting_Label = "sampleReportingLabelLease1";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].model_name = "Sonata";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].dealer_locator_model = "Hyundai-Sonata";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_1_URL = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_1_URL.Url = "https://www.hyundaiusa.com/sonata/comparison.aspx";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_2_URL = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_2_URL.Url = "https://www.hyundaiusa.com/financial-tools/special-offers.aspx?vehicle=sonata";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].background_URL = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].background_URL.Url = "https://www.hyundaiusa.com/sonata/comparison.aspx";
    
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR= [{}];
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0]._id = 0;
    //devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].ID = 401;
    //devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].Reporting_Label = "sampleReportingLabelAward1";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].model_name = "Sonata";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].dealer_locator_model = "Hyundai-Sonata";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_1_URL = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_1_URL.Url = "https://www.hyundaiusa.com/sonata/comparison.aspx";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_2_URL = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_2_URL.Url = "https://www.hyundaiusa.com/financial-tools/special-offers.aspx?vehicle=sonata";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].background_URL = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].background_URL.Url = "https://www.hyundaiusa.com/sonata/comparison.aspx";
    
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back= [{}];
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0]._id = 0;
    //devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].ID = 501;
    //devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].Reporting_Label = "sampleReportingLabelAward1";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].model_name = "Sonata";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].dealer_locator_model = "Hyundai-Sonata";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_1_URL = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_1_URL.Url = "https://www.hyundaiusa.com/sonata/comparison.aspx";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_2_URL = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_2_URL.Url = "https://www.hyundaiusa.com/financial-tools/special-offers.aspx?vehicle=sonata";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].background_URL = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].background_URL.Url = "https://www.hyundaiusa.com/sonata/comparison.aspx";

    //AWARD
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].vid_play_button_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].vid_play_button_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].vid_play_button_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37304295/20680911_20150707152504648_Replay_button_160x600.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_1_img_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_1_img_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_1_img_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37321926/20680911_20150708122623470_Learn_more_CTA1_160.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_2_img_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_2_img_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_2_img_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37308006/20680911_20150707150911456_Find_Yours_CTA2_160.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].logo_image_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].logo_image_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].logo_image_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37305765/20680911_20150707151133649_Logo_160.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].backup_static_160 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].backup_static_160.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].backup_static_160.Url = "https://s0.2mdn.net/ads/richmedia/studio/37307926/20680911_20150707163208404_Dynamic_Template_160x600_Video_Sonata-StaticBackUp.jpg";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_body_data_160x600 = "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISCING ELIT SED DO EIUSMOD TEMPOR.";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].endframe_hero_img_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].endframe_hero_img_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].endframe_hero_img_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37306178/20680911_20150707151728139_Sonata_Hero_160X600.jpg";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_img_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_img_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_img_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37307913/20680911_20150707150824448_Award_image_160.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_content_bg_color_160x600 = "#002856";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_vid_ID_mp4_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_vid_ID_mp4_160x600.Type = "video";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_vid_ID_mp4_160x600.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/779f29823129349c/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fx-m4v/acao/yes/ip/0.0.0.0/ipbits/0/expire/3581595774/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/511D6CCE0A646332C157606FE4A225DA0EC9378D.AE6A02FCB0681871FB1FB3B6761DBAC45B5DFC5E/key/ck2/file/file.m4v";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_vid_ID_mp4_160x600.Stream_Url = "";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_vid_ID_webm_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_vid_ID_webm_160x600.Type = "video";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_vid_ID_webm_160x600.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/c8cb372840318313/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fwebm/acao/yes/ip/0.0.0.0/ipbits/0/expire/3581595774/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/B169DBA1F66A4BB2E390CBE4E050CB410F8A8A1F.C0AE5FD23ED590FC98496B36ED01644D9D631AA/key/ck2/file/file.webm";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_vid_ID_webm_160x600.Stream_Url = "";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].Award_Legal = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
    
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].Award_Legal = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
   
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].show_learnmore_cta = "";

    //LEASE
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].vid_play_button_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].vid_play_button_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].vid_play_button_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37304295/20680911_20150707152504648_Replay_button_160x600.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_1_img_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_1_img_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_1_img_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37321926/20680911_20150708122623470_Learn_more_CTA1_160.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_2_img_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_2_img_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_2_img_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37308006/20680911_20150707150911456_Find_Yours_CTA2_160.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].logo_image_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].logo_image_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].logo_image_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37305765/20680911_20150707151133649_Logo_160.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].backup_static_160 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].backup_static_160.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].backup_static_160.Url = "https://s0.2mdn.net/ads/richmedia/studio/37307926/20680911_20150707163208404_Dynamic_Template_160x600_Video_Sonata-StaticBackUp.jpg";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_price_header_data_160x600 = "LIMITED-TIME LEASE";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_price_data_160x600 = "$249";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_price_duration_160x600 = "per mo.";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_details_160x600 = "for 36 months with $2,499 due at lease signing. $0 security deposit. Excludes tax, title and license.";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].endframe_hero_160 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].endframe_hero_160.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].endframe_hero_160.Url = "https://s0.2mdn.net/ads/richmedia/studio/37306178/20680911_20150707151728139_Sonata_Hero_160X600.jpg";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_content_bg_color_160x600 = "#002856";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_vid_ID_mp4_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_vid_ID_mp4_160x600.Type = "video";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_vid_ID_mp4_160x600.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/779f29823129349c/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fx-m4v/acao/yes/ip/0.0.0.0/ipbits/0/expire/3581595776/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/986C05520F1C4D1598356038CF2DB0F29C05800C.5E206D9262FEAA5A43526985222819DE91F599D4/key/ck2/file/file.m4v";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_vid_ID_mp4_160x600.Stream_Url = "";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_vid_ID_webm_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_vid_ID_webm_160x600.Type = "video";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_vid_ID_webm_160x600.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/c8cb372840318313/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fwebm/acao/yes/ip/0.0.0.0/ipbits/0/expire/3581595776/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/3CD54B03D853F2D6CE2CE2C7AAB3D86A3387B8B4.597F5B34E4D1ED3DE3EC2934342A1284B24EF757/key/ck2/file/file.webm";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_vid_ID_webm_160x600.Stream_Url = "";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].Lease_Legal = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea com\/?CID=%ebuy!&PID=%epid!&CRID=%ecid!&SID=%esid!&AID=%eaid!modi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].endframe_copy_image_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].endframe_copy_image_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].endframe_copy_image_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37412646/20680911_20150715161955167_endframe_copy_image_160x600.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_overlay_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_overlay_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_overlay_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37307913/20680911_20150707150824448_Award_image_160.png";

    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].show_learnmore_cta = "";

    //APR
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].vid_play_button_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].vid_play_button_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].vid_play_button_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37304295/20680911_20150707152504648_Replay_button_160x600.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_1_img_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_1_img_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_1_img_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37321926/20680911_20150708122623470_Learn_more_CTA1_160.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_2_img_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_2_img_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_2_img_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37308006/20680911_20150707150911456_Find_Yours_CTA2_160.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].logo_image_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].logo_image_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].logo_image_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37305765/20680911_20150707151133649_Logo_160.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].backup_static_160 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].backup_static_160.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].backup_static_160.Url = "https://s0.2mdn.net/ads/richmedia/studio/37307926/20680911_20150707163208404_Dynamic_Template_160x600_Video_Sonata-StaticBackUp.jpg";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_apr_header_160x600 = "1.9% APR";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_apr_details_160x600 = "For up to 60 mos. Plus no payments for up to 90 days.";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_plus_image_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_plus_image_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_plus_image_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37459756/20680911_20150720121322121_PLUS-Icon-136x15.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_cash_header_160x600 = "$1,750 Off";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_cash_details_160x600 = "With application of valued owner coupon";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].endframe_hero_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].endframe_hero_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].endframe_hero_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37306178/20680911_20150707151728139_Sonata_Hero_160X600.jpg";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_content_bg_color_160x600 = "#002856";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_vid_ID_mp4_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_vid_ID_mp4_160x600.Type = "video";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_vid_ID_mp4_160x600.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/779f29823129349c/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fx-m4v/acao/yes/ip/0.0.0.0/ipbits/0/expire/3581595779/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/42FFA59A09BBAF1B3694BF37695433A23D3EA6D8.1DFDEC1C20A2AFC1F9745A3D0CBE5D6B8892F88E/key/ck2/file/file.m4v";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_vid_ID_mp4_160x600.Stream_Url = "";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_vid_ID_webm_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_vid_ID_webm_160x600.Type = "video";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_vid_ID_webm_160x600.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/c8cb372840318313/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fwebm/acao/yes/ip/0.0.0.0/ipbits/0/expire/3581595779/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/27AB5ECA63DF9A5D0A6AA32D192476DB3C8FC28A.2E87BAD935766E5D79B2FB4D89D9F5D172306BE4/key/ck2/file/file.webm";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_vid_ID_webm_160x600.Stream_Url = "";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].APR_Cash_Legal  = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].endframe_copy_image_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].endframe_copy_image_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].endframe_copy_image_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37412646/20680911_20150715161955167_endframe_copy_image_160x600.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_overlay_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_overlay_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_overlay_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37307913/20680911_20150707150824448_Award_image_160.png";

    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].show_learnmore_cta = "";

    //CASH BACK
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].vid_play_button_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].vid_play_button_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].vid_play_button_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37304295/20680911_20150707152504648_Replay_button_160x600.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_1_img_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_1_img_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_1_img_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37321926/20680911_20150708122623470_Learn_more_CTA1_160.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_2_img_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_2_img_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_2_img_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37308006/20680911_20150707150911456_Find_Yours_CTA2_160.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].logo_image_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].logo_image_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].logo_image_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37305765/20680911_20150707151133649_Logo_160.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].backup_static_160 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].backup_static_160.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].backup_static_160.Url = "https://s0.2mdn.net/ads/richmedia/studio/37307926/20680911_20150707163208404_Dynamic_Template_160x600_Video_Sonata-StaticBackUp.jpg";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_header_160x600 = "Owners receive up to";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_details_160x600 = "$1,750";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_details_term_160x600 = "Cash Back";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].endframe_hero_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].endframe_hero_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].endframe_hero_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37306178/20680911_20150707151728139_Sonata_Hero_160X600.jpg";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_content_bg_color_160x600 = "#002856";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_vid_ID_mp4_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_vid_ID_mp4_160x600.Type = "video";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_vid_ID_mp4_160x600.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/779f29823129349c/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fx-m4v/acao/yes/ip/0.0.0.0/ipbits/0/expire/3581595781/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/554C960675EE78F321542C90524C3C453AFBA7A9.80929444B14E5883B25E8F24EB5BCDBDFEA82C29/key/ck2/file/file.m4v";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_vid_ID_mp4_160x600.Stream_Url = "";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_vid_ID_webm_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_vid_ID_webm_160x600.Type = "video";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_vid_ID_webm_160x600.Progressive_Url = "https://gcdn.2mdn.net/videoplayback/id/c8cb372840318313/itag/15/source/doubleclick/ratebypass/yes/mime/video%2Fwebm/acao/yes/ip/0.0.0.0/ipbits/0/expire/3581595781/sparams/id,itag,source,ratebypass,mime,acao,ip,ipbits,expire/signature/AA5032AC87276922873EB7DB2B943D52FC7E72DC.1EFBAF3E38BAC666B68814E76F7CD2CD8175AA1E/key/ck2/file/file.webm";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_vid_ID_webm_160x600.Stream_Url = "";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_legal = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].endframe_copy_image_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].endframe_copy_image_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].endframe_copy_image_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37412646/20680911_20150715161955167_endframe_copy_image_160x600.png";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_overlay_160x600 = {};
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_overlay_160x600.Type = "file";
    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_overlay_160x600.Url = "https://s0.2mdn.net/ads/richmedia/studio/37307913/20680911_20150707150824448_Award_image_160.png";

    devDynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].show_learnmore_cta = "";

    Enabler.setDevDynamicContent(devDynamicContent);

    setInvocation();
};

function setInvocation(){
	ad_state = dynamicContent.Hyundai_Tier1_Feed_Example_Parent_Filter[0].Creative;
			
	//SET DYNAMIC FIELDS
	if(ad_state == "Lease"){
        logo_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].logo_image_160x600.Url;
        bg_color = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_content_bg_color_160x600;
		price_header_data = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_price_header_data_160x600;
		lease_price_data = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_price_data_160x600;
		lease_price_duration = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_price_duration_160x600;
		lease_details_text = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_details_160x600;
		vidbg_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].endframe_hero_160.Url;
		vid_ID_mp4 = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_vid_ID_mp4_160x600.Progressive_Url;
		vid_ID_webm = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_vid_ID_webm_160x600.Progressive_Url;
		legal = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].Lease_Legal;
        cta_learn_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_1_img_160x600.Url;
        cta_find_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_2_img_160x600.Url;

        endframe_image = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].endframe_copy_image_160x600.Url;
        
        cta_learn_path = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_1_URL.Url;
        cta_find_path = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].cta_2_URL.Url;
        bg_exit_path = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].background_URL.Url;

        vid_play_button_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].vid_play_button_160x600.Url;
        model = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].model_name;
        dealer_locator_model = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].dealer_locator_model;
        try{
        overlay_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].lease_overlay_160x600.Url;
        } catch(e){}

        show_learnmore_cta = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Lease[0].show_learnmore_cta;

	}

	else if(ad_state == "Award"){
        logo_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].logo_image_160x600.Url;
        bg_color = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_content_bg_color_160x600;
		award_body_data = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_body_data_160x600;
		vidbg_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].endframe_hero_img_160x600.Url;
		award_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_img_160x600.Url;
		vid_ID_mp4 = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_vid_ID_mp4_160x600.Progressive_Url;
		vid_ID_webm = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].award_vid_ID_webm_160x600.Progressive_Url;
		legal = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].Award_Legal;
        cta_learn_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_1_img_160x600.Url;
        cta_find_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_2_img_160x600.Url;

        bg_exit_path = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].background_URL.Url;
        cta_learn_path = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_1_URL.Url;
        cta_find_path = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].cta_2_URL.Url;

        vid_play_button_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].vid_play_button_160x600.Url;
        model = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].model_name;
        dealer_locator_model = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].dealer_locator_model;

        //-- ADDED: kelvin 7/21
        /* 
        * uncomment 'award_body_data' to test if award_body_data is blank or no text
        * the 'endframe_copy_image_160x600' will show and will hide all details text elements.
        */

        //award_body_data = "";
        endframe_image = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].endframe_hero_img_160x600.Url;

        show_learnmore_cta = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Award[0].show_learnmore_cta;
	}

	else if(ad_state == "APR"){
        logo_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].logo_image_160x600.Url;
        bg_color = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_content_bg_color_160x600;
		apr_header = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_apr_header_160x600;
		apr_details = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_apr_details_160x600;
		cash_header = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_cash_header_160x600;
		cash_details = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_cash_details_160x600;
		vidbg_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].endframe_hero_160x600.Url;
		vid_ID_mp4 = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_vid_ID_mp4_160x600.Progressive_Url;
		vid_ID_webm = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_cash_vid_ID_webm_160x600.Progressive_Url;
		legal = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].APR_Cash_Legal;
        cta_learn_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_1_img_160x600.Url; 
        cta_find_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_2_img_160x600.Url;

        //-- ADDED: kelvin 7/21
        /* 
        * uncomment 'apr_details' to test if apr_details is blank or no text
        * the 'endframe_copy_image_160x600' will show and will hide all details text elements.
        */

        //apr_details = "";

        apr_cash_divider_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_plus_image_160x600.Url;
        endframe_image = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].endframe_copy_image_160x600.Url;

        bg_exit_path = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].background_URL.Url;
        cta_learn_path = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_1_URL.Url;
        cta_find_path = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].cta_2_URL.Url;

        vid_play_button_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].vid_play_button_160x600.Url;
        model = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].model_name;
        dealer_locator_model = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].dealer_locator_model;

        try{
        overlay_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].apr_overlay_160x600.Url;
        } catch(e){}

        show_learnmore_cta = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_APR[0].show_learnmore_cta;
	}
	
    else if(ad_state == "Cashback"){
        logo_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].logo_image_160x600.Url;
        bg_color = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_content_bg_color_160x600;
		cash_back_header_text = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_header_160x600;
		cash_back_details_text = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_details_160x600;
		cash_back_details_term = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_details_term_160x600;
		vidbg_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].endframe_hero_160x600.Url;
		vid_ID_mp4 = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_vid_ID_mp4_160x600.Progressive_Url;
		vid_ID_webm = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_vid_ID_webm_160x600.Progressive_Url;
		legal = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_legal;
        cta_learn_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_1_img_160x600.Url;         
        cta_find_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_2_img_160x600.Url;

        endframe_image = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].endframe_copy_image_160x600.Url;

        bg_exit_path = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].background_URL.Url;
        cta_learn_path = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_1_URL.Url;
        cta_find_path = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cta_2_URL.Url;

        vid_play_button_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].vid_play_button_160x600.Url;
        model = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].model_name;
        dealer_locator_model = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].dealer_locator_model;

        try{
        overlay_img = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].cash_back_overlay_160x600.Url;
        } catch(e){}

        show_learnmore_cta = dynamicContent.Hyundai_Tier1_Feed_Example_Creative_Cash_Back[0].show_learnmore_cta;

        //-- ADDED: kelvin 7/21
        /* 
        * uncomment 'cash_back_details_text' to test if cash_back_details_text is blank or no text
        * the 'endframe_copy_image_160x600' will show and will hide all details text elements.
        */

        //cash_back_details_text = "";
	}

	getFeedData();
};

function getFeedData(e){
	// AJAX get Feed Data :: data object model is defined above in vars declaration 'dataObj'
	feedDataSuccess(e);
}

function feedDataSuccess(e){
    // Run ad per normal after data feed propagation
	setElements();
	
	configureSetState();
	
	runAd();

    cta1_check();
    cta2_check();

    setDealerType();
}

function runAd(){
	//Add listeners
	
	initLegalButton();
	
	initVideo(); 
	
	animate();
}

function animate(){
	
	if(ad_state == "Lease"){
		
		setTimeout( function(){hero_image.className = "hero-image-animIn";}, 100);
		
		setTimeout( function(){legal_button.className = "legal-button-animIn";}, 50);
		
		setTimeout( function(){lease_content.className = "lease-content-animIn";}, 100);
	
		setTimeout( function(){cta_learn.className = "cta-learn-animIn";}, 150);
	
		setTimeout( function(){cta_find.className = "cta-find-animIn";}, 200);

        setTimeout( function(){cta1.className = "cta1-animIn";}, 150);
    
        setTimeout( function(){cta2.className = "cta2-animIn";}, 200);
	
		setTimeout( function(){logo.className = "logo-animIn";}, 100);

        setTimeout( function(){vehicle_name.className = "logo-animIn";}, 100);

        setTimeout( addListeners(), 500);
		
	} else if(ad_state == "Award"){
		
		setTimeout( function(){hero_image.className = "hero-image-animIn";}, 100);
		
		setTimeout( function(){legal_button.className = "legal-button-animIn";}, 50);
		
		setTimeout( function(){award_info.className = "award-info-animIn";}, 100);
	
		setTimeout( function(){cta_learn.className = "cta-learn-animIn";}, 150);
	
		setTimeout( function(){cta_find.className = "cta-find-animIn";}, 200);

        setTimeout( function(){cta1.className = "cta1-animIn";}, 150);
    
        setTimeout( function(){cta2.className = "cta2-animIn";}, 200);
	
		setTimeout( function(){logo.className = "logo-animIn";}, 100);

        setTimeout( function(){vehicle_name.className = "logo-animIn";}, 100);

        setTimeout( addListeners(), 500);
		
	} else if(ad_state == "APR"){
		
		setTimeout( function(){hero_image.className = "hero-image-animIn";}, 100);
		
		setTimeout( function(){legal_button.className = "legal-button-animIn";}, 50);
		
		setTimeout( function(){apr_cash_content.className = "apr-cash-content-animIn";}, 100);
	
		setTimeout( function(){cta_learn.className = "cta-learn-animIn";}, 150);
	
		setTimeout( function(){cta_find.className = "cta-find-animIn";}, 200);

        setTimeout( function(){cta1.className = "cta1-animIn";}, 150);
    
        setTimeout( function(){cta2.className = "cta2-animIn";}, 200);
	
		setTimeout( function(){logo.className = "logo-animIn";}, 100);

        setTimeout( function(){vehicle_name.className = "logo-animIn";}, 100);

        setTimeout( addListeners(), 500);

		
	} else if(ad_state == "Cashback"){
		
		setTimeout( function(){hero_image.className = "hero-image-animIn";}, 100);
		
		setTimeout( function(){legal_button.className = "legal-button-animIn";}, 50);
		
		setTimeout( function(){cash_back_content.className = "cash-back-content-animIn";}, 100);
	
		setTimeout( function(){cta_learn.className = "cta-learn-animIn";}, 150);
	
		setTimeout( function(){cta_find.className = "cta-find-animIn";}, 200);

        setTimeout( function(){cta1.className = "cta1-animIn";}, 150);
    
        setTimeout( function(){cta2.className = "cta2-animIn";}, 200);
	
		setTimeout( function(){logo.className = "logo-animIn";}, 100);

        setTimeout( function(){vehicle_name.className = "logo-animIn";}, 100);

        setTimeout( addListeners(), 500);
		
	}

 
}

function setElements(){
	// get all element dom refs
    container = document.getElementById("container-dc");
	logo = document.getElementById("logo");
	legal_panel = document.getElementById("legal-panel");
	legal_button = document.getElementById("legal-button");
	bg_exit = document.getElementById('background-exit-dc');
	cta_learn = document.getElementById("cta-learn");
	cta_find = document.getElementById("cta-find");
	vehicle_name = document.getElementById("vehicle-name");
	hero_image = document.getElementById("hero-image");
	hero_bg_img = document.getElementById("hero-bg-img");
	vidplayer = document.getElementById("vidplayer");
	vid_play_button = document.getElementById("vid-play-button");
	
	lease_content = document.getElementById("lease-content");
	lease_header = document.getElementById("lease-header");
	lease_price = document.getElementById("lease-price");
	lease_details = document.getElementById("lease-details");
	
	award_info = document.getElementById("award-info");
	award_info_text = document.getElementById("award-info-text");
	award_content = document.getElementById("award-content");
	
	apr_cash_content = document.getElementById("apr-cash-content");
	apr_cash_apr_header = document.getElementById("apr-cash-apr-header");
	apr_cash_apr_detail = document.getElementById("apr-cash-apr-detail");
	apr_cash_cash_header = document.getElementById("apr-cash-cash-header");
	apr_cash_cash_detail = document.getElementById("apr-cash-cash-detail");
    apr_cash_divider = document.getElementById("apr-cash-divider");

    //-- ADDED: kelvin 7/21
    copy_bg_img = document.getElementById("copy-bg-img");
	
	cash_back_content = document.getElementById("cash-back-content");
	cash_back_header = document.getElementById("cash-back-header");
	cash_back_details = document.getElementById("cash-back-details");
}

function configureSetState(){
	//legal = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.";
	
    if(ad_state == "Lease"){
		lease_content.style.display = "block";
        container.style.background = bg_color;
        logo.innerHTML = '<img src="' + logo_img + '" />';
        vehicle_name.innerHTML = model;
		hero_bg_img.innerHTML = '<img src="' + vidbg_img + '" />';
		lease_header.innerHTML = price_header_data;
		lease_price.innerHTML = '<span class="price">' + lease_price_data + '</span><span class="duration">' + lease_price_duration + '</span>';
		lease_details.innerHTML = lease_details_text;
		legal_panel.innerHTML = legal;
        cta1.innerHTML = '<img src="' + cta_learn_img + '" />';
        cta2.innerHTML = '<img src="' + cta_find_img + '" />';
		vidID_mp4 = vid_ID_mp4;
		vidID_webm = vid_ID_webm;
        //copy_bg_img.style.visibility = "hidden";

        if(overlay_img){
            award_content.innerHTML = '<img src="' + overlay_img + '" />';
        }

        if(lease_details_text == ""){
            lease_price.style.visibility = "hidden";
            lease_details.style.visibility = "hidden";
            lease_header.style.visibility = "hidden";
        }
        else{
            copy_bg_img.style.visibility = "hidden";
        }

	} else if(ad_state == "Award"){
		award_info.style.display = "block";
        container.style.background = bg_color;
        logo.innerHTML = '<img src="' + logo_img + '" />';
        vehicle_name.innerHTML = model;
		hero_bg_img.innerHTML = '<img src="' + vidbg_img + '" />';
		award_info_text.innerHTML = award_body_data;
		legal_panel.innerHTML = legal;
		award_content.innerHTML = '<img src="' + award_img + '" />';
        cta1.innerHTML = '<img src="' + cta_learn_img + '" />';
        cta2.innerHTML = '<img src="' + cta_find_img + '" />';
		vidID_mp4 = vid_ID_mp4;
		vidID_webm = vid_ID_webm;

        if(award_body_data == ""){
            award_info_text.style.visibility = "hidden";
        }else{
            copy_bg_img.style.visibility = "hidden";
        }
       

	} else if(ad_state == "APR"){
        container.style.background = bg_color;
        logo.innerHTML = '<img src="' + logo_img + '" />';
        vehicle_name.innerHTML = model;
		hero_bg_img.innerHTML = '<img src="' + vidbg_img + '" />';
        apr_cash_divider.innerHTML = '<img src="' +apr_cash_divider_img+ '"/>';
		legal_panel.innerHTML = legal;
		vidID_mp4 = vid_ID_mp4;
		vidID_webm = vid_ID_webm;
		apr_cash_apr_header.innerHTML = apr_header;
		apr_cash_apr_detail.innerHTML = apr_details;
		apr_cash_cash_header.innerHTML = cash_header;
		apr_cash_cash_detail.innerHTML = cash_details;
        cta1.innerHTML = '<img src="' + cta_learn_img + '" />';
        cta2.innerHTML = '<img src="' + cta_find_img + '" />';

        if(overlay_img){
            award_content.innerHTML = '<img src="' + overlay_img + '" />';
        }

        //-- ADDED: kelvin 7/21
        if(apr_details == ""){
            console.log("-- no values -- " + apr_cash_divider);
            apr_cash_apr_header.style.visibility = "hidden";
            apr_cash_apr_detail.style.visibility = "hidden";
            apr_cash_divider.style.visibility = "hidden";
            apr_cash_cash_header.style.visibility = "hidden";
            apr_cash_cash_detail.style.visibility = "hidden";
        }else{
            copy_bg_img.style.visibility = "hidden";
        }

	} else if(ad_state == "Cashback"){
        container.style.background = bg_color;
        logo.innerHTML = '<img src="' + logo_img + '" />';
        vehicle_name.innerHTML = model;
		hero_bg_img.innerHTML = '<img src="' + vidbg_img + '" />';
		legal_panel.innerHTML = legal;
        cta1.innerHTML = '<img src="' + cta_learn_img + '" />';
        cta2.innerHTML = '<img src="' + cta_find_img + '" />';
		vidID_mp4 = vid_ID_mp4;
		vidID_webm = vid_ID_webm;
		cash_back_header.innerHTML = cash_back_header_text;
		cash_back_details.innerHTML = '<div>' + cash_back_details_text + '</div>' + '<div class="cash-back-details-terms">' + cash_back_details_term + '</div>';

        if(overlay_img){
            award_content.innerHTML = '<img src="' + overlay_img + '" />';
        }
        

        //-- ADDED: kelvin 7/21
        if(cash_back_details_text == ""){
            cash_back_header.style.visibility = "hidden";
            cash_back_details.style.visibility = "hidden";
        }else{
            copy_bg_img.style.visibility = "hidden";
        }
	}
	
	// vehicle_name.innerHTML = model;
	vid_play_button.innerHTML = '<img src="' + vid_play_button_img + '" />';

    //-- ADDED: kelvin 7/21
    copy_bg_img.innerHTML = '<img src="' + endframe_image + '" />';
	
}

//Add Event Listeners
addListeners = function(e) {
	//bg_exit.addEventListener('touchEnd', bgExitHandler, false);
	//bg_exit.addEventListener('click', bgExitHandler, false);

    //cta1.addEventListener('touchEnd', bgExitHandler, false);
    //cta1.addEventListener('click', bgExitHandler, false);

    //cta2.addEventListener('touchEnd', bgExitHandler, false);
    //cta2.addEventListener('click', bgExitHandler, false);

	cta_learn.addEventListener('touchEnd', learnButtonHandler, false);
	cta_learn.addEventListener('click', learnButtonHandler, false);
	cta_learn.addEventListener('mouseenter', ctaButtonOver, false);
	cta_learn.addEventListener('mouseleave', ctaButtonOut, false);
	
    // revised for 'dealerOverHandler' (below) for dealer locator :: IWA :: 9.10.15
	/*cta_find.addEventListener('touchEnd', findButtonHandler, false);
	/cta_find.addEventListener('click', findButtonHandler, false);*/
	//cta_find.addEventListener('mouseenter', ctaButtonOver, false);
	//cta_find.addEventListener('mouseleave', ctaButtonOut, false);
};

initVideo = function(){
    
    var mp4 = '<source type="video/mp4" src="' + vidID_mp4 +'" />';
    var webm = '<source type="video/webm" src="' + vidID_webm +'" />';

    hero_image.style.zIndex = "12";
    bg_exit.style.zIndex = "11"
    
    //vidplayer.innerHTML = '<video id="videoEl" autoplay="autoplay">' + mp4 + webm + '</video>';
    vidplayer.innerHTML = '<video id="videoEl" autoplay="autoplay">' + mp4 + webm + '</video>';
    //vidplayer.innerHTML = '<video id="videoEl" controls>' + mp4 + webm + '</video>';
    
    videoEl = document.getElementById("videoEl");
    // REVISED for latest 5.17.16
    //videoEl.style.display = "block";
    videoEl.style.display = "none";
    
    Enabler.loadModule(studio.module.ModuleId.VIDEO, function() {
        studio.video.Reporter.attach('my_video', videoEl);
    });

    videoEl.addEventListener('play', videoPlayHandler, false);
    videoEl.addEventListener('ended', videoEndHandler, false);
    videoEl.addEventListener('pause', videoPauseHandler, false);
    videoEl.addEventListener('timeupdate', timeUpdate);

    // for older(vers?) ipads
    //document.getElementsByTagName('video')[0].play();
    
    hero_image.addEventListener("touchEnd", handleVideoPlay, false);
    hero_image.addEventListener("click", handleVideoPlay, false);
}

handleVideoPlay = function(){
    document.getElementsByTagName('video')[0].play();
}

videoPlayHandler = function(e) {
    
    videoEl.style.display = "block";
    hero_bg_img.style.display = "none";
    hero_image.style.zIndex = "11";
    bg_exit.style.zIndex = "12"
    award_content.style.zIndex = "4";
    vid_play_button.style.zIndex = "2";
    hero_bg_img.style.zIndex = "1";
    vidplayer.style.zIndex = "3";
    //document.getElementsByTagName('video')[0].play();
    if (check_complete)
        {
            counters(5);
            check_complete = false;
        };

    counters(0);
    Enabler.startTimer("Video Timer");
};

var _25 = false, 
    _50 = false,
    _75 = false;

var vidcurr,
    viddur,
    vidper;

function timeUpdate () {
        vidcurr = videoEl.currentTime,
        viddur = videoEl.duration,
        vidper = Math.floor((vidcurr / viddur) * 100);

    switch(vidper) {
        case 25:
        case 26:
             if(!_25){_25=true;Enabler.counter("Video_25");}
        break;
        case 50:
        case 51:
             if(!_50){_50=true;Enabler.counter("Video_50");}
        break;
        case 75:
        case 76:
             if(!_75){_75=true;Enabler.counter("Video_75");}
        break;
        default:
    }

    console.log(vidper);

};

function videoEndHandler(e){
    //document.exitFullscreen();
    videoEl.style.display = "none";
    check_complete = true;
    hero_image.style.zIndex = "12";
    bg_exit.style.zIndex = "11";
    hero_bg_img.style.display = "block";
    vid_play_button.style.display = "block";
    award_content.style.zIndex = "4";
    vid_play_button.style.zIndex = "3";
    hero_bg_img.style.zIndex = "2";
    vidplayer.style.zIndex = "1";
    Enabler.stopTimer('Video Timer');
    videoEl.pause();
    videoEl.currentTime = 0;
    counters(4);
    _25 = false;
    _50 = false;
    _75 = false;
    try {
        document.getElementsByTagName('video')[0].webkitExitFullscreen();
    } catch(e){
        //
    }
}

function videoPauseHandler(e){
    //videoEl.style.display = "none";
    check_complete = true;
    hero_image.style.zIndex = "12";
    bg_exit.style.zIndex = "11";
    hero_bg_img.style.display = "block";
    vid_play_button.style.display = "block";
    award_content.style.zIndex = "4";
    vid_play_button.style.zIndex = "3";
    hero_bg_img.style.zIndex = "2";
    vidplayer.style.zIndex = "1";
    _25 = false;
    _50 = false;
    _75 = false;
}

showLegalPanel = function(e){
	legal_panel.className = "show-legal";
    legal_button.style.display = "none";
}

hideLegalPanel = function(e){
	legal_panel.className = "hide-legal";
    legal_button.style.display = "block";
}

initLegalButton = function(){
	legal_panel.addEventListener("touchEnd", hideLegalPanel, false);
    legal_panel.addEventListener("click", hideLegalPanel, false);
    //legal_button.addEventListener("click", hideLegalPanel, false);
    legal_button.addEventListener("touchEnd", showLegalPanel, false);
    legal_button.addEventListener("click", showLegalPanel, false);
    
    //legal_button.addEventListener("mouseover", showLegalPanel, false);
    legal_panel.addEventListener("mouseout", hideLegalPanel, false);  	
}

//Add exits
bgExitHandler = function(e) {
	//console.log("bg");
	exits(0);
};

learnButtonHandler = function(e) {
	//console.log("learn");
	exits(1);
};

ctaButtonOver = function(e){
	e.currentTarget.children[0].children[0].className = "shimmer shimmer-over";
}

ctaButtonOut = function(e){
	e.currentTarget.children[0].children[0].className = "shimmer-fast";
}

findButtonHandler = function(e) {
	exits(2);
};

cta1_check = function(e) {
    //console.log(cta_learn_img);
    if(!show_learnmore_cta){
        show_learnmore_cta = "";
    }
    if (cta_learn_img == "" || show_learnmore_cta.toLowerCase() !="true"){
          cta_learn.style.display = 'none';
          cta1.style.display = 'none';
          cta2.style.marginTop ="-28px";
          cta_find.style.marginTop ="-28px";
          console.log("what is show_learnmore_cta? :: " + show_learnmore_cta);
    } else if(show_learnmore_cta.toLowerCase() == "true") {
         cta_learn.style.display = 'block';
         cta2.style.marginTop ="-28px";
         cta_find.style.marginTop ="-28px";
         cta1.style.marginTop ="28px";
         cta_learn.style.marginTop ="28px";
         console.log("visible")
    }
}

cta2_check = function(e) {
    if (cta_find_img == ""){
          cta_find.style.display = 'none';
    } else {
         cta_find.style.display = 'block';
    }
}

function setDealerType(){
    if(!show_learnmore_cta){
        show_learnmore_cta = "";
    }
    if(show_learnmore_cta.toLowerCase() !="true"){
        initDealerLocator();
    } else if(show_learnmore_cta.toLowerCase() =="true") {
        dealerLocatorDual();
    }
}

//Wait for the content to load to call the start od the ad
window.onload = function(){
	if (Enabler.isInitialized()) {
	  enablerInitHandler();
	} else {
	  Enabler.addEventListener(studio.events.StudioEvent.INIT, enablerInitHandler);
	}
};	

// -- METRICS --
function exits(val) {
    switch(val){
        case 0: Enabler.exitOverride("Background_Exit", bg_exit_path); break;
        case 1: Enabler.exitOverride("CTA1_Exit", cta_find_path); break;
        case 2: Enabler.exitOverride("CTA2_Exit", cta_learn_path); break;
    }

}

function counters(val) {
    switch(val){
        case 0: Enabler.counter("Video_Play"); break;
        case 1: Enabler.counter("Video_25"); break;
        case 2: Enabler.counter("Video_50"); break;
        case 3: Enabler.counter("Video_75"); break;
        case 4: Enabler.counter("Video_Completes"); break; 
        case 5: Enabler.counter("Video_Replay"); hero_image.style.zIndex = "11"; bg_exit.style.zIndex = "12"; break;
    } 
}









// Dealer Locator Additional Functionality :: IWA : added 9.10.15

var clicked;
//var vehicle_url;
var dealer_locator_model;

var dl_cta = 'visit_website_cta.png';
var dl_border = 'border.png';
var dl_find_cta = 'find_cta_up.png';


var dealer_url;

var testing_zip = "";

var dealer1;
var dealer2;
var dealer3;
var address1;
var address2;
var address3;
var dealer1_url;
var dealer2_url;
var dealer3_url;



// SINGLE CTA DEALER LOCATOR FUNCTIONALITY

function startDL(){
    
    /*--DEALER LOCATOR (PROCESS DATA)--*/
    jQuery18302484756875783205_1438980981878 = function(data) {
        //do stuff with JSON
        
        if(data.GetDealerLocationNewJSONResult){
            if(data.GetDealerLocationNewJSONResult[0] === undefined){
                
                console.log('Server not reached.');
                
                /*--ERROR PANEL VISIBILITY--*/
                document.getElementById("error_msg").style.visibility = "visible";
                document.getElementById("dealers").style.visibility = "hidden";
                
            }else{
                
                console.log('Server reached.');
                
                /*--ERROR PANEL VISIBILITY--*/
                document.getElementById("error_msg").style.visibility = "hidden";
                document.getElementById("dealers").style.visibility = "visible";

                /*--Get Dealer URL and Exit--*/
                dealer_url = data.GetDealerLocationNewJSONResult[0].DealerUrl;

                console.log("dealer_url :: " + dealer_url + "   dealer_locator_model :: " + dealer_locator_model);

                //document.getElementById("dealer_locator").style.transitionDuration = ".25s";
                //document.getElementById("dealer_locator").style.top = "600px";

                //document.getElementById("input").value = "";
                
                // EXIT TO DEALER
                //Enabler.exitOverride('Dealer 1 Exit', "http://" + dealer_url + "/models/" + dealer_locator_model);
                    
            }
        } else {
            console.log('Server not reached.');
                
            /*--ERROR PANEL VISIBILITY--*/
            document.getElementById("error_msg").style.visibility = "visible";
            document.getElementById("dealers").style.visibility = "hidden";
        }
            
    }
}

function initDealerLocator(){

    startDL();

    /*--DEALER LOCATOR (CAPTURE DATA)--*/
    var script ;
    script = document.createElement('script');
    script.type= 'application/javascript';
    script.charset= 'utf-8';
    document.getElementsByTagName('head')[0].appendChild(script);
     
     function getDealer(zip){
        console.log('server call');
        script = document.createElement('script');
        script.type= 'application/javascript';
        script.charset= 'utf-8';
        script.src = "https://prevapp.hyundaiusa.com/DealerServiceSSL.svc/content/v2/en-US/"+zip+"/5/json?method=jQuery18302484756875783205_1438980981878&_=1438980994979"
        document.getElementsByTagName('head')[0].appendChild(script);
    }

    /*--APPENDING--*/
    //document.getElementById("legal_btn").innerHTML = legal;
    document.getElementById("close_btn").innerHTML = "close";
    document.getElementById("dealer_close_btn").innerHTML = 'x';
    document.getElementById("input_field").innerHTML = '<div id="zip_heading"><b>ZIP CODE:</b></div><div id="field"><input id="input" type="number" onkeypress="myFunction(event)"></div><div id="button"><img src="' + dl_find_cta + '"></div>';
    //document.getElementById("legal_panel").getElementsByTagName("div")[0].innerHTML = "<p>" + legal_copy + "</p>";
    //document.getElementById("logo").innerHTML = "<img src=" + logo + ">" + "<div>" + vehicle_model + "<div>";
    //document.getElementById("cta_1").innerHTML = "<img src=" + cta1 + ">";
    //document.getElementById("cta_2").innerHTML = "<img src=" + cta2 + ">";
    document.getElementById("error_msg").innerHTML = "A dealer could not <br>be found in your area. <br>Please type another <br>ZIP Code in the field above.";

    /*--CHECKS FOR BUTTON PRESS--*/
    document.getElementById("button").addEventListener("click", function() {
        getDealer(document.getElementById("input").value);
    }, false);

    /*--CHECKS FOR RETURN KEY PRESS--*/
    myFunction = function(event) {
        var x = event.which || event.keyCode;
        if(x === 13){
            //getDealer(document.getElementById("input").value);
        }else{
        }
    }

    /*--STYLING--*/
    document.getElementById("dealer_locator").className = "dealer_locator";
    //document.getElementById("dealer_1").className = "dealers";
    //document.getElementById("dealer_2").className = "dealers";
    //document.getElementById("dealer_3").className = "dealers";
    document.getElementById("dealer_close_btn").className = "dealer_close_btn";
    document.getElementById("input_panel").className = "input_panel";
    document.getElementById("input_field").className = "input_field";
    //document.getElementById("legal_panel").className = "legal_panel";
    //document.getElementById("legal").style.visibility = "hidden";
    document.getElementById("close_btn").style.visibility = "hidden";
    //document.getElementById("logo").getElementsByTagName("div")[0].className = "model_name";
    document.getElementById("dealer_locator").style.opacity = "1";
    document.getElementById("dealer_locator").style.transitionDuration = "0s";
    document.getElementById("dealer_locator").style.top = "600px";

    /*--MOUSE EVENTS--*/
    //document.getElementById("cta_1").addEventListener('mouseenter', dealerOverHandler); 
    //document.getElementById("cta-find").addEventListener('mouseenter', dealerOverHandler);

    //bg_exit.addEventListener('touchEnd', dealerOverHandler, false);
    //bg_exit.addEventListener('click', dealerOverHandler, false);

    //bg_exit.addEventListener('touchEnd', bgExitHandler, false);
    //bg_exit.addEventListener('click', bgExitHandler, false);

    cta_find.addEventListener('mouseenter', ctaButtonOver, false);
    cta_find.addEventListener('mouseleave', ctaButtonOut, false);

    bg_exit.addEventListener('mouseenter', dealerOverHandler, false);

    bg_exit.addEventListener('touchEnd', findDealerHandler, false);
    bg_exit.addEventListener('click', findDealerHandler, false);

    cta_find.addEventListener('touchEnd', findDealerHandler, false);
    cta_find.addEventListener('click', findDealerHandler, false);


    //cta_find.addEventListener('mouseenter', dealerOverHandler, false);
    //document.getElementById("cta_2").addEventListener('click', dealerExitHandler); 
    //document.getElementById("bg_group").addEventListener('click', bgExitHandler);
    document.getElementById("dealer_locator").addEventListener('mouseleave', dealerOutHandler);
    document.getElementById("dealer_locator").addEventListener('mouseover', dealerPanelOver);
    //document.getElementById("logo").addEventListener('click', logoExitHandler); 
    //document.getElementById("hl_group").addEventListener('click', bgExitHandler); 
    //document.getElementById("offer").addEventListener('click', bgExitHandler); 
    document.getElementById("input_panel").addEventListener('click', dealerOutHandler); 
    //document.getElementById("legal_btn").addEventListener('click', legal_show); 
    document.getElementById("close_btn").addEventListener('click', dealerOutHandler);  


    /*--FUNCTIONS--*/
    var bool = true;
    var initial = true;

    /*function bgExitHandler() {
        Enabler.exitOverride('Background Exit', exit_url);
        console.log('background or CTA clicked');
    }

    function logoExitHandler() {
        Enabler.exitOverride('Logo Exit', logo_url);
        console.log('logo clicked');
    }

    function dealerExitHandler() {
        Enabler.exitOverride('Dealer Exit', cta_url);
        console.log('dealer CTA clicked');
    }*/

    function findDealerHandler(){
        if(dealer_url){
            //console.log("dealer_url: " + dealer_url);
            Enabler.exitOverride('Dealer 1 Exit', "http://" + dealer_url + "/models/" + dealer_locator_model);
        } else {
            Enabler.exitOverride("CTA1_Exit", cta_find_path);
        }
        console.log("GO FIND NOW")
    }

    function dealerOverHandler() {
        
        //document.getElementById("dealer_locator").style.transitionDuration = ".25s"; 
        //document.getElementById("dealer_locator").style.top = "0px";
        
        if(initial === true){
            console.log("GETTING INITIAL DEALER DATA");
            initial = false;
            getUserZip = Enabler.getUserZipCode();
            if(testing_zip){
                getUserZip = testing_zip;
            }
            getDealer(getUserZip);
        }else{
        }
    }

    function dealerPanelOver(e){
        e.stopPropagation();
        //console.log(e.target.id + " over");
        clicked = false;
    }

    function dealerOutHandler(e) {
        
        //console.log(e.target.id + " out");
        if(clicked == true){
            
        }else{
            
            if(e.target.id == "input" || e.target.id == ""){
                
            }else{
                document.getElementById("dealer_locator").style.transitionDuration = ".25s";
                document.getElementById("dealer_locator").style.top = "600px";
            }
        }
        
    }
}









// DUAL CTA DEALER LOCATOR FUNCTIONALITY

function startDualDL(){
    
    /*--DEALER LOCATOR (PROCESS DATA)--*/
    jQuery18302484756875783205_1438980981878 = function(data) {
        //do stuff with JSON
        
        if(data.GetDealerLocationNewJSONResult[0] === undefined){
            
            console.log('Server not reached.');
            
            /*--ERROR PANEL VISIBILITY--*/
            document.getElementById("error_msg").style.visibility = "visible";
            document.getElementById("dealers").style.visibility = "hidden";
            
        }else{
            
            console.log('Server reached.');
            //console.log(data.GetDealerLocationNewJSONResult[0].DealerName);
            //console.log(data.GetDealerLocationNewJSONResult[1].DealerName);
            //console.log(data.GetDealerLocationNewJSONResult[2].DealerName);
            
            /*--ERROR PANEL VISIBILITY--*/
            document.getElementById("error_msg").style.visibility = "hidden";
            document.getElementById("dealers").style.visibility = "visible";
            
            function toTitleCase(str){
                
                return str.replace(/\w+/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                
            }
            
            /*--STORE INFORMATION FOR DEALERS--*/
            dealer1 = data.GetDealerLocationNewJSONResult[0].DealerName;
            dealer2 = data.GetDealerLocationNewJSONResult[1].DealerName;
            dealer3 = data.GetDealerLocationNewJSONResult[2].DealerName;
            address1 = toTitleCase(data.GetDealerLocationNewJSONResult[0].Address1 + "<br>" + data.GetDealerLocationNewJSONResult[0].City) + ", " + data.GetDealerLocationNewJSONResult[0].State.toUpperCase() + ", " + toTitleCase(data.GetDealerLocationNewJSONResult[0].Zip);
            address2 = toTitleCase(data.GetDealerLocationNewJSONResult[1].Address1 + "<br>" + data.GetDealerLocationNewJSONResult[1].City) + ", " + data.GetDealerLocationNewJSONResult[1].State.toUpperCase() + ", " + toTitleCase(data.GetDealerLocationNewJSONResult[1].Zip);
            address3 = toTitleCase(data.GetDealerLocationNewJSONResult[2].Address1 + "<br>" + data.GetDealerLocationNewJSONResult[2].City) + ", " + data.GetDealerLocationNewJSONResult[2].State.toUpperCase() + ", " + toTitleCase(data.GetDealerLocationNewJSONResult[2].Zip);
            dealer1_url = data.GetDealerLocationNewJSONResult[0].DealerUrl;
            dealer2_url = data.GetDealerLocationNewJSONResult[1].DealerUrl;
            dealer3_url = data.GetDealerLocationNewJSONResult[2].DealerUrl;
            //var dl_cta = 'visit_website_cta.png';
            //var dl_border = 'border.png';
            //var dl_find_cta = 'find_cta_up.png';
            
            /*--APPLY INFORMATION FOR DEALERS--*/
                            
                    document.getElementById("dealer_1").innerHTML = "<div id='dealer_1_name' class='dealer_name'></div>" + "<div id='dealer_1_address' class='dealer_address'></div>" + "<div class='dl_cta'>" + "<img src='' id='dealer_cta_1'>" + "</div>" + "</div>";
                    document.getElementById("dealer_2").innerHTML = "<div class='dl_border'>" + "<img src='' id='dl_2_border'>" + "</div>" + "<div id='dealer_2_name' class='dealer_name'></div>" + "<div id='dealer_2_address' class='dealer_address'></div>" + "<div class='dl_cta' >" + "<img src='' id='dealer_cta_2'>" + "</div>";
                    document.getElementById("dealer_3").innerHTML = "<div class='dl_border'>" + "<img src='' id='dl_3_border'>" + "</div>" + "<div id='dealer_3_name' class='dealer_name'></div>" + "<div id='dealer_3_address' class='dealer_address'></div>" + "<div class='dl_cta' >" + "<img src='' id='dealer_cta_3'>" + "</div>";
                
                function populate(){
                    
                    document.getElementById("dealer_1_name").innerHTML = dealer1;
                    document.getElementById("dealer_1_address").innerHTML = address1;
                    document.getElementById("dealer_cta_1").src = dl_cta;
                    
                    document.getElementById("dealer_2_name").innerHTML = dealer2;
                    document.getElementById("dealer_2_address").innerHTML = address2;
                    document.getElementById("dealer_cta_2").src = dl_cta;
                    document.getElementById("dl_2_border").src = dl_border;
                    
                    document.getElementById("dealer_3_name").innerHTML = dealer3;
                    document.getElementById("dealer_3_address").innerHTML = address3;
                    document.getElementById("dealer_cta_3").src = dl_cta;
                    document.getElementById("dl_3_border").src = dl_border;
                    
                    document.getElementById("dealer_1").addEventListener('click', dealerURL1);
                    document.getElementById("dealer_2").addEventListener('click', dealerURL2);
                    document.getElementById("dealer_3").addEventListener('click', dealerURL3);
                    
                    document.getElementById("dealer_3").style.height = "250px";
                    
                    //document.querySelector(".dl_cta").style.top = "65px";
            
            function dealerURL1(e){
                clicked = true; 
                document.getElementById("dealer_locator").style.transitionDuration = "0s";  
                document.getElementById("dealer_locator").style.top = "0px";
                
                Enabler.exitOverride('Dealer 1 Exit', "http://" + dealer1_url + "/models/" + dealer_locator_model);
                e.stopImmediatePropagation();
            }
                
            function dealerURL2(e){
                clicked = true;
                document.getElementById("dealer_locator").style.transitionDuration = "0s";
                document.getElementById("dealer_locator").style.top = "0px";
                
                Enabler.exitOverride('Dealer 2 Exit', "http://" + dealer2_url + "/models/" + dealer_locator_model);
                e.stopImmediatePropagation();
            
            }
                
            function dealerURL3(e){
                clicked = true;
                document.getElementById("dealer_locator").style.transitionDuration = "0s";
                document.getElementById("dealer_locator").style.top = "0px";
                
                Enabler.exitOverride('Dealer 3 Exit', "http://" + dealer3_url + "/models/" + dealer_locator_model);
                e.stopImmediatePropagation();
                
            }
            document.getElementById("dealer_cta_1").addEventListener('touchEnd', dealerURL1, false);
            document.getElementById("dealer_cta_2").addEventListener('touchEnd', dealerURL2, false);
            document.getElementById("dealer_cta_3").addEventListener('touchEnd', dealerURL3, false);
            document.getElementById("dealer_cta_1").addEventListener('click', dealerURL1, false);
            document.getElementById("dealer_cta_2").addEventListener('click', dealerURL2, false);
            document.getElementById("dealer_cta_3").addEventListener('click', dealerURL3, false);
            
            /*document.getElementById("dealer_1_address").style.top = String(document.getElementById("dealer_1_name").clientHeight) + "px";
            document.getElementById("dealer_2_address").style.top = String(document.getElementById("dealer_2_name").clientHeight) + "px";
            document.getElementById("dealer_3_address").style.top = String(document.getElementById("dealer_3_name").clientHeight) + "px";*/
            
                }
                
                setTimeout(populate, 10);
            
        }
        
    }

}

function dealerLocatorDual(){
    startDualDL();

/*--DEALER LOCATOR (CAPTURE DATA)--*/
var script ;
script = document.createElement('script');
script.type= 'application/javascript';
script.charset= 'utf-8';
document.getElementsByTagName('head')[0].appendChild(script);
 
 function getDealer(zip){
     console.log('server call');
     script = document.createElement('script');
     script.type= 'application/javascript';
     script.charset= 'utf-8';
    script.src = "https://prevapp.hyundaiusa.com/DealerServiceSSL.svc/content/v2/en-US/"+zip+"/5/json?method=jQuery18302484756875783205_1438980981878&_=1438980994979"
    document.getElementsByTagName('head')[0].appendChild(script);
}

/*--APPENDING--*/
//document.getElementById("legal_btn").innerHTML = legal;
document.getElementById("close_btn").innerHTML = "close";
document.getElementById("dealer_close_btn").innerHTML = 'x';
document.getElementById("input_field").innerHTML = '<div id="zip_heading"><b>ZIP CODE:</b></div><div id="field"><input id="input" type="number" onkeypress="myFunction(event)"></div><div id="button"><img src="' + dl_find_cta + '"></div>';
//document.getElementById("legal_panel").getElementsByTagName("div")[0].innerHTML = "<p>" + legal_copy + "</p>";
//document.getElementById("logo").innerHTML = "<img src=" + logo + ">" + "<div>" + vehicle_model + "<div>";
//document.getElementById("cta_1").innerHTML = "<img src=" + cta1 + ">";
//document.getElementById("cta_2").innerHTML = "<img src=" + cta2 + ">";
document.getElementById("error_msg").innerHTML = "A dealer could not <br>be found in your area. <br>Please type another <br>ZIP Code in the field above.";

/*--CHECKS FOR BUTTON PRESS--*/
document.getElementById("button").addEventListener("click", function() {
    getDealer(document.getElementById("input").value);
}, false);

/*--CHECKS FOR RETURN KEY PRESS--*/
myFunction = function(event) {
    var x = event.which || event.keyCode;
    if(x === 13){
        getDealer(document.getElementById("input").value);
    }else{
    }
}

/*--STYLING--*/
document.getElementById("dealer_locator").className = "dealer_locator";
document.getElementById("dealer_1").className = "dealers";
document.getElementById("dealer_2").className = "dealers";
document.getElementById("dealer_3").className = "dealers";
document.getElementById("dealer_close_btn").className = "dealer_close_btn";
document.getElementById("input_panel").className = "input_panel";
document.getElementById("input_field").className = "input_field";
//document.getElementById("legal_panel").className = "legal_panel";
//document.getElementById("legal").style.visibility = "hidden";
document.getElementById("close_btn").style.visibility = "hidden";
//document.getElementById("logo").getElementsByTagName("div")[0].className = "model_name";
document.getElementById("dealer_locator").style.opacity = "1";
document.getElementById("dealer_locator").style.transitionDuration = "0s";
document.getElementById("dealer_locator").style.top = "600px";

/*--MOUSE EVENTS--*/
//document.getElementById("cta_1").addEventListener('mouseenter', dealerOverHandler); 
//document.getElementById("cta-find").addEventListener('mouseenter', dealerOverHandler);

bg_exit.addEventListener('touchEnd', bgExitHandler, false);
bg_exit.addEventListener('click', bgExitHandler, false);

cta_find.addEventListener('touchEnd', dealerOverHandler, false);
cta_find.addEventListener('click', dealerOverHandler, false);
cta_find.addEventListener('mouseenter', dealerOverHandler, false);
//document.getElementById("cta_2").addEventListener('click', dealerExitHandler); 
//document.getElementById("bg_group").addEventListener('click', bgExitHandler);
document.getElementById("dealer_locator").addEventListener('mouseleave', dealerOutHandler);
document.getElementById("dealer_locator").addEventListener('mouseover', dealerPanelOver);
//document.getElementById("logo").addEventListener('click', logoExitHandler); 
//document.getElementById("hl_group").addEventListener('click', bgExitHandler); 
//document.getElementById("offer").addEventListener('click', bgExitHandler); 
document.getElementById("input_panel").addEventListener('click', dealerOutHandler); 
//document.getElementById("legal_btn").addEventListener('click', legal_show); 
document.getElementById("close_btn").addEventListener('click', dealerOutHandler);  


/*--FUNCTIONS--*/
var bool = true;
var initial = true;

/*function bgExitHandler() {
    Enabler.exitOverride('Background Exit', exit_url);
    console.log('background or CTA clicked');
}*/

function logoExitHandler() {
    Enabler.exitOverride('Logo Exit', logo_url);
    console.log('logo clicked');
}

function dealerExitHandler() {
    Enabler.exitOverride('Dealer Exit', cta_url);
    console.log('dealer CTA clicked');
}

function dealerOverHandler() {
    
    document.getElementById("dealer_locator").style.transitionDuration = ".25s"; 
    document.getElementById("dealer_locator").style.top = "0px";
    
    if(initial === true){
        initial = false;
        getUserZip = Enabler.getUserZipCode();
        if(testing_zip){
            getUserZip = testing_zip;
        }
        getDealer(getUserZip);
    }else{
    }
}

function dealerPanelOver(e){
    e.stopPropagation();
    //console.log(e.target.id + " over");
    clicked = false;
}

function dealerOutHandler(e) {
    
    //console.log(e.target.id + " out");
    if(clicked == true){
        
    }else{
        
        if(e.target.id == "input" || e.target.id == ""){
            
        }else{
            document.getElementById("dealer_locator").style.transitionDuration = ".25s";
            document.getElementById("dealer_locator").style.top = "600px";
        }
    }
    
}
}