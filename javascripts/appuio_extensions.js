$(".navbar-utility li:lt(1)").remove();
$(".dropdown-menu").prepend('<li><a href="https://account.vshn.net">Manage Account</a></li>');
$(".navbar-utility").prepend('<li class="dropdown ng-scope" ng-if="user"> \
		<a data-toggle="dropdown" class="dropdown-toggle ng-isolate-scope" href="#" aria-haspopup="true" aria-expanded="false">\
			<span class="pficon pficon-user"></span> \
			<span class="username ng-binding">Documentation / Help</span> <b class="caret"></b> \
		</a> \
		<ul class="dropdown-menu"> \
			<li><a href="http://docs.appuio.ch">APPUiO Docs</a></li> \
			<li><a href="http://forum.appuio.ch">APPUiO Support Forum</a></li> \
			<li><a href="http://docs.openshift.com/enterprise/3.1/welcome/index.html">OpenShift Docs</a></li> \
		</ul> \
	</li>');

