import starterPlugin from '../src/index';
import bundle from '../dist/bundle';

runTests('Starter plugin', starterPlugin);
runTests('Build starter plugin', bundle);

function runTests(name, starterPlugin) {
	describe(name, function () {
		it('should generate numbers', function () {
			let generator = starterPlugin();

			generator.next().value.should.be.a.Number();
			generator.next().value.should.be.a.Number();
			generator.next().value.should.be.a.Number();
		});
	});
}
