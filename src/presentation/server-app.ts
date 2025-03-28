import { CreateTable } from "../domain/use-cases/create-table.use-case";
import { SaveFile } from "../domain/use-cases/save-file.use-case";

interface RunOptions {
    base: number;
    limit: number;
    showTable: boolean;
    destination: string;
    name: string;
}

export class serverApp {
    static run({ base, limit, showTable, destination, name }: RunOptions) {
        console.log('Server is running...');

        const table = new CreateTable().execute({ base, limit });
        const wasCreated = new SaveFile().execute({
            fileContent: table,
            fileDestination: destination,
            fileName: name,
        });

        if (showTable) console.log(table);

        (wasCreated)
            ? console.log('File created!')
            : console.error('File not created!');

    }
}