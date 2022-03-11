var siteInput = document.getElementById('siteName');
var siteUrlInput = document.getElementById('siteUrl');
var siteInfo ;

if(localStorage.getItem('info')==null){
    siteInfo=[];
}else{
    siteInfo = JSON.parse(localStorage.getItem('info'));
    displaysites ();
}

function submit(){
    var sites = {
    siteName :siteInput.value,
    siteUrl :siteUrlInput.value,
}

if ((siteInput.value !="") && (siteUrlInput.value !="")){
    siteInfo.push(sites)
    displaysites ();
    localStorage.setItem("info", JSON.stringify(siteInfo));
    clearform ();
    document.getElementById('nameError').style.display ="none"
    document.getElementById('urlError').style.display ="none"
}else if ((siteInput.value =="") && (siteUrlInput.value =="")) {
        document.getElementById('nameError').style.display ="inline"
        document.getElementById('urlError').style.display ="inline"
}else if ((siteInput.value =="")) {
    document.getElementById('nameError').style.display ="inline"
}else if ((siteUrlInput.value =="")){ 
    document.getElementById('urlError').style.display ="inline"
}}

function displaysites (){
    var site =``;
    for (var i=0; i<siteInfo.length; i++){
        site+=`<div class="d-flex"><h2 class="m-4">${siteInfo[i].siteName}</h2>
		<div class="m-4">
			<a href="${siteInfo[i].siteUrl}" target="_blanck" class="btn btn-primary ms-3">visit</a>
		    <button onclick="deletesite(${i})" class="btn btn-danger ms-3">Delete</button>
		</div>
        </div>`
    }
    document.getElementById('sites').innerHTML= site;
    console.log(site);
}

function clearform (){
    siteInput.value='';
    siteUrlInput.value='';
        
}

function deletesite(index){
    siteInfo.splice(index,1);
    displaysites();
}








