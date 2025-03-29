// import { yarg } from './args.plugin';


const runCommand = async (args: string[]) => {

    process.argv = [...process.argv, ...args];

    const { yarg } = await import('./yargs.plugin');

    return yarg;
}



describe('Test args.plugin.ts', () => {

    const originalArgv = process.argv;

    beforeEach(() => {
        process.argv = originalArgv;
        jest.resetModules();
    });



    test('should return default values', async () => {

        const argv = await runCommand(['-b', '5']);

        expect(argv).toEqual(expect.objectContaining({
            base: 5,
            limit: 10,
            show: false,
            name: 'table',
            destination: './outputs',
        }));

    });


    test('should return configuration with custom values', async () => {

        const argv = await runCommand(['-b', '8', '-l', '20', '-s', '-n', 'custom-name', '-d', 'custom-dir']);

        expect(argv).toEqual(expect.objectContaining({
            base: 8,
            limit: 20,
            show: true,
            name: 'custom-name',
            destination: 'custom-dir',
        }));



    });


});