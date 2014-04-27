(function (angular) {
'use strict';
	angular.module('ngPlanetaryJs', [])

		.service('service', ['$http', function (http) {			
			return {
				asyncDoSomething: function(useragent) {
					var apiRoute = '/api';
					var promise = http.get(apiRoute).then(function (response) {	
						return response;
					});
					return promise;
				}			

			};
        }])

		.directive('planetaryjs', ['service', function (service) {

			return {
				restrict : 'AE',
				scope: { options: '=' },				
				link : function(scope, element, attrs) {	

					var canvas = element[0];
					var middle = canvas.width/2;

					var globe = planetaryjs.planet(); 
					var plugins = scope.options.plugins;     

					// earth plugin
					globe.loadPlugin(planetaryjs.plugins.earth(plugins.earth));
					// pings
					if (plugins.pings)
						globe.loadPlugin(planetaryjs.plugins.pings(plugins.pings));
					// zoom
					if (plugins.zoom)
						globe.loadPlugin(planetaryjs.plugins.zoom(plugins.zoom));
					
					if (plugins.autorotate && plugins.autorotate.degree)
						globe.loadPlugin(autorotate(plugins.autorotate.degree));
					globe.loadPlugin(planetaryjs.plugins.drag());      

					globe.projection.scale(middle).translate([middle, middle]).rotate([0, -10, 0]);      

					if (window.devicePixelRatio == 2) {
						canvas.width = canvas.width*2;
						canvas.height = canvas.height*2;
						context = canvas.getContext('2d');
						context.scale(2, 2);
					}

					// Draw that globe!
					globe.draw(canvas);			   				   										
					
					var addPings = function(lng, lat, config) {
						if (globe.plugins.pings)
							globe.plugins.pings.add(lng, lat, config);
					};
					
					element.on('$destroy', function() {
						globe.stop();
					});
					
					function autorotate(degPerSec) {
		                // Planetary.js plugins are functions that take a `planet` instance
		                // as an argument...
		                return function(planet) {
		                  var lastTick = null;
		                  var paused = false;
		                  planet.plugins.autorotate = {
		                    pause:  function() { paused = true;  },
		                    resume: function() { paused = false; }
		                  };
		                  // ...and configure hooks into certain pieces of its lifecycle.
		                  planet.onDraw(function() {		                  	

		                    if (paused || !lastTick) {
		                      lastTick = new Date();
		                    } else {
		                      var now = new Date();
		                      var delta = now - lastTick;
		                      // This plugin uses the built-in projection (provided by D3)
		                      // to rotate the globe each time we draw it.
		                      var rotation = planet.projection.rotate();
		                      rotation[0] += degPerSec * delta / 1000;
		                      if (rotation[0] >= 180) rotation[0] -= 360;
		                      planet.projection.rotate(rotation);
		                      lastTick = now;
		                    }
		                  });
		                };
		              };  

				    scope.results = [];
				    				    				                       
					scope.fetchIt = function(type, result) {
					    
                     	//ngProgress.start();

						useragent.asyncFetchAgents( type , scope.results).then(function(d) {
						    scope.results = [];
						    for (var i=0;i<d.data.length;i++) {
						        scope.results.push({id:i, agent: d.data[i]});
						    }
							//ngProgress.stop();
							//timeout(ngProgress.complete(), 800);
						});
					};
								
				}
			};
	}]);
})(angular);
