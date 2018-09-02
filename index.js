const OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');

process.stdout.write('\nChoose what you want to know/do:\na) What is the Node version -> enter ver,\nb) What is the system language -> enter lang,\nc) What is the information about user\'s operation system -> enter sys,\nd) Quit the aplication -> enter exit.\n\n');

process.stdin.on('readable', () => {
	const input = process.stdin.read();

	if (input !== null) {
		let instruction = input.toString().trim();

		switch(instruction) {
			case 'ver': 
				process.stdout.write(`The Node version is ${process.version}.\n`);
				break;
			case 'lang':
				process.stdout.write(`The system language is ${process.env.lang}.\n`);
				break;
			case 'sys':
				OSinfo.print();
				break;
			case 'exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
			default:
				process.stderr.write('Wrong intruction!\n');
		}
	}
});