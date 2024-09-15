var projectList = new Array();
var projectNum = 6;
var two = 2;
for(var i=0; i<projectNum; i++){
	projectList.push(i);
}

console.log(projectList);
const parent = document.getElementById("gallery");
for(var i=0; i<projectNum; i++){
	var onDiv=document.createElement('div')
	if(i%2==0){
		onDiv.innerHtml="(current)"
		onDiv.classList.add('thumbContainer')
		onDiv.classList.add('grid')
		document.getElementById("gallery").appendChild(onDiv);
			
			const li1 = document.createElement("li");
			var onA1=document.createElement('a');
			var onImg1=document.createElement('img');
			onImg1.src="./resources/img/" + i + ".webp"
			onA1.innerHtml = "(current)"
			onA1.href = "./" + i + ".html"
			onA1.appendChild(onImg1);
			li1.appendChild(onA1);
			onDiv.appendChild(li1);


			const li2 = document.createElement("li");
			var onA2=document.createElement('a');
			var onImg2=document.createElement('img');
			onImg2.src="./resources/img/" + (i + 1)+ ".webp"
			onA2.innerHtml = "(current)"
			onA2.href = "./" + (i + 1) + ".html"
			onA2.appendChild(onImg2);
			li2.appendChild(onA2);
			onDiv.appendChild(li2);
			
			

			
	}		
	

};