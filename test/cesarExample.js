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

	describe('lengthAtLeast', fucntion () {
			it('should return true when passed a a string with 5 letters', fucntion () {
				assert.isTrue()
			});
	});

	});//required description for 
});