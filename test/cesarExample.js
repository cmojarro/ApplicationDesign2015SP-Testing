var assert = chai.assert;

describe('Cesar testing validators', function () {
	describe('isString()', function () {
		it('should return true when passed a string', function () {
			assert.isTrue(validators.isString('wowThisIsAmazing'));
		});//isString 'wow

		it('should return false when passes an array', function () {
			assert.isFalse(validators.isString([ 2, 5, 7]))
		
		}); // isString not array

	});//decrive isString

	describe('required()', function () {
			it('should return true when passed a string', function () {
				assert.isTrue(validators.required('this is a string'));
		});//it string

		it('should return false when passed a value', function () {
				assert.isFalse(validators.required());
		});// it empty
	});

	describe('lengthAtLeast()', function () {
			it('return true when passed string with 5 letters', function () {
				assert.isTrue(validators.lengthAtLeast('Chicago', 5));
			}); //return lengthatleast

			it('retun false when values fail to be 4', function () {
				assert.isFalse(validators.lengthAtLeast([1, 4], 4));
			});

	});//required description for lengthAtleast

	describe('lengthAtMost()', function() {
			it('return true when strings are < then ten ', function () {
				assert.isTrue(validators.lengthAtMost('Password', 10));
			});

			it('return false when array is > 6 indexes', function () {
				assert.isFalse(validators.lengthAtMost([1, 2,'Fixing', 4, 5, 6, 7], 6));
			});
	})
});