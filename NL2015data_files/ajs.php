(function(){
var s = "<"+"div class=\"adiply_ad_holder\" style=\"width:160px;height:600px;margin:0;padding:0\">\n";
s += "<"+"/div>\n";
s += "<"+"script type=\"text/javascript\">\n";
s += "var adiply_divs = document.getElementsByClassName(\"adiply_ad_holder\");\n";
s += "var adiply_final_div_id = \"adiply_ad_holder_\" + Math.floor((Math.random() * 100000) + 1);\n";
s += "for(var i=0;i<"+"adiply_divs.length; i++){\n";
s += "     if(adiply_divs[i].id) continue;\n";
s += "     adiply_divs[i].setAttribute(\"id\", adiply_final_div_id);\n";
s += "     break;\n";
s += "}\n";
s += "\n";
s += "  var OX_ads = OX_ads || [];\n";
s += "  OX_ads.push({\n";
s += "     slot_id: adiply_final_div_id,\n";
s += "     auid: \"537209676\"\n";
s += "  });\n";
s += "<"+"/script>\n";
s += "<"+"script type=\"text/javascript\" src=\"http://us-ads.openx.net/w/1.0/jstag\"><"+"/script>\n";
s += "<"+"div id=\'beacon_0f1d995608\' style=\'position: absolute; left: 0px; top: 0px; visibility: hidden;\'>\n";
s += "<"+"img width=\"0\" height=\"0\" src=\"http://cat.ny.us.criteo.com/delivery/lg.php?cppv=1&cpp=bkQHc3xwejhtbHM2VzNUWTViN3FYWFREMkhtMk53V3VpN085MjM2Y1E2K2VzZzh6bVpHSVBmWE44bDdkSHNUUWpEd3F3bGNkTVNjT0szamJjdTJoMlZFNEdlUzNWZjZ4Z0lRcWgwb0UvKzhNeVVjUTZqTmRuVnFiNmxiTElwV3lWRlJwcGVtZjJrM1M2Y1dZMElNRkxyeXY1aTFRTk80aG5HaHZ0YzVMVk0rZWtlVHAwZTFHRDdTQVZJbHFjVERndWYzTnNVVnB4MkoxYk1XZFpoQUZRZjQzS2x2ZjQrTUpISDZhNndGYTl0SXB3WTE0PXw%3D\"/>\n";
s += "<"+"img width=\"0\" height=\"0\" src=\"http://rtb.metrigo.com/delivery/sync/criteo/pixel_match?redirect=http%3a%2f%2fdis.criteo.com%2frex%2fmatch.aspx%3fc%3d21%26uid%3d%25%25USER_ID%25%25\"/>\n";
s += "<"+"/div>\n";
s += "\n";
document.write(s);})();
