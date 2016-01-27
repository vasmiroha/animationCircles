define(['inputData/HockeyAnimation_model',
	'text!templates/HockeyAnimation.hbs',
	"lodash",
	'jquery',
	'mustache'], function(Model,
						  Template,
						  _,
						  $,
						  mustache){

	var CTC = {};
	/*HockeyAnimation plugin*/


	var CTC = (function (ctc) {

		ctc.modules = ctc.modules || {};

		/*if will be test*/
		ctc.tests = ctc.tests || {};
		/*if will be test*/

		var HockeyAnimation = function(){

			var self = this;

			var _componentItemsCollection = [];

			/**
			 * delayItemsAnimation define delay before start animation at elements in component
			 */
			var delayItemsAnimation = 2;


			var holders = {
				'component': ".hockey_semaphore",
				'cssSettings': 'hockey_semaphore'
			};
			/**
			 * initialize component*/
			this.initialize = function(){
				//set data from JSON
				this.setComponentItemsCollection(Model());


				//order data
				this._orderComponentItemsCollection();

				//set animation delay
				this.setAnimationDelay();

				//set animation duration
				var countElements = this.getComponentItemsCollection().length;
				this.extendComponentItemsCollection({'animationDuration':countElements*delayItemsAnimation});

				//render data
				var data = this.getComponentItemsCollection();
				this.render(data);

				return true;
			};

			/**
			 *  Render data on page
			 *
			 *  @param data {json}
			 *  @returns {Boolean}
			 * */
			this.render = function(data){
				console.log("Init component");
				var keyFrames = this.defineKeyFrameSteps();

				var template = mustache.compile(Template)({ 'keyFrames':keyFrames,
					'result':data})
				$(holders.component).append(template);
			};

			/*<-------Method for manipulation with closure componentItemsCollection------->*/

			/**
			 * Setter for HockeySemaphore collection
			 *
			 * @param elements Array
			 * @returns {boolean}
			 */
			this.setComponentItemsCollection = function(array) {

				var newArray = [];

				_componentItemsCollection.length!=0

				try{
					array.forEach(function(item, i ){
						newArray.push(item)
					});
					_componentItemsCollection = newArray;
					return true;
				}catch(e){
					throw new Error("Incorrect input data")
				}
			};

			/**
			 * Getter for HockeySemaphore collection
			 *
			 * @returns {Array}
			 */
			this.getComponentItemsCollection = function(){
				var sortedData = _componentItemsCollection;
				return sortedData;
			};

			/**
			 * extend for HockeySemaphore collection
			 *
			 * @param collection {Array} or
			 * The collection should have the same length as the private parameter at the invocation moment
			 * */
			this.extendComponentItemsCollection = function(obj){
				var curCollection = this.getComponentItemsCollection();
				var extendedCollection = [];

				curCollection.forEach(function(item){
					var extendedModel = _.extend(item, obj);
					extendedCollection.push(extendedModel);
				});

				this.setComponentItemsCollection(extendedCollection)

			};
			/*<-------Method for manipulation with closure componentItemsCollection------->*/



			/**
			 * Order HockeyAnimation by priority
			 *
			 * @returns {Array}
			 */
			this._orderComponentItemsCollection = function(){
				var orinalArray = self.getComponentItemsCollection();

				if(orinalArray.length==0){
					throw new Error('Original  array is empty')
				}


				function compareNumeric(a, b) {
					if (a.priority > b.priority) return 1;
					if (a.priority < b.priority) return -1;
				}
				this.setComponentItemsCollection(orinalArray.sort(compareNumeric));

				return true;
			};

			/**
			 * Set delay for elements in collection according priority
			 *
			 * @returns {Array}
			 */
			this.setAnimationDelay = function(){

				var additionalSign = 's';
				var sortedArray = this.getComponentItemsCollection();

				var extendedCollection = [];

				/*
				 * extend collection model. Set field 'animDelay' wich
				 * will need for animation delay for every element in component
				 * */
				sortedArray.forEach(function(item,i){
					var extendedModel = item;
					extendedModel.animationDelay = i*delayItemsAnimation + additionalSign;
					extendedCollection.push(extendedModel);
				});

				this.setComponentItemsCollection(extendedCollection);
			};

			/**
			 * Define step for keyFrames
			 *
			 * @returns {Number}
			 * */
			this.defineKeyFrameSteps = function(){
				var colLength = this.getComponentItemsCollection().length,
					steps = {};

				steps.firstStep = function(){
					return (0.5/colLength)*100;
				}();
				steps.secondStep = function(){
					return (1/colLength)*100;
				}();

				return steps;

			};

		};


		HockeyAnimation.prototype = {
			defaults: {
				selector       : '.hockey_semaphore-wrapper',
				element_item    : '.hockey_semaphore_item-wrapper'
			}
		};

		/*	$.plugin('HockeyAnimation', HockeyAnimation);*/

		ctc.modules.HockeyAnimation = HockeyAnimation;

		/*if will be test*/
		ctc.tests.HockeyAnimation = HockeyAnimation;
		/*if will be test*/

		return ctc;
	}(CTC));

	return CTC;

	/*HockeyAnimation plugin*/
});