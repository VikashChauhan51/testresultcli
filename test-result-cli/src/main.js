"use strict";
import chalk from 'chalk';
import fs from 'fs';
import path from 'path';
import parseString  from 'xml2js'

export async function convertResultFiles(xmlFilesDir) {
    try {
        console.log('Test result directory path is: %s',chalk.green(xmlFilesDir));
        await fs.promises.access(xmlFilesDir, fs.constants.R_OK |fs.constants.W_OK);
        console.info(chalk.green.bold('Vaild directory to go!'));
        const dir = await fs.promises.opendir(xmlFilesDir);
        for await (const dirent of dir) {
            if (dirent.isFile()&&isValidFile(dirent.name)){
               console.log('Test result file: %s',dirent.name);
             let res= await readFile(path.join(xmlFilesDir,dirent.name));
             xmlFileResponse(res);
            }
        }
      } catch (err) {
        console.error('%s', chalk.red.bold('ERROR:access denied'));
        process.exit(1);
      }
   }
   function isValidFile(fileName){
    return path.extname(fileName)===".xml";
   }
   async function readFile(filePath){
       try{
        console.log('Test result file path: %s',filePath);
         let res=await fs.promises.readFile(filePath,{encoding: 'utf-8'});
         return res;
       }
       catch (err) {
        console.error(err);
  
      }
      return '';
   }
 function xmlFileResponse(res){
  let parseString = require('xml2js').parseString; 
  parseString(res,{trim: true,attrkey :'attr',charkey:'text',normalizeTags :true},function(err,result){
    //console.log(result['test-run']);
    console.log(result['test-case']);
  });
 }