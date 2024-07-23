import { program } from 'commander';
import greet from './commands/greet.mjs';
import fetch from './commands/fetch.mjs';
import read from './commands/read.mjs';

program
    .command('greet')
    .description('Display a greeting message')
    .action(greet);

program
    .command('fetch')
    .description('Fetch data from a public API')
    .action(fetch);

program
    .command('read <file>')
    .description('Read a specified file')
    .action(read);

program.parse(process.argv);
