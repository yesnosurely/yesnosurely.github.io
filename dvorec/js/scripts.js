const options = {
  useEasing : true,
  useGrouping : true,
  separator : ' ',
  decimal : '.',
  prefix : '',
  suffix : ''
};
const counts = document.querySelectorAll('.block__num');



document.addEventListener("DOMContentLoaded", function(event) { 
	setTimeout(function(){
		counts.forEach(function(item){
			const countEnd = item.dataset.countEnd;
			const count = new CountUp(item, 0, countEnd, 0, 5, options);
			count.start();
		})
	},200)
});