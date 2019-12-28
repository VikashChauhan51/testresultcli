"use strict";
import arg from 'arg';
import inquirer from 'inquirer';

function parseArgumentsIntoOptions(rawArgs) {
    const args = arg(
      {
        '--path': String,
        '--skip': Boolean,
        '-p': '--path',
        '-s': '--skip',
      },
      {
        argv: rawArgs.slice(2),
      }
    );
    return {
      skipPrompts: args['--skip'] || false,
      path: args['--path'] || "",
      framework: args._[0],
      useDefaultPath:false
    };
   }
   async function promptForMissingOptions(options) {
    const defaultFramework = 'Nunit';
    if (options.skipPrompts) {
      return {
        ...options,
        framework: options.framework || defaultFramework,
      };
    }
   
    const questions = [];
    if (!options.framework) {
      questions.push({
        type: 'list',
        name: 'framework',
        message: 'Please choose which project framework to use',
        choices: ['Nunit', 'Junit'],
        default: defaultFramework,
      });
    }
   
    if (!options.path) {
      questions.push({
        type: 'confirm',
        name: 'useDefaultPath',
        message: 'Select document directory?',
        default: false,
      });
    }
   
    const answers = await inquirer.prompt(questions);
    return {
      ...options,
      framework: options.framework || answers.framework,
      useDefaultPath: options.useDefaultPath || answers.useDefaultPath,
    };
   }
export async  function cli(args) {
    let options = parseArgumentsIntoOptions(args);
    options = await promptForMissingOptions(options);
    console.log(options);
   }