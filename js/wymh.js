/* (网易漫画)
[url]
^https?:\/\/api\.mh\.163.com\/getUserProfile
[host]
api.mh.163.com
*/


let path = '/getUserProfile';
var obj = JSON.parse(body)
if (url.indexOf(path) != -1) {
	obj["resCode"] = 0;
	obj["data"]["money"] = 55555;
	obj["data"]["hongbao"] = 6669;
	obj["data"]["realVipType"] = 1;
	obj["data"]["score"] = 9996;
    obj["data"]["userType"] = 1;
    obj["data"]["level"] = "VIP8";
    obj["data"]["yuepiao"] = 666;
    obj["data"]["to"] = 1895308941721;
    obj["data"]["from"] = 1548153741721;
 }
var path2="/getUserMonthlySubInfo.json"
if (url.indexOf(path2) != -1){
  obj["data"]["userType"] = 1;
};

JSON.stringify(obj)

 // Made by Meeta (网易漫画）
 // https?:\/\/api\.mh\.163.com\/getUserProfile
 // hostname = api.mh.163.com
 // https://raw.githubusercontent.com/MeetaGit/MeetaRules/master/Surge/Scripting/wymh.js

