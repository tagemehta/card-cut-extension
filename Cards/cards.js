// AuthorName/Date/ArticleTitle/Organization/Author'sCredentials/URL/DateAcessed
var today = new Date();


function cardCompile() {
	var link = window.location.href;
	var nyt = /nytimes/gi;
	var cnbcReg = /cnbc/gi;
	var voxReg = /vox/gi;
	var reutersReg = /reuters/gi;

	// If statements for sites

	if (nyt.test(link)) {
		var card = nyTimes();
	}

	else if (cnbcReg.test(link)) {
		var card = cnbc();
	}

	else if (voxReg.test(link)) {
		var card = vox();
	}

	else if (reutersReg.test(link)) {
		var card = reuters()
	}

	else {
		console.log('Website Not Supported')
	}

	return card;


}



function nyTimes() {

		var timeFull = document.getElementsByTagName("time")[0].getAttribute("datetime");
		var auth = document.querySelector('.last-byline').textContent; 
		var time = timeFull.slice(0,10);
		var title = document.querySelector("h1.e1h9rw200").textContent;
		
		var link = window.location.href
		var card = auth + ", " + time + ", " + title + ", New York Time, " + link + ", " + today;
		console.log(card);
		card;
		// Setting Highlights
		var authStyles = document.querySelector('.last-byline')
		authStyles.style.backgroundColor = "yellow";
		var timeFullStyle = document.getElementsByTagName("time")[0];
		timeFullStyle.style.backgroundColor = "rgba(107, 240, 255, 0.53)";
		var titleStyle = document.querySelector("h1.e1h9rw200");
		titleStyle.style.backgroundColor = "rgba(107, 240, 255, 0.53)";
}
	

function cnbc() {
	var time = document.querySelector('time[data-testid="published-timestamp"]').textContent;
	var auth = document.querySelector(".Author-authorName").textContent;
	var title = document.querySelector('.ArticleHeader-headline').textContent;
	var link = window.location.href;
	var today = new Date();
	var card = auth + ", " + time + ", " + title + ", CNBC, " + link + ", " + today;
	console.log(card);
	// Setting Highlights
	var titleStyle = document.querySelector('.ArticleHeader-headline');
	titleStyle.style.backgroundColor = "rgba(107, 240, 255, 0.53)";
	var authStyle = document.querySelector(".Author-authorName");
	authStyle.style.backgroundColor  = "rgba(107, 240, 255, 0.53)";
	var timeStyle = document.querySelector('time[data-testid="published-timestamp"]');
	timeStyle.style.backgroundColor = "rgba(107, 240, 255, 0.53)";
	
}


function vox () {
	var fullTime = document.getElementsByTagName('time')[0].getAttribute('datetime');
	var time = fullTime.slice(0,9);
	var auth = document.querySelector('span.c-byline__author-name').textContent
	var title = document.querySelector('.c-page-title').textContent;
	var link = window.location.href;
	var today = new Date();
	var card = auth + ", " + time + ", " + title + ", CNBC, " + link + ", " + today;
	console.log(card);
	// Setting Highlights
	var authStyle = document.querySelector('span.c-byline__author-name');
	authStyle.style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
	var titleStyle = document.querySelector('.c-page-title');
	titleStyle.style.backgroundColor = "rgba(107, 240, 255, 0.53)";
	var timeStyle = document.querySelector('time.c-byline__item');
	timeStyle.style.backgroundColor = "rgba(107, 240, 255, 0.53)";
}

function reuters () {
	var time = document.querySelector('.ArticleHeader_date').textContent;
	var auth = document.querySelector('.BylineBar_byline').textContent;
	var title = document.querySelector('h1.ArticleHeader_headline').textContent;
	var link = window.location.href;
	var today = new Date();
	var card = auth + ", " + time + ", " + title + ", CNBC, " + link + ", " + today;
	console.log(card);
	// Setting Highlights
	var authStyle = document.querySelector('.BylineBar_byline').style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
	var titleStyle = document.querySelector('.ArticleHeader_headline').style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
	var timeStyle = document.querySelector('.ArticleHeader_date').style.backgroundColor = 'rgba(107, 240, 255, 0.53)';
}

cardCompile();