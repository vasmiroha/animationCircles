define(['plugins/HockeyAnimation'], function(CTC){
	//var instance = CTC.tests.HockeyAnimation;

	beforeEach(function () {

		this.HockeySemaphore =  CTC.tests.HockeyAnimation;
		this.instanceHockeySemaphore = this.HockeySemaphore;

		this.inputModelMock = [
			{
				'priority': 3,
				'id':"#id_2"
			},
			{
				'priority': 2,
				'id':"#id_4"
			},
			{
				'priority': 3,
				'id':"#id_1"
			},
			{
				'priority': 0,
				'id':"#id_2"
			}
			];

	});

	describe("HockeySemaphore Component", function(){
		it("CTC MUST HAVE module HockeySemaphore", function(){
			expect(this.HockeySemaphore).toBeDefined()
		});
	});


	describe("HockeySemaphore Component _ getter", function(){
		it("HockeySemaphore component MUST HAVE getter for collection component items", function(){
			expect(new this.instanceHockeySemaphore().getComponentItemsCollection).toBeDefined();
		});

		it("Getter for collection component items must RETURN Array", function(){
			expect({}.toString.call(new this.instanceHockeySemaphore().getComponentItemsCollection())).toBe("[object Array]");
		});
	});

	describe("HockeySemaphore Component _ setter", function(){
		it("HockeySemaphore component MUST HAVE setter for collection component items", function(){
			expect(new this.instanceHockeySemaphore().setComponentItemsCollection).toBeDefined();
		});

		it("If type of the parameter for setter is Array => return true", function(){
			expect(function(){
				new this.instanceHockeySemaphore().setComponentItemsCollection([])
			}).toBeTruthy();
		});

		it("If type of the parameter for setter IS NOT Array => throw error", function(){
			expect(function(){
				new this.instanceHockeySemaphore().setComponentItemsCollection('string')
			}).toThrowError();
		});

	});

	describe("HockeySemaphore Component _ extend for componentItemsCollection", function(){
		it("HockeySemaphore component MUST HAVE  method extendComponentItemsCollection", function(){
			expect(new this.instanceHockeySemaphore().extendComponentItemsCollection).toBeDefined();
		});

		it("If input param  IS NOT Array => return error", function(){
			expect(function(){
				new this.instanceHockeySemaphore().extendComponentItemsCollection('string')
			}).toThrowError();
		});

		it("If input param  length IS NOT EQUAL  => return error", function(){
			var initInstanceHockeySemaphore =  new this.instanceHockeySemaphore();
			initInstanceHockeySemaphore.setComponentItemsCollection(this.inputModelMock);

			expect(function(){
				new this.instanceHockeySemaphore().extendComponentItemsCollection([])
			}).toThrowError();
		});

	});

	describe("HockeySemaphore  Component _ Method orderComponentItemsCollection", function(){

		it("HockeySemaphore  Component MUST HAVE  method for order collection", function(){
			expect(new this.instanceHockeySemaphore()._orderComponentItemsCollection).toBeDefined();
		});

		it("If ItemsCollection IS EMPTY => throw error", function(){
			expect(function (){
				new this.instanceHockeySemaphore()._orderComponentItemsCollection()
			}).toThrowError();
		});

		it("If ItemsCollection IS NOT EMPTY => return true", function(){
		    var initInstanceHockeySemaphore =  new this.instanceHockeySemaphore();
			    initInstanceHockeySemaphore.setComponentItemsCollection(this.inputModelMock);

			expect(initInstanceHockeySemaphore._orderComponentItemsCollection()).toBe(true)
		});

	});

	describe("HockeySemaphore  Component _ Method setAnimationDelay", function(){
		it("HockeyAnimation component MUST HAVE  method for extend models in collection", function(){
			expect(new this.instanceHockeySemaphore().setAnimationDelay).toBeDefined();
		});
	});

	describe("HockeySemaphore  Component _ Method defineKeyFrameStep", function(){
		beforeEach(function(){
			this.instanceHockeySemaphore =  this.instanceHockeySemaphore;
		});

		it("HockeyAnimation component MUST HAVE  method for define keyframes step", function(){
			expect(new this.instanceHockeySemaphore().defineKeyFrameSteps).toBeDefined();
		});

		it("defineKeyFrameStep method RETURN Object", function(){
			var initInstance = new this.instanceHockeySemaphore();
				initInstance.setComponentItemsCollection(this.inputModelMock);

			expect(typeof  initInstance.defineKeyFrameSteps()).toBe('object');
		});
	});


});