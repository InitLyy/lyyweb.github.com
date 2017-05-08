/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 16:32:30
 * @version $Id$
 */
var hznu = [{title:"体育场",x:120.014306,y:30.295014},
{title:"寝室8",x:120.015159,y: 30.29639},
{title:"清真",x:120.017243,y: 30.2937},
{title:"恕园14",x:120.019336,y: 30.296616},
{title:"图书馆",x:120.022238,y: 30.298689},
];
var map = new BMap.Map("myMap"); 
var point = new BMap.Point(120.13, 30.255);
var hotelmarker = [];
var s = [];   
var transit = new BMap.TransitRoute(map, {
	pageCapacity: 1,    
	renderOptions: {map: map, panel: "bus"}    
});       
map.centerAndZoom(new BMap.Point(120.13, 30.255), 11); 
map.enableScrollWheelZoom();
map.addControl(new BMap.NavigationControl());   
map.addControl(new BMap.ScaleControl());    
map.addControl(new BMap.OverviewMapControl());    
map.addControl(new BMap.MapTypeControl());    
map.setCurrentCity("杭州"); 
var marker = new BMap.Marker(point);
map.addOverlay(marker);
var local = new BMap.LocalSearch(point, {
	pageCapacity: 5, 
    renderOptions: {
    map: map,
    autoViewport: true,
    panel:"result"
  }
});
local.searchNearby("宾馆", "酒店");
local.setMarkersSetCallback(function(pois){
	for(var i =0;i<pois.length;++i){
		hotelmarker[i] = pois[i].marker;
		hotelmarker[i].addEventListener("click", function(e){    
 			alert(e.point.lng + ", " + e.point.lat);
			transit.clearResults();  
			transit.search(new BMap.Point(120.019839, 30.295014), this.z.title);
		});
	}
})
var src = ["../img/hznu/hznu01.jpg","../img/hznu/hznu02.jpg","../img/hznu/hznu03.jpg","../img/hznu/hznu04.jpg","../img/hznu/hznu05.jpg"]
var btn = document.getElementById("btn");
btn.onclick=function(event) {
	/* Act on the event */
	var i;
	for( i = 0;i<hznu.length;++i){
		var address = hznu[i].title;
		var url = src[i];
		var point = new BMap.Point(hznu[i].x,hznu[i].y);
		var marker = new BMap.Marker(point);	
		var div=document.createElement("div");
			div.style.width='200px';
			div.style.height='140px';
		var img=document.createElement('img');
			img.setAttribute('src',src[i]);
			img.style.width='200px';
			img.style.height='160px';	
			div.append(address);
			div.append(img);
			map.addOverlay(marker);
			OnClick(div,marker);
	}	
};

var opts = {
  width: 300, 
  height: 200,    
  title: "<span style='color:#FF0000'>"+"地址：",
}
function OnClick(div,point){
	point.addEventListener("click",function(e){
	var p = e.target;
	var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
	var infoWindow = new BMap.InfoWindow(div,opts);
	map.openInfoWindow(infoWindow,point);
	});
}