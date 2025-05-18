(function(){
		/* Check status */
		var c=document.getElementById('doTest');
		var i=document.createElement('img');
		i.src='https://e6.pages.dev/img/x.png?_='+Date.now();
		i.onload=function(){c.innerHTML = "<span class='text-danger'>Unable to check!</span>";};
		i.onerror=function(){c.innerHTML = "<span class='text-success'>Enabled</span>";};
		})();
